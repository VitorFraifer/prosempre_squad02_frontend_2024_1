function updateBolaH(index) {
    const bolas = document.querySelectorAll('.bolaH');
    bolas.forEach((bola, i) => {
        if (i === index) {
            bola.style.backgroundColor = '#262626';
        } else {
            bola.style.backgroundColor = '#E1E5EE';
        }
    });
}

function updateBolaV(index) {
    const bolas = document.querySelectorAll('.bolaV');
    bolas.forEach((bola, i) => {
        if (i === index) {
            bola.style.backgroundColor = '#262626';
        } else {
            bola.style.backgroundColor = '#E1E5EE';
        }
    });
}

let intervalo = 3000 //Intervalo entre os frames (milissegundos)
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.fNossaHistoria');
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
      updateBolaH(index);
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    setInterval(nextSlide, intervalo); // Altere o intervalo conforme necessário (em milissegundos)
  
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.fNossosValores');
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
      updateBolaV(index);
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    setInterval(nextSlide, intervalo); // Altere o intervalo conforme necessário (em milissegundos)
  
    showSlide(currentIndex);    
});