import { z } from 'zod'

const companyLinkSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

export const heroSchema = z.object({
  eyebrow: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  companies: z.array(companyLinkSchema),
  proofChips: z.array(z.string()).optional(),
  ctaLabel: z.string(),
  ctaSecondaryLabel: z.string(),
  ctaEmail: z.string().email(),
})

export const aboutSchema = z.object({
  intro: z.array(z.string()).min(1),
  companies: z.array(companyLinkSchema),
  companiesSummary: z.string(),
  skillGroups: z.array(
    z.object({
      label: z.string(),
      skills: z.array(z.string()),
    }),
  ),
})

export const jobSchema = z.object({
  title: z.string(),
  company: z.string(),
  range: z.string(),
  url: z.string().url(),
  highlights: z.array(z.string()),
})

export const contactSchema = z.object({
  overline: z.string(),
  title: z.string(),
  description: z.string(),
  ctaLabel: z.string(),
})

const caseStudySchema = z.object({
  role: z.string(),
  challenge: z.string(),
  approach: z.array(z.string()),
  architecture: z.array(z.string()),
  quality: z.array(z.string()),
  outcome: z.string(),
})

export const projectSchema = z.object({
  slug: z.string().optional(),
  title: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  github: z.string().url().nullable(),
  external: z.string().url().nullable(),
  image: z.string().optional(),
  status: z.enum(['Built', 'Live', 'MVP', 'Roadmap', 'Parked']).optional(),
  impact: z.array(z.string()).optional(),
  caseStudy: caseStudySchema.optional(),
})

export const writingSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  ctaLabel: z.string(),
  ctaHref: z.string(),
  topics: z.array(
    z.object({
      title: z.string(),
      status: z.string(),
      blurb: z.string(),
      body: z.array(z.string()).optional(),
    }),
  ),
})

export const projectsSchema = z.array(projectSchema)
export const featuredProjectsSchema = z.array(projectSchema)
export const jobsSchema = z.array(jobSchema)
