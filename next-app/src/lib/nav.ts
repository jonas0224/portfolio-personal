export type NavItem = {
  name: string
  href: string
  /** Home-page section id for scroll-spy highlighting */
  sectionId?: string
}

/**
 * Primary nav: product-tour story flow on the homepage.
 */
export const NAV_LINKS: NavItem[] = [
  { name: 'Story', href: '/#hero', sectionId: 'hero' },
  { name: 'Craft', href: '/#craft', sectionId: 'craft' },
  { name: 'Work', href: '/#work', sectionId: 'work' },
  { name: 'Experience', href: '/#jobs', sectionId: 'jobs' },
  { name: 'Notes', href: '/writing' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
]
