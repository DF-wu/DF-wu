# Vercel Deployment Guide

## What This Is

A personal portfolio site for ChuFei Wu (DF Wu), built with Astro. The root URL (`/`) renders one **default style** chosen at build time via an environment variable, while every style stays browsable on the same deployment:

- `/` — the deployed default style (set by `PORTFOLIO_STYLE`, falls back to `atlas`)
- `/styles/` — a gallery page comparing all ten design variants
- `/styles/<key>/` — a live preview of each variant (e.g. `/styles/noir/`)
- `/api/*.json` — static JSON endpoints (profile, projects, metrics, styles, search, feed, OpenAPI)

Every page also ships a floating dock (Style / Search / API / Tone / Top) — the **Style** button opens an in-page switcher listing all variants.

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

Alternatively, the repo-root `vercel.json` already builds from the repo root with `cd site && npm install && npm run build`.

### 2. Set the Default Style (Optional)

Under **Settings > Environment Variables**, add:

| Name | Value | Scope |
|:---|:---|:---|
| `PORTFOLIO_STYLE` | one of `noir`, `linen`, `glass`, `ink`, `dusk`, `atlas`, `signal`, `forge`, `observatory`, `archive` | Production (+ Preview + Development if desired) |

Default (if unset) is `atlas`. Invalid values fall back to `noir`.

This only controls what `/` shows — all ten variants remain reachable under `/styles/<key>/` in the same deploy.

### 3. Deploy

Click **Deploy**. Vercel builds once and serves `/` as your chosen style plus the full style gallery.

### 4. Custom Domain (Optional)

**Settings > Domains** → add your domain → follow Vercel's DNS instructions.

## Changing the Default Style Later

1. Update `PORTFOLIO_STYLE` in Vercel's environment variables
2. Trigger a redeploy (Deployments → `...` → Redeploy)

No code changes needed. To just *look at* another style, no redeploy is needed at all — open `/styles/` and pick one.

## The 10 Styles

| Style | Name | Thesis |
|:---|:---|:---|
| `noir` | Noir Systems Dossier | High-contrast operational dossier for backend/platform credibility. |
| `linen` | Linen Editorial Portfolio | Quiet editorial page for maintainability and human-readable engineering. |
| `glass` | Glass Runtime Surface | Translucent runtime dashboard with live-link exploration. |
| `ink` | Ink Specification Sheet | Brutal specification sheet with strong information hierarchy. |
| `dusk` | Dusk Reliability Narrative | Dark narrative surface for systems that keep working after the demo. |
| `atlas` | Atlas Evidence Map | Map-like editorial layout routed through research, delivery, operations. |
| `signal` | Signal Operations Desk | Command-center portfolio focused on observability and reliability signals. |
| `forge` | Forge Engineering Workshop | Workshop-style page showing how research ideas become deployable systems. |
| `observatory` | Observatory Analytics Lab | Data-rich analytics page for publications, contributions, and role fit. |
| `archive` | Archive Knowledge Journal | Premium blog/editorial archive for long-form engineering narrative. |

All ten render the same content (hero, about, education, publications, research highlights, stats, stack, projects, experience, open source, role fit, ramp-up, interests, contact) plus the shared intelligence section. Only the visual treatment differs. Full design rationale lives in `designs/`.

## Local Development

```bash
cd site
npm install

# Choose a default style for local dev (optional — atlas otherwise)
PORTFOLIO_STYLE=noir npm run dev
```

Dev server starts at `http://localhost:4321`. Visit `/styles/` to browse every variant regardless of the env var.

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

Shared narrative content (insight articles, design variant metadata, API catalog, timeline) lives in `site/src/data/portfolio-content.ts`. All ten styles automatically reflect changes to either file.

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
PORTFOLIO_STYLE=atlas npm run build
npm run preview    # Preview the built site at http://localhost:4321
```

## Project Structure

```
site/
├── astro.config.mjs
├── package.json
├── DEPLOY.md                   # This file
├── public/
│   ├── favicon.svg
│   ├── scripts/
│   │   └── portfolio-effects.js   # Dock, dialogs, command palette, progress bar
│   └── styles/                 # Style CSS served as static assets
│       ├── global.css          # Shared shell (dock, dialogs, gallery, intel section)
│       └── <style>.css         # One per variant, each @imports global.css
└── src/
    ├── data/
    │   ├── profile.ts          # ALL profile content (edit this to update the page)
    │   └── portfolio-content.ts # Variants metadata, insights, API catalog, timeline
    ├── layouts/
    │   └── Base.astro          # Shared <html>/<head> wrapper + dock + dialogs
    ├── components/
    │   ├── <Style>Portfolio.astro   # One file per style — structure + markup
    │   ├── StyleRenderer.astro      # Maps a style key to its component
    │   └── PortfolioIntelligence.astro
    └── pages/
        ├── index.astro         # Reads PORTFOLIO_STYLE, renders the default style
        ├── styles/
        │   ├── index.astro     # Style gallery (/styles/)
        │   └── [style].astro   # Per-style live previews (/styles/<key>/)
        └── api/                # Static JSON endpoints
```

## How the Env Variable Works

1. At build time, `resolveStyle()` in `src/data/profile.ts` reads `import.meta.env.PORTFOLIO_STYLE`.
2. `src/pages/index.astro` renders only the matching component at `/`.
3. `src/pages/styles/[style].astro` statically generates all ten previews regardless of the env var.
4. Each page links its matching CSS file (`/styles/<style>.css`), which `@import`s the shared `global.css`.

## Notes

- **GitHub Pages** (`docs/` on master) is independent and unaffected — it continues to serve the old landing page.
- Client-side JavaScript is limited to one small vanilla script (`portfolio-effects.js`) powering the dock, dialogs, and command palette; it degrades gracefully.
- All pages are fully responsive (mobile, tablet, desktop) and honor `prefers-reduced-motion`.
