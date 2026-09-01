import { featuredProjects } from '@/data/site'
import { renderOgCard } from '@/lib/og-card'

export const alt = 'Project case study'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params
  const project = featuredProjects.find((item) => item.slug === slug)

  if (!project) {
    return renderOgCard({
      eyebrow: 'Case study',
      title: 'Project not found',
      description: 'Jonas Yambao portfolio',
    })
  }

  return renderOgCard({
    eyebrow: 'Case study',
    title: project.title,
    description: project.description.slice(0, 160),
  })
}
