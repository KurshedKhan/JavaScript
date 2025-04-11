let scrollTop = document.getElementById("ScrollTop");

// This is bom part ==> browser object model ==> browser functionality
window.addEventListener("scroll",function(){

  if(window.scrollY > 50){
    scrollTop.style.display = "block";
  }
  else{
    scrollTop.style.display = "none";
  }

})

scrollTop.addEventListener("click",function(){

  window.scrollTo({
    top:10,
    behavior : "smooth"
  })
})

