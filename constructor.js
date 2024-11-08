
class Person {
    constructor(name, age, height, bloodgroup) {
        this.Name = name;
        this.Age = age;
        this.Height = height;
        this.Bloodgroup = bloodgroup;
    }

    display (){
        console.log(this.Name);
    }
}


let MyStudent = new Person("Arbaj",24,5.8, "AB+");
let MySecondStudent = new Person("Sachin",20,5.7,"B+");
let MyThirdStudent = new Person("Gaurav",22,5.8,"A+");

console.log(MyStudent.Name,MyStudent.Age);
console.log(MySecondStudent.Name);
console.log(MyThirdStudent.Name);
