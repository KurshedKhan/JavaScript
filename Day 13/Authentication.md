# Authentication & Security in API Calls

## **1. Introduction**
Securing API requests is crucial for protecting sensitive data and preventing unauthorized access. This guide covers authentication methods, security best practices, and how to implement them in JavaScript.

✅ **Use API keys, OAuth, JWT, and session-based authentication**  
✅ **Protect API endpoints from attacks**  
✅ **Secure user data with encryption**  
✅ **Prevent CSRF, XSS, and other vulnerabilities**  

---

## **2. API Authentication Methods**
### **a) API Key Authentication**
A simple authentication method where a unique key is sent with each request.

```js
async function fetchWithApiKey() {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  const data = await response.json();
  console.log(data);
}
```
✅ **Simple to implement**  
✅ **Suitable for read-only public APIs**  
⚠️ **Not secure for sensitive data**  

---

### **b) OAuth 2.0 (Token-Based Authentication)**
OAuth 2.0 is a more secure and scalable authentication mechanism.

```js
async function fetchWithOAuth(token) {
  const response = await fetch('https://api.example.com/user', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  console.log(data);
}
```
✅ **Secure & widely used for third-party access (Google, Facebook login, etc.)**  
✅ **Tokens expire, reducing security risks**  

---

### **c) JSON Web Tokens (JWT)**
JWT is used to securely transmit information between parties.

```js
async function fetchWithJWT(token) {
  const response = await fetch('https://api.example.com/secure-data', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
}
```
✅ **Stateless authentication (no session storage needed)**  
✅ **Used in modern authentication systems**  

---

### **d) Session-Based Authentication**
For traditional web apps, session authentication is used.

```js
async function fetchWithSession() {
  const response = await fetch('https://api.example.com/user', {
    credentials: 'include' // Sends cookies with request
  });
  const data = await response.json();
  console.log(data);
}
```
✅ **Good for web apps using cookies**  
⚠️ **Less suitable for APIs serving multiple clients (mobile, web, etc.)**  

---

## **3. Securing API Requests**
### **a) Use HTTPS for Secure Communication**
Always use HTTPS to encrypt data sent over the network.

✅ **Prevents man-in-the-middle attacks**  
✅ **Protects API keys & user credentials**  

---

### **b) Implement Rate Limiting**
Rate limiting prevents API abuse by limiting the number of requests per user.

```js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});
app.use(limiter);
```
✅ **Protects against DDoS attacks**  
✅ **Prevents API overuse**  

---

### **c) Prevent Cross-Site Request Forgery (CSRF)**
CSRF protection ensures requests come from trusted sources.

```js
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);
```
✅ **Protects against unauthorized actions from other sites**  

---

### **d) Secure API Responses**
Never expose sensitive information in API responses.

```js
const user = {
  id: 1,
  username: 'johndoe',
  password: undefined // Never return passwords!
};
```
✅ **Always hash & encrypt sensitive data**  

---

## **4. Preventing Common Security Threats**
### **a) Cross-Site Scripting (XSS) Protection**
Sanitize user inputs to prevent malicious scripts from executing.

```js
const sanitizeHtml = require('sanitize-html');
const safeInput = sanitizeHtml(userInput);
```
✅ **Prevents injection attacks**  

---

### **b) SQL Injection Prevention**
Use parameterized queries to prevent SQL injection.

```js
const db = require('mysql');
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);
```
✅ **Prevents unauthorized database access**  

---

### **c) Secure API Endpoints with Authentication Middleware**
Ensure only authorized users access sensitive routes.

```js
function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send('Unauthorized');
  }
  next();
}
app.use('/secure-route', authenticate);
```
✅ **Blocks unauthorized access to protected resources**  

---

## **5. Summary**
✅ **Use OAuth, JWT, or API Keys for authentication**  
✅ **Always use HTTPS for secure data transmission**  
✅ **Implement rate limiting, CSRF protection, and input sanitization**  
✅ **Never expose sensitive information in API responses**  
✅ **Use middleware to secure protected API routes**  

🚀 **By following these practices, you can build secure and robust APIs!**

