# Star Pattern Programs in JavaScript

## 1. Square Star Pattern
```javascript
const n = 5;
let str = "";
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);
```
**Output:**
```
*****
*****
*****
*****
*****
```

## 2. Hollow Square Star Pattern
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    str += '\n';
}
console.log(str);
```
**Output:**
```
*****
*   *
*   *
*   *
*****
```

## 3. Left Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);
```
**Output:**
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

## 4. Hollow Left Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    str += '\n';
}
console.log(str);
```
**Output:**
```
* 
* * 
*   * 
*     * 
* * * * * 
```

## 5. Right Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j <= n - i) {
            str += '  ';
        } else {
            str += '* ';
        }
    }
    str += '\n';
}
console.log(str);
```
**Output:**
```
        * 
      * * 
    * * * 
  * * * * 
* * * * * 
```

## 6. Hollow Right Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += '  ';
    }
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    str += '\n';
}
console.log(str);
```
**Output:**
```
        * 
      * * 
    *   * 
  *     * 
* * * * * 
```

## 7. Inverted Left Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);
```
### Output:
```
* * * * * 
* * * * 
* * * 
* * 
* 
```

## 8. Hollow Inverted Left Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    str += row + '\n';
}
console.log(str);
```
### Output:
```
* * * * * 
*     * 
*   * 
* * 
* 
```

## 9. Inverted Right Triangle Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j <= i - 1) {
            str += '  ';
        } else {
            str += '* ';
        }
    }
    str += '\n';
}    
console.log(str);
```
### Output:
```
* * * * * 
  * * * * 
    * * * 
      * * 
        * 
```

## 10. Hollow Inverted Right Triangle Pattern
```javascript
const n = 5;
let str = '';
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += '  ';
    }
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    str += row + '\n';
}
console.log(str);
```
### Output:
```
* * * * * 
  *     * 
    *   * 
      * * 
        * 
```

## 11. Pyramid Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    str += row + '\n';
}
console.log(str);
```
### Output:
```
    *
   ***
  *****
 *******
*********
```

## 12. Inverted Pyramid Pattern Program
```js
const n = 5;
let str = '';
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    str += row + '\n';
}
console.log(str);
```
### Output:
```
*********
 *******
  *****
   ***
    *
```

## 13. Hollow Pyramid Pattern Program
```js
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
console.log(str);
```

### Output:
```
    *
   * *
  *   *
 *     *
*********
```

## 14. Inverted Hollow Pyramid Pattern Program
```js
const n = 5;
let str = '';
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
console.log(str);
```
### Output:
```
*********
 *     *
  *   *
   * *
    *
```

## 15. Half Diamond(Right Pascal) Pattern Program
```js
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    str += row + '\n';
}
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    str += row + '\n';
}
console.log(str);
```

### Output:
```
*
**
***
****
*****
****
***
**
*
```

## 16. Diamond Pattern Program
```js
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    str += row + '\n';
}
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    str += row + '\n';
}
console.log(str);
```

### Output:
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

## 17. Hourglass Pattern Program
```js
const n = 5;
let str = '';
// Upper Half
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= i && j <= 2 * n - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
// Lower Half
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= i && j <= 2 * n - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
console.log(str);
```

### Output:
```
*********
 ******* 
  *****  
   ***   
    *    
   ***   
  *****  
 ******* 
*********
```
## 18. Hollow Diamond Pattern Program
```javascript
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}
console.log(str);
```

### Output:
``` 
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
```