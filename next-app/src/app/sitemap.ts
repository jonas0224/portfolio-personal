import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { featuredProjects } from '@/data/site'

const SITEMAP_LAST_MODIFIED = new Date('2026-09-01T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, '')

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: SITEMAP_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/writing`,
      lastModified: SITEMAP_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  for (const project of featuredProjects) {
    if (!project.slug || !project.caseStudy) continue
    entries.push({
      url: `${base}/projects/${project.slug}`,
      lastModified: SITEMAP_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.7,
    })
  }

  return entries
}
