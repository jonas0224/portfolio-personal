'use client'

import { useEffect } from 'react'

export function ClearLegacyServiceWorker() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    void (async () => {
      try {
        if ('caches' in window) {
          const keys = await caches.keys()
          await Promise.all(keys.map((key) => caches.delete(key)))
        }

        const registrations = await navigator.serviceWorker.getRegistrations()
        if (registrations.length === 0) return

        await navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
        await Promise.all(registrations.map((reg) => reg.unregister()))
      } catch {
        /* best-effort cleanup */
      }
    })()
  }, [])

  return null
}
