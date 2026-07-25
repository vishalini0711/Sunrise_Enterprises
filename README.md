# Sunrise Enterprises — Corporate Website

A production-ready React 19 + Vite + Tailwind CSS v4 corporate website for
**Sunrise Enterprises** (BIS Approved Distribution Transformers), built with
Framer Motion, React Icons, and Swiper.js.

All copy on the site is sourced from the company's catalogue — no invented
facts, clients, or claims.

## Tech stack

- React 19
- Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, CSS-first `@theme` tokens)
- Framer Motion (scroll reveals, hero animation, modal transitions)
- React Icons (Heroicons v1/v2 + Font Awesome social icons)
- Swiper.js (repair-process carousel)

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Folder structure

```
sunrise-enterprises/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                # design tokens (@theme), base styles, utilities
    ├── assets/                  # drop real photos here
    ├── hooks/
    │   ├── useActiveSection.js  # scroll-spy for navbar highlighting
    │   └── useCountUp.js        # animated hero stat counters
    ├── utils/
    │   └── data.js              # ALL catalogue content lives here
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── Products.jsx
    │   ├── ProductCard.jsx
    │   ├── Facility.jsx
    │   ├── Quality.jsx
    │   ├── Industries.jsx
    │   ├── Clients.jsx          # firm credentials/trust (see note below)
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── SectionHeading.jsx   # shared heading component
    │   └── WaveDivider.jsx      # signature animated sine-wave motif
    └── pages/
        └── Home.jsx              # assembles all sections
```

## Design system

Colors and fonts are defined once, in `src/index.css`, using Tailwind v4's
CSS-first `@theme` block — change a value there and it updates everywhere
(`bg-primary`, `text-accent`, `font-display`, etc. are generated
automatically from these tokens):

| Token | Value | Used for |
|---|---|---|
| `--color-primary` | `#0057B8` | Brand blue |
| `--color-primary-dark` | `#003D82` | Hover states, gradients |
| `--color-navy` | `#001B3A` | Dark section backgrounds |
| `--color-accent` | `#00C2FF` | Cyan accent, CTAs on dark bg |
| `--color-mist` | `#F2F7FC` | Light section backgrounds |
| `--font-display` | Space Grotesk | Headings |
| `--font-body` | Inter | Body copy |

The recurring **animated sine-wave divider** (`WaveDivider.jsx`) is the
site's signature visual motif, tying back to AC power/transformers — used
between the hero, quality section, and footer instead of a generic shape.

## Full-width layout

There is no boxed, centered container anywhere on the site. Every section
uses the `.edge` utility (defined in `src/index.css`) — fluid left/right
padding via `clamp()`, no `max-width` cap — so backgrounds and content both
run edge-to-edge at any viewport size, in the style of Siemens/ABB/L&T
corporate sites rather than a boxed 1200px-column template.

## Imagery

All product, facility, industry and hero photography is real, free-to-use
Unsplash photography (Unsplash License — free for commercial use, no
attribution required), centralized in the `images` object at the top of
`src/utils/data.js`. Swap any URL there for your own photography at any
time — every component reads from that single source.

## Content notes

- **Clients section**: the source catalogue does not list any named
  clients or client logos, so `Clients.jsx` presents the firm's verifiable
  registration credentials (GSTIN, Udyog Aadhaar, registration number)
  instead of fabricated logos. Swap in real client logos there once you
  have permission to display them.
- **Map & QR code**: `Contact.jsx` has placeholder blocks — replace with a
  real embedded Google Map iframe and a generated QR code image once
  available.
- **Contact form**: currently simulates a successful submission client-side.
  Wire it to your email service or backend of choice (e.g. Formspree,
  EmailJS, or a custom API route) inside `handleSubmit` in `Contact.jsx`.

## Print catalogue

A matching A4 print catalogue (cover, About, Vision & Mission, Products,
Manufacturing Facility, Quality & Certifications, Industries Served, Why
Choose Us, Contact, back cover) is included as `sunrise-catalogue.pdf`
alongside the source `catalogue.html`, styled with the same color and
type system as the website. The catalogue's QR code is a placeholder
graphic — generate a real one (e.g. via any free QR generator, pointed at
your site or a vCard) and drop it into `catalogue.html` before printing.

## Responsive behavior

- Sticky, transparent-to-glass navbar with a slide-down mobile menu
- Fluid section padding (`clamp()`-based) and grid breakpoints at
  `sm` / `lg` throughout
- Repair-process cards use Swiper with responsive `slidesPerView`
  (1.15 on mobile → 4 on desktop)
