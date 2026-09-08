import Link from 'next/link'
import { SECTION_SHELL } from '@/components/sections/constants'
import { OutlineLink } from '@/ui/outline-link'

export default function NotFound() {
  return (
    <div className={SECTION_SHELL}>
      <p className="portfolio-work-overline">404</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,48px)] font-semibold tracking-tight text-[var(--lightest-slate)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-[var(--light-slate)]">
        That route is missing or was moved. Head back to the product tour or jump to Notes.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <OutlineLink href="/">Back home</OutlineLink>
        <Link
          href="/writing"
          className="inline-flex items-center px-3 text-sm text-[var(--copper-bright)] underline decoration-[var(--copper)]/30 underline-offset-4"
        >
          Notes
        </Link>
      </div>
    </div>
  )
}
