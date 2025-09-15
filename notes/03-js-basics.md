# 📘 Summary: Programming Basics (JavaScript / ES6+)

---

## 🔹 1. ECMAScript / Data Types

**Purpose:** JavaScript is a dynamic, interpreted programming language for web development.

### Primitive Data Types

**Basic Types:**
```javascript
// String - text data
let name = "John";
let message = 'Hello World';
let template = `Hello ${name}!`;

// Number - integers and decimals
let age = 25;
let price = 19.99;
let infinity = Infinity;
let notANumber = NaN;

// Boolean - true/false
let isActive = true;
let isComplete = false;

// Undefined - declared but not assigned
let undefinedVar;
console.log(undefinedVar); // undefined

// Null - intentionally empty
let emptyValue = null;

// Symbol (ES6) - unique identifier
let symbol = Symbol('id');
```

### Complex Data Types

**Objects and Arrays:**
```javascript
// Object - key-value pairs
let person = {
  name: "John",
  age: 25,
  isStudent: true
};

// Array - ordered list
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];

// Function - reusable code block
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Type Checking

**typeof Operator:**
```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (known quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

⚡️ **Interview tip:** What are the primitive data types in JavaScript and how do you check variable types?

**Answer:**
JavaScript has 7 primitive types: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, and `bigint`. Use `typeof` operator to check types, but note that `typeof null` returns "object" (historical quirk). For arrays, use `Array.isArray()`. Objects and functions are non-primitive types.

---

## 🔹 2. Variable Declarations

**Purpose:** Different ways to declare variables with different scoping rules.

### var vs let vs const

**Comparison:**
```javascript
// var - function scoped, can be redeclared
var oldWay = "function scoped";
var oldWay = "can redeclare"; // OK

function example() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - accessible outside block
}

// let - block scoped, cannot be redeclared
let modernWay = "block scoped";
// let modernWay = "error"; // SyntaxError

if (true) {
  let y = 2;
}
// console.log(y); // ReferenceError

// const - block scoped, cannot be reassigned
const constant = "cannot change";
// constant = "new value"; // TypeError

// const with objects/arrays - content can change
const obj = { name: "John" };
obj.name = "Jane"; // OK - modifying content
obj.age = 25;      // OK - adding property
// obj = {}; // TypeError - cannot reassign
```

### Hoisting Behavior

**Hoisting Examples:**
```javascript
// var hoisting
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";

// let/const hoisting (Temporal Dead Zone)
// console.log(letVar); // ReferenceError
let letVar = "Block scoped";

// Function hoisting
console.log(hoistedFunction()); // "I work!"
function hoistedFunction() {
  return "I work!";
}
```

### Best Practices

**Modern Declaration Rules:**
```javascript
// 1. Use const by default
const PI = 3.14159;
const users = [];

// 2. Use let when you need to reassign
let counter = 0;
counter++;

// 3. Avoid var (legacy, confusing scope)
// var legacy = "avoid this";

// 4. Always declare at the top of scope
function goodPractice() {
  const name = "John";
  let age = 25;
  
  // ... rest of function
}
```

⚡️ **Interview tip:** Explain the differences between var, let, and const, including scope and hoisting behavior.

**Answer:**
- **var:** Function-scoped, can be redeclared/reassigned, hoisted (initialized as undefined)
- **let:** Block-scoped, cannot be redeclared, can be reassigned, hoisted but in temporal dead zone
- **const:** Block-scoped, cannot be redeclared/reassigned, must be initialized, hoisted but in temporal dead zone
- **Best practice:** Use const by default, let when reassignment needed, avoid var

---

## 🔹 3. Control Flow

**Purpose:** Control program execution with conditions and loops.

### Conditional Statements

**if/else Statements:**
```javascript
// Basic if/else
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";

// Multiple conditions
let weather = "sunny";
let temperature = 25;

if (weather === "sunny" && temperature > 20) {
  console.log("Perfect day!");
} else if (weather === "rainy" || temperature < 10) {
  console.log("Stay inside");
}
```

**Switch Statement:**
```javascript
let day = "monday";

switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Weekday");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// Modern switch (ES2020+)
let result = switch (day) {
  case "monday", "tuesday", "wednesday", "thursday", "friday" -> "Weekday";
  case "saturday", "sunday" -> "Weekend";
  default -> "Invalid day";
};
```

### Loop Statements

**for Loops:**
```javascript
// Traditional for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// for...of (iterate over values)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}

// for...in (iterate over keys/indices)
const person = { name: "John", age: 25, city: "NYC" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...in with arrays (gets indices)
for (const index in fruits) {
  console.log(`${index}: ${fruits[index]}`);
}
```

**while Loops:**
```javascript
// while loop
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}

// do...while (executes at least once)
let input;
do {
  input = prompt("Enter 'quit' to exit:");
} while (input !== "quit");
```

### Loop Control

**break and continue:**
```javascript
// break - exit loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}

// Labeled breaks (nested loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(`${i}, ${j}`);
  }
}
```

⚡️ **Interview tip:** When would you use for...of vs for...in loops, and what's the difference?

**Answer:**
- **for...of:** Iterates over values of iterable objects (arrays, strings, maps, sets). Use for arrays when you need values.
- **for...in:** Iterates over enumerable property names (keys/indices). Use for objects to get keys, or arrays when you need indices.
- **Best practice:** Use for...of for arrays/iterables, for...in for objects, avoid for...in with arrays unless you specifically need indices.

---

## 🔹 4. Functions

**Purpose:** Reusable blocks of code that perform specific tasks.

### Function Declarations

**Different Ways to Define Functions:**
```javascript
// Function declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const greetExpression = function(name) {
  return `Hello, ${name}!`;
};

// Arrow function (ES6+)
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function shorthand
const greetShort = name => `Hello, ${name}!`;
const add = (a, b) => a + b;
const square = x => x * x;
```

### Parameters and Arguments

**Function Parameters:**
```javascript
// Default parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("John"));        // "Hello, John!"
console.log(greet("John", "Hi"));  // "Hi, John!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Destructuring parameters
function createUser({name, age, email}) {
  return { name, age, email, id: Date.now() };
}

const user = createUser({
  name: "John",
  age: 25,
  email: "john@example.com"
});
```

### Higher-Order Functions

**Functions as Arguments:**
```javascript
// Function that takes another function as parameter
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Built-in higher-order functions
const squares = numbers.map(x => x * x);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((total, x) => total + x, 0);
```

### Closures

**Closure Examples:**
```javascript
// Basic closure
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y; // innerFunction has access to x
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// Practical closure - private variables
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(counter.count); // undefined - private variable
```

### Recursion

**Recursive Functions:**
```javascript
// Factorial
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimized fibonacci with memoization
function fibonacciMemo() {
  const memo = {};
  
  return function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
}

const fastFib = fibonacciMemo();
console.log(fastFib(40)); // Much faster than regular recursion
```

⚡️ **Interview tip:** Explain closures and provide a practical example of when you'd use them.

**Answer:**
A closure is when an inner function has access to variables from its outer function's scope, even after the outer function has finished executing. Closures are created every time a function is created. Practical uses: private variables, function factories, callback functions that need to remember state, module patterns. Example: creating multiple counters that each maintain their own private count variable.

---

## 🔹 5. Arrays

**Purpose:** Ordered collections of elements with powerful built-in methods.

### Array Creation and Basic Operations

**Creating Arrays:**
```javascript
// Different ways to create arrays
const fruits = ["apple", "banana", "orange"];
const numbers = new Array(1, 2, 3, 4, 5);
const empty = [];
const mixed = [1, "text", true, {name: "John"}, [1, 2, 3]];

// Array length and access
console.log(fruits.length);    // 3
console.log(fruits[0]);        // "apple"
console.log(fruits[fruits.length - 1]); // "orange"

// Adding and removing elements
fruits.push("grape");          // Add to end
fruits.unshift("mango");       // Add to beginning
const lastFruit = fruits.pop(); // Remove from end
const firstFruit = fruits.shift(); // Remove from beginning
```

### Array Iteration Methods

**forEach - Execute function for each element:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - doesn't return new array
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// forEach with additional parameters
numbers.forEach((num, index, array) => {
  console.log(`${num} of ${array.length} total`);
});
```

**map - Transform each element:**
```javascript
// map - returns new array with transformed elements
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// map with objects
const users = [
  {name: "John", age: 25},
  {name: "Jane", age: 30},
  {name: "Bob", age: 35}
];

const names = users.map(user => user.name);
console.log(names); // ["John", "Jane", "Bob"]

// map with index
const withIndex = numbers.map((num, index) => ({
  value: num,
  index: index
}));
```

**filter - Select elements that meet criteria:**
```javascript
// filter - returns new array with elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// filter objects
const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{name: "Jane", age: 30}, {name: "Bob", age: 35}]

