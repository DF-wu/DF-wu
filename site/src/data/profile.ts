export const profile = {
  name: 'DF Wu',
  fullName: 'ChuFei Wu',
  title: 'Backend & Platform Engineer',
  location: 'Taipei, Taiwan',
  tagline: 'Building backend systems that stay stable, maintainable, and deployable as complexity grows.',
  motto: "It's not a bug, it's a feature.",

  about: [
    'I focus on what happens after you ship. Will the person who inherits this codebase understand what I was thinking? Will the ops team trust it at 3am? That mindset shapes everything I build.',
    'My research and work have converged on one theme: making distributed systems predictable. At NTOU I designed a testing framework for event-driven microservices. In industry I build platform infrastructure that reduces delivery friction. The goal is the same either way — remove surprise from production.',
    "I'm active in Taiwan's civic tech community through g0v.social, and I run a home-lab where every service is my own code. If something breaks at 3am, I'm the one who knows why.",
  ],

  philosophy: [
    'Architecture clarity over premature abstraction',
    'Maintainability before complexity becomes costly',
    'Measurable iteration over speculative engineering',
    'Deployment-aware design from day one',
  ],

  education: {
    degree: 'M.S. in Computer Science',
    school: 'National Taiwan Ocean University (NTOU)',
    graduated: '2022',
    focus: 'Event-driven microservices architecture and testing methodology',
    advisor: 'Prof. Shang-Pin Ma',
    lab: 'SOSELAB — Service-Oriented Software Engineering Laboratory',
    thesis: 'Contract testing for event-driven microservice systems (CCTS)',
  },

  publications: [
    {
      title: 'Testing for Event-Driven Microservices Based on Consumer-Driven Contracts and State Models',
      authors: ['Chu-Fei Wu', 'Shang-Pin Ma', 'An-Chi Shau', 'Hang-Wei Yeh'],
      venue: 'APSEC 2022 — 29th Asia-Pacific Software Engineering Conference',
      publisher: 'IEEE',
      year: 2022,
      pages: '467–471',
      doi: '10.1109/APSEC57359.2022.00073',
      url: 'https://ieeexplore.ieee.org/document/10043304/',
      abstract:
        "Introduces CCTS (Composite Contract Testing Service), a testing tool for event-driven microservices. Combines consumer-driven contract testing with event-driven state models to record state transitions of event exchange between services and automatically retrieve possible transition paths.",
      tag: 'IEEE',
    },
  ],

  researchHighlights: [
    'Designed CCTS — a tool combining Pact contract testing with SAGA-style state-machine assertions for event-driven architectures',
    'Collaborated with ITRI (Industrial Technology Research Institute) on personal data authorization and security mechanisms',
    'Published at APSEC 2022 on consumer-driven contract testing for event-driven microservice systems',
  ],

  links: {
    github: 'https://github.com/DF-wu',
    linkedin: 'https://www.linkedin.com/in/chufei-wu-b33990164/',
    website: 'https://df.is-a.dev',
    mastodon: 'https://g0v.social/@df',
    resume: 'https://github.com/DF-wu/resume/blob/main/CHUFEIWU_Resume.pdf',
    email: 'mailto:df@dfder.tw',
    emailAddress: 'df@dfder.tw',
    paper: 'https://ieeexplore.ieee.org/document/10043304/',
  },

  stats: {
    publicRepos: 123,
    ownedRepos: '46 + 16',
    yearlyContributions: 605,
    yearlyCommits: 567,
    mergedPRs: 22,
    externalPRs: 13,
    ieeepapers: 1,
    ossProjects: 5,
  },

  skills: {
    languages: ['Java', 'Python', 'Go', 'TypeScript', 'JavaScript'],
    frameworks: ['Spring Boot', 'Gin'],
    infrastructure: ['Docker', 'Linux', 'Nginx', 'Jenkins'],
    data: ['MySQL', 'MongoDB', 'SQLite', 'MariaDB', 'RabbitMQ'],
    practices: [
      'Microservices architecture',
      'Event-driven design',
      'Consumer-driven contract testing',
      'DevOps & CI/CD',
      'Home-lab operations',
    ],
  },

  projects: [
    {
      name: 'CCTS',
      url: 'https://github.com/DF-wu/CCTS',
      stack: 'Java · Spring Boot · RabbitMQ · MongoDB',
      description:
        'Composite Contract Testing Service — the research system behind my APSEC 2022 paper. Combines Pact consumer-driven contracts, event-log sequence validation, and SAGA-style state assertions into one verification framework.',
      highlight: 'Research paper published',
    },
    {
      name: 'HideReplier',
      url: 'https://github.com/DF-wu/HideReplier',
      stack: 'Java',
      description:
        'Full lifecycle delivery — backend logic, workflow design, deployment. My most complete end-to-end ship. Demonstrates what ownership looks like when there is no one else to hand things off to.',
    },
    {
      name: 'myServices',
      url: 'https://github.com/DF-wu/myServices',
      stack: 'Python · Docker',
      description:
        "Docker-based home-lab infrastructure. Real services I depend on daily — not a portfolio piece. When I say 'deployment-oriented,' I mean I live with the consequences.",
    },
    {
      name: 'iDRACFanSpeedControl',
      url: 'https://github.com/DF-wu/iDRACFanSpeedControl',
      stack: 'Shell',
      description:
        "Server thermal automation. Wrote it once, forgot about it. My server room is quiet. That's what good automation looks like.",
    },
    {
      name: 'BehaviorMonitor',
      url: 'https://github.com/DF-wu/BehaviorMonitor',
      stack: 'TypeScript',
      description:
        'AI-assisted prototyping. Using AI as a practical engineering tool, not a buzzword. Fast iteration with production-quality thinking underneath.',
    },
  ],

  contributions: [
    {
      repo: 'stanley2058/lilac-mono',
      pr: '#5',
      url: 'https://github.com/stanley2058/lilac-mono/pull/5',
      type: 'Cleanup',
      description: 'Quality refinement for maintainable iteration',
    },
    {
      repo: 'stanley2058/lilac-mono',
      pr: '#4',
      url: 'https://github.com/stanley2058/lilac-mono/pull/4',
      type: 'Integration',
      description: 'Custom Tavily API endpoint support',
    },
    {
      repo: 'stanley2058/lilac-mono',
      pr: '#1',
      url: 'https://github.com/stanley2058/lilac-mono/pull/1',
      type: 'Feature',
      description: 'Exa web search provider integration',
    },
    {
      repo: 'Minidoracat/mcp-feedback-enhanced',
      pr: '#138',
      url: 'https://github.com/Minidoracat/mcp-feedback-enhanced/pull/138',
      type: 'i18n',
      description: 'Traditional Chinese localization and documentation',
    },
    {
      repo: 'yym68686/ChatGPT-Telegram-Bot',
      pr: '#111',
      url: 'https://github.com/yym68686/ChatGPT-Telegram-Bot/pull/111',
      type: 'Fix',
      description: 'Documentation correctness',
    },
    {
      repo: 'is-a-dev/register',
      pr: '#19293',
      url: 'https://github.com/is-a-dev/register/pull/19293',
      type: 'Infra',
      description: 'Custom domain registration',
    },
  ],

  experience: [
    {
      role: 'Research Assistant',
      org: 'SOSELAB, NTOU CSE',
      period: '2020 – 2022',
      summary:
        'Designed and implemented CCTS — a contract-testing framework for event-driven microservice systems. Published at IEEE APSEC 2022.',
    },
    {
      role: 'Industry Collaborator',
      org: 'Industrial Technology Research Institute (ITRI)',
      period: 'During graduate studies',
      summary:
        'Contributed to personal data authorization and security mechanism projects — applied research meeting real compliance requirements.',
    },
    {
      role: 'Open-source Collaborator',
      org: 'PDAS-team · g0v civic tech community',
      period: 'Ongoing',
      summary:
        'Contribute across personal infrastructure, team projects, and public OSS workflows. Pattern: cleanup, integration, correctness.',
    },
  ],

  roles: [
    { title: 'Backend Engineer', evidence: 'HideReplier, CCTS', why: 'Service delivery with maintainability and reliability focus' },
    { title: 'Platform Engineer', evidence: 'myServices, iDRACFanSpeedControl', why: 'Deployment-aware engineering and operational mindset' },
    { title: 'Systems-Oriented SWE', evidence: 'OSS contributions, PDAS-team', why: 'Practical architecture under real constraints' },
  ],

  rampUp: [
    { phase: 'Month 1', focus: 'Map architecture boundaries. Find where the team loses time.' },
    { phase: 'Month 2', focus: 'Small, targeted fixes. Reduce friction before adding features.' },
    { phase: 'Month 3', focus: 'Measurable reliability gains. Nobody stayed late because of my code.' },
  ],

  interests: [
    'Event-driven distributed systems',
    'Home-lab infrastructure and self-hosting',
    'Civic tech (g0v community)',
    'Archery — former university club leader',
  ],
} as const;

export type StyleKey = 'noir' | 'linen' | 'glass' | 'ink' | 'dusk';

export const STYLE_KEYS: readonly StyleKey[] = ['noir', 'linen', 'glass', 'ink', 'dusk'] as const;

export function resolveStyle(): StyleKey {
  const raw = (import.meta.env.PORTFOLIO_STYLE ?? import.meta.env.PUBLIC_PORTFOLIO_STYLE ?? 'noir').toString().toLowerCase();
  return (STYLE_KEYS as readonly string[]).includes(raw) ? (raw as StyleKey) : 'noir';
}
