# JavaScript Events - Basic to Advanced

## 1. Introduction
Events in JavaScript are actions or occurrences that happen in the browser, such as user interactions or system-generated events.

## 2. Types of Events
### a) Mouse Events
- `click` - Fired when an element is clicked.
- `dblclick` - Fired when an element is double-clicked.
- `mousedown` / `mouseup` - Fired when a mouse button is pressed or released.
- `mousemove` - Fired when the mouse moves.
- `mouseover` / `mouseout` - Fired when the mouse enters or leaves an element.

### b) Keyboard Events
- `keydown` - Fired when a key is pressed.
- `keyup` - Fired when a key is released.
- `keypress` - (Deprecated) Fired when a key is pressed (use `keydown` instead).

### c) Form Events
- `focus` - Fired when an element gains focus.
- `blur` - Fired when an element loses focus.
- `change` - Fired when an input value is changed.
- `submit` - Fired when a form is submitted.

### d) Window Events
- `load` - Fired when a page is fully loaded.
- `resize` - Fired when the window is resized.
- `scroll` - Fired when the page is scrolled.
- `unload` - Fired when the page is closed.

## 3. Event Handling Methods
### a) Inline Event Handling
```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### b) Traditional Event Handling
```javascript
let btn = document.getElementById("myBtn");
btn.onclick = function() {
    alert("Button clicked!");
};
```

### c) Using `addEventListener()`
```javascript
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Clicked using addEventListener!");
});
```

## 4. Event Object
When an event occurs, an event object is automatically passed to the event handler.
```javascript
document.addEventListener("click", function(event) {
    console.log("Event Type: ", event.type);
    console.log("Target Element: ", event.target);
});
```

## 5. Event Propagation
### a) Event Bubbling (Default - Inner to Outer)
```javascript
document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});
```
### b) Event Capturing (Outer to Inner)
```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked in capturing phase");
}, true);
```

## 6. Event Delegation
Handling multiple elements efficiently:
```javascript
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked on: ", event.target.textContent);
    }
});
```

## 7. Removing Event Listeners
```javascript
function sayHello() {
    console.log("Hello!");
}
document.getElementById("myBtn").addEventListener("click", sayHello);
document.getElementById("myBtn").removeEventListener("click", sayHello);
```

## 8. Custom Events
```javascript
let myEvent = new Event("myCustomEvent");
document.addEventListener("myCustomEvent", function() {
    console.log("Custom Event Triggered!");
});
document.dispatchEvent(myEvent);
```

## 9. Conclusion
- JavaScript events are essential for user interactions.
- Use `addEventListener()` for flexibility and multiple handlers.
- Event delegation improves performance in dynamic elements.
- Always clean up event listeners to prevent memory leaks.
