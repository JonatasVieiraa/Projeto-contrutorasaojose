/**
 * Inicializa o carrossel circular de logos de parceiros.
 * Configura o posicionamento inicial dos logos e inicia a rotação automática.
 */
document.addEventListener("DOMContentLoaded", function () {
  const partnerCircle = document.getElementById("partnerCircle");
  if (!partnerCircle) return; // Verifica se o elemento existe

  const logos = partnerCircle.querySelectorAll(".partner-logo");
  const centerX = partnerCircle.offsetWidth / 2; // Centraliza dinamicamente
  const centerY = partnerCircle.offsetHeight / 2; // Centraliza dinamicamente
  const radius = partnerCircle.offsetWidth / 2 - 75; // Ajusta o raio dinamicamente
  let currentIndex = 0;
  let rotateInterval;

  /**
   * Posiciona os logos no círculo.
   * Calcula as coordenadas x e y de cada logo com base no ângulo e no raio.
   */
  function positionLogos() {
    const numLogos = logos.length;
    const angleIncrement = (2 * Math.PI) / numLogos;

    logos.forEach((logo, index) => {
      const angle = index * angleIncrement;
      const x = centerX + radius * Math.cos(angle) - logo.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - logo.offsetHeight / 2;

      logo.style.left = `${x}px`;
      logo.style.top = `${y}px`;
    });
  }

  /**
   * Move o logo especificado para o centro do círculo.
   * Adiciona a classe "active" ao logo centralizado e "inactive" aos outros.
   * @param {HTMLElement} logo O elemento do logo a ser centralizado.
   */
  function moveToCenter(logo) {
    logo.classList.add("active");
    logo.style.left = `${centerX - logo.offsetWidth / 2}px`;
    logo.style.top = `${centerY - logo.offsetHeight / 2}px`;

    logos.forEach((otherLogo) => {
      if (otherLogo !== logo) {
        otherLogo.classList.add("inactive");
      }
    });
  }

  /**
   * Redefine a posição de todos os logos.
   * Remove as classes "active" e "inactive" e reposiciona os logos no círculo.
   */
  function resetPosition() {
    logos.forEach((logo) => {
      logo.classList.remove("active", "inactive");
    });
    positionLogos();
  }

  /**
   * Rotaciona os logos, movendo o próximo logo para o centro.
   * Redefine as posições e move o logo atual para o centro.
   */
  function rotateLogos() {
    resetPosition();
    currentIndex = (currentIndex + 1) % logos.length;
    moveToCenter(logos[currentIndex]);
  }

  /**
   * Inicia a rotação automática dos logos.
   * Define o intervalo de tempo para a função rotateLogos.
   */
  function startRotation() {
    rotateInterval = setInterval(rotateLogos, 3000);
  }

  /**
   * Para a rotação automática dos logos.
   * Limpa o intervalo definido para a rotação.
   */
  function stopRotation() {
    clearInterval(rotateInterval);
  }

  // Inicializa as posições e a rotação
  positionLogos();
  moveToCenter(logos[currentIndex]);
  startRotation();

  // Pausa a rotação quando o mouse está sobre o círculo
  partnerCircle.addEventListener("mouseenter", stopRotation);

  // Retoma a rotação quando o mouse sai do círculo
  partnerCircle.addEventListener("mouseleave", startRotation);
});
