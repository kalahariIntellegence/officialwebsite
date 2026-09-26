/**
 * Single source of truth for navigation, copy blocks and repeated content.
 * Editing this file is enough to re-label or re-order most of the site.
 */

export type SectionId =
  | 'top'
  | 'technology'
  | 'systems'
  | 'research'
  | 'company'
  | 'contact'

export const SITE = {
  name: 'Kalahari Intelligence',
  tagline: 'Ancient wisdom. Future systems.',
  signature: 'People × Land × Knowledge × Intelligence',
  email: 'hello@kalahari-intelligence.com',
} as const

/** Set `enabled: false` to remove the announcement strip entirely. */
export const ANNOUNCEMENT = {
  enabled: true,
  label: 'New research',
  text: 'Building language intelligence for low-resource African languages',
  target: 'research' as SectionId,
}

export const NAV_LINKS: { label: string; target: SectionId }[] = [
  { label: 'Technology', target: 'technology' },
  { label: 'Systems', target: 'systems' },
  { label: 'Research', target: 'research' },
  { label: 'Company', target: 'company' },
]

export const TRUST_AREAS = [
  'Enterprise',
  'Public sector',
  'Research',
  'Energy',
  'Telecommunications',
  'Industry',
]

export type TechPillar = {
  id: 'language' | 'voice' | 'energy' | 'automation'
  eyebrow: string
  index: string
  headline: string
  copy: string
  tags: string[]
}

export const TECH_PILLARS: TechPillar[] = [
  {
    id: 'language',
    index: '01',
    eyebrow: 'Language intelligence',
    headline: 'Language AI for African realities.',
    copy: 'Speech recognition, translation, multilingual interfaces and language models designed for low-resource African languages.',
    tags: ['Speech', 'Translation', 'LLMs', 'Language ID'],
  },
  {
    id: 'voice',
    index: '02',
    eyebrow: 'Voice intelligence',
    headline: 'Machines that understand how Africa speaks.',
    copy: 'Speech recognition and voice systems for call centres, learning, service delivery and intelligent interfaces.',
    tags: ['ASR', 'Voice', 'Speech', 'Call centres'],
  },
  {
    id: 'energy',
    index: '03',
    eyebrow: 'Energy intelligence',
    headline: 'Intelligence for distributed energy.',
    copy: 'Forecasting, optimization and intelligent control for distributed energy, infrastructure and resilient systems.',
    tags: ['DER', 'Forecasting', 'Optimization', 'Control'],
  },
  {
    id: 'automation',
    index: '04',
    eyebrow: 'Automation',
    headline: 'Intelligence inside operations.',
    copy: 'Decision support, monitoring and AI-powered automation for industry, logistics and enterprise workflows.',
    tags: ['Agents', 'Operations', 'Monitoring', 'Automation'],
  },
]

export const ANCESTORS = {
  roots: ['Language', 'Land', 'Memory', 'Observation', 'Community', 'Craft'],
  systems: [
    'Language AI',
    'Voice',
    'Energy',
    'Automation',
    'Logistics',
    'Infrastructure',
  ],
}

export type ResearchStatus = 'Research' | 'In development' | 'Experimental'

export type ResearchArea = {
  title: string
  copy: string
  status: ResearchStatus
  span: 'wide' | 'half' | 'third'
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: 'African language models',
    copy: 'Multilingual and low-resource language research — data collection, evaluation and adaptation for languages with little digital text.',
    status: 'Research',
    span: 'wide',
  },
  {
    title: 'Speech models',
    copy: 'Automatic speech recognition and pronunciation intelligence across accents, dialects and code-switched speech.',
    status: 'In development',
    span: 'half',
  },
  {
    title: 'Translation',
    copy: 'Machine translation between African languages and global languages, including direct African-to-African pairs.',
    status: 'Research',
    span: 'third',
  },
  {
    title: 'Efficient models',
    copy: 'Small models, LoRA adapters and quantisation for edge and low-connectivity deployment.',
    status: 'In development',
    span: 'third',
  },
  {
    title: 'Tokenization',
    copy: 'Language-efficient tokenizers designed around agglutinative and tonal African language structure.',
    status: 'Experimental',
    span: 'third',
  },
]

export const STACK_LAYERS = [
  { label: 'Audio', detail: 'Speech, telephony, field recordings' },
  { label: 'Speech model', detail: 'Recognition, diarisation, language ID' },
  { label: 'Language representation', detail: 'Tokenization, embeddings, adaptation' },
  { label: 'Translation / reasoning', detail: 'Cross-lingual transfer, instruction models' },
  { label: 'Applications', detail: 'Interfaces, agents, knowledge access' },
]

export const STACK_APPLICATIONS = [
  'Education',
  'Call centres',
  'Government',
  'Enterprise',
  'Travel',
  'Knowledge access',
]

export type SystemPanel = {
  id: string
  label: string
  title: string
  copy: string
  points: string[]
  size: 'lg' | 'sm'
}

