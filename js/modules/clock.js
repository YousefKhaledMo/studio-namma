const cities = [
  { label: 'Paris, France', tz: 'Europe/Paris' },
  { label: 'Los Angeles, CA', tz: 'America/Los_Angeles' },
  { label: 'Barcelona, Spain', tz: 'Europe/Madrid' },
  { label: 'Hong Kong, China', tz: 'Asia/Hong_Kong' },
];

export function initClock() {
  const container = document.getElementById('world-clocks');
  if (!container) return;

  cities.forEach(c => {
    const row = document.createElement('div');
    row.className = 'clock-row';
    row.innerHTML = `<span class="clock-city">${c.label}</span>
                     <span class="clock-time" data-tz="${c.tz}"></span>`;
    container.appendChild(row);
  });

  function tick() {
    document.querySelectorAll('.clock-time').forEach(el => {
      el.textContent = new Date().toLocaleTimeString('en-US', {
        timeZone: el.dataset.tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    });
  }
  tick();
  setInterval(tick, 1000);
}
