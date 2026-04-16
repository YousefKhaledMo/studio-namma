import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.mjs';
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/src/index.js';
import ScrollTrigger from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/src/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.4,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
