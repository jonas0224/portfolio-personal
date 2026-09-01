import type { AboutContent, JobContent } from '@/types/content'
import { ExternalLink } from '@/components/external-link'
import { SECTION_SHELL } from '@/components/sections/constants'

type Props = {
  jobs: JobContent[]
  about: AboutContent
}

const PILLAR_LABELS = ['Core', 'UI systems', 'Quality', 'Delivery'] as const

export function JobsSection({ jobs, about }: Props) {
  const pillars = PILLAR_LABELS.map((label) =>
    about.skillGroups.find((group) => group.label === label),
  ).filter(Boolean)

  return (
    <section id="jobs" className={SECTION_SHELL}>
      <h2 className="section-heading">Experience</h2>
      <p className="experience-lede">{about.intro[0]}</p>

      <ol className="experience-timeline experience-timeline--compact">
        {jobs.map((job) => (
          <li key={`${job.company}-${job.range}`} className="experience-item">
            <h3 className="experience-role">{job.title}</h3>
            <p className="experience-meta">
              <ExternalLink className="experience-company" href={job.url}>
                {job.company}
              </ExternalLink>
              <span> · {job.range}</span>
            </p>
            <ul className="fancy-list">
              {job.highlights.slice(0, 2).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="experience-pillars" aria-label="Skill pillars">
        {pillars.map((group) =>
          group ? (
            <div key={group.label} className="experience-pillar">
              <h3>{group.label}</h3>
              <ul>
                {group.skills.slice(0, 6).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>
    </section>
  )
}
