const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Symbol wechseln
  if (navMenu.classList.contains('show')) {
    menuToggle.textContent = '✖'; // Schließen
    menuToggle.setAttribute('aria-label', 'Menü schließen');
  } else {
    menuToggle.textContent = '☰'; // Öffnen
    menuToggle.setAttribute('aria-label', 'Menü öffnen');
  }
});