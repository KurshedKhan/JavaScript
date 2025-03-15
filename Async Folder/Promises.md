# Promises in JavaScript (Basic to Advanced)

## 1️⃣ What is a Promise?
- A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.
- It has three states:
  - **Pending** → Initial state
  - **Fulfilled** → Operation completed successfully
  - **Rejected** → Operation failed

### Example of a Basic Promise
```js
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

## 2️⃣ Chaining Promises
- `.then()` can be used multiple times to chain asynchronous operations.

### Example:
```js
let fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data fetched"), 2000);
});

fetchData
  .then(result => {
    console.log(result);
    return "Processing Data";
  })
  .then(step2 => {
    console.log(step2);
    return "Data Ready";
  })
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error("Error:", error));
```

---

## 3️⃣ Handling API Requests with Promises (Using Fetch API)
- The **Fetch API** returns a promise that resolves to a Response object.

### Example:
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("API Response:", data))
  .catch(error => console.error("Error fetching data:", error));
```

---

## 4️⃣ Promise.all() - Running Multiple Promises in Parallel
- `Promise.all()` runs multiple promises **simultaneously** and waits for all to resolve.

### Example:
```js
let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());

Promise.all([promise1, promise2])
  .then(results => console.log("All Data:", results))
  .catch(error => console.error("Error:", error));
```

---

## 5️⃣ Promise.race() - Returning the First Resolved Promise
- `Promise.race()` returns the result of the **first resolved or rejected** promise.

### Example:
```js
let fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast Promise Resolved!"), 1000));
let slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow Promise Resolved!"), 3000));

Promise.race([fastPromise, slowPromise])
  .then(result => console.log("Winner:", result))
  .catch(error => console.error("Error:", error));
```

---

## 6️⃣ Converting Callbacks to Promises
- If you have an old callback-based function, you can convert it to a promise.

### Example:
```js
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task Completed"), 2000);
  });
}

asyncTask().then(result => console.log(result)).catch(error => console.error(error));
```

---

🚀 **Next Step:** Learn `async/await` for even cleaner asynchronous code!