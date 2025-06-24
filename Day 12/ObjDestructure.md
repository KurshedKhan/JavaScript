### Object Destructuring in JavaScript

**Object destructuring** is a JavaScript expression that allows you to unpack properties from objects into distinct variables.
It makes your code cleaner and more readable.

---

## 📚 Basic Syntax:

```javascript
const { property1, property2 } = object;
```

---

## ✅ Example 1: Basic Destructuring

```javascript
const person = { name: 'John', age: 30 };

const { name, age } = person;

console.log(name); // John
console.log(age);  // 30
```

---

## ✅ Example 2: Destructuring with Renaming

```javascript
const person = { name: 'John', age: 30 };

const { name: userName, age: userAge } = person;

console.log(userName); // John
console.log(userAge);  // 30
```

---

## ✅ Example 3: Destructuring with Default Values

```javascript
const person = { name: 'John' };

const { name, age = 25 } = person;

console.log(name); // John
console.log(age);  // 25 (default value)
```

---

## ✅ Example 4: Nested Destructuring

```javascript
const student = {
    name: 'Kurshed',
    address: {
        city: 'Jaipur',
        pincode: 302001
    }
};

const { name, address: { city, pincode } } = student;

console.log(name);    // Kurshed
console.log(city);    // Jaipur
console.log(pincode); // 302001
```

---

## ✅ Example 5: Destructuring in Function Parameters

```javascript
const display = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

const person = { name: 'Amit', age: 35 };

display(person); // Name: Amit, Age: 35
```

---

### 💡 Advantages of Destructuring:

* Clean and readable code
* Easy extraction of multiple properties
* Default values handling

---

