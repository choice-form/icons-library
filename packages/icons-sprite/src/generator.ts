import * as path from "path";
import fs from "fs-extra";
import fg from "fast-glob";
import { optimizeSvg, defaultSvgoConfig } from "@choiceform/icons-core";
import type { SpriteConfig, SvgSymbol, GenerateResult } from "./types.js";
import {
  extractViewBox,
  extractSvgContent,
  isSvgFile,
  ensureDir,
  generateTypeDefinitions,
} from "./utils.js";

/**
 * SVG Sprite 生成器
 */
export class SpriteGenerator {
  private config: SpriteConfig;

  constructor(config: SpriteConfig) {
    this.config = config;
  }

  /**
   * 生成 sprite 文件
   */
  async generate(): Promise<GenerateResult> {
    const symbols = await this.collectSymbols();
    const spriteContent = this.generateSpriteContent(symbols);

    // 写入 sprite 文件
    await this.writeSpriteFile(spriteContent);

    // 生成类型文件
    let typesGenerated = false;
    let typesPath: string | undefined;

    if (this.config.generateTypes && this.config.typesOutput) {
      await this.writeTypesFile(symbols);
      typesGenerated = true;
      typesPath = this.config.typesOutput;
    }

    return {
      outputPath: this.config.output,
      symbolCount: symbols.length,
      symbols,
      typesGenerated,
      typesPath,
    };
  }

  /**
   * 收集所有 SVG 文件并转换为 symbols
   */
  private async collectSymbols(): Promise<SvgSymbol[]> {
    const files = await this.findSvgFiles();
    const symbols: SvgSymbol[] = [];

    for (const filepath of files) {
      try {
        const symbol = await this.processFile(filepath);
        if (symbol) {
          symbols.push(symbol);
        }
      } catch (error) {
        console.warn(`跳过文件 ${filepath}: ${error}`);
      }
    }

    // 按 ID 排序
    symbols.sort((a, b) => a.id.localeCompare(b.id));

    return symbols;
  }

  /**
   * 查找所有 SVG 文件
   */
  private async findSvgFiles(): Promise<string[]> {
    const inputs = Array.isArray(this.config.input)
      ? this.config.input
      : [this.config.input];

    const patterns = await Promise.all(
      inputs.map(async (input) => {
        const stat = await fs.stat(input).catch(() => null);
        if (stat?.isDirectory()) {
          return path.join(input, "**/*.svg");
        }
        return input;
      })
    );

    const files = await fg(patterns, {
      onlyFiles: true,
      absolute: true,
      ignore: this.config.includeHidden ? [] : ["**/.*", "**/.*/**"],
    });

    return files.filter(isSvgFile).filter(this.config.filter || (() => true));
  }

  /**
   * 处理单个 SVG 文件
   */
  private async processFile(filepath: string): Promise<SvgSymbol | null> {
    const filename = path.basename(filepath);
    const originalSvg = await fs.readFile(filepath, "utf-8");

    // 优化 SVG
    let svgContent = originalSvg;
    if (this.config.optimize) {
      const svgoConfig = this.config.svgoConfig || defaultSvgoConfig;
      svgContent = optimizeSvg(originalSvg, svgoConfig);
    }

    // 提取 viewBox
    const viewBox = extractViewBox(svgContent);

    // 提取 SVG 内容
    const content = extractSvgContent(svgContent);

    if (!content.trim()) {
      throw new Error("空的 SVG 内容");
    }

    // 生成 ID
    const idGenerator =
      this.config.idGenerator || ((filename) => filename.replace(/\.svg$/, ""));
    const baseId = idGenerator(filename, filepath);
    const id = `${this.config.prefix || ""}${baseId}${this.config.suffix || ""}`;

    return {
      id,
      filename,
      filepath,
      viewBox,
      content,
      originalSvg,
    };
  }

  /**
   * 生成 sprite 内容
   */
  private generateSpriteContent(symbols: SvgSymbol[]): string {
    const symbolElements = symbols
      .map((symbol) => {
        return `  <symbol id="${symbol.id}" viewBox="${symbol.viewBox}">\n    ${symbol.content.replace(/\n/g, "\n    ")}\n  </symbol>`;
      })
      .join("\n");

    return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${symbolElements}
</svg>`;
  }

  /**
   * 写入 sprite 文件
   */
  private async writeSpriteFile(content: string): Promise<void> {
    ensureDir(path.dirname(this.config.output));
    await fs.writeFile(this.config.output, content, "utf-8");
  }

  /**
   * 写入类型文件
   */
  private async writeTypesFile(symbols: SvgSymbol[]): Promise<void> {
    if (!this.config.typesOutput) return;

    const typesContent = generateTypeDefinitions(symbols);
    ensureDir(path.dirname(this.config.typesOutput));
    await fs.writeFile(this.config.typesOutput, typesContent, "utf-8");
  }
}

/**
 * 快捷生成函数
 */
export async function generateSprite(
  config: SpriteConfig
): Promise<GenerateResult> {
  const generator = new SpriteGenerator(config);
  return generator.generate();
}
