# 04 Ink Specification Sheet

## Design Philosophy

Ink is a hard specification sheet. It avoids decorative softness and makes each claim feel inspectable. This version is closest to engineering documentation: rows, borders, strong headings, and direct proof labels.

## Technical File Map

| Layer | File / Branch | Responsibility |
| --- | --- | --- |
| Branch | `portfolio/ink` | Sets `DEFAULT_STYLE = 'ink'` |
| Component | `site/src/components/InkPortfolio.astro` | Spec-like portfolio sections |
| Stylesheet | `site/public/styles/ink.css` | Monochrome structure and blue accents |
| Shared intelligence | `PortfolioIntelligence.astro` | Data APIs and command palette |

## Functional Scope

| Feature | Implementation |
| --- | --- |
| Spec rows | Projects, contributions, roles, papers |
| Search | Keyboard command palette (`Ctrl/Cmd + K`) |
| APIs | Search, profile, project, and OpenAPI endpoints |
| Charts | Shared proof distribution and context map |
| Effects | Minimal transforms, no decorative animation |

## Spec Relationship Diagram

```mermaid
flowchart LR
  Claim[Claim] --> Evidence[Evidence row]
  Evidence --> Source[Source link]
  Source --> API[Machine-readable API]
  API --> Search[Command palette index]
  Search --> Decision[Hiring / collaboration decision]
```

## Design System

- Palette: black, white, blue.
- Typography: Inter with heavy weights and visible section dividers.
- Layout: single-column inspection path.
- Interaction: search and API console are the main enhancements.

## Verification Checklist

- `PORTFOLIO_STYLE=ink npm run build`
- All project rows remain readable on mobile.
- Command palette returns `CCTS` and `Profile API`.
- Focus states are visible.
