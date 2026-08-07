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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target) {
          const match = elements.find((item) => item.el === visible[0].target)
          if (match) setScrollHref(match.href)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    elements.forEach(({ el }) => observer.observe(el))

    const onScrollTop = () => {
      if (window.scrollY < 80) setScrollHref('/#hero')
    }
    window.addEventListener('scroll', onScrollTop, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScrollTop)
    }
  }, [isHome, pathname])

  if (!isHome) return routeHref
  return scrollHref ?? routeHref
}
