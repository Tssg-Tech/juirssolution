

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}
function nextSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}
function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}
setInterval(nextSlide, 4000);

// EXPERIENCE TABS
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    tabBtns.forEach(b=>b.classList.remove("active"));
    tabContents.forEach(c=>c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.querySelector(".testimonial-dots");

let indexTest = 0;
let visibleCards = 3;
let totalSlides = 0;
let autoSlideInterval;




// 
// 
function showing() {
  let form = document.querySelector(".free-consult-fixed-div");
  let overlay = document.querySelector(".blur-overlay");

  let isOpen = form.classList.toggle("show");
  overlay.classList.toggle("show");

  document.body.style.overflow = isOpen ? "hidden" : "auto";
}


// 
// 
let form = document.querySelector(".addtocart");
let overlay = document.querySelector(".blur-overlay");

function openAddToCart() {
  let Open = form.classList.add("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "hidden";
}

function closeAddToCart() {
  let Open = form.classList.remove("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "auto";
}