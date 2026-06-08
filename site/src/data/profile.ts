export const profile = {
  name: 'DF Wu',
  fullName: 'ChuFei Wu',
  nameZh: '吳朱飛',
  title: 'Backend & Platform Engineer',
  location: 'Taipei, Taiwan',
  tagline: 'Backend and platform engineer connecting event-driven research, production delivery, and home-lab operations.',
  motto: "It's not a bug, it's a feature.",

  about: [
    'I am a software engineer and service developer with an M.S. and B.S. in Computer Science and Engineering from National Taiwan Ocean University. My strongest through-line is reliability: service design, event flow validation, deployment, and operations.',
    'At SOSELAB, my thesis work became CCTS, a Composite Contract Testing Service for event-driven microservices. It combines Pact contracts, runtime event logs, and state-model validation so testers can detect missing transitions and execution failures instead of trusting happy-path demos.',
    'At ITRI, I worked on the Personal Data Authorization System and a personal-data valuation/payment platform. The work touched logging, payment, blockchain, third-party fintech, CI/CD, infrastructure, and delivery on Azure Kubernetes Service.',
    'Outside formal roles, I run a home-lab with 30+ services across storage, DNS, monitoring, media, albums, and home automation. That environment keeps my platform work honest because I live with the operational consequences.',
  ],

  philosophy: [
    'Architecture clarity over premature abstraction',
    'Maintainability before complexity becomes costly',
    'Measurable iteration over speculative engineering',
    'Deployment-aware design from day one',
  ],

  education: {
    degree: 'M.S. / B.S. in Computer Science and Engineering',
    school: 'National Taiwan Ocean University (NTOU)',
    graduated: '2016 - 2022',
    focus: 'Event-driven microservices architecture and testing methodology',
    advisor: 'Prof. Shang-Pin Ma',
    lab: 'SOSELAB — Service-Oriented Software Engineering Laboratory',
    thesis: 'Contract testing for event-driven microservice systems (CCTS)',
  },

  lab: {
    name: 'SOSELab — Service-Oriented Software Engineering Laboratory',
    url: 'https://soselab.cs.ntou.edu.tw/',
    school: 'National Taiwan Ocean University, Department of Computer Science and Engineering',
    description:
      'SOSELab studies software engineering techniques and service-oriented computing applications, with research directions that include microservice testing, monitoring, retrieval/search, service-oriented architecture, and chatbot application architecture.',
    advisor: 'Prof. Shang-Pin Ma',
    advisorUrl: 'https://soselab.cs.ntou.edu.tw/director/',
    thesisRecord: '碩士論文：事件驅動微服務系統之契約測試暨端到端測試研究 · 2022/7',
    publicationRecord:
      'SOSELab publication records list the CCTS APSEC 2022 work, the TCSE 2022 Best Chinese Paper, NCS 2021 personal-data valuation/payment work, and ICS 2020 PDAS work.',
    researchDirections: [
      'Microservice Testing',
      'Microservice Monitoring',
      'Microservice Retrieval and Search',
      'Service-Oriented Architecture',
      'Chatbot Application Architecture',
    ],
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
    'Designed and implemented CCTS — an 8k+ LOC Spring Boot service combining Pact consumer-driven contracts, RabbitMQ event logs, MongoDB persistence, and state-model assertions for event-driven microservices',
    'Validated CCTS against execution-failure and common-error scenarios; the work became an IEEE APSEC 2022 paper and received the 2022 TCSE Best Chinese Paper Award',
    'Core contributor on PDAS and the personal-data valuation/payment platform — a 40k+ LOC AKS-delivered system touching logging, payment, blockchain, third-party fintech, CI/CD, and infrastructure',
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
    snapshotDate: '2026-06-07',
    publicRepos: 127,
    nonForkRepos: 64,
    yearlyContributions: 605,
    yearlyCommits: 567,
    mergedPRs: 23,
    externalPRs: 12,
    ieeepapers: 2,
    publications: 5,
    ossProjects: 5,
    homeLabServices: '30+',
    cctsLoc: '8k+',
    pdasLoc: '40k+',
    availability: '99%',
  },

  skills: {
    languages: ['Java', 'Go', 'Python', 'Shell', 'TypeScript', 'JavaScript', 'C', 'Solidity'],
    frameworks: ['Spring Boot', 'Gin', 'Django', 'Node.js', 'Express', 'Angular', 'Vue'],
    infrastructure: ['Docker', 'Linux', 'Nginx', 'Jenkins', 'Kubernetes', 'AKS', 'ESXi', 'Unraid', 'TrueNAS'],
    data: ['MongoDB', 'MariaDB', 'MySQL', 'Redis', 'PostgreSQL', 'SQLite', 'RabbitMQ', 'Kafka'],
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
        'Composite Contract Testing Service — my NTOU thesis system and APSEC 2022 paper implementation. It combines Pact contracts, event-log sequence validation, and state-model checks to catch missing transitions and execution failures in event-driven microservices.',
      highlight: 'APSEC 2022 · TCSE Best Chinese Paper · 8k+ LOC',
    },
    {
      name: 'HideReplier',
      url: 'https://github.com/DF-wu/HideReplier',
      stack: 'Java · Spring Boot · Docker · Fly.io',
      description:
        'Anonymous Discord reply bot built for the NTOU CS Discord context. It grew from a course project into a containerized service with CI/CD, Docker Hub image flow, and Fly.io deployment.',
      highlight: 'Full lifecycle side project · 10 stars',
    },
    {
      name: 'myServices',
      url: 'https://github.com/DF-wu/myServices',
      stack: 'Docker · Linux · NAS · MariaDB · SDN',
      description:
        'Home-lab service configuration and operations notes. The broader environment runs 30+ services across storage, DNS, monitoring, media, albums, and home automation with VM/container integration.',
      highlight: '30+ services · real operating environment',
    },
    {
      name: 'iDRACFanSpeedControl',
      url: 'https://github.com/DF-wu/iDRACFanSpeedControl',
      stack: 'Shell · Docker · IPMI · ESXi · NVIDIA',
      description:
        'Dell PowerEdge fan control through iDRAC/IPMI with Docker deployment, NVMe/GPU temperature inputs, configurable thresholds, and a recent README/code audit around fail-safe behavior.',
      highlight: 'Dell R730XD tested · 10 stars',
    },
    {
      name: 'BehaviorMonitor',
      url: 'https://github.com/DF-wu/BehaviorMonitor',
      stack: 'React 19 · TypeScript · Firebase · GitHub Pages',
      description:
        'A behavior tracking and management system with real-time score display, admin panel, charts, logs, lazy updates, Firebase backend, and GitHub Pages deployment.',
      highlight: 'Full-stack AI-assisted prototype',
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
        'Designed and implemented CCTS — a contract-testing framework for event-driven microservice systems. Published at IEEE APSEC 2022, received the 2022 TCSE Best Chinese Paper Award, and maintained related PoC services for orchestrator/payment/points/logging flows.',
    },
    {
      role: 'Software Engineer Intern',
      org: 'Industrial Technology Research Institute (ITRI) · PDAS-team',
      period: 'Jul 2021 – Dec 2021',
      summary:
        'Researched, designed, implemented, and delivered personal-data authorization and valuation/payment systems. Worked across decentralized architecture, microservices, event-driven design, CI/CD, security, blockchain, third-party finance, AKS deployment, and delivery documentation.',
    },
    {
      role: 'MIS / Internal Systems Maintainer',
      org: 'Ming-Chyuan Ltd.',
      period: 'Jul 2012 – Present',
      summary:
        'Maintains and modernizes digital systems for CNC manufacturing workflows, moving legacy products toward more reliable internal architecture while targeting high availability.',
    },
    {
      role: 'Teaching Assistant',
      org: 'National Taiwan Ocean University',
      period: 'After graduation',
      summary:
        'Helped migrate legacy course content into a newer content-management workflow and supported professors with lesson design and assigned customization.',
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
    { title: 'Backend Engineer', evidence: 'CCTS, PDAS, HideReplier', why: 'Service delivery with microservice, event-driven, API, messaging, and persistence experience' },
    { title: 'Platform Engineer', evidence: 'HomeLab, AKS delivery, iDRACFanSpeedControl', why: 'Deployment-aware engineering across containers, Linux, storage, network, and operational automation' },
    { title: 'Systems-Oriented SWE', evidence: 'SOSELAB, ITRI, OSS contributions', why: 'Practical architecture decisions under research, customer-delivery, and public collaboration constraints' },
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

  evidenceSources: [
    { label: 'Resume PDF', url: 'https://github.com/DF-wu/resume/blob/main/CHUFEIWU_Resume.pdf' },
    { label: 'GitHub API profile snapshot', url: 'https://api.github.com/users/DF-wu' },
    { label: 'SOSELab website', url: 'https://soselab.cs.ntou.edu.tw/' },
    { label: 'SOSELab lab members', url: 'https://soselab.cs.ntou.edu.tw/lab-members/' },
    { label: 'SOSELab publications', url: 'https://soselab.cs.ntou.edu.tw/publications/' },
    { label: 'CCTS repository', url: 'https://github.com/DF-wu/CCTS' },
    { label: 'IEEE APSEC 2022 paper', url: 'https://ieeexplore.ieee.org/document/10043304/' },
    { label: 'IEEE ICS 2020 paper', url: 'https://ieeexplore.ieee.org/document/9359082/' },
  ],
} as const;

export type StyleKey = 'noir' | 'linen' | 'glass' | 'ink' | 'dusk';

export const STYLE_KEYS: readonly StyleKey[] = ['noir', 'linen', 'glass', 'ink', 'dusk'] as const;

export function resolveStyle(): StyleKey {
  const raw = (import.meta.env.PORTFOLIO_STYLE ?? import.meta.env.PUBLIC_PORTFOLIO_STYLE ?? 'noir').toString().toLowerCase();
  return (STYLE_KEYS as readonly string[]).includes(raw) ? (raw as StyleKey) : 'noir';
}
