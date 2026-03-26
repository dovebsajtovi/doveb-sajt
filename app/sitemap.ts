import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/content";
import { FAQ_PAGES } from "@/lib/faq-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", "/paketi", "/portfolio", "/blog", "/kontakt", "/zakazivanje"];
  const entries: MetadataRoute.Sitemap = staticRoutes.map((url) => ({
    url: `${SITE.url}${url}`,
    lastModified: now,
    changeFrequency: url === "/" ? "weekly" : "monthly",
    priority: url === "/" ? 1 : url === "/zakazivanje" ? 0.9 : 0.8,
  }));

  BLOG_POSTS.forEach((p) => {
    entries.push({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  FAQ_PAGES.forEach((p) => {
    entries.push({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return entries;
}

