let targetTime = document.getElementById("targetTime");

targetTime.addEventListener('click',()=>{
   setInterval(
    ()=> {
        let currentTime = new Date();
    
        let hours = String(currentTime.getHours()).padStart(2, '0');
        let minutes = String(currentTime.getMinutes()).padStart(2, '0');
        let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
        let time = `${hours} : ${minutes} : ${seconds}`;
    
        document.getElementById("time").innerHTML = time;
    },1000)
})

