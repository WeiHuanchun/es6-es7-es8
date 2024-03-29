# ES6 Intro

## Template Literals

```js
let word1 = "Dylan";
let word2 = "Isreal";
let num1 = 2;
let num2 = 3;

const fullName = `${word1} ${word2}`;
console.log(fullName);
```

## Destructuring Objects

```js
const personalInformation = {
    firstName: "John",
    lastName: "Doe",
    city: "Boston",
    state: "MA",
    zipCode: 123456,
};

const { firstName, lastName } = personalInformation;
const { firstName: fn, lastName: ln } = personalInformation;

console.log(firstName, lastName); // John Doe

console.log(`${fn} ${ln}`); // John Doe
```

## Destructuring Arrays

```js
let [firstName, middleName, lastName] = ["John", "Quincy", "Adams"];

lastName = "Clements";

console.log(firstName); // John
console.log(lastName); // Clements
```

## Object Literal

```js
function addressMaker(city, state) {
    const newAddress = { newCity: city, newState: state };
    console.log(newAddress);
}

addressMaker("Austin", "Texas"); // {newCity: 'Austin', newState: 'Texas'}

function usernameMaker(firstName, lastName) {
    const newUsername = { firstName, lastName };
    console.log(newUsername);
}

usernameMaker("John", "Doe"); // {firstName: 'John', lastName: 'Doe'}
```

## Object Literal(Challenge)

```js
function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "United States",
    };
    console.log(newAddress);
}
```

```js
function addressMaker(address) {
    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: "United States",
    };
    console.log(
        `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`,
    );
}

addressMaker({ city: "Austin", state: "Texas" }); // Austin, Texas, United States
```

## For of Loop

```js
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

/* 
62000
67000
75000
204000 
*/
```

```js
let fullName = "Dylan Coding God Israel";

for (const char of fullName) {
    console.log(char);
}

/* 
D
y
l
a
n

C
o
d
i
n
g

G
o
d

I
s
r
a
e
l */
```

## For of Loop(Chanllenge)

```js
let incomes = [62000, 67000, 75000];
let total = 0;

for (let income of incomes) {
    income += 5000;
}

console.log(incomes); // [ 62000, 67000, 75000 ]
```

> Just iterate not set values to the iterable object

## Spread Operator

```js
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

console.log(example2); // [1,2,3,4,5,6]
```

```js
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);

console.log(example2); // [1, 2, 3, 4, 5, 6, true]
```

```js
let example1 = {
    firstName: "Jason",
};

let example2 = {
    lastName: "N/A",
    ...example1,
};

console.log(example2); // { lastName: 'N/A', firstName: 'Jason' }
```

## Rest Operator

```js
function add(nums) {
    console.log(nums);
}

add(12, 3, 4, 5); // 12
```

```js
function add(nums) {
    console.log(arguments);
}

add(12, 3, 4, 5); // [Arguments] { '0': 12, '1': 3, '2': 4, '3': 5 }
```

```js
function add(...nums) {
    console.log(nums);
}

add(12, 3, 4, 5); // [12, 3, 4, 5]
```

## Arrow Functions

```js
function add(...nums) {
    let totalF = nums.reduce(function (x, y) {
        return x + y;
    });
    let totalA = nums.reduce((x, y) => x + y);
    console.log(totalF); // 24
    console.log(totalA); // 24
}

add(12, 3, 4, 5);
```

## Default Params

```js
function add(numArray) {
    let total = 0;
    // element is the default param
    numArray.forEach((element) => {
        total += element;
    });
    console.log(total);
}

add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
```

## Includes

```js
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.indexOf(0)); // -1
console.log(numArray.indexOf(3)); // 2
console.log(numArray.includes(0)); // false
console.log(numArray.includes(3)); // true
```

## `let` & `const`

```js
if (false) {
    var example = 5;
}

console.log(example); // undefined
```

```js
var example;
if (false) {
    example = 5;
}

console.log(example); // undefined
```

```js
if (false) {
    let example = 5;
}

console.log(example);

/* console.log(example)
            ^

ReferenceError: example is not defined
    at Object.<anonymous> (/Users/huntley/vscode-workspace/es6-es7-es8/index.js:5:13)
    at Module._compile (node:internal/modules/cjs/loader:1375:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1434:10)
    at Module.load (node:internal/modules/cjs/loader:1206:32)
    at Module._load (node:internal/modules/cjs/loader:1022:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.5.0 */
```

```js
let example;
if (false) {
    example = 5;
}

console.log(example); // undefined
```

