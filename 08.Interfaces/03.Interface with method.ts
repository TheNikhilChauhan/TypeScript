//************* */
//interface with method
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello Mr. ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

//object
const bing: Person = {
  firstName: "Chandler",
  lastName: "Bing",
  age: 32,
  sayHello() {
    console.log("Hello!");
  },
};

greet(bing);

//******************* */

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "UP se",
  singerName: "Panther",
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, Singer: ${singerName}`;
  },
};

console.log(song1);
console.log(song1.printSongInfo("UP se", "Panther"));
