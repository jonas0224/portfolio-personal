import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'

export function SiteJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Jonas Yambao',
        url: SITE_URL,
        jobTitle: 'Senior Frontend Developer',
        email: 'mailto:jonas.paul11@yahoo.com',
        sameAs: [
          'https://github.com/jonas0224',
          'https://www.linkedin.com/in/jonasyambao/',
          'https://www.instagram.com/jonasyambao/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#person` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
