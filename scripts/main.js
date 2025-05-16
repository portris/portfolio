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

// Darkmode Theme wechseln
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Zustand beim Laden prüfen
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️'; // Heller Modus
}

// Beim Klick Theme wechseln
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  themeToggle.textContent = isDark ? '☀️' : '🌙';
});