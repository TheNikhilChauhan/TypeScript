// Instanceof operatior is another type guard in TS that allows you to check whether an object is an instance of a particular class or constructor function.

class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myCat);
animalSound(myDog);
