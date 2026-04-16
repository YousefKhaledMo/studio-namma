import gsap from 'gsap';

const curtain = document.getElementById('page-curtain');

export function pageLeave(onComplete) {
  if (!curtain) {
    if (onComplete) onComplete();
    return;
  }
  gsap.to(curtain, {
    scaleY: 1,
    transformOrigin: 'bottom center',
    duration: 0.65,
    ease: 'expo.in',
    onComplete
  });
}

export function pageEnter() {
  if (!curtain) return;
  gsap.fromTo(curtain,
    { scaleY: 1, transformOrigin: 'top center' },
    { scaleY: 0, duration: 0.75, ease: 'expo.out', delay: 0.1 }
  );
}

document.querySelectorAll('a[href^="/"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === window.location.pathname) return;
    e.preventDefault();
    pageLeave(() => { window.location.href = href; });
  });
});
