import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  // Generate UMD bundle
  esbuildOptions(options) {
    options.globalName = "iconsJs";
  },
  onSuccess: "node build-umd.js",
});
