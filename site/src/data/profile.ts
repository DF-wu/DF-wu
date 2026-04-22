export const profile = {
  name: 'DF Wu',
  fullName: 'Chufei Wu',
  title: 'Backend & Platform Engineer',
  location: 'Taipei, Taiwan',
  tagline: 'Building backend systems that stay stable, maintainable, and deployable as complexity grows.',
  about: [
    'I focus on what happens after you ship. Will the person who inherits this codebase understand what I was thinking? Will the ops team trust it at 3am?',
    'I write code for the maintenance window, not the demo. Architecture should make teams faster, not trap them. Complexity is a cost — pay it only when you must.',
    "I'm active in Taiwan's civic tech community through g0v.social, and I run a home-lab where the infrastructure is my own code.",
  ],
  philosophy: [
    'Architecture clarity over premature abstraction',
    'Maintainability before complexity becomes costly',
    'Measurable iteration over speculative engineering',
    'Deployment-aware design from day one',
  ],

  links: {
    github: 'https://github.com/DF-wu',
    linkedin: 'https://www.linkedin.com/in/chufei-wu-b33990164/',
    website: 'https://df.is-a.dev',
    mastodon: 'https://g0v.social/@df',
    resume: 'https://github.com/DF-wu/resume/blob/main/CHUFEIWU_Resume.pdf',
  },

  stats: {
    publicRepos: 123,
    ownedRepos: '46 + 16',
    yearlyContributions: 605,
    yearlyCommits: 567,
    mergedPRs: 22,
    externalPRs: 13,
  },

  skills: {
    languages: ['Java', 'Python', 'Go', 'TypeScript', 'JavaScript'],
    frameworks: ['Spring', 'Gin'],
    infrastructure: ['Docker', 'Linux', 'MySQL', 'MongoDB', 'SQLite'],
  },

  projects: [
    {
      name: 'HideReplier',
      url: 'https://github.com/DF-wu/HideReplier',
      stack: 'Java',
      description: 'Full lifecycle delivery — backend logic, workflow design, deployment. My most complete end-to-end ship.',
    },
    {
      name: 'CCTS',
      url: 'https://github.com/DF-wu/CCTS',
      stack: 'Java',
      description: 'Long-running architecture experiment. Testing whether design decisions hold up under iteration.',
    },
    {
      name: 'myServices',
      url: 'https://github.com/DF-wu/myServices',
      stack: 'Python, Docker',
      description: 'Docker-based home-lab infrastructure. Real services I depend on daily — not a portfolio piece.',
    },
    {
      name: 'iDRACFanSpeedControl',
      url: 'https://github.com/DF-wu/iDRACFanSpeedControl',
      stack: 'Shell',
      description: "Server thermal automation. Wrote it once, forgot about it. That's what good automation looks like.",
    },
    {
      name: 'BehaviorMonitor',
      url: 'https://github.com/DF-wu/BehaviorMonitor',
      stack: 'TypeScript',
      description: 'AI-assisted prototyping. Using AI as a practical engineering tool, not a buzzword.',
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
      description: 'Traditional Chinese localization and docs',
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
} as const;
