'use client';

import { SOCIAL_LINKS } from '@/lib/site-contact';
import type { SocialIconName } from '@/components/icons/social-icon';
import { SocialIcon } from '@/components/icons/social-icon';
import { SideRail } from '@/components/side-rail';

function iconFor(name: string): SocialIconName {
  if (name === 'GitHub' || name === 'Instagram' || name === 'Linkedin') {
    return name;
  }
  return 'GitHub';
}

export function SideSocial({ isHome }: { isHome: boolean }) {
  return (
    <SideRail isHome={isHome} orientation="left">
      <ul className="portfolio-side-list">
        {SOCIAL_LINKS.map(({ name, url }) => (
          <li key={url}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <SocialIcon name={iconFor(name)} />
            </a>
          </li>
        ))}
      </ul>
    </SideRail>
  );
}
