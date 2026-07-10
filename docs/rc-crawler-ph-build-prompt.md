# RC Crawler PH — build prompt (historical)

> **Parked 2026-07-10.** MVP (M0–M4) and 3D viewer spike are implemented in `personal/rc-crawler-ph/`.  
> **Resume from:** [`rc-crawler-ph/docs/STATUS.md`](../../rc-crawler-ph/docs/STATUS.md) and [`rc-crawler-ph/README.md`](../../rc-crawler-ph/README.md).  
> Private repo: `jonas0224/rc-crawler-ph`.

The prompt below was used to scaffold the project. Keep for context; do not re-run from scratch unless starting a greenfield rewrite.

---

## Prompt (original — archive)

```text
Build RC Crawler PH — a Philippines-focused web app that combines:

1. **Rig builder** (QuadPartPicker-style, NOT a 3D physics simulator on v1)
2. **Community** for the PH RC crawler scene (gallery, spots, events, clubs — phased)

## Context

- I am a Senior Frontend Developer (React, Next.js, TypeScript, 7+ years).
- Target market: Philippines RC crawler hobby — growing in 2026 (Pasig RC Park, mall meet-ups, RC Cars Pinas, regional clubs).
- Competitors exist in pieces (RC Spotters, RCLab, 4x4 Builder, QuadPartPicker for FPV only) but none own **PH budget builds, peso pricing, and local community**.
- Facebook groups are the incumbent; we need a wedge, not a Facebook clone.
- Low capital: prefer free tier hosting, incremental milestones, small reviewable PRs.
- This is a **new repo** (suggested name: `rc-crawler-ph`). Do not merge into portfolio or POS repos.

## Product principles

- Ship **builder first**, community second — gallery ties to shareable builds.
- Do **not** start with full 3D assembly or physics simulation (that is v3+ only if traction exists).
- Start with **one scale only**: either 1/24 micro OR 1/10 trail/scale — pick one after validation or default to 1/24 for beginner wedge.
- Curate ~40 hand-entered parts initially; allow "custom part + price" for gaps.
- Currency: **PHP (₱)** only for MVP.
- Include 3 preset builds (e.g. Budget / Trail / Scale) with shareable public URLs.

## MVP scope (builder)

- Platform/scale picker
- Part slots: chassis → axles → links → wheels → tires → electronics (motor/ESC/receiver) → battery → body (optional)
- Running total in PHP
- Save build → unique share URL (slug or id)
- Static rig preview (layered images or simple illustration — no Three.js required for MVP)
- Mobile-first UI

## Community (phased — do not build all at once)

**v1 (after builder works):**
- Lightweight auth (email magic link or OAuth — your recommendation for lowest friction)
- Public build gallery (shared rigs from builder)
- User profile (name, avatar, list of builds)
- Like + comment on builds

**v2:**
- PH crawl spots map (Pasig RC Park, mall venues, user-submitted spots with moderation queue)
- Simple events calendar (title, date, location, link to FB event optional)

**v3:**
- Club/chapter pages (name, region, FB group link, featured builds)
- Optional "verified club" badge (manual admin flag for now)

## PH-specific requirements

- Budget tiers in copy: ₱8k / ₱15k / ₱30k / ₱50k+ build examples
- Parts brands common in PH: WPL, MN, Redcat, Traxxas SCX24/SCX10, Axial, plus honest budget/Shopee kit baselines
- Scale bodies popular locally (Land Cruiser, Bronco, Hilux) as preset flavor text
- Taglish-friendly UI copy is a plus but English-first is OK for MVP

## Tech stack (required unless you justify a change)

- Next.js App Router + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Auth: NextAuth or Clerk (pick simplest for MVP)
- Zod validation on all writes
- Deploy target: Vercel + Neon (or similar free-tier Postgres)
- Optional later: vendored primitives from my design-system pattern if useful

## Architecture constraints

- Service layer for business logic; thin route handlers / server actions
- No secrets in repo; `.env.example` documented
- `npm run lint`, `npm run build`, and basic smoke path must pass per milestone
- README with setup, env vars, and local dev steps

## Milestones (implement in order)

### M0 — Repo baseline
- Scaffold Next.js app, Prisma, auth stub, lint/build scripts, README, `.env.example`

### M1 — Builder MVP
- Part catalog seed (one scale, ~40 parts)
- Build composer UI + PHP total
- 3 presets + save/share URL
- Public read-only build page

### M2 — Community v1
- Auth + profile
- Gallery + like/comment

### M3 — Community v2
- Spots + events (CRUD with admin/mod approval for user submissions)

### M4 — Launch polish
- OG images for shared builds
- Basic SEO pages (home, gallery, spots)
- Analytics hook (privacy-friendly)

## Monetization (document only — do not implement in MVP)

- Shopee/Lazada affiliate links on parts (v2)
- Sponsored shop listings (after traffic)
- No paid subscriptions in MVP

## Kill criteria (call out in README)

- If <20 completed builds in week 3 post soft launch, narrow scale or simplify before v2/v3
- If validation shows "Facebook is enough", pivot to builder-only

## Validation (if not done yet, pause and give me a 1-week validation checklist first)

- Join RC Cars Pinas + 2 regional FB groups
- Interview ~10 crawlers: pain on planning builds, finding spots, sharing rigs
- Short survey: first build budget, platform scale, where they bought parts

## What I want from you now

1. Confirm milestone plan or propose adjustments
2. Scaffold M0 (or M0+M1 if validation is already done)
3. Propose data model (Part, Build, BuildLineItem, User, Comment, Spot, Event, Club)
4. Seed data for one scale with realistic PH-oriented parts
5. Keep diffs focused — no over-engineering

Reference planning doc in my workspace: `portfolio-personal/docs/project-roadmap.md` (section: Active product bet: RC Crawler PH).
```

---

## When to use this prompt

| Situation | Action |
| --------- | ------ |
| **Resuming parked work** | Open `rc-crawler-ph/docs/STATUS.md` — do not re-scaffold |
| Greenfield rewrite only | Paste archived prompt below |
| Community-only extension | Assume builder exists in `rc-crawler-ph`; start from STATUS.md |

## Related docs

- **Status (done / remaining):** [`rc-crawler-ph/docs/STATUS.md`](../../rc-crawler-ph/docs/STATUS.md)
- Roadmap: [project-roadmap.md](./project-roadmap.md) — section **Active product bet: RC Crawler PH**
- Portfolio roadmap card: `content/site/projects.json` → **RC Crawler PH — Builder & Community**
