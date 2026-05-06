import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SECTION_SHELL } from "@/components/sections/constants";
import { SITE_TITLE } from "@/lib/site";
import {
  getPostsByTagParam,
  getTagIndex,
  tagToParam,
} from "@/lib/posts";

type PageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getTagIndex().map(({ param }) => ({ tag: param }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTagParam(tag);
  const label =
    posts[0]?.tags.find((t) => tagToParam(t) === tag) ??
    tag.replace(/-/g, " ");

  if (posts.length === 0) {
    return { title: "Tag not found" };
  }

  return {
    title: `Tag: ${label}`,
    description: `${posts.length} post${posts.length === 1 ? "" : "s"} tagged “${label}” — ${SITE_TITLE}`,
  };
}

export default async function PensieveTagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTagParam(tag);

  if (posts.length === 0) {
    notFound();
  }

  const label =
    posts[0].tags.find((t) => tagToParam(t) === tag) ??
    tag.replace(/-/g, " ");

  return (
    <main className={SECTION_SHELL}>
      <header className="border-b border-slate-800 pb-10 pt-4 md:pt-6">
        <p className="font-mono text-xs text-emerald-400">
          <Link href="/pensieve" className="hover:text-emerald-400">
            Pensieve
          </Link>{" "}
          /{" "}
          <Link href="/pensieve/tags" className="hover:text-emerald-400">
            tags
          </Link>{" "}
          /{" "}
          <span className="text-slate-400">{label}</span>
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          {label}
        </h1>
        <p className="mt-3 font-mono text-xs text-slate-500">
          {posts.length} post{posts.length === 1 ? "" : "s"}
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
