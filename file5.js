let sentance = "My name is Khan";
console.log("Sentance :" , sentance);

// let's take out a index given string
console.log(sentance[3]);
console.log("length of the string : ",sentance.length);

let lengthOfSentance = sentance.length;
console.log(sentance[lengthOfSentance-1]);

// let's get a middle string in given string
let middlePortion = parseInt((lengthOfSentance)/2);

console.log("Middle Charater in given string : ",sentance[middlePortion]);

let convertSentance = sentance.toLowerCase();
console.log(sentance);
console.log(convertSentance);

let convertUppercase = sentance.toUpperCase();
console.log(convertUppercase);

// Trim Function
// Removes all extra leading and 
let Name = "    Kurshed   ";
console.log(Name.trim());
console.log(Name);

// Slice Function

let Vakya = "Mera dost bhut pyara hai";
console.log(Vakya.slice(3,6));
console.log(Vakya.slice(3));



