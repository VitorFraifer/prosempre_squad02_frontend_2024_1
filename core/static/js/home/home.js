document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.nossaHistoriaImg');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.transform = 'translateX(0)';
        } else if (i < index) {
          slide.style.transform = 'translateX(-100%)';
        } else {
          slide.style.transform = 'translateX(100%)';
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 2000); // Altere o intervalo conforme necessário (em milissegundos)
  
    showSlide(currentIndex);
  });
  