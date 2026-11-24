import React from "react";
import Link from "next/link";
import { journalArticles } from "@/content/journal";

export function RecentNotes() {
  const posts = journalArticles.slice(0, 2);

  return (
    <section className="py-16 border-t-2 border-[var(--ink)]">
      <div className="site-container space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              From the journal
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)]">
              Practical notes for clients &amp; founders.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-xs font-semibold text-[var(--crimson)] underline decoration-1 underline-offset-4 hover:text-[var(--crimson-hover)]"
          >
            Read all journal articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8 space-y-4 hover:border-[var(--ink)] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span className="font-medium text-[var(--crimson)]">{post.topic}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[var(--ink)]">
                  <Link href={`/journal/${post.slug}`} className="hover:text-[var(--crimson)] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--muted)]">{post.date}</span>
                <Link
                  href={`/journal/${post.slug}`}
                  className="font-semibold text-[var(--crimson)] hover:underline"
                >
                  Read note →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
