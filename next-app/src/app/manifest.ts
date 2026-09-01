import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jonas Yambao: Portfolio',
    short_name: 'Jonas Yambao',
    description:
      'Senior Frontend Developer portfolio focused on React, Next.js, and product delivery.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#22d3ee',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
