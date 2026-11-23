export const timeline = [
  {
    period: '2012 - now',
    title: 'Ming-Chyuan Ltd.',
    summary: 'MIS and internal-system maintenance at Ming-Chyuan Ltd., a CNC manufacturing company.',
  },
  {
    period: '2016 - 2022',
    title: 'NTOU, B.S. and M.S.',
    summary: 'B.S. and M.S. in Computer Science and Engineering at National Taiwan Ocean University.',
  },
  {
    period: '2020 - 2022',
    title: 'CCTS and SOSELab research line',
    summary: 'Thesis work at SOSELab: CCTS, a contract testing service for event-driven microservices.',
  },
  {
    period: '2021',
    title: 'ITRI PDAS-team',
    summary: 'Internship on the personal-data authorization and valuation/payment platform, delivered on AKS.',
  },
  {
    period: 'ongoing',
    title: 'Home-lab and open source',
    summary: 'Running a self-hosted home-lab and sending pull requests to public projects.',
  },
] as const;

export const apiCatalog = [
  { path: '/api/profile.json', label: 'Profile API', description: 'Identity, links, education, lab, experience, and role-fit metadata.' },
  { path: '/api/projects.json', label: 'Projects API', description: 'Selected systems, stack labels, highlights, and proof notes.' },
  { path: '/api/metrics.json', label: 'Metrics API', description: 'Snapshot counters and timeline entries.' },
  { path: '/api/styles.json', label: 'Styles API', description: 'Portfolio design variants with branch names and design goals.' },
  { path: '/api/search.json', label: 'Search API', description: 'Prebuilt search index for command palette and external consumers.' },
  { path: '/api/openapi.json', label: 'OpenAPI', description: 'Machine-readable endpoint inventory for portfolio data surfaces.' },
] as const;

export const designVariants = [
  {
    key: 'classic',
    branch: 'master',
    name: 'Classic Profile',
    thesis: 'A plain, single-column professional profile. The default homepage.',
    palette: 'white, graphite, blue links',
    effects: ['single column', 'reverse-chronological experience', 'citation-style publications'],
  },
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
    effects: ['identity card', 'metric strip', 'timeline feed'],
  },
  {
    key: 'forge',
    branch: 'portfolio/forge',
    name: 'Forge Engineering Workshop',
    thesis: 'A workshop-style portfolio that shows how research ideas become deployable systems.',
    palette: 'steel, rust, cobalt, green, paper',
    effects: ['build pipeline diagram', 'project cards', 'timeline ladder'],
  },
  {
    key: 'observatory',
    branch: 'portfolio/observatory',
    name: 'Observatory Analytics Lab',
    thesis: 'A data-rich analytics page for publications, contributions, systems, and role-fit evidence.',
    palette: 'carbon, mint, gold, magenta, ivory',
    effects: ['metric wall', 'source ledger', 'variant grid'],
  },
  {
    key: 'archive',
    branch: 'portfolio/archive',
    name: 'Archive Editorial',
    thesis: 'An editorial layout with a publication shelf and a short chronology.',
    palette: 'ivory, ink, olive, rose, cobalt',
    effects: ['publication shelf', 'chronology index'],
  },
] as const;

