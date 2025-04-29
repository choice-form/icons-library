import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.json",
      outDir: "dist",
      insertTypesEntry: true,
      compilerOptions: {
        declarationMap: false,
      },
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/icons/index.ts"),
        metadata: path.resolve(__dirname, "src/icons/metadata.ts"),
      },
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        minifyInternalExports: true,
      },
    },
    minify: true,
  },
});
