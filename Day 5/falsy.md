## Falsy Values in JavaScript

In JavaScript, **falsy values** are values that evaluate to `false` when used in a boolean context (e.g., inside an `if` statement). There are **7 falsy values**:

1. `false` → The boolean `false`
2. `0` → The number zero
3. `-0` → Negative zero
4. `""` (empty string) → A string with no characters
5. `null` → Absence of any value
6. `undefined` → A variable that has been declared but not assigned a value
7. `NaN` → "Not-a-Number" result from invalid math operations

### Example:
```javascript
if (!false) console.log("Falsy!");  // Output: Falsy!
if (!0) console.log("Falsy!");      // Output: Falsy!
if (!"") console.log("Falsy!");     // Output: Falsy!
if (!null) console.log("Falsy!");   // Output: Falsy!
if (!undefined) console.log("Falsy!"); // Output: Falsy!
if (!NaN) console.log("Falsy!");    // Output: Falsy!
