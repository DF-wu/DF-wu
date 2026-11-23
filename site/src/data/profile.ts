export const openSource = [
  {
    repo: 'stanley2058/lilac-mono',
    url: 'https://github.com/stanley2058/lilac-mono',
    about: 'Lilac, an event-driven agent runtime.',
    year: '2026',
    summary: 'Added the Exa and Tavily search providers and fixed several GitHub integration issues.',
    prs: [
      { number: 36, type: 'Fix', title: 'UUID delivery identities for GitHub webhooks and workflow cancellation', url: 'https://github.com/stanley2058/lilac-mono/pull/36' },
      { number: 35, type: 'Feature', title: 'Link reply references on the configured GitHub host', url: 'https://github.com/stanley2058/lilac-mono/pull/35' },
      { number: 13, type: 'Fix', title: 'Prevent issue_comment self-trigger loops', url: 'https://github.com/stanley2058/lilac-mono/pull/13' },
      { number: 5, type: 'Cleanup', title: 'Follow-up cleanup for the Tavily endpoint change', url: 'https://github.com/stanley2058/lilac-mono/pull/5' },
      { number: 4, type: 'Feature', title: 'Custom Tavily API endpoint support', url: 'https://github.com/stanley2058/lilac-mono/pull/4' },
      { number: 1, type: 'Feature', title: 'Exa web search provider', url: 'https://github.com/stanley2058/lilac-mono/pull/1' },
    ],
  },
  {
    repo: 'stanley2058/lilac-ai-rag-dashboard',
    url: 'https://github.com/stanley2058/lilac-ai-rag-dashboard',
    year: '2026',
    prs: [
      { number: 1, type: 'Feature', title: 'Configurable OpenAI API base URL', url: 'https://github.com/stanley2058/lilac-ai-rag-dashboard/pull/1' },
    ],
  },
  {
    repo: 'Minidoracat/mcp-feedback-enhanced',
    url: 'https://github.com/Minidoracat/mcp-feedback-enhanced',
    about: 'MCP server for interactive user feedback in AI-assisted development.',
    year: '2025',
    prs: [
      { number: 138, type: 'i18n', title: 'Traditional Chinese localization and documentation improvements', url: 'https://github.com/Minidoracat/mcp-feedback-enhanced/pull/138' },
    ],
  },
  {
    repo: 'yym68686/ChatGPT-Telegram-Bot',
    url: 'https://github.com/yym68686/ChatGPT-Telegram-Bot',
    about: 'AI chat bot for Telegram.',
    year: '2025',
    prs: [
      { number: 111, type: 'Docs', title: 'Fix Markdown table syntax in the documentation', url: 'https://github.com/yym68686/ChatGPT-Telegram-Bot/pull/111' },
    ],
  },
  {
    repo: 'WayneChang65/ptt-crawler',
    url: 'https://github.com/WayneChang65/ptt-crawler',
    about: 'Web crawler module for PTT.',
    year: '2022',
    prs: [
      { number: 19, type: 'Fix', title: 'Fix a typo in the bottom-post abbreviation', url: 'https://github.com/WayneChang65/ptt-crawler/pull/19' },
    ],
  },
  {
    repo: 'SrinivasanTarget/ContractTestingBoilerplate',
    url: 'https://github.com/SrinivasanTarget/ContractTestingBoilerplate',
    about: 'Contract testing boilerplate for Spring Boot and Kafka microservices.',
    year: '2021',
    prs: [
      { number: 167, type: 'Fix', title: 'Correct the Pact Broker port', url: 'https://github.com/SrinivasanTarget/ContractTestingBoilerplate/pull/167' },
    ],
  },
  {
    repo: 'flipperdevices/flipperzero-firmware',
    url: 'https://github.com/flipperdevices/flipperzero-firmware',
    about: 'Flipper Zero firmware.',
    year: '2021',
    prs: [
      { number: 691, type: 'Docs', title: 'Correct the docker-compose command in the build instructions', url: 'https://github.com/flipperdevices/flipperzero-firmware/pull/691' },
    ],
  },
  {
    repo: 'penut85420/TranslationImprover',
    url: 'https://github.com/penut85420/TranslationImprover',
    about: 'Form-filling tool for reporting Taiwan terminology issues to Google Translate.',
    year: '2020',
    prs: [
      { number: 3, type: 'Docs', title: 'Add an MIT license and an English README', url: 'https://github.com/penut85420/TranslationImprover/pull/3' },
    ],
  },
] as const;

