class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, There Mate");
console.log(stringBox);
console.log(stringBox.getContent());
stringBox.setContent("New Content mate");
console.log(stringBox.getContent());

const numberBox = new Box<number>(45);
console.log(numberBox.getContent());
numberBox.setContent(34);
console.log(numberBox.getContent());
