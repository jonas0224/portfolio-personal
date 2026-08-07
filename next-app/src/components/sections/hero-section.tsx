'use client'

import { ButtonLink } from '@/ui/button'
import type { HeroContent } from '@/types/content'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { HeroProductVisual } from '@/components/sections/hero-product-visual'

type Props = {
  hero: HeroContent
}

export function HeroSection({ hero }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const enter = prefersReducedMotion ? '' : 'hero-enter'

  return (
    <section id="hero" className="portfolio-hero">
      <div className="portfolio-hero-copy">
        <p className={`portfolio-hero-eyebrow ${enter}`}>{hero.eyebrow}</p>
        <h1 className={`hero-name ${enter} hero-enter-delay-1`}>{hero.name}</h1>
        <p className={`hero-tagline ${enter} hero-enter-delay-2`}>{hero.tagline}</p>
        <p className={`hero-description ${enter} hero-enter-delay-3`}>{hero.description}</p>
        <div className={`portfolio-hero-actions ${enter} hero-enter-delay-4`}>
          <ButtonLink href={`mailto:${hero.ctaEmail}`} rel="noreferrer" size="lg" variant="outline">
            {hero.ctaLabel}
          </ButtonLink>
          <ButtonLink href="/#jobs" size="lg" variant="ghost">
            {hero.ctaSecondaryLabel}
          </ButtonLink>
        </div>
        {hero.proofChips?.length ? (
          <ul
            className={`portfolio-hero-proof ${enter} hero-enter-delay-4`}
            aria-label="Focus areas"
          >
            {hero.proofChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <HeroProductVisual />
    </section>
  )
}
