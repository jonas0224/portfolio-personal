import { ButtonLink } from '@/ui/button'
import type { HeroContent } from '@/types/content'
import { CONTACT_EMAIL } from '@/lib/site-contact'
import { HeroProductVisual } from '@/components/sections/hero-product-visual'

interface HeroSectionProps {
  hero: HeroContent
}

/**
 * Server-rendered hero copy. Entrance motion is CSS-gated via
 * `@media (prefers-reduced-motion: no-preference)` on `.hero-enter*`.
 */
export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="hero" className="portfolio-hero">
      <div className="portfolio-hero-copy">
        <p className="portfolio-hero-eyebrow hero-enter">{hero.eyebrow}</p>
        <h1 className="hero-name hero-enter hero-enter-delay-1">{hero.name}</h1>
        <p className="hero-tagline hero-enter hero-enter-delay-2">{hero.tagline}</p>
        <p className="hero-description hero-enter hero-enter-delay-3">{hero.description}</p>
        <div className="portfolio-hero-actions hero-enter hero-enter-delay-4">
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} rel="noreferrer" size="lg" variant="outline">
            {hero.ctaLabel}
          </ButtonLink>
          <ButtonLink href="/#jobs" size="lg" variant="ghost">
            {hero.ctaSecondaryLabel}
          </ButtonLink>
        </div>
        {hero.proofChips?.length ? (
          <ul
            className="portfolio-hero-proof hero-enter hero-enter-delay-4"
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
