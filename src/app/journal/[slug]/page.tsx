import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JOURNAL_POSTS } from "@/data/journal";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface JournalDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: JournalDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: {
      absolute: `${post.title} | Digit Studio Journal`,
    },
    description: post.excerpt,
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
  };
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { slug } = await params;
  const postIdx = JOURNAL_POSTS.findIndex((p) => p.slug === slug);
  if (postIdx === -1) {
    notFound();
  }

  const post = JOURNAL_POSTS[postIdx];
  const nextPost = JOURNAL_POSTS[(postIdx + 1) % JOURNAL_POSTS.length];

  return (
    <article className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      {/* Header */}
      <header className="container-editorial space-y-6 pb-12 sm:pb-16 border-b border-[var(--border-subtle)]">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
          <TransitionLink href="/journal" className="hover:text-[var(--text-primary)]">
            ← Back to Journal
          </TransitionLink>
          <span>·</span>
          <span className="text-[var(--accent)] font-semibold uppercase">{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1 max-w-5xl">
          {post.title}
        </HeadingReveal>

        <FadeUp trigger="enter" delay={0.2} className="max-w-3xl">
          <p className="text-lead text-[var(--text-secondary)]">
            {post.subtitle}
          </p>
        </FadeUp>

        <div className="flex items-center gap-4 pt-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] font-display text-sm font-bold text-[var(--accent-ink)]">
            EO
          </div>
          <div className="text-xs">
            <p className="font-semibold text-[var(--text-primary)]">Emmanuel Oluyemi</p>
            <p className="text-[var(--text-muted)]">Founder &amp; Creative Technologist</p>
          </div>
        </div>
      </header>

      {/* Main Body Content */}
      <div className="container-editorial py-12 sm:py-16 max-w-4xl space-y-12">
        {post.sections.map((section, idx) => (
          <section key={idx} className="space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {section.heading}
            </h2>

            {section.body.map((p, pIdx) => (
              <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                {p}
              </p>
            ))}

            {section.codeSnippet ? (
              <div className="my-6 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-6 font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                <div className="mb-3 flex items-center justify-between text-[11px] text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-subtle)] pb-2">
                  <span>{section.codeSnippet.language}</span>
                  <span>Snippet</span>
                </div>
                <pre className="overflow-x-auto whitespace-pre font-mono leading-relaxed">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            ) : null}
          </section>
        ))}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-[var(--border-subtle)]">
          <span className="font-mono text-xs text-[var(--text-muted)] mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 font-mono text-xs text-[var(--text-secondary)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Next Article CTA */}
      <footer className="container-editorial pt-10">
        <div className="flex flex-col gap-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="space-y-2 max-w-xl">
            <p className="text-eyebrow">Next Article</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              {nextPost.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {nextPost.subtitle}
            </p>
          </div>
          <MagneticButton href={`/journal/${nextPost.slug}`} variant="primary" size="lg">
            Read Next ↗
          </MagneticButton>
        </div>
      </footer>
    </article>
  );
}
