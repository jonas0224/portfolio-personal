'use client'

import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function ScrollProgress() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? doc.scrollTop / max : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="scroll-progress" role="presentation" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
