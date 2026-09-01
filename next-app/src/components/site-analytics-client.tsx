'use client'

import { useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/site'

const CONSENT_KEY = 'portfolio-analytics-consent'

function readConsentState() {
  if (typeof window === 'undefined') {
    return { gaAllowed: false, showBanner: false }
  }

  const stored = window.localStorage.getItem(CONSENT_KEY)
  if (stored === 'granted') {
    return { gaAllowed: true, showBanner: false }
  }
  if (stored === 'denied') {
    return { gaAllowed: false, showBanner: false }
  }

  return { gaAllowed: false, showBanner: Boolean(GA_MEASUREMENT_ID) }
}

export function SiteAnalyticsClient() {
  const [{ gaAllowed, showBanner }, setConsent] = useState(readConsentState)

  function grantConsent() {
    window.localStorage.setItem(CONSENT_KEY, 'granted')
    setConsent({ gaAllowed: true, showBanner: false })
  }

  function denyConsent() {
    window.localStorage.setItem(CONSENT_KEY, 'denied')
    setConsent({ gaAllowed: false, showBanner: false })
  }

  return (
    <>
      <Analytics />
      {GA_MEASUREMENT_ID && gaAllowed ? (
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
        <div className="analytics-consent" role="dialog" aria-label="Analytics consent">
          <p>
            This site can load optional Google Analytics when enabled. Accept only if you are
            comfortable with basic usage analytics.
          </p>
          <div className="analytics-consent-actions">
            <button type="button" onClick={denyConsent}>
              Decline
            </button>
            <button type="button" className="is-primary" onClick={grantConsent}>
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
