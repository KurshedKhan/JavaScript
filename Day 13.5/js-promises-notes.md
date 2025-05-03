# JavaScript Promises – Basic to Advanced

## 1. What is a Promise?

A **Promise** is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```js
const promise = new Promise((resolve, reject) => {
  // asynchronous operation
});
```

## 2. Promise States

A promise has 3 states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

## 3. Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong.");
  }
});
```

## 4. Using `.then()`, `.catch()`, and `.finally()`

```js
myPromise
  .then(result => {
    console.log(result); // Operation successful!
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise settled (either resolved or rejected)");
  });
```

## 5. Chaining Promises

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Post Title:", data.title);
    return fetch("https://jsonplaceholder.typicode.com/users/" + data.userId);
  })
  .then(userResponse => userResponse.json())
  .then(userData => {
    console.log("Author:", userData.name);
  })
  .catch(err => console.error(err));
```

## 6. Error Handling

Always add `.catch()` at the end to catch errors from any step in the chain.

```js
doSomething()
  .then(result => doSomethingElse(result))
  .catch(error => console.error("Caught error:", error));
```

## 7. Promise Utility Methods

### 7.1 Promise.all()

Waits for all promises to be fulfilled or for any to be rejected.

```js
Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

### 7.2 Promise.race()

Returns the result of the first promise that settles (fulfilled or rejected).

```js
Promise.race([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### 7.3 Promise.allSettled()

Returns a promise that resolves after all have settled, with an array of objects describing the outcome of each.

```js
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
```

### 7.4 Promise.any()

Resolves with the first fulfilled promise. Ignores rejections.

```js
Promise.any([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## 8. Converting Callbacks to Promises

```js
const fs = require('fs');

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
```

## 9. Async/Await

A cleaner syntax for handling Promises.

```js
async function getUserData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

## 10. Common Pitfalls & Best Practices

- Always handle `.catch()` to prevent unhandled rejections.
- Don’t mix `.then()` with `await` in the same logic block.
- Use `Promise.all` only when all tasks are independent and should be parallelized.
- Wrap promise code in `try/catch` when using async/await.
