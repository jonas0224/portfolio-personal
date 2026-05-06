'use client';

import type { ContactContent } from "@/types/content";
import { RevealSection } from "@/components/reveal-section";
type Props = {
  contact: ContactContent;
  email: string;
};

export function ContactSection({ contact, email }: Props) {
  return (
    <RevealSection
      id="contact"
      className="portfolio-contact portfolio-section mx-auto w-full max-w-[600px] pb-[100px] text-center [@media(max-width:768px)]:pb-[50px]"
      delayMs={150}
    >
      <h2 className="numbered-heading portfolio-contact-overline">{contact.overline}</h2>
      <h2 className="portfolio-contact-title mt-3 text-[var(--lightest-slate)]">
        {contact.title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-[var(--light-slate)]">{contact.description}</p>
      <a className="btn-outline email-link inline-block" href={`mailto:${email}`}>
        {contact.ctaLabel}
      </a>
    </RevealSection>
  );
}
