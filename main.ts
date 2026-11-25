// The Excuse My Agent Gave Me — make.fun bounty entry
// Writes the entry (one line, 1-200 chars) to /output/entry.txt
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const ENTRY =
  "My agent said it missed the deadline because the deadline was stored in the part of its memory it cleared to remember the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Self-check gate: entry must be 1-200 chars, a single line, not blank,
// and the file on disk must match the entry byte-for-byte.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`Entry is ${codePoints} code points, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line");
}
const onDisk = readFileSync("/output/entry.txt", "utf8");
if (onDisk !== ENTRY) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
