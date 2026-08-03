import { ImageResponse } from 'next/og';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: '#09090b',
          color: '#fafafa',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#22d3ee',
            marginBottom: 20,
          }}
        >
          Senior Frontend Developer
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          {SITE_TITLE}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: '#a1a1aa',
            maxWidth: 920,
            lineHeight: 1.35,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
