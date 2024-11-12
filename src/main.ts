import { convertBinary } from "./modules/convertBinary.ts";
import { getAsciiDec } from "./modules/getAsciiDec.ts";

const text = "HelloWorld";
const dec = getAsciiDec(text);
console.log(convertBinary(dec));