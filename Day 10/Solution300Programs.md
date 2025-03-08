## JavaScript Solutions - Best Practices

### **1. Check if a number is positive, negative, or zero**
```javascript
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);
```

### **2. Find the largest of three numbers**
```javascript
function findLargest(a, b, c) {
    console.log(Math.max(a, b, c));
}

findLargest(10, 20, 5);
```

### **3. Check if a year is a leap year**
```javascript
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
```

### **4. Grade Calculator**
```javascript
function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

console.log(getGrade(85)); // B
```

### **5. Check if a number is even or odd**
```javascript
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

checkEvenOdd(7);
checkEvenOdd(10);
```

---

## **Looping Challenges**

### **6. Print numbers from 1 to 100**
```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

### **7. Print the multiplication table of a given number**
```javascript
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

multiplicationTable(5);
```

### **8. Calculate the sum of first N natural numbers**
```javascript
function sumNaturalNumbers(n) {
    console.log((n * (n + 1)) / 2);
}

sumNaturalNumbers(10); // 55
```

### **9. Reverse a number using a loop**
```javascript
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    console.log(rev);
}

reverseNumber(12345);
```

### **10. Find factorial of a number**
```javascript
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);
}

factorial(5); // 120
```

---

## **Additional Challenges**

### **11. Check if a number is prime**
```javascript
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
```

### **12. Find the maximum of three numbers**
```javascript
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
```

### **13. Calculate the power of a number**
```javascript
function power(base, exponent) {
    return Math.pow(base, exponent);
}
```

### **14. Reverse a string**
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

### **15. Check if a string is a palindrome**
```javascript
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
```

---

## **Array Challenges**

### **16. Find the largest number in an array**
```javascript
function largestInArray(arr) {
    return Math.max(...arr);
}
```

### **17. Find the smallest number in an array**
```javascript
function smallestInArray(arr) {
    return Math.min(...arr);
}
```

### **18. Reverse an array**
```javascript
function reverseArray(arr) {
    return arr.reverse();
}
```

### **19. Find the sum of all elements in an array**
```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
```

### **20. Remove duplicate elements from an array**
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
```

### **21. Convert Celsius to Fahrenheit**
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
```

---
### **21. Count vowels in a string**
```javascript
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
```

### **22. Find the largest number in an array**
```javascript
function largestInArray(arr) {
    return Math.max(...arr);
}
```

### **23. Find the smallest number in an array**
```javascript
function smallestInArray(arr) {
    return Math.min(...arr);
}
```

### **24. Reverse an array**
```javascript
function reverseArray(arr) {
    return arr.reverse();
}
```

### **25. Find the sum of all elements in an array**
```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
```

### **26. Remove duplicate elements from an array**
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
```

### **27. Find the index of an element in an array**
```javascript
function findIndex(arr, element) {
    return arr.indexOf(element);
}
```

### **28. Sort an array in ascending order**
```javascript
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}
```

### **29. Sort an array in descending order**
```javascript
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}
```

### **30. Merge two arrays into one**
```javascript
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
```
### **31. Check if a number is an Armstrong number**
```javascript
function isArmstrong(num) {
    let sum = 0, temp = num, digits = num.toString().length;
    while (temp > 0) {
        sum += Math.pow(temp % 10, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
```

### **32. Calculate the GCD of two numbers**
```javascript
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
```

### **33. Convert a number to binary**
```javascript
function toBinary(num) {
    return num.toString(2);
}
```

### **34. Find the LCM of two numbers**
```javascript
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
```

### **35. Check if two strings are anagrams**
```javascript
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
```

### **36. Count the occurrences of a character in a string**
```javascript
function charCount(str, char) {
    return str.split(char).length - 1;
}
```

### **37. Capitalize the first letter of each word in a string**
```javascript
function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
```

### **38. Remove all spaces from a string**
```javascript
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}
```

### **39. Find the second largest number in an array**
```javascript
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}
```

### **40. Count the number of words in a string**
```javascript
function wordCount(str) {
    return str.split(/\s+/).filter(Boolean).length;
}
```

### **41. Find the median of an array**
```javascript
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
```

### **42. Find the mode of an array**
```javascript
function findMode(arr) {
    let freq = {}, maxFreq = 0, mode = [];
    arr.forEach(num => freq[num] = (freq[num] || 0) + 1);
    maxFreq = Math.max(...Object.values(freq));
    for (let key in freq) {
        if (freq[key] === maxFreq) mode.push(Number(key));
    }
    return mode;
}
```