export const profile = {
  name: 'DF Wu',
  fullName: 'ChuFei Wu',
  nameZh: '吳朱飛',
  title: 'Backend & Platform Engineer',
  location: 'Tainan, Taiwan',
  tagline: 'Backend and platform engineer connecting event-driven research, production delivery, and home-lab operations.',
  motto: "It's not a bug, it's a feature.",

  about: [
    'Software engineer with a B.S. and M.S. in Computer Science and Engineering from National Taiwan Ocean University. My work centers on backend services, event-driven systems, deployment, and operations.',
    'My master\'s thesis at SOSELab produced CCTS, a contract testing service for event-driven microservices that checks Pact contracts, runtime event logs, and state models together.',
    'At ITRI I worked on the Personal Data Authorization System (PDAS) and a personal-data valuation and payment platform, deployed on Azure Kubernetes Service.',
    'I also run and maintain a home-lab of 30+ self-hosted services.',
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
    snapshotDate: '2026-11-16',
    publicRepos: 132,
    nonForkRepos: 80,
    yearlyContributions: 605,
    yearlyCommits: 567,
    mergedPRs: 180,
    externalPRs: 15,
    ieeepapers: 2,
    publications: 5,
    ossProjects: 5,
    homeLabServices: '30+',
    cctsLoc: '8k+',
    pdasLoc: '40k+',
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
        'Composite Contract Testing Service, my thesis system and the implementation behind the APSEC 2022 paper. It checks event-driven microservices against Pact contracts, recorded event sequences, and state models to find missing transitions and execution failures.',
      highlight: 'APSEC 2022 · TCSE Best Chinese Paper · 8k+ LOC',
    },
    {
      name: 'HideReplier',
      url: 'https://github.com/DF-wu/HideReplier',
      stack: 'Go · Vite · MongoDB · Docker · Fly.io',
      description:
        'Anonymous reply bot for the NTOU CS Discord server. Started as a Java/Spring Boot course project, later rewritten in Go with a Vite frontend. Runs on Fly.io with one shared vCPU and 256 MB RAM.',
      highlight: 'Java → Go rewrite · 256MB runtime · 10 stars',
    },
    {
      name: 'myServices',
      url: 'https://github.com/DF-wu/myServices',
      stack: 'Docker · Linux · NAS · MariaDB · SDN',
      description:
        'Configuration and operations notes for my home-lab: 30+ services for storage, DNS, monitoring, media, photo albums, and home automation, running on VMs and containers.',
      highlight: '30+ services · real operating environment',
    },
    {
      name: 'iDRACFanSpeedControl',
      url: 'https://github.com/DF-wu/iDRACFanSpeedControl',
      stack: 'Shell · Docker · IPMI · ESXi · NVIDIA',
      description:
        'Fan controller for Dell PowerEdge servers. Sets fan speed through iDRAC/IPMI based on iDRAC, NVMe, and NVIDIA GPU temperatures. Runs in Docker.',
      highlight: 'Dell R730XD tested · 10 stars',
    },
    {
      name: 'CapsWriter-Offline-Container',
      url: 'https://github.com/DF-wu/CapsWriter-Offline-Container',
      stack: 'Python · Docker · CPU/GPU inference · OpenAI API',
      description:
        'Maintained fork of an offline voice input tool, packaged as a container so it can run as a shared speech-to-text service on a NAS. Supports CPU/GPU inference and an OpenAI-compatible transcription endpoint.',
      highlight: 'Maintained fork · fork-v2.1.0 released',
    },
  ],

  contributions: openSource.flatMap((project) =>
    project.prs.map((item) => ({
      repo: project.repo,
      pr: `#${item.number}`,
      url: item.url,
      type: item.type,
      description: item.title,
    })),
  ),

  experience: [
    {
      role: 'MIS / Internal Systems Maintainer',
      org: 'Ming-Chyuan Ltd.',
      period: 'Jul 2012 – Present',
      summary:
        'Maintain and modernize the internal systems behind the company\'s CNC manufacturing workflows, moving legacy systems toward a more reliable architecture.',
    },
    {
      role: 'Research Assistant',
      org: 'SOSELAB, NTOU CSE',
      period: '2020 – 2022',
      summary:
        'Designed and built CCTS, a contract testing service for event-driven microservices. Published at IEEE APSEC 2022 and received the 2022 TCSE Best Chinese Paper Award. Also maintained related proof-of-concept services.',
    },
    {
      role: 'Software Engineer Intern',
      org: 'Industrial Technology Research Institute (ITRI) · PDAS-team',
      period: 'Jul 2021 – Dec 2021',
      summary:
        'Worked on the design, implementation, and delivery of the personal-data authorization (PDAS) and valuation/payment systems: microservices, CI/CD, blockchain and third-party payment integration, and deployment on Azure Kubernetes Service.',
    },
    {
      role: 'Teaching Assistant',
      org: 'National Taiwan Ocean University',
      period: '2020 – 2022',
      summary:
        'Migrated course materials to a newer content-management system and helped professors prepare lessons.',
    },
  ],

  roles: [
    { title: 'Backend Engineer', evidence: 'CCTS, PDAS, HideReplier', why: 'Service delivery with microservice, event-driven, API, messaging, and persistence experience' },
    { title: 'Platform Engineer', evidence: 'HomeLab, AKS delivery, iDRACFanSpeedControl', why: 'Deployment-aware engineering across containers, Linux, storage, network, and operational automation' },
    { title: 'Systems-Oriented SWE', evidence: 'SOSELAB, ITRI, OSS contributions', why: 'Practical architecture decisions under research, customer-delivery, and public collaboration constraints' },
  ],

  interests: [
    'Event-driven distributed systems',
    'Home-lab infrastructure and self-hosting',
    'Fediverse community (g0v.social member)',
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

export type StyleKey = 'classic' | 'noir' | 'linen' | 'glass' | 'ink' | 'dusk' | 'atlas' | 'signal' | 'forge' | 'observatory' | 'archive';

export const STYLE_KEYS: readonly StyleKey[] = ['classic', 'noir', 'linen', 'glass', 'ink', 'dusk', 'atlas', 'signal', 'forge', 'observatory', 'archive'] as const;

export const DEFAULT_STYLE: StyleKey = 'classic';

export function resolveStyle(): StyleKey {
  const raw = (import.meta.env.PORTFOLIO_STYLE ?? import.meta.env.PUBLIC_PORTFOLIO_STYLE ?? DEFAULT_STYLE).toString().toLowerCase();
  return (STYLE_KEYS as readonly string[]).includes(raw) ? (raw as StyleKey) : DEFAULT_STYLE;
}
