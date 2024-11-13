import { toBinary } from "../modules/toBinary.ts";
import { getDecimal } from "../modules/getDecimal.ts";

export function toBase64(text: string) {
  const dec = getDecimal(text);
  const convertedToBinary = toBinary(dec);
  const [slicedBinary, isPadding] = splitBinary(convertedToBinary);

  return isPadding;
}

function splitBinary(convertedToBinary: string) {
  const binaryLength = convertedToBinary.split("").length;
  const sixBit = 6;
  let isPadding = false;

  const slicedBinary = [];
  for (let i=0; i<binaryLength; i+=sixBit) {
    const binary = convertedToBinary.slice(i, i+sixBit).split("");

    while (binary.length !== sixBit) {
      binary.push("0");
      isPadding = true;
    }
    slicedBinary.push(binary.join(""));
  }

  return [slicedBinary, isPadding];
}


