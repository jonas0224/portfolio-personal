import type { AboutContent } from '@/types/content'
import { SECTION_SHELL } from '@/components/sections/constants'

interface SkillsSectionProps {
  about: AboutContent
}

export function SkillsSection({ about }: SkillsSectionProps) {
  return (
    <section id="skills" className={`${SECTION_SHELL} studio-skills`}>
      <p className="studio-kicker">04 / Skills</p>
      <h2 className="studio-section-title">The stack, when you want the long list.</h2>
      <div className="skill-run" aria-label="Skills">
        {about.skillGroups.map((group) => (
          <p key={group.label}>
            <span>{group.label}</span>
            {group.skills.join(' · ')}
          </p>
        ))}
      </div>
    </section>
  )
}
