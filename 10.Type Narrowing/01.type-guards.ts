type MyType = string | number;

//example function with type guard
function exampleFunction(value: MyType): void {
  //type guard using typeof
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

exampleFunction("hello"); // Outputs: HELLO
exampleFunction(42); // Outputs: 42.00