export const SYSTEM_PANELS: SystemPanel[] = [
  {
    id: 'language-voice',
    label: 'Language & voice',
    title: 'Interfaces that speak the language of the user.',
    copy: 'Language interfaces for education, service delivery, enterprise and communication.',
    points: ['Multilingual assistants', 'Speech interfaces', 'Document understanding'],
    size: 'lg',
  },
  {
    id: 'energy',
    label: 'Energy',
    title: 'Distributed energy, forecast and controlled.',
    copy: 'Forecasting, optimization and control for distributed energy systems.',
    points: ['Load & generation forecasting', 'DER optimization'],
    size: 'sm',
  },
  {
    id: 'industry',
    label: 'Industry',
    title: 'Monitoring and decisions on the plant floor.',
    copy: 'Monitoring, decision systems and industrial automation.',
    points: ['Condition monitoring', 'Operational decision support'],
    size: 'sm',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    title: 'Movement, supply chains and resource intelligence.',
    copy: 'Intelligence for movement, supply chains, infrastructure and resources.',
    points: ['Routing & scheduling', 'Demand and resource models', 'Corridor visibility'],
    size: 'lg',
  },
]

export const DEPLOYMENT_TARGETS = [
  {
    key: 'cloud',
    title: 'Cloud',
    copy: 'Managed training and high-throughput inference where scale is the constraint.',
  },
  {
    key: 'private',
    title: 'Private',
    copy: 'Customer-controlled environments where data residency and governance lead.',
  },
  {
    key: 'local',
    title: 'Local',
    copy: 'On-premise infrastructure close to operations, sites and service points.',
  },
  {
    key: 'edge',
    title: 'Edge',
    copy: 'Small models on devices where connectivity and latency cannot be assumed.',
  },
]

export const DEPLOYMENT_DRIVERS = ['Cost', 'Connectivity', 'Privacy', 'Latency', 'Resilience']

export type Industry = {
  name: string
  applications: string[]
}

export const INDUSTRIES: Industry[] = [
  {
    name: 'Telecommunications',
    applications: [
      'Voice automation',
      'Multilingual customer service',
      'Speech intelligence',
      'Knowledge systems',
    ],
  },
  {
    name: 'Energy & utilities',
    applications: ['Forecasting', 'DER optimization', 'Monitoring', 'Operational intelligence'],
  },
  {
    name: 'Government',
    applications: [
      'Language access to services',
      'Document intelligence',
      'Citizen interfaces',
      'Records and archives',
    ],
  },
  {
    name: 'Financial services',
    applications: [
      'Voice-first banking',
      'Multilingual support',
      'Risk and operations analytics',
      'Process automation',
    ],
  },
  {
    name: 'Education',
    applications: [
      'Mother-tongue learning tools',
      'Pronunciation and reading support',
      'Assessment assistance',
      'Curriculum translation',
    ],
  },
  {
    name: 'Tourism & hospitality',
    applications: [
      'Live translation',
      'Guided knowledge systems',
      'Multilingual booking',
      'Field interpretation',
    ],
  },
  {
    name: 'Industrial operations',
    applications: [
      'Condition monitoring',
      'Decision support',
      'Maintenance intelligence',
      'Process automation',
    ],
  },
  {
    name: 'Logistics',
    applications: [
      'Route and fleet intelligence',
      'Supply chain forecasting',
      'Border and corridor data',
      'Resource planning',
    ],
  },
]

export type Insight = {
  kind: 'Research note' | 'Engineering' | 'Perspective'
  title: string
  copy: string
  readingTime: string
}

export const INSIGHTS: Insight[] = [
  {
    kind: 'Research note',
    title: 'Building language AI for low-resource African languages',
    copy: 'What changes when a language has millions of speakers and very little digital text.',
    readingTime: '8 min read',
  },
  {
    kind: 'Engineering',
    title: 'Why smaller models matter for local AI',
    copy: 'Cost, connectivity and latency make model size an infrastructure decision, not a benchmark.',
    readingTime: '6 min read',
  },
  {
    kind: 'Perspective',
    title: 'Intelligence beyond the cloud',
    copy: 'Designing systems that keep working when the network does not.',
    readingTime: '5 min read',
  },
]

export const FOOTER_COLUMNS: { title: string; items: { label: string; target: SectionId }[] }[] = [
  {
    title: 'Technology',
    items: [
      { label: 'Language intelligence', target: 'technology' },
      { label: 'Voice', target: 'technology' },
      { label: 'Energy', target: 'technology' },
      { label: 'Automation', target: 'technology' },
    ],
  },
  {
    title: 'Research',
    items: [
      { label: 'Language models', target: 'research' },
      { label: 'Speech', target: 'research' },
      { label: 'Translation', target: 'research' },
      { label: 'Efficient AI', target: 'research' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', target: 'company' },
      { label: 'Research', target: 'research' },
      { label: 'Careers', target: 'contact' },
      { label: 'Contact', target: 'contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Insights', target: 'company' },
      { label: 'Documentation', target: 'technology' },
      { label: 'News', target: 'company' },
    ],
  },
]
