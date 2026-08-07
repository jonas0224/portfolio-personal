import Link from 'next/link'
import type { Metadata } from 'next'
import { SECTION_SHELL } from '@/components/sections/constants'
import { SITE_TITLE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tags',
  description: `Writing tags — ${SITE_TITLE}`,
  robots: { index: false, follow: false },
}

export default function PensieveTagsPage() {
  return (
    <div className={SECTION_SHELL}>
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--copper)]">
        Writing
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--lightest-slate)]">
        Tags unavailable
      </h1>
      <p className="mt-4 max-w-xl text-[var(--light-slate)]">
        Original posts aren&apos;t published yet. Check back later.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-[var(--copper-bright)] underline decoration-[var(--copper)]/30 underline-offset-4"
        >
          Back home
        </Link>
      </p>
    </div>
  )
}
