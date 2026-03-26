import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} — DOVEB`,
      description: post.description,
      url: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-white/60">
              BLOG
            </div>
            <h1 className="h1 mt-3 text-white/95">{post.title}</h1>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              {post.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary focus-ring w-full sm:w-auto" href="/zakazivanje">
                Pišite nam
              </Link>
              <Link className="btn btn-secondary focus-ring w-full sm:w-auto" href="/blog">
                Nazad na blog
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <Card className="lg:col-span-8 p-6 sm:p-8">
              <article className="prose-premium space-y-8">
                {post.sections.map((s) => (
                  <section key={s.heading}>
                    <h2 className="h2 text-white/95">{s.heading}</h2>
                    <div className="mt-3 space-y-4">
                      {s.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    {s.bullets?.length ? (
                      <ul className="mt-4 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </article>
            </Card>

            <Card className="lg:col-span-4 p-6 sm:p-7 h-fit">
              <div className="text-sm font-semibold tracking-tight text-white/90">
                Sledeći korak
              </div>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Ako želite premium sajt i jasnu ponudu paketa, pošaljite nam upit — preporučićemo
                najbolju opciju za vaš biznis.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link className="btn btn-primary focus-ring w-full" href="/paketi">
                  Pogledaj pakete
                </Link>
                <Link className="btn btn-secondary focus-ring w-full" href="/kontakt">
                  Kontakt
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

