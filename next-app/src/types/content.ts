export interface CompanyLink {
  name: string
  url: string
}

export interface HeroContent {
  eyebrow: string
  name: string
  tagline: string
  description: string
  companies: CompanyLink[]
  proofChips?: string[]
  ctaLabel: string
  ctaSecondaryLabel: string
  ctaEmail: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface AboutContent {
  intro: string[]
  companies: CompanyLink[]
  companiesSummary: string
  skillGroups: SkillGroup[]
}

export interface ProjectContent {
  slug?: string
  title: string
  description: string
  tech: string[]
  github: string | null
  external: string | null
  image?: string
  status?: 'Built' | 'Live' | 'MVP' | 'Roadmap' | 'Parked'
  impact?: string[]
  caseStudy?: {
    role: string
    challenge: string
    approach: string[]
    architecture: string[]
    quality: string[]
    outcome: string
  }
}

export interface JobContent {
  title: string
  company: string
  range: string
  url: string
  highlights: string[]
}

export interface ContactContent {
  overline: string
  title: string
  description: string
  ctaLabel: string
}

export interface LeadershipHighlight {
  title: string
  description: string
}

export interface QualitySignal {
  title: string
  proof: string
}

export interface WritingTopic {
  title: string
  status: string
  blurb: string
  /** Full note body shown on /writing */
  body?: string[]
}

export interface WritingContent {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  topics: WritingTopic[]
}
