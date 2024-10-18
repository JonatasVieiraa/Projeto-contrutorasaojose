document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".features_carousel");

  carousels.forEach((carousel) => {
    const container = carousel.querySelector(".carousel-container");
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
      container.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Inicia o carrossel automático
    setInterval(nextSlide, 3000);
  });
});
