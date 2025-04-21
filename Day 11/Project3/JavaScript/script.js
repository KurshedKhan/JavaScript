const carousel = document.getElementById('carousel-slides');
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById('next');
const totalSlide = document.querySelectorAll(".slide");
const slideLen = totalSlide.length;

let slideIndex = 0 ;

function slideShow(index){
  slideIndex = (index + slideLen)%3;
  carousel.style.transform = `translateX(-${slideIndex*100}%)`;
  // carousel.style.transform = `translateX(-${index*100}%)`;
  updateDot();
}

let autoPlays = setInterval(function(){
  slideShow(slideIndex + 1);
},3000)


function updateDot(){
  let dot = document.querySelectorAll(".dot");
  dot.forEach((dot,i)=>{
    dot.classList.toggle("active",i === slideIndex)
  })
}

prevBtn.addEventListener("click",function(){
  slideShow(slideIndex - 1);
})

nextBtn.addEventListener("click",function(){
  slideShow(slideIndex + 1);
})

function createDots(){
  for(let i = 0 ; i < slideLen ; i++){
     let dot = document.createElement("span"); // create span for dots

     dot.classList.add('dot'); // design dots in css

     if(i===0){
      dot.classList.add('active'); // first slide background color // active slide
     }

     dot.addEventListener('click',()=>{ // when click dots then show particular slide
      slideShow(i);
     })

     dotsContainer.appendChild(dot);
  }
}

createDots();

document.querySelector(".carousel-container").addEventListener("mouseover",function(){
  clearInterval(autoPlays);
})

document.querySelector(".carousel-container").addEventListener("mouseout",function(){
  
  autoPlays = setInterval(function(){
    slideShow(slideIndex + 1);
  },3000)
  
})
