let btn = document.getElementById("add-btn");
let inputText = document.getElementById("inputTask");

let tasks = []; 

btn.addEventListener('click',addTask);


function addTask(){
  text = inputText.value.trim();
  tasks.push(text);
  inputText.value = "";
  console.log(tasks);
}