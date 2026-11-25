// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is a single word: the word a grandma would text about AI.
// She has watched the grandkids talk to a glowing box that answers
// back, and she has exactly one word for the thing: Thingamajig.
//
// It is the word grandmas have always used for a gadget they cannot
// name — warm, a little baffled, and fond rather than frightened.
// It needs no caption: the joke is that the most mysterious machine
// in the house gets the same name as the remote control did in 1998.
//
// This program writes that one word, and nothing else, to
// /output/entry.txt, where the bounty gate reads it:
// UTF-8 text, 1 to 30 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The word itself. One word, eleven letters, no spaces, no punctuation:
// the judge's brief allows no punctuation tricks, so the entry is plain
// letters, exactly as a grandma would thumb it into a text.
const WORD = "Thingamajig";

// The bounty gate allows 1 to 30 characters and refuses whitespace-only
// text, so check the word before writing it out.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry word must be 1-30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, with no whitespace");
}
if (/[^A-Za-z]/.test(WORD)) {
  throw new Error("entry must be plain letters, with no punctuation");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

// No trailing newline: the file holds exactly the word, nothing else.
writeFileSync(OUTPUT_PATH, WORD, "utf8");
