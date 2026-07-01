# First Base Camp Production Website

Ready-to-deploy static site. Serve this repository root as the web root. `index.html` is the entry point.

## Deploy

Upload the contents of this repository to any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web server. No build step is required.

## What's included

| File | Page |
|---|---|
| `index.html` | Homepage |
| `about.html` | About / Team |
| `domains.html` | Domains mosaic |
| `domain-detail.html?id=` | Per-domain detail |
| `ventures.html` | Ventures listing |
| `venture-detail.html` | Venture detail template |
| `services.html` | Services listing with contact forms |
| `service-detail.html` | Service detail template |
| `insights.html` | Insights / blog listing |
| `insight-detail.html?slug=` | Article reader |
| `ascent/index.html` | ASCENT academy mini-site |
| `shared.js` | Shared nav, footer, and design tokens |
| `insights-data.js` | All 12 blog posts |
| `tweaks-panel.jsx` | Design tweaks panel |
| `brand/` | Logos and favicons |
| `uploads/` | Compressed site images |

## Image Notes

The latest production build uses compressed stock and mountain photos in `uploads/`, including:

- `chris-holgersson.jpg`
- `john-towner.jpg`
- `gerrit-vermeulen.jpg`
- `david-marcu.jpg`
- `arto-marttinen.jpg`
- `connor-mcsheffrey.jpg`
- `claus-grunstaudl.jpg`
- `boris-stefanik.jpg`
- `anders-jilden.jpg`
- `photo_1.jpg`, `photo_6.jpg`, `photo_9.jpg`
- `route-map-ascent.png`

## Before Going Live

- Wire contact forms to a real endpoint in `index.html`, `services.html`, and `ascent/index.html`.
- Wire the ASCENT enrollment form to a real endpoint.
- Set real DNS for `firstbasecamp.com`.
- Update ASCENT back-links from `../index.html` to `https://www.firstbasecamp.com` if serving ASCENT separately on a CDN.
- Replace placeholder partner names with real ones.
- Add finalized venture detail pages for Pistac.io, AltisNexsys, and Beaulogica when ready.

## Production Babel Note

The site currently uses `@babel/standalone` for in-browser JSX transpilation. This works for a static launch but adds first-load parse cost. For better performance, pre-compile the JSX or migrate the site into a framework build later.

## Contacts

- Toronto: `info@firstbasecamp.com`, 99 Yorkville Ave, Unit 200, Toronto, ON M5R 3K5
- Dubai: `mena@firstbasecamp.com`, 11th Floor, JAFZA One, PO Box 61317, Dubai, UAE
# 1st-Base-Camp
