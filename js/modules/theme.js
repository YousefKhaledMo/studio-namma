export function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  if (!btn || !label) return;

  function setTheme(dark) {
    document.documentElement.classList.toggle('light-mode', !dark);
    label.textContent = dark ? 'LIGHT MODE' : 'DARK MODE';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  const saved = localStorage.getItem('theme');
  setTheme(saved !== 'light');

  btn.addEventListener('click', () => {
    setTheme(document.documentElement.classList.contains('light-mode'));
  });
}
