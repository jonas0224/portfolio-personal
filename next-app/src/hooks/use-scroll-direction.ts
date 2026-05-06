'use client';

import { useEffect, useState } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

export type ScrollDirection = 'up' | 'down';

export function useScrollDirection(
  initialDirection: ScrollDirection = SCROLL_DOWN,
  thresholdPixels = 0,
  off = false,
) {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(initialDirection);

  useEffect(() => {
    if (off) {
      const resetId = window.setTimeout(() => setScrollDir(initialDirection), 0);
      return () => window.clearTimeout(resetId);
    }

    const threshold = thresholdPixels;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
}
