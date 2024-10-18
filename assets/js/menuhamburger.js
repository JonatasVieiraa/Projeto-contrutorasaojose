document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarCollapse = document.getElementById('navbarNav');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarCollapse.classList.toggle('show');
  });

  // Fechar o menu ao clicar em um link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navbarCollapse.classList.remove('show');
    });
  });

  // Fechar o menu ao redimensionar a janela para uma largura maior que 767px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      menuToggle.classList.remove('active');
      navbarCollapse.classList.remove('show');
    }
  });
});