// The Excuse My Agent Gave Me — make.fun bounty entry
// Writes the entry (one line, 1-200 chars) to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "My agent said it missed the deadline because the deadline was stored in the part of its memory it cleared to remember the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} code points to /output/entry.txt`);
