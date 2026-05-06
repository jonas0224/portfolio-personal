# portfolio-personal

Personal portfolio built with **Next.js** (`next-app`). Legacy **Gatsby** code has been removed.

## Prerequisites

- Node.js **>= 18.17** (see `.nvmrc`)

## Setup

```sh
npm install
cd next-app && npm install
```

## Content sync

Site copy is maintained under `content/` at the repo root. To push that into the Next app (JSON + Pensieve posts and images):

```sh
npm run sync-content
```

## Scripts (run from repo root)

| Command            | Description                |
| ------------------ | -------------------------- |
| `npm run dev`      | Next.js dev server         |
| `npm run build`    | Production build           |
| `npm run start`    | Start production server    |
| `npm run lint`     | ESLint in `next-app`       |
| `npm run format`   | Prettier (repo-wide)       |
| `npm run sync-content` | Sync `content/` → `next-app` |

See `next-app/README.md` for app-specific details.

## Deploy

`netlify.toml` builds from the **`next-app`** base directory and runs **`sync-content`** before **`build`** so deploys track root `content/`.
