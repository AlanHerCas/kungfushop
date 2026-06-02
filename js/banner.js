document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#inicio form');
  const nameIpt = document.getElementById('nameIpt');
  const emailIpt = document.getElementById('emailIpt');
  const nameAlert = document.getElementById('nameAlert');
  const emailAlert = document.getElementById('emailAlert');
  const greeting = document.getElementById('greeting');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameIpt.value.trim();
      const emailVal = emailIpt.value.trim();

      const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      nameAlert.style.display = 'none';
      emailAlert.style.display = 'none';
      greeting.style.display = 'none';

      if (!nameRegex.test(nameVal)) {
        nameAlert.style.display = 'block';
        return;
      }

      if (!emailRegex.test(emailVal)) {
        emailAlert.style.display = 'block';
        return;
      }

      greeting.textContent = `¡Gracias por suscribirte, ${nameVal}! Hemos enviado tu cupón del 10% de descuento a tu correo: ${emailVal}`;
      greeting.style.display = 'block';

      nameIpt.value = '';
      emailIpt.value = '';
    });
  }
});
