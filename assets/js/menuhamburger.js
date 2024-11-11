document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarCollapse = document.getElementById('navbarNav');

  // Função para alternar o estado do menu
  function toggleMenu() {
    navbarCollapse.classList.toggle('show');

    // Atualiza o atributo aria-expanded para acessibilidade
    menuToggle.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));

    // Adiciona/remove classe no body para prevenir scroll quando o menu está aberto
    document.body.classList.toggle('menu-open', navbarCollapse.classList.contains('show'));
  }

  // Evento de clique no botão do menu
  menuToggle.addEventListener('click', toggleMenu);

  // Fechar o menu ao clicar em um link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !navbarCollapse.contains(event.target) && navbarCollapse.classList.contains('show')) {
      toggleMenu();
    }
  });

  // Fechar o menu ao redimensionar a janela para uma largura maior que 767px
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 767 && navbarCollapse.classList.contains('show')) {
        toggleMenu();
      }
    }, 250);
  });
});