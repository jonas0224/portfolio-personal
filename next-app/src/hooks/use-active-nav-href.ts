'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/nav'

function hrefFromPathname(pathname: string, isHome: boolean): string {
  if (pathname.startsWith('/writing') || pathname.startsWith('/pensieve')) {
    return '/writing'
  }
  if (pathname.startsWith('/projects')) {
    return '/#work'
  }
  if (isHome) {
    return '/#hero'
  }
  return ''
}

/** Match the former IntersectionObserver band (~upper quarter of the viewport). */
export function activationOffsetPx(viewportHeight: number): number {
  return Math.round(viewportHeight * 0.25)
}

type SectionSample = { href: string; top: number }

/**
 * Pick the last nav section whose top has crossed the activation line.
 * Works for very tall sections where intersection ratios stay below observer thresholds.
 */
export function pickSectionHref(
  sections: SectionSample[],
  scrollY: number,
  activationOffset: number,
): string {
  if (sections.length === 0) return '/#hero'
  if (scrollY < 80) return '/#hero'

  let activeHref = sections[0]!.href
  for (const section of sections) {
    if (section.top <= activationOffset) {
      activeHref = section.href
    }
  }

  return activeHref
}

export function resolveScrollHref(elements: { href: string; el: HTMLElement }[]): string {
  const offset = activationOffsetPx(window.innerHeight)
  const sections = elements.map((item) => ({
    href: item.href,
    top: item.el.getBoundingClientRect().top,
  }))
  return pickSectionHref(sections, window.scrollY, offset)
}

/**
 * Active primary-nav href: scroll-spy on home sections, otherwise route match.
 */
export function useActiveNavHref(isHome: boolean): string {
  const pathname = usePathname()
  const routeHref = useMemo(() => hrefFromPathname(pathname, isHome), [pathname, isHome])
  const [scrollHref, setScrollHref] = useState<string | null>(null)

  useEffect(() => {
    if (!isHome) {
      return
    }

    const sectionLinks = NAV_LINKS.filter((link) => link.sectionId)
    const elements = sectionLinks
      .map((link) => {
        const el = document.getElementById(link.sectionId!)
        return el ? { href: link.href, el } : null
      })
      .filter(Boolean) as { href: string; el: HTMLElement }[]

    if (elements.length === 0) return

    let frame = 0
    const update = () => {
      frame = 0
      setScrollHref(resolveScrollHref(elements))
    }
    const onScrollOrResize = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [isHome, pathname])

  if (!isHome) return routeHref
  return scrollHref ?? routeHref
}
