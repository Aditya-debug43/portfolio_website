# Aditya Graphics — Codebase Documentation

Welcome to the production-ready static website repository for **Aditya Graphics Jacquard Design Studio**.

This codebase has been organized into a professional, clean, and scalable architecture. No build frameworks (Vite, React, Next.js) are used, making the site 100% compatible with simple static hosting services like GitHub Pages, Netlify, Vercel, or shared hosting.

## Folder Architecture

```
project-root/
│
├── index.html            # Main website homepage (all segments combined)
├── about.html            # Standalone dedicated About page
├── services.html         # Standalone dedicated Services page
├── contact.html          # Standalone dedicated Contact page
├── favicon.ico           # Website favicon
│
├── assets/               # Media and static data assets
│   ├── images/           # Categorized image assets
│   │   ├── hero/         # Hero backgrounds & illustrations
│   │   ├── gallery/      # Portfolio design gallery images
│   │   ├── backgrounds/  # General site backgrounds
│   │   └── thumbnails/   # Image thumbnails
│   ├── logos/            # Client and brand logos
│   ├── icons/            # Icon graphics
│   ├── fonts/            # Custom typography files
│   ├── videos/           # Visual presentation videos
│   └── data/             # Structured data JSON assets
│       ├── products.json     # Default pricing list data
│       ├── testimonials.json # Surat weaver & client feedback quotes
│       └── portfolio.json    # Default portfolio items data
│
├── css/                  # Structured styling files
│   ├── style.css         # Core styles, color variables, layouts
│   ├── responsive.css    # Media queries for responsive layouts
│   ├── animations.css    # Keyframes, transitions, pulse and float animations
│   └── utilities.css     # Helper classes (spacing, text alignments)
│
├── js/                   # Scalable modular scripts
│   ├── loader.js         # Component loader for templates
│   ├── data-handler.js   # Local storage sync and async JSON data loading
│   ├── navigation.js     # Responsive navigation toggle and active page markers
│   ├── animations.js     # Intersection Observer scroll triggers
│   └── main.js           # Multilingual dictionary, admin overlay forms, and init
│
├── sections/             # HTML Templates (shared segments)
│   ├── navbar.html       # Responsive header and mobile slide-out menu
│   ├── footer.html       # Site footer with brand info, links, policies
│   ├── hero.html         # Hero template content
│   ├── testimonials.html # Testimonials grid placeholder template
│   ├── overlays.html     # Modals (Admin Panel, Login, Lightbox, Policy)
│   └── floaters.html     # Floating action widgets (WhatsApp and Admin gears)
│
└── docs/                 # Documentation directory
    ├── README.md         # Architecture and usage documentation
    └── changelog.md      # Record of changes made
```

---

## Technical Features

### 1. DRY Modular Component Loader (`js/loader.js`)
To keep HTML files clean, common sections (header, footer, overlays, floaters, testimonials) are placed inside `/sections/` as isolated HTML fragments. When any page loads, `loader.js` fetches these fragments using standard AJAX `fetch` calls and injects them into placeholder divs:
```html
<div id="navbar-placeholder"></div>
<div id="footer-placeholder"></div>
```
Once all fragments are fetched and injected, a custom `componentsLoaded` event is triggered, prompting `js/main.js` to bind event listeners and apply languages.

### 2. Multi-Page Synchronization
For multi-page structure, standalone pages (`about.html`, `services.html`, `contact.html`) reuse the **exact same** templates. Navigation links in `sections/navbar.html` are prefixed (e.g. `index.html#portfolio`, `services.html`) to ensure seamless transitions whether a user is scrolling on home or deep in a subpage.

### 3. Data Integration & Local Storage Caching (`js/data-handler.js`)
*   **Initial Fetch**: Pricing, Testimonials, and Portfolio designs are stored in `assets/data/`.
*   **Caching**: If the admin panel isn't set up yet, the data handler queries the JSON documents. Once modified via the Admin panel, values are cached and read from the user's `localStorage` to ensure persistence.
*   **Testimonials**: Feeds from `assets/data/testimonials.json` and renders dynamic cards with custom star ratings, roles, and comments.

### 4. Zero-Framework Multilingual Engine
All translatable DOM elements are labeled with `data-t="[translation_key]"` or `data-placeholder-t="[key]"` attributes. The translation dictionary is located in `js/main.js`. Changing language (EN, HI, GU) calls `setLang(lang)` which rewrites the text content of marked elements on the fly. Font families are automatically overridden via language-specific CSS classes in `css/style.css` (e.g. Noto Sans Gujarati is bound to `body.lang-gu`).

---

## Maintenance Guide

### How to Add a New Page
1.  Create `new-page.html` in the root folder.
2.  Include the CSS and JS assets in the `<head>` tag.
3.  Add the placeholders for shared sections:
    ```html
    <div id="navbar-placeholder"></div>
    <!-- Your Custom HTML Section with class="pt-nav" to prevent Nav overlaps -->
    <div id="footer-placeholder"></div>
    <div id="overlays-placeholder"></div>
    <div id="floaters-placeholder"></div>
    ```
4.  Add page content between the navbar and footer.

### How to Edit/Add Translations
Open `js/main.js`, locate the `T` dictionary, and append your keys to the `en`, `hi`, and `gu` sub-objects.

### How to Add a Custom Testimonial
Edit `assets/data/testimonials.json` and append a new JSON object:
```json
{
  "id": 4,
  "name": "Full Name",
  "role": "Company / Position",
  "text": "Review comment goes here...",
  "rating": 5
}
```

---

## Deployment Instructions

Since this is a fully static website, it does not require node servers or databases.

### Netlify / Vercel
1.  Drag and drop the project folder directly into the Netlify Web app dashboard, or connect your Git repository.
2.  Leave **Build command** empty.
3.  Set **Publish directory** to the root folder (or `.`).

### GitHub Pages
1.  Push the code to a GitHub repository.
2.  Go to repository **Settings** -> **Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch** and select your main branch.
