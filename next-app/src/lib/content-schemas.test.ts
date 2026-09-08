import { describe, expect, it } from 'vitest'
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

describe('content schemas', () => {
  it('parses hero.json', () => {
    expect(() => heroSchema.parse(heroJson)).not.toThrow()
  })

  it('parses about.json', () => {
    expect(() => aboutSchema.parse(aboutJson)).not.toThrow()
  })

  it('parses jobs.json', () => {
    expect(() => jobsSchema.parse(jobsJson)).not.toThrow()
  })

  it('parses featured-projects.json', () => {
    const projects = featuredProjectsSchema.parse(featuredJson)
    expect(projects.length).toBeGreaterThan(0)
    for (const project of projects) {
      if (project.caseStudy) {
        expect(project.slug).toBeTruthy()
      }
    }
  })

  it('parses projects.json catalog', () => {
    const projects = projectsSchema.parse(projectsJson)
    expect(projects.length).toBeGreaterThan(0)
    const statuses = new Set(projects.map((p) => p.status))
    expect(statuses.has('Roadmap') || statuses.has('Parked')).toBe(true)
    expect(statuses.has('Built') || statuses.has('Live') || statuses.has('MVP')).toBe(true)
  })

  it('parses contact.json', () => {
    expect(() => contactSchema.parse(contactJson)).not.toThrow()
  })

  it('parses writing.json', () => {
    expect(() => writingSchema.parse(writingJson)).not.toThrow()
  })
})
