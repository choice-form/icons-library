import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["fs", "path", "fs-extra", "glob"],
  platform: "node",
  target: "node16",
});
