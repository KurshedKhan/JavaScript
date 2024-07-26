let Name = "Gaurav Choudhary";

for(let item of Name){
    console.log(item);
}

let Name1 = Name.toLowerCase();
console.log(Name1)
let Name2 = Name.toUpperCase();
console.log(Name2);


// let sentence = "This is my book";
// console.log(sentence.indexOf('book'));

let sentence = "Gaurav and Satveer is very good boy because they attend all classes.";

let position = 0 ;
let target = 'boy';

while(true){
    let foundtext = sentence.indexOf(target,position);
    if (foundtext == -1){
        break;
    }
    alert(`Text is founded : ${foundtext}`)
    position = foundtext +  1;
}

alert(target.includes('boy'))