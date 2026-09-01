import { notFound } from 'next/navigation'
import { ButtonLink } from '@/ui/button'
import { OutlineLink } from '@/ui/outline-link'
import { CaseStudySection } from '@/components/case-study-section'
import { ProductCardPreview } from '@/components/sections/product-card-preview'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'
import { featuredProjects } from '@/data/site'

type Props = {
  params: Promise<{ slug: string }>
}

const EMPLOYER_SLUGS = new Set(['boq-digital-banking-platform', 'helika-analytics-platform'])

export async function generateStaticParams() {
  return featuredProjects
    .filter((project) => Boolean(project.slug && project.caseStudy))
    .map((project) => ({ slug: project.slug! }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = featuredProjects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const canonical = `${SITE_URL}/projects/${slug}`
  const ogImage = `${SITE_URL}/projects/${slug}/opengraph-image`

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: project.title,
      description: project.description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [ogImage],
    },
  }
}

function externalCtaLabel(slug: string, status?: string) {
  if (EMPLOYER_SLUGS.has(slug)) {
    return 'Company site'
  }
  if (status === 'Live') {
    return 'Open live'
  }
  return 'Visit project'
}

function statusLabel(status?: string) {
  if (status === 'Built') return 'Shipped'
  if (status === 'Live') return 'Live · maintained'
  if (status === 'MVP') return 'Personal MVP'
  return status ?? 'Project'
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = featuredProjects.find((item) => item.slug === slug)

  if (!project || !project.caseStudy) {
    notFound()
  }

  return (
    <section className="case-study-page portfolio-section mx-auto w-full max-w-[1120px]">
      <header className="case-study-header">
        <p className="case-study-kicker">Case study</p>
        <h1 className="case-study-title">{project.title}</h1>
        <p className="case-study-lede">{project.description}</p>
      </header>

      <div className="case-study-layout">
        <aside className="case-study-sidebar" aria-label="Project snapshot">
          <div className="case-study-preview">
            <ProductCardPreview slug={project.slug} title={project.title} />
          </div>
          <dl className="case-study-meta">
            <div>
              <dt>Status</dt>
              <dd>{statusLabel(project.status)}</dd>
            </div>
            {project.impact?.length ? (
              <div>
                <dt>Highlights</dt>
                <dd>
                  <ul className="case-study-meta-list">
                    {project.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="case-study-meta-tags">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <div className="case-study-sidebar-actions">
            {project.external ? (
              <ButtonLink
                href={project.external}
                rel="noopener noreferrer"
                size="sm"
                target="_blank"
                variant="outline"
              >
                {externalCtaLabel(slug, project.status)}
              </ButtonLink>
            ) : null}
            {project.github ? (
              <ButtonLink
                href={project.github}
                rel="noopener noreferrer"
                size="sm"
                target="_blank"
                variant="outline"
              >
                View repository
              </ButtonLink>
            ) : null}
          </div>
        </aside>

        <div className="case-study-main">
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
      </div>

      <div className="case-study-footer">
        <OutlineLink href="/#work">Back to selected work</OutlineLink>
      </div>
    </section>
  )
}
