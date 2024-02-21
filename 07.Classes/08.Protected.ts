class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

// const messi = new Player("Lionel", "Messi", 49);
// console.log(messi.score);
