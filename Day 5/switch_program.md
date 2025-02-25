# 📌 JavaScript `switch` Statement - Real-Life Practical Examples

## 🟢 Introduction
The `switch` statement is useful for handling multiple conditions efficiently. Below are 15 real-life practical programs using `switch`.

---

### 1️⃣ Weekday Finder
```js
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        break;
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
    default:
        console.log("Invalid day");
}
```

### 2️⃣ Month Name Finder
```js
let month = new Date().getMonth();
switch (month) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}
```

### 3️⃣ Traffic Light System
```js
let signal = "red";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}
```

### 4️⃣ Grade System
```js
let marks = 85;
switch (true) {
    case (marks >= 90):
        console.log("Grade: A");
        break;
    case (marks >= 80):
        console.log("Grade: B");
        break;
    case (marks >= 70):
        console.log("Grade: C");
        break;
    case (marks >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}
```

### 5️⃣ Currency Converter
```js
let currency = "USD";
switch (currency) {
    case "USD":
        console.log("Dollar");
        break;
    case "EUR":
        console.log("Euro");
        break;
    case "INR":
        console.log("Indian Rupee");
        break;
    case "JPY":
        console.log("Japanese Yen");
        break;
    default:
        console.log("Unknown currency");
}
```

### 6️⃣ Movie Ticket Price Based on Age
```js
let age = 17;
switch (true) {
    case (age < 12):
        console.log("Child Ticket: $5");
        break;
    case (age >= 12 && age < 60):
        console.log("Adult Ticket: $10");
        break;
    case (age >= 60):
        console.log("Senior Ticket: $7");
        break;
    default:
        console.log("Invalid age");
}
```

### 7️⃣ E-Commerce Discount System
```js
let membership = "gold";
switch (membership) {
    case "silver":
        console.log("5% Discount");
        break;
    case "gold":
        console.log("10% Discount");
        break;
    case "platinum":
        console.log("20% Discount");
        break;
    default:
        console.log("No Discount");
}
```

### 8️⃣ Water Bill Calculator
```js
let units = 120;
switch (true) {
    case (units <= 50):
        console.log("Bill: $10");
        break;
    case (units <= 100):
        console.log("Bill: $20");
        break;
    case (units <= 200):
        console.log("Bill: $30");
        break;
    default:
        console.log("Bill: $50");
}
```

### 9️⃣ Electricity Bill Calculator
```js
let consumption = 250;
switch (true) {
    case (consumption <= 100):
        console.log("Bill: $30");
        break;
    case (consumption <= 200):
        console.log("Bill: $50");
        break;
    case (consumption > 200):
        console.log("Bill: $100");
        break;
}
```

### 🔟 Food Ordering System
```js
let food = "burger";
switch (food) {
    case "burger":
        console.log("Price: $5");
        break;
    case "pizza":
        console.log("Price: $10");
        break;
    case "pasta":
        console.log("Price: $7");
        break;
    default:
        console.log("Item not available");
}
```

### 1️⃣1️⃣ Vehicle Type Checker
```js
let vehicle = "car";
switch (vehicle) {
    case "car":
    case "bus":
    case "truck":
        console.log("Four-wheeler");
        break;
    case "bike":
    case "scooter":
        console.log("Two-wheeler");
        break;
    default:
        console.log("Unknown vehicle");
}
```

### 1️⃣2️⃣ Weather Advice
```js
let weather = "rainy";
switch (weather) {
    case "sunny":
        console.log("Wear sunglasses");
        break;
    case "rainy":
        console.log("Take an umbrella");
        break;
    case "cold":
        console.log("Wear a jacket");
        break;
    default:
        console.log("Check the weather forecast");
}
```
### 1️⃣3️⃣ Library Book Category
```js
let book = "history";
switch (book) {
    case "fiction":
        console.log("Category: Fiction");
        break;
    case "science":
        console.log("Category: Science");
        break;
    case "history":
        console.log("Category: History");
        break;
    case "technology":
        console.log("Category: Technology");
        break;
    default:
        console.log("Category: General");
}
```

### 1️⃣4️⃣ Customer Support Department Routing
```js
let issue = "billing";
switch (issue) {
    case "technical":
        console.log("Redirecting to Technical Support");
        break;
    case "billing":
        console.log("Redirecting to Billing Department");
        break;
    case "general":
        console.log("Redirecting to Customer Service");
        break;
    default:
        console.log("Please select a valid department");
}
```

### 1️⃣5️⃣ Fitness Membership Plan
```js
let plan = "gold";
switch (plan) {
    case "basic":
        console.log("Access to gym only");
        break;
    case "silver":
        console.log("Access to gym + group classes");
        break;
    case "gold":
        console.log("Access to gym, group classes + swimming pool");
        break;
    case "platinum":
        console.log("All facilities included");
        break;
    default:
        console.log("Invalid plan");
}
```
---

## 🏆 Conclusion
The `switch` statement simplifies handling multiple cases in real-world applications like traffic signals, grading systems, and pricing models. 🚀
