type Person = {
  name: string;
  age: number;
  readonly email: string;
};

const user: Person = {
  name: "Monica",
  age: 31,
  email: "geller@gmail.com",
};

console.log(user);
console.log(user.email);
// user.email = "bing@gmail.com"
