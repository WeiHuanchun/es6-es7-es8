import { Animal, Cat } from './example.js';

let cat = new Animal('Cat', 4);

console.log(cat); // Animal { type: 'Cat', legs: 4 }
console.log(cat.legs); // 4

cat.legs = 3;

console.log(cat.legs); // 3

cat.makeNoise(); // Loud Noise
cat.makeNoise('Meow'); // Meow

console.log(Animal.return10()); // 10

console.log(cat.metaData); // Type: Cat, Legs: 3

let tiger = new Cat('Tiger', 4, 1);

tiger.makeNoise(); // meow
console.log(tiger.metaData); // Type: Tiger, Legs: 4