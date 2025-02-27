
// let age = undefined;

// if (age == undefined){

//     console.log("you are valid");

// }

// console.log("conditional checked");


// program age checker

// let age = 21;
// let result; // global scope declaration
// if(age >= 18){
//   //let result; // local scope declaration
//   result = "you are valid this website.";
//   console.log(result);
// }
// else{
//   //let result;
//   result = "you are not valid this website bcz you are child.";
//   console.log(result)
// }


// Program age checker multiple condition

// let age = 12;
// let result;

// if(age > 18){
//   result = "you are valid this website.";
// }
// else if(age == 18){
//   result = "you are also valid for this year."
// }
// else{
//   result = "you are not valid this website bcz you are child.";
// }

// console.log(result);


// let temp = 35;

// if(temp > 25){
//   console.log("hot outside");
// }
// else{
//   console.log("cold outside");
// }

// let marks = 33;

// if(marks >= 60){
//   console.log("First Division.");
// }
// else if(marks >=40 && marks<= 59){
//   console.log("Second Division.")
// }
// else{
//   console.log("Third Division.")
// }

// let num = 23;
// if(num %2 != 0){
//   console.log(`${num} is odd.`);
// }
// else{
//   console.log(`${num} is even.`);
// }

// Ternary Operator in js
// let num = 24;
// let result = ((num % 2) != 0) ? ` ${num} is odd ` : `${num} is even`;
// console.log(result);

// let age = 25;
// if(age >= 18){
  
//   if(age >= 22){
//     console.log("You are eligible both condtion : daru, chakhana and vote")
//   }else{
//     console.log("you are eligible for vote.");
//   }
// }
// else{
//   console.log("you are not eligible for vote.")
// }

// Nested Ternary Operator
// let age = 25;
// let result = (age >= 18) ? (age >= 22) ? "You are eligible both condtion : daru, chakhana and vote ": "you are eligible for vote." : "you are not eligible for vote.";
// console.log(result);


 let day = "Fri";
 let result;
switch(day){
  case "Mon":
    result = "📅 Start of the week!";
    break;
  case "Fri" :
    result = "🎉 Weekend is near!";
    break;
  default:
    result = "📅 Just another day!"
}

console.log(result);