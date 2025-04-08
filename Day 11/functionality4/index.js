let button = document.getElementById("btn");
let model = document.getElementById("model");
let close = document.getElementById("close");

button.addEventListener("click",()=>{
  model.classList.add("modelchange");
})

close.addEventListener("click",function(){
  model.classList.remove("modelchange");
})