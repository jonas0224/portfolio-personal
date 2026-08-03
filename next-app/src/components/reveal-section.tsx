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
    <section ref={ref} className={mergedClassName} {...props}>
      {children}
    </section>
  );
}

type RevealItemProps = PropsWithChildren<
  Omit<HTMLAttributes<HTMLElement>, 'ref'> & {
    delayMs?: number;
    as?: 'div' | 'li' | 'article';
  }
>;

export function RevealItem({
  children,
  className,
  delayMs = 0,
  as = 'div',
  style,
  ...props
}: RevealItemProps) {
  const { ref, isRevealed } = useScrollReveal({
    delayMs,
    threshold: 0.12,
  });
  const mergedClassName = `${className ?? ''} sr-reveal sr-reveal--item ${
    isRevealed ? 'is-revealed' : ''
  }`.trim();

  if (as === 'li') {
    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        className={mergedClassName}
        style={style}
        {...props}
      >
        {children}
      </li>
    );
  }

  if (as === 'article') {
    return (
      <article
        ref={ref as React.RefObject<HTMLElement>}
        className={mergedClassName}
        style={style}
        {...props}
      >
        {children}
      </article>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={mergedClassName}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
