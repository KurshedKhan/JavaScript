# JavaScript `forEach()` Method – Notes

## 🔹 Syntax
```javascript
array.forEach(callbackFunction(currentValue, index, array), thisArg);
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
numbers.forEach(num => console.log(num * 2));
```
**Output:**
```
2
4
6
8
```

---

## 🔹 Accessing Index
```javascript
const colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) => console.log(`Index ${index}: ${color}`));
```

---

## 🔹 Using `thisArg`
```javascript
const obj = {
    multiplier: 2,
    multiplyArray(arr) {
        arr.forEach(function (num) {
            console.log(num * this.multiplier);
        }, this);
    }
};
obj.multiplyArray([2, 3, 4]);
```

---

## 🔹 Iterating Objects (Indirectly)
```javascript
const student = { name: "John", age: 20, city: "New York" };
Object.entries(student).forEach(([key, value]) => console.log(`${key}: ${value}`));
```

---

## 🔹 Limitations
❌ `forEach()` **cannot** use `break` or `continue`. Use `.some()` instead:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.some(num => {
    if (num === 3) return true; // Stops iteration
    console.log(num);
});
```

---

## 🔹 Alternative Loop Methods
| Method     | Modifies Original? | Supports `break`? | Returns New Array? |
|------------|------------------|----------------|----------------|
| `forEach()` | ❌ No            | ❌ No          | ❌ No          |
| `map()`    | ❌ No            | ❌ No          | ✅ Yes         |
| `filter()` | ❌ No            | ❌ No          | ✅ Yes         |
| `some()`   | ❌ No            | ✅ Yes         | ❌ No          |

---

## 🔹 When to Use `forEach()`
✅ Iterating without needing a new array.
✅ Performing side effects (e.g., logging, modifying external variables).
❌ Not recommended if you need to break out early.
❌ Not ideal for transformations (use `map()` instead).
