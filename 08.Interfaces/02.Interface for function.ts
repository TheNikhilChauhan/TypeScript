// interface for a function

interface MathOperation {
  (x: number, y: number): number;
}

//usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 5));
console.log(subtract(10, 5));

//interface for a car
interface Car {
  brand: string;
  model: string;
  year: number;
}

// function that accepts an object adhering to the car interface
function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, year: ${car.year}`);
}

//create an object that adheres to the car interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};
displayCarInfo(myCar);
