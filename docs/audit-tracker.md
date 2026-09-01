# Portfolio audit tracker

Living checklist from the deep audit of `portfolio-personal` (September 2026). Use this to prioritize fixes and record what shipped.

**Legend:** `[ ]` open · `[x]` done · `[-]` deferred / won't do

**Last reviewed:** 2026-09-01

---

## Status summary

| Area            | Grade | Open P0/P1 items |
| --------------- | ----- | ---------------- |
| Architecture    | A     | —                |
| Content model   | A-    | —                |
| Accessibility   | B+    | —                |
| Security        | B+    | —                |
| Performance     | B+    | —                |
| SEO             | A-    | —                |
| Maintainability | A-    | —                |

---

## P0 — Critical

| Status | Item                                            | Files / notes                                    |
| ------ | ----------------------------------------------- | ------------------------------------------------ |
| [x]    | **Fix reduced-motion hiding homepage sections** | `next-app/src/styles/portfolio.css` — 2026-09-01 |

---

## P1 — High

| Status | Item                                                                                                 | Files / notes                                                          |
| ------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [x]    | **Run `sync-content` in root `build`**                                                               | Root `package.json` — 2026-09-01                                       |
| [x]    | **Content source of truth workflow** — canonical `content/site/` + `verify-content` script + CI gate | `next-app/scripts/verify-content-sync.mjs`, `.github/workflows/ci.yml` |
| [x]    | **Align `projects.json` with featured slugs/copy**                                                   | `content/site/projects.json` — 2026-09-01                              |
| [x]    | **Promote Dev Portal + DropRoute in homepage gallery**                                               | `featured-projects-section.tsx` — 2026-09-01                           |
| [x]    | **Remove Pensieve pipeline** — redirects only; posts archived                                        | `next.config.ts`, `content/_archive/posts/` — 2026-09-01               |
| [x]    | **Archive legacy markdown**                                                                          | `content/_archive/` — 2026-09-01                                       |
| [x]    | **Upgrade Next.js + npm audit**                                                                      | Next `16.3.4`, 0 vulnerabilities — 2026-09-01                          |
| [x]    | **Add security headers**                                                                             | `next-app/next.config.ts` — 2026-09-01                                 |
| [x]    | **Add CI**                                                                                           | `.github/workflows/ci.yml` — 2026-09-01                                |

---

## P2 — Medium

### Content & storytelling

| Status | Item                                                                    | Files / notes                                |
| ------ | ----------------------------------------------------------------------- | -------------------------------------------- |
| [x]    | Wire or remove orphaned JSON: `leadership.json`, `quality-signals.json` | Archived to `content/_archive/site/`         |
| [x]    | Render `about.companies` / `companiesSummary`                           | Company chips in `jobs-section.tsx`          |
| [x]    | Use full `about.intro` in jobs lede                                     | `jobs-section.tsx` — 2026-09-01              |
| [x]    | Fix FLASHCUT round count drift                                          | `hero-product-visual.tsx` — 2026-09-01       |
| [x]    | Strengthen BOQ + Helika case study outcomes                             | `featured-projects.json` — 2026-09-01        |
| [x]    | Fix Helika `github` link (404)                                          | Set `github: null` — 2026-09-01              |
| [x]    | Replace placeholder `external` for roadmap items                        | `projects.json` — 2026-09-01                 |
| [x]    | Case-study-first project titles + external secondary link               | `featured-projects-section.tsx` — 2026-09-01 |
| [x]    | Add homepage teaser for `/writing`                                      | `writing-teaser-section.tsx` — 2026-09-01    |
| [x]    | Add product-card previews for Dev Portal + DropRoute                    | `product-card-preview.tsx` — 2026-09-01      |
| [x]    | Rename employer case study CTA to “Company site”                        | `projects/[slug]/page.tsx` — 2026-09-01      |
| [x]    | Refresh Archive Room copy                                               | 2026-08-30                                   |
| [x]    | Add KASAMA as personal MVP + case study                                 | 2026-08-30                                   |
| [x]    | Update `docs/project-roadmap.md` for KASAMA                             | 2026-08-30                                   |

### Performance

| Status | Item                                                  | Files / notes                   |
| ------ | ----------------------------------------------------- | ------------------------------- |
| [x]    | Delete unused `public/fonts/`                         | Removed — 2026-09-01            |
| [x]    | Compress `posts-static/markdown-playground/image.jpg` | N/A — Pensieve removed          |
| [x]    | Remove `favicon-logo.svg` + unused template SVGs      | Removed — 2026-09-01            |
| [x]    | Consolidate duplicate `Plus_Jakarta_Sans` font loads  | `layout.tsx` — 2026-09-01       |
| [x]    | Convert static sections to Server Components          | Homepage sections — 2026-09-01  |
| [x]    | Move footer GitHub stats server-side                  | `site-footer.tsx` — 2026-09-01  |
| [x]    | Add `priority` to profile image                       | `jobs-section.tsx` — 2026-09-01 |

