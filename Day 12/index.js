// let student = {
//   name : "mohan",
//   age : 21,
//   height : 5.7,
//   roll : 101,
//   isResult : true,
//   marks : [23,65,87,54,78]
// }

// console.log(student);

// console.log(student.name);
// console.log(student["roll"]);
// console.log(student.marks[student.marks.length -1])
// console.log(student.marks[1])

// console.log(student.age);
// student.age = 22;
// console.log(student.age);

// delete student.isResult;
// console.log(student);


// let car = {
//   model : 2014,
//   carName : "XUV500",
//   start : function(){
//     console.log("ghuuuu ghuuu");
//   }
// }

// console.log(car);
// car.start()

// let car = {
//   model : 2014,
//   carName : "XUV500",
//   start : function(){
//     console.log(`Car Model : ${this.model} , Car Name : ${this.carName} ,ghuuuu ghuuu`);
//   }
// }

// console.log(car);
// car.start();

// for(let key in car){
//   console.log(`${key} and ${car[key]}`);
// }

// const {model,carName} = car;

// console.log(model,carName);

// console.log(Object.keys(car));
// console.log(Object.values(car))

// let car1 = Object.assign({},car);
// car1.model = 2019;
// console.log(car1)

// console.log(car);

// let car1 = {...car};
// car1.model = 2019;
// console.log(car1)

// console.log(car);


// function Student(name,age,roll,ClassName){
//   this.name = name;
//   this.ClassName = ClassName;
//   this.age = age;
//   this.roll = roll;
//   this.greet = function(){
//     console.log("Hello, my name is " + this.name);
//   }
// }

// let stu = new Student("mohan",21,101,"12th");
// let stu1 = new Student("sohan",22,102,"12th");
// console.log(stu);


function Student(name,age,roll,ClassName){
  this.name = name;
  this.ClassName = ClassName;
  this.age = age;
  this.roll = roll;
}

Student.prototype.greet = function(){

  console.log("Hello, my name is " + this.name);

}

let stu = new Student("mohan",21,101,"12th");
let stu1 = new Student("sohan",22,102,"12th");
console.log(stu);
stu.greet();


console.log(stu.__proto__);
console.log(stu.__proto__.__proto__);
console.log(stu.__proto__.__proto__.__proto__);