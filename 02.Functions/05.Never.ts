// never: a variable that can never have a value

function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}

let x: never;

function neverReturn(): never {
  while (true) {}
}

x = neverReturn(); // This line will cause a compile-time error because the function never return
