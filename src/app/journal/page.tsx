import type { Metadata } from "next";
import Link from "next/link";
import { journalArticles } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal — Notes for Business Owners & Founders | Digit Studio",
  description:
    "Honest guides on brand identity essentials, realistic website pricing, AI video applications, and manageable content planning.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalIndexPage() {
  return (
    <div className="py-12 sm:py-18">
      <div className="site-container space-y-12">
        <div className="space-y-4 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Studio Journal
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Notes on craft, pricing &amp; digital reality.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] reading-col">
            No agency buzzwords. Just practical notes written for clients and business owners evaluating design, websites, and video.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 border-t-2 border-[var(--ink)] pt-8">
          {journalArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8 space-y-4 hover:border-[var(--ink)] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span className="font-semibold text-[var(--crimson)]">{article.topic}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
                  <Link href={`/journal/${article.slug}`} className="hover:text-[var(--crimson)] transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--muted)]">{article.date}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="font-semibold text-[var(--crimson)] hover:underline"
                >
                  Read note →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
