# API Basics in JavaScript

## **1. What is an API?**
API (Application Programming Interface) is a **bridge** that allows two applications to communicate with each other.

🔹 **Example:**
- A weather app fetching real-time weather data from a weather API.
- A website fetching user details from a database using an API.

---

## **2. Types of APIs**
### **1️⃣ REST (Representational State Transfer) - Most Common**
- Uses **HTTP methods** to communicate.
- Data is usually transferred in **JSON format**.
- Stateless (Every request is independent).

🔹 **Example of a REST API URL:**
```plaintext
https://api.example.com/users/1
```
This URL might fetch user data with ID = 1.

### **Common HTTP Methods in REST APIs:**
| Method | Description | Example |
|--------|------------|---------|
| GET    | Fetch data | `GET /users` |
| POST   | Create data | `POST /users` |
| PUT    | Update data | `PUT /users/1` |
| DELETE | Remove data | `DELETE /users/1` |

---

### **2️⃣ GraphQL (Advanced Alternative to REST)**
- Allows fetching only required data.
- Uses **one endpoint** instead of multiple URLs.

🔹 **Example Query:**
```graphql
{
  user(id: "1") {
    name
    email
  }
}
```
This request fetches **only name & email**, unlike REST, which may return unnecessary data.

---

## **3. Understanding HTTP Requests & Responses**
### **HTTP Request Components**
A request to an API consists of:
1. **URL** (API Endpoint) → `https://api.example.com/data`
2. **Method** → `GET`, `POST`, `PUT`, `DELETE`
3. **Headers** → Authentication, Content-Type, etc.
4. **Body** (For POST/PUT requests) → Data being sent

🔹 **Example Request Using Fetch API**
```js
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

### **HTTP Response Components**
When an API responds, it includes:
1. **Status Code** (Indicates success or failure)
2. **Response Body** (Data returned)

🔹 **Common HTTP Status Codes**
| Status Code | Meaning | Example Scenario |
|-------------|---------|------------------|
| 200 OK | Success | Data retrieved successfully |
| 201 Created | Success | New resource created |
| 400 Bad Request | Client Error | Invalid request format |
| 401 Unauthorized | Client Error | Invalid authentication token |
| 404 Not Found | Client Error | Resource doesn’t exist |
| 500 Internal Server Error | Server Error | API server crashed |

🔹 **Example API Response (JSON Format)**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## **4. API Rate Limits & Authentication**
Some APIs limit how many requests you can make per hour/minute.

### **Authentication Methods:**
1. **API Keys** – A secret key used in headers (`Authorization: Bearer YOUR_API_KEY`).
2. **OAuth 2.0** – Secure authentication (Used in Google, Facebook APIs).
3. **JWT (JSON Web Tokens)** – Secure login-based authentication.

🔹 **Example API Request with API Key Authentication:**
```js
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
```

---

## **Summary**
✅ API is a bridge for software communication.
✅ REST APIs use HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
✅ HTTP request has **URL, Method, Headers, Body**.
✅ HTTP response includes **status codes & data**.
✅ Authentication is needed for secure API usage.

---
**Happy Learning! 🚀**