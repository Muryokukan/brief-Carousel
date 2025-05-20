const carouselSlides = document.getElementById('carouselSlides');

const slides = carouselSlides.children;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

document.getElementById('nextButton').addEventListener('click', function() {
  nextSlide();
});

document.getElementById('prevButton').addEventListener('click', function() {
  prevSlide();
});