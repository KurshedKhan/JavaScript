# 🖥️ JavaScript में Conditional Statements - Basic से Advance तक 🚀

## 📌 Introduction - परिचय
Conditional statements प्रोग्राम को विभिन्न परिस्थितियों (conditions) के अनुसार निर्णय लेने की अनुमति देते हैं। JavaScript में मुख्यतः निम्नलिखित conditional statements होते हैं:

- `if` statement
- `if...else` statement
- `if...else if...else` statement
- `switch` statement
- Ternary operator (`? :`)
- Logical operators (`&&`, `||`, `!`)

---

## 1️⃣ `if` Statement (यदि)
📢 **सिंटैक्स:**
```js
if (condition) {
  // Code block executed if condition is true
}
```
📝 **उदाहरण:**
```js
let age = 18;
if (age >= 18) {
  console.log("✅ You are eligible to vote!");
}
```
🔎 **समझें:** यदि `age` 18 या उससे अधिक है, तो संदेश प्रदर्शित होगा।

---

## 2️⃣ `if...else` Statement (यदि...अन्यथा)
📢 **सिंटैक्स:**
```js
if (condition) {
  // Code block executed if condition is true
} else {
  // Code block executed if condition is false
}
```
📝 **उदाहरण:**
```js
let temperature = 30;
if (temperature > 25) {
  console.log("🌞 It's hot outside!");
} else {
  console.log("🌧️ It's cool outside!");
}
```
🔎 **समझें:** तापमान 25 से अधिक होने पर गर्मी का संदेश दिखेगा अन्यथा ठंडा मौसम।

---

## 3️⃣ `if...else if...else` Statement (यदि...अन्यथा यदि...अन्यथा)
📢 **सिंटैक्स:**
```js
if (condition1) {
  // Code block if condition1 is true
} else if (condition2) {
  // Code block if condition2 is true
} else {
  // Code block if no condition is true
}
```
📝 **उदाहरण:**
```js
let marks = 85;
if (marks >= 90) {
  console.log("🏆 Excellent!");
} else if (marks >= 75) {
  console.log("👏 Good Job!");
} else {
  console.log("📖 Keep Studying!");
}
```
🔎 **समझें:** अंकों के अनुसार विभिन्न संदेश प्रदर्शित होंगे।

---

## 4️⃣ `switch` Statement (स्विच स्टेटमेंट)
📢 **सिंटैक्स:**
```js
switch (expression) {
  case value1:
    // Code block
    break;
  case value2:
    // Code block
    break;
  default:
    // Code block if no cases match
}
```
📝 **उदाहरण:**
```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("📅 Start of the week!");
    break;
  case "Friday":
    console.log("🎉 Weekend is near!");
    break;
  default:
    console.log("📆 Just another day!");
}
```
🔎 **समझें:** `switch` वैरिएबल के अनुसार सही केस को चुनेगा।

---

## 5️⃣ Ternary Operator (`? :`)
📢 **सिंटैक्स:**
```js
condition ? expression1 : expression2;
```
📝 **उदाहरण:**
```js
let isRaining = true;
console.log(isRaining ? "☔ Take an umbrella!" : "🌞 Enjoy the sunshine!");
```
🔎 **समझें:** यदि बारिश हो रही है तो छाता लें अन्यथा धूप का आनंद लें।

---

## 6️⃣ Logical Operators (`&&`, `||`, `!`)
📢 **सिंटैक्स:**
- `&&` (AND) - दोनों कंडीशन सही होने पर `true`
- `||` (OR) - कोई एक कंडीशन सही होने पर `true`
- `!` (NOT) - कंडीशन को उलट देता है

📝 **उदाहरण:**
```js
let isAdult = true;
let hasID = false;
if (isAdult && hasID) {
  console.log("✅ You can enter!");
} else {
  console.log("❌ Entry denied!");
}
```
🔎 **समझें:** केवल वयस्क और ID धारक को प्रवेश मिलेगा।

---

## 🎯 निष्कर्ष
Conditional statements JavaScript में निर्णय लेने के लिए अनिवार्य हैं। इनके सही उपयोग से आपका कोड अधिक प्रभावी और तर्कसंगत (logical) बनेगा।

✅ **Happy Coding! 👨‍💻🚀**
