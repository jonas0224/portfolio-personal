import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site'
import { renderOgCard } from '@/lib/og-card'

export const alt = SITE_TITLE
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return renderOgCard({
    eyebrow: 'Senior Frontend Developer',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  })
}
