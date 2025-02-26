# JavaScript Functions: Basic to Advanced 🚀

# 1️⃣ Basic Functions

## 1. Simple Function Declaration

```js

function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

```
## 2. Function with Parameters

```js

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Kurshed");

```
## 3. Function with Return Value

```js 

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

```

## 4. Function Expression

```js

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 2));

```

## 5. Arrow Function (ES6)

```js

const subtract = (a, b) => a - b;
console.log(subtract(10, 4));

```

## 6. Default Parameters

```js

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet();

```

# 2️⃣ Intermediate Functions

## 1. Callback Functions

```js

function processData(data, callback) {
    console.log("Processing:", data);
    callback();
}
processData("User Data", () => console.log("Data processed!"));

```

## 2. Higher-Order Functions

```js

function operate(a, b, operation) {
    return operation(a, b);
}
const multiply = (x, y) => x * y;
console.log(operate(4, 3, multiply));

```
## 3. IIFE (Immediately Invoked Function Expression)

```js

(function() {
    console.log("This runs immediately!");
})();

```

## 4. Closures

```js

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());

```

## 5. Recursion

```js

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

```

## 6. Function Currying

```js

const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5));

```

## 7. Function Binding

```js

const user = {
    name: "Kurshed",
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
};
const sayHelloBinded = user.sayHello.bind(user);
sayHelloBinded();

```

## 3️⃣ Advanced Functions

## 1. Debouncing

```js

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
const log = debounce((msg) => console.log(msg), 1000);
log("Hello");

```
## 2. Throttling

```js

function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}
const logThrottle = throttle((msg) => console.log(msg), 2000);
logThrottle("Message 1");

```

## 3. Memoization

```js

function memoize(fn) {
    let cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const factorial = memoize((n) => (n === 0 ? 1 : n * factorial(n - 1)));
console.log(factorial(5));

```

## 4. Partial Application

```js

function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}
const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);
console.log(add5(3, 2));

```

## 5. Function Composition

```js

const compose = (...functions) => (value) => 
    functions.reduceRight((acc, fn) => fn(acc), value);
const add5 = (num) => num + 5;
const square = (num) => num * num;
const double = (num) => num * 2;
const complexOperation = compose(double, square, add5);
console.log(complexOperation(2));

```

## 6. Async/Await

```js

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

```

## 7. Self-Destructing Function

```js

function selfDestruct() {
    console.log("This function will destroy itself!");
    selfDestruct = null;
}
selfDestruct();
selfDestruct();

```

## 8. Generating Functions Dynamically

```js

function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const triple = createMultiplier(3);
console.log(triple(4));

```
# 🎯 Conclusion

### This guide covers all function types from Basic to Advanced. Mastering them will make you a better JavaScript developer! 🚀

