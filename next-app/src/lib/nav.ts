export type NavItem = {
  name: string
  href: string
  /** Home-page section id for scroll-spy highlighting */
  sectionId?: string
}

/**
 * Primary nav.
 * Work = products + case studies. Notes = /writing (kept out of the home story flow).
 */
export const NAV_LINKS: NavItem[] = [
  { name: 'Story', href: '/#hero', sectionId: 'hero' },
  { name: 'Experience', href: '/#jobs', sectionId: 'jobs' },
  { name: 'Work', href: '/#work', sectionId: 'work' },
  { name: 'Notes', href: '/writing' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
]
