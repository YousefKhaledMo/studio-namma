import gsap from 'gsap';

export function initMenu() {
  const overlay = document.getElementById('menu-overlay');
  const links = document.querySelectorAll('.menu-nav-link');
  const thumb = document.getElementById('menu-thumb');
  const thumbImg = thumb?.querySelector('img');
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('menu-close');
  if (!overlay || !menuBtn) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    overlay.classList.add('is-open');
    gsap.fromTo(overlay,
      { y: '100%' },
      { y: '0%', duration: 0.85, ease: 'expo.out' }
    );
    if (links.length) {
      gsap.fromTo(links,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.75,
          ease: 'power3.out',
          delay: 0.25
        }
      );
    }
  }

  function closeMenu() {
    isOpen = false;
    gsap.to(links, { opacity: 0, y: -20, stagger: 0.04, duration: 0.4, ease: 'power3.in' });
    gsap.to(overlay, {
      y: '100%',
      duration: 0.75,
      ease: 'expo.in',
      delay: 0.15,
      onComplete: () => overlay.classList.remove('is-open')
    });
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  if (thumb && thumbImg) {
    window.addEventListener('mousemove', e => {
      gsap.to(thumb, { x: e.clientX + 20, y: e.clientY - 70, duration: 0.6, ease: 'power2.out' });
    });

    links.forEach(link => {
      const src = link.dataset.thumb;
      link.addEventListener('mouseenter', () => {
        thumbImg.src = src;
        thumb.classList.add('is-visible');
        links.forEach(l => {
          if (l !== link) gsap.to(l, { opacity: 0.3, duration: 0.25 });
        });
      });
      link.addEventListener('mouseleave', () => {
        thumb.classList.remove('is-visible');
        links.forEach(l => gsap.to(l, { opacity: 1, duration: 0.25 }));
      });
    });
  }
}
