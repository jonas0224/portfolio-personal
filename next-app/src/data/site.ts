import aboutJson from '@/content/site/about.json'
import contactJson from '@/content/site/contact.json'
import featuredJson from '@/content/site/featured-projects.json'
import heroJson from '@/content/site/hero.json'
import jobsJson from '@/content/site/jobs.json'
import writingJson from '@/content/site/writing.json'
import type {
  AboutContent,
  ContactContent,
  HeroContent,
  JobContent,
  ProjectContent,
  WritingContent,
} from '@/types/content'

export const hero = heroJson as HeroContent
export const about = aboutJson as AboutContent
export const featuredProjects = featuredJson as ProjectContent[]
export const jobs = jobsJson as JobContent[]
export const contact = contactJson as ContactContent
export const writing = writingJson as WritingContent
