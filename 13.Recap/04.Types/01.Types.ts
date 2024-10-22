// Types is very similar to interfaces except it lets you do some additional things

//type syntax
type user = {
  firstName: string;
  lastName: string;
  age: number;
};

interface user2 {
  firstName: string;
  lastName: string;
  age: number;
}

const user1: user = {
  firstName: "Harvey",
  lastName: "Specter",
  age: 46,
};
console.log(user1);

const user2: user2 = {
  firstName: "Louis",
  lastName: "Litt",
  age: 46,
};

console.log(user2);

/********************* */

// types let you do few other things:

//1. Union

//lets say you want to print the id of a user which can be number or a string

type StringOrNum = number | string;

function printId(id: StringOrNum) {
  console.log(`ID: ${id}`);
}

printId("3563");
printId(2345);

/*********************** */

//2. Intersection
//if you want to create a type that has every property of types/ interfaces

type Employee = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager;

const teadLead: TeamLead = {
  name: "Harvey",
  startDate: new Date(),
  department: "JS Developer",
};

console.log(teadLead);
