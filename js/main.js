import { initLenis, gsap } from './modules/lenis.js';
import { initCursor } from './modules/cursor.js';
import { initTheme } from './modules/theme.js';
import { initNav } from './modules/nav.js';
import { initMenu } from './modules/menu.js';
import { initHero } from './modules/hero.js';
import { initMarquee } from './modules/heroMarquee.js';
import { initClock } from './modules/clock.js';
import { initProjects } from './modules/projects.js';
import { initServices } from './modules/services.js';
import { pageEnter } from './modules/pageTransitions.js';

window.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initCursor();
  initTheme();
  initNav();
  initMenu();
  initHero();
  initMarquee();
  initClock();
  initProjects();
  initServices();
  pageEnter();
});
