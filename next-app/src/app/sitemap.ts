import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedPosts, getTagIndex } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pensieve`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/pensieve/tags`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  for (const post of getPublishedPosts()) {
    entries.push({
      url: `${base}/pensieve/${post.slugSegment}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  for (const { param } of getTagIndex()) {
    entries.push({
      url: `${base}/pensieve/tags/${param}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return entries;
}
