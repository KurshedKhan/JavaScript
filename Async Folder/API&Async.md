# JavaScript APIs & Async Programming Notes

## 1️⃣ API (Application Programming Interface)
### What is an API?
- An API allows communication between different software applications.
- In web development, APIs are used to fetch or send data between the client and server.
- **Types of APIs:** REST, GraphQL, WebSockets.

### HTTP Methods
- **GET** – Retrieve data
- **POST** – Send data
- **PUT** – Update data
- **DELETE** – Remove data

### Fetch API Example
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 2️⃣ Async JavaScript
### Callbacks
- Functions passed as arguments to another function.
- Example:
```js
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

greet('Kurshed', function() {
  console.log('Welcome to Async JavaScript!');
});
```

### Promises
- Represents a value that may be available in the future.
- States: **Pending → Resolved (Fulfilled) / Rejected**
- Example:
```js
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve('Task completed');
  else reject('Task failed');
});

promise.then(result => console.log(result)).catch(error => console.log(error));
```

### Async/Await
- Simplifies working with Promises.
- Example:
```js
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

## 3️⃣ Projects for Practice
✅ **To-Do App** – Use an API to store tasks.
✅ **Weather App** – Fetch weather data from OpenWeather API.
✅ **Movie Search App** – Use OMDB API for movie details.

🚀 **Keep Practicing!**