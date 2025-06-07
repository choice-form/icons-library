import fs from "fs-extra";
console.log("fs.stat type:", typeof fs.stat);
console.log(
  "fs methods:",
  Object.keys(fs).filter((k) => k.includes("stat"))
);
