let inputText = document.getElementById('inputText');

function AllClear(){
  inputText.value = "";
}

function btnValue(val){
  inputText.value += val;
}

function resultValue(){
  inputText.value = eval(inputText.value);
}

function BackSpace(){
  inputText.value = inputText.value.slice(0,-1);
}


document.addEventListener("keydown",(event)=>{
  const key = event.key;

  if(key === "Enter"){
    resultValue();
  }
  else if(key === "Backspace"){
    BackSpace();
  }
  else if(key === "Escape"){
    AllClear();
  }
  else if(!(isNaN(key)) || "+-*/()".includes(key)){
    btnValue(key);
  }
})
