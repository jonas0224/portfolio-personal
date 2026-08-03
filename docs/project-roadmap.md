# Portfolio project roadmap

Prioritized list of planned portfolio projects, active products, and delivery order.

## Current status snapshot

| Track           | Status                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Shipped**     | Portfolio CMS + Publishing Workflow                                                           |
| **Shipped**     | Frontend Design System Migration (library + `portfolio-personal` adoption)                    |
| **In progress** | POS & Inventory System — MVP done; pilot deploy via `pos-inventory-system/docs/operations.md` |
| **Parked**      | RC Crawler PH — MVP in `rc-crawler-ph`; see `rc-crawler-ph/docs/STATUS.md`                    |
| **Planned**     | 4 showcase projects + 2 future apps (see lists below)                                         |

---

## Active products (not portfolio demos)

These are real tools you maintain alongside showcase repos. They share the workspace but are not interview "case study" projects in the same sense.

### POS & Inventory System

**Status:** MVP complete; **pilot deploy** (Neon + Vercel) per release plan  
**Repo:** `pos-inventory-system` (sibling folder under `personal/`)  
**Role:** Web POS + inventory + reports + consignee portal for a consigned clothing business

**Done (high level):**

- Admin, cashier, and consignee roles; POS checkout; inventory CRUD; CSV/PDF reports
- shadcn/ui migration; Next.js 16 + Prisma 7; API smoke tests (2026-05-07)
- Security basics: headers, login rate limiting, `/api/health`

**Current focus (deploy-time):**

- Staging/production env (`JWT_SECRET`, `DATABASE_URL`, HTTPS)
- `npx prisma migrate deploy` + backup
- `npm run smoke` after deploy
- See `pos-inventory-system/docs/operations.md`

**Recently added in repo:** Multi-tenant shops, PIN lock, tablet POS, CI, smoke script

**Docs:** `pos-inventory-system/docs/operations.md` (deploy), `docs/roadmap.md` (features), `docs/security.md` (auth)

---

## Priority order (portfolio showcase projects)

1. **Realtime Operations Dashboard** — **shipped** (see `realtime-operations-dashboard/`)
2. **AI-Assisted Incident Triage UI**
3. **Developer Productivity Portal**
4. **Mobile Delivery Companion**

