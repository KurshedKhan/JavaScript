# Callback Functions in JavaScript (Basic to Advanced for API)

## 1️⃣ What is a Callback Function?
- A **callback function** is a function passed as an argument to another function.
- It is executed **after the completion** of the parent function.
- Callbacks are often used in **asynchronous programming**, like API requests.

### Example of a Basic Callback
```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Kurshed", function() {
  console.log("Welcome to JavaScript!");
});
```

## 2️⃣ Callbacks with API (Using `setTimeout` as an Example)
- Callbacks are useful when fetching data from APIs.

### Example: Simulating API Call
```js
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Processing the fetched data...");
});
```

## 3️⃣ Nested Callbacks (Callback Hell)
- When callbacks are nested too deep, it creates **Callback Hell**.

### Example:
```js
function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback();
  }, 1000);
}

function getPosts(callback) {
  setTimeout(() => {
    console.log("User's posts fetched");
    callback();
  }, 1000);
}

function getComments() {
  setTimeout(() => {
    console.log("Comments on posts fetched");
  }, 1000);
}

getUser(() => {
  getPosts(() => {
    getComments();
  });
});
```

## 4️⃣ Handling API Calls with Callbacks (XHR Example)
- The traditional way to make API requests before Fetch API.

### Example: Making an API Call with Callbacks
```js
function fetchAPI(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

fetchAPI("https://jsonplaceholder.typicode.com/posts/1", function(data) {
  console.log("API Response:", data);
});
```

## 5️⃣ Solving Callback Hell with Promises & Async/Await
- **Use Promises** instead of deeply nested callbacks.
- **Use `async/await`** for cleaner, readable code.

🚀 **Next Step:** Learn about Promises & Async/Await for better API handling!
