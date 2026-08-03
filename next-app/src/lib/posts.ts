import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  draft: boolean;
  slug: string;
  tags: string[];
};

export type Post = PostFrontmatter & {
  /** URL segment after `/pensieve/` (from frontmatter `slug`). */
  slugSegment: string;
  /** Folder name under `content/posts` (used for static assets). */
  directory: string;
  content: string;
};

function slugSegmentFromPath(slugPath: string): string {
  const trimmed = slugPath.replace(/^\/+|\/+$/g, '');
  const prefix = 'pensieve/';
  if (trimmed.startsWith(prefix)) {
    return trimmed.slice(prefix.length);
  }
  return trimmed;
}

function readPostDirectory(dirName: string): Post | null {
  const mdPath = path.join(POSTS_DIR, dirName, 'index.md');
  if (!fs.existsSync(mdPath)) {
    return null;
  }
  const raw = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(raw);
  const slugPath = String(data.slug ?? `/pensieve/${dirName}`);
  return {
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    draft: Boolean(data.draft),
    slug: slugPath,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    slugSegment: slugSegmentFromPath(slugPath),
    directory: dirName,
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }
  const dirs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  const posts: Post[] = [];
  for (const dir of dirs) {
    const post = readPostDirectory(dir);
    if (post) {
      posts.push(post);
    }
  }

  return posts.sort((a, b) => {
    const tb = Date.parse(b.date);
    const ta = Date.parse(a.date);
    if (Number.isNaN(tb) || Number.isNaN(ta)) {
      return String(b.date).localeCompare(String(a.date));
    }
    return tb - ta;
  });
}

export function getPublishedPosts(): Post[] {
  return getAllPosts().filter((p) => !p.draft);
}

export function getPostBySlugSegment(segment: string): Post | undefined {
  return getPublishedPosts().find((p) => p.slugSegment === segment);
}

export function tagToParam(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export type TagIndexEntry = { tag: string; param: string; count: number };

export function getTagIndex(): TagIndexEntry[] {
  const counts = new Map<string, number>();
  for (const post of getPublishedPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, param: tagToParam(tag), count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getPostsByTagParam(tagParam: string): Post[] {
  return getPublishedPosts().filter((p) =>
    p.tags.some((t) => tagToParam(t) === tagParam)
  );
}
