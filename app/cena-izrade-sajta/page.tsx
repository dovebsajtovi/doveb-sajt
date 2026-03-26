import type { Metadata } from "next";
import { FaqArticle } from "@/components/site/FaqArticle";
import { buildFaqMetadata, getFaqByPath } from "@/lib/faq-utils";

const path = "/cena-izrade-sajta";
const page = getFaqByPath(path);

export const metadata: Metadata = buildFaqMetadata(path);

export default function CenaIzradeSajtaPage() {
  return <FaqArticle page={page} />;
}

