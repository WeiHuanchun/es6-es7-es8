const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]);

for (let element of exampleSet) {
    console.log(element);
} // 1 2 3

console.log(exampleSet); // Set(3) { 1, 2, 3 }
console.log(exampleSet.size); // 3
console.log(exampleSet.has(2)); // true
console.log(exampleSet.add(5)); // Set(4) { 1, 2, 3, 5 }
console.log(exampleSet); // Set(4) { 1, 2, 3, 5 }
console.log(exampleSet.delete(5)); // true
console.log(exampleSet); // Set(3) { 1, 2, 3 }
console.log(exampleSet.clear()); // undefined
console.log(exampleSet); // Set(0) {}
console.log(exampleSet.size); // 0

/* 
☺  node index.js                                                                                                                     main ✗
1
2
3
Set(3) { 1, 2, 3 }
3
true
Set(4) { 1, 2, 3, 5 }
Set(4) { 1, 2, 3, 5 }
true
Set(3) { 1, 2, 3 }
undefined
Set(0) {}
0 
*/
