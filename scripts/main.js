// ==========================
// Menü-Toggle (nur auf index.html)
// ==========================
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.main-nav ul');

if (menuToggle && menuIcon && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
}

// ==========================
// Dark Mode Umschalten
// ==========================
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  const body = document.body;

  // Beim Laden prüfen
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
  }

  // Klick-Handler
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });
}

// ==========================
// Jahr im Footer setzen
// ==========================
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}