import * as path from "path";
import fs from "fs-extra";
import { SpriteConfig } from "./types.js";
import { generateIconId } from "./utils.js";

/**
 * 默认配置
 */
export const defaultConfig: Partial<SpriteConfig> = {
  prefix: "",
  suffix: "",
  optimize: true,
  generateTypes: false,
  includeHidden: false,
  idGenerator: generateIconId,
  filter: () => true,
};

/**
 * 支持的配置文件名
 */
const CONFIG_FILES = [
  "sprite.config.js",
  "sprite.config.mjs",
  "sprite.config.ts",
  "icons-sprite.config.js",
  "icons-sprite.config.mjs",
  "icons-sprite.config.ts",
];

/**
 * 查找配置文件
 */
export async function findConfigFile(
  cwd: string = process.cwd()
): Promise<string | null> {
  for (const configFile of CONFIG_FILES) {
    const configPath = path.resolve(cwd, configFile);
    if (await fs.pathExists(configPath)) {
      return configPath;
    }
  }
  return null;
}

/**
 * 加载配置文件
 */
export async function loadConfigFile(
  configPath: string
): Promise<Partial<SpriteConfig>> {
  try {
    const configUrl = `file://${path.resolve(configPath)}`;
    const configModule = await import(configUrl);
    const config = configModule.default || configModule;

    if (typeof config === "function") {
      return await config();
    }

    return config;
  } catch (error) {
    throw new Error(`Failed to load config file ${configPath}: ${error}`);
  }
}

/**
 * 解析和验证配置
 */
export async function resolveConfig(
  options: Partial<SpriteConfig> = {},
  configPath?: string
): Promise<SpriteConfig> {
  let fileConfig: Partial<SpriteConfig> = {};

  // 加载配置文件
  if (configPath) {
    if (!(await fs.pathExists(configPath))) {
      throw new Error(`Config file not found: ${configPath}`);
    }
    fileConfig = await loadConfigFile(configPath);
  } else {
    const foundConfigPath = await findConfigFile();
    if (foundConfigPath) {
      fileConfig = await loadConfigFile(foundConfigPath);
    }
  }

  // 合并配置
  const config: SpriteConfig = {
    ...defaultConfig,
    ...fileConfig,
    ...options,
  } as SpriteConfig;

  // 验证必需的配置
  if (!config.input) {
    throw new Error("input is required");
  }

  if (!config.output) {
    throw new Error("output is required");
  }

  // 规范化路径
  config.input = Array.isArray(config.input)
    ? config.input.map((p) => path.resolve(p))
    : [path.resolve(config.input)];

  config.output = path.resolve(config.output);

  if (config.typesOutput) {
    config.typesOutput = path.resolve(config.typesOutput);
  }

  return config;
}

/**
 * 生成示例配置文件
 */
export function generateExampleConfig(): string {
  return `// @choiceform/icons-sprite 配置文件
export default {
  // 输入目录或文件模式
  input: './src/icons',
  
  // 输出文件路径
  output: './public/icons.svg',
  
  // ID 前缀
  prefix: 'icon-',
  
  // ID 后缀
  suffix: '',
  
  // 是否优化 SVG
  optimize: true,
  
  // 是否生成 TypeScript 类型
  generateTypes: true,
  
  // TypeScript 类型输出路径
  typesOutput: './src/types/icons.d.ts',
  
  // 自定义 ID 生成函数
  // idGenerator: (filename, filepath) => {
  //   return filename.replace(/\.svg$/, '').toLowerCase()
  // },
  
  // 文件过滤函数
  // filter: (filepath) => {
  //   return !filepath.includes('deprecated')
  // },
  
  // SVGO 配置
  // svgoConfig: {
  //   plugins: [
  //     'preset-default',
  //     { name: 'removeViewBox', active: false }
  //   ]
  // }
}
`;
}
