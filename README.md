<div align="center">

# Hani Murtaja — Portfolio

A premium, production-ready personal portfolio for a **Backend Software Engineer**, built as a
**Laravel 12 API + Vue 3 single-page application**.

Dark mode · Glassmorphism · GSAP/AOS animations · Particle background · Cursor glow · Animated timeline · Fully responsive · SEO-ready

**Laravel 12 · PHP 8.3+ · Vue 3 · TypeScript · Vite · TailwindCSS v4 · Pinia · Vue Router**

</div>

---

## ✨ Features

- **Single-page experience** — Hero, About, Skills, Services, Featured Projects, Experience timeline, Contact and Footer.
- **Modern design system** — dark theme, glassmorphism, animated gradient background, floating blobs, mouse parallax and a canvas particle field.
- **Motion** — typing effect, animated counters, scroll-reveal (AOS + IntersectionObserver), 3D card tilt, glowing buttons, cursor glow, back-to-top with scroll progress.
- **Working contact form** — Laravel REST API with validation, honeypot spam protection, database persistence, an admin notification email and a success animation.
- **Bonus** — theme toggle, project filtering, sticky navbar with active-section highlighting, mobile menu, keyboard/ARIA accessible, `prefers-reduced-motion` aware.
- **SEO** — meta tags, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml` and `robots.txt`.
- **Performance** — code splitting, tree-shaken icons, lazy animations, gzipped bundle ≈ 80 KB.

## 🧱 Tech Stack

| Layer      | Tools |
|------------|-------|
| Backend    | PHP 8.3+, Laravel 12, REST API, SQLite (default) / MySQL / PostgreSQL |
| Frontend   | Vue 3 (Composition API), TypeScript, Vite, Pinia, Vue Router |
| Styling    | TailwindCSS v4, custom design tokens |
| Animation  | GSAP, AOS, CSS keyframes, Canvas |
| Icons      | Lucide, Heroicons |
| Font       | Inter |

## 🚀 Getting Started

### Prerequisites

- PHP **8.3+**, Composer
- Node **18+**, npm

### Installation

```bash
# 1. Install dependencies
composer install
npm install

# 2. Environment
cp .env.example .env
php artisan key:generate

# 3. Database (SQLite is used by default)
touch database/database.sqlite
php artisan migrate

# 4. Build front-end assets (or run the dev server below)
npm run build
```

### Development

Run the Laravel server and Vite dev server together:

```bash
# Terminal 1 — API + app
php artisan serve

# Terminal 2 — hot-reloading assets
npm run dev
```

Then open **http://127.0.0.1:8000**.

## 🗂️ Project Structure

```
app/
├── Http/
│   ├── Controllers/Api/ContactController.php   # Contact endpoint
│   └── Requests/StoreContactRequest.php        # Validation + honeypot
├── Mail/ContactMessageMail.php                 # Admin notification
└── Models/ContactMessage.php

resources/
├── views/
│   ├── app.blade.php                           # SPA entry + SEO head
│   └── mail/contact-message.blade.php
├── css/app.css                                 # Design system
└── js/
    ├── main.ts                                 # App bootstrap (Pinia, Router, AOS)
    ├── App.vue                                 # Shell: nav, effects, footer
    ├── router/  stores/  data/                 # Routing, Pinia, content source
    ├── composables/                            # Reusable logic (typewriter, tilt, count-up…)
    ├── views/HomeView.vue
    └── components/{layout,sections,effects,ui}/

routes/
├── web.php                                     # SPA catch-all
└── api.php                                     # POST /api/contact
```

## ✏️ Personalising

Almost all content lives in one file — **`resources/js/data/portfolio.ts`** (bio, skills, services,
projects, experience, social links). Edit it and everything updates.

- **Profile photo** — replace `public/images/profile.svg` (or drop a `profile.jpg` and update the
  `src` in `resources/js/components/sections/HeroSection.vue`). A gradient monogram is shown if the
  image fails to load.
- **Résumé** — replace `public/resume/Hani-Murtaja-Resume.pdf`.
- **OG image** — replace `public/images/og-image.svg` with a 1200×630 PNG for best social previews.
- **Site URL** — set `APP_URL` in `.env` (used by canonical, OG and JSON-LD tags).

## 📧 Contact Form & Email

The form posts to `POST /api/contact`, is validated, stored in the `contact_messages` table and
triggers an admin notification email.

- `MAIL_MAILER=log` (default) writes emails to `storage/logs/laravel.log` — great for local testing.
- Set real SMTP credentials and `MAIL_CONTACT_RECIPIENT` in `.env` for production delivery.

## ✅ Testing

```bash
php artisan test        # Feature tests (contact API, validation, honeypot)
npm run type-check      # vue-tsc type checking
```

## 📦 Deployment

1. Set production env: `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://your-domain`, mail credentials.
2. Install & build:
   ```bash
   composer install --no-dev --optimize-autoloader
   npm ci && npm run build
   php artisan migrate --force
   php artisan config:cache route:cache view:cache
   ```
3. Point your web server document root to `public/`.

Works on any PHP host — Forge, Vapor, DigitalOcean, Fly.io, or a plain VPS with Nginx/Apache.

## 📄 License

Personal portfolio © Hani Murtaja. Feel free to draw inspiration from the code.
