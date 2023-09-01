document.addEventListener("DOMContentLoaded", function () {
  // Tu código JavaScript aquí

  document.querySelector(".prevBtn").addEventListener("click", prevSlide);
  document.querySelector(".nextBtn").addEventListener("click", nextSlide);
  const sliderImg = document.querySelector("#sliderImg");

  let slideIndex = 0;
  const images = [
    "/assets/images/promocion_de_celulares.png",
    "/assets/images/metodos_de_pago.jpg",
  ];

  const description = [
    "promociones de celulares",
    "metodos de paog"
  ]

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= images.length) {
      slideIndex = 0; // Reiniciar al llegar al final
    }
    sliderImg.setAttribute("src", images[slideIndex]);
    sliderImg.setAttribute("alt", `Imagen de ${description[slideIndex]}`)
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = images.length - 1; // Ir al último al retroceder desde el primero
    }
    sliderImg.setAttribute("src", images[slideIndex]);
    sliderImg.setAttribute("alt", `Imagen de ${description[slideIndex]}`)
  }
  setInterval(nextSlide, 3000);
});
