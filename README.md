# portfolio-personal

Personal portfolio built with **Next.js** (`next-app`). Legacy **Gatsby** code has been removed.

## Prerequisites

- Node.js **>= 20 < 23** (see `.nvmrc`)

## Setup

```sh
npm install
cd next-app && npm install
```

## Content sync

Site copy is maintained under `content/` at the repo root. Sync JSON into the Next app:

```sh
npm run sync-content
npm run verify-content
```

**Canonical source:** `content/site/*.json` → `next-app/src/content/site/`

Legacy markdown, archived posts, and unused JSON live in `content/_archive/`.

## Scripts (run from repo root)

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `npm run dev`            | Next.js dev server              |
| `npm run build`          | Sync content + production build |
| `npm run start`          | Start production server         |
| `npm run lint`           | ESLint in `next-app`            |
| `npm run typecheck`      | TypeScript in `next-app`        |
| `npm run verify-content` | Check JSON sync is current      |
| `npm run format`         | Prettier (repo-wide)            |
| `npm run sync-content`   | Sync `content/` → `next-app`    |

See `next-app/README.md` for app-specific details.

## Docs

| Doc                         | Purpose                             |
| --------------------------- | ----------------------------------- |
| `docs/audit-tracker.md`     | Site audit findings and fix tracker |
| `docs/architecture.md`      | App structure and content flow      |
| `docs/cms-publishing.md`    | CMS → portfolio JSON contract       |
| `docs/project-roadmap.md`   | Portfolio + product roadmap         |
| `docs/upgrade-checklist.md` | Stack and sync notes                |

## Deploy

`netlify.toml` builds from the **`next-app`** base directory and runs **`sync-content`** before **`build`**.