// Complex filtering
const longNames = users.filter(user => user.name.length > 3);
```

**find - Find first matching element:**
```javascript
// find - returns first element that matches
const found = users.find(user => user.age > 25);
console.log(found); // {name: "Jane", age: 30}

// findIndex - returns index of first match
const index = users.findIndex(user => user.name === "Bob");
console.log(index); // 2

// some - test if any element passes
const hasAdults = users.some(user => user.age >= 18);
console.log(hasAdults); // true

// every - test if all elements pass
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true
```

**reduce - Reduce array to single value:**
```javascript
// reduce - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// reduce without initial value
const product = numbers.reduce((total, num) => total * num);
console.log(product); // 120

// Complex reduce examples
const totalAge = users.reduce((total, user) => total + user.age, 0);

// Group by property
const groupedByAge = users.reduce((groups, user) => {
  const age = user.age;
  if (!groups[age]) groups[age] = [];
  groups[age].push(user);
  return groups;
}, {});

// Count occurrences
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const counts = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(counts); // {a: 3, b: 2, c: 1}
```

### Advanced Array Methods

**Chaining Methods:**
```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = data
  .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(num => num * 2)           // [4, 8, 12, 16, 20]
  .reduce((sum, num) => sum + num, 0); // 60

console.log(result); // 60
```

**Other Useful Methods:**
```javascript
// includes - check if element exists
console.log(fruits.includes("apple")); // true

