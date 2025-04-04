## 15 Real-Life Examples of DOM Click Functionality

### 1. Button Click to Show Alert
#### HTML:
```html
<button id="btn">Click Me</button>
```
#### JavaScript:
```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
```
➡ **Example:** Clicking a "Submit" button shows an alert.

---

### 2. Toggle Dark Mode
#### HTML:
```html
<button id="toggle">Toggle Dark Mode</button>
```
#### CSS:
```css
.dark-mode {
    background-color: black;
    color: white;
}
```
#### JavaScript:
```js
document.getElementById("toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
```
➡ **Example:** Clicking a button enables/disables dark mode.

---

### 3. Show/Hide Password
#### HTML:
```html
<input type="password" id="password">
<button id="togglePassword">Show/Hide</button>
```
#### JavaScript:
```js
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
```
➡ **Example:** Clicking an eye icon to show/hide a password.

---

### 4. Open Modal/Popup
#### HTML:
```html
<button id="openModal">Open Modal</button>
<div id="modal" class="modal">This is a modal</div>
```
#### CSS:
```css
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
}
```
#### JavaScript:
```js
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});
```
➡ **Example:** Clicking "Sign Up" opens a registration popup.

---

### 5. Close Modal on Click
#### HTML:
```html
<button id="closeModal">Close Modal</button>
```
#### JavaScript:
```js
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
```
➡ **Example:** Clicking the close button closes a modal.

---

### 6. Like Button (Toggle Heart)
#### HTML:
```html
<button id="like">❤️ Like</button>
```
#### CSS:
```css
.liked {
    color: red;
}
```
#### JavaScript:
```js
document.getElementById("like").addEventListener("click", function() {
    this.classList.toggle("liked");
});
```
➡ **Example:** Clicking a heart icon to like/unlike a post.

---

### 7. Expand/Collapse FAQ
#### HTML:
```html
<button id="faq">What is JavaScript?</button>
<p class="answer">JavaScript is a programming language.</p>
```
#### CSS:
```css
.answer {
    display: none;
}
.visible {
    display: block;
}
```
#### JavaScript:
```js
document.getElementById("faq").addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("visible");
});
```
➡ **Example:** Clicking a question expands the answer.

---

### 8. Add Item to Cart
#### HTML:
```html
<button id="addToCart">Add to Cart</button>
```
#### JavaScript:
```js
document.getElementById("addToCart").addEventListener("click", function() {
    alert("Item added to cart!");
});
```
➡ **Example:** Clicking "Add to Cart" adds an item.

---

### 9. Scroll to Top
#### HTML:
```html
<button id="scrollTop">Scroll to Top</button>
```
#### JavaScript:
```js
document.getElementById("scrollTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
```
➡ **Example:** Clicking a "Back to Top" button scrolls up.

---

### 10. Show Dropdown Menu
#### HTML:
```html
<button id="dropdownBtn">Menu</button>
<ul id="dropdownMenu" class="menu">
    <li>Home</li>
    <li>About</li>
</ul>
```
#### CSS:
```css
.menu {
    display: none;
}
.show {
    display: block;
}
```
#### JavaScript:
```js
document.getElementById("dropdownBtn").addEventListener("click", function() {
    document.getElementById("dropdownMenu").classList.toggle("show");
});
```
➡ **Example:** Clicking a profile icon shows a dropdown menu.

---

### 11-15 (Remaining examples expanded similarly)

### 11. Change Background Color
```js
document.getElementById("changeBg").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
```
➡ **Example:** Clicking a button changes the background.

---

### 12. Copy Text to Clipboard
```js
document.getElementById("copyText").addEventListener("click", function() {
    let text = document.getElementById("textToCopy");
    navigator.clipboard.writeText(text.value);
});
```
➡ **Example:** Clicking "Copy" copies text to the clipboard.

---

### 13. Image Gallery (Change Image)
```js
document.getElementById("nextImage").addEventListener("click", function() {
    document.getElementById("galleryImg").src = "image2.jpg";
});
```
➡ **Example:** Clicking "Next" changes the gallery image.

---

### 14. Expand Textarea on Click
```js
document.getElementById("textArea").addEventListener("click", function() {
    this.style.height = "100px";
});
```
➡ **Example:** Clicking a comment box expands it.

---

### 15. Play/Pause Video
```js
document.getElementById("video").addEventListener("click", function() {
    this.paused ? this.play() : this.pause();
});
```
➡ **Example:** Clicking on a video toggles play/pause.

---

These **15 real-life DOM click event examples** are commonly used in web applications. 🚀
