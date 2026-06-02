const productos = [
  { nombre: "Chacos", precio: "$800", img: "https://www.asiana.com.mx/wp-content/uploads/2022/04/img-414-2.jpg" },
  { nombre: "jian", precio: "$1,200$", img: "https://internalwudangstore.net/wp-content/uploads/2016/11/SW91-tai-chi-jian.jpg" },
  { nombre: "Sai", precio: "$1,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueNnWtgH_K00lBtahAqynYoZbUEtFQ0HDXA&s" },
  { nombre: "Espada JiaSn", precio: "$5,000", img: "https://katana.store/cdn/shop/files/katana-vs-jian.jpg" },
  { nombre: "Guan Dao", precio: "$6,000", img: "https://internalwudangstore.net/wp-content/uploads/2017/04/2-Guan-Dao.jpg" },
  { nombre: "Gou", precio: "$3,500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXhTSHmGV9DUpJfdTgXIPAceX276oj7Qpog&s" },
  { nombre: "Alabarda", precio: "$7,000", img: "https://fbi.cults3d.com/uploaders/13650677/illustration-file/60cb1127-5ed7-4c10-949c-26a3984873f7/HMain.jpg" },
  { nombre: "Domi", precio: "$2,500", img: "https://m.media-amazon.com/images/I/71zWzJtmiyL.jpg" }
];

function getPorSlide() {
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 4;
}

let porSlide = getPorSlide();
const track = document.getElementById("track");
let actual = 0;

function renderCarousel() {
  track.innerHTML = "";
  for (let i = 0; i < productos.length; i += porSlide) {
    const slide = document.createElement("div");
    slide.className = "mv-slide";
    productos.slice(i, i + porSlide).forEach(p => {
      slide.innerHTML += `
        <div class="mv-card">
          <img src="${p.img}" alt="${p.nombre}">
          <h4>${p.nombre}</h4>
          <div>⭐⭐⭐⭐⭐</div>
          <p>${p.precio}</p>
        </div>
      `;
    });
    track.appendChild(slide);
  }
  actual = 0;
  track.style.transform = "translateX(0)";
}

renderCarousel();

window.addEventListener("resize", () => {
  const newPorSlide = getPorSlide();
  if (newPorSlide !== porSlide) {
    porSlide = newPorSlide;
    renderCarousel();
  }
});

function mover(dir) {
  const total = track.children.length;
  if (total === 0) return;
  actual = (actual + dir + total) % total;
  track.style.transform = `translateX(-${actual * 100}%)`;
}

document.getElementById("prev").onclick = () => mover(-1);
document.getElementById("next").onclick = () => mover(1);