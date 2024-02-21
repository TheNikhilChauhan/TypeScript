let myTuple: [number, string];

myTuple = [3, "hi"]; //valid
// myTuple = [ "hi", 3] //invalid
console.log(myTuple);

//*************** */

const products: (number | string)[] = ["item", 23];
console.log(products);

//********************* */

const games: [string, string, string] = ["joey", "monika", "chandler"];
console.log(games);
