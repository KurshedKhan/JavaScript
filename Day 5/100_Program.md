# 100 JavaScript Programs Using if-else and switch

## 1️⃣ Check if a number is positive, negative, or zero

```javascript

let num = -5;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

```

## 2️⃣ Check if a person is eligible to vote

``` javascript

let age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

```

## 3️⃣ Find the largest of two numbers

``` javascript

let a = 10, b = 20;
if (a > b) {
    console.log("Largest:", a);
} else {
    console.log("Largest:", b);
}

```

## 4️⃣ Check for even or odd number

```javascript

let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

```

## 5️⃣ Assign grades based on marks

```javascript

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

```

## 6️⃣ Traffic Light System

```javascript

let light = "green";
switch (light) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

```
## 7️⃣ Check Leap Year

```javascript

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is not a Leap Year");
}

```
## 8️⃣ Detect Character Type (Vowel or Consonant)

``` javascript

let char = 'e';
switch (char) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
    case 'A': case 'E': case 'I': case 'O': case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

```

## 9️⃣ Determine the largest of three numbers

```javascript

let x = 5, y = 12, z = 8;
if (x > y && x > z) {
    console.log("Largest:", x);
} else if (y > z) {
    console.log("Largest:", y);
} else {
    console.log("Largest:", z);
}

```

## 🔟 Check for uppercase or lowercase letter

```javascript

let letter = 'G';
if (letter >= 'A' && letter <= 'Z') {
    console.log("Uppercase Letter");
} else if (letter >= 'a' && letter <= 'z') {
    console.log("Lowercase Letter");
} else {
    console.log("Not a letter");
}

```

## 1️⃣1️⃣ Check if a number is divisible by both 3 and 5

``` javascript

let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}

``` 

## 1️⃣2️⃣ Determine the day of the week

``` javascript

let day = 3;
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day");
}

```

## 1️⃣3️⃣ Find if a year is a century year

```javascript

let year = 2000;
if (year % 100 === 0) {
    console.log(year, "is a century year");
} else {
    console.log(year, "is not a century year");
}

```

## 1️⃣4️⃣ Check whether a character is an alphabet

```javascript

let char = '9';
if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    console.log("Alphabet");
} else {
    console.log("Not an alphabet");
}

```

## 1️⃣5️⃣ Find the smallest of three numbers

```javascript

let x = 5, y = 12, z = 8;
if (x < y && x < z) {
    console.log("Smallest:", x);
} else if (y < z) {
    console.log("Smallest:", y);
} else {
    console.log("Smallest:", z);
}

```

## 16️⃣ Check if a person is a teenager (13-19 years old)

``` javascript

let age = 15;
if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}

```

## 17️⃣ Check if a number is a multiple of 10

``` javascript

let num = 40;
if (num % 10 === 0) {
    console.log(num, "is a multiple of 10");
} else {
    console.log(num, "is not a multiple of 10");
}

```

## 18️⃣ Convert Celsius to Fahrenheit or Fahrenheit to Celsius

``` javascript

let temp = 100;
let unit = "C"; // Change to "F" for Fahrenheit

if (unit === "C") {
    console.log("Fahrenheit:", (temp * 9/5) + 32);
} else if (unit === "F") {
    console.log("Celsius:", (temp - 32) * 5/9);
} else {
    console.log("Invalid unit");
}

```

## 19️⃣ Check if a triangle is Equilateral, Isosceles, or Scalene

```javascript

let a = 5, b = 5, c = 5;

if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}

```

## 20️⃣ Find the absolute value of a number

```javascript

let num = -15;
if (num < 0) {
    console.log("Absolute value:", -num);
} else {
    console.log("Absolute value:", num);
}

```

## 21️⃣ Simple calculator using switch

```javascript

let num1 = 10, num2 = 5, operator = "+";

switch (operator) {
    case "+": console.log("Result:", num1 + num2); break;
    case "-": console.log("Result:", num1 - num2); break;
    case "*": console.log("Result:", num1 * num2); break;
    case "/": console.log("Result:", num1 / num2); break;
    default: console.log("Invalid operator");
}

``` 

## 22️⃣ Check if a number is a perfect square

```javascript

let num = 25;
let sqrt = Math.sqrt(num);

if (sqrt === Math.floor(sqrt)) {
    console.log(num, "is a perfect square");
} else {
    console.log(num, "is not a perfect square");
}

```

## 23️⃣ Determine the time of the day (Morning, Afternoon, Evening)

