# Document Object Model (DOM) - Basics to Advanced

## 1. Introduction to DOM
The **Document Object Model (DOM)** is a programming interface that allows JavaScript to interact with HTML and CSS.

### Key Concepts:
- **DOM Tree**: Represents the document as a tree structure.
- **Nodes & Elements**: Everything in an HTML document is a node (element, text, comment, etc.).
- **Manipulation**: JavaScript can dynamically modify content, structure, and styles.

---
## 2. Selecting Elements
We can select elements in multiple ways using JavaScript.

### Methods to Select Elements:
```js
// By ID
let element = document.getElementById("myId");

// By Class
let elements = document.getElementsByClassName("myClass");

// By Tag
let elements = document.getElementsByTagName("div");

// By CSS Selector (Single)
let element = document.querySelector(".myClass");

// By CSS Selector (Multiple)
let elements = document.querySelectorAll(".myClass");
```

---
## 3. Modifying Elements

### Changing Content:
```js
document.getElementById("demo").innerHTML = "Hello, World!";
document.querySelector("h1").textContent = "Updated Title";
```

### Changing Attributes:
```js
document.getElementById("image").src = "new-image.jpg";
document.querySelector("a").setAttribute("href", "https://example.com");
```

### Changing Styles:
```js
document.getElementById("box").style.backgroundColor = "blue";
document.querySelector("p").classList.add("highlight");
```

---
## 4. Event Handling
Events are user interactions like clicks, key presses, etc.

### Adding Events:
```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
```

### Common Events:
- `click`
- `mouseover`
- `keydown`
- `submit`

---
## 5. Traversing the DOM
Moving between parent, child, and sibling elements.

### Parent & Child Nodes:
```js
let parent = document.getElementById("child").parentNode;
let children = document.getElementById("parent").children;
```

### Sibling Navigation:
```js
let next = document.getElementById("item").nextElementSibling;
let prev = document.getElementById("item").previousElementSibling;
```

---
## 6. Advanced Methods & Properties
### Creating & Removing Elements:
```js
// Creating an element
theElement = document.createElement("div");
theElement.textContent = "New Element";
document.body.appendChild(theElement);

// Removing an element
document.body.removeChild(theElement);
```

### Cloning Elements:
```js
let clonedNode = document.getElementById("box").cloneNode(true);
document.body.appendChild(clonedNode);
```

### Performance Optimization:
- Use `documentFragment` for batch updates.
- Minimize direct DOM manipulations.
- Use `debounce` and `throttle` for frequent events.

---
## 7. Best Practices
- Avoid using `innerHTML` excessively.
- Prefer `querySelector` and `querySelectorAll` over older methods.
- Detach elements before modifying them in large-scale updates.
- Use event delegation for handling multiple events efficiently.

---
### Summary
This document covers everything from basic DOM manipulation to advanced techniques, including selection, modification, traversal, events, and performance tips.

Next Steps:
- Learn **MutationObserver** for detecting DOM changes.
- Explore **Shadow DOM** for encapsulated styling and structure.
- Understand **IntersectionObserver** for lazy loading.
