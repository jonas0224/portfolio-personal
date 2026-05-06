import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/markdown-body";
import { SECTION_SHELL } from "@/components/sections/constants";
import { SITE_TITLE } from "@/lib/site";
import {
  getPostBySlugSegment,
  getPublishedPosts,
  tagToParam,
} from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slugSegment }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugSegment(slug);
  if (!post) {
    return { title: "Not found" };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PensievePostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlugSegment(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className={`${SECTION_SHELL} max-w-3xl pb-24`}>
      <nav className="font-mono text-xs text-slate-500">
        <Link href="/pensieve" className="hover:text-emerald-400">
          Pensieve
        </Link>
        <span className="mx-2 text-slate-600">/</span>
        <span className="text-slate-400">{post.slugSegment}</span>
      </nav>

      <header className="mt-8 border-b border-slate-800 pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-slate-400">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-slate-500">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags.length > 0 ? (
            <span className="hidden text-slate-600 sm:inline">·</span>
          ) : null}
          <ul className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/pensieve/tags/${tagToParam(tag)}`}
                  className="rounded-full border border-slate-700 px-2 py-0.5 text-slate-400 hover:border-emerald-400/40 hover:text-emerald-400"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <MarkdownBody content={post.content} assetDirectory={post.directory} />

      <footer className="mt-16 border-t border-slate-800 pt-10 font-mono text-xs text-slate-500">
        <Link href="/pensieve" className="text-sky-400 hover:text-sky-300">
          ← All posts
        </Link>
        <span className="mx-3 text-slate-700">·</span>
        <Link href="/" className="hover:text-emerald-400">
          {SITE_TITLE}
        </Link>
      </footer>
    </article>
  );
}
