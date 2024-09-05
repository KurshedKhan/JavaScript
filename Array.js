let student = [101,"Mohan",21,5.6,"12th"];

for(let i = 0 ; i< student.length ; i++){
    console.log("my item : ",student[i]);
}

let fruits = []; // empty array in js
console.log(fruits.length);
fruits.push("Banana","Apple");
console.log(fruits.length);

student.push("Hindi","English","Math");
console.log(student);

let number1 = [1,2,3,4,5,6];
let number2 = [7,8,9,10];

 number1.push(...number2);

console.log(Object.keys(student));