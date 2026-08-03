'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import {
  OPS_PREVIEW_SERVICES,
  POS_PREVIEW_ITEMS,
  PRODUCT_PREVIEWS,
  type PreviewId,
} from '@/lib/product-previews';

const PREVIEWS = PRODUCT_PREVIEWS;
const POS_ITEMS = POS_PREVIEW_ITEMS;
const OPS_SERVICES = OPS_PREVIEW_SERVICES;

function PreviewArchiveRoom({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [cart, setCart] = useState(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % POS_ITEMS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="hp-pos">
      <div className="hp-pos-bar">
        <div>
          <p className="hp-pos-brand">Archive Room</p>
          <p className="hp-pos-sub">Point of Sale · {cart} in cart</p>
        </div>
        <button
          type="button"
          className="hp-pos-pay"
          onClick={() => setCart((c) => c + 1)}
        >
          Charge
        </button>
      </div>
      <div className="hp-pos-grid">
        {POS_ITEMS.map((item, i) => (
          <button
            key={item.sku}
            type="button"
            className={`hp-pos-card${active === i ? ' is-active' : ''}`}
            onClick={() => {
              setActive(i);
              setCart((c) => c + 1);
            }}
          >
            <span className="hp-pos-thumb" />
            <span className="hp-pos-name">{item.name}</span>
            <span className="hp-pos-meta">
              {item.sku} · {item.stock} left
            </span>
            <span className="hp-pos-price">{item.price}</span>
          </button>
        ))}
      </div>
      <div className="hp-pos-cart">
        <span>Consignment checkout</span>
        <strong>₱{cart > 1 ? (1290 + (cart - 1) * 680).toLocaleString() : '1,290'}</strong>
      </div>
    </div>
  );
}

function PreviewDesignSystem() {
  const [radius, setRadius] = useState(10);
  const [tone, setTone] = useState<'cyan' | 'zinc'>('cyan');

  return (
    <div className="hp-ds">
      <aside className="hp-ds-nav">
        <span className="is-active">Button</span>
        <span>Input</span>
        <span>Card</span>
        <span>Tokens</span>
      </aside>
      <div className="hp-ds-stage">
        <p className="hp-ds-kicker">Playground · Button</p>
        <div className="hp-ds-row">
          <button
            type="button"
            className={`hp-ds-btn${tone === 'cyan' ? ' is-brand' : ''}`}
            style={{ borderRadius: radius }}
            onClick={() => setTone((t) => (t === 'cyan' ? 'zinc' : 'cyan'))}
          >
            Primary action
          </button>
          <button
            type="button"
            className="hp-ds-btn is-ghost"
            style={{ borderRadius: radius }}
          >
            Ghost
          </button>
        </div>
        <label className="hp-ds-control">
          <span>Radius {radius}px</span>
          <input
            type="range"
            min={4}
            max={18}
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
          />
        </label>
        <ul className="hp-ds-tokens">
          <li>--color-brand</li>
          <li>--radius-md</li>
          <li>--space-4</li>
        </ul>
      </div>
    </div>
  );
}

function PreviewFlashcut({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [phase, setPhase] = useState<'peek' | 'blackout' | 'guess'>('peek');

  useEffect(() => {
    if (prefersReducedMotion) return;
    const order: Array<'peek' | 'blackout' | 'guess'> = [
      'peek',
      'blackout',
      'guess',
    ];
    let i = 0;
    const id = window.setInterval(() => {
      i = (i + 1) % order.length;
      setPhase(order[i]);
    }, 1800);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="hp-fc">
      <p className="hp-fc-logo">FLASHCUT</p>
      <p className="hp-fc-tag">See it. Gone. Guess it.</p>
      <div className={`hp-fc-stage is-${phase}`}>
        {phase === 'peek' ? <span>Round 4 · peek</span> : null}
        {phase === 'blackout' ? <span>Flashcut</span> : null}
        {phase === 'guess' ? <span>Fastest fingers</span> : null}
      </div>
      <div className="hp-fc-actions">
        <div className="hp-fc-field">
          <span>Host PIN</span>
          <strong>••••</strong>
        </div>
        <button type="button" className="hp-fc-cta">
          Create game
        </button>
      </div>
      <p className="hp-fc-meta">10 rounds · ~12 minutes · live scoring</p>
    </div>
  );
}

function PreviewOps({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => setPulse((n) => n + 1), 2200);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="hp-ops">
      <div className="hp-ops-bar">
        <span>Operations</span>
        <span className="hp-ops-live">Live · tick {pulse + 1}</span>
      </div>
      <div className="hp-ops-grid">
        {OPS_SERVICES.map((service) => (
          <div
            key={service.name}
            className={`hp-ops-tile is-${service.status}`}
          >
            <span className="hp-ops-dot" />
            <span className="hp-ops-name">{service.name}</span>
            <span className="hp-ops-latency">{service.latency}</span>
          </div>
        ))}
      </div>
      <div className="hp-ops-alert">
        Payments latency elevated — reconnect healthy
      </div>
    </div>
  );
}

function PreviewBody({
  id,
  prefersReducedMotion,
}: {
  id: PreviewId;
  prefersReducedMotion: boolean;
}) {
  switch (id) {
    case 'design':
      return <PreviewDesignSystem />;
    case 'flashcut':
      return <PreviewFlashcut prefersReducedMotion={prefersReducedMotion} />;
    case 'ops':
      return <PreviewOps prefersReducedMotion={prefersReducedMotion} />;
    case 'pos':
    default:
      return <PreviewArchiveRoom prefersReducedMotion={prefersReducedMotion} />;
  }
}

export function HeroProductVisual() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<PreviewId>('pos');
  const active = PREVIEWS.find((p) => p.id === activeId) ?? PREVIEWS[0];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActiveId((current) => {
        const index = PREVIEWS.findIndex((p) => p.id === current);
        return PREVIEWS[(index + 1) % PREVIEWS.length].id;
      });
    }, 7000);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div
      className={`hero-visual${prefersReducedMotion ? '' : ' hero-enter hero-enter-delay-5'}`}
    >
      <div className="hero-visual-frame hero-visual-frame--live">
        <div className="hero-visual-chrome">
          <span className="hero-visual-dot" />
          <span className="hero-visual-dot" />
          <span className="hero-visual-dot" />
          <div
            className="hero-visual-tabs"
            role="tablist"
            aria-label="Product previews"
          >
            {PREVIEWS.map((preview) => (
              <button
                key={preview.id}
                type="button"
                role="tab"
                aria-selected={activeId === preview.id}
                className={`hero-visual-tab${
                  activeId === preview.id ? ' is-active' : ''
                }`}
                onClick={() => setActiveId(preview.id)}
              >
                {preview.label}
              </button>
            ))}
          </div>
          <span className="hero-visual-live" aria-hidden />
          <a
            className="hero-visual-open"
            href={active.href}
            target={active.href.startsWith('http') ? '_blank' : undefined}
            rel={
              active.href.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
          >
            {active.hrefLabel}
          </a>
        </div>
        <div className="hero-visual-live-body">
          <p className="hero-visual-url">{active.title}</p>
          <div className="hero-visual-stage" key={active.id}>
            <PreviewBody
              id={active.id}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>
          <div className="hero-visual-live-footer">
            <span className="hero-visual-stat">{active.stack}</span>
            <span className="hero-visual-live-hint">Interactive preview</span>
          </div>
        </div>
      </div>
    </div>
  );
}