```js
const example = 5;
example = 10;
console.log(example);

/* example = 10
        ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/huntley/vscode-workspace/es6-es7-es8/index.js:2:9)
    at Module._compile (node:internal/modules/cjs/loader:1375:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1434:10)
    at Module.load (node:internal/modules/cjs/loader:1206:32)
    at Module._load (node:internal/modules/cjs/loader:1022:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.5.0 */
```

```js
const example = [];
example.push(1);
console.log(example); // [ 1 ]
example = 10;
console.log(example);

/* example = 10
        ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/huntley/vscode-workspace/es6-es7-es8/index.js:4:9)
    at Module._compile (node:internal/modules/cjs/loader:1375:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1434:10)
    at Module.load (node:internal/modules/cjs/loader:1206:32)
    at Module._load (node:internal/modules/cjs/loader:1022:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.5.0
 */
```

```js
const example = {};

example.firstName = "Harry";
console.log(example); // { firstName: 'Harry' }
```
> You cannot override a `const` data

## `import` & `export`

-   commonjs

    ```js
    // example.js
    const data = [1, 2, 3];
    module.exports = data;
    ```

    ```js
    // index.js
    const data = require("./example.js");

    console.log(data); // [1,2,3]

    data.push(4);

    console.log(data); // [1,2,3,4]
    ```

-   moudule

    ```json
    // package.json
    {
        "type": "module"
    }
    ```

    ```js
    // example.js
    export const data = [1, 2, 3];
    ```

    ```js
    import { data } from "./example.js";

    console.log(data); // [1, 2, 3]
    ```

## `padStart()` & `padEnd()`

```js
let example = "Dylan";

console.log(example.padStart(10, "a")); // aaaaaDylan
```

```js
let example = "Dylan";

console.log(example.padEnd(10, "a")); // Dylanaaaaa
```

## `padStart()` & `padEnd()` (Chanllenge)

```js
let example = "YouTube.com/67373";

console.log(example.padStart(100)); // 100 is the total length of the string
console.log(example.padEnd(1)); // YouTube.com/67373
console.log(example.padEnd(1).length); // 17
```

## Classes

```js
// example.js
export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    // inherits constructor from Animal
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}
```

```js
// index.js
import { Animal, Cat } from "./example.js";

let cat = new Animal("Cat", 4);

console.log(cat); // Animal { type: 'Cat', legs: 4 }
console.log(cat.legs); // 4

cat.legs = 3;

console.log(cat.legs); // 3

cat.makeNoise(); // Loud Noise
cat.makeNoise("Meow"); // Meow

console.log(Animal.return10()); // 10

console.log(cat.metaData); // Type: Cat, Legs: 3

let tiger = new Cat("Tiger", 4, 1);

tiger.makeNoise(); // meow
console.log(tiger.metaData); // Type: Tiger, Legs: 4
```

## Trailing Commas

```js
function add(param1) {
    const example = {
        name: "Dylan",
    };

    console.log(example);
}

add(); // { name: 'Dylan' }
```

> Trailing commas (also known as dangling commas or terminal commas) are commas that you place at the end of a line of code where they're syntactically allowed but not required. They are used in objects, arrays, and function parameters.
>
> Here's an example in an object:
>
> ```javascript
> const obj = {
>     prop1: "value1",
>     prop2: "value2",
> };
> ```
>
> And in an array:
>
> ```javascript
> const arr = ["element1", "element2",];
> ```
>
> And in a function's parameters:
>
> ```javascript
> function func(param1, param2,) {
>     // function body
> }
> ```
>
> The main benefits of trailing commas are:
>
> 1. Version Control Systems like Git show cleaner diffs when elements are added or removed from objects, arrays, or function parameters.
> 2. It makes reordering elements easier because you don't have to add or remove commas when moving the last element.
> 3. It can prevent some simple syntax errors in JavaScript, where a missing comma can cause two lines to be interpreted as one.
>
> Starting from ES8 (ECMAScript 2017), trailing commas are allowed in function parameter lists.

## Async & Await

```js
const apiUrl = "http://www.bilibili.com";

function getBilibili() {
    fetch(apiUrl)
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
}

getBilibili();
```

```js
const apiUrl = "http://www.bilibili.com";

async function getBilibili() {
    const response = await fetch(apiUrl);
    const text = await response.text();
    console.log(text);
}

getBilibili();
```

## Async & Await (Chanllenge)

```js
function resolveAfter3Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 3000);
    });
}
async function asyncCall() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

asyncCall();
```

## Sets

Unique list

```js
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
```
