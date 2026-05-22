import { notFound } from "next/navigation";
import { ButtonLink } from "@/ui/button";
import { OutlineLink } from "@/ui/outline-link";
import { CaseStudySection } from "@/components/case-study-section";
import type { Metadata } from "next";
import { featuredProjects } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return featuredProjects
    .filter((project) => Boolean(project.slug && project.caseStudy))
    .map((project) => ({ slug: project.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <section className="portfolio-section mx-auto w-full max-w-[900px]">
      <p className="mb-5 font-mono text-[length:var(--fz-xs)] text-[var(--green)]">
        Case Study
      </p>
      <h1 className="mb-3 text-[clamp(34px,6vw,52px)] text-[var(--lightest-slate)]">
        {project.title}
      </h1>
      <p className="mb-6 max-w-[800px] text-[var(--light-slate)]">{project.description}</p>

      {project.impact?.length ? (
        <ul className="mb-8 flex list-none flex-wrap gap-2 p-0">
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

      <div className="grid gap-4">
        <CaseStudySection title="Role and Scope">
          <p>{project.caseStudy.role}</p>
        </CaseStudySection>

        <CaseStudySection title="Challenge">
          <p>{project.caseStudy.challenge}</p>
        </CaseStudySection>

        <CaseStudySection title="Approach">
          <ul className="fancy-list">
            {project.caseStudy.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Architecture Decisions">
          <ul className="fancy-list">
            {project.caseStudy.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Quality and Reliability">
          <ul className="fancy-list">
            {project.caseStudy.quality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
          <p>{project.caseStudy.outcome}</p>
        </CaseStudySection>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={project.external} rel="noreferrer" size="sm" target="_blank" variant="outline">
          Visit project
        </ButtonLink>
        {project.github ? (
          <ButtonLink href={project.github} rel="noreferrer" size="sm" target="_blank" variant="outline">
            View repository
          </ButtonLink>
        ) : null}
        <OutlineLink href="/#featured-projects">Back to featured work</OutlineLink>
      </div>
    </section>
  );
}
