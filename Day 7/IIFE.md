IIFE (Immediately Invoked Function Expression) एक JavaScript pattern है जिसमें एक function define करके तुरंत उसे execute कर दिया जाता है।

अब बात करते हैं कि IIFE में **parameter**, **argument** और **return value** कैसे काम करते हैं:

---

### ✅ **1. Basic Syntax of IIFE:**

```javascript
(function() {
  console.log("IIFE called");
})();
```

---

### ✅ **2. IIFE with Parameters and Arguments:**

```javascript
(function(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
})("Kurshed", 25);
```

📝 यहाँ:

* `name, age` → **parameters** हैं (function define करते समय)
* `"Kurshed", 25` → **arguments** हैं (function call करते समय)

---

### ✅ **3. IIFE with Return Value:**

```javascript
const result = (function(a, b) {
  return a + b;
})(5, 10);

console.log("Result is:", result); // Output: 15
```

📝 यहाँ:

* Function ने `a + b` return किया
* Result variable में return value store हुई

---

### ✅ **4. Arrow Function Style IIFE (Modern JS):**

```javascript
const output = ((name) => {
  return `Hello, ${name}!`;
})("Khan");

console.log(output); // Output: Hello, Khan!
```

---

### 📌 Summary Table:

| Concept      | IIFE Code Example               |
| ------------ | ------------------------------- |
| Parameter    | `(function(a, b) { ... })`      |
| Argument     | `)(5, 10);`                     |
| Return Value | `return a + b;` inside function |

---

अगर आप चाहें तो मैं इसके ऊपर एक छोटा सा प्रैक्टिकल प्रोजेक्ट भी बना सकता हूँ — जैसे कैलकुलेटर IIFE से। बताइए 😊


चलिए एक छोटा सा **IIFE-based Calculator Project** बनाते हैं जो:

* दो numbers लेता है (argument के रूप में)
* एक operation (`+`, `-`, `*`, `/`) को perform करता है
* और result return करता है

---

### ✅ **📁 IIFE Calculator Example in JavaScript**

```javascript
const result = (function(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    default:
      return "Invalid operation";
  }
})(20, 5, '*');

console.log("Result:", result); // Output: Result: 100
```

---

### 🔍 **How it works:**

| Part                    | Value        | Role                      |
| ----------------------- | ------------ | ------------------------- |
| `num1, num2, operation` | Parameters   | Function inputs           |
| `(20, 5, '*')`          | Arguments    | Values passed             |
| `return ...`            | Return Value | Output stored in `result` |

---

### ✅ Try Changing:

* `(20, 5, '*')` → Try `('+')`, `('-')`, `('/')`
* Handle edge cases like divide by zero

---

अगर चाहो तो मैं इसे HTML form के साथ जोड़ कर एक छोटा UI भी बना सकता हूँ जिसमें user input दे और result मिले — बताना बस 😊
