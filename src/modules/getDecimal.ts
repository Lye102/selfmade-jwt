import { ASCII_CHARS } from "../../data/ascii.ts";
import type { ASCIICharacter } from "../types/types.ts";


export function getDecimal(char: string): number[] {
  const splitChars = char.split("");
  const asciiDecs: number[] = [];

  for (const str of splitChars) {
    const result: ASCIICharacter | undefined = ASCII_CHARS.find((ascii) => ascii.char === str);

    if (result) {
      asciiDecs.push(result.dec);
    }
  }

  return asciiDecs;
};