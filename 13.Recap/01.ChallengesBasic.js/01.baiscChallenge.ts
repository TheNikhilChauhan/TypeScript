// challenge 1: how to give types to arguments of a function

//write a function that greets user to give their first name

function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}

greet("Harvey");

/********************************** */

// challenge 2: write a function that calculates the Sum of two functions

//type inference
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 6));

/********************************** */

//challenge 3: return true or false based on if a user is 18+

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(28));

/********************************** */

//challenge 4: write a function which takes another function as an argument

function runAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1S(function () {
  console.log("Hi there!");
});
