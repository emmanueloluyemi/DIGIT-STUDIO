import type { Metadata } from "next";
import { JOURNAL_POSTS } from "@/data/journal";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";

export const metadata: Metadata = {
  title: {
    absolute: "Journal · Creative Technology & Engineering Notes | Digit Studio",
  },
  description:
    "Engineering notes, WebGL experiments, design systems, and behind-the-scenes craft notes from Digit Studio founder Emmanuel Oluyemi.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalPage() {
  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      <section className="container-editorial space-y-8 pb-14 sm:pb-18">
        <div className="space-y-4 max-w-4xl">
          <p className="text-eyebrow">Studio Notes · Creative Technology &amp; Craft</p>
          <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1">
            Thoughts on code, craft &amp; digital performance.
          </HeadingReveal>
        </div>
        <FadeUp trigger="enter" delay={0.2} className="max-w-2xl">
          <p className="text-lead text-[var(--text-secondary)]">
            Technical writeups, architectural decisions, WebGL optimizations, and behind-the-scenes insights from the Digit Studio workshop.
          </p>
        </FadeUp>
      </section>

      <section className="container-editorial border-t border-[var(--border-subtle)] pt-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10 transition-all hover:border-[var(--border-strong)] hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 uppercase tracking-wider text-[var(--accent)] font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                  <TransitionLink href={`/journal/${post.slug}`}>
                    {post.title}
                  </TransitionLink>
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[var(--border-subtle)] pt-5">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {post.date}
                </span>
                <TransitionLink
                  href={`/journal/${post.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                >
                  <span>Read Article</span>
                  <span aria-hidden="true">→</span>
                </TransitionLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
