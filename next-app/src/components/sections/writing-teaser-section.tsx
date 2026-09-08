import Link from 'next/link'
import type { WritingContent } from '@/types/content'
import { OutlineLink } from '@/ui/outline-link'
import { SECTION_SHELL } from '@/components/sections/constants'

type Props = {
  writing: WritingContent
}

export function WritingTeaserSection({ writing }: Props) {
  const notes = writing.topics.slice(0, 3)

  return (
    <section className={SECTION_SHELL}>
      <h2 className="section-heading">{writing.title}</h2>
      <p className="writing-teaser-lede">{writing.description}</p>
      {notes.length ? (
        <ul className="writing-teaser-list">
          {notes.map((topic) => (
            <li key={topic.title}>
              <article className="writing-teaser-item">
                <p className="writing-teaser-status">{topic.status}</p>
                <h3 className="writing-teaser-title">
                  <Link href={writing.ctaHref}>{topic.title}</Link>
                </h3>
                <p className="writing-teaser-blurb">{topic.blurb}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="writing-teaser-actions">
        <OutlineLink href={writing.ctaHref}>{writing.ctaLabel}</OutlineLink>
      </div>
    </section>
  )
}
