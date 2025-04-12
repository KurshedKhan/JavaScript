let text = document.getElementById("Text");
let copyText = document.getElementById("copyText");


copyText.addEventListener("click",function(){

  navigator.clipboard.writeText(text.innerText);
  // copyText.innerText = "Copied!";
});