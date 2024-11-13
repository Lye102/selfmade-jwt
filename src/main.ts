import { toBase64 } from "./lib/toBase64.ts";

console.log(btoa("Hel"));
// SGVsbG8=

console.log(toBase64("Hel"))