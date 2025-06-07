import { defineConfig } from "tsup";

export default defineConfig([
  // API module
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    clean: true,
    external: [],
  },
  // Vite plugin module
  {
    entry: ["src/vite-plugin.ts"],
    format: ["esm"],
    dts: true,
    clean: false,
    external: ["vite"],
  },
  // CLI module
  {
    entry: ["src/cli.ts"],
    format: ["esm"],
    dts: false,
    clean: false,
    external: [],
    banner: {
      js: "#!/usr/bin/env node",
    },
  },
]);
