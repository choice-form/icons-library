import fs from "fs-extra";
import { glob } from "glob";
import path from "path";

/**
 * 基础图标生成器类，可以被各框架特定的生成器扩展
 */
export class BaseIconGenerator {
  constructor({ packageRoot, iconsDir, outputSourceDir, frameworkName }) {
    this.packageRoot = packageRoot;
    this.iconsDir = iconsDir || path.resolve(packageRoot, "../icons");
    this.outputSourceDir = outputSourceDir;
    this.indexSourceFile = path.resolve(outputSourceDir, "index.ts");
    this.metadataSourceFile = path.resolve(outputSourceDir, "metadata.ts");
    this.frameworkName = frameworkName;
  }

  /**
   * 查找所有SVG文件
   */
  async findSvgFiles() {
    console.log(`🔍 Finding SVG files in ${this.iconsDir}...`);
    return glob("**/*.svg", { cwd: this.iconsDir, absolute: true });
  }

  /**
   * 清理输出目录
   */
  async cleanOutputDir() {
    console.log("🧹 Cleaning output source directory...");
    await fs.emptyDir(this.outputSourceDir);
  }

  /**
   * 生成元数据文件
   */
  async generateMetadataFile(metadata) {
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
    await fs.writeFile(this.metadataSourceFile, metadataContent);
  }

  /**
   * 生成空索引文件（当没有找到图标时）
   */
  async generateEmptyIndexFile() {
    console.warn("⚠️ No SVG files found...");
    await fs.ensureDir(this.outputSourceDir);
    await fs.writeFile(this.indexSourceFile, `// No icons found\nexport {};\n`);
    await fs.writeFile(
      this.metadataSourceFile,
      `export const iconMetadata = [];\n`
    );
  }

  /**
   * 监听文件变化（用于开发模式）
   */
  watch(regenerateCallback) {
    console.log("👀 Watching for changes in icons directory...");
    fs.watch(
      this.iconsDir,
      { persistent: true },
      async (eventType, filename) => {
        if (
          filename &&
          (filename.endsWith(".svg") || filename.endsWith(".json"))
        ) {
          console.log(
            `🔄 Detected change in ${filename}, regenerating icons...`
          );
          try {
            await regenerateCallback();
          } catch (error) {
            console.error("🚨 Icon regeneration failed:", error);
          }
        }
      }
    );
    process.stdin.resume();
  }

  /**
   * 框架特定的生成逻辑（应该被子类重写）
   */
  async generateComponentFile(componentName, optimizedSvg, outputPath) {
    throw new Error(
      "generateComponentFile method must be implemented by subclasses"
    );
  }

  /**
   * 框架特定的索引生成逻辑（应该被子类重写）
   */
  async generateIndexFile(components) {
    throw new Error(
      "generateIndexFile method must be implemented by subclasses"
    );
  }
}