``` javascript

let hour = 14;

if (hour >= 5 && hour < 12) {
    console.log("Morning");
} else if (hour >= 12 && hour < 17) {
    console.log("Afternoon");
} else if (hour >= 17 && hour <= 21) {
    console.log("Evening");
} else {
    console.log("Night");
}

``` 
## 24️⃣ Check if a character is a digit

```javascript

let char = '5';
if (char >= '0' && char <= '9') {
    console.log("It is a digit");
} else {
    console.log("It is not a digit");
}

```

## 25️⃣ Determine the number of days in a month

```javascript

let month = 2;
let year = 2024;

if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("29 days");
    } else {
        console.log("28 days");
    }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
} else {
    console.log("31 days");
}

```

## 26️⃣ Convert lowercase letter to uppercase

``` javascript

let letter = 'b';
if (letter >= 'a' && letter <= 'z') {
    console.log("Uppercase:", letter.toUpperCase());
} else {
    console.log("Not a lowercase letter");
}

```

## 27️⃣ Check if a person is a senior citizen (age 60 or above)

``` javascript

let age = 65;
if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Not a Senior Citizen");
}

```

## 28️⃣ Check if a number is positive, negative, or zero using switch

```javascript

let num = 0;
switch (true) {
    case (num > 0): console.log("Positive"); break;
    case (num < 0): console.log("Negative"); break;
    default: console.log("Zero");
}

```

## 29️⃣ Convert a number to its word representation (0-5)

```javascript

let num = 3;
switch (num) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    default: console.log("Number out of range");
}

```

## 30️⃣ Determine if a number is prime (basic approach) //note: related to for loop topic// 

```javascript

let num = 7;
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num, "is a prime number");
} else {
    console.log(num, "is not a prime number");
}

```

## 31️⃣ Check if a number is within a given range (10-50)

```javascript

let num = 25;
if (num >= 10 && num <= 50) {
    console.log(num, "is within the range 10-50");
} else {
    console.log(num, "is out of range");
}

```

## 32️⃣ Check if a year is a millennium year (1000, 2000, etc.)

```javascript

let year = 2000;
if (year % 1000 === 0) {
    console.log(year, "is a millennium year");
} else {
    console.log(year, "is not a millennium year");
}

```
## 33️⃣ Find the greatest among four numbers

```javascript


let a = 10, b = 40, c = 30, d = 25;
if (a > b && a > c && a > d) {
    console.log("Greatest:", a);
} else if (b > c && b > d) {
    console.log("Greatest:", b);
} else if (c > d) {
    console.log("Greatest:", c);
} else {
    console.log("Greatest:", d);
}

```

## 34️⃣ Check if a number is a power of 2

```javascript


let num = 16;
if ((num & (num - 1)) === 0 && num > 0) {
    console.log(num, "is a power of 2");
} else {
    console.log(num, "is not a power of 2");
}

```

## 35️⃣ Determine the type of a polygon based on the number of sides

```javascript

let sides = 5;
switch (sides) {
    case 3: console.log("Triangle"); break;
    case 4: console.log("Quadrilateral"); break;
    case 5: console.log("Pentagon"); break;
    case 6: console.log("Hexagon"); break;
    default: console.log("Polygon with", sides, "sides");
}

```

## 36️⃣ Check if a person is eligible for a driving license (Age 18+)

```javascript

let age = 16;
if (age >= 18) {
    console.log("Eligible for a driving license");
} else {
    console.log("Not eligible for a driving license");
}

```

## 37️⃣ Find the last digit of a number

```javascript

let num = 1234;
console.log("Last digit:", num % 10);

```

## 38️⃣ Check if a number is a palindrome (e.g., 121, 1331)

```javascript

let num = 121;
let strNum = num.toString();
let reversed = strNum.split('').reverse().join('');

if (strNum === reversed) {
    console.log(num, "is a palindrome");
} else {
    console.log(num, "is not a palindrome");
}

```

## 39️⃣ Convert a weekday number (1-7) into a weekend or weekday

```javascript

let day = 6;
if (day === 6 || day === 7) {
    console.log("Weekend");
} else if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else {
    console.log("Invalid day number");
}

```

## 40️⃣ Determine if a character is a special character

```javascript

let char = '@';
if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
    console.log("Not a special character");
} else {
    console.log("Special character");
}

```

## 41️⃣ Find if a number is divisible by 6 or 9

