'use client';

import type { ProjectContent } from "@/types/content";
import { ExternalLink } from "@/components/external-link";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  projects: ProjectContent[];
};

export function ProjectsSection({ projects }: Props) {
  return (
    <RevealSection
      id="projects"
      className={`${SECTION_SHELL} flex flex-col items-center`}
      delayMs={100}
    >
      <h2 className="numbered-heading text-[clamp(24px,5vw,var(--fz-heading))]">
        Other Projects
      </h2>
      <ul className="portfolio-projects-grid m-0 mt-[50px] grid w-full list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[15px] p-0 [@media(max-width:1080px)]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {projects.map((project) => (
          <li key={project.title} className="cursor-default">
            <div className="project-inner portfolio-card-shadow flex h-full flex-col items-start justify-between rounded-[var(--border-radius)] bg-[var(--light-navy)] p-7 transition-[var(--transition)] [@media(max-width:768px)]:p-6">
              <div>
                <h3 className="mb-[10px] text-[length:var(--fz-xxl)] text-[var(--lightest-slate)]">
                  <ExternalLink href={project.external}>{project.title}</ExternalLink>
                </h3>
                <p className="text-[17px] text-[var(--light-slate)]">{project.description}</p>
              </div>
              <ul className="mt-5 mb-0 flex list-none flex-wrap gap-x-[15px] p-0 font-mono text-[length:var(--fz-xxs)] text-[var(--light-slate)]">
                {project.tech.slice(0, 6).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}