// indexOf/lastIndexOf - find element position
console.log(fruits.indexOf("banana")); // 1

// slice - extract portion (doesn't modify original)
const sliced = fruits.slice(1, 3); // ["banana", "orange"]

// splice - modify array (removes/adds elements)
const removed = fruits.splice(1, 2, "kiwi", "mango");

// sort - sort elements
const sorted = [...numbers].sort((a, b) => b - a); // descending

// reverse - reverse array order
const reversed = [...numbers].reverse();
```

⚡️ **Interview tip:** What's the difference between map, filter, and forEach? When would you use each?

**Answer:**
- **forEach:** Executes function for each element, returns undefined. Use for side effects (logging, DOM manipulation)
- **map:** Creates new array with transformed elements. Use when you need to transform data
- **filter:** Creates new array with elements that pass a test. Use when you need to select specific elements
- **Key difference:** map and filter return new arrays (functional approach), forEach doesn't return anything (imperative approach)

---

## 🔹 6. Objects

**Purpose:** Collections of key-value pairs representing real-world entities.

### Object Creation and Access

**Creating Objects:**
```javascript
// Object literal (most common)
const person = {
  name: "John",
  age: 25,
  city: "New York",
  isStudent: false
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
}

const person2 = new Person("Jane", 30);

// Object.create()
const personPrototype = {
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

const person3 = Object.create(personPrototype);
person3.name = "Bob";
person3.age = 35;
```

### Property Access and Modification

**Accessing Properties:**
```javascript
// Dot notation
console.log(person.name);     // "John"
console.log(person.age);      // 25

// Bracket notation
console.log(person["name"]);  // "John"
console.log(person["age"]);   // 25

// Dynamic property access
const property = "name";
console.log(person[property]); // "John"

// Adding new properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Modifying properties
person.age = 26;
person["city"] = "Los Angeles";

// Deleting properties
delete person.isStudent;
```

### Object Methods

**Built-in Object Methods:**
```javascript
const user = {
  name: "John",
  age: 25,
  city: "NYC"
};

// Object.keys() - get all property names
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]

// Object.values() - get all property values
const values = Object.values(user);
console.log(values); // ["John", 25, "NYC"]

// Object.entries() - get key-value pairs
const entries = Object.entries(user);
console.log(entries); // [["name", "John"], ["age", 25], ["city", "NYC"]]

// Object.assign() - copy/merge objects
const newUser = Object.assign({}, user, {email: "john@example.com"});

// Object.hasOwnProperty() - check if property exists
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("email")); // false
```

### Destructuring

**Object Destructuring:**
```javascript
const person = {
  name: "John",
  age: 25,
  city: "NYC",
  country: "USA"
};

// Basic destructuring
const {name, age} = person;
console.log(name); // "John"
console.log(age);  // 25

// Renaming variables
const {name: personName, age: personAge} = person;
console.log(personName); // "John"

// Default values
const {name, age, email = "not provided"} = person;
console.log(email); // "not provided"

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: "John",
    settings: {
      theme: "dark",
      notifications: true
    }
  }
};

const {
  profile: {
    name,
    settings: {theme, notifications}
  }
} = user;

