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
    banner: {
      js: `/* 
 * @choiceform/icons-js
 * UMD bundle automatically adds createIcons to window.iconsJs
 */`,
    },
  });

  const content = fs.readFileSync(outfile, "utf-8");

  const patchedContent = content.replace(
    /\/\*.*@choiceform\/icons-js.*\*\//,
    `/* 
 * @choiceform/icons-js
 * UMD bundle for browser usage with kebab-case support
 */`
  );

  fs.writeFileSync(outfile, patchedContent, "utf-8");
  console.log(`✅ UMD build completed and patched: ${outfile}`);
}

buildUMD().catch((e) => {
  console.error("Build failed:", e);
  process.exit(1);
});
