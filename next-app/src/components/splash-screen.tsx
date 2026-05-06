'use client';

import { useEffect } from 'react';

export function SplashScreen() {
  useEffect(() => {
    document.body.classList.add('portfolio-loading');
    return () => document.body.classList.remove('portfolio-loading');
  }, []);

  return (
    <div
      className="fixed inset-0 z-[99] flex items-center justify-center bg-[var(--dark-navy)]"
      aria-hidden
    >
      <div className="portfolio-splash-spinner" />
    </div>
  );
}
