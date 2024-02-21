type User = {
  name: string;
  age: number;
  location: string;
};

const user: User = {
  name: "Joey",
  age: 32,
  location: "New York",
};

console.log(`Name: ${user.name}, age: ${user.age}, location: ${user.location}`);
