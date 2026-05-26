# Changelog - Aditya Graphics Website Reorganization

All notable changes to the Aditya Graphics project layout and architecture are recorded below.

## [1.0.0] - 2026-05-24

### Reorganized
- **Folder Directory Structure**: Converted the monolithic single-page codebase into a professional structure (root files, `assets/`, `css/`, `js/`, `sections/`, `docs/`).
- **Inline Styles Decoupled**: Extracted all inline styles from `index.html` and `script.js` and placed them into CSS classes inside `/css/` files.
- **Inline Event Handlers Decoupled**: Moved inline JavaScript handlers (e.g. `onclick` in tags) to clean script bindings.

### Added
- **Dynamic Component Loader**: Created `js/loader.js` to load shared elements (navbar, footer, hero, overlays, floaters) dynamically on all pages.
- **Dedicated Subpages**: Added SEO-ready subpages `about.html`, `services.html`, and `contact.html` reusing the shared header and footer templates.
- **Dynamic Testimonial Module**: Testimonials are loaded dynamically from `assets/data/testimonials.json` with star rating render engines.
- **Asset Data Segregation**: Pricing database records and portfolio design items are extracted into `assets/data/products.json` and `assets/data/portfolio.json`.
- **Premium Animations**: Added a custom IntersectionObserver scroll animation module in `js/animations.js` and custom hover and glowing states in `css/animations.css`.
- **Developer Documentation**: Wrote comprehensive guides in `docs/README.md`.
