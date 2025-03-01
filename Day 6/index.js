// alert("you can reload your page.");
// console.log("hello dear");

// confirm("are you sure this is auth page?");
// console.log("confirm");

// let age = parseInt(prompt("Enter you age"));
// console.log(typeof age);
// if (age >= 18){
//   console.log("you are valid or eligible for vote.");
// }
// else{
//   console.log("you are not valid or eligible for vote.");
// }


let name = "Suresh";
let name1 = 'sohan';

console.log(name1[name1.length-1])

let greeting = `My Name is ${name} and my friend name is ${name1}.`;
console.log(greeting);


let text = "Kuldeep";
console.log(text.length);
console.log(greeting.length);


let input ="            sdfasdfasdf  asdfasdfasd   ";

console.log(input);
console.log(input.toUpperCase())
console.log(input.toLowerCase())



console.log(input.length)

let triminput = input.trim();
console.log(triminput.length)
console.log(triminput);

let lang = "javaScript";
console.log(lang.charAt(2))

let text1 = "Hello JavaScript! Hello";
console.log(text1.indexOf("Hello",1))


console.log(text1.slice(6,10));


let progLang = "I love JavaScript";
console.log(progLang.replace("JavaScript","Python"))

let text2 = "apple,banana,orange";
console.log(text2.split(","));

let fullName = "Kuldeep-Ketan-Yashveer-Kumawat-101-123";
console.log(fullName.split("-"));

let email = "ketantesting@gmail.Com";
console.log(email.includes(".com"));

let text4 = "Hello, m bhi to hu na yaar mere ko bhi to dekho na ji World";
console.log(text4.startsWith("Hello") && text4.endsWith("World!")); // Output: true
