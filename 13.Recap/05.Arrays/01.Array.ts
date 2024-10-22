function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([5, 2, 9]));

/************************ */

//filter out the user who are legal

interface User {
  name: string;
  age: number;
}

function isLegal(arr: User[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      console.log(`${arr[i].name}`);
    }
  }
  return true;
}

const user1: User = {
  name: "Harvey",
  age: 45,
};
const user2: User = {
  name: "Louis",
  age: 45,
};
const user3: User = {
  name: "Mike",
  age: 5,
};
const user4: User = {
  name: "Donna",
  age: 45,
};

isLegal([user1, user2, user3, user4]);
