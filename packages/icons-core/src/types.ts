/**
 * 图标元数据接口
 */
export interface IconMetadata {
  name: string;
  filename: string;
  category: string;
  tags: string[];
  width: number | null;
  height: number | null;
}

/**
 * SVG优化配置
 */
export interface SvgoConfig {
  plugins: any[];
  // 其他可能的SVGO配置项
}

/**
 * 基础生成器配置
 */
export interface BaseGeneratorConfig {
  packageRoot: string;
  iconsDir?: string;
  outputSourceDir: string;
  frameworkName: string;
}
