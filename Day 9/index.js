// let names = ["mohan","sohan","rohan","ram","Shayam"];
// console.log(names);

// let names1 = new Array(2);
// console.log(names1);

// // console.log(names[0]);

// let names2 = []; /// empty array
// console.log(names2);

// let names3 = Array.of("mohan","sohan","rinku");
// console.log(names3);

// console.log(Array.of("mohan","sohan"))


// console.log(names[0]) // starting element
// console.log(names.length); // len of array 

// console.log(names[4]); // badddddd
// console.log(names[names.length-1]); //gooooddddd

// names[3] = "Sita";
// names[names.length-1] = "Riya";
// console.log(names)

// names[0] = true;
// console.log(names);

// names2[0] = "Rinku";
// console.log(names2);

// names1[2] = "suresh";
// console.log(names1);


// let names = ["mohan","sohan","rohan","ram","Shayam"];
// names.push("Naresh");
// console.log(names);
// console.log(names.length)
// console.log(names.push("suresh","Ramesh","Naresh"));
// console.log(names)
// console.log(names.pop())
// console.log(names);

// let homelist = [];
// console.log(homelist.pop());
// console.log(homelist);

// names.unshift("komal");
// console.log(names);
// console.log(names.unshift());

// names.shift();
// console.log(names);

// let numbers1 = [1,2,3,4,5,6];
// console.log(numbers)

// let first = [...numbers];

// console.log(first)


// let [kuldeep,second,...rest] = numbers;
// console.log(kuldeep) // output : 1
// console.log(second) // output : 2
// console.log(rest) // output : 3,4,5,6

// let [first,second,third,...rest] = numbers;
// console.log(rest);
// console.log(rest.push(" "));
// console.log(rest)


// let numbers1 = [1,2,3,4,5,6];
// let numbers2 = [2,3,4,5,6,8,...numbers1,...numbers1];
// console.log(numbers2)


// for(let i = (numbers2.length-1) ;  i >= 0 ; i--){
//   if(i === (numbers2.length-4)){
//     break;
//   }
//   console.log(numbers2[i]);
// }

// let colors = ["red", "blue", "green", "yellow", "purple"];

// let newColors = colors.slice(2,4); /// output : ["green","yellow"]
// console.log(newColors)

// let copyColors = colors.slice(3,4);
// console.log(copyColors)

//  let colors = ["red", "blue", "green", "yellow", "purple"];

//  colors.forEach(
//   (value,index,array) => {
//     console.log(value,index,array)
//   }
//  )


// let marks = [23,65,76,89,98];

// let total = 0 ;

// marks.forEach((ele)=>{
//   total += ele;
// });

// console.log(total);


// let salary = [20000,15000,5000,30000];
// let incSlaray = [];

// salary.forEach((value,index,array) => {

//   let ins = value + 5000;
//   incSlaray.push(ins);

// })
// console.log(salary)
// console.log(incSlaray)


// let colors = ["red", "blue", "green", "yellow", "purple"];

// colors.forEach(function(value,index,array){
//   if(value === "yellow"){
//     console.log(`Color Name in list : ${value} = Yellow`);
//   }
//   else{
//     console.log(`Color Name in list : ${value}`)
//   }
// })


// let oddEven = [10,20,30,12,34,33,35,78];
// let odd = [];
// let even = [];
// oddEven.forEach(function(value){
//   if(value % 2 === 0){
//     even.push(value);
//   }
//   else{
//     odd.push(value);
//   }
// })


// let oddEven = [10,20,30,12,34,33,35,78];
// let odd = [];
// let even = [];
// oddEven.forEach((value)=>{
//   if(value % 2 === 0){
//     even.push(value);
//   }
//   else{
//     odd.push(value);
//   }
// })
// console.log("Common Array ",oddEven);
// console.log("Odd : ",odd);
// console.log("Even : ",even);


// let oddEven = [10,20,30,12,34,33,35,78];

// let multiArr = oddEven.map((value) => { 
//   return  value * 2
// });

// console.log(multiArr);

// let oddEven = [10,20,30,12,34,33,35,78];

// let multiArr = oddEven.map((value) => { 
//   if(value % 2 != 0){
//     return false;
//   }
//   else{
//     return true;
//   }
// });

// console.log(multiArr);

// let colors = ["red", "blue", "green", "yellow", "purple"];

// let colorsCap = colors.map((value)=>{
//   return value.toUpperCase();
// })

// console.log(colorsCap)


// let oddEven = [10,20,30,12,34,33,35,78];

// let even = oddEven.filter((value)=>{
//   if(value % 2 == 0 ){
//     return value;
//   }
// })

// console.log(even);

// let odd = oddEven.filter((value)=>{
//   if(value % 2 != 0 ){
//     return value;
//   }
// })

// console.log(odd);


// const mixedArray = [0, "hello", false, 42, "", null, "JavaScript",true ,1,false ];

// let arr = mixedArray.filter((value)=>{
//   if(value === false ||){

//   });
// console.log(arr);


// let numbers = [200,-400,100,49,-300,58];

// let result = numbers.reduce(
//   (acc,CurrentValue)=>{
//     return acc + CurrentValue;
//   },100
// )

// console.log(result);


// let arr = [33,3,4,55];

//   let startingValue = arr[0]; /// output : 33

//   for(let i = 1 ; i < arr.length ; i++){
//         // 33           // 55
//     if(startingValue < arr[i]){

//       startingValue = arr[i]

//     }
//   }

// console.log(startingValue);


// let arr = [33,3,4,55];

// let max = arr.reduce((acc,currentValue)=>{

//   if(acc < currentValue){

//    acc = currentValue;

// }
// return acc;

// },arr[0]);

// console.log(max);



let names = ["mohan","rohan","sohan","rohan","ram","Shayam"];
// console.log(Array.isArray(names));

// console.log( typeof names.toString() );


// let numbers = [1,3,5,7,12,4,5,2,3,4,5,45,43,3];

// console.log(numbers.findLastIndex((ele)=>{
//   if(ele%2 != 0){
//     return ele;
//   }
// }));


console.log(names.lastIndexOf("rohan"));  
console.log(names.indexOf("rohan"));  
console.log(names.includes("rohan"));  
console.log(names.includes("roha"));  