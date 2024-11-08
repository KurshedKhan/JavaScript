const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());

const sortedFruits =  fruits.toSorted();
console.log(sortedFruits);

const points = [40, 100, 1, 5, 25, 10];

console.log(points.toSorted());
console.log(points.sort(
    (a,b) => {
        return a - b;
    }
))