_Shipped:_ Frontend Design System Migration (see [Shipped reference](#shipped-reference)).

Rationale: design system is done; next project adds realtime full-stack depth for interviews.

**Note:** POS uses its own UI stack (shadcn/ui) and is tracked separately above.

---

## Active product bet: RC Crawler PH (builder + community)

**Status:** **Parked (2026-07-10)** — MVP + community v1–v3 + 3D viewer spike shipped in repo; deploy, validation, and accurate per-part 3D models still open  
**Repo:** `rc-crawler-ph` (private) — sibling folder under `personal/`, same layout as `portfolio-personal`  
**Status doc:** `rc-crawler-ph/docs/STATUS.md` (resume here)

**Working name:** RC Crawler PH / CrawlBuild PH  
**Angle:** QuadPartPicker-style MN82 1:12 rig builder + Philippines RC crawler community hub.

### Shipped in repo (high level)

- Builder: ~40 MN82 parts, PHP totals, 3 presets, share URLs, community pricing + moderation
- Community: gallery, auth, likes/comments, spots map, events, clubs, OG images
- 3D: desktop R3F rig viewer (accurate per-part `modelUrl` mode); mobile 2D preview
- **Not done:** production deploy, FB validation, real MN82 GLBs (one per catalog part)

### To-do list (when resuming)

- [ ] **Deploy** — Vercel + Neon; auth secrets; `db:migrate:deploy` + seed
- [ ] **Validate** (if still desired) — RC Cars Pinas + interviews + budget survey
- [ ] **Accurate 3D** — scan or source MN82-specific GLBs per part (`part-models.json`); see `rc-crawler-ph/README.md`
- [ ] **Launch** — preset URLs in FB groups; week-3 kill criteria (~20 builds)
- [ ] **Monetize (after traction)** — optional affiliate; not a current goal

### Kill criteria

- Fewer than ~20 completed builds in week 3 after soft launch → narrow scale or simplify UX before more features.
- If answers are always "we just use Facebook" with no pain on builds/spots → pause or builder-only.

### Repo & docs

- **Code:** `personal/rc-crawler-ph/` → GitHub `jonas0224/rc-crawler-ph` (private)
- **Resume:** [`rc-crawler-ph/docs/STATUS.md`](../rc-crawler-ph/docs/STATUS.md)
- **Build prompt (historical):** [rc-crawler-ph-build-prompt.md](./rc-crawler-ph-build-prompt.md) — superseded by shipped MVP; use for context only

---

## Future app ideas (side projects)

Practical tools for personal or small-business use — separate from interview showcase repos; ship when capacity allows.

### Training & Certification Tracker

**Description**  
An app that helps you track online training and certifications — courses in progress, completion dates, expiry/renewal reminders, and links to certificates.

**Suggested MVP**

- Add/edit training entries (provider, URL, status, target date)
- Certification records with issue and expiry dates
- Dashboard: in progress, completed, due for renewal
- Optional email or in-app reminders before expiry

**Success criteria**

- One place to see all active and completed training
- Renewal dates visible without digging through email

---

### Gross & Expense Calculator (small business)

**Description**  
An app that lets small business owners easily compute **gross revenue**, **product price**, and **expenses** for their product or business — simple inputs, clear PHP (or currency) breakdown, and margin at a glance.

**Suggested MVP**

- Product/line item: cost, selling price, quantity → gross and margin
- Business summary: revenue, categorized expenses, net vs gross
- Save named scenarios (e.g. "Weekend market", "Online Shopee")
- Export or print a one-page summary for records

**Success criteria**

- Owner can answer "What's my gross and what's left after expenses?" without a spreadsheet
- Readable on mobile for market-day quick checks

---

## Project details

## 1) Realtime Operations Dashboard

**Description**  
Build a realtime dashboard with websocket streams, alerting states, and resilient data synchronization.

**Why first**  
Strong full-stack signal (realtime + reliability + UX), very demo-friendly for interviews.

**Suggested MVP**

- Live event stream via WebSocket
- Health tiles + alert states
- Reconnect handling and stale-data indicators
- Basic filtering/search

**Success criteria**

- Live updates visible in demo
- Error/reconnect behavior clearly handled
- README explains architecture and tradeoffs

---

## 2) AI-Assisted Incident Triage UI

**Description**  
Interface for classifying incidents, suggesting runbooks, and routing ownership based on historical patterns.

**Why third**  
Adds AI product relevance while building on stronger frontend/system foundations.

**Suggested MVP**

- Incident intake form
- Suggested severity/category from AI
- Runbook recommendation panel
- Human override + audit trail in UI

**Success criteria**

- AI suggestions integrated into workflow, not standalone toy output
- Clear fallback behavior when model/API fails
- Case study explains safety and confidence handling

---

## 3) Developer Productivity Portal

**Description**  
Centralize CI insights, release notes, and service health into one internal portal.

**Why fourth**  
Great platform-engineering signal, but higher integration overhead than earlier projects.

**Suggested MVP**

- CI status summary cards
- Release notes feed
- Service health panel
- Quick links/actions for common dev tasks

**Success criteria**

- At least two data sources integrated end-to-end
- Actionable workflow (not dashboard-only)
- Documentation of auth/data boundaries

---

## 4) Mobile Delivery Companion

**Description**  
React Native companion app for field workflows with offline-first behavior and sync conflict handling.

**Why fifth**  
Largest scope and additional platform complexity; best tackled after core web projects are shipped.

**Suggested MVP**

- Offline queue for core actions
- Background sync + retry strategy
- Conflict resolution UI
- One complete field-user flow

**Success criteria**

- Offline flow demonstrated in video
- Sync/conflict handling is explicit and testable
- Clear separation of local vs server state

---

## Shipped reference

### Portfolio CMS + Publishing Workflow

**Status:** Shipped  
**Repo:** [portfolio-content-management](https://github.com/jonas0224/portfolio-content-management)

What it demonstrates:

- CMS authoring with auth + role-aware actions
- Draft preview workflow
- PR-based publishing to portfolio repo

### Frontend Design System Migration

**Status:** Shipped (2026-05-20)  
**Repo:** `frontend-design-system-migration`  
**Live adoption:** `portfolio-personal` (`next-app/src/ui/`, `design-system-bridge.css`)

What it demonstrates:

- Semantic tokens + host theme bridge (portfolio teal/navy palette)
- Primitives: `Button`, `Card`, `Input`, `Modal`, etc. with Storybook + CI
- Portfolio migration: outline CTAs, roadmap/featured cards, case-study sections
- Tradeoffs: [`frontend-design-system-migration/docs/TRADEOFFS.md`](../../frontend-design-system-migration/docs/TRADEOFFS.md)

---

## Execution notes

- **Repo conventions:** Each project keeps its own README, verification scripts, and scoped commits. Open one repo folder at a time for focused work.
- Keep each **showcase** project in its own repo for clean storytelling.
- **POS** stays in `pos-inventory-system`; link it here for planning, not as portfolio project #6.
- Aim for **1 shipped MVP every 2-3 weeks** (showcase projects).
- For every shipped project, publish:
  - concise README
  - architecture snapshot
  - 3-5 screenshots or short walkthrough GIF
  - explicit "tradeoffs" section
