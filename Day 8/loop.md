# 📌 JavaScript Loops - From Basics to Advanced 🚀

Loops in JavaScript allow us to execute a block of code **multiple times**. Let's explore different types of loops **from basic to advanced**. 🔄

---

## 🔹 **1. The `for` Loop (Basic Loop)**

✅ Used when the **number of iterations is known** beforehand.

```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
```

🔍 **Explanation:**
- `i = 0` → Initial value
- `i < 5` → Condition
- `i++` → Increment

📌 **Output:**
```
Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
```

---

## 🔹 **2. The `while` Loop (Condition-Based Loop)**

✅ Used when the **condition is checked before execution**.

```js
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
```

🔍 **Best Use Case:** When the **number of iterations is unknown** beforehand.

---

## 🔹 **3. The `do...while` Loop (Runs At Least Once)**

✅ Executes **at least once** before checking the condition.

```js
let num = 5;
do {
    console.log("Executing at least once!", num);
    num++;
} while (num < 5);
```

🔍 **Best Use Case:** When you **need execution before condition checking**.

---

## 🔹 **4. The `for...of` Loop (Iterating Over Arrays & Strings)**

✅ Used to iterate over **arrays or iterable objects**.

```js
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

🔍 **Best Use Case:** When working with **arrays, strings, or sets**.

---

## 🔹 **5. The `for...in` Loop (Iterating Over Object Properties)**

✅ Used to iterate over **object properties**.

```js
const person = { name: "Kurshed", age: 25, city: "Jaipur" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

🔍 **Best Use Case:** When working with **objects**.

---

## 🔹 **6. Loop Control Statements (Break & Continue)**

### **📌 `break` - Exits the loop completely**
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
```
📌 **Output:**
```
1
2
```

### **📌 `continue` - Skips current iteration**
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```
📌 **Output:**
```
1
2
4
5
```

---

## 🔹 **7. Nested Loops (Loop Inside a Loop)**

✅ Useful for **multidimensional arrays or pattern printing**.

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

📌 **Output:**
```
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
...
```

---

## 🔹 **8. Looping Over Arrays - Best Practices**

### ✅ **Using `map()` - Preferred for Array Transformations**
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

### ✅ **Using `filter()` - Preferred for Array Filtering**
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

### ✅ **Using `forEach()` - Preferred for Iteration**
```js
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
fruits.forEach(fruit => console.log(fruit));
```

---

## **🛠 Best Practices for Loops**

✔️ Use `forEach()`, `map()`, or `filter()` for array operations when possible.  
✔️ Avoid `for...in` for arrays (use it for objects instead).  
✔️ Use `break` to exit a loop when needed.  
✔️ Use `continue` to skip unnecessary iterations.  

---

Now you have a solid understanding of loops in JavaScript! 🔄🔥 Would you like an example project using loops? 🚀

