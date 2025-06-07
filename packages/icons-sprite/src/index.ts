// 主要 API 导出
export { generateSprite, SpriteGenerator } from "./generator.js";
export {
  resolveConfig,
  loadConfigFile,
  findConfigFile,
  generateExampleConfig,
} from "./config.js";
export { viteIconsSprite, type ViteIconsSpriteOptions } from "./vite-plugin.js";
export * from "./types.js";
export {
  generateIconId,
  extractViewBox,
  extractSvgContent,
  isSvgFile,
  generateTypeDefinitions,
  formatBytes,
} from "./utils.js";
