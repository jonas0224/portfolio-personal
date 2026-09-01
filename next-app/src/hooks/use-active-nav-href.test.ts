import { describe, expect, it } from 'vitest'
import { activationOffsetPx, pickSectionHref } from '@/hooks/use-active-nav-href'

const SECTIONS = [
  { href: '/#hero', top: -200 },
  { href: '/#craft', top: -1200 },
  { href: '/#work', top: 40 },
  { href: '/#jobs', top: 900 },
  { href: '/#contact', top: 1800 },
]

describe('pickSectionHref', () => {
  it('returns hero near the top of the page', () => {
    expect(pickSectionHref(SECTIONS, 40, activationOffsetPx(800))).toBe('/#hero')
  })

  it('highlights work while scrolling through a tall work section', () => {
    expect(pickSectionHref(SECTIONS, 2400, activationOffsetPx(800))).toBe('/#work')
  })

  it('keeps work active in the horizon gap before experience', () => {
    const sections = [
      { href: '/#hero', top: -3000 },
      { href: '/#craft', top: -2000 },
      { href: '/#work', top: -400 },
      { href: '/#jobs', top: 500 },
    ]

    expect(pickSectionHref(sections, 3200, activationOffsetPx(800))).toBe('/#work')
  })
})
