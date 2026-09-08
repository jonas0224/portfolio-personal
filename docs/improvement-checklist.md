# Portfolio improvement checklist

Living checklist for `portfolio-personal`. Use this to track polish after the September 2026 standards audit.

**Legend:** `[ ]` open · `[x]` done · `[-]` deferred / won't do

**Last updated:** 2026-09-08

---

## Status snapshot

| Track         | State                       |
| ------------- | --------------------------- |
| Audit P1–P3   | Done (pushed)               |
| Story polish  | Done (pushed)               |
| Proof polish  | Mostly done (local pending) |
| Content depth | Open (Notes)                |

---

## Ship gate

| Status | Item                         | Notes     |
| ------ | ---------------------------- | --------- |
| [x]    | Commit + push audit closeout | `fcb6821` |
| [x]    | Commit + push story polish   | `5838a6a` |

---

## Story & positioning

| Status | Item                                                      | Notes                        |
| ------ | --------------------------------------------------------- | ---------------------------- |
| [x]    | Add hero **Currently** line (BOQ/NRI + Archive Room)      | `hero.json` + hero section   |
| [x]    | Label Work cards **Employer** vs **Personal product**     | Also on All projects catalog |
| [x]    | Add nav item for full catalog (`Projects` → `/#projects`) | Scroll-spy included          |
| [x]    | Rename section id `horizon` → `projects`                  | `horizon-section.tsx`        |

---

## Proof & case studies

| Status | Item                                                                 | Notes                                     |
| ------ | -------------------------------------------------------------------- | ----------------------------------------- |
| [x]    | Add 1–2 honest metrics to top case studies where possible            | POS, DS, FLASHCUT, BOQ, Helika            |
| [x]    | Confirm live CTAs are clearest path for Archive Room / FLASHCUT / DS | Open live vs Case study / View repository |
| [ ]    | Refresh `/resume.pdf` to match current BOQ/NRI + top products        | Needs your PDF source; site copy is ready |
| [x]    | Decide on Experience portrait                                        | Keep text-only (no photo)                 |

---

## Notes / writing

| Status | Item                                                   | Notes                                 |
| ------ | ------------------------------------------------------ | ------------------------------------- |
| [ ]    | Publish one real note **or** soften homepage Notes CTA | Avoid empty Notes feel                |
| [-]    | Expand full blog / Pensieve                            | Pipeline removed; keep redirects only |

---

## Done — standards audit P1

| Status | Item                                            | Notes                       |
| ------ | ----------------------------------------------- | --------------------------- |
| [x]    | Gate Vercel Analytics + GA behind consent       | Banner copy updated         |
| [x]    | Add CSP + HSTS                                  | `next.config.ts`            |
| [x]    | Restore focus-visible rings (logo / hero tabs)  | `portfolio.css`             |
| [x]    | Restore focus to hamburger on mobile menu close | `mobile-menu.tsx`           |
| [x]    | Consent banner region + hit targets             | `site-analytics-client.tsx` |
| [x]    | Hero tablist keyboard APG                       | Arrow / Home / End          |

---

## Done — standards audit P2

| Status | Item                                              | Notes                      |
| ------ | ------------------------------------------------- | -------------------------- |
| [x]    | Reduced-motion hash scroll + safer motion default | `site-shell`, hook         |
| [x]    | Hero Server Component + client visual leaf        | `hero-section.tsx`         |
| [x]    | Remove unused public rasters + dead reveal code   |                            |
| [x]    | Branded `not-found.tsx`                           |                            |
| [x]    | Home + `/writing` canonical / OG parity           |                            |
| [x]    | Wire about intro / companies / all skill pillars  | `jobs-section.tsx`         |
| [x]    | Footer Notes → `next/link`                        |                            |
| [x]    | CI `format:check`                                 | `.github/workflows/ci.yml` |
| [x]    | Remove completed `docs/audit-tracker.md`          | Committed `b72f8da`        |

---

## Done — portfolio catalog

| Status | Item                                              | Notes                                      |
| ------ | ------------------------------------------------- | ------------------------------------------ |
| [x]    | Restore full `projects.json` catalog              | Not horizon-only                           |
| [x]    | **All projects** section shows every status       | Sorted Live → MVP → Built → Roadmap/Parked |
| [x]    | Add BOQ + Helika to catalog with employer framing | Case study + Company site links            |

---

## Done — standards audit P3

| Status | Item                                             | Notes                    |
| ------ | ------------------------------------------------ | ------------------------ |
| [x]    | Derive sitemap `lastModified` from content mtime | `sitemap.ts`             |
| [x]    | Remove unused `tokens-ref.css`                   | Bridge is runtime source |
| [x]    | Prune dead selectors in `portfolio.css`          | ~12KB+ removed           |

---

## Later / deferred

| Status | Item                                   | Notes                          |
| ------ | -------------------------------------- | ------------------------------ |
| [-]    | Full Tailwind rewrite of portfolio CSS | Not worth blocking story work  |
| [-]    | Extra analytics tooling                | Consent path is enough for now |

---

## Suggested order

1. Refresh `next-app/public/resume.pdf` against current BOQ/NRI + Archive Room framing
2. Notes decision (publish one or soften CTA)

---

## Related docs

- [architecture.md](./architecture.md) — content flow and homepage composition
- [cms-publishing.md](./cms-publishing.md) — CMS → JSON contract
- [project-roadmap.md](./project-roadmap.md) — product/project planning
- [upgrade-checklist.md](./upgrade-checklist.md) — stack + sync quick reference
