//interface definition
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

//usage
const computerExample: Computer = {
  name: "i7",
  ram: 16,
  hdd: 10000,
};

console.log(computerExample);
console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

//simple interface
interface Movie {
  readonly name: string;
  ratings: number;
  genra?: string; // optional
}

const movie1: Movie = {
  name: "John Wick",
  ratings: 7,
  genra: "Action",
};

console.log(movie1);
