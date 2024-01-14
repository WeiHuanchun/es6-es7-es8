# ES6 Intro

## Template Literals

```js
let word1 = "Dylan"
let word2 = "Isreal"
let num1 = 2
let num2 = 3

const fullName = `${word1} ${word2}`
console.log(fullName)
```

## Destructing Objects

```js
const personalInformation = {
    firstName: "John",
    lastName: "Doe",
    city: "Boston",
    state: "MA",
    zipCode: 123456,
}

const { firstName, lastName } = personalInformation
const { firstName: fn, lastName: ln } = personalInformation

console.log(firstName, lastName) // John Doe

console.log(`${fn} ${ln}`) // John Doe
```
## Destructuring Arrays

```js
let [firstName, middleName, lastName] = ["John", "Quincy", "Adams"]

lastName = "Clements"

console.log(firstName) // John
console.log(lastName) // Clements
```
## Object Literal
```js
function addressMaker(city, state) {
    const newAddress = { newCity: city, newState: state }
    console.log(newAddress)
}

addressMaker("Austin", "Texas") // {newCity: 'Austin', newState: 'Texas'}

function usernameMaker(firstName, lastName) {
    const newUsername = { firstName, lastName }
    console.log(newUsername)
}

usernameMaker("John", "Doe") // {firstName: 'John', lastName: 'Doe'}
```
## Object Literal(Challenge)
```js
function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "United States",
    }
    console.log(newAddress)
}
```

```js
function addressMaker(address) {
    const { city, state } = address
    const newAddress = {
        city,
        state,
        country: "United States",
    }
    console.log(
        `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`
    )
}

addressMaker({ city: "Austin", state: "Texas" }) // Austin, Texas, United States
```
## For of Loop
```js
let incomes = [62000, 67000, 75000]
let total = 0

for (const income of incomes) {
    console.log(income)
    total += income
}

console.log(total)

/* 
62000
67000
75000
204000 
*/
```

```js
let fullName = "Dylan Coding God Israel"

for (const char of fullName) {
    console.log(char)
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
let incomes = [62000, 67000, 75000]
let total = 0

for (let income of incomes) {
    income += 5000
}

console.log(incomes) // [ 62000, 67000, 75000 ]
```
> Just iterate not set values to the iterable object

## Spread Operator

