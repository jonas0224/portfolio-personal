import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { SITE_URL } from '@/lib/site'
import { featuredProjects } from '@/data/site'

function latestContentMtime(): Date {
  const contentDir = path.join(process.cwd(), 'src/content/site')
  let latest = 0

  try {
    for (const name of fs.readdirSync(contentDir)) {
      if (!name.endsWith('.json')) continue
      const mtime = fs.statSync(path.join(contentDir, name)).mtimeMs
      if (mtime > latest) latest = mtime
    }
  } catch {
    return new Date()
  }

  return latest ? new Date(latest) : new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, '')
  const lastModified = latestContentMtime()

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/writing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  for (const project of featuredProjects) {
    if (!project.slug || !project.caseStudy) continue
    entries.push({
      url: `${base}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    })
  }

  return entries
}
