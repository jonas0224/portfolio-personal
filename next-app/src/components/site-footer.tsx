'use client';

import { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '@/lib/site-contact';
import type { SocialIconName } from '@/components/icons/social-icon';
import { SocialIcon } from '@/components/icons/social-icon';

const GITHUB_REPO = 'jonasyambao/portfolio';

function iconFor(name: string): SocialIconName {
  if (name === 'GitHub' || name === 'Instagram' || name === 'Linkedin') {
    return name;
  }
  return 'GitHub';
}

export function SiteFooter() {
  const [githubInfo, setGithubInfo] = useState<{ stars: number; forks: number } | null>(
    null,
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    let cancelled = false;
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then((response) => response.json())
      .then((json: { stargazers_count?: number; forks_count?: number }) => {
        if (cancelled) return;
        const stars = json.stargazers_count;
        const forks = json.forks_count;
        if (typeof stars === 'number' && typeof forks === 'number') {
          setGithubInfo({ stars, forks });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const githubUrl = `https://github.com/${GITHUB_REPO}`;

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-social">
        <ul>
          {SOCIAL_LINKS.map(({ name, url }) => (
            <li key={url}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <SocialIcon name={iconFor(name)} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="portfolio-footer-credit" tabIndex={-1}>
        <a href={githubUrl}>
          <div>Designed &amp; Built by Jonas Yambao</div>
          {githubInfo ? (
            <div className="portfolio-footer-stats">
              <span>
                <SocialIcon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <SocialIcon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          ) : null}
        </a>
      </div>
    </footer>
  );
}
