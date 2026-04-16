export function initCursor() {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;
  
  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  const LERP = 0.12;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => dot.classList.remove('is-hovering'));
  });

  window.addEventListener('mousedown', () => dot.classList.add('is-clicking'));
  window.addEventListener('mouseup', () => dot.classList.remove('is-clicking'));

  function loop() {
    dotX += (mouseX - dotX) * LERP;
    dotY += (mouseY - dotY) * LERP;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';
    requestAnimationFrame(loop);
  }
  loop();
}
