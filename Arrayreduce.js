const numbers = [50, 25, 45 , 31 , 175];


console.log(numbers.reduce(subtraction));
console.log(numbers.reduce(addition));


function subtraction(item1,item2){

    let subtract = item1 - item2 ;

    return subtract;

}
function addition(item1,item2){

    let addition = item1 + item2 ;

    return addition;

}
