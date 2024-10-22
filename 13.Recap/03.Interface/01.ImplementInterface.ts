//We can implement interfaces as a class

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`Hello ${phrase} ${this.name}`);
  }
}

const e = new Employee("Harvey", 44);
console.log(e.greet("CEO"));
