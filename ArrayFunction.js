let program = ["JavaScript","Python","Java","C","C++"];

// New elements to add to the array.
// Appends new elements to the end of an array, 
//              and returns the new length of the array.
// method push
program.push("C#");


// Extracts the first element of the array and returns it:
// Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
program.shift();


// Add the element to the beginning of the array:
// Inserts new elements at the start of an array, 
//        and returns the new length of the array.
program.unshift("JavaScript","HTML");


// Extracts the last element of the array and returns it:
// Removes the last element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
program.pop();


// copy by reference
let language = program;

language.push("CSS");

// iterates over array elements
// for....of loop (direct element get karta hai)
for (let item of language){
    console.log(item)
}

console.log("=========================");


// normal for loop (condition se and position dono se get karta hai)
for(let i = 0 ; i < language.length  ; i++){
    console.log(language[i]);
}

console.log("===================================");
// for...in (Position get karta hai)
for(let item in language){
    console.log(language[item]);
}


// splice(first,second)
// first ==> The zero-based location in the array from which to start removing elements.
// second = The number of elements to remove.
console.log(language)
language.splice(2,4);