```javascript

let num = 18;
if (num % 6 === 0 || num % 9 === 0) {
    console.log(num, "is divisible by 6 or 9");
} else {
    console.log(num, "is not divisible by 6 or 9");
}

```

## 42️⃣ Identify the shape based on the number of sides (Triangle, Square, etc.)

```javascript

let sides = 4;
switch (sides) {
    case 3: console.log("Triangle"); break;
    case 4: console.log("Square or Rectangle"); break;
    case 5: console.log("Pentagon"); break;
    case 6: console.log("Hexagon"); break;
    default: console.log("Unknown shape");
}

```

## 43️⃣ Determine if a store is open (9 AM to 9 PM)

```javascript

let hour = 21;
if (hour >= 9 && hour < 21) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

```

## 44️⃣ Find the middle number among three

```javascript

let a = 10, b = 25, c = 15;
if ((a > b && a < c) || (a > c && a < b)) {
    console.log("Middle number:", a);
} else if ((b > a && b < c) || (b > c && b < a)) {
    console.log("Middle number:", b);
} else {
    console.log("Middle number:", c);
}

```

## 45️⃣ Determine electricity bill based on units consumed

```javascript

let units = 250;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + (units - 100) * 3;
} else {
    bill = (100 * 2) + (100 * 3) + (units - 200) * 5;
}

console.log("Total Bill:", bill, "Rs");

```

## 46️⃣ Check if a number is greater than the sum of its digits

```javascript

let num = 15;
let sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

if (num > sum) {
    console.log(num, "is greater than the sum of its digits");
} else {
    console.log(num, "is not greater");
}

```

## 47️⃣ Find the season based on month number

```javascript

let month = 7;
switch (month) {
    case 12: case 1: case 2:
        console.log("Winter");
        break;
    case 3: case 4: case 5:
        console.log("Spring");
        break;
    case 6: case 7: case 8:
        console.log("Summer");
        break;
    case 9: case 10: case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}

```

## 48️⃣ Check if a given year is a leap century year

```javascript

let year = 2000;
if (year % 400 === 0) {
    console.log(year, "is a leap century year");
} else {
    console.log(year, "is not a leap century year");
}

```

## 49️⃣ Determine salary bonus based on performance rating

```javascript

let rating = "A";
switch (rating) {
    case "A": console.log("Bonus: 20% of salary"); break;
    case "B": console.log("Bonus: 10% of salary"); break;
    case "C": console.log("Bonus: 5% of salary"); break;
    default: console.log("No bonus");
}

```

## 50️⃣ Check if a password is strong (length >= 8, contains a number & special character)

```javascript

let password = "Pass@123";
if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

```

## 51️⃣ Check if a number is a three-digit number

```javascript

let num = 256;
if (num >= 100 && num <= 999) {
    console.log(num, "is a three-digit number");
} else {
    console.log(num, "is not a three-digit number");
}

```

## 52️⃣ Find the greatest of five numbers

```javascript

let a = 12, b = 45, c = 67, d = 23, e = 89;
let max = a;

if (b > max) max = b;
if (c > max) max = c;
if (d > max) max = d;
if (e > max) max = e;

console.log("Greatest number is:", max);

```

## 53️⃣ Check if a character is uppercase or lowercase

```javascript

let char = 'G';
if (char >= 'A' && char <= 'Z') {
    console.log("Uppercase letter");
} else if (char >= 'a' && char <= 'z') {
    console.log("Lowercase letter");
} else {
    console.log("Not a letter");
}

```

## 54️⃣ Convert day number (1-7) to day name

```javascript

let day = 3;
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day number");
}

```

## 55️⃣ Check if a number is even or odd using switch

```javascript

let num = 27;
switch (num % 2) {
    case 0: console.log("Even number"); break;
    case 1: console.log("Odd number"); break;
}

```

## 56️⃣ Determine if a date is valid (day, month, year)

```javascript

let day = 31, month = 4, year = 2023;

if (month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid date");
} else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    console.log("Invalid date");
} else if (month === 2 && day > (year % 4 === 0 ? 29 : 28)) {
    console.log("Invalid date");
} else {
    console.log("Valid date");
}

```

## 57️⃣ Find the second largest number among three

```javascript

let a = 23, b = 56, c = 12;
let secondLargest;

if ((a > b && a < c) || (a > c && a < b)) {
    secondLargest = a;
} else if ((b > a && b < c) || (b > c && b < a)) {
    secondLargest = b;
} else {
    secondLargest = c;
}

console.log("Second largest number is:", secondLargest);

```

