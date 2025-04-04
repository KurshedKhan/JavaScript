let button = document.getElementById("btn");
let text = document.getElementById("result");
let body = document.getElementById("body");
// console.log(button.innerText);

// button.onclick = function(){

//   let num = prompt("Enter your age : ");
//   // alert("are you clicked me?");
//   console.log("are you clicked me?",num);

// }

button.addEventListener("dblclick",function(){
  let age = prompt("Enter your age :");
  if(age >= 18){
    text.innerText = `You are Eligible for vote : ${age} `;
    body.style.backgroundColor = "green";
  }
  else{
    text.innerText = `You are not eligible for vote : ${age}`;
    body.style.backgroundColor = "yellow";
  }
}
)