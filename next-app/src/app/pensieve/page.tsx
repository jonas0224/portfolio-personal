import Link from "next/link";
import type { Metadata } from "next";
import { SECTION_SHELL } from "@/components/sections/constants";
import { SITE_TITLE } from "@/lib/site";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Pensieve",
  description: `Writing and notes — ${SITE_TITLE}`,
};

export default function PensieveIndexPage() {
  const posts = getPublishedPosts();

  return (
    <main className={SECTION_SHELL}>
      <header className="border-b border-slate-800 pb-10 pt-4 md:pt-6">
        <p className="font-mono text-xs text-emerald-400">/ pensieve</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Pensieve
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Thoughts on engineering, tooling, and things I have learned along the
          way.
        </p>
        <p className="mt-6 font-mono text-xs">
          <Link
            href="/pensieve/tags"
            className="text-sky-400 underline decoration-sky-400/30 underline-offset-4 hover:text-sky-300"
          >
            Browse by tag
          </Link>
        </p>
      </header>

      <ul className="divide-y divide-slate-800">
        {posts.map((post) => (
          <li key={post.slugSegment}>
            <Link
              href={`/pensieve/${post.slugSegment}`}
              className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 md:text-xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">
                  {post.description}
                </p>
              </div>
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs text-slate-500"
              >
                {post.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