// Function parameter destructuring
function greetUser({name, age}) {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(greetUser(person)); // "Hello John, you are 25 years old"
```

### Object Iteration

**Iterating Over Objects:**
```javascript
const person = {name: "John", age: 25, city: "NYC"};

// for...in loop
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys() with forEach
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Object.entries() with forEach
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Map over object entries
const uppercaseKeys = Object.entries(person).map(([key, value]) => [
  key.toUpperCase(),
  value
]);
```

### Advanced Object Features

**Computed Property Names:**
```javascript
const propertyName = "dynamicProperty";
const value = "dynamicValue";

const obj = {
  [propertyName]: value,
  [`${propertyName}2`]: "another value"
};

console.log(obj); // {dynamicProperty: "dynamicValue", dynamicProperty2: "another value"}
```

**Object Shorthand:**
```javascript
const name = "John";
const age = 25;

// ES6 shorthand property names
const person = {name, age}; // equivalent to {name: name, age: age}

// Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};
```

⚡️ **Interview tip:** Explain object destructuring and provide examples of when it's useful.

**Answer:**
Object destructuring extracts properties from objects into distinct variables. Syntax: `const {prop1, prop2} = object`. Useful for: function parameters to avoid long parameter lists, extracting data from APIs, renaming variables (`{name: userName}`), setting default values (`{email = 'default'}`), nested destructuring for complex objects. Makes code cleaner and more readable than accessing properties individually.

---

## 🔹 7. Object-Oriented Programming

**Purpose:** Organize code using classes and objects for better structure and reusability.

### Classes and Constructors

**ES6 Classes:**
```javascript
// Class declaration
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._id = Math.random(); // private-like property
  }
  
  // Instance method
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  // Method with parameters
  celebrateBirthday() {
    this.age++;
    return `Happy birthday! Now ${this.age} years old.`;
  }
  
  // Getter
  get info() {
    return `${this.name} is ${this.age} years old`;
  }
  
  // Setter
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
  
  // Static method (belongs to class, not instance)
  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}

// Creating instances
const john = new Person("John", 25);
const jane = new Person("Jane", 30);

console.log(john.greet()); // "Hello, I'm John"
console.log(jane.info);    // "Jane is 30 years old"
console.log(Person.compareAge(john, jane)); // -5
```

### Inheritance

**Class Inheritance with extends:**
```javascript
// Parent class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    return `${this.name} makes a sound`;
  }
  
  describe() {
    return `${this.name} is a ${this.species}`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "dog"); // Call parent constructor
    this.breed = breed;
  }
  
  // Override parent method
  makeSound() {
    return `${this.name} barks!`;
  }
  
  // Additional method specific to Dog
  wagTail() {
    return `${this.name} wags tail happily!`;
  }
  
  // Use super to call parent method
  fullDescription() {
    return `${super.describe()} of breed ${this.breed}`;
  }
}

const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.makeSound());        // "Buddy barks!"
console.log(buddy.fullDescription());  // "Buddy is a dog of breed Golden Retriever"
console.log(buddy.wagTail());          // "Buddy wags tail happily!"
```

### Prototypes

**Prototype-based Inheritance:**
```javascript
// Constructor function (pre-ES6 way)
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

// Adding methods to prototype
Vehicle.prototype.start = function() {
  return `${this.make} ${this.model} is starting`;
};

Vehicle.prototype.stop = function() {
  return `${this.make} ${this.model} is stopping`;
};

// Creating instances
const car = new Vehicle("Toyota", "Camry");
console.log(car.start()); // "Toyota Camry is starting"

// Prototype chain
function Car(make, model, doors) {
  Vehicle.call(this, make, model); // Call parent constructor
  this.doors = doors;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add Car-specific methods
Car.prototype.honk = function() {
  return `${this.make} ${this.model} honks!`;
};

const myCar = new Car("Honda", "Civic", 4);
console.log(myCar.start()); // "Honda Civic is starting"
console.log(myCar.honk());  // "Honda Civic honks!"
```

### Advanced OOP Concepts

**Private Fields and Methods (ES2022):**
```javascript
class BankAccount {
  // Private fields
  #balance = 0;
  #accountNumber;
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  // Private method
  #validateAmount(amount) {
    return amount > 0 && typeof amount === 'number';
  }
  
  // Public methods
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
      return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    throw new Error("Invalid amount");
  }
  
  withdraw(amount) {
    if (this.#validateAmount(amount) && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrawn $${amount}. New balance: $${this.#balance}`;
    }
    throw new Error("Insufficient funds or invalid amount");
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("123456", 100);
console.log(account.deposit(50));   // "Deposited $50. New balance: $150"
console.log(account.getBalance());  // 150
// console.log(account.#balance);   // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

### Composition vs Inheritance

**Composition Pattern:**
```javascript
// Mixins for composition
const CanFly = {
  fly() {
    return `${this.name} is flying`;
  }
};

const CanSwim = {
  swim() {
    return `${this.name} is swimming`;
  }
};

const CanWalk = {
  walk() {
    return `${this.name} is walking`;
  }
};

// Using composition
class Duck {
  constructor(name) {
    this.name = name;
    Object.assign(this, CanFly, CanSwim, CanWalk);
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, CanSwim);
  }
}

const duck = new Duck("Donald");
console.log(duck.fly());   // "Donald is flying"
console.log(duck.swim());  // "Donald is swimming"
console.log(duck.walk());  // "Donald is walking"
```

⚡️ **Interview tip:** Explain the difference between class inheritance and prototypal inheritance in JavaScript.

**Answer:**
- **Class inheritance (ES6+):** Uses `class` and `extends` keywords. Syntactic sugar over prototypal inheritance. Creates cleaner, more readable code similar to other OOP languages.
- **Prototypal inheritance:** JavaScript's native inheritance model. Objects inherit directly from other objects. Uses `prototype` property and `Object.create()`.
- **Key difference:** Classes are templates that create objects, prototypes are actual objects that other objects inherit from. Both achieve the same result but with different syntax and mental models.

---

## 🔹 8. Asynchronous Programming

**Purpose:** Handle operations that take time without blocking the main thread.

### setTimeout and setInterval

**Timer Functions:**
```javascript
// setTimeout - execute once after delay
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End"); // This runs immediately

// setTimeout with parameters
function greet(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

setTimeout(greet, 1000, "John", "Hello");

// Clearing timeout
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 5000);

clearTimeout(timeoutId); // Cancel the timeout

// setInterval - execute repeatedly
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);
  
  if (counter >= 5) {
    clearInterval(intervalId); // Stop the interval
  }
}, 1000);
```

### Promises

**Promise Basics:**
```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});

// Using Promise with .then() and .catch()
myPromise
  .then(result => {
    console.log("Success:", result);
    return result.toUpperCase(); // Chain promises
  })
  .then(upperResult => {
    console.log("Uppercase:", upperResult);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise completed");
  });
```

**Promise Utility Methods:**
```javascript
// Promise.all - wait for all promises
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve("foo"), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, "foo", 42]
  });

// Promise.race - first promise to settle
Promise.race([promise1, promise2, promise3])
  .then(value => {
    console.log(value); // 3 (resolves first)
  });

// Promise.allSettled - wait for all, regardless of outcome
const mixedPromises = [
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("another success")
];

Promise.allSettled(mixedPromises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index} succeeded:`, result.value);
      } else {
        console.log(`Promise ${index} failed:`, result.reason);
      }
    });
  });
