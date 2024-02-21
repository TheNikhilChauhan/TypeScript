// properties annotations
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("Nikhil", 27);
// console.log(person);

// class fields
// class Person {
//   name: string;
//   age: number;
//   location: string = "India"; //class field

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const bing = new Person("Chandler", 32);
// console.log(bing);

// readonly props
// class Person {
//   readonly name: string;
//   readonly age: number;
//   location: string = "India"; //class field

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const bing = new Person("Chandler", 32);
// console.log(bing);
// // person.age = 20; // ERROR

// public modifier
class Person {
  public name: string;
  public age: number;
  location: string = "India";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joey = new Person("Joey", 32);
joey.age = 20;
console.log(joey);
