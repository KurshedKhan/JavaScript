# Async/Await in JavaScript (Basic to Advanced)

## 1️⃣ What is Async/Await?
- **`async`** and **`await`** are used to handle asynchronous operations in a clean and readable way.
- **`async` function** always returns a **Promise**.
- **`await`** pauses execution until the promise is resolved.

---

## 2️⃣ Basic Example of Async/Await
```js
async function fetchData() {
  return "Data fetched!";
}

fetchData().then(result => console.log(result));
```
- `fetchData()` automatically returns a **Promise**.

---

## 3️⃣ Using Async/Await with Fetch API
```js
async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Post Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getPost();
```
- **`await fetch(url)`** waits for the API call to complete.
- **`await response.json()`** parses the response into JavaScript Object.
- **`try...catch`** handles errors.

---

## 4️⃣ Handling Multiple Async Calls
```js
async function getUserAndPosts() {
  try {
    let userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await userResponse.json();
    console.log("User:", user);

    let postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    let posts = await postsResponse.json();
    console.log("User's Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserAndPosts();
```
- Each API call waits for the previous one to complete.

---

## 5️⃣ Running Async Tasks in Parallel (Using `Promise.all`)
```js
async function getData() {
  try {
    let [user, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
    ]);
    
    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
```
- **`Promise.all([])`** runs API calls in parallel, making it faster.

---

## 6️⃣ Converting Callbacks to Async/Await
### Before (Using Callbacks)
```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000);
}

fetchData(data => console.log(data));
```
### After (Using Async/Await)
```js
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
}

async function getData() {
  let data = await fetchData();
  console.log(data);
}

getData();
```
- Callback-based functions can be **converted into Promises** for better readability.

---

🚀 **Next Step:** Learn Error Handling and Performance Optimization with Async/Await!