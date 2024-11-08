let alphabat = ["a","b","a","c","a","a","d"];
let storeElement = [];
let StoreElementItem = [];
let element = "a";
let indexing = alphabat.indexOf(element);

while(indexing !== -1){
    storeElement.push(indexing);
    StoreElementItem.push(alphabat[indexing]);
    indexing = alphabat.indexOf(element,indexing+1);
}
console.log(storeElement);
console.log(StoreElementItem);
