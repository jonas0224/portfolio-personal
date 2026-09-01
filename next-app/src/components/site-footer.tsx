import { SOCIAL_LINKS } from '@/lib/site-contact'
import type { SocialIconName } from '@/components/icons/social-icon'
import { SocialIcon } from '@/components/icons/social-icon'

const GITHUB_REPO = 'jonas0224/portfolio-personal'

type GithubInfo = {
  stars: number
  forks: number
}

async function getGithubInfo(): Promise<GithubInfo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return null
    }

    const json = (await response.json()) as {
      stargazers_count?: number
      forks_count?: number
    }

    const stars = json.stargazers_count
    const forks = json.forks_count

    if (typeof stars !== 'number' || typeof forks !== 'number') {
      return null
    }

    return { stars, forks }
  } catch {
    return null
  }
}

function iconFor(name: string): SocialIconName {
  if (name === 'GitHub' || name === 'Instagram' || name === 'Linkedin') {
    return name
  }
  return 'GitHub'
}

export async function SiteFooter() {
  const githubInfo = await getGithubInfo()
  const githubUrl = `https://github.com/${GITHUB_REPO}`

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-social">
        <ul>
          {SOCIAL_LINKS.map(({ name, url }) => (
            <li key={url}>
              <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={iconFor(name)} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="portfolio-footer-credit" tabIndex={-1}>
        <a href={githubUrl} rel="noopener noreferrer" target="_blank">
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
        <p className="portfolio-footer-notes">
          <a href="/writing">Notes</a>
        </p>
      </div>
    </footer>
  )
}
