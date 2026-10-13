'use client'

import { useId, useState, type KeyboardEvent } from 'react'

const STEPS = [
  {
    id: 'journeys',
    index: '01',
    title: 'Journeys',
    summary:
      'I lead the screens customers actually use: accounts, pay, transfer, and the empty, loading, and error states in between.',
    proof: 'Bank of Queensland internet banking · NRI ANZ',
  },
  {
    id: 'systems',
    index: '02',
    title: 'Systems',
    summary:
      'A button is not a senior skill. A token map other squads can ship against, without forking styles, is.',
    proof: 'Design system · tokens, Storybook, CI gates',
  },
  {
    id: 'guardrails',
    index: '03',
    title: 'Guardrails',
    summary:
      'Regulated UI fails in production, not in a Figma file. I make the risky path expensive to skip: types, smoke tests, and a way to roll back.',
    proof: 'Playwright on money-adjacent flows · Azure / GitHub releases',
  },
  {
    id: 'reviews',
    index: '04',
    title: 'Reviews',
    summary:
      'Mentoring shows up in the diff. I review for names, accessibility, and whether the next engineer can change this without fear.',
    proof: 'Squad reviews · onboarding · release confidence',
  },
] as const

type StepId = (typeof STEPS)[number]['id']

export function ReleaseFloor() {
  const baseId = useId()
  const [active, setActive] = useState<StepId>('journeys')
  const current = STEPS.find((step) => step.id === active) ?? STEPS[0]

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = STEPS.findIndex((step) => step.id === active)
    if (
      event.key !== 'ArrowRight' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'Home' &&
      event.key !== 'End'
    ) {
      return
    }
    event.preventDefault()
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? STEPS.length - 1
          : event.key === 'ArrowRight'
            ? (index + 1) % STEPS.length
            : (index - 1 + STEPS.length) % STEPS.length
    const step = STEPS[next]
    if (!step) return
    setActive(step.id)
    document.getElementById(`${baseId}-tab-${step.id}`)?.focus()
  }

  return (
    <div className="release-floor">
      <div
        className="release-floor-tabs"
        role="tablist"
        aria-label="How I lead frontend"
        onKeyDown={onKeyDown}
      >
        {STEPS.map((step) => {
          const selected = step.id === active
          return (
            <button
              key={step.id}
              id={`${baseId}-tab-${step.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`release-floor-tab${selected ? ' is-active' : ''}`}
              onClick={() => setActive(step.id)}
            >
              <span>{step.index}</span>
              {step.title}
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="release-floor-panel"
      >
        <div className="release-floor-copy">
          <p className="release-floor-kicker">
            {current.index} / {current.title}
          </p>
          <p className="release-floor-summary">{current.summary}</p>
          <p className="release-floor-proof">{current.proof}</p>
        </div>
        <div className="release-floor-stage" aria-hidden>
          <FloorScene id={current.id} />
        </div>
      </div>
    </div>
  )
}

function FloorScene({ id }: { id: StepId }) {
  if (id === 'journeys') {
    return (
      <div className="rf-journey">
        <p>Internet banking · pay</p>
        <ol>
          <li className="is-done">From</li>
          <li className="is-now">Review</li>
          <li>Done</li>
        </ol>
        <div className="rf-journey-card">
          <span>Everyday → Savings</span>
          <strong>$240.00</strong>
          <em>Confirm before it leaves the account</em>
        </div>
      </div>
    )
  }

  if (id === 'systems') {
    return (
      <div className="rf-system">
        <p>Semantic tokens</p>
        <ul>
          <li>
            <code>color.text</code>
            <span>slate</span>
          </li>
          <li>
            <code>color.brand</code>
            <span>copper</span>
          </li>
          <li>
            <code>space.4</code>
            <span>16px</span>
          </li>
          <li>
            <code>radius.md</code>
            <span>10px</span>
          </li>
        </ul>
        <div className="rf-system-preview">
          <span className="is-brand">Primary</span>
          <span>Ghost</span>
        </div>
      </div>
    )
  }

  if (id === 'guardrails') {
    return (
      <div className="rf-guard">
        <p>Release checks</p>
        <ul>
          <li>
            <i /> Types
          </li>
          <li>
            <i /> Playwright · pay path
          </li>
          <li>
            <i /> Accessibility
          </li>
          <li className="is-hold">
            <i /> Rollout flag
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="rf-review">
      <p>Review</p>
      <blockquote>
        Name the intent, not the hex. The next squad has to change this without opening DevTools.
      </blockquote>
      <div>
        <span>Requested changes</span>
        <span className="is-ok">Accessible name</span>
      </div>
    </div>
  )
}
