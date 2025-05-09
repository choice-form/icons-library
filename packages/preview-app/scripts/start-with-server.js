// 启动脚本，确保 Node.js 服务器先启动
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 启动 Node.js 服务器
console.log("Starting Node.js server...");
const serverProcess = spawn("node", [path.join(__dirname, "server.js")], {
  stdio: "inherit",
});

// 等待服务器启动 (1秒)
setTimeout(() => {
  // 启动 Vite 开发服务器
  console.log("Starting Vite dev server...");
  const viteProcess = spawn("vite", [], {
    stdio: "inherit",
    shell: true,
  });

  // 处理进程终止
  viteProcess.on("close", (code) => {
    console.log(`Vite process exited with code ${code}`);
    serverProcess.kill();
    process.exit(code);
  });

  // 处理主进程终止信号
  process.on("SIGINT", () => {
    console.log("Shutting down all processes...");
    viteProcess.kill();
    serverProcess.kill();
    process.exit(0);
  });
}, 1000);

// 错误处理
serverProcess.on("error", (err) => {
  console.error("Failed to start Node.js server:", err);
  process.exit(1);
});
