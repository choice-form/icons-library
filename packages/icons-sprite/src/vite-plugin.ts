import type { Plugin } from "vite";
import * as path from "path";
import fs from "fs-extra";
import { generateSprite } from "./generator.js";
import { resolveConfig } from "./config.js";
import type { SpriteConfig } from "./types.js";

export interface ViteIconsSpriteOptions extends Partial<SpriteConfig> {
  /**
   * 是否在开发模式下启用
   * @default true
   */
  dev?: boolean;

  /**
   * 是否在构建模式下启用
   * @default true
   */
  build?: boolean;

  /**
   * 是否监听文件变化自动重新生成
   * @default true
   */
  watch?: boolean;
}

/**
 * Vite Icons Sprite 插件
 */
export function viteIconsSprite(options: ViteIconsSpriteOptions = {}): Plugin {
  const { dev = true, build = true, watch = true, ...spriteOptions } = options;

  let config: SpriteConfig;
  let isDevMode = false;
  let root = "";

  return {
    name: "vite-icons-sprite",

    configResolved(resolvedConfig) {
      isDevMode = resolvedConfig.command === "serve";
      root = resolvedConfig.root;
    },

    async buildStart() {
      // 跳过不需要执行的模式
      if (isDevMode && !dev) return;
      if (!isDevMode && !build) return;

      // 解析配置
      try {
        config = await resolveConfig({
          ...spriteOptions,
          // 如果没有指定输入输出，提供默认值
          input: spriteOptions.input || path.resolve(root, "src/icons"),
          output:
            spriteOptions.output || path.resolve(root, "public/icons.svg"),
        });

        // 检查输入目录是否存在
        const inputExists = Array.isArray(config.input)
          ? config.input.some((input) => fs.existsSync(input))
          : fs.existsSync(config.input);

        if (!inputExists) {
          this.warn(`Icons sprite: 输入目录不存在，跳过生成`);
          return;
        }

        // 生成 sprite
        const result = await generateSprite(config);

        this.info(
          `Icons sprite: 已生成 ${result.symbolCount} 个图标到 ${path.relative(root, result.outputPath)}`
        );

        if (result.typesGenerated && result.typesPath) {
          this.info(
            `Icons sprite: 类型文件已生成到 ${path.relative(root, result.typesPath)}`
          );
        }
      } catch (error) {
        this.error(`Icons sprite 生成失败: ${error}`);
      }
    },

    configureServer(server) {
      if (!dev || !watch) return;

      // 监听图标文件变化
      const watchPaths = Array.isArray(config?.input)
        ? config.input
        : [config?.input].filter(Boolean);

      if (watchPaths.length === 0) return;

      watchPaths.forEach((watchPath) => {
        if (fs.existsSync(watchPath)) {
          server.watcher.add(watchPath);
        }
      });

      // 文件变化时重新生成
      server.watcher.on("all", async (event, filePath) => {
        if (!config) return;

        // 检查是否是SVG文件变化
        if (!filePath.endsWith(".svg")) return;

        // 检查是否在监听的目录内
        const isInWatchPath = watchPaths.some((watchPath) => {
          return path.resolve(filePath).startsWith(path.resolve(watchPath));
        });

        if (!isInWatchPath) return;

        try {
          const result = await generateSprite(config);

          // 通知客户端重新加载
          server.ws.send({
            type: "full-reload",
          });

          server.config.logger.info(
            `Icons sprite: 检测到 ${path.relative(root, filePath)} 变化，已重新生成 ${result.symbolCount} 个图标`,
            { timestamp: true }
          );
        } catch (error) {
          server.config.logger.error(`Icons sprite 重新生成失败: ${error}`);
        }
      });
    },
  };
}

// 导出默认函数以支持不同的导入方式
export default viteIconsSprite;
