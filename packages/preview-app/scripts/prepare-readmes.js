#!/usr/bin/env node
/**
 * 这个脚本用于在构建之前收集所有包的README.md文件到public/readme目录
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(__filename);
const PREVIEW_APP_DIR = path.resolve(SCRIPT_DIR, "..");
const PACKAGES_DIR = path.resolve(PREVIEW_APP_DIR, "..");
const README_OUTPUT_DIR = path.resolve(PREVIEW_APP_DIR, "public", "readme");

console.log("=== README收集器 ===");
console.log(`脚本目录: ${SCRIPT_DIR}`);
console.log(`预览应用目录: ${PREVIEW_APP_DIR}`);
console.log(`所有包目录: ${PACKAGES_DIR}`);
console.log(`输出目录: ${README_OUTPUT_DIR}`);

// 包列表 - 更新此列表以包含你想要收集README的所有包
const PACKAGES = [
  "icons",
  "icons-core",
  "icons-react",
  "icons-vue",
  "icons-angular",
  "icons-solid",
  "icons-js",
  "figma-plugin",
];

// 确保输出目录存在
try {
  if (!fs.existsSync(README_OUTPUT_DIR)) {
    fs.mkdirSync(README_OUTPUT_DIR, { recursive: true });
    console.log(`✅ 创建输出目录: ${README_OUTPUT_DIR}`);
  }
} catch (error) {
  console.error(`❌ 创建输出目录失败: ${error.message}`);
  process.exit(1);
}

// 收集所有包的README文件
let collectedCount = 0;

// 使用文件查找命令寻找所有README文件
console.log("\n正在查找所有README.md文件...");
try {
  const findCmd = `find ${PACKAGES_DIR} -name 'README.md' | grep -v node_modules`;
  const foundReadmes = execSync(findCmd).toString().trim().split("\n");
  console.log(`找到${foundReadmes.length}个README.md文件:`);

  // 记录找到的所有README文件
  foundReadmes.forEach((file) => console.log(`- ${file}`));

  // 为每个包处理README
  PACKAGES.forEach((packageName) => {
    console.log(`\n处理包: ${packageName}`);

    // 先检查包是否存在
    const packageDir = path.join(PACKAGES_DIR, packageName);
    if (!fs.existsSync(packageDir)) {
      console.log(`⚠️ 包目录不存在: ${packageDir}`);
      return;
    }

    // 检查README是否存在
    const readmePath = path.join(packageDir, "README.md");
    if (!fs.existsSync(readmePath)) {
      console.log(`⚠️ README.md不存在: ${readmePath}`);
      return;
    }

    // 读取README内容
    const content = fs.readFileSync(readmePath, "utf8");

    // 写入到输出目录
    const outputFile = path.join(README_OUTPUT_DIR, `${packageName}.md`);
    fs.writeFileSync(outputFile, content, "utf8");
    console.log(`✅ 已复制README到: ${outputFile}`);
    collectedCount++;
  });

  console.log(
    `\n✅ 成功收集了 ${collectedCount}/${PACKAGES.length} 个README.md文件!`
  );

  // 如果有包缺少README，添加一个警告提示
  if (collectedCount < PACKAGES.length) {
    const missing = PACKAGES.length - collectedCount;
    console.log(`⚠️ 注意: 有 ${missing} 个包缺少README.md文件`);
  }
} catch (error) {
  console.error(`❌ 收集README文件失败: ${error.message}`);
  process.exit(1);
}
