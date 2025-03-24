# JavaScript Prototypes & Inheritance - Basic to Advanced

## 1. Introduction to Prototypes
- JavaScript uses **prototypal inheritance**.
- Every object in JavaScript has an internal property called `[[Prototype]]`.
- The prototype is another object from which properties and methods can be inherited.

### Checking Prototype
```js
let obj = {};
console.log(Object.getPrototypeOf(obj));
```

---

## 2. Prototype Chain
- If a property is not found in an object, JavaScript looks up in its prototype.
```js
let parent = { greet: function() { console.log("Hello"); } };
let child = Object.create(parent);
child.greet(); // Inherits from parent
```

---

## 3. Creating Objects Using Constructors & Prototypes
### Constructor Function
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};
let p1 = new Person("John", 30);
p1.sayHello();
```

### Prototype Modification
```js
Person.prototype.country = "USA";
console.log(p1.country); // USA
```

---

## 4. Inheritance in JavaScript
### Classical Inheritance Using Prototypes
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};

let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak();
dog1.bark();
```

---

## 5. ES6 Class-Based Inheritance
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("Woof!");
  }
}

let dog2 = new Dog("Max", "Labrador");
dog2.speak();
dog2.bark();
```

---

## 6. Prototype vs. `__proto__`
- **Prototype (`prototype`)** is a property of functions.
- **`__proto__`** is an object reference pointing to the prototype.
```js
console.log(Dog.prototype); // Prototype Object
console.log(dog1.__proto__); // Same as Dog.prototype
```

---

## 7. Overriding Prototypes
```js
Dog.prototype.speak = function() {
  console.log("Barking loudly!");
};
dog1.speak(); // Modified behavior
```

---

## 8. `Object.create()` and Manual Prototyping
```js
let animal = {
  speak: function() {
    console.log("Animal speaks");
  }
};
let cat = Object.create(animal);
cat.speak();
```

---

## Conclusion
- Prototypes allow sharing properties & methods.
- Inheritance can be done using constructor functions or ES6 classes.
- Understanding the prototype chain is crucial for JavaScript mastery.
