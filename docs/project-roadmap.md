# Portfolio project roadmap

Prioritized list of planned portfolio projects, with scope and delivery order.

## Current status snapshot

- **Shipped:** Portfolio CMS + Publishing Workflow
- **Planned:** 5 projects

---

## Priority order (what to build first)

1. **Frontend Design System Migration**
2. **Realtime Operations Dashboard**
3. **AI-Assisted Incident Triage UI**
4. **Developer Productivity Portal**
5. **Mobile Delivery Companion**

Rationale: this sequence maximizes visible portfolio quality first, then adds high-signal technical depth and platform breadth.

---

## Project details

## 1) Frontend Design System Migration (build first)

**Description**  
Migrate scattered UI patterns into reusable tokens and shared components, with visual regression checks.

**Why first**  
Improves overall portfolio polish quickly and makes all future projects easier to ship consistently.

**Suggested MVP**
- Design tokens (color, spacing, radius, typography)
- Core components: `Button`, `Input`, `Card`, `Badge`, `Modal`, `Table`
- One page migrated end-to-end using the shared system
- Basic visual regression checks

**Success criteria**
- At least one section/page fully migrated
- Reusable component primitives documented
- Screenshot/GIF proof for case study

---

## 2) Realtime Operations Dashboard

**Description**  
Build a realtime dashboard with websocket streams, alerting states, and resilient data synchronization.

**Why second**  
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

## 3) AI-Assisted Incident Triage UI

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

## 4) Developer Productivity Portal

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

## 5) Mobile Delivery Companion

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

## Portfolio CMS + Publishing Workflow

**Status:** Shipped  
**Repo:** [portfolio-content-management](https://github.com/jonas0224/portfolio-content-management)

What it demonstrates:
- CMS authoring with auth + role-aware actions
- Draft preview workflow
- PR-based publishing to portfolio repo

---

## Execution notes

- Keep each project in its own repo for clean storytelling.
- Aim for **1 shipped MVP every 2-3 weeks**.
- For every project, publish:
  - concise README
  - architecture snapshot
  - 3-5 screenshots or short walkthrough GIF
  - explicit “tradeoffs” section
