# JavaScript Objects - Basic to Advanced

## 1. Introduction to Objects
- Objects in JavaScript are collections of key-value pairs.
- They are used to store structured data and functions.

### Syntax:
```js
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

## 2. Accessing Object Properties
- **Dot Notation**: `person.name`
- **Bracket Notation**: `person["age"]`

## 3. Modifying Object Properties
```js
person.age = 31; // Updating property
person.city = "New York"; // Adding new property
```

## 4. Deleting Properties
```js
delete person.city;
```

## 5. Object Methods
- Objects can have functions as properties.
```js
let car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};
car.start();
```

## 6. `this` Keyword
- Refers to the object it belongs to.
```js
let user = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
user.greet();
```

## 7. Object Iteration
```js
for (let key in person) {
  console.log(key, person[key]);
}
```

## 8. Object Destructuring
```js
const { name, age } = person;
console.log(name, age);
```

## 9. Object Methods - `Object.keys()`, `Object.values()`, `Object.entries()`
```js
console.log(Object.keys(person)); // ['name', 'age', 'isStudent']
console.log(Object.values(person)); // ['John', 30, false]
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30], ['isStudent', false]]
```

## 10. Object Cloning
### Shallow Copy
```js
let newPerson = Object.assign({}, person);
```
### Spread Operator
```js
let newPerson2 = { ...person };
```

## 11. Object.freeze() & Object.seal()
```js
Object.freeze(person); // Prevents modifications
Object.seal(person); // Allows modification but prevents adding/removing properties
```

## 12. Constructor Functions
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("John", 30);
```

## 13. ES6 Classes
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
let dog = new Animal("Dog");
dog.speak();
```

## 14. Prototypes & Inheritance
```js
function Human(name) {
  this.name = name;
}
Human.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};
let h1 = new Human("Alice");
h1.sayHello();
```

## Conclusion
JavaScript objects are the foundation of most programming tasks. Understanding them deeply helps in mastering JavaScript.
