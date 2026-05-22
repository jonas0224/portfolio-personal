'use client';

import type { ProjectContent } from "@/types/content";
import { OutlineLink } from "@/ui/outline-link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";
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
          <li key={project.title}>
            <Card className="ds-card-portfolio h-full p-6 shadow-none motion-safe:hover:translate-y-0">
              <CardHeader className="mb-0">
                <p className="mb-2 font-mono text-[length:var(--fz-xs)] text-[var(--green)]">
                  Roadmap
                </p>
                <CardTitle className="mb-2 text-[length:var(--fz-xl)] font-semibold text-[var(--lightest-slate)]">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-base text-[var(--light-slate)]">
                {project.description}
              </CardDescription>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <OutlineLink href="/#projects">View complete project list</OutlineLink>
      </div>
    </RevealSection>
  );
}
