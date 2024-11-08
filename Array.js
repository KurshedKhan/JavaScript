let student = [101,"Mohan",21,5.6,"12th"];

for(let i = 0 ; i< student.length ; i++){
    console.log("my item : ",student[i]);
}

let fruits = []; // empty array in js
console.log(fruits.length);
// push method in js
fruits.push("Banana","Apple");
console.log(fruits.length);

student.push("Hindi","English","Math");
console.log(student);

let number1 = [1,2,3,4,5,6];
let number2 = [7,8,9,10];

// spread operator in push method js
number1.push(...number2);

console.log(Object.keys(student));
console.log(Object.values(student));

console.log(student);
// student.length = 5;
// console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants);
let del = plants.pop();
console.log(del);
console.log(plants);
console.log(plants.length);
plants.push(del);
console.log(plants);
plants.shift();
console.log(plants);
plants.push("broccoli");
console.log(plants);
// console.log("======================");
// while(typeof(i = plants.shift()) !== "undefined"){
//     console.log(i);
// }
// console.log(plants.length);
// console.log(plants);

// unshift method in js
plants.unshift("potato","pea");
console.log(plants);
console.log(plants.length);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];

console.log(array1);
console.log(array2);

let array4 = array1 .concat(array2).concat(array3);
console.log(array4);

console.log("=======================");


const arr = ['a', 'b', 'c', 'd'];
console.log(arr);
console.log(arr.length);
let copyWith = arr.copyWithin(1,2,4);
console.log(copyWith);
console.log(copyWith.length);

const beasts = ['ant', 'bison', 'camel', 'duck', 'camel' ,'bison','camel'];

console.log(beasts.lastIndexOf("camel",-2));

