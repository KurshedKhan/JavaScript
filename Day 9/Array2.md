# Array Best Practices in JavaScript

## 1. Creating an Array (Basic)
### Q: How do you create an array in JavaScript?
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr);
```

## 2. Accessing Elements (Basic)
### Q: How do you access an element at a specific index?
```javascript
let arr = [10, 20, 30, 40];
console.log(arr[2]); // Output: 30
```

## 3. Adding Elements (Push & Unshift)
### Q: How do you add elements to the start and end of an array?
```javascript
let arr = [1, 2, 3];
arr.push(4); // Adds to end
arr.unshift(0); // Adds to start
console.log(arr);
```

## 4. Removing Elements (Pop & Shift)
### Q: How do you remove elements from the start and end of an array?
```javascript
let arr = [1, 2, 3, 4];
arr.pop(); // Removes from end
arr.shift(); // Removes from start
console.log(arr);
```

## 5. Iterating Over an Array (forEach)
### Q: How do you iterate over an array in JavaScript?
```javascript
let arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num));
```

## 6. Mapping an Array
### Q: How do you create a new array by modifying each element of an existing array?
```javascript
let arr = [1, 2, 3, 4];
let squared = arr.map(num => num * num);
console.log(squared);
```

## 7. Filtering an Array
### Q: How do you filter elements in an array based on a condition?
```javascript
let arr = [1, 2, 3, 4, 5, 6];
let evens = arr.filter(num => num % 2 === 0);
console.log(evens);
```

## 8. Reducing an Array
### Q: How do you use the reduce method to sum all elements in an array?
```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);
```

## 9. Finding an Element (Find)
### Q: How do you find the first element in an array that matches a condition?
```javascript
let arr = [10, 20, 30, 40];
let found = arr.find(num => num > 25);
console.log(found);
```

## 10. Checking Condition (Some & Every)
### Q: How do you check if at least one or all elements meet a condition?
```javascript
let arr = [10, 20, 30, 40];
console.log(arr.some(num => num > 25)); // true
console.log(arr.every(num => num > 5)); // true
```

## 11. Sorting an Array
### Q: How do you sort an array in ascending order?
```javascript
let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(arr);
```

## 12. Reversing an Array
### Q: How do you reverse an array?
```javascript
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);
```

## 13. Flattening a Nested Array
### Q: How do you flatten a nested array?
```javascript
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArr = nestedArr.flat(2);
console.log(flatArr);
```

## 14. Removing Duplicates (Set)
### Q: How do you remove duplicate values from an array?
```javascript
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
```

## 15. Splicing an Array
### Q: How do you remove and replace elements using splice?
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99, 100);
console.log(arr);
```
