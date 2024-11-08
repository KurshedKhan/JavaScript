const slides = document.querySelectorAll(".slide");
const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showSlide(index){

    slides.forEach((item,i)=>{

        item.classList.toggle("active",i===index);

    });
}

nextBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex)
});


preBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex)
})

showSlide(currentIndex);