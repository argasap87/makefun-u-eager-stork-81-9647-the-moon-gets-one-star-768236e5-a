import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of the Moon — exactly 101 characters.
const LINE =
  "★☆☆☆☆ Zero parking, the 'dark side' is a hidden resort fee, and the landlord raises the tide monthly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be 1–120 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-120 characters, got ${LINE.length} characters`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
