'use client';

import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { KEY_CODES } from '@/lib/key-codes';
import { NAV_LINKS } from '@/lib/nav';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { ButtonLink } from '@/ui/button';

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('portfolio-body-blur');
    } else {
      document.body.classList.remove('portfolio-body-blur');
    }
    return () => document.body.classList.remove('portfolio-body-blur');
  }, [menuOpen]);

  const getFocusables = useCallback(() => {
    const btn = buttonRef.current;
    const links = navRef.current
      ? Array.from(navRef.current.querySelectorAll<HTMLElement>('a'))
      : [];
    return [btn, ...links].filter(Boolean) as HTMLElement[];
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen) return;
    const focusables = getFocusables();
    focusables[0]?.focus();
  }, [menuOpen, getFocusables]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!menuOpen) return;

      if (e.key === KEY_CODES.ESCAPE || e.key === KEY_CODES.ESCAPE_IE11) {
        setMenuOpen(false);
        return;
      }

      if (e.key !== KEY_CODES.TAB) return;

      const focusables = getFocusables();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, getFocusables]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <div className="portfolio-mobile-wrap">
      <div ref={wrapperRef}>
        <button
          type="button"
          ref={buttonRef}
          className="portfolio-hamburger"
          data-open={menuOpen ? 'true' : 'false'}
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar-nav"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <div className="portfolio-ham-box">
            <div className="portfolio-ham-inner" />
          </div>
        </button>

        <aside
          id="mobile-sidebar-nav"
          className="portfolio-sidebar"
          data-open={menuOpen ? 'true' : 'false'}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 0 : -1}
        >
          <nav ref={navRef}>
            <ol>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ol>
            <ButtonLink
              className="portfolio-sidebar-resume"
              href="/resume.pdf"
              onClick={() => setMenuOpen(false)}
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
              variant="outline"
            >
              Resume
            </ButtonLink>
          </nav>
        </aside>
      </div>
    </div>
  );
}