## 58️⃣ Determine the quadrant of a point (x, y)

```javascript

let x = -5, y = 10;
if (x > 0 && y > 0) {
    console.log("Quadrant I");
} else if (x < 0 && y > 0) {
    console.log("Quadrant II");
} else if (x < 0 && y < 0) {
    console.log("Quadrant III");
} else if (x > 0 && y < 0) {
    console.log("Quadrant IV");
} else {
    console.log("On the axis");
}

```

## 59️⃣ Find the smallest of three numbers

```javascript

let a = 8, b = 3, c = 15;
let min = a < b ? (a < c ? a : c) : (b < c ? b : c);
console.log("Smallest number is:", min);

```

## 60️⃣ Check if a number is within 100 of 1000 or 2000

```javascript

let num = 950;
if (Math.abs(1000 - num) <= 100 || Math.abs(2000 - num) <= 100) {
    console.log(num, "is within 100 of 1000 or 2000");
} else {
    console.log(num, "is not within 100 of 1000 or 2000");
}

```

## 61️⃣ Check if three angles form a valid triangle

```javascript

let angle1 = 60, angle2 = 60, angle3 = 60;
if (angle1 + angle2 + angle3 === 180) {
    console.log("Valid triangle");
} else {
    console.log("Invalid triangle");
}

```

## 62️⃣ Find the greatest common divisor (GCD) of two numbers

```javascript

let a = 56, b = 98;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD is:", a);

```

## 63️⃣ Determine if a number is divisible by both 3 and 5

```javascript

let num = 30;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "is divisible by both 3 and 5");
} else {
    console.log(num, "is not divisible by both 3 and 5");
}

```

## 64️⃣ Check if a number is prime using switch

```javascript

let num = 29;
let isPrime = num > 1;
for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
switch (isPrime) {
    case true: console.log(num, "is a prime number"); break;
    case false: console.log(num, "is not a prime number");
}

```

## 65️⃣ Determine letter grade based on marks

```javascript

let marks = 78;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

```

## 66️⃣ Check if a number is an Armstrong number

```javascript

let num = 153;
let sum = 0, temp = num;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num, "is an Armstrong number");
} else {
    console.log(num, "is not an Armstrong number");
}

```

## 67️⃣ Find the sum of the first N natural numbers

```javascript

let N = 10;
let sum = (N * (N + 1)) / 2;
console.log("Sum of first", N, "natural numbers:", sum);

```

## 68️⃣ Determine if an email is valid

```javascript

let email = "test@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}

```

## 69️⃣ Find the factorial of a number

```javascript

let num = 5, fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log("Factorial of", num, "is", fact);

```

## 70️⃣ Find if a number is a palindrome (using if-else)

```javascript

let num = 1221;
let str = num.toString();
if (str === str.split('').reverse().join('')) {
    console.log(num, "is a palindrome");
} else {
    console.log(num, "is not a palindrome");
}

```

## 71️⃣ Find the absolute difference between a number and 50

```javascript

let num = 30;
let diff = Math.abs(num - 50);
console.log("Absolute difference:", diff);

```

## 72️⃣ Check if the sum of two numbers is 100

```javascript

let a = 40, b = 60;
if (a + b === 100) {
    console.log("The sum is exactly 100");
} else {
    console.log("The sum is not 100");
}

```

## 73️⃣ Convert a temperature from Celsius to Fahrenheit

```javascript

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius, "°C =", fahrenheit, "°F");

```

## 74️⃣ Check if a number is positive, negative, or zero

```javascript

let num = -15;
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

```

## 75️⃣ Check if a number is a perfect square

```javascript

let num = 49;
let sqrt = Math.sqrt(num);
if (sqrt === Math.floor(sqrt)) {
    console.log(num, "is a perfect square");
} else {
    console.log(num, "is not a perfect square");
}

```

## 76️⃣ Convert a given time from 24-hour format to 12-hour format

```javascript

let hour = 15;
let period = hour >= 12 ? "PM" : "AM";
let formattedHour = hour > 12 ? hour - 12 : hour;
console.log("Converted time:", formattedHour + period);

```

## 77️⃣ Check if a given year is a leap year (divisible by 400 or 4 but not 100)

```javascript

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a leap year");
} else {
    console.log(year, "is not a leap year");
}

```

## 78️⃣ Find the square of a number if it's even, otherwise find its cube

