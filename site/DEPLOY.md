# Vercel Deployment Guide

## Prerequisites

- A [Vercel](https://vercel.com) account
- This repository connected to Vercel

## Quick Setup

### 1. Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository (`DF-wu/DF-wu`)
3. In **Configure Project**:
   - **Framework Preset**: Astro
   - **Root Directory**: `site`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Set the **Git Branch** to `vercel-site`
5. Click **Deploy**

### 2. Custom Domain (Optional)

1. Go to your project's **Settings > Domains**
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## Local Development

```bash
cd site
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`. Pages available:

- `/` — Gallery (all 5 styles)
- `/noir` — Dark refined
- `/linen` — Warm editorial
- `/glass` — Glassmorphism
- `/ink` — High contrast bold
- `/dusk` — Cosmic gradient

## Updating Content

All profile data lives in **one file**: `site/src/data/profile.ts`

Edit this file to update:
- Name, title, tagline
- Social links
- Skills and tech stack
- Featured projects
- Open source contributions
- Stats and metrics

All 5 pages automatically reflect your changes.

## Building for Production

```bash
cd site
npm run build
npm run preview  # Preview the build locally
```

## Project Structure

```
site/
├── src/
│   ├── data/profile.ts      # All your content (edit this)
│   ├── layouts/Base.astro    # Shared HTML head
│   ├── pages/                # Each page = one style
│   │   ├── index.astro       # Gallery selector
│   │   ├── noir.astro
│   │   ├── linen.astro
│   │   ├── glass.astro
│   │   ├── ink.astro
│   │   └── dusk.astro
│   └── styles/               # Each style's CSS
│       ├── global.css
│       ├── noir.css
│       ├── linen.css
│       ├── glass.css
│       ├── ink.css
│       └── dusk.css
├── astro.config.mjs
└── package.json
```

## Notes

- **GitHub Pages** (`docs/` on master) is unaffected — it continues to serve independently
- This branch (`vercel-site`) is only for the Vercel deployment
- Astro outputs zero client-side JavaScript by default — pages are pure HTML + CSS
- All pages are fully responsive (mobile, tablet, desktop)
