'use client';

import type { QualitySignal } from "@/types/content";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  signals: QualitySignal[];
};

export function QualitySignalsSection({ signals }: Props) {
  return (
    <RevealSection id="quality" className={SECTION_SHELL} delayMs={60}>
      <h2 className="numbered-heading">Engineering Quality Signals</h2>
      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
        {signals.map((signal) => (
          <li
            key={signal.title}
            className="portfolio-card-shadow rounded-[var(--border-radius)] border border-[var(--lightest-navy)] bg-[var(--light-navy)] p-5"
          >
            <p className="mb-2 font-mono text-[length:var(--fz-xs)] text-[var(--green)]">
              {signal.title}
            </p>
            <p className="text-[var(--light-slate)]">{signal.proof}</p>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}
