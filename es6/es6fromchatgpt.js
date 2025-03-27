/**
 * ES6 (ECMAScript 2015) introduced many powerful features to JavaScript. Here are some of the most important ones:

1. Let & Const (Block-Scoped Variables)
let allows block-scoped variables.

const declares constants that cannot be reassigned.

js
Copy
Edit
let x = 10;
const y = 20;
x = 15;  // Allowed
y = 25;  // Error: Assignment to constant variable
2. Arrow Functions (=>)
Concise syntax for functions.

js
Copy
Edit
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
3. Template Literals ( )
String interpolation using backticks.

js
Copy
Edit
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
4. Default Parameters
Set default values for function parameters.

js
Copy
Edit
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
5. Destructuring Assignment
Extract values from arrays or objects.

js
Copy
Edit
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice 25
6. Spread (...) and Rest (...) Operators
Spread: Expands elements.

Rest: Gathers arguments into an array.

js
Copy
Edit
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
7. Object Property Shorthand
If variable names match object property names.

js
Copy
Edit
const name = "Bob";
const age = 30;
const person = { name, age }; // { name: "Bob", age: 30 }
8. Promises (async & await came later in ES8)
Handle asynchronous operations.

js
Copy
Edit
const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
};
fetchData().then(console.log); // "Data loaded" after 1 sec
9. Classes (OOP in JavaScript)
ES6 introduced the class syntax for object-oriented programming.

js
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
const john = new Person("John", 25);
john.greet(); // Hello, I'm John
10. Modules (import / export)
ES6 allows modular JavaScript with import and export.

Exporting:
js
Copy
Edit
export const name = "Alice";
export function sayHello() {
  console.log("Hello!");
}
Importing:
js
Copy
Edit
import { name, sayHello } from "./module.js";
console.log(name); // Alice
sayHello(); // Hello!
These are just some of the powerful features ES6 introduced! 🚀 Let me know if you need more details. 😊








You said:
js -es6 -features


ChatGPT said:
ES6 (ECMAScript 2015) Features in JavaScript 🚀
ES6 introduced many powerful features to improve JavaScript. Here are the key ones:

1. let and const (Block-Scoped Variables)
let allows reassignment, but is block-scoped.

const cannot be reassigned.

js
Copy
Edit
let x = 10;
const y = 20;

x = 15;  // ✅ Allowed
y = 25;  // ❌ Error: Assignment to constant variable
2. Arrow Functions (=>)
Shorter function syntax.

Implicit return for single expressions.

js
Copy
Edit
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
3. Template Literals ( )
String interpolation using backticks.

js
Copy
Edit
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
4. Default Parameters
Set default values for function parameters.

js
Copy
Edit
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
5. Destructuring Assignment
Extract values from arrays or objects.

js
Copy
Edit
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice 25
6. Spread (...) and Rest (...) Operators
Spread: Expands elements.

Rest: Gathers arguments into an array.

js
Copy
Edit
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
7. Object Property Shorthand
If variable names match object property names.

js
Copy
Edit
const name = "Bob";
const age = 30;
const person = { name, age }; // { name: "Bob", age: 30 }
8. Promises (Async Operations)
Handle asynchronous operations.

js
Copy
Edit
const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
};

fetchData().then(console.log); // "Data loaded" after 1 sec
9. Classes (OOP in JavaScript)
ES6 introduced class for object-oriented programming.

js
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const john = new Person("John", 25);
john.greet(); // Hello, I'm John
10. Modules (import / export)
ES6 allows modular JavaScript.

Exporting:
js
Copy
Edit
export const name = "Alice";
export function sayHello() {
  console.log("Hello!");
}
Importing:
js
Copy
Edit
import { name, sayHello } from "./module.js";
console.log(name); // Alice
sayHello(); // Hello!
These features made JavaScript more modern, readable, and efficient! 🚀 Let me know if you need further explanations. 😊











Search


 */