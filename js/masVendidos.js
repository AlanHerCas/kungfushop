const productos = [
  { nombre: "Chacos",             precio: "$2,499", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" },
  { nombre: "Katana",             precio: "$1,999", img: "https://thumbs.dreamstime.com/b/funda-japonesa-de-katana-en-llamas-385734709.jpg" },
  { nombre: "Sai",                precio: "$1,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueNnWtgH_K00lBtahAqynYoZbUEtFQ0HDXA&s" },
  { nombre: "Espada Jian",        precio: "$1,599", img: "https://katana.store/cdn/shop/files/katana-vs-jian.jpg" },
  { nombre: "Guan Dao",           precio: "$1,599", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" },
  { nombre: "Cuchillos mariposa", precio: "$1,599", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" },
  { nombre: "Alabarda",           precio: "$1,599", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" },
  { nombre: "Domi",               precio: "$1,299", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" }
];

const POR_SLIDE = 4;  // cuántos productos por diapositiva
const track = document.getElementById("track");
let actual = 0;       // diapositiva actual

// 1. CREAR LAS DIAPOSITIVAS
for (let i = 0; i < productos.length; i += POR_SLIDE) {

  const slide = document.createElement("div");
  slide.className = "mv-slide";

  // Toma 4 productos y crea una tarjeta por cada uno
  productos.slice(i, i + POR_SLIDE).forEach(p => {
    slide.innerHTML += `
      <div class="mv-card">
        <img src="${p.img}" alt="${p.nombre}">
        <h4>${p.nombre}</h4>
        <p>${p.precio}</p>
      </div>
    `;
  });

  track.appendChild(slide);
}

// 2. FUNCIÓN PARA MOVERSE
const total = track.children.length; // número de diapositivas

function mover(dir) {
  actual = (actual + dir + total) % total; // % total hace que sea circular
  track.style.transform = `translateX(-${actual * 100}%)`;
}

// 3. CONECTAR LAS FLECHAS
document.getElementById("prev").onclick = () => mover(-1);
document.getElementById("next").onclick = () => mover(1);