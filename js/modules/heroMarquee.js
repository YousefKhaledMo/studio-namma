export function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;

  const content = track.innerHTML;
  track.innerHTML = content + content + content;

  let speed = 0.5;
  let current = 0;
  let paused = false;

  track.addEventListener('mouseenter', () => paused = true);
  track.addEventListener('mouseleave', () => paused = false);

  function animate() {
    if (!paused) {
      current -= speed;
      const half = track.scrollWidth / 3;
      if (Math.abs(current) >= half) current = 0;
      track.style.transform = `translateX(${current}px)`;
    }
    requestAnimationFrame(animate);
  }
  animate();
}
