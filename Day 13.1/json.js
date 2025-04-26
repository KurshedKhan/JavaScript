let jsonObj = '{"name" : "Kuldeep","age" : 21,"height" : 6.1,"bloodgroup" : "B+"}';

console.log(jsonObj)
console.log(jsonObj.name);

let jsObj = JSON.parse(jsonObj);
console.log(jsObj)
console.log(jsObj.name);