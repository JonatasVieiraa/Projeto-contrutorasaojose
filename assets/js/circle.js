new WOW().init();

const partnerCircle = document.getElementById("partnerCircle");
const logos = partnerCircle.querySelectorAll(".partner-logo");
const centerX = 250;
const centerY = 250;
const radius = 200;
let currentIndex = 0;

function positionLogos() {
  logos.forEach((logo, index) => {
    const angle = (index / logos.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - 50;
    const y = centerY + radius * Math.sin(angle) - 50;
    logo.style.left = `${x}px`;
    logo.style.top = `${y}px`;
  });
}

function moveToCenter(logo) {
  logo.classList.add("active");
  logo.style.left = `${centerX - 75}px`;
  logo.style.top = `${centerY - 75}px`;
  logos.forEach((otherLogo) => {
    if (otherLogo !== logo) {
      otherLogo.classList.add("inactive");
    }
  });
}

function resetPosition() {
  logos.forEach((logo) => {
    logo.classList.remove("active", "inactive");
  });
  positionLogos();
}

function rotateLogos() {
  resetPosition();
  currentIndex = (currentIndex + 1) % logos.length;
  moveToCenter(logos[currentIndex]);
}

positionLogos();
moveToCenter(logos[currentIndex]);

setInterval(rotateLogos, 3000); // Muda o logo a cada 3 segundos

// Pausa a rotação quando o mouse está sobre o círculo
partnerCircle.addEventListener("mouseenter", () => {
  clearInterval(rotateInterval);
});

// Retoma a rotação quando o mouse sai do círculo
partnerCircle.addEventListener("mouseleave", () => {
  rotateInterval = setInterval(rotateLogos, 3000);
});
