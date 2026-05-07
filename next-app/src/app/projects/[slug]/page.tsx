import Link from "next/link";
import { notFound } from "next/navigation";
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
        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Role and Scope</h2>
          <p className="text-[var(--light-slate)]">{project.caseStudy.role}</p>
        </article>

        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Challenge</h2>
          <p className="text-[var(--light-slate)]">{project.caseStudy.challenge}</p>
        </article>

        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Approach</h2>
          <ul className="fancy-list">
            {project.caseStudy.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Architecture Decisions</h2>
          <ul className="fancy-list">
            {project.caseStudy.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Quality and Reliability</h2>
          <ul className="fancy-list">
            {project.caseStudy.quality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="portfolio-card-shadow rounded-[var(--border-radius)] bg-[var(--light-navy)] p-6">
          <h2 className="mb-3 text-[length:var(--fz-xl)]">Outcome</h2>
          <p className="text-[var(--light-slate)]">{project.caseStudy.outcome}</p>
        </article>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn-outline-sm" href={project.external} target="_blank" rel="noreferrer">
          Visit project
        </a>
        {project.github ? (
          <a className="btn-outline-sm" href={project.github} target="_blank" rel="noreferrer">
            View repository
          </a>
        ) : null}
        <Link href="/#featured-projects" className="btn-outline-sm">
          Back to featured work
        </Link>
      </div>
    </section>
  );
}
