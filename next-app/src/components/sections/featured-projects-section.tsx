'use client'

import type { ProjectContent } from '@/types/content'
import { OutlineLink } from '@/ui/outline-link'
import { ExternalLink } from '@/components/external-link'
import { RevealItem, RevealSection } from '@/components/reveal-section'
import { SECTION_SHELL } from '@/components/sections/constants'
import { ProductCardPreview } from '@/components/sections/product-card-preview'

type Props = {
  projects: ProjectContent[]
}

const HOME_SLUGS = [
  'pos-inventory-system',
  'frontend-design-system',
  'flashcut',
  'realtime-operations-dashboard',
  'ai-incident-triage',
  'portfolio-content-management',
  'kasama-wfh-companion',
]

export function FeaturedProjectsSection({ projects }: Props) {
  const primary = HOME_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    Boolean,
  ) as ProjectContent[]

  const more = projects.filter((p) => p.slug && p.caseStudy && !HOME_SLUGS.includes(p.slug))

  return (
    <RevealSection id="work" className={SECTION_SHELL} delayMs={40}>
      <h2 className="section-heading">Selected products</h2>
      <ul className="product-gallery">
        {primary.map((project, i) => (
          <RevealItem
            key={project.slug ?? project.title}
            as="li"
            delayMs={50 + i * 60}
            className="product-card"
          >
            <ProductCardPreview slug={project.slug} title={project.title} />
            <div className="product-card-body">
              <p className="portfolio-work-overline">
                {project.status === 'Built'
                  ? 'Shipped'
                  : project.status === 'Live'
                    ? 'Live · maintained'
                    : project.status === 'MVP'
                      ? 'Personal MVP'
                      : (project.status ?? 'Project')}
              </p>
              <h3 className="product-card-title">
                <ExternalLink href={project.external}>{project.title}</ExternalLink>
              </h3>
              {project.impact?.length ? (
                <ul className="portfolio-work-impact">
                  {project.impact.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              ) : null}
              <p className="product-card-desc">{project.description}</p>
              <ul className="portfolio-work-tech">
                {project.tech.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.slug && project.caseStudy ? (
                <OutlineLink href={`/projects/${project.slug}`}>Read case study</OutlineLink>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </ul>
      {more.length ? (
        <p className="product-gallery-more">
          More case studies:{' '}
          {more.map((project, index) => (
            <span key={project.slug}>
              <a href={`/projects/${project.slug}`}>{project.title}</a>
              {index < more.length - 1 ? ' · ' : null}
            </span>
          ))}
        </p>
      ) : null}
    </RevealSection>
  )
}
