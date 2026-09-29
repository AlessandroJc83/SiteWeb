const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Appliquer le thème sauvegardé
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const darkMode = body.classList.contains('dark');
  toggleBtn.textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
});
