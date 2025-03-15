# Error Handling in JavaScript (Basic to Advanced)

## 1️⃣ What is Error Handling?
- Error handling in JavaScript allows us to manage and respond to runtime errors in a controlled manner.
- It prevents applications from crashing and helps in debugging.

---

## 2️⃣ Using `try...catch`
```js
try {
  let result = 10 / 0;
  console.log(result); // Infinity (not an error in JS)
} catch (error) {
  console.error("An error occurred:", error);
}
```
- Code inside `try` runs normally.
- If an error occurs, control jumps to `catch`.

---

## 3️⃣ Handling Specific Errors
```js
try {
  let data = JSON.parse('{ invalid json }');
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("JSON Syntax Error:", error.message);
  } else {
    console.error("Unexpected Error:", error);
  }
}
```
- We check the error type using `instanceof`.

---

## 4️⃣ Using `finally`
```js
try {
  console.log("Trying to execute...");
} catch (error) {
  console.error("Error:", error);
} finally {
  console.log("Execution completed");
}
```
- `finally` runs **always**, whether an error occurs or not.

---

## 5️⃣ Throwing Custom Errors
```js
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.error("Custom Error:", error.message);
}
```
- **`throw`** manually creates an error.

---

## 6️⃣ Error Handling in Async/Await
```js
async function fetchData() {
  try {
    let response = await fetch("invalid-url");
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchData();
```
- Always use `try...catch` for **async/await** to catch errors.

---

## 7️⃣ Using `.catch()` with Promises
```js
fetch("invalid-url")
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Promise Error:", error));
```
- `.catch()` handles errors in **Promise chains**.

---

🚀 **Next Step:** Learn Advanced Error Handling Techniques like Global Error Handling and Custom Error Classes!
