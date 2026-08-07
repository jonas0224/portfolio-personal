'use client'

import type { ContactContent } from '@/types/content'
import { RevealSection } from '@/components/reveal-section'
import { ButtonLink } from '@/ui/button'
import { SOCIAL_LINKS } from '@/lib/site-contact'
import type { SocialIconName } from '@/components/icons/social-icon'
import { SocialIcon } from '@/components/icons/social-icon'

type Props = {
  contact: ContactContent
  email: string
}

function iconFor(name: string): SocialIconName {
  if (name === 'GitHub' || name === 'Instagram' || name === 'Linkedin') {
    return name
  }
  return 'GitHub'
}

function labelFor(name: string): string {
  if (name === 'Linkedin') return 'LinkedIn'
  return name
}

export function ContactSection({ contact, email }: Props) {
  return (
    <RevealSection
      id="contact"
      className="portfolio-contact portfolio-section mx-auto w-full max-w-[640px] pb-[100px] text-center [@media(max-width:768px)]:pb-[50px]"
      delayMs={80}
    >
      <h2 className="section-heading justify-center">{contact.overline}</h2>
      <h2 className="portfolio-contact-title text-[var(--lightest-slate)]">{contact.title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-[var(--light-slate)]">{contact.description}</p>
      <ButtonLink className="email-link mt-6" href={`mailto:${email}`} size="lg" variant="outline">
        {contact.ctaLabel}
      </ButtonLink>

      <ul className="portfolio-contact-social" aria-label="Social profiles">
        {SOCIAL_LINKS.map(({ name, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <SocialIcon name={iconFor(name)} />
              <span>{labelFor(name)}</span>
            </a>
          </li>
        ))}
      </ul>
    </RevealSection>
  )
}
