## 🔄 `switch` Statement

### 🔹 Basic `switch` Usage
```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
```
📖 *The `switch` statement is used when multiple cases depend on the same variable.*

### 🔹 `switch` with Multiple Cases
```js
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a fruit.");
        break;
    case "carrot":
        console.log("This is a vegetable.");
        break;
    default:
        console.log("Unknown item");
}
```
📖 *Multiple cases can share the same execution block.*

### 🔹 `switch` without `break`
```js
let grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
    case "B":
        console.log("Good");
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Invalid grade");
}
```
📖 *Without `break`, execution continues to the next case until a `break` is found.*