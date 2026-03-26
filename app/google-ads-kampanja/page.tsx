import type { Metadata } from "next";
import { FaqArticle } from "@/components/site/FaqArticle";
import { buildFaqMetadata, getFaqByPath } from "@/lib/faq-utils";

const path = "/google-ads-kampanja";
const page = getFaqByPath(path);

export const metadata: Metadata = buildFaqMetadata(path);

export default function GoogleAdsKampanjaPage() {
  return <FaqArticle page={page} />;
}

