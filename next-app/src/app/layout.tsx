import type { Metadata } from "next";
import {
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  TWITTER_SITE,
} from "@/lib/site";
import { SiteAnalytics } from "@/components/site-analytics";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: ogImageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl],
    ...(TWITTER_SITE ? { site: `@${TWITTER_SITE}`, creator: `@${TWITTER_SITE}` } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
        <SiteAnalytics />
      </body>
    </html>
  );
}
