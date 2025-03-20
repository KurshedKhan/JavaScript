# JavaScript `reduce()` Method – Notes

## 🔹 Why Use `reduce()`?
The `reduce()` method is used when you need to process an array and return a **single accumulated result**. Unlike `map()` and `forEach()`, which return a modified array or simply iterate over elements, `reduce()` is useful for:
- **Summing or aggregating values** from an array.
- **Transforming an array into an object** (e.g., grouping items, counting occurrences).
- **Flattening nested arrays** into a single-level array.
- **Finding maximum or minimum values** in an array.

## 🔹 Syntax
```javascript
array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue);
```
### **Parameters**  
1. `callbackFunction`
   - `accumulator` (Required): The accumulated result.
   - `currentValue` (Required): The current element being processed.
   - `index` (Optional): The index of the current element.
   - `array` (Optional): The full array.
2. `initialValue` (Optional): Initial value for the accumulator. If omitted, the first array element is used as the initial value.

---

## 🔹 Basic Example (Summing an Array)
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
```
**Output:**
```
10
```

---

## 🔹 Finding Maximum Value
```javascript
const numbers = [10, 5, 8, 20, 3];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max);
```
**Output:**
```
20
```

---

## 🔹 Counting Occurrences
```javascript
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log(wordCount);
```
**Output:**
```
{ apple: 3, banana: 2, orange: 1 }
```

---

## 🔹 Flattening an Array
```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArray);
```
**Output:**
```
[1, 2, 3, 4, 5, 6]
```

---

## 🔹 Grouping Data
```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];
const groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person.name);
    return acc;
}, {});
console.log(groupedByAge);
```
**Output:**
```
{ 25: ["Alice", "Charlie"], 30: ["Bob"] }
```

---

## 🔹 Difference Between `reduce()`, `map()`, and `forEach()`
| Feature       | `reduce()`         | `map()`            | `forEach()`         |
|--------------|------------------|------------------|------------------|
| Returns New Value? | ✅ Yes          | ✅ Yes          | ❌ No           |
| Modifies Original? | ❌ No           | ❌ No           | ❌ No           |
| Purpose      | Aggregate data    | Transform data    | Execute side effects |

---

## 🔹 When to Use `reduce()`
✅ When you need to **accumulate** values (sum, average, max, count, etc.).
✅ When you need to **transform** an array into a different structure (object, number, string, etc.).
❌ Not recommended if you only need to iterate without accumulating values (use `forEach()` or `map()`).