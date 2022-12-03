import { readFileSync } from "node:fs";

const allelves = readFileSync("day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline


function part1() {
  const values = allelves.map((elf) => {
  const values = elf.split('\n').map(Number);
  return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  });
  console.log(Math.max(...values));
}

function part2() {
}

part1();
part2();