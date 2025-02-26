# JavaScript Pop-Up Boxes: A Deep Dive

## 1. Introduction
JavaScript provides built-in methods to display pop-up boxes, which are useful for alerts, confirmations, and user inputs. These are:
- `alert()`
- `confirm()`
- `prompt()`
- Custom pop-ups using HTML, CSS, and JavaScript.

## 2. Basic Pop-Up Boxes

### 2.1 Alert Box
The `alert()` method is used to display a simple pop-up message.
```js
alert("This is an alert box!");
```

### 2.2 Confirm Box
The `confirm()` method is used to get user confirmation (OK or Cancel).
```js
let userResponse = confirm("Do you want to proceed?");
if (userResponse) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}
```

### 2.3 Prompt Box
The `prompt()` method is used to take user input.
```js
let userName = prompt("Enter your name:", "Guest");
if (userName) {
    console.log("Hello, " + userName);
} else {
    console.log("User canceled input");
}
```

