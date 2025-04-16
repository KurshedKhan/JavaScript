let btn = document.getElementById("add-btn");
let inputText = document.getElementById("inputTask");
let taskList = document.getElementById("Task-list");

let tasks = []; 

let day = new Date();

btn.addEventListener('click',addTask);

function renderTask(){
  taskList.innerHTML = "";

  tasks.forEach((obj,index)=>{

    let li = document.createElement("li");

    if(obj.isEditing){
      let input = document.createElement("input");
      input.type = "text";
      input.value = obj.text1;
      input.addEventListener("change",(e) => obj.text1 = e.target.value);
      li.appendChild(input);
    }
    else{
      li.textContent = obj.text1 + " " + day.toDateString();
    }
    

    let actions = document.createElement("div");
    actions.className = "action";

    let editBtn = document.createElement("button");
    editBtn.textContent = obj.isEditing ? "Save" : "Edit";
    editBtn.className = obj.isEditing ? "save" : "";
    editBtn.addEventListener("click",function(){
      obj.isEditing = !obj.isEditing;
      renderTask()
    })
    

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click",function(){
      tasks.splice(index,1);
      renderTask();
    })

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
    tasks.push({text1:text,isEditing:false});
    inputText.value = "";
    renderTask();
  }
}