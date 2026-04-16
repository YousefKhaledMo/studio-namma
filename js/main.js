// Studio Namma - All JS modules combined

document.addEventListener('DOMContentLoaded', () => {
  // Cursor
  (function initCursor() {
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
  })();

  // Theme
  (function initTheme() {
    const btn = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    if (!btn || !label) return;

    function setTheme(dark) {
      document.documentElement.classList.toggle('light-mode', !dark);
      label.textContent = dark ? 'LIGHT MODE' : 'DARK MODE';
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    const saved = localStorage.getItem('theme');
    setTheme(saved !== 'light');

    btn.addEventListener('click', () => {
      setTheme(document.documentElement.classList.contains('light-mode'));
    });
  })();

  // Nav
  (function initNav() {
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
  })();

  // Menu
  (function initMenu() {
    const overlay = document.getElementById('menu-overlay');
    const links = document.querySelectorAll('.menu-nav-link');
    const thumb = document.getElementById('menu-thumb');
    const thumbImg = thumb?.querySelector('img');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('menu-close');
    if (!overlay || !menuBtn) return;

    function openMenu() {
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
          thumbImg.src = src || 'https://picsum.photos/220/140?random=99';
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
  })();

  // Hero
  (function initHero() {
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
  })();

  // Marquee
  (function initMarquee() {
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
  })();

  // Clock
  (function initClock() {
    const cities = [
      { label: 'Paris, France', tz: 'Europe/Paris' },
      { label: 'Los Angeles, CA', tz: 'America/Los_Angeles' },
      { label: 'Barcelona, Spain', tz: 'Europe/Madrid' },
      { label: 'Hong Kong, China', tz: 'Asia/Hong_Kong' },
    ];

    const container = document.getElementById('world-clocks');
    if (!container) return;

    cities.forEach(c => {
      const row = document.createElement('div');
      row.className = 'clock-row';
      row.innerHTML = `<span class="clock-city">${c.label}</span>
                       <span class="clock-time" data-tz="${c.tz}"></span>`;
      container.appendChild(row);
    });

    function tick() {
      document.querySelectorAll('.clock-time').forEach(el => {
        el.textContent = new Date().toLocaleTimeString('en-US', {
          timeZone: el.dataset.tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      });
    }
    tick();
    setInterval(tick, 1000);
  })();

  // Projects
  (function initProjects() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    gsap.registerPlugin(ScrollTrigger);

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
  })();

  // Services
  (function initServices() {
    const panel = document.getElementById('service-video-panel');
    const rows = document.querySelectorAll('.service-row');
    if (!panel || !rows.length) return;

    const video = panel.querySelector('video');

    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        panel.classList.add('is-visible');
      });
      row.addEventListener('mouseleave', () => {
        panel.classList.remove('is-visible');
      });
    });
  })();

  // Page transitions
  (function initPageTransitions() {
    const curtain = document.getElementById('page-curtain');
    if (!curtain) return;

    gsap.fromTo(curtain,
      { scaleY: 1, transformOrigin: 'top center' },
      { scaleY: 0, duration: 0.75, ease: 'expo.out', delay: 0.1 }
    );

    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === window.location.pathname || href === '#') return;
        e.preventDefault();
        gsap.to(curtain, {
          scaleY: 1,
          transformOrigin: 'bottom center',
          duration: 0.65,
          ease: 'expo.in',
          onComplete: () => { window.location.href = href; }
        });
      });
    });
  })();

  // Lenis smooth scroll
  (function initLenis() {
    if (typeof Lenis === 'undefined') return;
    
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  })();
});
