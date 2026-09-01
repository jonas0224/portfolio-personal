import type { ProjectContent } from '@/types/content'
import { ExternalLink } from '@/components/external-link'
import { SECTION_SHELL } from '@/components/sections/constants'

type Props = {
  projects: ProjectContent[]
}

const HORIZON_STATUSES = new Set<NonNullable<ProjectContent['status']>>(['Roadmap', 'Parked'])

function statusLabel(status: ProjectContent['status']) {
  if (status === 'Roadmap') return 'Roadmap'
  if (status === 'Parked') return 'Parked'
  return status ?? 'Project'
}

export function HorizonSection({ projects }: Props) {
  const horizon = projects.filter(
    (project) => project.status && HORIZON_STATUSES.has(project.status),
  )

  if (!horizon.length) return null

  return (
    <section id="horizon" className={SECTION_SHELL} aria-labelledby="horizon-heading">
      <h2 id="horizon-heading" className="section-heading">
        On the horizon
      </h2>
      <p className="horizon-lede">
        Parked bets and roadmap ideas kept in the portfolio index. Not on the main product tour
        until they ship or need a case study.
      </p>
      <ul className="horizon-list">
        {horizon.map((project) => (
          <li key={project.slug ?? project.title} className="horizon-item">
            <div className="horizon-item-head">
              <p className="horizon-status">{statusLabel(project.status)}</p>
              <h3 className="horizon-title">{project.title}</h3>
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
            {project.github || project.external ? (
              <div className="horizon-actions">
                {project.github ? (
                  <ExternalLink href={project.github}>View repository</ExternalLink>
                ) : null}
                {project.external && project.external !== project.github ? (
                  <ExternalLink href={project.external}>Learn more</ExternalLink>
                ) : null}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
