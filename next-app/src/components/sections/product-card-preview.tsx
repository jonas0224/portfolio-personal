import {
  OPS_PREVIEW_SERVICES,
  POS_PREVIEW_ITEMS,
  previewLabelForSlug,
} from '@/lib/product-previews'

type Props = {
  slug?: string
  title: string
}

export function ProductCardPreview({ slug, title }: Props) {
  return (
    <div className="product-card-preview" aria-hidden>
      <div className="product-card-preview-chrome">
        <span className="product-card-preview-dot" />
        <span className="product-card-preview-dot" />
        <span className="product-card-preview-dot" />
        <span className="product-card-preview-label">{previewLabelForSlug(slug, title)}</span>
      </div>
      <div className="product-card-preview-scene">{renderScene(slug)}</div>
    </div>
  )
}

function renderScene(slug?: string) {
  switch (slug) {
    case 'pos-inventory-system':
      return (
        <div className="gp-pos">
          <div className="gp-pos-bar">
            <span>Point of Sale</span>
            <span className="gp-pos-pill">2 in cart</span>
          </div>
          <div className="gp-pos-grid">
            {POS_PREVIEW_ITEMS.map((item, index) => (
              <div key={item.sku} className={`gp-pos-card${index === 0 ? ' is-active' : ''}`}>
                <span className="gp-pos-thumb" />
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      )
    case 'frontend-design-system':
      return (
        <div className="gp-ds">
          <aside>
            <span className="is-active">Button</span>
            <span>Input</span>
            <span>Tokens</span>
          </aside>
          <div className="gp-ds-stage">
            <button type="button" className="gp-ds-btn is-brand" tabIndex={-1}>
              Primary
            </button>
            <button type="button" className="gp-ds-btn" tabIndex={-1}>
              Ghost
            </button>
            <div className="gp-ds-tokens">
              <span>--brand</span>
              <span>--radius</span>
              <span>--space</span>
            </div>
          </div>
        </div>
      )
    case 'flashcut':
      return (
        <div className="gp-fc">
          <p className="gp-fc-logo">FLASHCUT</p>
          <div className="gp-fc-stage">Round 4 · peek</div>
          <div className="gp-fc-row">
            <span>Host PIN ····</span>
            <span className="gp-fc-cta">Create game</span>
          </div>
        </div>
      )
    case 'realtime-operations-dashboard':
      return (
        <div className="gp-ops">
          <div className="gp-ops-bar">
            <span>Operations</span>
            <span className="gp-ops-live">Live</span>
          </div>
          <div className="gp-ops-grid">
            {OPS_PREVIEW_SERVICES.map((service) => (
              <div
                key={service.name}
                className={`gp-ops-tile${service.status === 'degraded' ? ' is-warn' : ' is-ok'}`}
              >
                <i />
                {service.name.replace(' sync', '')}
                <em>{service.latency}</em>
              </div>
            ))}
          </div>
        </div>
      )
    case 'ai-incident-triage':
      return (
        <div className="gp-triage">
          <div className="gp-triage-bar">
            <span>Incident triage</span>
            <span className="gp-triage-pill">Gemini</span>
          </div>
          <div className="gp-triage-card">
            <strong>Checkout charges failing</strong>
            <em>SEV2 · payments-oncall</em>
            <span className="gp-triage-conf">Confidence 86%</span>
          </div>
          <div className="gp-triage-actions">
            <span>Override</span>
            <span className="gp-triage-cta">Accept</span>
          </div>
        </div>
      )
    case 'portfolio-content-management':
      return (
        <div className="gp-cms">
          <div className="gp-cms-bar">
            <span>Content documents</span>
            <span className="gp-cms-pill">ADMIN</span>
          </div>
          <div className="gp-cms-list">
            <div className="gp-cms-row is-active">
              <span>hero</span>
              <em>Draft</em>
            </div>
            <div className="gp-cms-row">
              <span>jobs</span>
              <em>Published</em>
            </div>
            <div className="gp-cms-row">
              <span>featured-projects</span>
              <em>Published</em>
            </div>
          </div>
          <div className="gp-cms-actions">
            <span>Preview</span>
            <span className="gp-cms-cta">Open PR</span>
          </div>
        </div>
      )
    case 'kasama-wfh-companion':
      return (
        <div className="gp-kasama">
          <div className="gp-kasama-head">
            <span>Today</span>
            <em>Tuesday · 8:42 AM</em>
          </div>
          <div className="gp-kasama-intentions">
            <span className="is-done">01 · Ship the next slice</span>
            <span>02 · Protect a focus block</span>
            <span>03 · End the day cleanly</span>
          </div>
          <div className="gp-kasama-footer">
            <strong>25:00</strong>
            <span>Start focus</span>
          </div>
        </div>
      )
    case 'developer-productivity-portal':
      return (
        <div className="gp-portal">
          <div className="gp-portal-bar">
            <span>Ship desk</span>
            <span className="gp-portal-pill">CI failing</span>
          </div>
          <div className="gp-portal-grid">
            <div className="gp-portal-tile is-warn">checkout-api</div>
            <div className="gp-portal-tile is-ok">inventory</div>
            <div className="gp-portal-tile is-ok">releases</div>
          </div>
          <div className="gp-portal-actions">
            <span>Acknowledge</span>
            <span className="gp-portal-cta">Publish notes</span>
          </div>
        </div>
      )
    case 'mobile-delivery-companion':
      return (
        <div className="gp-route">
          <div className="gp-route-bar">
            <span>DropRoute</span>
            <span className="gp-route-pill">3 stops left</span>
          </div>
          <div className="gp-route-list">
            <div className="gp-route-stop is-done">Stop 4 · Delivered</div>
            <div className="gp-route-stop is-active">Stop 5 · Out for delivery</div>
            <div className="gp-route-stop">Stop 6 · Queued offline</div>
          </div>
        </div>
      )
    default:
      return (
        <div className="gp-fallback">
          <span />
          <span />
          <span />
        </div>
      )
  }
}
