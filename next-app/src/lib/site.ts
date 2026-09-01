/**
 * Public site URL for metadata (OG, canonical). Override via NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://jonasyambao.com'

export const SITE_TITLE = 'Jonas Yambao'

export const SITE_DESCRIPTION =
  'Jonas Yambao is a Senior Frontend Developer with 7+ years shipping React and Next.js products: architecture, UI craft, mentoring, and delivery standards that hold up in production.'

/** Path under SITE_URL for default OG image (see `app/opengraph-image.tsx`) */
export const OG_IMAGE_PATH = '/opengraph-image'

export const TWITTER_SITE = process.env.NEXT_PUBLIC_TWITTER_SITE?.replace(/^@/, '') ?? ''

/** Optional GA4 measurement ID (e.g. G-XXXXXXXXXX). */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? ''
