let person = {

    Name : "Gaurav Choudhary",
    Age : 21,
    Height : 5.7,
    Bloodgroup : "AB+",
    Display : function(){
        return (this.Name + " " + this.Age + " "  +  this.Bloodgroup + " " + this.Height).toUpperCase() ; 
    }
};

// accessing through key in object
console.log(person["Name"]);
console.log(person["Age"]);
console.log(person);
console.log(person.Name);
console.log("Name of Person : " , person.Name,"Age of Person : " ,person.Age,person.Height,person.Bloodgroup);
console.log(person.Display());

console.log('==========================================');
let student = person;
student.Age = 20;

console.log(student.Age)
console.log(student.Display());

let height = student.Height;
console.log(height);
let Height = student["Height"];
console.log(Height);
student.roll = 101;
console.log(student);
console.log(student.roll);

myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}

console.log(myObj.myCars.car2);

person.print = function(){
    return this.Name + " " + this.Age + " "  +  this.Bloodgroup + " " + this.Height ; 
}