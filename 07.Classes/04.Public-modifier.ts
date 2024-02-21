class Player {
  public first: string;
  public last: string;
  public score: number = 12;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const ronaldo = new Player("Cristiano", "Ronaldo");
console.log(ronaldo);
