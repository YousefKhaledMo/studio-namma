import gsap from 'gsap';

export function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const navItems = navbar.querySelectorAll('.nav-label');
  gsap.fromTo(navItems,
    { y: -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power3.out',
      delay: 1.2
    }
  );
}
