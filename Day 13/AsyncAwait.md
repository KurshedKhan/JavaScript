# Async/Await in JavaScript (Modern Approach)

## **1. Introduction to Async/Await**
`async/await` is a modern way to handle asynchronous operations in JavaScript, making code easier to read and write compared to callbacks and Promises.

✅ **Simplifies working with Promises**
✅ **Improves code readability**
✅ **Avoids callback hell**

---

## **2. Understanding Asynchronous JavaScript**
JavaScript is **single-threaded** and executes code synchronously by default. However, asynchronous operations (like API calls, file reading, or timers) run separately to prevent blocking the main thread.

🔹 **Common Asynchronous Operations:**
- Fetching data from APIs (`fetch()`)
- File I/O operations
- Database queries
- Timers (`setTimeout`, `setInterval`)

---

## **3. Async Functions**
An `async` function always returns a **Promise**. It allows you to use the `await` keyword inside it.

### **Basic Syntax:**
```js
async function myFunction() {
  return "Hello, Async/Await!";
}

myFunction().then(console.log); // Output: Hello, Async/Await!
```

🔹 **Key Points:**
- `async` ensures the function returns a Promise.
- The function’s return value is automatically wrapped in a Promise.

---

## **4. The Await Keyword**
The `await` keyword pauses function execution until a Promise is resolved.

### **Example: Fetching Data**
```js
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}
fetchData();
```

🔹 **How It Works:**
1. The function starts executing.
2. `await` waits for `fetch()` to complete before proceeding.
3. The function **does not block** the main thread.

---

## **5. Error Handling in Async/Await**
Use `try...catch` to handle errors in `async` functions.

```js
async function fetchData() {
  try {
    const response = await fetch('https://invalid-url.com');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}
fetchData();
```

✅ **Prevents app crashes due to API failures.
✅ Handles network issues and invalid URLs gracefully.

---

## **6. Async/Await vs Promises**
| Feature | Promises | Async/Await |
|---------|---------|------------|
| Syntax | `.then().catch()` | `async` & `await` |
| Readability | Harder for complex logic | Cleaner & more readable |
| Error Handling | `.catch()` | `try...catch` |
| Execution | Non-blocking | Non-blocking |

---

## **7. Parallel Execution with Async/Await**
Sometimes, multiple async tasks can run **simultaneously** to improve performance.

🔹 **Example: Running Tasks in Parallel using `Promise.all()`**
```js
async function fetchMultiple() {
  const [user, posts] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json())
  ]);
  console.log(user, posts);
}
fetchMultiple();
```

✅ **Faster execution compared to sequential `await` calls.
✅ Runs both fetch requests at the same time.

---

## **8. Handling Timeouts with Async/Await**
To prevent an API from taking too long, we can set a timeout.

```js
function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error("Request Timed Out")), ms));
}

async function fetchWithTimeout(url, ms) {
  try {
    const response = await Promise.race([
      fetch(url),
      timeout(ms)
    ]);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000);
```

✅ **Cancels request if it takes too long.
✅ Prevents UI freezing due to slow APIs.

---

## **9. Summary**
✅ `async/await` simplifies asynchronous code.
✅ `await` pauses execution until a Promise resolves.
✅ Use `try...catch` for error handling.
✅ Use `Promise.all()` for parallel execution.
✅ Set timeouts to avoid long waits.

**Mastering async/await helps you write cleaner and more efficient JavaScript! 🚀**