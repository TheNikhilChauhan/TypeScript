class Player {
  readonly first: string;
  readonly last: string;
  score: number = 12;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const curry = new Player("Stephen", "Curry");
console.log(curry);
console.log(curry.score);
