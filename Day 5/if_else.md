# 📌 JavaScript Conditional Statements - Deep Dive

## 🟢 Introduction
Conditional statements in JavaScript allow the execution of different blocks of code based on certain conditions.

---

## 🏁 Basic Conditional Statements

### 🔹 `if` Statement
```js
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
```
📖 *Executes a block of code if the condition inside `if` is true.*

### 🔹 `if-else` Statement
```js
let num = 10;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```
📖 *Executes one block if the condition is true, otherwise executes the `else` block.*

### 🔹 `if-else if-else` Statement
```js
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```
📖 *Allows multiple conditions to be checked sequentially.*

---

## 🚀 Advanced `if-else` Conditions

### 🔸 Nested `if-else`
```js
let age = 25;
if (age >= 18) {
    if (age >= 21) {
        console.log("You can drink alcohol.");
    } else {
        console.log("You can vote but not drink alcohol.");
    }
} else {
    console.log("You are underage.");
}
```
📖 *An `if-else` statement inside another `if-else` statement to check multiple conditions.*

### 🔸 Using Logical Operators
```js
let age = 20;
if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are either too young or a senior citizen.");
}
```
📖 *Combining conditions using logical operators (`&&`, `||`, `!`).*

### 🔸 Ternary Operator (`? :`)
```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
```
📖 *A concise way to write `if-else` statements.*

---

## 🏆 Conclusion
Mastering `if-else` statements allows you to control program flow effectively. Understanding different variations, including nested conditions and logical operators, makes your JavaScript code more efficient and readable! 🚀
