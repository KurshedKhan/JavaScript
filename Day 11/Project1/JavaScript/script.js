let btn = document.getElementById("add-btn");
let inputText = document.getElementById("inputTask");
let taskList = document.getElementById("Task-list");

let tasks = []; 

btn.addEventListener('click',addTask);

function renderTask(){
  taskList.innerHTML = "";

  tasks.forEach((value,index)=>{

    let li = document.createElement("li");
    li.textContent = value;
    

    let actions = document.createElement("div");
    actions.className = "action";

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

}



function addTask(){
  text = inputText.value.trim();
  if(text === ""){
    alert("please enter some value.");
  }
  else{
    tasks.push(text);
    inputText.value = "";
    renderTask();
  }
}