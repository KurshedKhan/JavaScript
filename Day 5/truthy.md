## Truthy Values in JavaScript

In JavaScript, **truthy** values are those that evaluate to `true` when used in a boolean context, even if they are not explicitly `true`.

### **Truthy Values in JavaScript**
Any value that is **not** in the list of falsy values is considered truthy. Some common truthy values are:

✅ **Non-empty strings** → `"hello"`, `"0"`, `"false"`  
✅ **Non-zero numbers** → `1`, `-1`, `3.14`  
✅ **Objects** → `{}`, `{ name: "Chatto" }`  
✅ **Arrays** → `[]`, `[1, 2, 3]`  
✅ **Functions** → `function() {}`  
✅ **Symbol values** → `Symbol("JS")`  
✅ **BigInt values** → `1n`, `9007199254740991n`  

### **Example Usage**
```javascript
if ("hello") {
  console.log("Truthy!"); // ✅ This will execute
}

if (42) {
  console.log("Truthy!"); // ✅ This will execute
}

if ({}) {
  console.log("Truthy!"); // ✅ This will execute
}
