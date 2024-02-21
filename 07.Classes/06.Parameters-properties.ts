class Player {
  // public readonly first: string;
  // public readonly last: string;
  // private score: number = 4;

  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const messi = new Player("Lionel", "Messi", 4);
// console.log(messi);
// console.log(messi.score);//error
// messi.secretMethod();
console.log(messi.first);
