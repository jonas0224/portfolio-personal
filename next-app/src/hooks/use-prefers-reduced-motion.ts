'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', onStoreChange)
  return () => media.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
  return !window.matchMedia(QUERY).matches
}

/** Assume reduced motion until hydrated so entrance animations do not flash. */
function getServerSnapshot() {
  return true
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
