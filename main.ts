// news-image-20261126 v2 — make.fun entry.
// Copies entry.png to /output/entry.png and verifies the copy byte-for-byte.
// The image sums up Thursday 26 November 2026 in one broadsheet: 50 true
// stories from 50 countries, in the format of the 24 and 25 November
// entries — navy top strip, giant date masthead, red ticker, 9-region bar,
// fields line, UTC timeline, giant-number stats, 3 illustrated leads,
// 10 mid stories, a world map with numbered dots, a 37-story list, and a
// DATE CHECK box. Every drawing is original, drawn by code.
// DATE CHECK: every story in the image happened or was first reported on
// Thursday 26 November 2026; earlier stories (including the Hong Kong Tai
// Po fire of 26 Nov 2025) are named in the image's DATE CHECK box, not
// counted among the 50.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1024 * 1024;

// entry.png lives next to this file; the grader runs main.ts from the repo root.
const src = new URL("./entry.png", import.meta.url);
const data = readFileSync(src);

// A PNG stores its size in the IHDR chunk: width at bytes 16-19, height at
// bytes 20-23, both big-endian.
if (
  data.length < 24 ||
  data[0] !== 0x89 ||
  data[1] !== 0x50 ||
  data[2] !== 0x4e ||
  data[3] !== 0x47
) {
  throw new Error("entry.png is not a PNG file");
}
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (data.length > MAX_BYTES) {
  throw new Error(
    `entry.png must be at most 1 MiB, got ${data.length} bytes`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "entry.png");
copyFileSync(src, out);

// Verify the copy is byte-for-byte identical to the source.
const copied = readFileSync(out);
if (!copied.equals(data)) {
  throw new Error("copied entry.png differs from the source");
}
