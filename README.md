# By Ahlcrona

A portfolio website for the Malmö-based artist **Filippa Ahlcrona**, showcasing her murals and illustrations. I designed and built it for a friend, and it's also my own portfolio project as a fullstack developer.

**Live site:** _coming soon_ <!-- TODO: add link -->

<!-- TODO: add screenshots -->
| Desktop | Mobile |
|---|---|
| _screenshot_ | _screenshot_ |

## Tech stack

- **Frontend:** React 19, Vite, React Router 7, CSS Modules
- **Backend:** Node.js, Express, Nodemailer (contact form)
- **Tooling:** ESLint, sharp (image optimization)

## What I built / challenges

**Image optimization: 117 MB → 4.2 MB**
The original artwork files were 1.5–17 MB each. I wrote a small Node script (`frontend/scripts/optimize-images.js`) using `sharp` that converts them to WebP, max 1600px wide. The whole gallery went from 117 MB to 4.2 MB with no visible loss in quality.

**`useFlowerI`: a custom font glyph with a safe fallback**
The heading font has a special flower-shaped "i" stored in a private Unicode slot (U+F006). If the font hasn't loaded, that slot would render as an empty box. The `useFlowerI` hook waits for the font with `document.fonts.load()` and only then swaps in the flower; until then, it shows a normal "i". Headings use `aria-label` so screen readers read "Filippa" rather than a private-use character.

**Content as data**
Artworks and murals live in `src/data/artworks.js` and `src/data/murals.js` (title, year, medium, location, images…). The components just map over the data, so adding new work means editing one file, not the JSX.

**Anchor links that land exactly under the navbar**
Clicking a menu link left a strip of the previous section visible, because `scroll-margin-top` (80px) didn't match the fixed navbar's real height (~59px). I introduced one CSS variable, `--nav-height`, that sets both the navbar height and `scroll-margin-top`, with a smaller value on mobile. I verified the result with a headless-browser script that clicks every link at desktop and mobile sizes and measures where each section lands.

## Run it locally

Requires Node.js 20.19+ or 22.12+.

**Frontend** (http://localhost:5173)

```bash
cd frontend
npm install
npm run dev
```

**Backend** (http://localhost:5000, only needed for the contact form)

```bash
cd backend
npm install
cp .env.example .env   # add your Gmail address and app password
npm run dev
```

## Note on fonts

The heading font, **Tropi Land**, is used under a demo license and is **not included in this repository**. Without it, headings fall back to [Shrikhand](https://fonts.google.com/specimen/Shrikhand) from Google Fonts, and the flower "i" is shown as a regular "i".

## Status

The site is a work in progress. An earlier web shop (product pages and cart) is paused but still in the codebase, so it can be brought back later.
