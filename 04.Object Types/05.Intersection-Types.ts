type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const nik: User = {
  first: "Nikhil",
  last: "Chauhan",
  age: 27,
  email: "friends@gmail.com",
  password: "jasfjlk",
};

console.log(`Name: ${nik.first} ${nik.last}, email: ${nik.email}`);
