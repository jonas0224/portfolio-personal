'use client'

import { useState } from 'react'
import type { ProjectContent } from '@/types/content'
import { workTierForSlug } from '@/lib/product-tour'
import { ProductCard } from '@/components/sections/product-card'

type Props = {
  projects: ProjectContent[]
}

export function ProductGalleryMore({ projects }: Props) {
  const [open, setOpen] = useState(false)

  if (!projects.length) return null

  return (
    <div className="product-bento-more">
      <button
        type="button"
        className="product-bento-more-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Show fewer products' : `View ${projects.length} more products`}
      </button>
      {open ? (
        <ul className="product-bento product-bento--more">
          {projects.map((project) => (
            <li key={project.slug ?? project.title}>
              <ProductCard project={project} tier={workTierForSlug(project.slug)} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
