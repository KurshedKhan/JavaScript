let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click",()=>{

  if(btn.innerText == "🖤"){
    btn.innerText = "❤️";
    text.classList.add("text");
    text.innerText = "Liked";

  }
  else{
    btn.innerText = "🖤";
    text.classList.remove('text');
    text.innerText = "";
  }
})





































// ❤️
// 🖤