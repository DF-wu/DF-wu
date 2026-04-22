export const profile = {
  name: 'DF Wu',
  fullName: 'ChuFei Wu',
  nameZh: '吳朱飛',
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
      location: 'Virtual',
      url: 'https://ieeexplore.ieee.org/document/10043304/',
      abstract:
        'Introduces CCTS (Composite Contract Testing Service), a testing tool for event-driven microservices. Combines consumer-driven contract testing with event-driven state models to record state transitions of event exchange between services and automatically retrieve possible transition paths.',
      role: 'First author · thesis work',
      tag: 'IEEE',
    },
    {
      title: 'PDAS: A Digital-Signature-Based Authorization Platform for Digital Personal Data',
      authors: ['Yu-Te Wang', 'Chu-Fei Wu', 'Shang-Pin Ma', 'Hsuan-Tung Chen', 'Shih-Ying Chang', 'ChunSheng Li'],
      venue: 'ICS 2020 — International Computer Symposium',
      publisher: 'IEEE',
      year: 2020,
      location: 'Tainan, Taiwan',
      url: 'https://ieeexplore.ieee.org/document/9359082/',
      abstract:
        'Uses Citizen Digital Certificate, digital signature, and blockchain to establish an authorization system (PDAS) for digital personal data. Enables safe, undeniable, and tamper-proof data authorization contracts that address legality, security, and multi-user authorization.',
      role: 'Co-author · PDAS-team core contributor',
      tag: 'IEEE',
    },
  ],

  domesticPublications: [
    {
      title: '事件驅動微服務系統之複合契約測試機制',
      titleEn: 'Composite Contract Testing for Event-Driven Microservice Systems',
      authors: ['吳朱飛', '馬尚彬', '邵安祺'],
      venue: '2022 台灣軟體工程研討會 (TCSE)',
      year: 2022,
      location: '臺北 · 政治大學',
      award: '最佳中文論文獎 · Best Chinese Paper Award',
    },
    {
      title: '數位個人資料授權之計價與雙向支付平台之系統設計',
      titleEn: 'Pricing and Bidirectional Payment Platform for Digital Personal Data Authorization',
      authors: ['馬尚彬', '陳宣同', '吳朱飛', '王宇德', '黃郁文', '張仕穎'],
      venue: '2021 全國計算機會議 (NCS)',
      year: 2021,
      location: '臺中 · 東海大學',
    },
    {
      title: '基於數位簽章之個資授權平台設計',
      titleEn: 'Design of a Digital-Signature-Based Personal Data Authorization Platform',
      authors: ['馬尚彬', '陳宣同', '張仕穎', '吳朱飛', '王宇德', '陳筱蓉', '李昀陞'],
      venue: '2020 台灣軟體工程研討會 (TCSE)',
      year: 2020,
      location: '嘉義 · 嘉義大學',
    },
  ],

  awards: [
    {
      title: 'Best Chinese Paper Award · 最佳中文論文獎',
      context: '2022 台灣軟體工程研討會 (TCSE) — for "事件驅動微服務系統之複合契約測試機制"',
      year: 2022,
    },
  ],

  researchHighlights: [
    'Designed CCTS — a tool combining Pact consumer-driven contract testing with SAGA-style state-machine assertions for event-driven architectures',
    'Core member of the PDAS-team building a digital-signature-based authorization platform for personal data, published at IEEE ICS 2020 and adopted in follow-up pricing/payment research',
    'Received the 2022 Best Chinese Paper Award at the Taiwan Conference on Software Engineering for the CCTS research',
    'Two IEEE international publications (APSEC 2022, ICS 2020) plus three domestic-conference papers across event-driven microservice testing and personal data authorization systems',
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
    ieeepapers: 2,
    publications: 5,
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
      role: 'Research Assistant · Thesis Author',
      org: 'SOSELAB, NTOU CSE',
      period: '2020 – 2022',
      summary:
        'Designed and implemented CCTS — a contract-testing framework for event-driven microservice systems. Published at IEEE APSEC 2022 and received the 2022 Best Chinese Paper Award at TCSE.',
    },
    {
      role: 'Core Contributor',
      org: 'PDAS-team (NTOU × ITRI collaboration)',
      period: '2020 – 2021',
      summary:
        'Worked on the Personal Data Authorization System — digital-signature-based, blockchain-anchored authorization contracts for personal data. Joint research with Industrial Technology Research Institute (ITRI). Published at IEEE ICS 2020 and two domestic conferences.',
    },
    {
      role: 'Open-source Collaborator',
      org: 'g0v civic tech community · public OSS projects',
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
