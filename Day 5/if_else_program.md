# 📌 JavaScript Conditional Statements - Deep Dive

## 🟢 Introduction
Conditional statements in JavaScript allow the execution of different blocks of code based on certain conditions.

---

## 🏁 Practical Real-Life `if-else` Programs

### 1️⃣ Check if a Number is Positive, Negative, or Zero
```js
let num = -5;
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
```

### 2️⃣ Determine if a Person Can Vote
```js
let age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```

### 3️⃣ Check for Even or Odd Number
```js
let number = 8;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

### 4️⃣ Find the Largest of Two Numbers
```js
let a = 10, b = 20;
if (a > b) {
    console.log("A is greater");
} else {
    console.log("B is greater");
}
```

### 5️⃣ Check if a Year is a Leap Year
```js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
```

### 6️⃣ Check Password Strength
```js
let password = "abc123";
if (password.length >= 8) {
    console.log("Strong password");
} else {
    console.log("Weak password");
}
```

### 7️⃣ Determine the Grade of a Student
```js
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
```

### 8️⃣ Check if a Person is Eligible for a Loan
```js
let income = 40000;
if (income > 30000) {
    console.log("Eligible for loan");
} else {
    console.log("Not eligible for loan");
}
```

### 9️⃣ Verify if a User is Logged In
```js
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome, User!");
} else {
    console.log("Please log in");
}
```

### 🔟 Check if a Store is Open or Closed
```js
let hour = 22;
if (hour >= 9 && hour <= 21) {
    console.log("Store is open");
} else {
    console.log("Store is closed");
}
```

### 1️⃣1️⃣ Determine if a Number is a Multiple of 5
```js
let num = 25;
if (num % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a multiple of 5");
}
```

### 1️⃣2️⃣ Check Weather Condition
```js
let temperature = 32;
if (temperature > 30) {
    console.log("It's hot outside");
} else {
    console.log("The weather is cool");
}
```

### 1️⃣3️⃣ Validate Email Format
```js
let email = "user@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("Valid email format");
} else {
    console.log("Invalid email format");
}
```

### 1️⃣4️⃣ Detect Traffic Light Signal
```js
let signal = "red";
if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Get ready");
} else {
    console.log("Go");
}
```

### 1️⃣5️⃣ Check if a User is a Premium Member
```js
let userType = "premium";
if (userType === "premium") {
    console.log("Access to all features");
} else {
    console.log("Limited access");
}
```

---

## 🏆 Conclusion
These practical `if-else` programs showcase real-world applications in daily life scenarios. Mastering `if-else` logic is essential for effective decision-making in JavaScript programming. 🚀
