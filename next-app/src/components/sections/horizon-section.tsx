import Link from 'next/link'
import type { ProjectContent } from '@/types/content'
import { ExternalLink } from '@/components/external-link'
import { SECTION_SHELL } from '@/components/sections/constants'
import { projectExternalCtaLabel, projectOwnershipLabel } from '@/lib/project-ownership'

interface HorizonSectionProps {
  projects: ProjectContent[]
  caseStudySlugs?: string[]
}

const STATUS_ORDER: NonNullable<ProjectContent['status']>[] = [
  'Live',
  'MVP',
  'Built',
  'Roadmap',
  'Parked',
]

function statusRank(status: ProjectContent['status']) {
  const index = status ? STATUS_ORDER.indexOf(status) : -1
  return index === -1 ? STATUS_ORDER.length : index
}

function statusLabel(status: ProjectContent['status']) {
  return status ?? 'Project'
}

export function HorizonSection({ projects, caseStudySlugs = [] }: HorizonSectionProps) {
  const caseStudySet = new Set(caseStudySlugs)
  const catalog = [...projects].sort((a, b) => {
    const byStatus = statusRank(a.status) - statusRank(b.status)
    if (byStatus !== 0) return byStatus
    return a.title.localeCompare(b.title)
  })

  if (!catalog.length) return null

  return (
    <section id="projects" className={SECTION_SHELL} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-heading">
        All projects
      </h2>
      <p className="horizon-lede">
        Full portfolio index: live products, shipped builds, personal MVPs, and what is still on the
        roadmap. Selected products above are the deeper product-tour cards and case studies.
      </p>
      <ul className="horizon-list">
        {catalog.map((project) => {
          const caseStudyHref =
            project.slug && caseStudySet.has(project.slug) ? `/projects/${project.slug}` : null
          const ownership = projectOwnershipLabel(project.slug)

          return (
            <li key={project.slug ?? project.title} className="horizon-item">
              <div className="horizon-item-head">
                <p className="horizon-status">
                  {ownership}
                  <span aria-hidden="true"> · </span>
                  {statusLabel(project.status)}
                </p>
                <h3 className="horizon-title">
                  {caseStudyHref ? (
                    <Link href={caseStudyHref}>{project.title}</Link>
                  ) : (
                    project.title
                  )}
                </h3>
              </div>
              <p className="horizon-desc">{project.description}</p>
              {project.impact?.length ? (
                <ul className="horizon-impact">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <ul className="horizon-tech">
                {project.tech.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="horizon-actions">
                {caseStudyHref ? <Link href={caseStudyHref}>Case study</Link> : null}
                {project.github ? (
                  <ExternalLink href={project.github}>View repository</ExternalLink>
                ) : null}
                {project.external && project.external !== project.github ? (
                  <ExternalLink href={project.external}>
                    {projectExternalCtaLabel(project)}
                  </ExternalLink>
                ) : null}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
