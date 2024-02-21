type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name is: ${user.name}, age: ${user.age}, location: ${user.location}`;
};

const res = printUserInfo({ name: "Ross", age: 32, location: "New york" });
console.log(res);
