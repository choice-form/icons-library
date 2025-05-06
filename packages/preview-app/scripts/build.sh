#!/bin/bash
# 构建preview-app的完整脚本

set -e # 如果任何命令失败则退出脚本

echo "=== 开始构建 preview-app ==="

# 步骤1: 收集README.md文件
echo "步骤1: 收集README.md文件"
node scripts/prepare-readmes.js

# 步骤2: 构建应用
echo "步骤2: 构建应用"
vite build

echo "✅ 构建完成!"
echo "构建结果在 dist/ 目录中" 