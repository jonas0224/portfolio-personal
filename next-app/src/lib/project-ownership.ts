/** Employer / client case studies (not personal products you own). */
export const EMPLOYER_PROJECT_SLUGS = new Set([
  'boq-digital-banking-platform',
  'helika-analytics-platform',
])

export function projectOwnershipLabel(slug: string | undefined): 'Employer' | 'Personal product' {
  if (slug && EMPLOYER_PROJECT_SLUGS.has(slug)) return 'Employer'
  return 'Personal product'
}

type ExternalCtaProject = {
  slug?: string
  status?: string
  external: string | null
  github: string | null
}

/** Prefer “Open live” for demo URLs; GitHub links stay repository-oriented. */
export function projectExternalCtaLabel(project: ExternalCtaProject): string {
  const url = project.external
  if (!url) return 'View project'
  if (project.slug && EMPLOYER_PROJECT_SLUGS.has(project.slug)) return 'Company site'

  const isGithub = /github\.com/i.test(url)
  if (project.status === 'Live' || project.status === 'MVP') return 'Open live'
  if (!isGithub) return 'Open live'
  return 'View repository'
}
