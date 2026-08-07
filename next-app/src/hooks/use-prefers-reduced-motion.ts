'use client'

import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'
const isServer = typeof window === 'undefined'

/**
 * SSR-safe: assume full motion until hydrated (matches legacy behavior closely).
 */
function getInitialState() {
  if (isServer) {
    return false
  }
  return !window.matchMedia(QUERY).matches
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const listener = () => setPrefersReducedMotion(!mq.matches)
    listener()
    mq.addEventListener('change', listener)
    return () => mq.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}
