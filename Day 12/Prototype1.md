# JavaScript Prototype & Inheritance (Basic to Advanced) - English & Hindi

## **1. What is Prototype?**
**English:**
In JavaScript, **Prototype** is a mechanism that allows objects to inherit properties and methods from another object.

**हिन्दी:**
JavaScript में **प्रोटोटाइप (Prototype)** एक मैकेनिज़्म है जिससे एक ऑब्जेक्ट दूसरे ऑब्जेक्ट के गुण (properties) और मेथड (methods) को इनहेरिट कर सकता है।

---

## **2. Basic Example Without Prototype**
```js
function Student(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let student1 = new Student("Amit");
let student2 = new Student("Rohit");

student1.greet(); // Hello, my name is Amit
student2.greet(); // Hello, my name is Rohit
```
👉 **Problem:** Here, each object gets its own `greet` method, consuming more memory.

**समस्या:** हर ऑब्जेक्ट के लिए अलग-अलग `greet` मेथड बन रहा है, जिससे मेमोरी ज्यादा खपत होगी।

---

## **3. Using Prototype to Optimize Memory**
```js
function Student(name) {
    this.name = name;
}

// Adding method to prototype
Student.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

let student1 = new Student("Amit");
let student2 = new Student("Rohit");

student1.greet(); // Hello, my name is Amit
student2.greet(); // Hello, my name is Rohit
```
👉 **Now, `greet` is shared among all objects, saving memory.**

**अब `greet` मेथड सभी ऑब्जेक्ट्स के लिए एक ही रहेगा, जिससे मेमोरी बचेगी।**

---

## **4. Prototype Chain**
```js
console.log(student1.__proto__); // Student.prototype
console.log(student1.__proto__.__proto__); // Object.prototype
console.log(student1.__proto__.__proto__.__proto__); // null
```
👉 **If a property is not found in an object, JavaScript looks in its prototype (Prototype Chain).**

**अगर कोई प्रॉपर्टी नहीं मिलती, तो JavaScript प्रोटोटाइप चेन में देखती है।**

---

## **5. Inheritance with Prototype**
```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
};

function Dog(name, breed) {
    Animal.call(this, name); // Call Parent Constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + " barks");
};

let dog1 = new Dog("Tommy", "Labrador");
dog1.speak(); // Tommy makes a sound
dog1.bark();  // Tommy barks
```
👉 **Dog inherited `speak` from Animal.**

**Dog ने `speak` को Animal से इनहेरिट कर लिया।**

---

## **6. ES6 Class-Based Inheritance**
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call Parent Constructor
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}

let dog2 = new Dog("Rocky", "German Shepherd");
dog2.speak(); // Rocky makes a sound
dog2.bark();  // Rocky barks
```
👉 **Using `extends` simplifies inheritance.**

**`extends` का उपयोग करने से इनहेरिटेंस आसान हो जाता है।**

---

## **7. Prototype vs `__proto__`**
| Feature | `prototype` | `__proto__` |
|---------|------------|-------------|
| What is it? | A property of functions for inheritance. | A reference to an object's prototype. |
| Who has it? | Only functions have it. | Every object has it. |
| Usage | `Student.prototype.method = function() {}` | `obj.__proto__` to check prototype. |

### **Example**
```js
console.log(Dog.prototype);   // Shows Dog's Prototype
console.log(dog2.__proto__); // Points to Dog's Parent (Animal)
```

---

## **8. Overriding Prototype Methods**
```js
Dog.prototype.speak = function() {
    console.log(this.name + " says Woof Woof!");
};

dog2.speak(); // Rocky says Woof Woof!
```
👉 **Child can override parent methods.**

**Child क्लास Parent के किसी मेथड को बदल सकता है।**

---

## **9. Object.create() for Inheritance**
```js
let person = {
    greet: function() {
        console.log("Hello!");
    }
};

let employee = Object.create(person);
employee.work = function() {
    console.log("Working...");
};

employee.greet(); // Hello!  (Inherited from person)
employee.work();  // Working...  (Own method)
```
👉 **`Object.create()` allows easy inheritance without using `class`.**

**`Object.create()` से आसानी से इनहेरिटेंस किया जा सकता है।**

---

## **Conclusion**
✅ **Prototype helps save memory by sharing methods.**

✅ **Prototype Chain allows JavaScript to find missing properties.**

✅ **Inheritance lets child objects inherit parent properties.**

✅ **ES6 `class` makes inheritance easier.**

✅ **`Object.create()` provides a simple way for inheritance.**

---

**अगर आपको कोई पॉइंट और समझना हो तो मुझे बताइए! 🚀**