### SEO & analytics

| Status | Item                                                | Files / notes                            |
| ------ | --------------------------------------------------- | ---------------------------------------- |
| [x]    | Per-case-study `openGraph` + `alternates.canonical` | `projects/[slug]/page.tsx` — 2026-09-01  |
| [x]    | Add JSON-LD `Person` / `WebSite`                    | `site-json-ld.tsx` — 2026-09-01          |
| [x]    | Stable sitemap `lastModified`                       | `sitemap.ts` — 2026-09-01                |
| [x]    | `manifest.webmanifest` + apple-touch-icon           | `app/manifest.ts` — 2026-09-01           |
| [x]    | GA4 consent banner                                  | `site-analytics-client.tsx` — 2026-09-01 |
| [x]    | Document env vars in `.env.example`                 | `next-app/.env.example` — 2026-09-01     |

### Code quality

| Status | Item                                        | Files / notes                                    |
| ------ | ------------------------------------------- | ------------------------------------------------ |
| [x]    | Add `"typecheck": "tsc --noEmit"` script    | `next-app/package.json` — 2026-09-01             |
| [x]    | Run ESLint in lint-staged for `next-app`    | Root `package.json` — 2026-09-01                 |
| [x]    | Replace JSON `as` casts with Zod validation | `lib/content-schemas.ts`, `data/site.ts`         |
| [x]    | Centralize contact email                    | `lib/site-contact.ts`                            |
| [x]    | Align CMS publishing contract               | `docs/cms-publishing.md` links CMS repo contract |

---

## P3 — Low / cleanup

| Status | Item                                                           | Files / notes                          |
| ------ | -------------------------------------------------------------- | -------------------------------------- |
| [x]    | Replace stale `next-app/README.md`                             | 2026-09-01                             |
| [x]    | Align Node version in root README                              | 2026-09-01                             |
| [x]    | Remove unused public SVGs                                      | 2026-09-01                             |
| [x]    | Retire legacy service worker cleanup                           | Removed with Pensieve — 2026-09-01     |
| [x]    | Standardize `rel="noopener noreferrer"` on footer/project CTAs | 2026-09-01                             |
| [x]    | Hero tabs: `aria-controls` + `role="tabpanel"`                 | `hero-product-visual.tsx` — 2026-09-01 |
| [x]    | Fix duplicate `<h2>` in contact section                        | `contact-section.tsx` — 2026-09-01     |
| [x]    | Add `aria-current="page"` on mobile nav links                  | `mobile-menu.tsx` — 2026-09-01         |
| [x]    | Add `docs/architecture.md`                                     | 2026-09-01                             |

---

## Deferred / decisions needed

| Status | Item                                  | Decision                                                               |
| ------ | ------------------------------------- | ---------------------------------------------------------------------- |
| [x]    | Publish Pensieve blog posts           | Removed pipeline; `/pensieve` → `/writing`                             |
| [x]    | Promote BOQ/Helika to primary gallery | Added to `HOME_SLUGS` — 2026-09-01                                     |
| [x]    | Show roadmap projects on site         | `horizon-section.tsx` from `projects.json` Roadmap/Parked — 2026-09-01 |
| [-]    | Vercel Analytics on Netlify deploy    | **Accepted** — lightweight, no cookie banner needed                    |
| [x]    | Per-project OG images                 | `projects/[slug]/opengraph-image.tsx` — 2026-09-01                     |
| [x]    | Automated tests                       | Vitest content schema tests + CI — 2026-09-01                          |

---

## Changelog

| Date       | Change                                                                                  |
| ---------- | --------------------------------------------------------------------------------------- |
| 2026-09-01 | Close deferred polish: per-project OG images, Vitest tests, CMS contract doc.           |
| 2026-09-01 | Product-tour redesign + deferred-items pass (Pensieve, RSC, Zod, manifest, GA consent). |
| 2026-09-01 | Created this tracker from deep audit.                                                   |
| 2026-08-30 | Refreshed Work content: Archive Room + KASAMA (`03b725b`).                              |
| 2026-08-09 | Story-first product surface redesign (`477daff`).                                       |

---

## Quick reference

**Homepage primary gallery** (`HOME_SLUGS`):

`pos-inventory-system` · `frontend-design-system` · `flashcut` · `realtime-operations-dashboard` · `ai-incident-triage` · `developer-productivity-portal` · `mobile-delivery-companion` · `portfolio-content-management` · `kasama-wfh-companion` · `boq-digital-banking-platform` · `helika-analytics-platform`

**Build / deploy:**

- Local: `npm run build` (syncs content automatically)
- Netlify: `npm ci && npm run sync-content && npm run build` in `next-app/`
- CI: verify-content → lint → typecheck → build
