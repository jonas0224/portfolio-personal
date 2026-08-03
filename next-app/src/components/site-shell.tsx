'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ScrollProgress } from '@/components/scroll-progress';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }, [pathname]);

  const mainClassName = isHome
    ? 'portfolio-main portfolio-main--fill-height'
    : 'portfolio-main';

  return (
    <>
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      <ScrollProgress />
      <SiteHeader isHome={isHome} />

      <div id="content">
        <main className={mainClassName}>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
