document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.nav-link-custom');

  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      const navbarCollapse = document.getElementById('navbarContent');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
          const toggler = document.querySelector('.navbar-toggler-custom');
          if (toggler) toggler.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  const themeToggle = document.getElementById('themeToggle');
  const setTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
      }
    }
    localStorage.setItem('theme', theme);
  };

  const currentTheme = localStorage.getItem('theme') || 'dark';
  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      setTheme(isLight ? 'dark' : 'light');
    });
  }
});
