'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const TRAIL_LIFE_MS = 2800
const STAMP_GAP = 72
const MAX_DABS = 80
const SPOT_RADIUS = 260

type Dab = { pageX: number; pageY: number; born: number }

export function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced) return
    const context = canvas.getContext('2d')
    if (!context) return

    const dabs: Dab[] = []
    const pointer = { clientX: 0, clientY: 0, seen: false }
    let lastStamp = { pageX: 0, pageY: 0 }
    let frame = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const toPage = (clientX: number, clientY: number) => ({
      pageX: clientX,
      pageY: clientY + window.scrollY,
    })

    const paintSpot = (x: number, y: number, alpha: number) => {
      const glow = context.createRadialGradient(x, y, 0, x, y, SPOT_RADIUS)
      glow.addColorStop(0, `rgba(103, 232, 249, ${0.42 * alpha})`)
      glow.addColorStop(0.26, `rgba(34, 211, 238, ${0.16 * alpha})`)
      glow.addColorStop(0.48, `rgba(34, 211, 238, ${0.04 * alpha})`)
      glow.addColorStop(0.68, 'rgba(34, 211, 238, 0)')
      context.fillStyle = glow
      context.beginPath()
      context.arc(x, y, SPOT_RADIUS, 0, Math.PI * 2)
      context.fill()
    }

    const onMove = (event: PointerEvent) => {
      const next = toPage(event.clientX, event.clientY)
      if (!pointer.seen) lastStamp = next
      pointer.clientX = event.clientX
      pointer.clientY = event.clientY
      pointer.seen = true

      const dx = next.pageX - lastStamp.pageX
      const dy = next.pageY - lastStamp.pageY
      const distance = Math.hypot(dx, dy)
      if (distance < STAMP_GAP) return
      const steps = Math.ceil(distance / STAMP_GAP)
      const born = performance.now()
      for (let step = 1; step <= steps; step += 1) {
        dabs.push({
          pageX: lastStamp.pageX + (dx * step) / steps,
          pageY: lastStamp.pageY + (dy * step) / steps,
          born,
        })
      }
      lastStamp = next
      if (dabs.length > MAX_DABS) dabs.splice(0, dabs.length - MAX_DABS)
    }

    const tick = (now: number) => {
      const rect = canvas.getBoundingClientRect()
      const place = (pageX: number, pageY: number) => ({
        x: pageX - rect.left,
        y: pageY - window.scrollY - rect.top,
      })

      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      for (let index = dabs.length - 1; index >= 0; index -= 1) {
        const dab = dabs[index]
        if (!dab) continue
        const age = now - dab.born
        if (age >= TRAIL_LIFE_MS) {
          dabs.splice(index, 1)
          continue
        }
        const fade = 1 - age / TRAIL_LIFE_MS
        const point = place(dab.pageX, dab.pageY)
        paintSpot(point.x, point.y, fade * fade * 0.22)
      }

      if (pointer.seen && pointer.clientX >= rect.left) {
        paintSpot(pointer.clientX - rect.left, pointer.clientY - rect.top, 1)
      }

      frame = window.requestAnimationFrame(tick)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    frame = window.requestAnimationFrame(tick)
    window.addEventListener('pointermove', onMove)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [reduced])

  if (reduced) return null

  return <canvas ref={canvasRef} className="cursor-field" aria-hidden="true" />
}
