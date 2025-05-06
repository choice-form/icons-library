#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { BaseIconGenerator } from "../../icons-core/scripts/base-generator.mjs";
import {
  optimizeSvg,
  getIconMetadata,
  getKebabCaseName,
} from "../../icons-core/dist/index.js";

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, ".."); // package root directory
const workspaceRoot = path.resolve(packageRoot, "../.."); // workspace root
const iconsDir = path.resolve(packageRoot, "../icons"); // shared SVG source dir
const outputSourceDir = path.resolve(packageRoot, "src/icons");
const configPath = path.resolve(workspaceRoot, "icon-config.json");
const indexFilePath = path.resolve(packageRoot, "src/index.ts");

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

/**
 * JavaScript icon generator class
 */
class JavaScriptIconGenerator extends BaseIconGenerator {
  constructor() {
    super({
      packageRoot,
      iconsDir,
      outputSourceDir,
      frameworkName: "js",
    });

    // 只从配置文件获取图标类名
    this.iconClassName = getConfig("iconClassName", "choiceform-icon");
  }

  /**
   * 从 SVG 字符串中提取属性
   * @param {string} svgString SVG 字符串
   * @returns {object} 属性对象
   */
  extractSvgAttrs(svgString) {
    const attrs = {};

    // 只提取SVG标签的直接属性，而非内部元素的属性
    const svgTagMatch = svgString.match(/<svg([^>]*)>/);
    if (!svgTagMatch || !svgTagMatch[1]) {
      return attrs;
    }

    const svgAttrsString = svgTagMatch[1];
    // 正则匹配所有属性
    const attrRegex = /\s([a-zA-Z0-9:_-]+)="([^"]*)"/g;
    let match;

    while ((match = attrRegex.exec(svgAttrsString)) !== null) {
      const [, name, value] = match;
      if (name !== "xmlns" && name !== "class") {
        // 排除 xmlns 和 class，它们会单独处理
        attrs[name] = value;
      }
    }

    return attrs;
  }

  /**
   * 将对象转换为字符串形式的属性对象表示
   * @param {object} attrs 属性对象
   * @returns {string} 属性对象字符串表示
   */
  generateAttrsObjectString(attrs) {
    const parts = [];

    Object.entries(attrs).forEach(([key, value]) => {
      if (key.includes("-")) {
        parts.push(`"${key}": "${value}"`);
      } else {
        parts.push(`${key}: "${value}"`);
      }
    });

    return `{${parts.join(", ")}}`;
  }

  /**
   * Create icon template
   */
  createIconTemplate(iconName, optimizedSvg, kebabName) {
    // 提取SVG标签属性
    const svgAttrs = this.extractSvgAttrs(optimizedSvg);

    // 添加默认属性（不包括class，由外部合并提供）
    const defaultAttrs = {
      xmlns: "http://www.w3.org/2000/svg",
      // 移除class属性，避免重复
    };

    // 合并属性
    const allAttrs = { ...svgAttrs, ...defaultAttrs };

    // 生成属性对象字符串
    const attrsString = this.generateAttrsObjectString(allAttrs);

    // 从 SVG 字符串中提取内容（跳过开始和结束标签）
    const svgContent = optimizedSvg
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>$/, "");

    return `import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ${kebabName} icon
 */
const ${iconName}: Icon = {
  name: '${kebabName}',
  toSvg(attrs = {}) {
    const defaultAttrs = ${attrsString};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => \`\${key}="\${value}"\`)
      .join(' ');
    
    return \`<svg \${attributesString}>${svgContent}</svg>\`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ${iconName};
`;
  }

  /**
   * 更新 index.ts 文件中的配置，从全局配置注入
   */
  async updateConfiguration() {
    if (!fs.existsSync(indexFilePath)) {
      console.warn("⚠️ index.ts file not found, skipping config update");
      return;
    }

    console.log("📝 Updating configuration in index.ts...");

    let indexContent = await fs.readFile(indexFilePath, "utf8");

    // 使用正则表达式替换配置值
    indexContent = indexContent.replace(
      /const iconConfig = \{[\s\S]*?\};/m,
      `const iconConfig = {
  iconClassName: "${this.iconClassName}"
};`
    );

    await fs.writeFile(indexFilePath, indexContent);
    console.log(
      `✅ Updated iconClassName to "${this.iconClassName}" in index.ts`
    );
  }

  /**
   * Generate a single icon file
   */
  async generateComponentFile(componentName, optimizedSvg, outputPath) {
    const kebabName = getKebabCaseName(componentName);
    const componentCode = this.createIconTemplate(
      componentName,
      optimizedSvg,
      kebabName
    );

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, componentCode);
    return true;
  }

  /**
   * Generate index file that exports all icons
   */
  async generateIndexFile(icons) {
    console.log("📝 Generating icons index.ts file...");

    const indexContent = `${icons
      .map((icon) => `import ${icon.name} from './${icon.name}';`)
      .join("\n")}

export {
  ${icons.map((icon) => icon.name).join(",\n  ")}
};

// Named exports with kebab-case names for compatibility
const iconExports = {
  ${icons.map((icon) => `'${getKebabCaseName(icon.name)}': ${icon.name}`).join(",\n  ")}
};

export default iconExports;
`;

    await fs.writeFile(this.indexSourceFile, indexContent);
  }

  /**
   * Generate all icons
   */
  async generateIcons() {
    await this.cleanOutputDir();
    await this.updateConfiguration();

    const svgFiles = await this.findSvgFiles();

    if (svgFiles.length === 0) {
      await this.generateEmptyIndexFile();
      return;
    }

    console.log(`⚙️ Generating ${svgFiles.length} icon modules...`);

    const icons = [];
    const metadata = [];

    for (const file of svgFiles) {
      // Get metadata from JSON
      const iconMetadata = await getIconMetadata(file);
      const componentName = iconMetadata.name;
      const componentOutputPath = path.resolve(
        this.outputSourceDir,
        `${componentName}.ts`
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
          icons.push({ name: componentName, path: `./${componentName}` });
          metadata.push({
            ...iconMetadata,
            optimizedSvg: optimizedSvgContent,
          });
        }
      } catch (error) {
        console.error(`  ❌ Failed to generate ${componentName}:`, error);
      }
    }

    // Generate index file and metadata
    await this.generateIndexFile(icons);
    await this.generateMetadataFile(metadata);

    console.log(
      `✨ Icon generation complete! ${icons.length} icons generated.`
    );
  }

  /**
   * Generate a typescript declaration for the package types
   */
  async generateTypesFile() {
    const typesContent = `// Auto-generated types file
import { Icon } from '../types';

// Export all icons as named exports
declare const iconExports: Record<string, Icon>;
export default iconExports;

// Export metadata
export const iconMetadata: Array<{
  name: string;
  category: string;
  tags: string[];
  filename: string;
  width: number | null;
  height: number | null;
  optimizedSvg: string;
}>;
`;

    await fs.writeFile(
      path.resolve(this.outputSourceDir, "index.d.ts"),
      typesContent
    );
  }
}

// --- Main logic and watching ---
async function run() {
  try {
    const generator = new JavaScriptIconGenerator();
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
