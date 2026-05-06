'use client';

import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import { LOADER_DELAY_MS } from '@/lib/timing';
import { NAV_LINKS } from '@/lib/nav';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { MobileMenu } from '@/components/mobile-menu';

type SiteHeaderProps = {
  isHome: boolean;
};

type NavLinkItem = (typeof NAV_LINKS)[number];

function NavFadeLi({
  link,
  delayMs,
  timeout,
  transitionClassNames,
}: {
  link: NavLinkItem;
  delayMs: number;
  timeout: number;
  transitionClassNames: string;
}) {
  const nodeRef = useRef<HTMLLIElement>(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={transitionClassNames}
      timeout={timeout}
    >
      <li ref={nodeRef} style={{ transitionDelay: `${delayMs}ms` }}>
        <Link href={link.href}>{link.name}</Link>
      </li>
    </CSSTransition>
  );
}

export function SiteHeader({ isHome }: SiteHeaderProps) {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  const logoNodeRef = useRef<HTMLDivElement>(null);
  const resumeNodeRef = useRef<HTMLDivElement>(null);
  const menuNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      const id = window.setTimeout(() => setIsMounted(true), 0);
      return () => window.clearTimeout(id);
    }
    const timeoutId = window.setTimeout(() => setIsMounted(true), 100);
    return () => window.clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  const timeout = isHome ? LOADER_DELAY_MS : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  let motionAttr: 'none' | 'compact-up' | 'hide-down' = 'none';
  if (!prefersReducedMotion && !scrolledToTop) {
    motionAttr = scrollDirection === 'up' ? 'compact-up' : 'hide-down';
  }

  const headerMods =
    !prefersReducedMotion && !scrolledToTop ? 'portfolio-nav--motion' : '';

  const logo = (
    <div className="portfolio-logo-wrap" tabIndex={-1}>
      <Link href="/" aria-label="home">
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG logo */}
        <img src="/favicon-logo.svg" alt="" width={42} height={42} />
      </Link>
    </div>
  );

  const resume = (
    <a
      className="btn-outline-sm portfolio-nav-resume"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  const linkList = (
    <ol>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ol>
  );

  return (
    <header
      className={`portfolio-nav ${headerMods}`}
      data-motion-state={motionAttr}
    >
      <nav className="portfolio-nav-inner" aria-label="Primary">
        {prefersReducedMotion ? (
          <>
            {logo}
            <div className="portfolio-nav-links">
              {linkList}
              {resume}
            </div>
            <MobileMenu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition
                  nodeRef={logoNodeRef}
                  classNames={fadeClass}
                  timeout={timeout}
                >
                  <div ref={logoNodeRef}>{logo}</div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <div className="portfolio-nav-links">
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    NAV_LINKS.map((link, i) => (
                      <NavFadeLi
                        key={link.href}
                        link={link}
                        delayMs={isHome ? i * 100 : 0}
                        timeout={timeout}
                        transitionClassNames={fadeDownClass}
                      />
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition
                    nodeRef={resumeNodeRef}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <div
                      ref={resumeNodeRef}
                      style={{
                        transitionDelay: `${isHome ? NAV_LINKS.length * 100 : 0}ms`,
                      }}
                    >
                      {resume}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition
                  nodeRef={menuNodeRef}
                  classNames={fadeClass}
                  timeout={timeout}
                >
                  <div ref={menuNodeRef}>
                    <MobileMenu />
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </nav>
    </header>
  );
}
