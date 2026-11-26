import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of the Moon — exactly 101 characters.
const LINE =
  "★☆☆☆☆ Zero parking, the 'dark side' is a hidden resort fee, and the landlord raises the tide monthly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be 1–120 characters, not only whitespace.
// The bounty judge rejects anything outside that range, so we fail fast
// here instead of writing an entry that would be scored as invalid.
function checkEntryLength(line: string): void {
  if (line.length < 1 || line.length > 120 || line.trim().length === 0) {
    throw new Error(
      `entry must be 1-120 characters, got ${line.length} characters`,
    );
  }
}

checkEntryLength(LINE);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
