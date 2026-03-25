

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

/* SET VISIBLE CARDS */
function setVisibleCards(){
  if(window.innerWidth <= 576){
    visibleCards = 1;       // Mobile
  }else if(window.innerWidth <= 992){
    visibleCards = 2;       // Tablet
  }else{
    visibleCards = 3;       // Desktop
  }
}

/* CREATE DOTS BASED ON VISIBLE CARDS */
function createDots(){
  dotsContainer.innerHTML = "";
  totalSlides = Math.ceil(cards.length / visibleCards);

  for(let i = 0; i < totalSlides; i++){
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");
    dot.addEventListener("click", ()=>{
      indexTest = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

/* UPDATE SLIDER */
function updateSlider(){
  const gap = 30;
  const cardWidth = cards[0].offsetWidth + gap;
  track.style.transform = `translateX(-${indexTest * cardWidth * visibleCards}px)`;

  document.querySelectorAll(".testimonial-dots span")
    .forEach(dot => dot.classList.remove("active"));

  if(dotsContainer.children[indexTest]){
    dotsContainer.children[indexTest].classList.add("active");
  }
}

/* AUTO SLIDE */
function startAutoSlide(){
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(()=>{
    indexTest = (indexTest + 1) % totalSlides;
    updateSlider();
  }, 4000);
}

/* INIT */
function initTestimonials(){
  setVisibleCards();
  indexTest = 0;
  createDots();
  updateSlider();
  startAutoSlide();
}

initTestimonials();

/* RESIZE FIX */
window.addEventListener("resize", ()=>{
  initTestimonials();
});



// 
// 
function showing() {
  let form = document.querySelector(".free-consult-fixed-div");
  let overlay = document.querySelector(".blur-overlay");

  let isOpen = form.classList.toggle("show");
  overlay.classList.toggle("show");

  document.body.style.overflow = isOpen ? "hidden" : "auto";
}