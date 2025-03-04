// function declaration in js

// function display(){

//   console.log("My function is 1 running.");
//   let age = prompt("Enter you age : ");
//   if(age >= 18){
//     console.log("you are valid");
//   }
//   else{
//     console.log("you are not valid");
//   }

// }

// display() // function called
// display() // function called
// display() // function called
// display() // function called
// display() // function called
// display() // function called


// function add(para1,para2){

//   console.log("Addition : ", para1 + para2);

// }

// function sub(para1,para2){

//   console.log("Subtraction : ",para2-para1);
// }

// // add(10,20);
// // add(50,20,789);
// // add(80,20);
// // add(10000,25670,7865);

// add(10,20);
// sub(20,30);
// sub(345343,444444);

// function ageChecker(paraAge1){

//   let age = paraAge1;// local variable

//   if(age >= 18){
//     console.log(`your age is ${age} so you are valid.`);
//   }
//   else{
//     console.log(`your age is ${age} so you are not valid`);
//   }

// }
// let argAge = prompt("Enter your age : ");
// ageChecker(argAge);

// function with return keyword
// function add(num1,num2){

//   let total ;
//   total = num1 + num2;
//   return total;
// }

// let n1 = 10;
// let n2 = 20;
// console.log(add(n1,n2))
// let result = add(n1,n2);
// console.log(result);


// function expression
// const display = function(num1,num2){

//   let total = num1 + num2;

//   return total;

// }

// let result = display(10,30);
// console.log(result);


// function addition(num1=10,num2=20){

//   let total = num1 + num2;

//   return total;

// }

// let result = addition(30,50);
// console.log(result);


// const entry = function(age=18,name="guest"){

//   if(age >= 18){
//     console.log("you can entered in this website.",name)
//   }
//   else{
//     console.log("you can not entered in this webstie.",name)
//   }

// }

// entry(22);


// // Arrow Function
// const addition = (num1=10,num2=20)=>{

//   let total = num1 + num2;

//   return total;

// }

// let result = addition(30,50);
// console.log(result);


let total = (a,b) => a + b;
console.log(total(10,20))

// function total(a,b){
//   total = a + b;
//   console.log(total)
// }
// total(10,20)