export interface CompanyLink {
  name: string;
  url: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  tagline: string;
  description: string;
  companies: CompanyLink[];
  ctaLabel: string;
  ctaEmail: string;
}

export interface AboutContent {
  intro: string[];
  companies: CompanyLink[];
  companiesSummary: string;
  skills: string[];
}

export interface ProjectContent {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  external: string;
  image?: string;
}

export interface JobContent {
  title: string;
  company: string;
  range: string;
  url: string;
  highlights: string[];
}

export interface ContactContent {
  overline: string;
  title: string;
  description: string;
  ctaLabel: string;
}
