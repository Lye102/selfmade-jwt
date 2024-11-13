import { ASCII_CHARS, type ASCIICharacter } from "../../data/ascii.ts";

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

