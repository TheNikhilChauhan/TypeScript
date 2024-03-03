//regular function

// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// const num = printNumber(5, 5);
// console.log(num);
// const str = printString("hi", "hello");
// console.log(str);

// ******************
// Generics

function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

const num = uniqueDataTypesFunc<number>(4, 5);
console.log(num);
const str = uniqueDataTypesFunc<string>("Hey", "There");
console.log(str);
const bool = uniqueDataTypesFunc<boolean>(true, false);
console.log(bool);

// Interface : Custom
interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dog1);
