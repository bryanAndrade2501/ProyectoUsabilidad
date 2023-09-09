import products from "../providers/productProvider.js";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".prevBtn").addEventListener("click", prevSlide);
  document.querySelector(".nextBtn").addEventListener("click", nextSlide);
  const sliderImg = document.querySelector("#sliderImg");

  let slideIndex = 0;
  const images = [
    "assets/images/promocion_de_celulares.png",
    "assets/images/metodos_de_pago.jpg",
  ];

  const description = ["promociones de celulares", "metodos de pago"];

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= images.length) {
      slideIndex = 0; // Reiniciar al llegar al final
    }
    sliderImg.setAttribute("src", images[slideIndex]);
    sliderImg.setAttribute("alt", `Imagen de ${description[slideIndex]}`);
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = images.length - 1; // Ir al último al retroceder desde el primero
    }
    sliderImg.setAttribute("src", images[slideIndex]);
    sliderImg.setAttribute("alt", `Imagen de ${description[slideIndex]}`);
  }
  setInterval(nextSlide, 3000);
});

//CARGA DINÁMICA DE PRODUCTOS.

function crearProducto(producto) {
  const productoHTML = `
      <div class="product">
          <img src="${producto.image}" alt="Imagen del producto: ${producto.productName} de ${producto.category}" />
          <h3>${producto.productName}</h3>
          <p>Precio: $${producto.price}</p>
          <div>
          <button class="btn-cart">Añadir al carrito</button>
          <button class="btn-favorite">❤️</button>
          </div>
      </div>
  `;
  return productoHTML;
}

// Obtener los primeros 5 productos
const celulares = products.slice(0, 5);

// Obtener los siguientes 5 productos (del 6 al 10)
const ultimos = products.slice(8, 13);

function cargarProductos() {
  const cellphone_container = document.querySelector(".cell_phone");
  const userpreferences_container = document.querySelector(".user_preferences")
  

  celulares.forEach((producto) => {
    const productoHTML = crearProducto(producto);
    cellphone_container.innerHTML += productoHTML;
  });

  ultimos.forEach((producto) => {
    const productoHTML = crearProducto(producto);
    userpreferences_container.innerHTML += productoHTML;
  });
}

cargarProductos();
