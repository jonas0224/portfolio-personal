# CMS publishing contract (portfolio side)

The portfolio site does **not** pull content from the CMS at runtime. Published CMS changes land in this repo as JSON under `content/site/`, then `npm run sync-content` copies them into `next-app/src/content/site/` before build.

## Canonical contract

The authoritative slug → file mapping and publish behavior live in the CMS repo:

**`portfolio-content-management/docs/publishing-contract.md`**

| CMS slug            | Portfolio file                        |
| ------------------- | ------------------------------------- |
| `hero`              | `content/site/hero.json`              |
| `about`             | `content/site/about.json`             |
| `jobs`              | `content/site/jobs.json`              |
| `featured-projects` | `content/site/featured-projects.json` |
| `projects`          | `content/site/projects.json`          |
| `contact`           | `content/site/contact.json`           |

`writing.json` is edited in this repo only until a CMS slug is added.

## Portfolio expectations after publish

1. CMS opens a PR against `portfolio-personal` updating the target JSON file(s).
2. CI runs `verify-content`, lint, typecheck, and build.
3. Zod schemas in `next-app/src/lib/content-schemas.ts` must pass (see `src/lib/content-schemas.test.ts`).
4. Merge PR, then Netlify deploy runs `sync-content` + `build`.

## Known gap (CMS repo)

Hero CMS draft fields (`headline`, `subheadline`, …) do not match every key in production `hero.json` (`eyebrow`, `proofChips`, …). Field mapping is owned by `portfolio-content-management` (`content-mapper.ts`). This portfolio repo only validates the **production** JSON shape.

## Local workflow without CMS

```sh
# Edit JSON at repo root
vim content/site/hero.json
npm run sync-content
npm run verify-content
```