```

### Async/Await

**Modern Async Syntax:**
```javascript
// Basic async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Using async function
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Sequential vs Parallel execution
async function sequentialExample() {
  console.log("Starting sequential operations...");
  
  const result1 = await new Promise(resolve => 
    setTimeout(() => resolve("First"), 1000)
  );
  const result2 = await new Promise(resolve => 
    setTimeout(() => resolve("Second"), 1000)
  );
  
  console.log(result1, result2); // Takes ~2 seconds total
}

async function parallelExample() {
  console.log("Starting parallel operations...");
  
  const promise1 = new Promise(resolve => 
    setTimeout(() => resolve("First"), 1000)
  );
  const promise2 = new Promise(resolve => 
    setTimeout(() => resolve("Second"), 1000)
  );
  
  const [result1, result2] = await Promise.all([promise1, promise2]);
  console.log(result1, result2); // Takes ~1 second total
}
```

### Fetch API

**Making HTTP Requests:**
```javascript
// Basic GET request
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// POST request
async function createUser(userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Usage example
async function userManagement() {
  try {
    // Get all users
    const users = await getUsers();
    console.log('Users:', users);
    
    // Create new user
    const newUser = await createUser({
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('New user created:', newUser);
    
  } catch (error) {
    console.error('User management error:', error);
  }
}
```

### Error Handling in Async Code

**Try/Catch with Async/Await:**
```javascript
async function robustAsyncFunction() {
  try {
    // Multiple async operations
    const step1 = await firstAsyncOperation();
    const step2 = await secondAsyncOperation(step1);
    const step3 = await thirdAsyncOperation(step2);
    
    return step3;
  } catch (error) {
    // Handle any error from any step
    console.error('Operation failed:', error.message);
    
    // You can re-throw, return default value, or handle differently
    if (error.code === 'NETWORK_ERROR') {
      return getFromCache();
    }
    
    throw new Error(`Process failed: ${error.message}`);
  } finally {
    // Cleanup code (always runs)
    console.log('Cleaning up resources...');
  }
}
```

⚡️ **Interview tip:** What's the difference between Promises and async/await? When would you use each?

**Answer:**
- **Promises:** Use `.then()` and `.catch()` methods. Better for complex promise chaining, parallel operations with Promise.all(), and when you need to return a promise from a function.
- **Async/await:** Syntactic sugar over promises. Makes code look synchronous and easier to read. Better for sequential operations and when you need try/catch error handling.
- **Use cases:** Promises for functional programming style and complex promise combinations. Async/await for cleaner, more readable code that resembles synchronous code.

---

## 🔹 9. Comparison Operators

**Purpose:** Understanding different types of equality and comparison in JavaScript.

### Equality Operators

**== vs === Comparison:**
```javascript
// == (loose equality) - performs type coercion
console.log(5 == "5");        // true (number 5 equals string "5")
console.log(true == 1);       // true (boolean true equals number 1)
console.log(false == 0);      // true (boolean false equals number 0)
console.log(null == undefined); // true (special case)
console.log("" == 0);         // true (empty string equals number 0)

// === (strict equality) - no type coercion
console.log(5 === "5");       // false (different types)
console.log(true === 1);      // false (different types)
console.log(false === 0);     // false (different types)
console.log(null === undefined); // false (different types)
console.log("" === 0);        // false (different types)

// Object comparison (both == and === compare references)
const obj1 = {name: "John"};
const obj2 = {name: "John"};
const obj3 = obj1;

console.log(obj1 == obj2);    // false (different objects)
console.log(obj1 === obj2);   // false (different objects)
console.log(obj1 === obj3);   // true (same reference)
```

### Type Coercion Examples

**Understanding Automatic Type Conversion:**
```javascript
// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false (BigInt zero)
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values (everything else)
console.log(Boolean(true));      // true
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true (empty array)
console.log(Boolean({}));        // true (empty object)
console.log(Boolean(function(){})); // true

// Common gotchas
console.log("10" + 5);           // "105" (string concatenation)
console.log("10" - 5);           // 5 (number subtraction)
console.log("10" * 5);           // 50 (number multiplication)
console.log(+"10");              // 10 (unary + converts to number)
console.log(!!"hello");          // true (double negation converts to boolean)
```

### Best Practices

**Safe Comparison Techniques:**
```javascript
// Always use === unless you specifically need type coercion
function isEqual(a, b) {
  return a === b;
}

// Checking for null or undefined
function isNullOrUndefined(value) {
  return value === null || value === undefined;
  // Or use: return value == null; (only case where == is preferred)
}

// Safe object property checking
function hasProperty(obj, prop) {
  return obj != null && obj.hasOwnProperty(prop);
}

// Array checking
function isArray(value) {
  return Array.isArray(value); // Better than value instanceof Array
}

// Type checking utility
function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

// Safe number checking
function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
```

⚡️ **Interview tip:** Explain the difference between == and === operators. Provide examples where each would give different results.

**Answer:**
- **== (loose equality):** Performs type coercion before comparison. Converts operands to the same type, then compares.
- **=== (strict equality):** No type coercion. Compares both value and type.
- **Examples:** `5 == "5"` is true, `5 === "5"` is false. `true == 1` is true, `true === 1` is false.
- **Best practice:** Always use === unless you specifically need type coercion. It's more predictable and prevents bugs from unexpected type conversions.

---

## 🔹 10. Algorithmic Thinking / Problem Solving

**Purpose:** Common programming challenges and problem-solving patterns.

### FizzBuzz Challenge

**Classic Programming Problem:**
```javascript
// FizzBuzz: Print numbers 1-100, but:
// - "Fizz" for multiples of 3
// - "Buzz" for multiples of 5  
// - "FizzBuzz" for multiples of both 3 and 5

function fizzBuzz(n = 100) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    console.log(output || i);
  }
}

// Alternative approach
function fizzBuzzArray(n = 100) {
  return Array.from({length: n}, (_, i) => {
    const num = i + 1;
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  });
}

// One-liner approach
const fizzBuzzOneLiner = n => 
  [...Array(n)].map((_, i) => 
    (++i % 15 ? i % 5 ? i % 3 ? i : 'Fizz' : 'Buzz' : 'FizzBuzz')
  );
```

### Calculator Implementation

**Basic Calculator with Different Approaches:**
```javascript
// Simple calculator function
function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    case '%':
      return num1 % num2;
    case '**':
      return num1 ** num2;
    default:
      return "Invalid operator";
  }
}

