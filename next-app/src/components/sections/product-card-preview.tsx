import { OPS_PREVIEW_SERVICES, POS_PREVIEW_ITEMS, previewLabelForSlug } from '@/lib/product-previews'

type Props = {
  slug?: string
  title: string
  /** Browser chrome reads as a generic card. Spreads use the scene alone. */
  frame?: 'window' | 'bare'
}

export function ProductCardPreview({ slug, title, frame = 'window' }: Props) {
  return (
    <div className={`product-card-preview${frame === 'bare' ? ' is-bare' : ''}`} aria-hidden>
      {frame === 'window' ? (
        <div className="product-card-preview-chrome">
          <span className="product-card-preview-label">{previewLabelForSlug(slug, title)}</span>
        </div>
      ) : null}
      <div className="product-card-preview-scene">{renderScene(slug)}</div>
    </div>
  )
}

function renderScene(slug?: string) {
  switch (slug) {
    case 'pos-inventory-system':
      return (
        <div className="still still-pos">
          <header>
            <span>Archive Room</span>
            <span>Sale 00481</span>
          </header>
          <ul className="still-lines">
            {POS_PREVIEW_ITEMS.map((item) => (
              <li key={item.sku}>
                <span>{item.name}</span>
                <b>{item.price}</b>
              </li>
            ))}
          </ul>
          <p className="still-total">
            <span>Due</span>
            <strong>₱4,420</strong>
          </p>
        </div>
      )
    case 'frontend-design-system':
      return (
        <div className="still still-ds">
          <header>
            <span>Specimen</span>
            <span>Tokens</span>
          </header>
          <div className="still-ds-stage">
            <span className="still-ds-btn">Primary</span>
            <p className="still-ds-field">
              <span>Email</span>
              <b>you@studio.dev</b>
            </p>
          </div>
          <ul className="still-swatches">
            <li>
              <i className="is-brand" />
              #22d3ee
            </li>
            <li>
              <i className="is-ink" />
              #09090b
            </li>
            <li>
              <i className="is-paper" />
              #fafafa
            </li>
          </ul>
        </div>
      )
    case 'flashcut':
      return (
        <div className="still still-fc">
          <p className="still-fc-word">FLASH</p>
          <i className="still-fc-cut" />
          <p className="still-fc-round">Round 4 of 15</p>
        </div>
      )
    case 'boq-digital-banking-platform':
      return (
        <div className="still still-ib">
          <header>
            <span>Internet banking</span>
            <span>BOQ</span>
          </header>
          <p className="still-ib-title">Pay anyone</p>
          <ol className="still-steps">
            <li>Amount</li>
            <li className="is-on">Review</li>
            <li>Release</li>
          </ol>
        </div>
      )
    case 'realtime-operations-dashboard':
      return (
        <div className="still still-ops">
          <header>
            <span>Live feed</span>
            <span>Stale shown</span>
          </header>
          <ul className="still-lines">
            {OPS_PREVIEW_SERVICES.map((service) => (
              <li key={service.name} className={service.status === 'degraded' ? 'is-warn' : ''}>
                <span>{service.name}</span>
                <b>{service.latency}</b>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'helika-analytics-platform':
      return (
        <div className="still still-helika">
          <header>
            <span>Player analytics</span>
            <span>D7 · 36%</span>
          </header>
          <p className="still-total">
            <span>DAU</span>
            <strong>48.2k</strong>
          </p>
          <svg className="still-spark" viewBox="0 0 240 48" preserveAspectRatio="none">
            <path d="M0 36 L28 32 L52 34 L80 22 L108 26 L136 14 L164 18 L196 8 L240 12" />
          </svg>
        </div>
      )
    case 'ai-incident-triage':
      return (
        <div className="still still-note">
          <header>
            <span>SEV2</span>
            <span>86%</span>
          </header>
          <p className="still-ib-title">Checkout charges failing</p>
          <p className="still-foot">payments-oncall · human override</p>
        </div>
      )
    case 'portfolio-content-management':
      return (
        <div className="still still-note">
          <header>
            <span>hero.md</span>
            <span>Draft</span>
          </header>
          <p className="still-ib-title">Open a PR</p>
          <p className="still-foot">Preview · review · publish</p>
        </div>
      )
    case 'kasama-wfh-companion':
      return (
        <div className="still still-note">
          <header>
            <span>Today</span>
            <span>Focus</span>
          </header>
          <p className="still-total">
            <span>Block</span>
            <strong>25:00</strong>
          </p>
          <p className="still-foot">Ship the next slice</p>
        </div>
      )
    case 'developer-productivity-portal':
      return (
        <div className="still still-note">
          <header>
            <span>Ship desk</span>
            <span className="is-warn">CI failing</span>
          </header>
          <p className="still-ib-title">checkout-api</p>
          <p className="still-foot">Acknowledge · publish notes</p>
        </div>
      )
    case 'mobile-delivery-companion':
      return (
        <div className="still still-note">
          <header>
            <span>DropRoute</span>
            <span>3 left</span>
          </header>
          <p className="still-ib-title">Stop 5</p>
          <p className="still-foot">Out for delivery · queued offline</p>
        </div>
      )
    default:
      return (
        <div className="still still-note">
          <p className="still-ib-title">{slug ? 'Project' : 'Work'}</p>
        </div>
      )
  }
}
