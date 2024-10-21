document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarCollapse = document.getElementById('navbarNav');

  // Função para alternar o estado do menu com animação
  function toggleMenu() {
    const isExpanded = navbarCollapse.classList.contains('show');
    
    // Inicia a animação
    navbarCollapse.style.transition = 'transform 0.3s ease-in-out';
    navbarCollapse.style.transform = isExpanded ? 'translateX(100%)' : 'translateX(0)';
    
    // Aguarda a animação terminar antes de alterar as classes
    setTimeout(() => {
      menuToggle.classList.toggle('active');
      navbarCollapse.classList.toggle('show');
      
      // Atualiza o atributo aria-expanded para acessibilidade
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Adiciona/remove classe no body para prevenir scroll quando o menu está aberto
      document.body.classList.toggle('menu-open', !isExpanded);
      
      // Reseta a propriedade transform após a animação
      navbarCollapse.style.transform = '';
    }, 300); // Tempo da animação
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