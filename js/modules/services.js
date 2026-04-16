export function initServices() {
  const panel = document.getElementById('service-video-panel');
  const rows = document.querySelectorAll('.service-row');
  if (!panel || !rows.length) return;

  const video = panel.querySelector('video');

  rows.forEach(row => {
    const src = row.dataset.video;
    row.addEventListener('mouseenter', () => {
      if (video && src) {
        video.src = src;
        video.play();
      }
      panel.classList.add('is-visible');
    });
    row.addEventListener('mouseleave', () => {
      panel.classList.remove('is-visible');
      if (video) video.pause();
    });
  });
}
