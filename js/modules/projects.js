import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProjects() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  gsap.fromTo(cards,
    { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
    {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      stagger: 0.12,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 75%',
      }
    }
  );
}
