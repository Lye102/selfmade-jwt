import { toBinary } from "../modules/toBinary.ts";
import { getDecimal } from "../modules/getDecimal.ts";

export function toBase64(text: string) {
  const dec = getDecimal(text);
  const convertedToBinary = toBinary(dec);

  const binaryLength = convertedToBinary.split("").length;
  const sixBit = 6;
  let addedZero = false;

  const slicedBinary = [];
  for (let i=0; i<binaryLength; i+=sixBit) {
    const binary = convertedToBinary.slice(i, i+sixBit).split("");

    while (binary.length !== sixBit) {
      binary.push("0");
      addedZero = true;
    }
    slicedBinary.push(binary.join(""));
  }
  slicedBinary.push(addedZero);

  return slicedBinary;
}

console.log(toBase64("Hel"));
console.log(btoa("Hel"));
// SGVsbG8=