export const impactSignals = [
  { label: 'Research', value: 92, detail: 'CCTS, APSEC 2022, TCSE award', tone: 'research' },
  { label: 'Delivery', value: 86, detail: 'PDAS, payment platform, AKS delivery', tone: 'delivery' },
  { label: 'Operations', value: 88, detail: 'HomeLab, iDRAC, internal systems', tone: 'operations' },
  { label: 'Collaboration', value: 76, detail: 'OSS integrations, localization, docs', tone: 'collaboration' },
] as const;

export const timeline = [
  {
    period: '2012 - now',
    title: 'Internal systems under real business constraints',
    summary: 'Ming-Chyuan MIS work creates a long-running baseline: software has to survive legacy systems, manufacturing workflows, and maintenance pressure.',
  },
  {
    period: '2016 - 2022',
    title: 'Computer science training at NTOU',
    summary: 'B.S. and M.S. work converge on service-oriented architecture, event-driven testing, and maintainability under research constraints.',
  },
  {
    period: '2020 - 2022',
    title: 'CCTS and SOSELab research line',
    summary: 'CCTS turns consumer-driven contracts, event logs, and state models into a composite test service for event-driven microservices.',
  },
  {
    period: '2021',
    title: 'ITRI PDAS delivery work',
    summary: 'Personal-data authorization and valuation/payment platform work spans logging, payment, blockchain, CI/CD, fintech integration, and AKS delivery.',
  },
  {
    period: 'ongoing',
    title: 'Home-lab and public collaboration',
    summary: 'Self-hosted systems, server automation, and public PRs keep the engineering habit grounded in operational feedback.',
  },
] as const;

export const insightArticles = [
  {
    slug: 'contracts-are-runtime-evidence',
    title: 'Contracts Are Only Useful When They Meet Runtime Evidence',
    category: 'Research',
    readingTime: '6 min read',
    summary:
      'CCTS matters because it connects contract definitions with event-log paths and state-model assertions, closing the gap between interface agreement and actual behavior.',
    tags: ['CCTS', 'contract testing', 'event-driven systems'],
  },
  {
    slug: 'delivery-docs-are-architecture',
    title: 'Delivery Documentation Is Architecture Work',
    category: 'Delivery',
    readingTime: '5 min read',
    summary:
      'The PDAS work shows why deployment, CI/CD notes, infrastructure constraints, and customer handoff are not afterthoughts; they decide whether the system can be trusted.',
    tags: ['PDAS', 'AKS', 'CI/CD'],
  },
  {
    slug: 'home-lab-keeps-platform-work-honest',
    title: 'A Home-lab Keeps Platform Taste Honest',
    category: 'Operations',
    readingTime: '4 min read',
    summary:
      'Running storage, DNS, monitoring, media, albums, and automation changes how architecture feels: failures become personal, and clarity becomes operational leverage.',
    tags: ['HomeLab', 'Docker', 'operations'],
  },
  {
    slug: 'small-open-source-prs-show-fit',
    title: 'Small Open-source PRs Show How Someone Enters a Codebase',
    category: 'Collaboration',
    readingTime: '4 min read',
    summary:
      'Integration, localization, and documentation fixes reveal a practical collaboration style: learn the boundary, reduce friction, and leave a clearer path behind.',
    tags: ['OSS', 'integration', 'documentation'],
  },
] as const;

export const apiCatalog = [
  { path: '/api/profile.json', label: 'Profile API', description: 'Identity, links, education, lab, experience, and role-fit metadata.' },
  { path: '/api/projects.json', label: 'Projects API', description: 'Selected systems, stack labels, highlights, and proof notes.' },
  { path: '/api/metrics.json', label: 'Metrics API', description: 'Snapshot counters, impact chart values, and timeline entries.' },
  { path: '/api/insights.json', label: 'Insights API', description: 'Blog-grade article cards and topical taxonomy.' },
  { path: '/api/styles.json', label: 'Styles API', description: 'Ten portfolio variants with branch names, design goals, and capability coverage.' },
  { path: '/api/search.json', label: 'Search API', description: 'Prebuilt search index for command palette and external consumers.' },
  { path: '/api/feed.json', label: 'Feed API', description: 'JSON feed for insights, papers, and project updates.' },
  { path: '/api/openapi.json', label: 'OpenAPI', description: 'Machine-readable endpoint inventory for portfolio data surfaces.' },
] as const;

