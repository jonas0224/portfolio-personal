export type NavItem = {
  name: string
  href: string
  /** Home-page section id for scroll-spy highlighting */
  sectionId?: string
}

/**
 * Primary nav: recruiter-first homepage flow (experience before product gallery).
 */
export const NAV_LINKS: NavItem[] = [
  { name: 'Story', href: '/#hero', sectionId: 'hero' },
  { name: 'Experience', href: '/#jobs', sectionId: 'jobs' },
  { name: 'Work', href: '/#work', sectionId: 'work' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Craft', href: '/#craft', sectionId: 'craft' },
  { name: 'Notes', href: '/writing' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
]
