let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  first: "Chandler",
  last: "Bing",
  age: 32,
};

console.log(user);

const items: (number | string)[] = [1, 2, 3, "hello"];

console.log(items);
