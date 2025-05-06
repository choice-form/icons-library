import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "readme-server",
      configureServer(server) {
        // Middleware for serving README.md files - 使用不同的API路径
        server.middlewares.use("/api/readme/:packageId", (req, res, next) => {
          const packageId = req.url?.split("/")[3];
          if (!packageId) {
            console.error("No packageId found in URL:", req.url);
            res.statusCode = 404;
            res.end("Package ID not found");
            return;
          }

          console.log(`[README Server] Request for package: ${packageId}`);

          // 检查真实的monorepo结构
          const rootDir = path.resolve(__dirname, "..", "..");
          const packagesDir = path.resolve(rootDir, "packages");

          // 优先在直接的packages/<package-id>下查找README.md
          // 仅使用真实的路径
          const possiblePaths = [
            // 直接在packages下的包
            path.resolve(packagesDir, packageId, "README.md"),
          ];

          console.log("[README Server] Checking paths:", possiblePaths);

          let readmePath = null;
          let fileExists = false;
          let fileContent = null;

          for (const p of possiblePaths) {
            console.log(`[README Server] Checking path: ${p}`);
            if (fs.existsSync(p)) {
              fileExists = true;
              console.log(`[README Server] File exists at: ${p}`);
              const stat = fs.statSync(p);
              if (!stat.isDirectory()) {
                readmePath = p;
                console.log(`[README Server] Using README from: ${readmePath}`);

                try {
                  // 直接读取文件内容而不是使用stream
                  fileContent = fs.readFileSync(readmePath, "utf8");
                  console.log(
                    `[README Server] File content length: ${fileContent.length}`
                  );
                  console.log(
                    `[README Server] First 100 chars: ${fileContent.substring(0, 100)}...`
                  );
                  break;
                } catch (err) {
                  console.error(`[README Server] Error reading file: ${err}`);
                }
              } else {
                console.log(`[README Server] Path is a directory: ${p}`);
              }
            } else {
              console.log(`[README Server] File does not exist: ${p}`);
            }
          }

          if (fileContent) {
            res.setHeader("Content-Type", "text/markdown");
            res.end(fileContent);
          } else {
            // 列出可用的README文件
            let availableReadmes: string[] = [];
            try {
              const findCmd =
                "find " +
                packagesDir +
                " -name 'README.md' | grep -v node_modules";
              const { execSync } = require("child_process");
              availableReadmes = execSync(findCmd)
                .toString()
                .trim()
                .split("\n");
              console.log(
                "[README Server] Available README files:",
                availableReadmes
              );
            } catch (err) {
              console.error(
                "[README Server] Error listing available READMEs:",
                err
              );
            }

            // 如果找不到README.md，返回详细错误信息
            console.error(
              `[README Server] README.md for ${packageId} not found in any location`
            );
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/markdown");
            res.end(
              `# ${packageId}\n\n## README.md Not Found\n\nCould not find README.md for package "${packageId}".\n\n### Checked Paths:\n${possiblePaths.map((p) => `- ${p}`).join("\n")}\n\n### Available READMEs:\n${availableReadmes.map((p) => `- ${p}`).join("\n")}`
            );
          }
        });

        // Debug endpoint to check file paths
        server.middlewares.use("/api/debug/:packageId", (req, res, next) => {
          const packageId = req.url?.split("/")[3];
          if (!packageId) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Package ID not found" }));
            return;
          }

          console.log(`[Debug] Request for package: ${packageId}`);

          // 获取项目根目录和packages目录
          const rootDir = path.resolve(__dirname, "..", "..");
          const packagesDir = path.resolve(rootDir, "packages");

          // Check different possible paths for the README.md file
          const possiblePaths = [
            // Path for the package in packages directory
            path.resolve(packagesDir, packageId, "README.md"),
          ];

          // Check if each path exists
          const pathResults = possiblePaths.map((p: string) => ({
            path: p,
            exists: fs.existsSync(p),
            isDirectory: fs.existsSync(p)
              ? fs.statSync(p).isDirectory()
              : false,
            content:
              fs.existsSync(p) && !fs.statSync(p).isDirectory()
                ? fs.readFileSync(p, "utf8").substring(0, 200) + "..."
                : null,
          }));

          // List available README files
          let availableReadmes: string[] = [];
          try {
            const findCmd =
              "find " +
              packagesDir +
              " -name 'README.md' | grep -v node_modules";
            const { execSync } = require("child_process");
            availableReadmes = execSync(findCmd).toString().trim().split("\n");
          } catch (err) {
            console.error("[Debug] Error listing available READMEs:", err);
          }

          // List the directory contents if the package directory exists
          let dirContents = null;
          const packageDir = path.resolve(packagesDir, packageId);

          if (
            fs.existsSync(packageDir) &&
            fs.statSync(packageDir).isDirectory()
          ) {
            try {
              dirContents = {
                directory: packageDir,
                files: fs.readdirSync(packageDir),
              };
            } catch (err) {
              console.error(
                `[Debug] Error reading directory ${packageDir}:`,
                err
              );
            }
          }

          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify(
              {
                packageId,
                rootDir,
                packagesDir,
                cwd: process.cwd(),
                dirname: __dirname,
                pathResults,
                availableReadmes,
                dirContents,
              },
              null,
              2
            )
          );
        });

        // Manual README loader endpoint
        server.middlewares.use("/api/manual-readme", (req, res, next) => {
          const url = new URL(req.url || "", "http://localhost");
          const filePath = url.searchParams.get("path");

          if (!filePath) {
            res.statusCode = 400;
            res.end("Missing path parameter");
            return;
          }

          // Security check - only allow files with .md extension
          if (!filePath.toLowerCase().endsWith(".md")) {
            res.statusCode = 400;
            res.end("Only .md files are allowed");
            return;
          }

          try {
            if (fs.existsSync(filePath)) {
              if (fs.statSync(filePath).isFile()) {
                console.log(`Serving manual README from: ${filePath}`);
                res.setHeader("Content-Type", "text/markdown");
                fs.createReadStream(filePath).pipe(res);
              } else {
                res.statusCode = 400;
                res.end(`Path exists but is not a file: ${filePath}`);
              }
            } else {
              res.statusCode = 404;
              res.end(`File not found: ${filePath}`);
            }
          } catch (error) {
            console.error("Error serving manual README:", error);
            res.statusCode = 500;
            res.end(`Server error: ${String(error)}`);
          }
        });
      },
    },
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  optimizeDeps: {
    include: [
      "react",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom",
      "react-dom/client",
      "scheduler",
    ],
  },
  server: {
    fs: {
      allow: [
        // Allow accessing files from the project root and packages directory
        path.resolve(__dirname, ".."),
        path.resolve(__dirname, "..", ".."),
        path.resolve(__dirname, "..", "..", "packages"),
      ],
    },
  },
});
