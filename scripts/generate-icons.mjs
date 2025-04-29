import { transform } from "@svgr/core";
import jsx from "@svgr/plugin-jsx";
import camelcase from "camelcase";
import fs from "fs-extra";
import { glob } from "glob";
import path from "path";
import { optimize } from "svgo";
import { fileURLToPath } from "url";

// --- 配置 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, ".."); // 包根目录
const iconsDir = path.resolve(packageRoot, "icons"); // SVG 源文件目录
const outputSourceDir = path.resolve(packageRoot, "src/icons");
const indexSourceFile = path.resolve(outputSourceDir, "index.ts");
const metadataSourceFile = path.resolve(outputSourceDir, "metadata.ts");

// SVGO 优化配置
const svgoConfig = {
  plugins: [
    {
      name: "preset-default",
      multipass: true,
      params: {
        overrides: {
          removeViewBox: false,
          convertStyleToAttrs: false,
          cleanupNumericValues: true,
          collapseGroups: true,
          mergePaths: true,
          convertStyleToAttrs: true,
          convertColors: {
            currentColor: /^#(000|000000)$|^black$/i,
          },
        },
      },
    },
    { name: "removeXMLNS" }, // 移除 xmlns 属性，React 会自动添加
  ],
};

// SVGR 转换配置
const svgrConfig = {
  plugins: [jsx],
  typescript: true,
  svgo: false, // 单独运行 SVGO
  jsxRuntime: "automatic",
  exportType: "named",
  namedExport: "ReactComponent", // 临时导出名，会被替换
  jsxSvgProps: "{...props}",
  svgProps: {
    "aria-hidden": "true",
    focusable: "false", // 防止 IE 聚焦
  },
};

// 确保组件名是有效的 PascalCase 格式
function validateComponentName(name) {
  // 检查是否已经是 PascalCase
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    // 如果不是，使用 camelcase 进行转换
    return camelcase(name, { pascalCase: true });
  }
  return name;
}

// 获取图标元数据（从JSON文件）
async function getIconMetadata(svgFile) {
  const jsonFile = svgFile.replace(/\.svg$/, ".json");

  try {
    // 检查对应的 JSON 文件是否存在
    if (await fs.pathExists(jsonFile)) {
      const jsonData = await fs.readJson(jsonFile);

      // 确保组件名是有效的 PascalCase
      const componentName = validateComponentName(jsonData.name);

      return {
        name: componentName,
        filename: jsonData.filename,
        category: jsonData.category,
        tags: jsonData.tags || [],
        width: jsonData.width,
        height: jsonData.height,
      };
    } else {
      console.warn(`⚠️ No JSON metadata found for ${path.basename(svgFile)}`);
      // 如果找不到 JSON 文件，退回到从文件名生成
      const fileName = path.basename(svgFile, ".svg");
      const componentName = validateComponentName(fileName);
      return {
        name: componentName,
        filename: fileName + ".svg",
        category: "unknown",
        tags: [],
        width: null,
        height: null,
      };
    }
  } catch (error) {
    console.error(
      `❌ Error reading metadata for ${path.basename(svgFile)}:`,
      error
    );
    const fileName = path.basename(svgFile, ".svg");
    const componentName = validateComponentName(fileName);
    return {
      name: componentName,
      filename: fileName + ".svg",
      category: "unknown",
      tags: [],
      width: null,
      height: null,
    };
  }
}

function getKebabCaseName(name) {
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
  return kebab;
}

async function generateIcons() {
  console.log("🧹 Cleaning output source directory...");
  await fs.emptyDir(outputSourceDir);

  console.log(`🔍 Finding SVG files in ${iconsDir}...`);
  const svgFiles = await glob("**/*.svg", { cwd: iconsDir, absolute: true });

  if (svgFiles.length === 0) {
    console.warn("⚠️ No SVG files found...");
    await fs.ensureDir(outputSourceDir);
    await fs.writeFile(indexSourceFile, "// No icons found\nexport {};\n");
    await fs.writeFile(metadataSourceFile, "export const iconMetadata = [];\n");
    return;
  }

  console.log(`⚙️ Generating ${svgFiles.length} icon components and data...`);

  const components = [];
  const metadata = [];

  for (const file of svgFiles) {
    // 从 JSON 获取元数据
    const iconMetadata = await getIconMetadata(file);
    const componentName = iconMetadata.name;
    const componentOutputPath = path.resolve(
      outputSourceDir,
      `${componentName}.tsx`
    );

    try {
      const svgContent = await fs.readFile(file, "utf-8");
      const { data: optimizedSvg } = optimize(svgContent, svgoConfig);

      const componentCode = await transform(
        optimizedSvg,
        {
          ...svgrConfig,
          exportType: "named",
          namedExport: componentName,
        },
        { componentName: componentName }
      );
      await fs.ensureDir(path.dirname(componentOutputPath));
      await fs.writeFile(componentOutputPath, componentCode);

      components.push({ name: componentName, path: `./${componentName}` });
      metadata.push({
        ...iconMetadata,
        optimizedSvg: optimizedSvg,
      });
    } catch (error) {
      console.error(`  ❌ Failed to generate ${componentName}:`, error);
    }
  }

  console.log("📝 Generating source index.ts file...");
  const indexContent =
    components
      .map((comp) => `export { ${comp.name} } from '${comp.path}';`)
      .join("\n") + "\nexport { iconMetadata } from './metadata';";
  await fs.writeFile(indexSourceFile, indexContent);

  console.log("📝 Generating source metadata.ts file...");
  const metadataContent = `export const iconMetadata: Array<{ 
  name: string; 
  category: string; 
  tags: string[]; 
  filename: string; 
  width: number | null;
  height: number | null;
  optimizedSvg: string; 
}> = ${JSON.stringify(metadata, null, 2)};\n`;
  await fs.writeFile(metadataSourceFile, metadataContent);

  console.log(
    `✨ Icon generation complete! ${components.length} components generated into src/icons.`
  );
}

// --- 主逻辑和监听 ---
async function run() {
  try {
    await generateIcons();
    const watch = process.argv.includes("--watch");
    if (watch) {
      console.log("👀 Watching for changes in icons directory...");
      fs.watch(iconsDir, { recursive: true }, (eventType, filename) => {
        if (
          filename &&
          (filename.endsWith(".svg") || filename.endsWith(".json"))
        ) {
          console.log(
            `🔄 Detected change in ${filename}, regenerating icons...`
          );
          generateIcons().catch((error) => {
            console.error("🚨 Icon regeneration failed:", error);
          });
        }
      });
      process.stdin.resume();
    }
  } catch (error) {
    console.error("🚨 Icon generation failed:", error);
    process.exit(1);
  }
}

run();
