# JavaScript Function Types: From Scratch to Advanced

## 1️⃣ Introduction
Functions in JavaScript are essential building blocks for organizing and reusing code efficiently. Let's explore different types of functions, from basic to advanced concepts.

---
## 2️⃣ Function Declaration
A function declaration defines a named function that can be called anywhere in the code before it's defined (hoisting applies).

```js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Kurshed")); // Output: Hello, Kurshed!
```
✅ **Key Points:**
- Hoisted to the top of their scope.
- Can be called before declaration.
- Readable and structured.

---
## 3️⃣ Function Expression
A function assigned to a variable. It is not hoisted, meaning it must be defined before calling.

```js
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Kurshed"));
```
✅ **Key Points:**
- Not hoisted.
- Used when passing functions as arguments.
- Can be anonymous or named.

---
## 4️⃣ Arrow Functions (ES6)
A concise way to define functions, especially useful for callbacks.

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Kurshed"));
```
✅ **Key Points:**
- Implicit return when single statement.
- `this` behaves differently (lexical `this`).
- Cannot be used as constructors.

---
## 5️⃣ Immediately Invoked Function Expression (IIFE)
Executes immediately after being defined, useful for private scopes.

```js
(function() {
    console.log("IIFE executed!");
})();
```
✅ **Key Points:**
- Used to avoid global scope pollution.
- Runs immediately after definition.

---
## 6️⃣ Higher-Order Functions
Functions that take other functions as arguments or return a function.

```js
function operate(a, b, operation) {
    return operation(a, b);
}
const sum = (x, y) => x + y;
console.log(operate(5, 3, sum)); // Output: 8
```
✅ **Key Points:**
- Enables functional programming.
- Used for array methods like `map`, `filter`, `reduce`.

---
## 7️⃣ Callback Functions
A function passed as an argument to another function.

```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}
fetchData(console.log);
```
✅ **Key Points:**
- Essential for asynchronous programming.
- Used in event handling, timers, etc.

---
## 8️⃣ Closures
A function that retains access to variables from its outer scope.

```js
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
```
✅ **Key Points:**
- Preserves private data.
- Used in function factories and data encapsulation.

---
## 9️⃣ Recursion
A function that calls itself until a base condition is met.

```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```
✅ **Key Points:**
- Useful for tree traversal, Fibonacci, etc.
- Requires a base case to prevent infinite loops.

---
## 🔟 Function Currying
Breaking down functions into smaller functions that take arguments one at a time.

```js
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // Output: 10
```
✅ **Key Points:**
- Enhances function reusability.
- Used in functional programming.

---
## 1️⃣1️⃣ Function Composition
Combining multiple functions to create a new function.

```js
const add5 = (num) => num + 5;
const square = (num) => num * num;
const compose = (f, g) => (x) => f(g(x));
const add5AndSquare = compose(square, add5);
console.log(add5AndSquare(2)); // Output: 49
```
✅ **Key Points:**
- Used in functional programming.
- Encourages modular code.

---
## 1️⃣2️⃣ Async/Await
Handling asynchronous operations in a cleaner way than callbacks.

```js
async function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 2000));
}
async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData();
```
✅ **Key Points:**
- Simplifies working with promises.
- Avoids callback hell.

---
## 1️⃣3️⃣ Function Binding (`bind`, `call`, `apply`)
Allows explicit control of `this`.

```js
const person = {
    name: "Kurshed",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
const greetPerson = person.greet.bind(person);
greetPerson();
```
✅ **Key Points:**
- `bind` returns a new function with `this` bound.
- `call` and `apply` invoke functions immediately.

---
## 🎯 Conclusion
Mastering JavaScript functions is crucial for writing efficient, modular, and scalable code. Understanding different function types empowers developers to write more effective programs. 🚀

