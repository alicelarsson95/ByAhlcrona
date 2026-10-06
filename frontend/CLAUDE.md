# ByAhlcrona

Webbshop + portfolio för konstnären Filippa Ahlcrona. Mitt (Alice) portfolioprojekt som fullstackutvecklare.

## Struktur
- `frontend/` – React 19 + Vite + React Router 7, CSS Modules (`*.module.css`), globala variabler i `src/styles/variables.css`
- `backend/` – Express + Nodemailer, just nu bara kontaktformuläret (`POST /api/contact`)

## Kommandon
- Frontend: `cd frontend && npm install && npm run dev` (port 5173), `npm run lint`, `npm run build`
- Backend: `cd backend && npm install && npm run dev` (port 5000). Kräver `backend/.env`, se `.env.example`

## Hur det hänger ihop
- `pages/Home.jsx` är en one-pager: Navbar, Hero, Murals, Portfolio ("More work"), About, Contact
- Verk och väggmålningar ligger i `src/data/artworks.js` och `src/data/murals.js`
- Routes: bara `/`
- **Shoppen är pausad (okt 2026)**: urkopplad från App, Home och Navbar, men filerna finns kvar för att kunna återinföras: `components/Shop/`, `components/Cart/`, `context/CartContext.jsx`, `pages/ShopPage.jsx`, `pages/ProductDetail.jsx`, `data/products.js` (samt `.cartBtn`/`.badge` i `Navbar.module.css`)
- Portfoliobilder ligger i `frontend/src/assets/portfolio/`

## Känt som inte är klart
- Checkout-knappen gör ingenting ännu
- Kontaktformuläret anropar `http://localhost:5000` hårdkodat
- Kontaktuppgifter (telefon m.m.) är platshållare

## Hur jag vill jobba
- Sidan är på engelska, men prata svenska med mig
- Jag har varit borta från koden ett tag: förklara kort vad du ändrar och varför
- Små steg. Föreslå en plan innan större ändringar
- Behåll befintlig stil: funktionskomponenter, CSS Modules, inga nya UI-bibliotek utan att fråga