// Object-oriented calculator
class Calculator {
  constructor() {
    this.result = 0;
    this.history = [];
  }
  
  add(num) {
    this.result += num;
    this.history.push(`+ ${num}`);
    return this;
  }
  
  subtract(num) {
    this.result -= num;
    this.history.push(`- ${num}`);
    return this;
  }
  
  multiply(num) {
    this.result *= num;
    this.history.push(`× ${num}`);
    return this;
  }
  
  divide(num) {
    if (num === 0) throw new Error("Cannot divide by zero");
    this.result /= num;
    this.history.push(`÷ ${num}`);
    return this;
  }
  
  getResult() {
    return this.result;
  }
  
  clear() {
    this.result = 0;
    this.history = [];
    return this;
  }
  
  getHistory() {
    return this.history.join(' ');
  }
}

// Usage: calc.add(5).multiply(2).subtract(3).getResult(); // 7

// Advanced calculator with expression parsing
function evaluateExpression(expression) {
  // Remove spaces and validate
  const cleaned = expression.replace(/\s+/g, '');
  
  if (!/^[\d+\-*/().]+$/.test(cleaned)) {
    throw new Error("Invalid expression");
  }
  
  try {
    // Note: In production, use a proper parser instead of eval
    return Function(`"use strict"; return (${cleaned})`)();
  } catch (error) {
    throw new Error("Invalid mathematical expression");
  }
}
```

### Palindrome Checker

**Check if String Reads Same Forwards and Backwards:**
```javascript
// Basic palindrome check
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// More efficient approach (no array creation)
function isPalindromeEfficient(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Recursive approach
function isPalindromeRecursive(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  function checkPalindrome(s, start = 0, end = s.length - 1) {
    if (start >= end) return true;
    if (s[start] !== s[end]) return false;
    return checkPalindrome(s, start + 1, end - 1);
  }
  
  return checkPalindrome(cleaned);
}

// Test cases
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("Was it a rat I saw?")); // true
```

### Array and String Reversal

**Different Ways to Reverse Data Structures:**
```javascript
// Reverse array - built-in method (mutates original)
function reverseArrayMutating(arr) {
  return arr.reverse();
}

