let slideIndex = 0;
let images;
let imageContainer;

function showSlide(index) {
  if (index >= images.length) slideIndex = 0;
  if (index < 0) slideIndex = images.length - 1;
  imageContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(autoSlide, 4000);
}

window.addEventListener("load", () => {
  images = document.querySelectorAll('.carousel-image');
  imageContainer = document.querySelector('.carousel-images');
  showSlide(slideIndex);
  autoSlide();
});
