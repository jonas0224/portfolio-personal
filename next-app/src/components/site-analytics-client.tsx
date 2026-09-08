'use client'

import { useEffect, useId, useRef, useSyncExternalStore } from 'react'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/site'

const CONSENT_KEY = 'portfolio-analytics-consent'

type ConsentState = {
  analyticsAllowed: boolean
  showBanner: boolean
}

const listeners = new Set<() => void>()

function emitConsentChange() {
  listeners.forEach((listener) => listener())
}

function readConsentState(): ConsentState {
  if (typeof window === 'undefined') {
    return { analyticsAllowed: false, showBanner: false }
  }

  const stored = window.localStorage.getItem(CONSENT_KEY)
  if (stored === 'granted') {
    return { analyticsAllowed: true, showBanner: false }
  }
  if (stored === 'denied') {
    return { analyticsAllowed: false, showBanner: false }
  }

  return { analyticsAllowed: false, showBanner: true }
}

function subscribeConsent(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function writeConsent(value: 'granted' | 'denied') {
  window.localStorage.setItem(CONSENT_KEY, value)
  emitConsentChange()
}

export function SiteAnalyticsClient() {
  const { analyticsAllowed, showBanner } = useSyncExternalStore(
    subscribeConsent,
    readConsentState,
    () => ({ analyticsAllowed: false, showBanner: false }),
  )
  const titleId = useId()
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!showBanner) return
    acceptRef.current?.focus()
  }, [showBanner])

  return (
    <>
      {analyticsAllowed ? <Analytics /> : null}
      {GA_MEASUREMENT_ID && analyticsAllowed ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}
      {showBanner ? (
        <div
          className="analytics-consent"
          role="region"
          aria-labelledby={titleId}
          aria-live="polite"
        >
          <p id={titleId}>
            This site can load optional usage analytics (Vercel Analytics
            {GA_MEASUREMENT_ID ? ' and Google Analytics' : ''}). Accept only if you are comfortable
            with basic anonymous traffic metrics.
          </p>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => writeConsent('denied')}>
              Decline
            </button>
            <button
              ref={acceptRef}
              type="button"
              className="is-primary"
              onClick={() => writeConsent('granted')}
            >
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
