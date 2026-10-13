import type { AboutContent, JobContent } from '@/types/content'
import { ExternalLink } from '@/components/external-link'
import { SECTION_SHELL } from '@/components/sections/constants'

interface JobsSectionProps {
  jobs: JobContent[]
  about: AboutContent
}

export function JobsSection({ jobs, about }: JobsSectionProps) {
  return (
    <section id="jobs" className={`${SECTION_SHELL} studio-experience`}>
      <p className="studio-kicker">01 / Experience</p>
      <h2 className="studio-section-title">
        Seven years, mostly where a bad release is expensive.
      </h2>
      <div className="experience-lede">
        {about.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <div className="exp-sheet" role="table" aria-label="Roles">
        <div className="exp-sheet-head" role="row">
          <span role="columnheader">Role</span>
          <span role="columnheader">Company</span>
          <span role="columnheader">When</span>
        </div>
        {jobs.map((job) => (
          <div key={`${job.company}-${job.range}`} className="exp-sheet-row" role="row">
            <strong role="cell">{job.title}</strong>
            <span role="cell">
              <ExternalLink href={job.url}>{job.company}</ExternalLink>
            </span>
            <span role="cell">{job.range}</span>
            <p role="cell">{job.highlights[0]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
