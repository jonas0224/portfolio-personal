import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { featuredProjects } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, '');

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/writing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  for (const project of featuredProjects) {
    if (!project.slug || !project.caseStudy) continue;
    entries.push({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    });
  }

  return entries;
}
