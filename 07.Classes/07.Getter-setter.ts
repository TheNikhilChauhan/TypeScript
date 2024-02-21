class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}

//instance

const myInstance = new MyClass();
//use getter
console.log(`Current value: `, myInstance.myProperty);

//setter
myInstance.myProperty = 25;
console.log(`New Value: `, myInstance.myProperty);

//************** */

class Player {
  constructor(
    public first: string,
    public last: string,
    private _score: number
  ) {}

  private secretMethod(): void {
    console.log("Secret MEthod");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative.");
    }
    this._score = newScore;
  }
}

const ronaldo = new Player("Cristiano", "Ronaldo", 4);
console.log(ronaldo.score);
ronaldo.score = 8;
console.log(ronaldo.score);
console.log(ronaldo.fullName);
