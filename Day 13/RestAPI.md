# REST API Notes

## 📌 What is REST API?
**REST API (Representational State Transfer API)** is an **architectural style** used for designing web services. It simplifies data exchange between the client and the server.

---

## 🚀 Principles of REST API
1. **Stateless** - The server does not remember previous requests; each request must contain all necessary information.
2. **Client-Server Architecture** - The client (browser/app) and server (database) are separate.
3. **Uniform Interface** - APIs use standard URLs and return data in JSON/XML format.
4. **Cacheable** - API responses can be cached for better performance.
5. **Layered System** - Security, load balancing, and data storage are handled in different layers.

---

## 🌍 How REST API Works?
REST API uses **HTTP Methods**:

| HTTP Method | Purpose | Example URL |
|------------|---------|-------------|
| **GET**    | Retrieve data | `/users` (Get all users) |
| **POST**   | Create new data | `/users` (Create new user) |
| **PUT**    | Update data | `/users/1` (Update user 1) |
| **DELETE** | Remove data | `/users/1` (Delete user 1) |

---

## 🛠 Example REST API Request & Response
### 📤 Client Request (GET Request)
```bash
GET https://api.example.com/users/1
```
### 📥 Server Response (JSON)
```json
{
  "id": 1,
  "name": "Kurshed Khan",
  "email": "kurshed@example.com"
}
```

---

## 🤔 Why REST API?
✅ Fast and scalable
✅ Standard API for web and mobile applications
✅ Stateless and lightweight
✅ JSON/XML format makes data exchange easy

---

## 💡 Where is REST API Used?
✔ **Websites** (Facebook, Twitter, YouTube API)
✔ **Mobile Apps** (Weather App, News App)
✔ **IoT Devices** (Smart Home, Alexa, Google Assistant)
✔ **Cloud Services** (AWS, Google Cloud APIs)

---

## 🎯 Next Steps to Learn
✅ Learn how to call APIs using **Fetch API** or **Axios**
✅ Build your own REST API using **Express.js** or **Django REST Framework**
✅ Understand the difference between **GraphQL vs REST API**

---

If you have any doubts, feel free to ask! 🚀😊