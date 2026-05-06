import Link from "next/link";
import type { Metadata } from "next";
import { SECTION_SHELL } from "@/components/sections/constants";
import { SITE_TITLE } from "@/lib/site";
import { getTagIndex } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags",
  description: `Browse Pensieve posts by tag — ${SITE_TITLE}`,
};

export default function PensieveTagsPage() {
  const tags = getTagIndex();

  return (
    <main className={SECTION_SHELL}>
      <header className="border-b border-slate-800 pb-10 pt-4 md:pt-6">
        <p className="font-mono text-xs text-emerald-400">
          <Link href="/pensieve" className="hover:text-emerald-400">
            Pensieve
          </Link>{" "}
          / tags
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Tags
        </h1>
      </header>

      <ul className="mt-10 flex flex-wrap gap-3">
        {tags.map(({ tag, param, count }) => (
          <li key={param}>
            <Link
              href={`/pensieve/tags/${param}`}
              className="inline-flex items-baseline gap-2 rounded-full border border-slate-700 px-4 py-2 font-mono text-sm text-slate-200 hover:border-emerald-400/40 hover:text-emerald-400"
            >
              <span>{tag}</span>
              <span className="text-xs text-slate-500">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
