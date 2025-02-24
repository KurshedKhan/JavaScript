# **JavaScript Data Types: Basic to Advanced (With Examples)**  

JavaScript has **two categories of data types**:  
1. **Primitive Types** (Immutable, stored in Stack)  
2. **Non-Primitive (Reference) Types** (Stored in Heap)  

---

## **1. Primitive Data Types (Immutable)**  
These types hold **single values** and are **copied by value**.

### **1.1 Number**  
Represents integers and floating-point numbers.  
```js
let x = 10;       // Integer
let y = 10.5;     // Floating-point number
let z = 1 / 0;    // Infinity
let w = "abc" / 2; // NaN (Not a Number)
```
#### Special Cases:
```js
console.log(typeof NaN);      // "number"
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_VALUE); // Smallest positive number
```

---

### **1.2 BigInt** (For large integers beyond `Number.MAX_SAFE_INTEGER`)  
```js
let bigNum = 123456789012345678901234567890n;
console.log(bigNum + 2n);  // 123456789012345678901234567892n
```

---

### **1.3 String**  
Represents text (sequences of characters).  
```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template literals allow ${str1} ${str2}`;
console.log(str3);  // "Template literals allow Hello World"
```

---

### **1.4 Boolean**  
Holds `true` or `false` values.  
```js
let isLoggedIn = true;
let hasPermission = false;
console.log(10 > 5); // true
```

---

### **1.5 Undefined**  
A variable that has been declared but **not assigned a value**.  
```js
let user;
console.log(user);  // undefined
```

---

### **1.6 Null**  
Represents an **intentional absence of a value**.  
```js
let data = null;
console.log(typeof null);  // "object" (a known JavaScript bug)
```

---

### **1.7 Symbol**  
Represents **unique and immutable identifiers**.  
```js
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false (Symbols are always unique)
```

---

## **2. Non-Primitive (Reference) Data Types**  
These types store **references** (memory locations) instead of actual values.

### **2.1 Object**  
A collection of **key-value pairs**.  
```js
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hello " + this.name;
  }
};
console.log(person.greet());  // "Hello Alice"
```

---

### **2.2 Array**  
An ordered list of values.  
```js
let numbers = [10, 20, 30];
console.log(numbers[1]);  // 20
```

---

### **2.3 Function**  
Functions are **first-class citizens** in JavaScript.  
```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));  // 15
```

---

### **2.4 Date**  
Used to work with dates and times.  
```js
let today = new Date();
console.log(today.toDateString());  // e.g., "Sat Feb 22 2025"
```

---

### **2.5 RegExp (Regular Expressions)**  
Used for pattern matching.  
```js
let pattern = /hello/i;
console.log(pattern.test("Hello world"));  // true
```

---

## **3. Type Conversion & Coercion**  
### **3.1 Explicit Type Conversion**
```js
let num = "42";
console.log(Number(num));  // 42
console.log(String(42));   // "42"
console.log(Boolean(1));   // true
```

### **3.2 Implicit Type Coercion**
```js
console.log(5 + "5");   // "55" (Number + String → String)
console.log("5" - 2);   // 3 (String - Number → Number)
console.log(true + 1);  // 2 (true → 1)
```

---

## **4. Checking Data Types**  
| Method | Example | Output |
|--------|---------|--------|
| `typeof` | `typeof "Hello"` | `"string"` |
| `Array.isArray()` | `Array.isArray([1,2,3])` | `true` |
| `instanceof` | `obj instanceof Object` | `true` |
| `Object.prototype.toString.call()` | `Object.prototype.toString.call([])` | `"[object Array]"` |

---

## **5. Difference Between Primitive & Reference Types**
### **5.1 Primitive Types (Copied by Value)**
```js
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)
```

### **5.2 Reference Types (Copied by Reference)**
```js
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name);  // "Doe" (both point to the same memory)
```

---

## **6. Shallow Copy vs Deep Copy**
### **6.1 Shallow Copy (Only top-level copied)**
```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };
obj2.b.c = 42;
console.log(obj1.b.c); // 42 (original object changed)
```

### **6.2 Deep Copy (Creates full copy)**
```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 42;
console.log(obj1.b.c); // 2 (original remains unchanged)
```

---

## **Conclusion**  
JavaScript has **seven primitive data types** and **several non-primitive types**. Understanding their behavior helps avoid **unexpected bugs** and improves code efficiency.
