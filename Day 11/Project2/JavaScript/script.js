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