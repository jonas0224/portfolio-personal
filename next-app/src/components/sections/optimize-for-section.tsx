import { SECTION_SHELL } from '@/components/sections/constants'
import { ReleaseFloor } from '@/components/sections/release-floor'

export function OptimizeForSection() {
  return (
    <section id="craft" className={`${SECTION_SHELL} optimize-for-section`}>
      <p className="studio-kicker">03 / Craft</p>
      <h2 className="studio-section-title">How I lead frontend</h2>
      <p className="release-floor-lede">
        Senior work is the judgment around the interface. Pick a layer. Each one is work I am
        actually doing, not a demo shelf.
      </p>
      <ReleaseFloor />
    </section>
  )
}
