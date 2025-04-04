# JavaScript addEventListener()

## 1. Introduction
The `addEventListener()` method allows you to add multiple event handlers to an element without overwriting existing event handlers.

## 2. Syntax
```javascript
Element.addEventListener(event, function, useCapture);
```
- **event**: The event type (e.g., 'click', 'mouseover', 'keydown').
- **function**: The function to execute when the event occurs.
- **useCapture** (optional): `true` for capturing phase, `false` (default) for bubbling phase.

## 3. Basic Example
```javascript
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});
```

## 4. Adding Multiple Event Listeners
```javascript
let button = document.getElementById("myBtn");
button.addEventListener("mouseover", () => console.log("Mouse over button"));
button.addEventListener("click", () => console.log("Button clicked"));
```

## 5. Removing Event Listeners
```javascript
function sayHello() {
    alert("Hello World!");
}
let btn = document.getElementById("myBtn");
btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);
```

## 6. Event Object
```javascript
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
```

## 7. Event Delegation
Using event delegation to handle multiple child elements efficiently:
```javascript
document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked: " + event.target.textContent);
    }
});
```

## 8. Passing Parameters
```javascript
function greet(name) {
    console.log("Hello, " + name);
}
document.getElementById("myBtn").addEventListener("click", function() {
    greet("Kurshed");
});
```

## 9. Using `once` Option
Runs the event listener only once:
```javascript
document.getElementById("myBtn").addEventListener("click", () => {
    console.log("Clicked once!");
}, { once: true });
```

## 10. Conclusion
- `addEventListener()` is powerful for handling multiple events.
- Event delegation helps in handling dynamic elements efficiently.
- Always remember to remove unnecessary event listeners to avoid memory leaks.
