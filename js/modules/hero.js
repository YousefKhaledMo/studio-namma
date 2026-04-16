import gsap from 'gsap';

export function initHero() {
  const label = document.querySelector('.hero-label');
  const lines = document.querySelectorAll('.hero-line');
  const scrollHint = document.querySelector('.hero-scroll');

  const tl = gsap.timeline({ delay: 0.2 });

  if (label) {
    tl.fromTo(label,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }

  if (lines.length) {
    tl.fromTo(lines,
      { y: '105%' },
      { y: '0%', duration: 0.9, stagger: 0.1, ease: 'expo.out' },
      '-=0.3'
    );
  }

  if (scrollHint) {
    gsap.to(scrollHint, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'sine.inOut',
      delay: 2
    });
  }
}