```javascript

let num = 5;
if (num % 2 === 0) {
    console.log("Square:", num ** 2);
} else {
    console.log("Cube:", num ** 3);
}

```

## 79️⃣ Find the sum of digits of a given number

```javascript

let num = 1234;
let sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
console.log("Sum of digits:", sum);

```

## 80️⃣ Check if a number is a multiple of 7

```javascript

let num = 21;
if (num % 7 === 0) {
    console.log(num, "is a multiple of 7");
} else {
    console.log(num, "is not a multiple of 7");
}

```

## 81️⃣ Determine if a number is greater than 100 or less than -100

```javascript

let num = -120;
if (num > 100 || num < -100) {
    console.log(num, "is outside the range of -100 to 100");
} else {
    console.log(num, "is within the range");
}

```

## 82️⃣ Convert a character to its ASCII value

```javascript

let char = 'A';
console.log("ASCII value of", char, "is", char.charCodeAt(0));

```

## 83️⃣ Find the percentage of marks and determine grade

```javascript

let totalMarks = 500, obtainedMarks = 420;
let percentage = (obtainedMarks / totalMarks) * 100;
if (percentage >= 90) console.log("Grade A");
else if (percentage >= 80) console.log("Grade B");
else if (percentage >= 70) console.log("Grade C");
else if (percentage >= 60) console.log("Grade D");
else console.log("Grade F");

```

## 84️⃣ Find the maximum among three numbers using a switch statement

```javascript

let a = 23, b = 45, c = 12;
let max = Math.max(a, b, c);
switch (max) {
    case a: console.log("Maximum:", a); break;
    case b: console.log("Maximum:", b); break;
    case c: console.log("Maximum:", c); break;
}

```

## 85️⃣ Determine the age category of a person

```javascript

let age = 35;
if (age < 13) console.log("Child");
else if (age < 20) console.log("Teenager");
else if (age < 60) console.log("Adult");
else console.log("Senior");

```

## 86️⃣ Find the cube root of a number

```javascript

let num = 27;
console.log("Cube root of", num, "is", Math.cbrt(num));

```

## 87️⃣ Check if a person is eligible for a senior citizen discount (Age 60+)

```javascript

let age = 65;
if (age >= 60) {
    console.log("Eligible for senior citizen discount");
} else {
    console.log("Not eligible");
}

```

## 88️⃣ Convert inches to centimeters

```javascript

let inches = 12;
let cm = inches * 2.54;
console.log(inches, "inches =", cm, "cm");

```

## 89️⃣ Check if a person can vote (Age 18+)

```javascript

let age = 17;
console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");

```

## 90️⃣ Determine if a number is a palindrome (without converting to string)

```javascript

let num = 121, temp = num, rev = 0;
while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(num === rev ? "Palindrome" : "Not a palindrome");

```

## 91️⃣ Convert meters to kilometers

```javascript

let meters = 5000;
console.log(meters, "meters =", meters / 1000, "kilometers");

```

## 92️⃣ Check if a person is eligible for a driver's license (Age 18+)

```javascript

let age = 16;
console.log(age >= 18 ? "Eligible for license" : "Not eligible");

```

## 93️⃣ Find the sum of the first N even numbers

```javascript

let N = 10;
console.log("Sum of first", N, "even numbers:", N * (N + 1));

```

## 94️⃣ Convert kilometers to miles

```javascript

let km = 10;
console.log(km, "km =", km * 0.621371, "miles");

```

## 95️⃣ Check if a number is prime using a switch

```javascript

let num = 19;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
switch (isPrime) {
    case true: console.log(num, "is a prime number"); break;
    case false: console.log(num, "is not a prime number");
}

```

## 96️⃣ Find the simple interest

```javascript

let P = 1000, R = 5, T = 2;
let SI = (P * R * T) / 100;
console.log("Simple Interest:", SI);

```

## 97️⃣ Convert kilograms to grams

```javascript

let kg = 5;
console.log(kg, "kg =", kg * 1000, "grams");

```

## 98️⃣ Check if a number is greater than its reverse

```javascript

let num = 321;
let reversed = parseInt(num.toString().split('').reverse().join(''));
console.log(num > reversed ? "Greater than reverse" : "Not greater");

```

## 99️⃣ Find the area of a rectangle

```javascript

let length = 10, width = 5;
console.log("Area of rectangle:", length * width);

```

## 100️⃣ Find the circumference of a circle

```javascript

let radius = 7;
console.log("Circumference:", 2 * Math.PI * radius);

```