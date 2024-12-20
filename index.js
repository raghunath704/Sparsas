const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 5 seconds
setInterval(showNextSlide, 5000);
