export type PreviewId = 'pos' | 'design' | 'flashcut' | 'ops'

export type PreviewMeta = {
  id: PreviewId
  label: string
  title: string
  href: string
  hrefLabel: string
  stack: string
  slug: string
}

export const PRODUCT_PREVIEWS: PreviewMeta[] = [
  {
    id: 'pos',
    slug: 'pos-inventory-system',
    label: 'Archive Room',
    title: 'archive-room · point of sale',
    href: 'https://archive-room.vercel.app/login',
    hrefLabel: 'Open live',
    stack: 'Next.js · TypeScript · Prisma',
  },
  {
    id: 'design',
    slug: 'frontend-design-system',
    label: 'Design system',
    title: 'design-system · playground',
    href: '/projects/frontend-design-system',
    hrefLabel: 'Case study',
    stack: 'Tokens · Storybook · Vitest',
  },
  {
    id: 'flashcut',
    slug: 'flashcut',
    label: 'FLASHCUT',
    title: 'flashcut · host lobby',
    href: 'https://flashcut-nine.vercel.app/',
    hrefLabel: 'Open live',
    stack: 'Next.js · Redis · polling',
  },
  {
    id: 'ops',
    slug: 'realtime-operations-dashboard',
    label: 'Ops board',
    title: 'ops-dashboard · live feed',
    href: '/projects/realtime-operations-dashboard',
    hrefLabel: 'Case study',
    stack: 'WebSockets · Next.js · Redis',
  },
]

export const POS_PREVIEW_ITEMS = [
  { name: 'Linen Shirt', sku: 'LN-204', price: '₱1,290', stock: 12 },
  { name: 'Denim Jacket', sku: 'DJ-088', price: '₱2,450', stock: 4 },
  { name: 'Canvas Tote', sku: 'CT-015', price: '₱680', stock: 28 },
] as const

export const OPS_PREVIEW_SERVICES = [
  { name: 'Checkout API', status: 'healthy' as const, latency: '42ms' },
  { name: 'Inventory sync', status: 'healthy' as const, latency: '88ms' },
  { name: 'Payments', status: 'degraded' as const, latency: '310ms' },
  { name: 'Notifier', status: 'healthy' as const, latency: '51ms' },
]

export function previewLabelForSlug(slug: string | undefined, fallback: string) {
  switch (slug) {
    case 'pos-inventory-system':
      return 'Archive Room · POS'
    case 'frontend-design-system':
      return 'Design system · playground'
    case 'flashcut':
      return 'FLASHCUT · lobby'
    case 'realtime-operations-dashboard':
      return 'Ops board · live'
    case 'ai-incident-triage':
      return 'Incident triage · AI assist'
    case 'portfolio-content-management':
      return 'Portfolio CMS · publish'
    default:
      return fallback
  }
}
