/**
 * SVGO 配置类型
 */
export interface SvgoConfig {
  plugins: any[];
}

/**
 * SVG Symbol 元数据
 */
export interface SvgSymbol {
  /** Symbol ID */
  id: string;
  /** 原始文件名 */
  filename: string;
  /** 文件路径 */
  filepath: string;
  /** viewBox 属性 */
  viewBox: string;
  /** SVG 内容（不包含 <svg> 标签） */
  content: string;
  /** 原始 SVG 内容 */
  originalSvg: string;
}

/**
 * Sprite 生成配置
 */
export interface SpriteConfig {
  /** 输入目录或文件模式 */
  input: string | string[];
  /** 输出文件路径 */
  output: string;
  /** ID 前缀 */
  prefix?: string;
  /** ID 后缀 */
  suffix?: string;
  /** 是否优化 SVG */
  optimize?: boolean;
  /** SVGO 配置 */
  svgoConfig?: SvgoConfig;
  /** 是否生成 TypeScript 类型 */
  generateTypes?: boolean;
  /** TypeScript 类型输出路径 */
  typesOutput?: string;
  /** 自定义 ID 生成函数 */
  idGenerator?: (filename: string, filepath: string) => string;
  /** 是否包含隐藏文件 */
  includeHidden?: boolean;
  /** 文件过滤函数 */
  filter?: (filepath: string) => boolean;
}

/**
 * CLI 选项
 */
export interface CliOptions {
  input?: string;
  output?: string;
  config?: string;
  prefix?: string;
  suffix?: string;
  optimize?: boolean;
  generateTypes?: boolean;
  typesOutput?: string;
  verbose?: boolean;
  watch?: boolean;
}

/**
 * 生成结果
 */
export interface GenerateResult {
  /** 输出文件路径 */
  outputPath: string;
  /** 生成的 symbol 数量 */
  symbolCount: number;
  /** 生成的 symbol 列表 */
  symbols: SvgSymbol[];
  /** 是否生成了类型文件 */
  typesGenerated: boolean;
  /** 类型文件路径 */
  typesPath?: string;
}
