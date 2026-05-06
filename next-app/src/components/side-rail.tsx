'use client';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import { LOADER_DELAY_MS } from '@/lib/timing';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type SideRailProps = {
  isHome: boolean;
  orientation: 'left' | 'right';
  children: React.ReactNode;
};

export function SideRail({ isHome, orientation, children }: SideRailProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = useState(!isHome);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      const id = window.setTimeout(() => setIsMounted(true), 0);
      return () => window.clearTimeout(id);
    }
    const t = window.setTimeout(() => setIsMounted(true), LOADER_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [isHome, prefersReducedMotion]);

  const sideClass =
    orientation === 'left' ? 'portfolio-side portfolio-side--left' : 'portfolio-side portfolio-side--right';

  if (prefersReducedMotion) {
    return <div className={sideClass}>{children}</div>;
  }

  return (
    <div className={sideClass}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            nodeRef={panelRef}
            classNames={isHome ? 'fade' : ''}
            timeout={isHome ? LOADER_DELAY_MS : 0}
          >
            <div ref={panelRef}>{children}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}
