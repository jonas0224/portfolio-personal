import { describe, expect, it } from 'vitest'
import { projectExternalCtaLabel, projectOwnershipLabel } from '@/lib/project-ownership'

describe('projectOwnershipLabel', () => {
  it('marks BOQ and Helika as employer work', () => {
    expect(projectOwnershipLabel('boq-digital-banking-platform')).toBe('Employer')
    expect(projectOwnershipLabel('helika-analytics-platform')).toBe('Employer')
  })

  it('marks personal products as personal', () => {
    expect(projectOwnershipLabel('pos-inventory-system')).toBe('Personal product')
  })
})

describe('projectExternalCtaLabel', () => {
  it('uses Open live for live demos', () => {
    expect(
      projectExternalCtaLabel({
        slug: 'flashcut',
        status: 'Built',
        external: 'https://flashcut-nine.vercel.app/',
        github: 'https://github.com/jonas0224/flashcut',
      }),
    ).toBe('Open live')
  })

  it('uses View repository for GitHub-only links', () => {
    expect(
      projectExternalCtaLabel({
        slug: 'frontend-design-system',
        status: 'Built',
        external: 'https://github.com/jonas0224/frontend-design-system-migration',
        github: 'https://github.com/jonas0224/frontend-design-system-migration',
      }),
    ).toBe('View repository')
  })

  it('uses Company site for employer externals', () => {
    expect(
      projectExternalCtaLabel({
        slug: 'boq-digital-banking-platform',
        status: 'Built',
        external: 'https://www.boq.com.au',
        github: null,
      }),
    ).toBe('Company site')
  })
})
