import Link from 'next/link'
import type { ProjectContent } from '@/types/content'
import type { WorkTier } from '@/lib/product-tour'
import { OutlineLink } from '@/ui/outline-link'
import { ExternalLink } from '@/components/external-link'
import { ProductCardPreview } from '@/components/sections/product-card-preview'

type Props = {
  project: ProjectContent
  tier: WorkTier
}

function statusLabel(status?: ProjectContent['status']) {
  if (status === 'Built') return 'Shipped'
  if (status === 'Live') return 'Live · maintained'
  if (status === 'MVP') return 'Personal MVP'
  return status ?? 'Project'
}

export function ProductCard({ project, tier }: Props) {
  const tierClass =
    tier === 'banner'
      ? 'product-bento-card--banner'
      : tier === 'hero'
        ? 'product-bento-card--hero'
        : tier === 'standard'
          ? 'product-bento-card--standard'
          : 'product-bento-card--compact'

  return (
    <article className={`product-card product-bento-card ${tierClass}`}>
      <ProductCardPreview slug={project.slug} title={project.title} />
      <div className="product-card-body">
        <p className="portfolio-work-overline">{statusLabel(project.status)}</p>
        <h3 className="product-card-title">
          {project.slug && project.caseStudy ? (
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          ) : project.external ? (
            <ExternalLink href={project.external}>{project.title}</ExternalLink>
          ) : (
            project.title
          )}
        </h3>
        {project.impact?.length ? (
          <ul className="portfolio-work-impact">
            {project.impact.slice(0, tier === 'compact' ? 2 : 3).map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        ) : null}
        <p className="product-card-desc">{project.description}</p>
        {tier !== 'compact' ? (
          <ul className="portfolio-work-tech">
            {project.tech.slice(0, tier === 'banner' ? 6 : 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}
        {project.slug && project.caseStudy ? (
          <div className="product-card-actions">
            <OutlineLink href={`/projects/${project.slug}`}>Read case study</OutlineLink>
            {project.external ? (
              <ExternalLink className="product-card-external" href={project.external}>
                {project.status === 'Live' ? 'Open live' : 'View project'}
              </ExternalLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
