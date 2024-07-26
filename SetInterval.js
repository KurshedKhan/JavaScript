let runstart = document.getElementById("RunStart");

runstart.addEventListener("click",function() {
    let count = 60;
    setInterval(
        () => {
        console.log(`${count}`);
        count--;
        },
    1000)
});