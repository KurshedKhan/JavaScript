# JavaScript Data Types: Basic to Advanced (Deep Dive)

JavaScript is a **dynamically typed language**, meaning variables can hold values of any type and can change types at runtime. Understanding data types is crucial for writing efficient and bug-free code.

## 1. Primitive Data Types (Immutable, Stored in Stack)

Primitive types are simple and immutable, meaning their values cannot be changed once created. They are stored in the stack memory, providing fast access.

### **1.1 Number**
Used for both integers and floating-point numbers.
```js
let x = 10;
let pi = 3.14;
```
- Supports mathematical operations.
- Has `NaN` (Not a Number) for invalid operations.
- Includes `Infinity` and `-Infinity`.

### **1.2 BigInt**
For handling extremely large integers beyond `Number.MAX_SAFE_INTEGER`.
```js
let big = 12345678901234567890n;
```
- Used for cryptography and precise large calculations.

### **1.3 String**
Represents a sequence of characters.
```js
let str = "Hello";
```
- Strings are immutable (changing a string creates a new one).
- Can use single (`'`), double (`"`), or backticks (`` ` `` for template literals).

### **1.4 Boolean**
Holds `true` or `false` values.
```js
let isTrue = true;
```
- Commonly used in conditions and loops.

### **1.5 Undefined**
A variable declared but not assigned a value.
```js
let x;
console.log(x); // undefined
```
- Default value for uninitialized variables.

### **1.6 Null**
Explicitly represents "no value".
```js
let y = null;
```
- Often used to reset variables or check for missing data.

### **1.7 Symbol**
A unique and immutable identifier.
```js
let sym = Symbol("id");
```
- Used to create unique object properties.

## 2. Non-Primitive (Reference) Data Types (Stored in Heap)

Reference types store memory addresses instead of actual values. These are mutable and stored in the heap memory.

### **2.1 Object**
A collection of key-value pairs.
```js
let obj = { name: "John", age: 30 };
```
- Used for complex data structures.
- Can hold different types of values.

### **2.2 Array**
An ordered collection of values.
```js
let arr = [1, 2, 3];
```
- Allows storing multiple values in one variable.
- Supports methods like `push()`, `pop()`, `map()`, etc.

### **2.3 Function**
A reusable block of code.
```js
function greet() { return "Hello"; }
```
- Functions are first-class citizens in JavaScript.

### **2.4 Date**
Handles date and time operations.
```js
let date = new Date();
```
- Used for timestamps and scheduling.

### **2.5 RegExp (Regular Expressions)**
Used for pattern matching.
```js
let regex = /abc/;
```
- Useful in searching and validation.

## 3. Type Conversion & Coercion

JavaScript can convert data types **explicitly** (type casting) or **implicitly** (coercion).

### **3.1 Explicit Conversion**
```js
console.log(Number("42")); // 42
console.log(String(42)); // "42"
console.log(Boolean(1)); // true
```
- Converts values to a specific type.

### **3.2 Implicit Conversion**
```js
console.log(5 + "5"); // "55" (Number + String → String)
console.log("5" - 2); // 3 (String - Number → Number)
```
- JavaScript automatically changes types.

## 4. Checking Data Types

| Method | Example | Output |
|--------|---------|--------|
| `typeof` | `typeof "Hello"` | "string" |
| `Array.isArray()` | `Array.isArray([1,2,3])` | `true` |
| `instanceof` | `obj instanceof Object` | `true` |
| `Object.prototype.toString.call()` | `Object.prototype.toString.call([])` | `"[object Array]"` |

## 5. Primitive vs Reference Types

### **5.1 Primitive Types (Copied by Value)**
```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
```
- Changing `b` does not affect `a`.

### **5.2 Reference Types (Copied by Reference)**
```js
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // "Doe"
```
- Both `obj1` and `obj2` point to the same memory location.

## 6. Shallow vs Deep Copy

### **6.1 Shallow Copy**
```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };
obj2.b.c = 42;
console.log(obj1.b.c); // 42 (original is affected)
```
- Copies only the first level.

### **6.2 Deep Copy**
```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 42;
console.log(obj1.b.c); // 2 (original remains unchanged)
```
- Completely copies an object.

## 7. Mutable vs Immutable Data Types

| Type | Example | Mutable? |
|------|---------|---------|
| Primitive | `"hello"` | ❌ No |
| Object | `{ name: "John" }` | ✅ Yes |
| Array | `[1, 2, 3]` | ✅ Yes |

### **Using `Object.freeze()` for Immutable Objects**
```js
let obj = { name: "John" };
Object.freeze(obj);
obj.name = "Doe"; // ❌ Won't change
```

## 8. Falsy vs Truthy Values

Falsy values:
```js
if (false, 0, "", null, undefined, NaN) {
  console.log("This won't execute");
}
```
Truthy values:
```js
if ("hello", 1, [], {}, function(){}) {
  console.log("This will execute");
}
```

## Conclusion
JavaScript's data types are fundamental for effective programming. Understanding how they work helps in avoiding errors related to type coercion, memory leaks, and unexpected behavior.
