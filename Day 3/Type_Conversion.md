# 🔄 Data Conversion in JavaScript (Basic to Advanced)

## 📌 1. Introduction
Data conversion is the process of converting data from one type to another. JavaScript provides various ways to perform type conversion, which can be either **implicit (coercion)🔄** or **explicit (manual conversion)🔧**.

---

## 🤖 2. Implicit Type Conversion (Type Coercion)
JavaScript automatically converts data types in certain situations.

### 🔹 Example:
```js
console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (String converted to number)
console.log(5 == "5"); // true (Type coercion happens)
```

### 🔹 Rules:
✅ **String + Number → String**
✅ **String - Number → Number**
✅ **Boolean to Number** (`true → 1`, `false → 0`)
✅ **Null to Number** (`null → 0`)
✅ **Undefined to NaN**

---

## 🛠️ 3. Explicit Type Conversion
Explicit conversion (also known as **type casting**) is done using built-in methods.

### 📝 a) String Conversion
Convert other data types into strings using:
```js
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"
```

### 🔢 b) Number Conversion
Convert other data types into numbers using:
```js
console.log(Number("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+"123"); // 123 (Unary plus operator)
```

### 🔘 c) Boolean Conversion
Convert values into boolean using:
```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

---

## 🚀 4. Complex Data Conversion
### 🔄 a) Converting Objects to JSON
```js
let obj = { name: "John", age: 30 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'
```

### 📂 b) Converting JSON to Object
```js
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "John"
```

### 📜 c) Array to String & Vice Versa
```js
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
console.log(arr.join(" - ")); // "1 - 2 - 3"
```

### ⏳ d) Converting Date to Number
```js
let date = new Date();
console.log(date.getTime()); // Timestamp
```

---

## ⚡ 5. Best Practices
✅ Always use **explicit conversion** to avoid unexpected results.
✅ Use **strict equality (===)** to avoid implicit conversion.
✅ Use `JSON.stringify()` and `JSON.parse()` for **object conversions**.
✅ Be mindful of `parseInt()` and `parseFloat()` as they ignore non-numeric characters.

---

## 📋 6. Summary Table
| 🔹 Conversion | 🔹 Method |
|------------|----------------|
| Any → String | `String(value)`, `toString()` |
| Any → Number | `Number(value)`, `+value`, `parseInt()`, `parseFloat()` |
| Any → Boolean | `Boolean(value)` |
| Object → JSON | `JSON.stringify(obj)` |
| JSON → Object | `JSON.parse(json)` |

---

## 🎯 7. Conclusion
Understanding data conversion in JavaScript helps prevent bugs and improves code reliability. Always ensure explicit conversions when needed to avoid unintended behavior.

---