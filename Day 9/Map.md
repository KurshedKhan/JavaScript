# JavaScript `map()` Method – Notes

## 🔹 Syntax
```javascript
array.map(callbackFunction(currentValue, index, array), thisArg);
```
### **Parameters**  
1. `callbackFunction`
   - `currentValue` (Required): Current element value.
   - `index` (Optional): Current element index.
   - `array` (Optional): The full array.
2. `thisArg` (Optional): Value used as `this` inside the callback.

---

## 🔹 Basic Example
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```
**Output:**
```
[2, 4, 6, 8]
```

---

## 🔹 Transforming Array Elements
```javascript
const names = ["alice", "bob", "charlie"];
const capitalizedNames = names.map(name => name.toUpperCase());
console.log(capitalizedNames);
```
**Output:**
```
["ALICE", "BOB", "CHARLIE"]
```

---

## 🔹 Mapping an Array of Objects
```javascript
const students = [
    { name: "John", score: 80 },
    { name: "Jane", score: 90 },
    { name: "Jack", score: 85 }
];
const scores = students.map(student => student.score);
console.log(scores);
```
**Output:**
```
[80, 90, 85]
```

---

## 🔹 Using `thisArg`
```javascript
const multiplierObj = {
    factor: 2,
    multiply(arr) {
        return arr.map(function (num) {
            return num * this.factor;
        }, this);
    }
};
console.log(multiplierObj.multiply([2, 3, 4]));
```
**Output:**
```
[4, 6, 8]
```

---

## 🔹 Difference Between `map()` and `forEach()`
| Feature       | `map()`            | `forEach()`         |
|--------------|------------------|------------------|
| Returns New Array? | ✅ Yes          | ❌ No           |
| Modifies Original? | ❌ No           | ❌ No           |
| Allows Chaining?   | ✅ Yes          | ❌ No           |
| Purpose      | Transform data    | Execute side effects |

---

## 🔹 When to Use `map()`
✅ When you need a **new array** with transformed values.
✅ When you want to apply modifications **without changing the original array**.
❌ Not recommended if you don’t need the returned array (use `forEach()` instead).
