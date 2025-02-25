## 🎭 Ternary Operator (`? :`)

### 🔹 Basic Usage
```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
```
📖 *A concise way to write `if-else` statements.*

### 🔹 Multiple Conditions with Ternary Operator
```js
let age = 16;
let message = (age < 13) ? "Child" : (age < 18) ? "Teenager" : "Adult";
console.log(message);
```
📖 *Nesting ternary operators can handle multiple conditions in a compact form.*

### 🔹 Ternary with Function Calls
```js
let isLoggedIn = true;
console.log(isLoggedIn ? welcomeUser() : showLogin());
```
📖 *Ternary operators can directly execute functions based on conditions.*

### 🔹 Ternary for Short-Circuiting
```js
let user = "Kurshed";
console.log(user ? `Hello, ${user}!` : "Welcome, Guest!");
```
📖 *Using the ternary operator to handle default values dynamically.*

### 🔹 Avoiding Unnecessary Nesting
```js
let num = 5;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(`Number is ${type}`);
```
📖 *Keeps conditional checks concise and readable.*