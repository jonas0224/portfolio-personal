'use client';

import Link from "next/link";
import type { ProjectContent } from "@/types/content";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  projects: ProjectContent[];
};

export function RoadmapSection({ projects }: Props) {
  const roadmapItems = projects.filter((project) => project.status === "Roadmap");

  return (
    <RevealSection id="roadmap" className={SECTION_SHELL} delayMs={120}>
      <h2 className="numbered-heading">Now and Next</h2>
      <p className="mb-6 max-w-[760px] text-[var(--light-slate)]">
        Active execution roadmap focused on platform reliability, delivery speed, and
        product leverage.
      </p>
      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
        {roadmapItems.map((project) => (
          <li
            key={project.title}
            className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6"
          >
            <p className="mb-2 font-mono text-[length:var(--fz-xs)] text-[var(--green)]">
              Roadmap
            </p>
            <h3 className="mb-2 text-[length:var(--fz-xl)] text-[var(--lightest-slate)]">
              {project.title}
            </h3>
            <p className="text-[var(--light-slate)]">{project.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/#projects" className="btn-outline-sm">
          View complete project list
        </Link>
      </div>
    </RevealSection>
  );
}
