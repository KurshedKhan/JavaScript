# Handling Errors & Edge Cases in API Calls

## **1. Introduction**
Error handling is essential to ensure APIs function smoothly, provide meaningful responses, and improve user experience. This guide covers best practices for handling errors and edge cases in API calls.

✅ **Use proper HTTP status codes**  
✅ **Implement retries & fallbacks**  
✅ **Handle timeouts & network failures**  
✅ **Manage rate limits & unexpected API responses**  

---

## **2. Handling API Errors Properly**
### **a) Using Try-Catch for Fetch API**
Always wrap API calls in `try-catch` to handle errors gracefully.

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}
```
✅ **Catches network and server errors**  
✅ **Provides meaningful error messages**  

---

### **b) Handling Axios Errors**
Axios provides a built-in way to handle errors.

```js
const axios = require('axios');

async function fetchWithAxios() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error(`Server responded with status: ${error.response.status}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
  }
}
```
✅ **Handles different error types (server, network, request errors)**  

---

## **3. Handling Network Failures & Timeouts**
### **a) Setting Timeouts for Fetch API**
Prevent infinite waiting by setting a timeout.

```js
function fetchWithTimeout(url, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(), timeout);
    fetch(url, { signal })
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

fetchWithTimeout('https://api.example.com/data')
  .then(response => console.log(response))
  .catch(error => console.error('Request timed out:', error));
```
✅ **Prevents requests from hanging indefinitely**  
✅ **Improves user experience by failing fast**  

---

### **b) Handling Network Failures with Retries**
Use exponential backoff to retry failed requests.

```js
async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`Retry ${i + 1} failed: ${error.message}`);
      if (i < retries - 1) await new Promise(res => setTimeout(res, delay * (i + 1)));
    }
  }
  throw new Error('All retries failed');
}

fetchWithRetry('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Final error:', error.message));
```
✅ **Retries requests in case of temporary failures**  
✅ **Uses exponential backoff to reduce server load**  

---

## **4. Handling Rate Limits**
API rate limits restrict the number of requests per time frame.

```js
async function fetchWithRateLimit(url) {
  try {
    const response = await fetch(url);
    if (response.status === 429) {
      console.warn('Rate limit exceeded, retrying in 5 seconds...');
      await new Promise(res => setTimeout(res, 5000));
      return fetchWithRateLimit(url);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}
```
✅ **Handles rate-limited APIs gracefully**  
✅ **Waits before retrying requests**  

---

## **5. Handling Unexpected API Responses**
### **a) Validating API Data Before Using It**
Always check if the API response contains expected fields.

```js
async function fetchAndValidate() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    if (!data || !data.name || !data.email) {
      throw new Error('Invalid API response structure');
    }
    console.log('Valid data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```
✅ **Prevents application crashes from unexpected API responses**  
✅ **Ensures only valid data is processed**  

---

## **6. Handling Edge Cases**
### **a) Handling Empty Responses**

```js
async function fetchWithEmptyCheck() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  if (!data || data.length === 0) {
    console.warn('No data available');
    return;
  }
  console.log('Data:', data);
}
```
✅ **Prevents errors from empty API responses**  

---

### **b) Handling API Deprecation**
Always check API documentation for version changes.

```js
async function fetchVersionedData() {
  try {
    const response = await fetch('https://api.example.com/v2/data');
    if (response.status === 410) {
      throw new Error('API version deprecated, use latest version');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('API error:', error.message);
  }
}
```
✅ **Detects and handles deprecated API versions**  

---

## **7. Summary**
✅ **Use try-catch for error handling**  
✅ **Implement timeouts and retries for reliability**  
✅ **Handle rate limits and network failures gracefully**  
✅ **Validate API responses to prevent unexpected crashes**  
✅ **Consider edge cases like empty responses and API versioning**  

🚀 **By implementing these practices, API calls become more reliable and user-friendly!**

