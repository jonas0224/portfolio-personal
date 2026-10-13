export type NavItem = {
  name: string
  href: string
  /** Home-page section id for scroll-spy highlighting */
  sectionId?: string
}

/**
 * Primary nav follows the page: experience, then work, then craft and the full stack.
 */
export const NAV_LINKS: NavItem[] = [
  { name: 'Story', href: '/#hero', sectionId: 'hero' },
  { name: 'Experience', href: '/#jobs', sectionId: 'jobs' },
  { name: 'Work', href: '/#work', sectionId: 'work' },
  { name: 'Craft', href: '/#craft', sectionId: 'craft' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Notes', href: '/writing' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
]
