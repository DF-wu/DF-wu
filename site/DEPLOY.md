# Vercel Deployment Guide

## What This Is

A personal portfolio site for ChuFei Wu (DF Wu), built with Astro. The site has **one URL** (`/`) and renders as a single personal page — no gallery, no style selector. The visual style is chosen at **build time** via an environment variable.

## Quick Setup

### 1. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository (`DF-wu/DF-wu`)
3. **Configure Project**:
   - **Framework Preset**: Astro
   - **Root Directory**: `site`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Production Branch**: `master` (or whichever branch you deploy from)

### 2. Set the Style (Required)

Under **Settings > Environment Variables**, add:

| Name | Value | Scope |
|:---|:---|:---|
| `PORTFOLIO_STYLE` | one of `noir`, `linen`, `glass`, `ink`, `dusk` | Production (+ Preview + Development if desired) |

Default (if unset) is `noir`. Invalid values also fall back to `noir`.

### 3. Deploy

Click **Deploy**. Vercel builds once and serves `/` as your chosen style.

### 4. Custom Domain (Optional)

**Settings > Domains** → add your domain → follow Vercel's DNS instructions.

## Changing the Style Later

1. Update `PORTFOLIO_STYLE` in Vercel's environment variables
2. Trigger a redeploy (Deployments → `...` → Redeploy)

No code changes needed.

## The 5 Styles

| Style | Vibe |
|:---|:---|
| `noir` | Dark refined. Monospace accents, amber highlights, polished developer tool aesthetic. |
| `linen` | Warm editorial. Serif headings, cream tones, magazine feature article feel. |
| `glass` | Modern glassmorphism. Frosted cards, gradient backgrounds, SaaS landing page vibe. |
| `ink` | High contrast bold. Black & white with electric blue, strong geometry, content-forward. |
| `dusk` | Cosmic gradient. Teal-purple glow, ethereal spacious feel, creative technologist space. |

All 5 render the same content (hero, about, education, publications, research highlights, stats, stack, projects, experience, open source, role fit, ramp-up, interests, contact). Only the visual treatment differs.

## Local Development

```bash
cd site
npm install

# Choose a style for local dev
PORTFOLIO_STYLE=noir npm run dev
# or
PORTFOLIO_STYLE=linen npm run dev
```

Dev server starts at `http://localhost:4321`.

## Updating Content

All profile data lives in **one file**: `site/src/data/profile.ts`

Edit this file to change:
- Name, title, tagline, motto
- About paragraphs
- Education (school, degree, thesis, advisor, lab)
- Publications (title, authors, venue, year, DOI, abstract)
- Research highlights
- Skills (languages, frameworks, infrastructure, data, practices)
- Projects (5 featured)
- Experience (roles with dates)
- Open source contributions
- Role fit matrix
- 90-day plan
- Interests / beyond-code
- Social links and email

All 5 styles automatically reflect your changes.

## Adding a New Publication

In `site/src/data/profile.ts`, add an entry to the `publications` array:

```ts
publications: [
  {
    title: 'Your paper title',
    authors: ['Chu-Fei Wu', 'Co-author 1', 'Co-author 2'],
    venue: 'Conference Name Year',
    publisher: 'IEEE',
    year: 2024,
    pages: '123–130',
    doi: '10.1109/XXX',
    url: 'https://ieeexplore.ieee.org/document/XXXXXXX',
    abstract: 'One-paragraph summary.',
    tag: 'IEEE',
  },
  // ... existing
],
```

Also bump `stats.ieeepapers` if applicable.

## Building for Production Locally

```bash
cd site
PORTFOLIO_STYLE=noir npm run build
npm run preview    # Preview the built site at http://localhost:4321
```

## Project Structure

```
site/
├── astro.config.mjs
├── package.json
├── DEPLOY.md                  # This file
├── public/
│   ├── favicon.svg
│   └── styles/                # Style CSS served as static assets
│       ├── global.css
│       ├── noir.css
│       ├── linen.css
│       ├── glass.css
│       ├── ink.css
│       └── dusk.css
└── src/
    ├── data/
    │   └── profile.ts         # ALL content lives here (edit this to update the page)
    ├── layouts/
    │   └── Base.astro          # Shared <html>/<head> wrapper
    ├── components/             # One file per style — structure + markup
    │   ├── NoirPortfolio.astro
    │   ├── LinenPortfolio.astro
    │   ├── GlassPortfolio.astro
    │   ├── InkPortfolio.astro
    │   └── DuskPortfolio.astro
    └── pages/
        └── index.astro         # Reads PORTFOLIO_STYLE, renders the matching component
```

## How the Env Variable Works

1. At build time, `resolveStyle()` in `src/data/profile.ts` reads `import.meta.env.PORTFOLIO_STYLE`.
2. `src/pages/index.astro` renders only the matching component (the other 4 are tree-shaken out of the HTML).
3. The matching CSS file (`/styles/<style>.css`) is linked in the `<head>`.
4. Only one HTML file (`dist/index.html`) and one CSS file are served per deploy.

## Notes

- **GitHub Pages** (`docs/` on master) is independent and unaffected — it continues to serve the old landing page.
- Astro outputs **zero client-side JavaScript** by default. Pages are pure HTML + CSS.
- All pages are fully responsive (mobile, tablet, desktop).
- The previous `/noir`, `/linen`, `/glass`, `/ink`, `/dusk` URLs no longer exist — only `/`.