// Reverse array - without mutation
function reverseArray(arr) {
  return [...arr].reverse();
  // or: return arr.slice().reverse();
  // or: return arr.map((_, i, array) => array[array.length - 1 - i]);
}

// Reverse array - manual approach
function reverseArrayManual(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Reverse array - in-place without built-in methods
function reverseInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    // Swap elements
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  
  return arr;
}

// Reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Reverse string - manual approach
function reverseStringManual(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Reverse words in a sentence
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// Reverse each word in a sentence
function reverseEachWord(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
```

### Array Filtering Challenges

**Common Filtering and Manipulation Tasks:**
```javascript
// Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Remove duplicates (preserving order, complex objects)
function removeDuplicatesComplex(arr, key) {
  const seen = new Set();
  return arr.filter(item => {
    const identifier = key ? item[key] : item;
    if (seen.has(identifier)) {
      return false;
    }
    seen.add(identifier);
    return true;
  });
}

// Find intersection of two arrays
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

// Find difference between arrays
function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

// Group array elements by property
function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}

// Find most frequent element
function mostFrequent(arr) {
  const frequency = {};
  let maxCount = 0;
  let mostFrequentItem = null;
  
  for (const item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  
  return mostFrequentItem;
}

// Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity); // Built-in method
}

// Flatten nested array - manual recursive approach
function flattenArrayRecursive(arr) {
  const result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArrayRecursive(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}
```

⚡️ **Interview tip:** How would you approach solving a coding problem you haven't seen before?

**Answer:**
1. **Understand the problem:** Read carefully, ask clarifying questions, identify inputs/outputs
2. **Break it down:** Divide into smaller sub-problems
3. **Consider approaches:** Brute force first, then optimize. Think about data structures and algorithms
4. **Write pseudocode:** Plan the logic before coding
5. **Implement:** Start with working solution, then optimize
6. **Test:** Use edge cases, empty inputs, large inputs
7. **Optimize:** Consider time/space complexity improvements

---

## 🔹 11. Debugging

**Purpose:** Identify, diagnose, and fix errors in JavaScript code.

### Types of Errors

**Common JavaScript Errors:**
```javascript
// 1. Syntax Errors - Code won't run
// Missing bracket, comma, etc.
function broken() {
  console.log("Hello"
} // Missing closing parenthesis

// 2. Reference Errors - Variable doesn't exist
console.log(undefinedVariable); // ReferenceError

// 3. Type Errors - Wrong type operation
const num = 5;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

// 4. Range Errors - Value out of valid range
const arr = new Array(-1); // RangeError: Invalid array length

// 5. Logic Errors - Code runs but produces wrong result
function calculateArea(width, height) {
  return width + height; // Should be width * height
}
```

### Debugging Techniques

**Console Methods:**
```javascript
// Basic logging
console.log("Debug message");
console.log("Variable value:", variable);

// Different log levels
console.info("Information message");
console.warn("Warning message");
console.error("Error message");

// Group related logs
console.group("User Processing");
console.log("Processing user:", user.name);
console.log("User age:", user.age);
console.groupEnd();

// Table display for objects/arrays
const users = [
  {name: "John", age: 25},
  {name: "Jane", age: 30}
];
console.table(users);

// Timing code execution
console.time("Array processing");
// ... some code
console.timeEnd("Array processing");

// Conditional logging
const debug = true;
debug && console.log("Debug mode active");

// Stack trace
console.trace("Current execution path");
```

### Browser Developer Tools

**Using DevTools Effectively:**
```javascript
// Breakpoints in code
function debugExample(data) {
  debugger; // Code will pause here when DevTools is open
  
  const processed = data.map(item => {
    debugger; // Pause on each iteration
    return item.toUpperCase();
  });
  
  return processed;
}

// Conditional breakpoints (set in DevTools)
// Right-click on line number → Add conditional breakpoint
// Condition example: item.name === "John"

// Watch expressions in DevTools
// Add expressions like: data.length, item.name, etc.
```

### Error Handling

**Try-Catch for Debugging:**
```javascript
// Basic error handling
function safeFunction(data) {
  try {
    // Potentially problematic code
    return data.map(item => item.toUpperCase());
  } catch (error) {
    console.error("Error in safeFunction:", error.message);
    console.error("Stack trace:", error.stack);
    
    // Return safe fallback
    return [];
  }
}

// More detailed error information
function detailedErrorHandling(data) {
  try {
    if (!Array.isArray(data)) {
      throw new TypeError("Expected array, got " + typeof data);
    }
    
    return data.map((item, index) => {
      try {
        return item.toUpperCase();
      } catch (itemError) {
        console.warn(`Error processing item at index ${index}:`, itemError.message);
        return item; // Return original item if processing fails
      }
    });
  } catch (error) {
    console.error("Fatal error:", error.message);
    throw error; // Re-throw if cannot recover
  }
}
```

### Debugging Strategies

**Systematic Debugging Approach:**
```javascript
// 1. Isolate the problem
function debugStepByStep(input) {
  console.log("Input received:", input);
  
  // Check each step
  const step1 = processStep1(input);
  console.log("After step 1:", step1);
  
  const step2 = processStep2(step1);
  console.log("After step 2:", step2);
  
  const result = processStep3(step2);
  console.log("Final result:", result);
  
  return result;
}

// 2. Validate assumptions
function validateAssumptions(data) {
  console.assert(Array.isArray(data), "Data should be an array");
  console.assert(data.length > 0, "Data should not be empty");
  console.assert(data.every(item => typeof item === 'string'), "All items should be strings");
}

// 3. Create test cases
function testFunction() {
  const testCases = [
    { input: ["hello", "world"], expected: ["HELLO", "WORLD"] },
    { input: [], expected: [] },
    { input: ["test"], expected: ["TEST"] }
  ];
  
  testCases.forEach((testCase, index) => {
    const result = myFunction(testCase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
    
    console.log(`Test ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
    if (!passed) {
      console.log("Expected:", testCase.expected);
      console.log("Got:", result);
    }
  });
}

// 4. Binary search debugging (for large codebases)
function binarySearchDebug(data) {
  console.log("Starting binary search debug");
  
  // Comment out half the code to isolate issue
  const firstHalf = processFirstHalf(data);
  console.log("First half works:", firstHalf);
  
  // If first half works, issue is in second half
  const secondHalf = processSecondHalf(firstHalf);
  console.log("Second half result:", secondHalf);
  
  return secondHalf;
}
```

### Performance Debugging

**Finding Performance Issues:**
```javascript
// Measure function performance
function measurePerformance(func, ...args) {
  const start = performance.now();
  const result = func(...args);
  const end = performance.now();
  
  console.log(`Function took ${end - start} milliseconds`);
  return result;
}

// Memory usage debugging
function memoryDebug() {
  if (performance.memory) {
    console.log("Memory usage:", {
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    });
  }
}

// Profile array operations
function profileArrayOperations(size = 100000) {
  const arr = Array.from({length: size}, (_, i) => i);
  
  console.time("for loop");
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  console.timeEnd("for loop");
  
  console.time("reduce");
  const sum2 = arr.reduce((total, num) => total + num, 0);
  console.timeEnd("reduce");
  
  console.log("Results equal:", sum1 === sum2);
}
```

⚡️ **Interview tip:** What debugging strategies do you use when encountering a bug in production?

**Answer:**
1. **Reproduce the issue:** Get exact steps and environment details
2. **Check logs:** Look for error messages, stack traces, user actions
3. **Isolate the problem:** Binary search through code, disable features
4. **Use debugging tools:** Console.log, debugger statements, browser DevTools
5. **Check recent changes:** Git history, deployment logs
6. **Add monitoring:** More detailed logging, error tracking
7. **Test fix thoroughly:** Unit tests, integration tests, staging environment
8. **Document the issue:** What caused it, how it was fixed, prevention strategies

---

## ✅ Summary of the block

You should confidently know:

### Core JavaScript Fundamentals
- **Data types** (primitive vs reference types, type checking)
- **Variable declarations** (var, let, const differences and scoping)
- **Control flow** (conditions, loops, when to use each type)

### Functions and Advanced Concepts
- **Function types** (declarations, expressions, arrow functions)
- **Higher-order functions** (callbacks, array methods like map/filter/reduce)
- **Closures and scope** (lexical scoping, practical applications)
- **Asynchronous programming** (Promises, async/await, Fetch API)

### Object-Oriented Programming
- **Objects and arrays** (creation, manipulation, destructuring)
- **ES6 classes** (constructors, inheritance, static methods)
- **Prototypal inheritance** (prototype chain, Object.create)

### Problem-Solving Skills
- **Algorithm implementation** (FizzBuzz, palindromes, array manipulation)
- **Debugging techniques** (console methods, DevTools,