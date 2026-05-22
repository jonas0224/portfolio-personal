'use client';

import type { HeroContent } from '@/types/content';
import type { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from '@/components/external-link';
import { ButtonLink } from '@/ui/button';
import { NAV_DELAY_MS, LOADER_DELAY_MS } from '@/lib/timing';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type Props = {
  hero: HeroContent;
};

function HeroFadeLine({
  children,
  itemIndex,
  timeout,
}: {
  children: ReactNode;
  itemIndex: number;
  timeout: number;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="fadeup"
      timeout={timeout}
    >
      <div
        ref={nodeRef}
        style={{ transitionDelay: `${(itemIndex + 1) * 100}ms` }}
      >
        {children}
      </div>
    </CSSTransition>
  );
}

export function HeroSection({ hero }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      const id = window.setTimeout(() => setIsMounted(true), 0);
      return () => window.clearTimeout(id);
    }
    const t = window.setTimeout(() => setIsMounted(true), NAV_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [prefersReducedMotion]);

  const one = (
    <h1 className="intro-line">{hero.greeting}</h1>
  );
  const two = (
    <h2 className="big-heading text-[var(--lightest-slate)]">{hero.name}</h2>
  );
  const three = (
    <h3 className="big-heading hero-tagline">{hero.tagline}</h3>
  );
  const four = (
    <p className="hero-description">
      {hero.description}{' '}
      {hero.companies.map((company, index) => (
        <span key={company.name}>
          <ExternalLink href={company.url}>{company.name}</ExternalLink>
          {index < hero.companies.length - 2 ? ', ' : null}
          {index === hero.companies.length - 2 ? ', and ' : null}
          {index === hero.companies.length - 1 ? '.' : null}
        </span>
      ))}
    </p>
  );
  const five = (
    <ButtonLink
      className="hero-cta"
      href={`mailto:${hero.ctaEmail}`}
      rel="noreferrer"
      size="lg"
      target="_blank"
      variant="outline"
    >
      {hero.ctaLabel}
    </ButtonLink>
  );

  const items = [one, two, three, four, five];

  return (
    <section id="hero" className="portfolio-hero">
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <HeroFadeLine key={i} itemIndex={i} timeout={LOADER_DELAY_MS}>
                {item}
              </HeroFadeLine>
            ))}
        </TransitionGroup>
      )}
    </section>
  );
}
