import { Command } from "commander";
import * as path from "path";
import fs from "fs-extra";
import pc from "picocolors";
import { generateSprite } from "./generator.js";
import { resolveConfig, generateExampleConfig } from "./config.js";
import type { CliOptions } from "./types.js";
import { formatBytes } from "./utils.js";

const program = new Command();

program
  .name("icons-sprite")
  .description("生成 SVG sprite 文件，包含多个 symbol")
  .version("1.0.0");

// 主命令
program
  .argument("[input]", "输入目录或文件模式")
  .option("-o, --output <path>", "输出文件路径")
  .option("-c, --config <path>", "配置文件路径")
  .option("--prefix <prefix>", "ID 前缀")
  .option("--suffix <suffix>", "ID 后缀")
  .option("--no-optimize", "禁用 SVG 优化")
  .option("--generate-types", "生成 TypeScript 类型定义")
  .option("--types-output <path>", "TypeScript 类型输出路径")
  .option("-v, --verbose", "详细输出")
  .action(async (input: string | undefined, options: CliOptions) => {
    try {
      const startTime = Date.now();

      // 解析配置
      const config = await resolveConfig(
        {
          input: input || options.input,
          output: options.output,
          prefix: options.prefix,
          suffix: options.suffix,
          optimize: options.optimize !== false,
          generateTypes: options.generateTypes,
          typesOutput: options.typesOutput,
        },
        options.config
      );

      if (options.verbose) {
        console.log(pc.blue("🔧 配置:"));
        console.log(
          `  输入: ${Array.isArray(config.input) ? config.input.join(", ") : config.input}`
        );
        console.log(`  输出: ${config.output}`);
        console.log(`  优化: ${config.optimize ? "启用" : "禁用"}`);
        console.log(`  生成类型: ${config.generateTypes ? "启用" : "禁用"}`);
        if (config.typesOutput) {
          console.log(`  类型输出: ${config.typesOutput}`);
        }
        console.log();
      }

      // 生成 sprite
      console.log(pc.blue("🚀 开始生成 SVG sprite..."));
      const result = await generateSprite(config);

      const duration = Date.now() - startTime;
      const outputStats = await fs.stat(result.outputPath);

      // 成功信息
      console.log(pc.green("✅ 生成完成!"));
      console.log(
        `  📄 输出文件: ${pc.cyan(path.relative(process.cwd(), result.outputPath))}`
      );
      console.log(`  📊 文件大小: ${pc.yellow(formatBytes(outputStats.size))}`);
      console.log(
        `  🎯 Symbol 数量: ${pc.magenta(result.symbolCount.toString())}`
      );
      console.log(`  ⏱️  用时: ${pc.gray(duration + "ms")}`);

      if (result.typesGenerated && result.typesPath) {
        const typesStats = await fs.stat(result.typesPath);
        console.log(
          `  📝 类型文件: ${pc.cyan(path.relative(process.cwd(), result.typesPath))} (${formatBytes(typesStats.size)})`
        );
      }

      if (options.verbose) {
        console.log(pc.blue("\n📋 生成的 Symbols:"));
        result.symbols.forEach((symbol) => {
          console.log(`  - ${pc.cyan(symbol.id)} (${symbol.filename})`);
        });
      }
    } catch (error) {
      console.error(pc.red("❌ 生成失败:"));
      console.error(
        pc.red(error instanceof Error ? error.message : String(error))
      );
      process.exit(1);
    }
  });

// 初始化配置文件命令
program
  .command("init")
  .description("创建示例配置文件")
  .option("-f, --force", "强制覆盖已存在的配置文件")
  .action(async (options: { force?: boolean }) => {
    const configPath = path.resolve("sprite.config.js");

    if ((await fs.pathExists(configPath)) && !options.force) {
      console.error(pc.red("❌ 配置文件已存在，使用 --force 强制覆盖"));
      process.exit(1);
    }

    const configContent = generateExampleConfig();
    await fs.writeFile(configPath, configContent, "utf-8");

    console.log(pc.green("✅ 配置文件已创建:"));
    console.log(`  📄 ${pc.cyan(path.relative(process.cwd(), configPath))}`);
  });

// 解析命令行参数
program.parse(process.argv);

// 如果没有提供参数，显示帮助
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
