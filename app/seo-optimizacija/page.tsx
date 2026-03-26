import type { Metadata } from "next";
import { FaqArticle } from "@/components/site/FaqArticle";
import { buildFaqMetadata, getFaqByPath } from "@/lib/faq-utils";

const path = "/seo-optimizacija";
const page = getFaqByPath(path);

export const metadata: Metadata = buildFaqMetadata(path);

export default function SeoOptimizacijaPage() {
  return <FaqArticle page={page} />;
}

