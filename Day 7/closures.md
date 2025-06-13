In JavaScript, a **closure** is a function that **remembers** the variables from its **lexical scope**, even when the function is executed **outside that scope**.

---

### 🔍 **Definition**

A **closure** is created when:

1. A **function** is defined inside another function.
2. The **inner function accesses** variables from the **outer function**.

---

### ✅ **Simple Example**

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const myFunc = outer();  // `outer` runs and returns `inner`
myFunc(); // Output: 1
myFunc(); // Output: 2
```

➡️ Even though `outer()` has finished running, the `inner()` function remembers the value of `count` — this is a **closure**.

---

### 🔐 **Why Closures Are Useful**

1. **Data privacy** – Create private variables.
2. **Stateful functions** – Maintain state between function calls.
3. **Callbacks and Event Handlers** – Retain access to parent scopes.

---

### 🧠 Real-Life Example: Counter

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

🔐 `count` is **private**, only accessible via the `increment` or `decrement` methods.

---

### 📝 Summary

| Concept      | Meaning                                                 |
| ------------ | ------------------------------------------------------- |
| Closure      | A function "remembers" variables from its outer scope.  |
| Created when | A function is defined inside another and uses its vars. |
| Use Cases    | Private variables, event handlers, maintaining state.   |

---

