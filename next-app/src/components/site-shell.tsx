'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SPLASH_DURATION_MS } from '@/lib/timing';
import { SideEmail } from '@/components/side-email';
import { SideSocial } from '@/components/side-social';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SplashScreen } from '@/components/splash-screen';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const prefersReducedMotion = usePrefersReducedMotion();
  const [contentReady, setContentReady] = useState(!isHome);

  useEffect(() => {
    const timers: number[] = [];

    if (!isHome || prefersReducedMotion) {
      timers.push(window.setTimeout(() => setContentReady(true), 0));
    } else {
      timers.push(window.setTimeout(() => setContentReady(false), 0));
      timers.push(
        window.setTimeout(() => setContentReady(true), SPLASH_DURATION_MS),
      );
    }

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [isHome, prefersReducedMotion]);

  useEffect(() => {
    if (!contentReady && isHome) {
      return;
    }
    const hash = window.location.hash;
    if (!hash) {
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }, [contentReady, isHome, pathname]);

  const mainClassName = isHome
    ? 'portfolio-main portfolio-main--fill-height'
    : 'portfolio-main';

  return (
    <>
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      {!contentReady && isHome && !prefersReducedMotion ? <SplashScreen /> : null}

      {contentReady ? (
        <>
          <SiteHeader isHome={isHome} />
          <SideSocial isHome={isHome} />
          <SideEmail isHome={isHome} />
        </>
      ) : null}

      <div id="content">
        <main
          className={mainClassName}
          style={{
            visibility: contentReady ? 'visible' : 'hidden',
          }}
          aria-hidden={!contentReady}
        >
          {children}
        </main>
        {contentReady ? <SiteFooter /> : null}
      </div>
    </>
  );
}
