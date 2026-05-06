'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type RevealOptions = {
  delayMs?: number;
  threshold?: number;
};

export function useScrollReveal(options: RevealOptions = {}) {
  const { delayMs = 0, threshold = 0.25 } = options;
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      const id = window.setTimeout(() => setIsRevealed(true), 0);
      return () => window.clearTimeout(id);
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    let timeoutId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }
        timeoutId = window.setTimeout(() => setIsRevealed(true), delayMs);
        observer.disconnect();
      },
      {
        threshold,
      },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delayMs, prefersReducedMotion, threshold]);

  return { ref, isRevealed };
}
