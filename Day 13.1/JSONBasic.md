# JSON और `json()` Method क्या है?

## 1️⃣ JSON (JavaScript Object Notation) क्या है?
- JSON एक **डेटा फॉर्मेट** है, जिसे डेटा स्टोर और ट्रांसफर करने के लिए इस्तेमाल किया जाता है।
- यह **JavaScript Object** की तरह दिखता है, लेकिन **स्ट्रिंग फॉर्मेट** में होता है।
- इसे **API से डेटा भेजने और प्राप्त करने** के लिए इस्तेमाल किया जाता है।

### Example JSON Data
```json
{
  "name": "Kurshed",
  "age": 25,
  "skills": ["JavaScript", "HTML", "CSS"]
}
```

## 2️⃣ `json()` Method क्या करता है?
- जब हम API से डेटा प्राप्त करते हैं, तो वह **JSON फॉर्मेट में स्ट्रिंग** होता है।
- `json()` मेथड इस JSON स्ट्रिंग को **JavaScript Object** में बदल देता है।
- यह **Fetch API** के साथ बहुत काम आता है।

### Example:
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // JSON स्ट्रिंग को JS ऑब्जेक्ट में बदलता है
  .then(data => console.log(data))   // अब हम इसे JS में यूज़ कर सकते हैं
  .catch(error => console.error('Error:', error));
```

- बिना `.json()` के डेटा **स्ट्रिंग** में रहता है, जिसे सीधे एक्सेस करना मुश्किल होता है।
- `.json()` उसे **JavaScript Object** में बदलकर **इस्तेमाल करने योग्य** बना देता है। 😊