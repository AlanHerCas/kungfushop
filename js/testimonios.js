const tarjetas = document.querySelectorAll('.tarjeta-animada');

const opciones = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const scroll = new IntersectionObserver(function(entradas, observador) {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.style.opacity = '1';
      entrada.target.style.transform = 'translateY(0)';
    } else {
      entrada.target.style.opacity = '0';
      entrada.target.style.transform = 'translateY(30px)';
    }
  });
}, opciones);

tarjetas.forEach(tarjeta => {
  tarjeta.style.opacity = '0';
  tarjeta.style.transform = 'translateY(30px)';
  tarjeta.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  scroll.observe(tarjeta);
});