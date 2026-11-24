import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { journalArticles } from "@/content/journal";
import { siteConfig } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Note Not Found" };

  return {
    title: `${article.title} — Journal | Digit Studio`,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const currentIdx = journalArticles.findIndex((a) => a.slug === slug);
  if (currentIdx === -1) notFound();

  const article = journalArticles[currentIdx];
  const nextArticle = journalArticles[(currentIdx + 1) % journalArticles.length];

  return (
    <article className="py-12 sm:py-18">
      <div className="site-container space-y-12 max-w-3xl">
        {/* Header Breadcrumb */}
        <div className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/journal" className="underline hover:text-[var(--ink)]">
              ← Back to Journal
            </Link>
            <span>·</span>
            <span>{article.topic}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
            {article.subtitle}
          </p>

          <p className="text-xs text-[var(--muted)] pt-1">
            Written by {siteConfig.founder}
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--ink)] reading-col">
          {article.bodyParagraphs.map((para, i) => (
            <p key={i}>
              {para}
            </p>
          ))}

          {/* Key Takeaways Box */}
          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 space-y-3 mt-8">
            <p className="font-serif text-xl font-normal text-[var(--ink)]">
              Key takeaways
            </p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {article.takeaways.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--crimson)] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Note Link */}
        <div className="border-t-2 border-[var(--ink)] pt-8 flex items-center justify-between">
          <Link
            href="/journal"
            className="text-xs font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
          >
            ← All notes
          </Link>
          <Link
            href={`/journal/${nextArticle.slug}`}
            className="text-xs font-semibold text-[var(--crimson)] underline decoration-1 underline-offset-4 hover:text-[var(--crimson-hover)]"
          >
            Next: {nextArticle.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
