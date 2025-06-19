import { defineConfig } from "vite";
import { resolve } from "path";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import fs from "fs-extra";

// 自定义插件，用于复制元数据文件到dist目录
const metadataCopyPlugin = () => {
  return {
    name: "metadata-copy",
    closeBundle() {
      try {
        // 确保目标目录存在
        const distDir = resolve(__dirname, "dist");
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }

        // 复制元数据文件
        const srcDir = resolve(__dirname, "src/icons");
        const metadataFile = resolve(srcDir, "metadata.ts");
        const metadataDest = resolve(distDir, "metadata.js");
        const metadataTypeDest = resolve(distDir, "metadata.d.ts");

        // 生成d.ts文件
        const dtsContent = `export const iconMetadata: Array<{
  name: string; 
  category: string; 
  tags: string[]; 
  filename: string; 
  width: number | null;
  height: number | null;
}>;`;
        fs.writeFileSync(metadataTypeDest, dtsContent);
        console.log("✅ Generated metadata.d.ts in dist folder");

        // 如果编译后的JS可用，复制它
        if (fs.existsSync(resolve(distDir, "icons/metadata.js"))) {
          fs.copyFileSync(resolve(distDir, "icons/metadata.js"), metadataDest);
          console.log("✅ Copied metadata.js to dist folder");
        } else {
          console.error("❌ metadata.js not found in dist/icons");
        }
      } catch (error) {
        console.error("❌ Error copying metadata files:", error);
      }
    },
  };
};

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ["src/**/*.ts", "src/**/*.tsx"],
    }),
    metadataCopyPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
    target: "esnext",
    sourcemap: true,
    minify: false,
  },
});
