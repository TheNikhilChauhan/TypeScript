// extending interface
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movei1: MovieGenra = {
  name: "Thor",
  ratings: 8,
  printMovieInfo(name: string, price: number, ratings: number) {
    return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  },
  genra: "Action",
};

const res = movei1.printMovieInfo("Thor", 100, 9);
console.log(res);
console.log(movei1);
