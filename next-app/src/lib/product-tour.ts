/** Homepage work tiers for the product-tour bento grid. */
export const WORK_HERO_SLUGS = [
  'pos-inventory-system',
  'frontend-design-system',
  'boq-digital-banking-platform',
  'flashcut',
] as const

export const WORK_STANDARD_SLUGS = [
  'realtime-operations-dashboard',
  'kasama-wfh-companion',
  'helika-analytics-platform',
] as const

export const WORK_MORE_SLUGS = [
  'ai-incident-triage',
  'developer-productivity-portal',
  'mobile-delivery-companion',
  'portfolio-content-management',
] as const

export type WorkTier = 'hero' | 'standard' | 'compact' | 'banner'

export function workTierForSlug(slug: string | undefined): WorkTier {
  if (!slug) return 'compact'
  if ((WORK_HERO_SLUGS as readonly string[]).includes(slug)) return 'hero'
  if ((WORK_STANDARD_SLUGS as readonly string[]).includes(slug)) return 'standard'
  return 'compact'
}
