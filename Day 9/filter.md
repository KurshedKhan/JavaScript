# JavaScript `filter()` Method – Notes

## 🔹 Why Use `filter()`?
The `filter()` method is used when you need to extract a subset of elements from an array based on a **specific condition**. Unlike `map()`, which transforms elements, or `reduce()`, which accumulates values, `filter()` helps in:
- **Selecting specific elements** that meet a condition.
- **Removing unwanted elements** from an array.
- **Creating a new array** with only the necessary items.
- **Working with large datasets** where only relevant information is needed.

## 🔹 Syntax
```javascript
array.filter(callbackFunction(currentValue, index, array), thisArg);
```
### **Parameters**  
1. `callbackFunction`
   - `currentValue` (Required): The current element being processed.
   - `index` (Optional): The index of the current element.
   - `array` (Optional): The full array.
2. `thisArg` (Optional): Value used as `this` inside the callback.

---

## 🔹 Basic Example (Filtering Even Numbers)
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
```
**Output:**
```
[2, 4, 6]
```

---

## 🔹 Filtering Strings
```javascript
const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);
```
**Output:**
```
["banana", "cherry"]
```

---

## 🔹 Filtering Objects (Finding Active Users)
```javascript
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
```
**Output:**
```
[{ name: "Alice", active: true }, { name: "Charlie", active: true }]
```

---

## 🔹 Removing Falsy Values (Truthy Check)
```javascript
const mixedArray = [0, "hello", false, 42, "", null, "JavaScript"];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues);
```
**Output:**
```
["hello", 42, "JavaScript"]
```

---

## 🔹 Difference Between `filter()`, `map()`, and `reduce()`
| Feature       | `filter()`         | `map()`            | `reduce()`         |
|--------------|------------------|------------------|------------------|
| Returns New Array? | ✅ Yes          | ✅ Yes          | ✅ Sometimes    |
| Modifies Original? | ❌ No           | ❌ No           | ❌ No           |
| Purpose      | Select elements  | Transform elements | Aggregate data |

---

## 🔹 When to Use `filter()`
✅ When you need a **subset of an array** based on a condition.
✅ When you need to **remove unwanted elements** without modifying the original array.
✅ When working with **objects or large datasets** to extract meaningful information.
❌ Not recommended if you need to modify or transform elements (use `map()`).