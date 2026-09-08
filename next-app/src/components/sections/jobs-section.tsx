import type { AboutContent, JobContent } from '@/types/content'
import { ExternalLink } from '@/components/external-link'
import { SECTION_SHELL } from '@/components/sections/constants'

interface JobsSectionProps {
  jobs: JobContent[]
  about: AboutContent
}

export function JobsSection({ jobs, about }: JobsSectionProps) {
  return (
    <section id="jobs" className={SECTION_SHELL}>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-lede">
        {about.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      {about.companies.length ? (
        <>
          <ul className="experience-companies" aria-label="Companies">
            {about.companies.map((company) => (
              <li key={company.url}>
                <ExternalLink href={company.url}>{company.name}</ExternalLink>
              </li>
            ))}
          </ul>
          <p className="experience-companies-summary">{about.companiesSummary}</p>
        </>
      ) : null}

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
        {about.skillGroups.map((group) => (
          <div key={group.label} className="experience-pillar">
            <h3>{group.label}</h3>
            <ul>
              {group.skills.slice(0, 6).map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