export const designVariants = [
  {
    key: 'noir',
    branch: 'portfolio/noir',
    name: 'Noir Systems Dossier',
    thesis: 'A high-contrast operational dossier for backend/platform credibility.',
    palette: 'black, brass, cyan, green, red',
    effects: ['sticky evidence navigation', 'identity portrait', 'dense proof cards', 'shared API console'],
  },
  {
    key: 'linen',
    branch: 'portfolio/linen',
    name: 'Linen Editorial Portfolio',
    thesis: 'A quiet editorial page for maintainability, reliability, and human-readable engineering.',
    palette: 'paper, graphite, pine, cobalt',
    effects: ['soft portrait module', 'publication stack', 'article-grade rhythm', 'shared search'],
  },
  {
    key: 'glass',
    branch: 'portfolio/glass',
    name: 'Glass Runtime Surface',
    thesis: 'A translucent runtime dashboard for research, platform delivery, and live-link exploration.',
    palette: 'charcoal, blue, amber, white glass',
    effects: ['glass panels', 'status-like metrics', 'portrait proof tile', 'API drawer'],
  },
  {
    key: 'ink',
    branch: 'portfolio/ink',
    name: 'Ink Specification Sheet',
    thesis: 'A brutal specification sheet for teams that value directness and strong information hierarchy.',
    palette: 'black, white, blue',
    effects: ['hard dividers', 'spec rows', 'monochrome portrait', 'keyboard command palette'],
  },
  {
    key: 'dusk',
    branch: 'portfolio/dusk',
    name: 'Dusk Reliability Narrative',
    thesis: 'A dark narrative surface for systems that keep working after the demo.',
    palette: 'black green, teal, amber, warm neutral',
    effects: ['soft glows via lines', 'publication cards', 'portrait strip', 'reading progress'],
  },
  {
    key: 'atlas',
    branch: 'portfolio/atlas',
    name: 'Atlas Evidence Map',
    thesis: 'A map-like editorial layout that presents identity through research, delivery, operations, and collaboration routes.',
    palette: 'paper, ink, cobalt, pine, brass, coral',
    effects: ['evidence route grid', 'map lines', 'responsive metric ribbon', 'API console'],
  },
  {
    key: 'signal',
    branch: 'portfolio/signal',
    name: 'Signal Operations Desk',
    thesis: 'A command-center portfolio focused on observability, incident thinking, and reliability signals.',
    palette: 'graphite, teal, amber, off-white, red',
    effects: ['live GitHub API slot', 'signal bars', 'system health cards', 'filterable insight stream'],
  },
  {
    key: 'forge',
    branch: 'portfolio/forge',
    name: 'Forge Engineering Workshop',
    thesis: 'A workshop-style portfolio that shows how research ideas become deployable systems.',
    palette: 'steel, rust, cobalt, green, paper',
    effects: ['build pipeline diagram', 'tool bench cards', 'interactive project filters', 'timeline ladder'],
  },
  {
    key: 'observatory',
    branch: 'portfolio/observatory',
    name: 'Observatory Analytics Lab',
    thesis: 'A data-rich analytics page for publications, contributions, systems, and role-fit evidence.',
    palette: 'carbon, mint, gold, magenta, ivory',
    effects: ['radar-like CSS chart', 'metric wall', 'source ledger', 'external API panel'],
  },
  {
    key: 'archive',
    branch: 'portfolio/archive',
    name: 'Archive Knowledge Journal',
    thesis: 'A premium blog/editorial archive for long-form engineering narrative and proof-backed writing.',
    palette: 'ivory, ink, olive, rose, cobalt',
    effects: ['featured essays', 'reading index', 'knowledge graph', 'JSON feed links'],
  },
] as const;

export const capabilityMatrix = [
  { feature: 'Static JSON APIs', status: 'all variants', note: 'Profile, projects, metrics, insights, styles, search, feed, OpenAPI.' },
  { feature: 'Command palette', status: 'all variants', note: 'Keyboard-accessible search over headings, insights, projects, and APIs.' },
  { feature: 'Live GitHub fetch', status: 'progressive enhancement', note: 'Client fetches public GitHub profile and falls back gracefully.' },
  { feature: 'Chart layer', status: 'all variants', note: 'Impact bars, timeline, article taxonomy, and role-fit matrices.' },
  { feature: 'Documentation pack', status: 'ten variants', note: 'Design rationale, technical notes, Mermaid diagrams, branch/deployment instructions.' },
] as const;
