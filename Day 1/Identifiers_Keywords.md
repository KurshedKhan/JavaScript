# Identifiers and Keywords in JavaScript (Basic to Advanced)

## 📌 Identifiers in JavaScript

### 🔹 What is an Identifier?
An **identifier** is the name used to identify variables, functions, objects, and classes. It must follow certain rules to be valid.

### 🔹 Rules for Identifiers:
1. Can contain letters (`A-Z`, `a-z`), digits (`0-9`), underscore (`_`), or dollar sign (`$`).
2. **Cannot start with a digit** (e.g., `1variable` ❌ is invalid).
3. **Case-sensitive** (e.g., `myVar` and `myvar` are different).
4. **Cannot be a reserved keyword** (e.g., `var`, `let`, `if` are invalid as identifiers).
5. No spaces allowed (use camelCase for readability, e.g., `myVariableName`).

### ✅ Valid Identifiers:
```javascript
myVariable
_myVariable
$price
name1
camelCaseNaming
```

### ❌ Invalid Identifiers:
```javascript
1variable   // ❌ Cannot start with a number
my-variable // ❌ Hyphens are not allowed
var         // ❌ Reserved keyword
```

---

## 📌 Keywords in JavaScript

### 🔹 What are Keywords?
**Keywords** are reserved words in JavaScript that have a predefined meaning and cannot be used as identifiers.

### 🔹 List of JavaScript Keywords:

#### **Variable Declarations:**
| Keyword  | Description |
|----------|-------------|
| `var`   | Declares a variable (old way) |
| `let`   | Declares a block-scoped variable |
| `const` | Declares a constant variable |

#### **Control Flow:**
| Keyword  | Description |
|----------|-------------|
| `if`     | Defines a condition |
| `else`   | Alternative condition block |
| `switch` | Multiple condition handling |
| `case`   | Defines a condition inside `switch` |
| `default`| Default block in `switch` |

#### **Loops:**
| Keyword  | Description |
|----------|-------------|
| `for`   | Creates a loop |
| `while` | Loop until a condition is met |
| `do`    | Executes loop at least once before checking condition |
| `break` | Exits the loop prematurely |
| `continue` | Skips current iteration and moves to next |

#### **Functions & Classes:**
| Keyword  | Description |
|----------|-------------|
| `function` | Declares a function |
| `return` | Returns a value from function |
| `class` | Declares a class |
| `extends` | Inherits properties from another class |
| `super` | Refers to the parent class |

#### **Other Important Keywords:**
| Keyword  | Description |
|----------|-------------|
| `this`   | Refers to the current object |
| `new`    | Creates an instance of an object |
| `try`    | Starts error handling block |
| `catch`  | Handles exceptions |
| `throw`  | Throws an error |
| `typeof` | Returns data type of a variable |
| `delete` | Removes a property from an object |

---

## 📌 Examples of Keywords and Identifiers

### ✅ Correct Use of Identifiers and Keywords:
```javascript
let myVariable = 10;   // ✅ Valid identifier
const PI = 3.14;       // ✅ Constants must be uppercase by convention
function greet() {      // ✅ Function declaration
    return "Hello!";   
}
console.log(greet());  // Output: Hello!
```

### ❌ Incorrect Use of Keywords as Identifiers:
```javascript
let var = 5;  // ❌ Error: 'var' is a reserved keyword
const if = 10; // ❌ Error: 'if' is a reserved keyword
```

---

## 🎯 Conclusion
- **Identifiers** are names given to variables, functions, and objects.
- **Keywords** are reserved words and cannot be used as identifiers.
- Follow best practices like using **camelCase** for variable names and **UPPERCASE** for constants.


