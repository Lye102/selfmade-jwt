import { ASCII_CHARS, type ASCIICharacter } from "../../data/asciiTable.ts";

export const getAsciiDecs = (char: string) => {
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

