import { IconFork } from '@/components/icons/icon-fork'
import { IconGitHub } from '@/components/icons/icon-github'
import { IconInstagram } from '@/components/icons/icon-instagram'
import { IconLinkedin } from '@/components/icons/icon-linkedin'
import { IconStar } from '@/components/icons/icon-star'

export type SocialIconName = 'GitHub' | 'Instagram' | 'Linkedin' | 'Star' | 'Fork'

export function SocialIcon({ name }: { name: SocialIconName }) {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Linkedin':
      return <IconLinkedin />
    case 'Star':
      return <IconStar />
    case 'Fork':
      return <IconFork />
    default:
      return null
  }
}
