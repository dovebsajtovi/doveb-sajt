import type { Metadata } from "next";
import { FAQ_PAGES } from "@/lib/faq-content";

export function getFaqByPath(path: string) {
  const page = FAQ_PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`FAQ page not found: ${path}`);
  return page;
}

export function buildFaqMetadata(path: string): Metadata {
  const page = getFaqByPath(path);
  return {
    title: page.title,
    description: page.description,
    keywords: [
      "izrada sajtova",
      "web dizajn",
      "SEO optimizacija",
      "cena sajta",
      "Google Ads",
      "AI chatbot",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: `${page.title} — DOVEB`,
      description: page.description,
      url: path,
    },
  };
}

