import { defineConfig } from "tsup";

export default defineConfig([
  // API module
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    clean: true,
    external: ["@choiceform/icons-core"],
  },
  // CLI module
  {
    entry: ["src/cli.ts"],
    format: ["esm"],
    dts: false,
    clean: false,
    external: ["@choiceform/icons-core"],
    banner: {
      js: "#!/usr/bin/env node",
    },
  },
]);
