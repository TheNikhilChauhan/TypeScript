// interface: is a type of contract which defines the structure of the object

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const harvey: User = {
//   firstName: "Harvey",
//   lastName: "Specter",
//   age: 47,
// };

// console.log(harvey);

/********************************** */

//challenge 1: create a function isLegal that returns true or false if a user is above 18. It takes a user as an input

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    false;
  }
}

const result = isLegal({
  firstName: "Harvey",
  lastName: "Specter",
  age: 47,
});

console.log(result);
