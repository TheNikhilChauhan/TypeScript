//define a person object

const person: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "Ross",
  lastName: "Geller",
  age: 32,
};

console.log(
  `Name: ${person.firstName} ${person.lastName} and age is ${person.age}`
);

//using object as function return value

function printUser(): {
  name: string;
  age: number;
  location: string;
} {
  return {
    name: "Chandler",
    age: 32,
    location: "New York",
  };
}

const res = printUser();
console.log(res);

function printUserName(person: { firstName: string; lastName: string }) {
  console.log(`Name is: ${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "Chandler", lastName: "Bing" });
