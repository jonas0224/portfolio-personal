import Link from 'next/link'
import type { ProjectContent } from '@/types/content'
import { ProductCardPreview } from '@/components/sections/product-card-preview'
import { ProductGalleryMore } from '@/components/sections/product-gallery-more'
import { SECTION_SHELL } from '@/components/sections/constants'
import { WORK_HERO_SLUGS, WORK_MORE_SLUGS, WORK_STANDARD_SLUGS } from '@/lib/product-tour'
import { projectOwnershipLabel } from '@/lib/project-ownership'

interface FeaturedProjectsSectionProps {
  projects: ProjectContent[]
}

const pickBySlugs = (projects: ProjectContent[], slugs: readonly string[]) =>
  slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean) as ProjectContent[]

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const spreads = pickBySlugs(projects, WORK_HERO_SLUGS)
  const supporting = pickBySlugs(projects, WORK_STANDARD_SLUGS)
  const more = pickBySlugs(projects, WORK_MORE_SLUGS)

  return (
    <section id="work" className={`${SECTION_SHELL} studio-work`}>
      <p className="studio-kicker">02 / Work</p>
      <h2 className="studio-section-title">Surfaces I have actually shipped.</h2>
      <div className="work-spreads">
        {spreads.map((project, index) => (
          <article
            key={project.slug ?? project.title}
            className={`work-spread${index % 2 === 1 ? ' is-flip' : ''}`}
          >
            <div className="work-spread-copy">
              <p className="work-spread-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {projectOwnershipLabel(project.slug)}
              </p>
              <h3>
                {project.slug && project.caseStudy ? (
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              <ul>
                {project.tech.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <ProductCardPreview frame="bare" slug={project.slug} title={project.title} />
          </article>
        ))}
      </div>
      {supporting.length ? (
        <ul className="work-supporting">
          {supporting.map((project) => (
            <li key={project.slug ?? project.title}>
              {project.slug && project.caseStudy ? (
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              ) : (
                <span>{project.title}</span>
              )}
              <em>{projectOwnershipLabel(project.slug)}</em>
            </li>
          ))}
        </ul>
      ) : null}
      <ProductGalleryMore projects={more} />
    </section>
  )
}
