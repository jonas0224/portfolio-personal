/**
 * Fails when root `content/site/*.json` is out of sync with `src/content/site/`.
 * Run after editing canonical content and before commit.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const nextAppRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(nextAppRoot, '..')
const srcDir = path.join(repoRoot, 'content', 'site')
const destDir = path.join(nextAppRoot, 'src', 'content', 'site')

if (!fs.existsSync(srcDir)) {
  console.error(`verify-content: missing ${srcDir}`)
  process.exit(1)
}

let failed = false

for (const name of fs.readdirSync(srcDir)) {
  if (!name.endsWith('.json')) {
    continue
  }

  const from = path.join(srcDir, name)
  const to = path.join(destDir, name)

  if (!fs.existsSync(to)) {
    console.error(`verify-content: missing synced copy ${to}`)
    failed = true
    continue
  }

  const a = fs.readFileSync(from)
  const b = fs.readFileSync(to)
  if (!a.equals(b)) {
    console.error(`verify-content: out of sync — run npm run sync-content (${name})`)
    failed = true
  }
}

if (failed) {
  process.exit(1)
}

process.stdout.write('verify-content: site JSON in sync ✓\n')
