'use client';

import type { HTMLAttributes, PropsWithChildren } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

type RevealSectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    delayMs?: number;
  }
>;

export function RevealSection({
  children,
  className,
  delayMs,
  ...props
}: RevealSectionProps) {
  const { ref, isRevealed } = useScrollReveal({ delayMs });
  const mergedClassName = `${className ?? ''} sr-reveal ${
    isRevealed ? 'is-revealed' : ''
  }`.trim();

  return (
    <section
      ref={ref}
      className={mergedClassName}
      {...props}
    >
      {children}
    </section>
  );
}
