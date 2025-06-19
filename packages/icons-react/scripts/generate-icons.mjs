import { transform } from "@svgr/core";
import jsx from "@svgr/plugin-jsx";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { BaseIconGenerator } from "../../icons-core/scripts/base-generator.mjs";
import { optimizeSvg, getIconMetadata } from "../../icons-core/dist/index.js";

// --- 配置 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, ".."); // 包根目录
const workspaceRoot = path.resolve(packageRoot, "../.."); // 工作区根目录
const iconsDir = path.resolve(packageRoot, "../icons"); // 使用共享的 SVG 源文件目录
const outputSourceDir = path.resolve(packageRoot, "src/icons");
const configPath = path.resolve(workspaceRoot, "icon-config.json");

// 读取配置文件
let iconConfig = {};

try {
  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, "utf8");
    iconConfig = JSON.parse(configContent);
    console.log("📄 Loaded icon configuration from", configPath);
  } else {
    console.warn("⚠️ Config file not found at", configPath);
  }
} catch (error) {
  console.error("❌ Error loading config file:", error.message);
}

/**
 * 获取配置，如果某个配置项不存在则使用默认值
 * @param {string} key 配置项键名
 * @param {any} defaultValue 默认值
 * @returns {any} 配置值
 */
function getConfig(key, defaultValue) {
  return iconConfig[key] !== undefined ? iconConfig[key] : defaultValue;
}

// 获取图标类名
const iconClassName = getConfig("iconClassName", "choiceform-icon");

// SVGR 转换配置
const svgrConfig = {
  plugins: [jsx],
  typescript: true,
  svgo: false, // 单独运行 SVGO
  jsxRuntime: "automatic",
  exportType: "named",
  namedExport: "ReactComponent", // 临时导出名，会被替换
  jsxSvgProps: `{...props}`,
  svgProps: {
    "aria-hidden": "true",
    focusable: "false", // 防止 IE 聚焦
    className: iconClassName, // 从配置文件获取类名
  },
};

/**
 * React 图标生成器类
 */
class ReactIconGenerator extends BaseIconGenerator {
  constructor() {
    super({
      packageRoot,
      iconsDir,
      outputSourceDir,
      frameworkName: "react",
    });

    // 保存图标类名
    this.iconClassName = iconClassName;
  }

  /**
   * 生成 React 组件文件
   */
  async generateComponentFile(componentName, optimizedSvg, outputPath) {
    const componentCode = await transform(
      optimizedSvg,
      {
        ...svgrConfig,
        exportType: "named",
        namedExport: componentName,
      },
      { componentName: componentName }
    );
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, componentCode);
    return true;
  }

  /**
   * 生成索引文件
   */
  async generateIndexFile(components) {
    console.log("📝 Generating source index.ts file...");
    const indexContent =
      components
        .map((comp) => `export { ${comp.name} } from './icons/${comp.name}';`)
        .join("\n") + "\nexport { iconMetadata } from './icons/metadata';";

    await fs.ensureFile(path.resolve(this.packageRoot, "src/index.ts"));
    await fs.writeFile(
      path.resolve(this.packageRoot, "src/index.ts"),
      indexContent
    );
  }

  /**
   * 生成所有图标
   */
  async generateIcons() {
    await this.cleanOutputDir();

    const svgFiles = await this.findSvgFiles();

    if (svgFiles.length === 0) {
      await this.generateEmptyIndexFile();
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
        this.outputSourceDir,
        `${componentName}.tsx`
      );

      try {
        const svgContent = await fs.readFile(file, "utf-8");
        const optimizedSvgContent = optimizeSvg(svgContent);

        const success = await this.generateComponentFile(
          componentName,
          optimizedSvgContent,
          componentOutputPath
        );

        if (success) {
          components.push({ name: componentName, path: `./${componentName}` });
          metadata.push({
            ...iconMetadata,
          });
        }
      } catch (error) {
        console.error(`  ❌ Failed to generate ${componentName}:`, error);
      }
    }

    await this.generateIndexFile(components);
    await this.generateMetadataFile(metadata);

    console.log(
      `✨ Icon generation complete! ${components.length} components generated into src/icons.`
    );
  }
}

// --- 主逻辑和监听 ---
async function run() {
  try {
    const generator = new ReactIconGenerator();
    await generator.generateIcons();

    const watch = process.argv.includes("--watch");
    if (watch) {
      generator.watch(() => generator.generateIcons());
    }
  } catch (error) {
    console.error("🚨 Icon generation failed:", error);
    process.exit(1);
  }
}

run();
