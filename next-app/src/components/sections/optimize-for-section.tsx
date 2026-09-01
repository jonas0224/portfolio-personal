import { OPTIMIZE_PILLARS } from '@/lib/product-tour'
import { SECTION_SHELL } from '@/components/sections/constants'

export function OptimizeForSection() {
  return (
    <section id="craft" className={`${SECTION_SHELL} optimize-for-section`}>
      <h2 className="section-heading">What I optimize for</h2>
      <ul className="optimize-for-grid">
        {OPTIMIZE_PILLARS.map((pillar) => (
          <li key={pillar.title} className="optimize-for-card">
            <h3 className="optimize-for-title">{pillar.title}</h3>
            <p className="optimize-for-desc">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
