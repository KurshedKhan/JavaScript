# JavaScript Variables (Basic to Advanced)

## 📌 What are Variables in JavaScript?
A **variable** is a container that holds data values. JavaScript variables can store different types of data, such as numbers, strings, objects, and more.

### 🔹 Declaring Variables in JavaScript
JavaScript provides three ways to declare variables:
1. `var` (Old way - function-scoped)
2. `let` (Modern way - block-scoped)
3. `const` (Constant variable - block-scoped and immutable)

```javascript
var name = "John";  // Function-scoped variable
let age = 25;        // Block-scoped variable
const PI = 3.14;     // Constant value
```

---

## 📌 Difference Between `var`, `let`, and `const`

### 🔹 Scope (Function vs. Block Scope)
| Feature   | `var`  | `let`  | `const` |
|-----------|--------|--------|---------|
| Scope     | Function-scoped | Block-scoped | Block-scoped |
| Re-declaration | ✅ Allowed | ❌ Not Allowed | ❌ Not Allowed |
| Re-assignment | ✅ Allowed | ✅ Allowed | ❌ Not Allowed |
| Hoisting  | ✅ Hoisted with `undefined` | ✅ Hoisted but not initialized | ✅ Hoisted but not initialized |

### ✅ Example: Function Scope (`var`)
```javascript
function example() {
    if (true) {
        var test = "Hello";
    }
    console.log(test); // ✅ Works, because `var` is function-scoped
}
example();
```

### ❌ Example: Block Scope (`let` and `const`)
```javascript
function example() {
    if (true) {
        let test = "Hello";
    }
    console.log(test); // ❌ Error: test is not defined
}
example();
```

---

## 📌 `var` in Depth
### 🔹 Features of `var`
- Function-scoped
- Can be re-declared and updated
- Hoisted with `undefined`

### ✅ Example: Hoisting with `var`
```javascript
console.log(a); // ✅ Output: undefined
var a = 10;
```

### ❌ Issue with `var`: Global Scope Pollution
```javascript
var message = "Hello";
if (true) {
    var message = "Hi"; // ✅ Overwrites the global variable
}
console.log(message); // Output: "Hi"
```

---

## 📌 `let` in Depth
### 🔹 Features of `let`
- Block-scoped
- Cannot be re-declared in the same scope
- Can be updated
- Hoisted but not initialized

### ✅ Example: Block Scope with `let`
```javascript
if (true) {
    let greeting = "Hello";
    console.log(greeting); // ✅ Output: "Hello"
}
console.log(greeting); // ❌ Error: greeting is not defined
```

### ❌ Issue with `let`: Cannot be Re-declared
```javascript
let x = 5;
let x = 10; // ❌ Error: Identifier 'x' has already been declared
```

---

## 📌 `const` in Depth
### 🔹 Features of `const`
- Block-scoped
- Cannot be re-declared or updated
- Hoisted but not initialized

### ✅ Example: Declaring a `const` Variable
```javascript
const name = "John";
console.log(name); // ✅ Output: John
```

### ❌ Issue with `const`: Cannot be Reassigned
```javascript
const PI = 3.14;
PI = 3.1416; // ❌ Error: Assignment to constant variable
```

### ✅ Example: Objects with `const`
```javascript
const person = { name: "Alice", age: 25 };
person.age = 26; // ✅ Allowed, properties can change
console.log(person.age); // Output: 26
```

### ❌ Example: Reassigning Objects with `const`
```javascript
const person = { name: "Alice" };
person = { name: "Bob" }; // ❌ Error: Assignment to constant variable
```

---

## 📌 Hoisting in JavaScript Variables
Hoisting means moving variable and function declarations to the top of their scope before execution.

| Variable Type | Hoisted? | Initialized? |
|--------------|---------|--------------|
| `var`       | ✅ Yes  | `undefined`   |
| `let`       | ✅ Yes  | ❌ No (Throws error) |
| `const`     | ✅ Yes  | ❌ No (Throws error) |

### ✅ Example: Hoisting with `var`
```javascript
console.log(a); // Output: undefined
var a = 10;
```

### ❌ Example: Hoisting with `let` and `const`
```javascript
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

---

## 🎯 Conclusion
- Use `let` and `const` instead of `var` for safer and cleaner code.
- `const` is best for values that should not change.
- `let` is best for variables that may change over time.
- Avoid `var` to prevent scope and hoisting issues.
