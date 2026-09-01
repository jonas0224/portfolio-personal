# Next.js portfolio app

Production site for [jonasyambao.com](https://jonasyambao.com), built with Next.js App Router, Tailwind CSS v4, and TypeScript.

## Prerequisites

- Node.js **>= 20 < 23** (see repo root `.nvmrc`)

## Setup

```sh
npm install
cp .env.example .env.local   # optional overrides
```

## Content

Canonical JSON lives in the repo root at `../content/site/`. Sync into this app before build:

```sh
npm run sync-content
npm run verify-content
```

Edit `content/site/*.json` at the repo root, then sync. Netlify runs sync automatically before build.

## Scripts

| Command                  | Description                        |
| ------------------------ | ---------------------------------- |
| `npm run dev`            | Development server                 |
| `npm run build`          | Production build                   |
| `npm run start`          | Start production server            |
| `npm run lint`           | ESLint                             |
| `npm run typecheck`      | TypeScript check                   |
| `npm run test`           | Vitest (content schema tests)      |
| `npm run sync-content`   | Copy root `content/` into this app |
| `npm run verify-content` | Fail if synced JSON is stale       |

## Routes

| Route              | Purpose                                               |
| ------------------ | ----------------------------------------------------- |
| `/`                | Home — story, experience, work, notes teaser, contact |
| `/writing`         | Notes                                                 |
| `/projects/[slug]` | Case studies from `featured-projects.json`            |
| `/pensieve`        | Legacy redirect → `/writing`                          |

## Deploy

Hosted on Netlify via repo root `netlify.toml` (`base = next-app`).

See also `../docs/audit-tracker.md`, `../docs/architecture.md`, and `../docs/upgrade-checklist.md`.
