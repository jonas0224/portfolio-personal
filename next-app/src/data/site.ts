import projectsJson from '@/content/site/projects.json'
import aboutJson from '@/content/site/about.json'
import contactJson from '@/content/site/contact.json'
import featuredJson from '@/content/site/featured-projects.json'
import heroJson from '@/content/site/hero.json'
import jobsJson from '@/content/site/jobs.json'
import writingJson from '@/content/site/writing.json'
import {
  aboutSchema,
  contactSchema,
  featuredProjectsSchema,
  heroSchema,
  jobsSchema,
  projectsSchema,
  writingSchema,
} from '@/lib/content-schemas'

export const hero = heroSchema.parse(heroJson)
export const about = aboutSchema.parse(aboutJson)
export const featuredProjects = featuredProjectsSchema.parse(featuredJson)
export const projects = projectsSchema.parse(projectsJson)
export const jobs = jobsSchema.parse(jobsJson)
export const contact = contactSchema.parse(contactJson)
export const writing = writingSchema.parse(writingJson)
