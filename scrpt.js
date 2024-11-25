document.addEventListener("DOMContentLoaded", () => {
    // Carrusel
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
  
    let counter = 0;
    const size = carouselImages[0].clientWidth;
  
    function updateCarousel() {
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
  
    // Botón siguiente
    nextButton.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) return;
      counter++;
      updateCarousel();
    });
  
    // Botón anterior
    prevButton.addEventListener("click", () => {
      if (counter <= 0) return;
      counter--;
      updateCarousel();
    });
  
    // Detectar dispositivo y gestionar contenido de descarga
    const downloadContent = document.getElementById("download-content");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Botón de descarga para móvil
      downloadContent.innerHTML = `
        <p>Descarga la app en tu dispositivo móvil:</p>
        <a href="https://drive.google.com/file/d/1HT1xV0IGV3XfVbo44GoJ3YaQx6b9bB7B/view?usp=sharing" class="button">Descargar</a>
      `;
    } else {
      // Código QR para PC
      downloadContent.innerHTML = `
        <p>Escanea este código QR para descargar la app:</p>
        <img src="images/qr-codigo.jpg" alt="Código QR para descargar la app">
      `;
    }
  });
  