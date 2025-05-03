# JavaScript Promises – Real-Life Examples (Easy to Understand)

Understanding Promises with real-world analogies makes it easier to grasp asynchronous behavior in JavaScript.

---

## 📦 1. Online Food Order (Simple Promise)

```js
const orderFood = new Promise((resolve, reject) => {
  let foodReady = true;

  if (foodReady) {
    resolve("Your food is ready 🍕");
  } else {
    reject("Sorry, food is not available 😢");
  }
});

orderFood
  .then(message => console.log(message))
  .catch(error => console.log(error));
```

📝 **Real-life analogy**: You ordered pizza. If it's ready, you get it; if not, you get an apology.

---

## 🚖 2. Booking a Taxi (Chained Promises)

```js
function bookTaxi() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Taxi booked 🚖"), 1000);
  });
}

function reachDestination() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Reached destination 🏠"), 2000);
  });
}

bookTaxi()
  .then(result => {
    console.log(result);
    return reachDestination();
  })
  .then(result => console.log(result));
```

📝 **Analogy**: First you book a taxi. Once booked, it takes you to your destination.

---

## 📬 3. Sending an Email (Success and Failure)

```js
function sendEmail(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Email sent successfully 📧");
    } else {
      reject("Failed to send email ❌");
    }
  });
}

sendEmail(false)
  .then(message => console.log(message))
  .catch(error => console.error(error));
```

📝 **Analogy**: You try sending an email. If the internet is working, it's sent. Otherwise, it fails.

---

## 🎓 4. Exam Result with `Promise.all()`

```js
const checkMath = Promise.resolve("Math passed ✅");
const checkScience = Promise.resolve("Science passed ✅");
const checkEnglish = Promise.resolve("English passed ✅");

Promise.all([checkMath, checkScience, checkEnglish])
  .then(results => console.log("All results:", results));
```

📝 **Analogy**: You passed all subjects. You get the final result only if all are passed.

---

## 🏁 5. Race Between Two Buses (`Promise.race()`)

```js
const busA = new Promise(resolve => setTimeout(() => resolve("Bus A arrived 🚌"), 1000));
const busB = new Promise(resolve => setTimeout(() => resolve("Bus B arrived 🚌"), 2000));

Promise.race([busA, busB])
  .then(first => console.log(first));
```

📝 **Analogy**: Two buses coming to your stop — you take the one that arrives first.

---

## 🧪 6. Lab Test with `Promise.allSettled()`

```js
const bloodTest = Promise.resolve("Blood test done");
const xRay = Promise.reject("X-Ray failed");
const urineTest = Promise.resolve("Urine test done");

Promise.allSettled([bloodTest, xRay, urineTest])
  .then(results => console.log(results));
```

📝 **Analogy**: Lab tests are done — you get the result of each test, whether passed or failed.

---

## ✅ 7. Easy Async/Await Example

```js
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User fetched 👤"), 1000);
  });
}

async function showUser() {
  const user = await getUser();
  console.log(user);
}

showUser();
```

📝 **Analogy**: You requested user data. You wait for it, then display it.

---

This file helps build intuition with simple real-life examples. Happy Learning! 🚀
