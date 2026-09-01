import Link from 'next/link'
import type { WritingContent } from '@/types/content'
import { OutlineLink } from '@/ui/outline-link'
import { SECTION_SHELL } from '@/components/sections/constants'

type Props = {
  writing: WritingContent
}

export function WritingTeaserSection({ writing }: Props) {
  const featured = writing.topics[0]

  return (
    <section className={SECTION_SHELL}>
      <p className="portfolio-contact-overline numbered-heading">{writing.eyebrow}</p>
      <h2 className="section-heading">{writing.title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-[var(--light-slate)]">{writing.description}</p>
      {featured ? (
        <article className="writing-teaser-card">
          <p className="writing-teaser-status">{featured.status}</p>
          <h3 className="writing-teaser-title">
            <Link href={writing.ctaHref}>{featured.title}</Link>
          </h3>
          <p className="writing-teaser-blurb">{featured.blurb}</p>
        </article>
      ) : null}
      <div className="mt-6 flex justify-center">
        <OutlineLink href={writing.ctaHref}>{writing.ctaLabel}</OutlineLink>
      </div>
    </section>
  )
}
