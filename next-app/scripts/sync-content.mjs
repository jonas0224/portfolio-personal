/**
 * One-way sync from repo root `content/` into this Next app:
 * - `content/site/*.json` → `src/content/site/`
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

copySiteJson()
