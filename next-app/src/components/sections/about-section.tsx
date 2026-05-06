'use client';

import type { AboutContent } from "@/types/content";
import { ExternalLink } from "@/components/external-link";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  about: AboutContent;
};

export function AboutSection({ about }: Props) {
  return (
    <RevealSection id="about" className={SECTION_SHELL}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="portfolio-about-inner">
        <div className="portfolio-about-copy">
          <div className="space-y-4 text-[var(--light-slate)]">
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Over the years, I&apos;ve worked at{" "}
              {about.companies.map((company, index) => (
                <span key={company.name}>
                  <ExternalLink href={company.url}>{company.name}</ExternalLink>
                  {index < about.companies.length - 2 ? ", " : null}
                  {index === about.companies.length - 2 ? ", and " : null}
                </span>
              ))}{" "}
              {about.companiesSummary}
            </p>
          </div>
          <ul className="portfolio-about-skills">
            {about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="portfolio-about-photo">
          <div className="portfolio-about-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me.png" alt="Portrait" width={300} height={300} />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
