import * as esbuild from "esbuild";
import { gzipSync } from "node:zlib";
import { mkdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { version } = require("../package.json");
const banner = { css: `/*! Mates CSS v${version} — compact pure-CSS UI kit. MIT. */\n` };

mkdirSync("dist", { recursive: true });

const shared = {
  entryPoints: ["src/index.css"],
  bundle: true,
  banner,
};

await esbuild.build({ ...shared, outfile: "dist/mates.css" });
await esbuild.build({ ...shared, minify: true, outfile: "dist/mates.min.css" });

const raw = readFileSync("dist/mates.css");
const min = readFileSync("dist/mates.min.css");
const gzip = gzipSync(min).length;
const kb = (n) => (n / 1024).toFixed(1);

console.log(`mates.css     ${kb(raw.length)}kb`);
console.log(`mates.min.css ${kb(min.length)}kb`);
console.log(`gzip          ${kb(gzip)}kb`);
