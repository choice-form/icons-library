import { build } from "esbuild";
import fs from "fs";
import path from "path";

async function buildUMD() {
  const minify = true;
  const outfile = path.resolve("./dist/umd/icons-js.js");

  // Ensure directory exists
  fs.mkdirSync(path.dirname(outfile), { recursive: true });

  await build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify,
    format: "iife",
    globalName: "iconsJs",
    outfile,
    platform: "browser",
    target: ["es2020"],
  });

  console.log(`✅ UMD build completed: ${outfile}`);
}

buildUMD().catch((err) => {
  console.error("❌ UMD build failed:", err);
  process.exit(1);
});
