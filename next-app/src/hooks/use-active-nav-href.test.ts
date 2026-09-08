import { describe, expect, it } from 'vitest'
import { activationOffsetPx, pickSectionHref } from '@/hooks/use-active-nav-href'

const SECTIONS = [
  { href: '/#hero', top: -200 },
  { href: '/#jobs', top: -1200 },
  { href: '/#work', top: 40 },
  { href: '/#projects', top: 500 },
  { href: '/#craft', top: 900 },
  { href: '/#contact', top: 1800 },
]

describe('pickSectionHref', () => {
  it('returns hero near the top of the page', () => {
    expect(pickSectionHref(SECTIONS, 40, activationOffsetPx(800))).toBe('/#hero')
  })

  it('highlights work while scrolling through a tall work section', () => {
    expect(pickSectionHref(SECTIONS, 2400, activationOffsetPx(800))).toBe('/#work')
  })

  it('highlights projects while scrolling the full catalog', () => {
    const sections = [
      { href: '/#hero', top: -3000 },
      { href: '/#jobs', top: -2000 },
      { href: '/#work', top: -800 },
      { href: '/#projects', top: 40 },
      { href: '/#craft', top: 900 },
    ]

    expect(pickSectionHref(sections, 3200, activationOffsetPx(800))).toBe('/#projects')
  })
})
