'use client';

import Image from "next/image";
import Link from "next/link";
import type { ProjectContent } from "@/types/content";
import { ExternalLink } from "@/components/external-link";
import { RevealSection } from "@/components/reveal-section";
import { SECTION_SHELL } from "@/components/sections/constants";

type Props = {
  projects: ProjectContent[];
};

export function FeaturedProjectsSection({ projects }: Props) {
  return (
    <RevealSection
      id="featured-projects"
      className={SECTION_SHELL}
      delayMs={50}
    >
      <h2 className="numbered-heading">Some Things I’ve Built</h2>
      <ul className="m-0 list-none p-0">
        {projects.map((project, i) => {
          const reverse = i % 2 === 1;
          const hasImage = Boolean(project.image);
          return (
            <li
              key={project.title}
              className={`portfolio-featured-row relative mb-[100px] grid grid-cols-1 items-center gap-x-[10px] gap-y-[10px] last:mb-0 md:mb-[70px] [@media(max-width:480px)]:mb-[30px] ${
                hasImage ? "lg:grid-cols-12" : "lg:grid-cols-1"
              }`}
            >
              <div
                className={`relative z-[5] lg:col-span-6 lg:row-span-full ${
                  hasImage
                    ? reverse
                      ? "lg:col-start-7 lg:text-right"
                      : "lg:col-start-1"
                    : "lg:col-span-12 lg:col-start-1"
                } flex flex-col justify-center [@media(max-width:768px)]:col-span-full [@media(max-width:768px)]:row-start-2 [@media(max-width:768px)]:z-[5] [@media(max-width:768px)]:px-10 [@media(max-width:768px)]:pt-10 [@media(max-width:768px)]:pb-[30px] [@media(max-width:480px)]:px-[25px] [@media(max-width:480px)]:pt-[30px] [@media(max-width:480px)]:pb-5`}
              >
                <p className="portfolio-featured-overline my-[10px] font-mono text-[length:var(--fz-xs)] text-[var(--green)]">
                  Featured Project
                </p>
                <h3 className="portfolio-featured-title mb-5 text-[clamp(24px,5vw,28px)] text-[var(--lightest-slate)] [@media(max-width:768px)]:mb-5 [@media(max-width:768px)]:text-[var(--white)]">
                  <ExternalLink href={project.external}>{project.title}</ExternalLink>
                </h3>
                {project.impact?.length ? (
                  <ul
                    className={`mb-4 flex list-none flex-wrap gap-2 p-0 ${
                      reverse ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.impact.map((metric) => (
                      <li
                        key={metric}
                        className="rounded-full border border-[var(--green)] bg-[var(--green-tint)] px-3 py-1 font-mono text-[length:var(--fz-xxs)] text-[var(--green)]"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div
                  className={`portfolio-card-shadow relative z-[2] rounded-[var(--border-radius)] bg-[var(--light-navy)] p-[25px] text-[length:var(--fz-lg)] text-[var(--light-slate)] [@media(max-width:768px)]:bg-transparent [@media(max-width:768px)]:p-5 [@media(max-width:768px)]:shadow-none ${
                    reverse ? "lg:text-right" : ""
                  }`}
                >
                  <p>{project.description}</p>
                </div>
                <ul
                  className={`portfolio-featured-tech relative z-[2] mt-[25px] mb-[10px] flex flex-wrap gap-x-[18px] gap-y-2 p-0 font-mono text-[length:var(--fz-xxs)] text-[var(--light-slate)] ${
                    reverse && hasImage ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.slug && project.caseStudy ? (
                  <div className={reverse ? "lg:text-right" : ""}>
                    <Link href={`/projects/${project.slug}`} className="btn-outline-sm">
                      Read case study
                    </Link>
                  </div>
                ) : null}
              </div>
              {hasImage ? (
                <div
                  className={`relative lg:col-span-6 lg:row-span-full ${
                    reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"
                  } [@media(max-width:768px)]:col-span-full`}
                >
                  <div className="portfolio-card-shadow relative aspect-[1.4/1] w-full overflow-hidden rounded-[var(--border-radius)] [@media(max-width:768px)]:aspect-auto [@media(max-width:768px)]:min-h-[240px]">
                    <Image
                      src={project.image!}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </RevealSection>
  );
}
