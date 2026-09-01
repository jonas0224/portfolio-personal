import type { Metadata } from 'next'
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { OG_IMAGE_PATH, SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TWITTER_SITE } from '@/lib/site'
import { SiteAnalyticsClient } from '@/components/site-analytics-client'
import { SiteFooter } from '@/components/site-footer'
import { SiteJsonLd } from '@/components/site-json-ld'
import { SiteShell } from '@/components/site-shell'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: ogImageUrl }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl],
    ...(TWITTER_SITE ? { site: `@${TWITTER_SITE}`, creator: `@${TWITTER_SITE}` } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${jakarta.variable} ${mono.variable}`}
      data-theme="portfolio"
    >
      <body className="min-h-full font-[family-name:var(--font-display)]">
        <SiteJsonLd />
        <SiteShell footer={<SiteFooter />}>{children}</SiteShell>
        <SiteAnalyticsClient />
      </body>
    </html>
  )
}
