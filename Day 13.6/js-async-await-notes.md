# JavaScript Async/Await – Basic to Advanced Notes

`async` and `await` are syntactic sugar built on top of Promises that make asynchronous code easier to read and write.

---

## 🧠 1. What is `async`?

The `async` keyword is used to declare an asynchronous function. It always returns a Promise.

```js
async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg)); // "Hello!"
```

---

## 🕓 2. What is `await`?

The `await` keyword is used inside `async` functions to wait for a Promise to resolve or reject.

```js
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await response.json();
  console.log(data);
}
```

---

## 🔁 3. Chaining with async/await

```js
async function process() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

✅ Easy to read  
❌ Always use `try...catch` for error handling.

---

## ⚠️ 4. Error Handling with try/catch

```js
async function example() {
  try {
    const data = await fetch("https://example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
```

---

## ⏱️ 5. Simulating Delay

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitAndSay() {
  await delay(2000);
  console.log("2 seconds later...");
}
```

---

## 🔀 6. Parallel Execution with `Promise.all`

```js
async function loadAll() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  console.log(user, posts);
}
```

✅ Use `Promise.all` to run independent tasks in parallel

---

## 🧪 7. Using async/await in Loops

```js
const ids = [1, 2, 3];

async function processIDs() {
  for (let id of ids) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await user.json();
    console.log(data.name);
  }
}
```

⚠️ Avoid if operations can be done in parallel — use `Promise.all()` instead.

---

## 🔁 8. Async Iteration with `for await...of`

```js
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2"
];

async function fetchAll() {
  const fetchPromises = urls.map(url => fetch(url));
  
  for await (const res of fetchPromises) {
    const data = await res.json();
    console.log(data.title);
  }
}
```

---

## ❗ 9. Common Mistakes

- ❌ Using `await` outside of `async` function.
- ❌ Not using `try...catch` for error handling.
- ❌ Running await in loops unnecessarily.

---

## 📌 10. Summary

| Concept        | Description |
|----------------|-------------|
| `async`        | Declares an async function that returns a Promise |
| `await`        | Pauses execution until Promise resolves |
| `try/catch`    | Error handling for await blocks |
| `Promise.all`  | Runs multiple awaits in parallel |
| `for await...of` | Used for async iteration |

---

Happy async coding! 🚀
