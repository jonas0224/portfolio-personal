/** Employer / client case studies (not personal products you own). */
export const EMPLOYER_PROJECT_SLUGS = new Set([
  'boq-digital-banking-platform',
  'helika-analytics-platform',
])

export function projectOwnershipLabel(slug: string | undefined): 'Employer' | 'Personal product' {
  if (slug && EMPLOYER_PROJECT_SLUGS.has(slug)) return 'Employer'
  return 'Personal product'
}
