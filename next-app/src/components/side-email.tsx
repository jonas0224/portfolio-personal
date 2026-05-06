'use client';

import { CONTACT_EMAIL } from '@/lib/site-contact';
import { SideRail } from '@/components/side-rail';

export function SideEmail({ isHome }: { isHome: boolean }) {
  return (
    <SideRail isHome={isHome} orientation="right">
      <div className="portfolio-side-email">
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </SideRail>
  );
}
