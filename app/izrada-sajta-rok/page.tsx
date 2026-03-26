import type { Metadata } from "next";
import { FaqArticle } from "@/components/site/FaqArticle";
import { buildFaqMetadata, getFaqByPath } from "@/lib/faq-utils";

const path = "/izrada-sajta-rok";
const page = getFaqByPath(path);

export const metadata: Metadata = buildFaqMetadata(path);

export default function IzradaSajtaRokPage() {
  return <FaqArticle page={page} />;
}

