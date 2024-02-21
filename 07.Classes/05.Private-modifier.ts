class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 4;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }

  anotherMethod(): any {
    this.secretMethod();
  }
}

const messi = new Player("Lionel", "Messi");
// console.log(messi);
// console.log(messi.score);
// messi.secretMethod();
messi.anotherMethod();
