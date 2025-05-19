const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Symbol wechseln
  if (navMenu.classList.contains('show')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
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

// Jahr für Footer aktualisieren
document.getElementById('year').textContent = new Date().getFullYear();