# JavaScript Functions: Basic Concepts

## 1. Introduction
Functions are reusable blocks of code designed to perform a specific task. They help in code organization and reusability.

## 2. Declaring Functions
### 2.1 Function Declaration
```js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));
```

### 2.2 Function Expression
```js
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("John"));
```

### 2.3 Arrow Functions
```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("John"));
```

## 3. Function Parameters & Arguments
```js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
```

### Default Parameters
```js
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // Output: 10
```

### Rest Parameters
```js
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

## 4. Return Statement
A function can return a value using the `return` keyword. If no `return` is specified, the function returns `undefined`.

```js
function square(num) {
    return num * num;
}
console.log(square(4)); // Output: 16
```

## 5. Function Scope
Functions create their own scope for variables.
```js
function example() {
    let x = 10;
    console.log(x); // Accessible inside the function
}
// console.log(x); // Error: x is not defined
```

## 6. Function Hoisting
Function declarations are hoisted, but function expressions are not.
```js
console.log(hello()); // Works due to hoisting
function hello() {
    return "Hi!";
}
```
```js
// console.log(hello()); // Error: Cannot access 'hello' before initialization
const hello = function() {
    return "Hi!";
};
```

## 7. Callback Functions
A function that is passed as an argument to another function.
```js
function processUserInput(callback) {
    let name = "John";
    callback(name);
}
processUserInput((name) => console.log(`Hello, ${name}`));
```

## 8. IIFE (Immediately Invoked Function Expression)
```js
(function() {
    console.log("This runs immediately!");
})();
```

## 9. Higher-Order Functions
Functions that take other functions as arguments or return functions.
```js
function operate(operation, a, b) {
    return operation(a, b);
}
const add = (x, y) => x + y;
console.log(operate(add, 5, 3));
```

## 10. Conclusion
Functions are the backbone of JavaScript programming, allowing for modular, reusable, and efficient code.
