import Link from 'next/link'
import { LogoMark } from '@/components/logo-mark'
import type { AboutContent, HeroContent } from '@/types/content'
import { CONTACT_EMAIL } from '@/lib/site-contact'

interface HeroSectionProps {
  hero: HeroContent
  about: AboutContent
}

export function HeroSection({ hero, about }: HeroSectionProps) {
  const stack = about.skillGroups[0]?.skills ?? []

  return (
    <section id="hero" className="studio-hero">
      <div className="studio-hero-foreground">
        <p className="studio-kicker">{hero.eyebrow}</p>
        <h1 className="studio-statement">{hero.tagline}</h1>
        {hero.currently ? <p className="studio-now">{hero.currently}</p> : null}
        {stack.length ? (
          <p className="studio-stack">{stack.join(' · ')}</p>
        ) : null}
        <p className="studio-actions">
          <a href={`mailto:${CONTACT_EMAIL}`}>{hero.ctaLabel}</a>
          <Link href="/resume.pdf">Resume</Link>
        </p>
      </div>
      <div className="studio-hero-mark" aria-hidden="true">
        <LogoMark className="studio-hero-mark-spin" title="" />
      </div>
    </section>
  )
}
