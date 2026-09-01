import type { ProjectContent } from '@/types/content'
import {
  WORK_HERO_SLUGS,
  WORK_MORE_SLUGS,
  WORK_STANDARD_SLUGS,
  workTierForSlug,
} from '@/lib/product-tour'
import { SECTION_SHELL } from '@/components/sections/constants'
import { ProductCard } from '@/components/sections/product-card'
import { ProductGalleryMore } from '@/components/sections/product-gallery-more'

type Props = {
  projects: ProjectContent[]
}

function pickBySlugs(projects: ProjectContent[], slugs: readonly string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean) as ProjectContent[]
}

export function FeaturedProjectsSection({ projects }: Props) {
  const hero = pickBySlugs(projects, WORK_HERO_SLUGS)
  const standard = pickBySlugs(projects, WORK_STANDARD_SLUGS)
  const more = pickBySlugs(projects, WORK_MORE_SLUGS)

  return (
    <section id="work" className={SECTION_SHELL}>
      <h2 className="section-heading">Selected products</h2>
      <p className="product-bento-lede">
        A product tour of what I ship: live apps, design systems, and case studies. Each card is a
        miniature UI, not a screenshot placeholder.
      </p>
      <ul className="product-bento">
        {hero.map((project) => (
          <li key={project.slug ?? project.title}>
            <ProductCard project={project} tier={workTierForSlug(project.slug)} />
          </li>
        ))}
        {standard.map((project) => (
          <li key={project.slug ?? project.title}>
            <ProductCard project={project} tier="standard" />
          </li>
        ))}
      </ul>
      <ProductGalleryMore projects={more} />
    </section>
  )
}
