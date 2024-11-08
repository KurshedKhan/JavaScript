let arr = ["Sachin","Arbaj","Mohan","Rohan"];
let salary = [90000,100000,25000,12000];

arr.forEach((element)=>{
    console.log("Student Name : ",element);
});

salary.forEach((e)=>{
    console.log("Salary increment : ",e+10000);
})


let arrCopy = [];

arr.forEach((items)=>{
    arrCopy.push(items);
});


console.log(arrCopy);

arr.forEach((element,index) => {

    console.log(`a[${index}] = ${element}`);

});