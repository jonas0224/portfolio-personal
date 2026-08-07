import type { Metadata } from 'next'
import Link from 'next/link'
import { SECTION_SHELL } from '@/components/sections/constants'
import { writing } from '@/data/site'
import { OutlineLink } from '@/ui/outline-link'

export const metadata: Metadata = {
  title: 'Notes',
  description: writing.description,
}

export default function WritingPage() {
  return (
    <div className={SECTION_SHELL}>
      <p className="portfolio-work-overline">{writing.eyebrow}</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,48px)] font-semibold tracking-tight text-[var(--lightest-slate)]">
        {writing.title}
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--light-slate)]">{writing.description}</p>

      <div className="writing-notes mt-12">
        {writing.topics.map((topic) => (
          <article key={topic.title} className="writing-note">
            <header className="writing-note-header">
              <span className="writing-topic-status">{topic.status}</span>
              <h2 className="writing-note-title">{topic.title}</h2>
              <p className="writing-note-lede">{topic.blurb}</p>
            </header>
            {topic.body?.length ? (
              <div className="writing-note-body">
                {topic.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <OutlineLink href="/#contact">Get in touch</OutlineLink>
        <Link
          href="/"
          className="inline-flex items-center px-3 text-sm text-[var(--copper-bright)] underline decoration-[var(--copper)]/30 underline-offset-4"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
