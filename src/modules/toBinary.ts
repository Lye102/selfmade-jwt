// deno-lint-ignore-file
export function toBinary(dec: number[]): string {
  const convertedToBinary = dec.map(function(value) {
    const binary: number[] = [];

    for (let i=0; value>0; i++) {
      binary.push( Math.floor(value%2) );
      value = Math.floor(value/2);
    }
    while (binary.length !== 8) {
      binary.push(0);
    }

    return binary.reverse();
  });

  const joinedBinaries = convertedToBinary.map((binary) => binary.join(""));
  return joinedBinaries.join("");
}