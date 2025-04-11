# Fetch API in JavaScript (Modern & Recommended)

## **1. Introduction to Fetch API**
The **Fetch API** is a modern way to make HTTP requests in JavaScript. It provides a cleaner and more powerful alternative to `XMLHttpRequest`.

✅ **Built-in JavaScript API**
✅ **Returns Promises (No callback hell)**
✅ **Supports async/await for better readability**

---

## **2. Basic Fetch API Usage**
### **Simple GET Request**
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
🔹 **How It Works:**
1. Fetch makes a request to the given URL.
2. The response is converted into JSON format.
3. The data is logged to the console.

---

## **3. Fetch API with Async/Await**
Using `async/await` makes fetch operations more readable.

```js
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
```
✅ **No `.then()` chaining required**
✅ **Easier error handling with `try...catch`**

---

## **4. Sending Data with Fetch (POST Request)**
Use `fetch()` with a `POST` method to send data to a server.

```js
async function createPost() {
  const newPost = {
    title: 'New Post',
    body: 'This is a new post',
    userId: 1
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    const data = await response.json();
    console.log('Created Post:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
createPost();
```
✅ **Sends JSON data using `body`**
✅ **Includes `Content-Type` in headers**

---

## **5. Handling HTTP Response Status Codes**
Before parsing the response, always check if it's successful.

```js
async function fetchWithStatus() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchWithStatus();
```
✅ **Prevents parsing errors for failed responses**
✅ **Ensures only successful responses are processed**

---

## **6. Handling Timeouts in Fetch API**
Fetch does **not** have built-in timeouts. We can use `Promise.race()` to implement one.

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
✅ **Prevents infinite waiting on slow responses**
✅ **Automatically rejects after timeout**

---

## **7. Fetch API with Authentication**
APIs often require authentication using an API key or token.

```js
async function fetchWithAuth() {
  try {
    const response = await fetch('https://api.example.com/data', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchWithAuth();
```
✅ **Uses API key/token in headers**
✅ **Secures API requests**

---

## **8. Parallel API Calls using Fetch**
Use `Promise.all()` to fetch multiple resources simultaneously.

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
✅ **Faster execution by making multiple requests in parallel**

---

## **9. Summary**
✅ Fetch API is modern and built-in for HTTP requests.
✅ Supports **GET**, **POST**, and other HTTP methods.
✅ Works well with **async/await** for better readability.
✅ Always **handle response status** and **errors** properly.
✅ Implement **timeouts** to avoid long waits.
✅ Use **Promise.all()** for parallel requests.

🚀 **Mastering Fetch API makes you a better JavaScript developer!**