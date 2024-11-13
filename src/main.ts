import { toBase64 } from "./lib/toBase64.ts";

const text = "TOpd"

console.log(btoa(text));
// SGVsbG8=

console.log(toBase64(text));