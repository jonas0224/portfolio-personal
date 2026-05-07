'use client';

import type { LeadershipHighlight } from "@/types/content";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  highlights: LeadershipHighlight[];
};

export function LeadershipSection({ highlights }: Props) {
  return (
    <RevealSection id="leadership" className={SECTION_SHELL} delayMs={30}>
      <h2 className="numbered-heading">Leadership and Ownership</h2>
      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.title}
            className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6"
          >
            <h3 className="mb-3 text-[length:var(--fz-xl)] text-[var(--lightest-slate)]">
              {item.title}
            </h3>
            <p className="text-[var(--light-slate)]">{item.description}</p>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}
