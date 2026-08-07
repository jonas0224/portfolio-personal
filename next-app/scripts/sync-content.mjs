/**
 * One-way sync from repo root `content/` into this Next app:
 * - `content/site/*.json` → `src/content/site/`
 * - `content/posts/` → `content/posts/` + image assets → `public/posts-static/`
 *
 * Run from `next-app`: `npm run sync-content`
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const nextAppRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(nextAppRoot, '..')

function copySiteJson() {
  const srcDir = path.join(repoRoot, 'content', 'site')
  const destDir = path.join(nextAppRoot, 'src', 'content', 'site')

  if (!fs.existsSync(srcDir)) {
    console.warn(`sync-content: skip site JSON (missing ${srcDir})`)
    return
  }

  for (const name of fs.readdirSync(srcDir)) {
    if (!name.endsWith('.json')) {
      continue
    }
    fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name))
  }
  process.stdout.write('sync-content: site JSON ✓\n')
}

function syncPostsAndAssets() {
  const srcPosts = path.join(repoRoot, 'content', 'posts')
  const destPosts = path.join(nextAppRoot, 'content', 'posts')
  const destStatic = path.join(nextAppRoot, 'public', 'posts-static')

  if (!fs.existsSync(srcPosts)) {
    console.warn(`sync-content: skip posts (missing ${srcPosts})`)
    return
  }

  fs.rmSync(destPosts, { recursive: true, force: true })
  fs.cpSync(srcPosts, destPosts, { recursive: true })

  fs.rmSync(destStatic, { recursive: true, force: true })
  fs.mkdirSync(destStatic, { recursive: true })

  for (const ent of fs.readdirSync(destPosts, { withFileTypes: true })) {
    if (!ent.isDirectory()) {
      continue
    }
    const folder = ent.name
    const from = path.join(destPosts, folder)
    const to = path.join(destStatic, folder)
    fs.mkdirSync(to, { recursive: true })
    for (const file of fs.readdirSync(from)) {
      if (file === 'index.md') {
        continue
      }
      const fp = path.join(from, file)
      if (fs.statSync(fp).isFile()) {
        fs.copyFileSync(fp, path.join(to, file))
      }
    }
  }

  process.stdout.write('sync-content: posts + posts-static ✓\n')
}

copySiteJson()
syncPostsAndAssets()
