let input = document.getElementById("pass");
let toggle = document.getElementById("button");
let txt = document.getElementById("text");
// console.log(input.value.length);

toggle.addEventListener("click",function(){
  // console.log(this);
  // console.log(toggle);
  // console.log(input.type);
  if(input.value === ""){
    // txt.style.display = "block";
    // txt.style.margin = "2px";
    // txt.style.color = "red";
    txt.classList.add("txt_design");
    txt.innerText = " Please enter your password.";
  }
  else{
    if(input.type === "password"){
      input.type = "text";
      this.innerText = "Hide Password";
    }
    else{
      input.type = "password";
      this.innerText = "Show Password";
    }
  }
})