### **43. Rotate an array by K positions**
```javascript
function rotateArray(arr, k) {
    k %= arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
```

### **44. Find the intersection of two arrays**
```javascript
function arrayIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}
```

### **45. Find the union of two arrays**
```javascript
function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
```

### **46. Find the missing number in an array**
```javascript
function findMissingNumber(arr, n) {
    let sum = (n * (n + 1)) / 2;
    return sum - arr.reduce((acc, num) => acc + num, 0);
}
```

### **47. Find the first non-repeating element in an array**
```javascript
function firstNonRepeating(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num)) || null;
}
```

### **48. Implement a stack using an array**
```javascript
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}
```

### **49. Implement a queue using an array**
```javascript
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
}
```

### **50. Find the longest consecutive sequence in an array**
```javascript
function longestConsecutive(arr) {
    let set = new Set(arr), maxLen = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let len = 1;
            while (set.has(num + len)) len++;
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
}
```

### **51. Find the frequency of each element in an array**
```javascript
function elementFrequency(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}
```

### **52. Find all pairs in an array that sum to a specific value**
```javascript
function findPairs(arr, target) {
    let pairs = [];
    let set = new Set();
    arr.forEach(num => {
        if (set.has(target - num)) pairs.push([num, target - num]);
        set.add(num);
    });
    return pairs;
}
```

### **53. Move all zeros to the end of an array**
```javascript
function moveZerosToEnd(arr) {
    return arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
}
```

### **54. Find the duplicate elements in an array**
```javascript
function findDuplicates(arr) {
    let seen = new Set(), duplicates = new Set();
    arr.forEach(num => seen.has(num) ? duplicates.add(num) : seen.add(num));
    return [...duplicates];
}
```

### **55. Remove all occurrences of a given element from an array**
```javascript
function removeElement(arr, target) {
    return arr.filter(num => num !== target);
}
```

### **56. Find the Kth largest element in an array**
```javascript
function findKthLargest(arr, k) {
    return arr.sort((a, b) => b - a)[k - 1];
}
```

### **57. Find the Kth smallest element in an array**
```javascript
function findKthSmallest(arr, k) {
    return arr.sort((a, b) => a - b)[k - 1];
}
```

### **58. Reverse words in a sentence**
```javascript
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
```

### **59. Find the maximum product of two numbers in an array**
```javascript
function maxProduct(arr) {
    arr.sort((a, b) => b - a);
    return arr[0] * arr[1];
}
```

### **60. Find the common elements between three sorted arrays**
```javascript
function commonElements(arr1, arr2, arr3) {
    return arr1.filter(num => arr2.includes(num) && arr3.includes(num));
}
```

### **61. Implement a function to merge overlapping intervals**
```javascript
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}
```

### **62. Find the element that appears only once in an array**
```javascript
function findUnique(arr) {
    return arr.reduce((acc, num) => acc ^ num, 0);
}
```

### **63. Find the majority element in an array**
```javascript
function majorityElement(arr) {
    let count = 0, candidate = null;
    for (let num of arr) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
```

### **64. Implement a function to check if an array is sorted**
```javascript
function isSorted(arr) {
    return arr.every((num, i) => i === 0 || arr[i - 1] <= num);
}
```

### **65. Implement binary search on a sorted array**
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### **66. Find the longest increasing subsequence in an array**
```javascript
function longestIncreasingSubsequence(arr) {
    let dp = new Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return Math.max(...dp);
}
```

### **67. Implement a function to rotate a matrix 90 degrees clockwise**
```javascript
function rotateMatrix(matrix) {
    let n = matrix.length;
    let rotated = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
}
```

### **68. Find the smallest missing positive integer in an array**
```javascript
function firstMissingPositive(arr) {
    let set = new Set(arr);
    let i = 1;
    while (set.has(i)) i++;
    return i;
}
```

### **69. Implement a function to generate all subsets of a given set**
```javascript
function subsets(arr) {
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
}
```

### **70. Find the longest common prefix among an array of strings**
```javascript
function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    return strs.reduce((prev, next) => prev.slice(0, next.length).split('').filter((c, i) => c === next[i]).join(''));
}
```
