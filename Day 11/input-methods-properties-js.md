
# 🧠 Input Methods and Properties in JavaScript

HTML `<input>` elements have many **properties** and **methods** in JavaScript that allow us to create powerful functionalities.

---

## ✅ 1. Common Properties of Input Element

| Property         | Description |
|------------------|-------------|
| `value`          | Gets or sets the current text/value of the input. |
| `type`           | Type of input (e.g., `text`, `password`, `number`). |
| `placeholder`    | Text shown as a placeholder inside the input. |
| `disabled`       | Boolean — `true` if the input is disabled. |
| `checked`        | Boolean — for checkboxes/radio buttons. |
| `name`           | Name of the input field. |
| `id`             | The `id` of the input element. |
| `readOnly`       | Boolean — `true` if the input is read-only. |
| `maxLength`      | Maximum number of characters allowed. |
| `min`, `max`     | Minimum/maximum value (for number/date inputs). |
| `required`       | Boolean — `true` if the input must be filled before submitting. |

---

## ✅ 2. Common Methods

| Method               | What it does |
|----------------------|--------------|
| `focus()`            | Gives focus to the input (as if clicked). |
| `blur()`             | Removes focus from the input. |
| `select()`           | Selects the text inside the input. |
| `setCustomValidity()`| Sets a custom error message for validation. |
| `checkValidity()`    | Returns `true` or `false` based on validity. |

---

## ✅ 3. Useful Events (For Functionality)

| Event        | When it fires |
|--------------|---------------|
| `oninput`    | When the user types inside the input. |
| `onchange`   | When the value changes and the input loses focus. |
| `onfocus`    | When the input gets focus. |
| `onblur`     | When the input loses focus. |
| `onkeydown`  | When a key is pressed down. |
| `onkeyup`    | When a key is released. |

---

## ✅ 4. Example: Create Functionality with Input

```html
<input type="text" id="myInput" placeholder="Type something" />

<script>
  const input = document.getElementById("myInput");

  // Change background on focus
  input.addEventListener("focus", () => {
    input.style.backgroundColor = "lightyellow";
  });

  // Log value while typing
  input.addEventListener("input", () => {
    console.log("Current value:", input.value);
  });
</script>
```
