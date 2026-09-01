/** Homepage work tiers for the product-tour bento grid. */
export const WORK_HERO_SLUGS = [
  'pos-inventory-system',
  'frontend-design-system',
  'boq-digital-banking-platform',
] as const

export const WORK_STANDARD_SLUGS = [
  'flashcut',
  'realtime-operations-dashboard',
  'kasama-wfh-companion',
] as const

export const WORK_MORE_SLUGS = [
  'ai-incident-triage',
  'developer-productivity-portal',
  'mobile-delivery-companion',
  'portfolio-content-management',
  'helika-analytics-platform',
] as const

export type WorkTier = 'hero' | 'standard' | 'compact' | 'banner'

export function workTierForSlug(slug: string | undefined): WorkTier {
  if (!slug) return 'compact'
  if (slug === 'boq-digital-banking-platform') return 'banner'
  if ((WORK_HERO_SLUGS as readonly string[]).includes(slug)) return 'hero'
  if ((WORK_STANDARD_SLUGS as readonly string[]).includes(slug)) return 'standard'
  return 'compact'
}

export const OPTIMIZE_PILLARS = [
  {
    title: 'Performance',
    description: 'Core Web Vitals, bundle discipline, and UI that stays fast on real devices.',
  },
  {
    title: 'Design systems',
    description: 'Tokens, primitives, and documentation that teams can ship against.',
  },
  {
    title: 'Shipping',
    description: 'Incremental delivery, clear PRs, and features that reach production.',
  },
  {
    title: 'Reliability',
    description: 'Typed boundaries, tests where they matter, and defensive product UI.',
  },
] as const
