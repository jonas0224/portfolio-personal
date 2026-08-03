'use client';

import Image from 'next/image';
import type { AboutContent, JobContent } from '@/types/content';
import { ExternalLink } from '@/components/external-link';
import { RevealItem, RevealSection } from '@/components/reveal-section';
import { SECTION_SHELL } from '@/components/sections/constants';

type Props = {
  jobs: JobContent[];
  about: AboutContent;
};

export function JobsSection({ jobs, about }: Props) {
  return (
    <RevealSection id="jobs" className={SECTION_SHELL} delayMs={40}>
      <h2 className="section-heading">Experience</h2>
      <p className="experience-lede">
        {about.intro[0]} From banking to analytics and logistics, I own frontend
        delivery end to end — architecture, reviews, and the UI people actually
        use.
      </p>

      <div className="experience-layout">
        <ol className="experience-timeline">
          {jobs.map((job, i) => (
            <RevealItem
              key={`${job.company}-${job.range}`}
              as="li"
              delayMs={60 + i * 70}
              className="experience-item"
            >
              <h3 className="experience-role">{job.title}</h3>
              <p className="experience-meta">
                <ExternalLink className="experience-company" href={job.url}>
                  {job.company}
                </ExternalLink>
                <span> · {job.range}</span>
              </p>
              <ul className="fancy-list">
                {job.highlights.slice(0, 3).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </ol>

        <aside className="experience-aside">
          <RevealItem
            delayMs={120}
            className="experience-photo portfolio-about-photo"
          >
            <div className="portfolio-about-photo-frame">
              <Image
                src="/me.png"
                alt="Jonas Yambao"
                width={433}
                height={577}
                className="portfolio-about-photo-img"
                sizes="220px"
              />
            </div>
          </RevealItem>
          <div className="experience-skills">
            {about.skillGroups.map((group, i) => (
              <RevealItem
                key={group.label}
                delayMs={160 + i * 60}
                className="experience-skill-group"
              >
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>
        </aside>
      </div>
    </RevealSection>
  );
}
