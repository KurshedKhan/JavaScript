# Axios in JavaScript (Alternative to Fetch)

## **1. Introduction to Axios**
Axios is a powerful, promise-based HTTP client for JavaScript, widely used for making API requests.

✅ **Easier syntax compared to Fetch API**  
✅ **Built-in automatic JSON parsing**  
✅ **Supports request cancellation & interceptors**  
✅ **Handles errors better than Fetch**  

---

## **2. Installing Axios**
### **CDN (for browser)**
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### **NPM (for Node.js & Frontend Frameworks)**
```sh
npm install axios
```

---

## **3. Basic GET Request**
Fetching data using Axios is simpler than Fetch API.

```js
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```
✅ **No need to call `.json()` on the response**
✅ **Errors are automatically handled in `.catch()`**

---

## **4. GET Request with Async/Await**
Using `async/await` makes it even cleaner.

```js
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
```
✅ **More readable than `.then()` chaining**

---

## **5. Sending Data with POST Request**
Sending data to a server using `POST`.

```js
async function createPost() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1
    });
    console.log('Created Post:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
createPost();
```
✅ **Automatically sends JSON data**
✅ **No need to set headers manually**

---

## **6. Handling HTTP Status Codes**
Axios provides an easy way to check HTTP response statuses.

```js
async function fetchWithStatus() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchWithStatus();
```
✅ **Handles HTTP statuses better than Fetch API**

---

## **7. Setting Headers in Axios**
Axios makes it easy to send custom headers.

```js
async function fetchWithAuth() {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchWithAuth();
```
✅ **Perfect for APIs requiring authentication**

---

## **8. Canceling Requests with Axios**
Sometimes, we need to cancel an API request if it's taking too long.

```js
const controller = new AbortController();
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
      signal: controller.signal
    });
    console.log(response.data);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.error('Error:', error);
    }
  }
}

setTimeout(() => controller.abort(), 2000); // Cancel after 2 seconds
fetchData();
```
✅ **Prevents unnecessary network usage**

---

## **9. Making Multiple API Requests (Parallel Calls)**
We can use `axios.all()` to make multiple API calls in parallel.

```js
async function fetchMultiple() {
  try {
    const [user, posts] = await axios.all([
      axios.get('https://jsonplaceholder.typicode.com/users/1'),
      axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    console.log(user.data, posts.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchMultiple();
```
✅ **Improves performance by fetching data simultaneously**

---

## **10. Setting a Global Axios Configuration**
If your app makes multiple requests to the same API, set a default configuration.

```js
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_API_KEY';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```
✅ **Reduces redundant configurations**
✅ **Keeps code clean and maintainable**

---

## **11. Summary**
✅ **Axios is simpler and more powerful than Fetch API**  
✅ **Handles errors & response status automatically**  
✅ **Supports async/await for cleaner syntax**  
✅ **Allows request cancellation & interceptors**  
✅ **Enables multiple requests in parallel**  

🚀 **Mastering Axios makes API handling in JavaScript much easier!**

