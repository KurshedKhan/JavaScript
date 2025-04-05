let toogle = document.getElementById("btn");
let body = document.getElementById("body");
// console.log(toogle);

// method 1
// toogle.addEventListener("click",function(){
//     // body.classList.add("body");
//     // document.body.classList.toggle("body");
//     // this.classList.toggle("btnChange");
//     // toogle.innerText = "Light Mode";

//     if(body.classList.contains("bodyColor")){
//       document.body.classList.remove("bodyColor");
//       this.classList.remove("btnChange");
//       toogle.innerText = "Dark Mode";
//     }
//     else{
//       document.body.classList.add("bodyColor");
//       this.classList.add("btnChange");
//       toogle.innerText = "Light Mode";
//     }
// })

// console.log(body.classList.contains('bodyColor'));



// method 2

// toogle.addEventListener("click",function(){

//   if(body.classList.contains("bodyColor") === false){

//     document.body.classList.add("bodyColor");
//     this.classList.add("btnChange");
//     toogle.innerText = "Light Mode";

//   }
//   else{

//     document.body.classList.remove("bodyColor");
//     this.classList.remove("btnChange");
//     toogle.innerText = "Dark Mode";

//   }
// })



// Icon Change toogle

toogle.addEventListener("click",function(){

  if(body.classList.contains("bodyColor") === false){

    document.body.classList.add("bodyColor");
    // this.classList.add("btnChange");
    toogle.innerText = "🌕";

  }
  else{

    document.body.classList.remove("bodyColor");
    // this.classList.remove("btnChange");
    toogle.innerText = "🌑";

  }
})