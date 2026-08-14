# Demo Car Website

A premium, responsive multi-page frontend for a second-hand car dealership, built with
React, Vite, Tailwind CSS, React Router and Framer-Motion-ready animations.

## Getting Started

This project was built in an offline environment, so dependencies have not been installed
or verified yet. On your own machine, with internet access:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Reusable UI pieces (Navbar, Footer, VehicleCard, FilterPanel, etc.)
  pages/          One file per route: Home, Products, Services, Gallery, Contact
  data/           All content lives here — vehicles.js, brands.js, content.js
  index.css       Design tokens, base styles, reusable utility classes
```

## Updating the Vehicle Inventory

All cars shown on the site (homepage carousel + Products page) come from a single file:

`src/data/vehicles.js`

To add a new arrival, copy an existing object in the `vehicles` array, give it a unique
`id`, and fill in the fields (brand, model, price, images, features, etc.). No UI code
needs to change — cards, filters, and the detail modal all read from this array
automatically. Set `isFeatured: true` to have a car appear in the homepage hero carousel,
and `status: 'sold'` to mark it as no longer available without deleting it.

This structure is intentionally simple so it can later be swapped for data fetched from
a database, CMS, or admin dashboard with minimal changes to the components themselves.

## Replacing Placeholder Images

All vehicle, gallery, and category images currently point to Unsplash stock photography as
placeholders. Replace the URLs in `src/data/vehicles.js`, `src/data/brands.js`, and
`src/data/content.js` with real dealership photography before launch.

## Design System

Colors, fonts, and reusable classes (`.btn-primary`, `.card-surface`, `.heading-lg`, etc.)
are defined in `tailwind.config.js` and `src/index.css` — update them there to change the
look sitewide.

## Notes for Future Development

- **Admin dashboard**: `vehicles.js` is structured so it can be replaced by an API call
  (e.g. `fetch('/api/vehicles')`) without touching the page or card components.
- **Routing**: five routes are wired up in `src/App.jsx` via `react-router-dom`.
- **No login/account system** is included, per the project brief — only inventory display.
