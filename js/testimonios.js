const tarjetas = document.querySelectorAll('.tarjeta-animada'); //mi rastreador

const opciones = { //el sensor
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};


const scroll = new IntersectionObserver(function(entradas, observador) {//logica del scroll
  
  entradas.forEach(entrada => {
    
    if (entrada.isIntersecting) {
      // Si entra a la pantalla, se vuelve visible
      entrada.target.style.opacity = '1';
      entrada.target.style.transform = 'translateY(0)';
    } else {
      // Si sale de la pantalla, se vuelve a esconder
      entrada.target.style.opacity = '0';
      entrada.target.style.transform = 'translateY(30px)';
    }
    
  });

}, opciones); 


tarjetas.forEach(tarjeta => {//estado encendido
  tarjeta.style.opacity = '0';
  tarjeta.style.transform = 'translateY(30px)';
  tarjeta.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  
  scroll.observe(tarjeta);
});