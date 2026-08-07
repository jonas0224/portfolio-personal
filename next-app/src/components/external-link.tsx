import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  children: ReactNode
}

export function ExternalLink({
  children,
  href,
  rel,
  target,
  className,
  ...props
}: ExternalLinkProps) {
  const merged = ['inline-link', className].filter(Boolean).join(' ')
  return (
    <a
      {...props}
      className={merged}
      href={href}
      target={target ?? '_blank'}
      rel={rel ?? 'noopener noreferrer'}
    >
      {children}
    </a>
  )
}
