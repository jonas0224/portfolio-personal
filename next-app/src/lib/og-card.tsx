import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 } as const

type OgCardProps = {
  eyebrow: string
  title: string
  description: string
}

export function renderOgCard({ eyebrow, title, description }: OgCardProps) {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#09090b',
        color: '#fafafa',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 18,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#22d3ee',
        }}
      >
        {eyebrow}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: '#a1a1aa',
            maxWidth: 920,
            lineHeight: 1.35,
          }}
        >
          {description}
        </div>
      </div>
      <div style={{ fontSize: 16, color: '#71717a' }}>jonasyambao.com</div>
    </div>,
    { ...OG_SIZE },
  )
}
