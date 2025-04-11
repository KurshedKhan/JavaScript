# JSON (JavaScript Object Notation) – Basic to Advanced

JSON एक **lightweight data format** है, जो **सर्वर और वेब एप्लिकेशन के बीच डेटा भेजने और प्राप्त करने** के लिए इस्तेमाल होता है। इसे आसानी से पढ़ा और लिखा जा सकता है।

---

## 1️⃣ JSON Basics

### JSON की विशेषताएँ:
✅ Key-Value Pair में डेटा स्टोर करता है।  
✅ Data को **text-based format** में रखता है (string)।  
✅ Programming Language से Independent (Python, JavaScript, PHP, आदि में इस्तेमाल किया जा सकता है)।  
✅ API से Data Exchange करने में उपयोगी।  

### JSON Syntax Rules
- डेटा **Key-Value Pairs** में होता है।
- Keys हमेशा **double quotes ("")** में होती हैं।
- Values **string, number, boolean, array, object या null** हो सकती हैं।

```json
{
  "name": "Kurshed",
  "age": 25,
  "isStudent": false,
  "skills": ["JavaScript", "HTML", "CSS"],
  "address": {
    "city": "Jaipur",
    "country": "India"
  }
}
```

---

## 2️⃣ JSON Parsing (JavaScript में JSON को कैसे Use करें?)

### JSON को JavaScript Object में बदलना (`JSON.parse()`)
```js
let jsonData = '{"name": "Kurshed", "age": 25}';
let obj = JSON.parse(jsonData);  // JSON से JS Object में Convert
console.log(obj.name);  // Output: Kurshed
```

### JavaScript Object को JSON में बदलना (`JSON.stringify()`)
```js
let person = { name: "Kurshed", age: 25 };
let jsonString = JSON.stringify(person);  // JS Object से JSON में Convert
console.log(jsonString);  // Output: '{"name":"Kurshed","age":25}'
```

---

## 3️⃣ JSON in API Calls (Fetch API के साथ JSON)

### API से JSON Data प्राप्त करना (`fetch()`)
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // JSON String को JS Object में बदलें
  .then(data => console.log(data))    // JSON Data को Console में Print करें
  .catch(error => console.error('Error:', error));
```

### API पर JSON Data भेजना (`POST` Request)
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Hello', body: 'This is a test post' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## 4️⃣ Advanced JSON Concepts

### 1. JSON Nested Objects & Arrays
```json
{
  "name": "Kurshed",
  "projects": [
    {
      "title": "Portfolio Website",
      "tech": ["HTML", "CSS", "JavaScript"]
    },
    {
      "title": "To-Do App",
      "tech": ["React", "Node.js"]
    }
  ]
}
```

👉 **Access Nested Data in JS:**  
```js
let data = {
  name: "Kurshed",
  projects: [
    { title: "Portfolio Website", tech: ["HTML", "CSS", "JavaScript"] },
    { title: "To-Do App", tech: ["React", "Node.js"] }
  ]
};

console.log(data.projects[0].title);  // Output: Portfolio Website
```

### 2. JSON with LocalStorage (डेटा को ब्राउज़र में स्टोर करना)
```js
let user = { name: "Kurshed", age: 25 };
localStorage.setItem("userData", JSON.stringify(user));

let storedData = JSON.parse(localStorage.getItem("userData"));
console.log(storedData.name);  // Output: Kurshed
```

### 3. JSON with Fetch & Async/Await
```js
async function getData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getData();
```

---

## 5️⃣ JSON Errors & Debugging

🔴 **Common JSON Errors:**  
❌ Keys में Double Quotes का न होना (`{name: "Kurshed"}` ❌ → `{"name": "Kurshed"}` ✅)  
❌ JSON.parse() में Invalid JSON देना  
❌ Circular Reference Error (self-referencing objects)

---

### 🚀 JSON का इस्तेमाल कहाँ करें?
✅ **API Calls (Fetch, Axios, etc.)**  
✅ **Database (MongoDB uses JSON-like BSON)**  
✅ **Configurations (package.json, .json settings files)**  
✅ **Local Storage & Session Storage**  

अगर आपको किसी टॉपिक पर डिटेल में समझना है तो मुझे बताएं! 😊