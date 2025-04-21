
# 📘 JavaScript Interval Complete Notes

## ⏱ What is `setInterval()`?

`setInterval()` is a JavaScript function that repeatedly executes a specified function at every given time interval (in milliseconds).

### ✅ Syntax

```js
setInterval(function, milliseconds, param1, param2, ...)
```

- `function`: The function to execute repeatedly.
- `milliseconds`: Time delay between executions (1 second = 1000 ms).
- `param1, param2, ...`: Optional parameters to pass to the function.

### 🧨 Returns:
An interval ID which can be used to stop the interval using `clearInterval()`.

---

## 🔁 Example 1: Basic Usage

```js
function sayHello() {
  console.log("Hello, world!");
}

let intervalId = setInterval(sayHello, 1000); // Runs every 1 second
```

---

## 🛑 How to Stop an Interval

Use `clearInterval(intervalId)` to stop it.

```js
clearInterval(intervalId); // Stops the interval
```

---

## ⏳ Example 2: Stop Interval After 5 Seconds

```js
let count = 0;

let intervalId = setInterval(() => {
  count++;
  console.log(`Count is: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval cleared!");
  }
}, 1000);
```

---

## 📦 Example 3: Using Parameters with Interval Function

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

let id = setInterval(greet, 2000, "Kurshed");
```

---

## 🧠 Notes

- `setInterval()` is asynchronous; it does **not** block the code.
- Timing is approximate; delays can happen if the main thread is busy.
- Prefer `setTimeout()` if you want to run something just once.

---

## ⚠️ Best Practice

- Always store the interval ID to clear it later.
- Avoid memory leaks by stopping intervals when no longer needed.
