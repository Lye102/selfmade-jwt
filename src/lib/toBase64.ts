import { toBinary } from "../modules/toBinary.ts";
import { getDecimal } from "../modules/getDecimal.ts";
import { BINARY_CHAR_MAP } from "../../data/base64.ts";

export function toBase64(text: string) {
  const dec = getDecimal(text);
  const convertedToBinary = toBinary(dec);
  const [slicedBinary, insertionCount] = splitBinary(convertedToBinary);

  const binaryToBase64 = slicedBinary.map((binary) => BINARY_CHAR_MAP[binary]);

  if (insertionCount === 2) {
    binaryToBase64.push("=");
  }
  if (insertionCount === 4) {
    binaryToBase64.push("==");
  }

  return binaryToBase64.join("");
}

function splitBinary(convertedToBinary: string) {
  const binaryLength = convertedToBinary.split("").length;
  const sixBit = 6;
  let insertionCount = 0;

  const slicedBinary = [];
  for (let i=0; i<binaryLength; i+=sixBit) {
    const binary = convertedToBinary.slice(i, i+sixBit).split("");

    while (binary.length !== sixBit) {
      binary.push("0");
      insertionCount++;
    }
    slicedBinary.push(binary.join(""));
  }
  const converted: [string[], number] = [slicedBinary, insertionCount];

  return converted;
}


