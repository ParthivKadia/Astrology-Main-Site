# Stellara — Astrologer Booking Website (Template)

A minimal 3-page starter for an astrology booking site, built with
**React + Vite + TypeScript + Tailwind CSS**.

## Pages

- `/` — Home (hero + short feature section)
- `/about` — About the astrologer
- `/booking` — Booking form (front-end only, no backend wired up)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Theming — edit one file

All colors, fonts, corner radius, and layout width live in:

```
src/styles/theme.css
```

Everything else in the project (Tailwind classes, components) reads from
these CSS variables, so you can restyle the entire site by editing values
in that one file — no need to touch component code.

Examples:

```css
--color-background: #fbf6ee;   /* page background */
--color-navy: #1a2b4c;         /* headings / primary text */
--color-gold: #c8933d;         /* primary buttons & links */
--font-heading: "Playfair Display", serif;
--font-body: "Inter", sans-serif;
--radius-card: 16px;
--radius-button: 999px;
```

If you switch to Google Fonts (e.g. Playfair Display / Inter), add the
`<link>` tags to `index.html`'s `<head>`, then update `--font-heading`
and `--font-body` in `theme.css` to match.

## Structure

```
src/
  components/     Navbar, Footer, decorative ZodiacMotif
  pages/          Home.tsx, About.tsx, Booking.tsx
  styles/
    theme.css     <- edit this to restyle the site
  App.tsx         routes
  main.tsx        entry point
  index.css       Tailwind + base styles (reads from theme.css)
```

## Responsiveness

The layout uses Tailwind's responsive utilities throughout (mobile nav
menu, stacking grids, fluid type sizes) and has been built mobile-first,
so it should adapt cleanly across phone, tablet, and desktop widths.
