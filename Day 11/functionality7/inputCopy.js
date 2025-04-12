let inputText = document.getElementById("inputText");
let copyText = document.getElementById("copyText");

copyText.addEventListener("click",function(){

  if(inputText.value === ""){
    alert("Please Enter your value : 😡");
  }
  else{
    navigator.clipboard.writeText(inputText.value);
    inputText.value = "";
  }

})