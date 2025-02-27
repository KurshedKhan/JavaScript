# JavaScript Operators: Basic to Advanced (Deep Dive)

JavaScript provides various operators to perform operations on variables and values. Operators are categorized based on their functionality.

## 1. Arithmetic Operators
Used for mathematical calculations.

| Operator | Description | Example | Output |
|----------|-------------|------------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

```js
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % 3); // 1
console.log(2 ** 3); // 8
```

## 2. Assignment Operators
Used to assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 10` | Assigns 10 to `x` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |

```js
let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // x = x * 2 → 24
x /= 2; // x = x / 2 → 12
```

## 3. Comparison Operators
Used to compare values and return a boolean.

| Operator | Description | Example | Output |
|----------|-------------|---------|--------|
| `==` | Equal (loose comparison) | `10 == "10"` | `true` |
| `===` | Strictly equal | `10 === "10"` | `false` |
| `!=` | Not equal | `10 != 5` | `true` |
| `!==` | Strictly not equal | `10 !== "10"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `10 <= 5` | `false` |

```js
console.log(10 == "10"); // true (loose equality)
console.log(10 === "10"); // false (strict equality)
console.log(10 > 5); // true
console.log(10 <= 5); // false
```

## 4. Logical Operators
Used for combining boolean values.

| Operator | Description | Example | Output |
|----------|-------------|---------|--------|
### | `&&` | AND | `true && false` | `false` |`
### `| `||` | OR | `true` || `false` | `true` |`
### `| `!` | NOT | `!true` | `false` |`

```js
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

## 5. Bitwise Operators
Operate at the binary level.

| Operator | Description | Example | Output |
|----------|-------------|---------|--------|
| `&` | AND | `5 & 1` | `1` |
| `|` | OR | `5 | 1` | `5` |
| `^` | XOR | `5 ^ 1` | `4` |
| `~` | NOT | `~5` | `-6` |
| `<<` | Left shift | `5 << 1` | `10` |
| `>>` | Right shift | `5 >> 1` | `2` |

```js
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5); // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
```

## 6. Ternary Operator
Short-hand for `if-else` conditions.

```js
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

## 7. Typeof Operator
Used to check the type of a variable.

| Example | Output |
|---------|--------|
| `typeof "hello"` | `string` |
| `typeof 10` | `number` |
| `typeof true` | `boolean` |
| `typeof {}` | `object` |
| `typeof undefined` | `undefined` |

```js
console.log(typeof "hello"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
```

## 8. Nullish Coalescing Operator (`??`)
Used to return the right-hand value if the left-hand value is `null` or `undefined`.

```js
let name = null;
let user = name ?? "Guest";
console.log(user); // "Guest"
```

## 9. Optional Chaining Operator (`?.`)
Prevents errors when accessing properties of `null` or `undefined` values.

```js
let person = { name: "John" };
console.log(person?.address?.street); // undefined (no error)
```

## 10. Delete Operator
Used to remove properties from an object.

```js
let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }
```

## Conclusion
JavaScript provides a variety of operators for performing calculations, comparisons, logical operations, and more. Understanding these operators is key to writing efficient and optimized JavaScript code.
