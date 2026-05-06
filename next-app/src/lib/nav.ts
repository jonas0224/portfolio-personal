export type NavItem = { name: string; href: string };

/** Primary nav; hash targets match section `id`s on the home page. */
export const NAV_LINKS: NavItem[] = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#jobs" },
  { name: "Work", href: "/#projects" },
  { name: "Pensieve", href: "/pensieve" },
  { name: "Contact", href: "/#contact" },
];
