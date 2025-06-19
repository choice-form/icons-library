import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import fs from "fs-extra";

// Custom plugin to copy metadata files to dist directory
const metadataCopyPlugin = () => {
  return {
    name: "metadata-copy",
    closeBundle() {
      try {
        // Ensure the destination directory exists
        const distDir = resolve(__dirname, "dist");
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }

        // Copy metadata files
        const srcDir = resolve(__dirname, "src/icons");
        const metadataFile = resolve(srcDir, "metadata.ts");
        const metadataDest = resolve(distDir, "metadata.js");
        const metadataTypeDest = resolve(distDir, "metadata.d.ts");

        // Generate d.ts file
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

        // Copy compiled JS if available
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
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
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
  plugins: [
    dts({
      include: ["src/**/*"],
      copyDtsFiles: true,
    }),
    metadataCopyPlugin(),
  ],
});
