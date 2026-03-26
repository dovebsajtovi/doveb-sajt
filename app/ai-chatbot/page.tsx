import type { Metadata } from "next";
import { FaqArticle } from "@/components/site/FaqArticle";
import { buildFaqMetadata, getFaqByPath } from "@/lib/faq-utils";

const path = "/ai-chatbot";
const page = getFaqByPath(path);

export const metadata: Metadata = buildFaqMetadata(path);

export default function AiChatbotPage() {
  return <FaqArticle page={page} />;
}

