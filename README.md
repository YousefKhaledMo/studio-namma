# Studio Namma

A modular, production-grade creative studio website built with vanilla HTML/CSS/JS, GSAP, and Lenis.

## Features

- Custom magnetic cursor with lerp-based smooth following
- GSAP animations with ScrollTrigger integration
- Lenis smooth scroll
- Dark/Light mode toggle with localStorage persistence
- Full-screen menu with hover thumbnail effects
- Hero section with cinematic line-reveal animations
- Scrolling marquee ticker
- Live world clocks
- Project cards with hover reveal effects
- Services accordion with floating video panel
- Page transitions with curtain animation

## Stack

- Vanilla HTML/CSS/JS (ES Modules)
- GSAP 3.x + ScrollTrigger
- Lenis smooth scroll
- SplitType (optional, for advanced text splitting)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

## File Structure

```
/
├── index.html
├── pages/
│   ├── work.html
│   ├── services.html
│   └── approach.html
├── styles/
│   ├── main.css
│   ├── _tokens.css
│   ├── _reset.css
│   ├── _typography.css
│   ├── _cursor.css
│   ├── _nav.css
│   ├── _menu.css
│   ├── _hero.css
│   ├── _marquee.css
│   ├── _projects.css
│   ├── _services.css
│   ├── _footer.css
│   └── _utilities.css
└── js/
    ├── main.js
    └── modules/
        ├── cursor.js
        ├── lenis.js
        ├── theme.js
        ├── nav.js
        ├── menu.js
        ├── hero.js
        ├── heroMarquee.js
        ├── clock.js
        ├── projects.js
        ├── services.js
        └── pageTransitions.js
```

## License

MIT
