#!/usr/bin/env node
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
const outputSourceDir = path.resolve(packageRoot, "src/lib/icons");
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

/**
 * 从SVG字符串中提取属性值
 * @param {string} svgContent - SVG内容
 * @param {string} attributeName - 要提取的属性名
 * @returns {string|null} - 提取到的属性值或null
 */
function extractSvgAttribute(svgContent, attributeName) {
  const regex = new RegExp(
    `<svg[^>]*${attributeName}=["']([^"']*)["'][^>]*>`,
    "i"
  );
  const match = svgContent.match(regex);
  return match ? match[1] : null;
}

/**
 * Angular 图标生成器类
 */
class AngularIconGenerator extends BaseIconGenerator {
  constructor() {
    super({
      packageRoot,
      iconsDir,
      outputSourceDir,
      frameworkName: "angular",
    });

    // 从配置文件获取图标类名
    this.iconClassName = getConfig("iconClassName", "choiceform-icon");
  }

  /**
   * 创建 Angular 组件内容
   */
  createAngularComponent(componentName, svgContent) {
    // 从原始SVG中提取宽度、高度和viewBox
    const width = extractSvgAttribute(svgContent, "width") || "16";
    const height = extractSvgAttribute(svgContent, "height") || "16";
    const viewBox = extractSvgAttribute(svgContent, "viewBox") || "0 0 16 16";

    // 提取SVG内容，去除开闭合标签
    const innerSvgContent = svgContent
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>/, "")
      .trim();

    // 组件文件内容
    return `import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-${this.kebabCase(componentName)}',
  standalone: true,
  template: \`
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      [attr.viewBox]="viewBox || '${viewBox}'" 
      [attr.width]="width || '${width}'" 
      [attr.height]="height || '${height}'" 
      [attr.fill]="color" 
      [attr.aria-hidden]="title ? 'false' : 'true'"
      class="${this.iconClassName}"
    >
      <ng-container *ngIf="title">
        <title>{{title}}</title>
      </ng-container>
      ${innerSvgContent}
    </svg>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ${componentName}Component {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}`;
  }

  /**
   * 将驼峰命名转换为短横线命名
   */
  kebabCase(str) {
    return (
      str
        // WorkspaceTemplateSomething -> workspace-template-something
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "")
    ); // 移除开头的短横线
  }

  /**
   * 生成 Angular 组件文件
   */
  async generateComponentFile(componentName, optimizedSvg, outputPath) {
    const componentCode = this.createAngularComponent(
      componentName,
      optimizedSvg
    );
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, componentCode);
    return true;
  }

  /**
   * 生成公共 API 文件
   */
  async generatePublicApi(components) {
    console.log("📝 Generating public-api.ts file...");

    // 生成图标模块的内容
    const moduleContent = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

${components.map((comp) => `import { ${comp.name}Component } from './icons/${comp.name}';`).join("\n")}

const COMPONENTS = [
  ${components.map((comp) => `${comp.name}Component`).join(",\n  ")}
];

@NgModule({
  imports: [
    CommonModule,
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class IconsModule { }
`;

    // 生成公共 API 文件内容
    const publicApiContent = `/*
 * Public API Surface of icons-angular
 */

export * from './lib/icons-module';
${components.map((comp) => `export * from './lib/icons/${comp.name}';`).join("\n")}
export { iconMetadata } from './lib/icons/metadata';
`;

    // 写入模块文件
    await fs.ensureFile(
      path.resolve(this.packageRoot, "src/lib/icons-module.ts")
    );
    await fs.writeFile(
      path.resolve(this.packageRoot, "src/lib/icons-module.ts"),
      moduleContent
    );

    // 写入公共 API 文件
    await fs.ensureFile(path.resolve(this.packageRoot, "src/public-api.ts"));
    await fs.writeFile(
      path.resolve(this.packageRoot, "src/public-api.ts"),
      publicApiContent
    );
  }

  /**
   * 生成所有图标
   */
  async generateIcons() {
    await this.cleanOutputDir();

    const svgFiles = await this.findSvgFiles();

    if (svgFiles.length === 0) {
      await this.generateEmptyModuleFile();
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
          components.push({ name: componentName, path: `./${componentName}` });
          metadata.push({
            ...iconMetadata,
          });
        }
      } catch (error) {
        console.error(`  ❌ Failed to generate ${componentName}:`, error);
      }
    }

    // 生成公共 API 和 metadata 文件
    await this.generatePublicApi(components);
    await this.generateMetadataFile(metadata);

    console.log(
      `✨ Icon generation complete! ${components.length} components generated.`
    );
  }

  /**
   * 生成空模块文件
   */
  async generateEmptyModuleFile() {
    const emptyModuleContent = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: []
})
export class IconsModule { }
`;

    const emptyPublicApiContent = `/*
 * Public API Surface of icons-angular
 */

export * from './lib/icons-module';
export const iconMetadata = [];
`;

    await fs.ensureFile(
      path.resolve(this.packageRoot, "src/lib/icons-module.ts")
    );
    await fs.writeFile(
      path.resolve(this.packageRoot, "src/lib/icons-module.ts"),
      emptyModuleContent
    );

    await fs.ensureFile(path.resolve(this.packageRoot, "src/public-api.ts"));
    await fs.writeFile(
      path.resolve(this.packageRoot, "src/public-api.ts"),
      emptyPublicApiContent
    );
  }
}

// --- 主逻辑和监听 ---
async function run() {
  try {
    const generator = new AngularIconGenerator();
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
