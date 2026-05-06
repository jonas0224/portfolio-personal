# Site stack

The production site lives in **`next-app`** (Next.js App Router, Tailwind CSS v4, TypeScript).

Canonical editable content for sync:

- `content/site/*.json` — homepage sections (copied into `next-app/src/content/site/` by `npm run sync-content`).
- `content/posts/` — Pensieve markdown + assets (synced into `next-app/content/posts/` and `next-app/public/posts-static/`).

From the repo root:

```sh
npm install          # root: husky, prettier, lint-staged (once)
cd next-app && npm install
npm run dev          # from root: starts next-app dev server
npm run sync-content # from root: refresh next-app copies from content/
npm run build        # from root: production build
```

The previous Gatsby-focused upgrade checklist is obsolete and was removed when the site moved to Next.js.
