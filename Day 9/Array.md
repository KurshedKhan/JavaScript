# JavaScript Arrays - Basics to Advanced

## 📌 Introduction to Arrays
An array in JavaScript is a special variable that can hold multiple values. Arrays are **zero-indexed** and **mutable**, allowing modifications.

### **Indexing in Arrays**
JavaScript arrays use **zero-based indexing**, meaning the first element has index `0`, the second element has index `1`, and so on.

#### **Accessing Elements by Index**
```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "mango"
```

#### **Modifying Elements by Index**
```js
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]
```

#### **Finding the Last Element**
```js
let lastElement = fruits[fruits.length - 1];
console.log(lastElement); // "mango"
```

#### **Out-of-Bounds Index**
If you try to access an index that doesn’t exist, JavaScript returns `undefined`:
```js
console.log(fruits[10]); // undefined
```

### **Array Slicing using the Slice Operator**
JavaScript does not have a dedicated slicing operator like Python, but we can achieve similar functionality using **array destructuring and spread syntax**.

#### **Using the Slice Operator Concept with Spread (`...`)**
```js
let numbers = [1, 2, 3, 4, 5];
let [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
```

#### **Extracting Specific Elements with Spread**
```js
let [, second, third, ...remaining] = numbers;
console.log(second); // 2
console.log(third);  // 3
console.log(remaining); // [4, 5]
```

### **Array Creation Methods**
```js
// Using array literal
let arr1 = [1, 2, 3, 4, 5];

// Using new Array()
let arr2 = new Array(5); // Creates an array with 5 empty slots
let arr3 = new Array(1, 2, 3); // [1, 2, 3]
```

---

## 🔥 Array Methods (Detailed Explanation)

### **1. Slicing Arrays**
The `slice()` method is used to extract a portion of an array **without modifying the original array**.

#### **Using slice()**
```js
let colors = ["red", "blue", "green", "yellow", "purple"];
let slicedColors = colors.slice(1, 4);
console.log(slicedColors); // ["blue", "green", "yellow"]
console.log(colors); // Original array remains unchanged
```

#### **Using slice() with Negative Index**
```js
let lastTwo = colors.slice(-2);
console.log(lastTwo); // ["yellow", "purple"]
```

#### **Copying an Array with slice()**
```js
let copiedArray = colors.slice();
console.log(copiedArray); // ["red", "blue", "green", "yellow", "purple"]
```

---

### **2. Adding and Removing Elements**
These methods modify the original array by adding or removing elements.

## 🔥 Detailed Explanation of push(), pop(), shift(), unshift()

### **1. push() - Add Element at the End**
The `push()` method adds one or more elements to the **end** of an array and returns the new length of the array.

#### **Example:**
```js
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]
```

#### **Adding Multiple Elements:**
```js
fruits.push("grapes", "orange");
console.log(fruits); // ["apple", "banana", "mango", "grapes", "orange"]
```

### **2. pop() - Remove Element from the End**
The `pop()` method removes the **last** element from an array and returns the removed element.

#### **Example:**
```js
let removedItem = fruits.pop();
console.log(removedItem); // "orange"
console.log(fruits); // ["apple", "banana", "mango", "grapes"]
```

### **3. shift() - Remove Element from the Beginning**
The `shift()` method removes the **first** element from an array and returns it.

#### **Example:**
```js
let firstItem = fruits.shift();
console.log(firstItem); // "apple"
console.log(fruits); // ["banana", "mango", "grapes"]
```

### **4. unshift() - Add Element at the Beginning**
The `unshift()` method adds one or more elements to the **beginning** of an array and returns the new length of the array.

#### **Example:**
```js
fruits.unshift("pineapple");
console.log(fruits); // ["pineapple", "banana", "mango", "grapes"]
```

#### **Adding Multiple Elements:**
```js
fruits.unshift("kiwi", "papaya");
console.log(fruits); // ["kiwi", "papaya", "pineapple", "banana", "mango", "grapes"]
```

### **3. Iterating Over Arrays**

#### **forEach() - Execute Function on Each Element**
```js
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6
```

---
## 🔥 Advanced Array Methods

### **1. map() - Transform Elements in an Array**
The `map()` method creates a **new array** by applying a function to each element of the original array.

#### **Example: Squaring Each Element**
```js
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
```

#### **Example: Extracting Property from Object Array**
```js
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
```

---

### **2. filter() - Select Elements Based on Condition**
The `filter()` method creates a **new array** containing only the elements that meet a specified condition.

#### **Example: Filtering Even Numbers**
```js
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

#### **Example: Filtering Adults from an Object Array**
```js
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 35 }
];
let adults = people.filter(person => person.age >= 18);
console.log(adults);
// [{ name: "Alice", age: 25 }, { name: "Charlie", age: 35 }]
```

---

### **3. reduce() - Accumulate Array Values**
The `reduce()` method executes a reducer function on each element, resulting in a **single accumulated value**.

#### **Example: Sum of Array Elements**
```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

#### **Example: Finding Maximum Number**
```js
let maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNumber); // 5
```

#### **Example: Grouping Data by Category**
```js
let items = [
    { category: "Fruit", name: "Apple" },
    { category: "Vegetable", name: "Carrot" },
    { category: "Fruit", name: "Banana" }
];
let grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
}, {});
console.log(grouped);
/* Output:
{
  Fruit: ["Apple", "Banana"],
  Vegetable: ["Carrot"]
}
*/
```

---

### **4. Transforming Arrays**

#### **map() - Create New Array with Transformed Elements**
```js
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
```

---

### **5. Filtering Elements**

#### **filter() - Create New Array with Specific Conditions**
```js
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]
```

---

### **6. Finding Elements**

#### **find() - Returns First Matching Element**
```js
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
```

#### **findIndex() - Returns Index of First Matching Element**
```js
let index = numbers.findIndex(num => num % 2 === 0);
console.log(index); // 1
```

---

### **7. Sorting and Reversing**

#### **sort() - Sort Elements Alphabetically**
```js
let words = ["banana", "apple", "mango"];
words.sort();
console.log(words); // ["apple", "banana", "mango"]
```

#### **reverse() - Reverse the Array Order**
```js
words.reverse();
console.log(words); // ["mango", "banana", "apple"]
```

---

### **8. Reducing an Array**

#### **reduce() - Accumulate Array Values**
```js
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6
```

#### **reduceRight() - Accumulate from Right to Left**
```js
let reversedSum = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(reversedSum); // 6
```

---

### **9. Checking and Converting Arrays**

#### **isArray() - Check if a Variable is an Array**
```js
console.log(Array.isArray(numbers)); // true
```

#### **toString() - Convert Array to String**
```js
console.log(numbers.toString()); // "1,2,3"
```

---

## 🎯 Summary
- **push, pop, shift, unshift** modify arrays.
- **map, filter, reduce** transform arrays efficiently.
- **find, some, every** are useful for condition checking.
- **splice, slice** help modify and extract elements.
- **flat, flatMap** handle nested structures.

### 🚀 Keep practicing these methods for 2025 interviews!
