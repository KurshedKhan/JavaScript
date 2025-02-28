# 📌 JavaScript Strings - From Basics to Advanced 🚀

A **string** in JavaScript is a sequence of characters used to store and manipulate text. Let's explore string properties and methods from **basic to advanced**. 🎨

---

## 🔹 **1. Creating Strings**

### ✅ **Using Single or Double Quotes**
```js
let str1 = "Hello, World!";
let str2 = 'JavaScript Strings';
```

### ✅ **Using Template Literals (Backticks ` `` `)**
```js
let name = "Kurshed";
let greeting = `Hello, ${name}!`; // Template literals allow interpolation
console.log(greeting); // Output: Hello, Kurshed!
```

---

## 🔹 **2. String Properties**

### 📌 **`length` - Returns the length of a string**
```js
let text = "JavaScript";
console.log(text.length); // Output: 10
```

---

## 🔹 **3. Basic String Methods**

### 📌 **`toUpperCase()` & `toLowerCase()` - Change Case**
```js
let str = "Hello";
console.log(str.toUpperCase()); // Output: HELLO
console.log(str.toLowerCase()); // Output: hello
```

### 📌 **`trim()` - Removes whitespace from both ends**
```js
let text = "   Hello World!   ";
console.log(text.trim()); // Output: "Hello World!"
```

### 📌 **`charAt(index)` - Returns character at a specific index**
```js
let text = "JavaScript";
console.log(text.charAt(4)); // Output: S
```

### 📌 **`indexOf(substring)` - Finds the first occurrence of a substring**
```js
let text = "Hello JavaScript!";
console.log(text.indexOf("JavaScript")); // Output: 6
```

### 📌 **`lastIndexOf(substring)` - Finds the last occurrence of a substring**
```js
let text = "JavaScript is amazing. JavaScript is powerful.";
console.log(text.lastIndexOf("JavaScript")); // Output: 23
```

---

## 🔹 **4. String Manipulation Methods**

### 📌 **`slice(start, end)` - Extracts part of a string**
```js
let text = "JavaScript";
console.log(text.slice(0, 4)); // Output: Java
```

### 📌 **`substring(start, end)` - Similar to `slice()` but doesn't accept negative indexes**
```js
console.log(text.substring(0, 4)); // Output: Java
```

### 📌 **`replace(search, replacement)` - Replaces a substring**
```js
let text = "I love JavaScript";
console.log(text.replace("JavaScript", "Python")); // Output: I love Python
```

### 📌 **`split(separator)` - Splits a string into an array**
```js
let text = "apple,banana,orange";
console.log(text.split(",")); // Output: ["apple", "banana", "orange"]
```

---

## 🔹 **5. Advanced String Methods**

### 📌 **`includes(substring)` - Checks if a string contains a substring**
```js
let text = "JavaScript is fun";
console.log(text.includes("fun")); // Output: true
```

### 📌 **`startsWith(substring)` & `endsWith(substring)` - Checks the start and end**
```js
let text = "Hello, World!";
console.log(text.startsWith("Hello")); // Output: true
console.log(text.endsWith("World!")); // Output: true
```

### 📌 **`repeat(count)` - Repeats a string multiple times**
```js
let text = "Hello ";
console.log(text.repeat(3)); // Output: Hello Hello Hello
```

### 📌 **`padStart(targetLength, padString)` & `padEnd(targetLength, padString)`**
```js
let num = "5";
console.log(num.padStart(3, "0")); // Output: "005"
console.log(num.padEnd(3, "0"));   // Output: "500"
```

### 📌 **`match(regex)` - Finds matches using regular expressions**
```js
let text = "Hello 123 World 456";
console.log(text.match(/\d+/g)); // Output: ["123", "456"]
```

### 📌 **`replaceAll(search, replacement)` - Replaces all occurrences**
```js
let text = "JavaScript is amazing. JavaScript is fun.";
console.log(text.replaceAll("JavaScript", "Python"));
// Output: Python is amazing. Python is fun.
```

---

## 🔹 **6. Template Literals - Multi-line Strings & Interpolation**

### ✅ **Multi-line Strings**
```js
let multiLine = `This is a
multi-line string`;
console.log(multiLine);
```

### ✅ **Expression Interpolation**
```js
let name = "Kurshed";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

---

## 🔹 **7. Best Practices ✅**

✔️ Use **template literals** (` `` `) for better readability and multiline strings.  
✔️ Prefer **`includes()`** over `indexOf()` for checking substring existence.  
✔️ Use **`trim()`** to clean up user inputs.  
✔️ Use **`padStart()` / `padEnd()`** for formatting numbers.  

---

Would you like a **practical project using string methods**? 🚀

