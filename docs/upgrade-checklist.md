# Site stack

The production site lives in **`next-app`** (Next.js App Router, Tailwind CSS v4, TypeScript).

## Canonical content

Edit JSON at the repo root, then sync into the app:

- `content/site/*.json` → `next-app/src/content/site/` via `npm run sync-content`

Archived markdown and posts live in `content/_archive/`.

```sh
npm run verify-content
```

Root `npm run build` runs sync automatically. Netlify does the same in `netlify.toml`.

## Local development

From the repo root:

```sh
npm install
cd next-app && npm install
npm run dev
```

## Quality checks

```sh
npm run verify-content
npm run lint
npm run typecheck
npm run test
npm run build
```

CI runs these on push/PR (`.github/workflows/ci.yml`).

## Audit tracker

See `docs/audit-tracker.md` for open site health items.
