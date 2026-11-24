import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Digit Studio`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIdx = caseStudies.findIndex((p) => p.slug === slug);
  if (currentIdx === -1) notFound();

  const project = caseStudies[currentIdx];
  const nextProject = caseStudies[(currentIdx + 1) % caseStudies.length];

  return (
    <article className="py-12 sm:py-18">
      <div className="site-container space-y-12 max-w-4xl">
        {/* Header Breadcrumb */}
        <div className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/work" className="underline hover:text-[var(--ink)]">
              ← Back to Work
            </Link>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span className="font-semibold text-[var(--crimson)]">{project.clientLabel}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] reading-col">
            {project.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-6 text-xs text-[var(--muted)]">
            <span>Sector: <strong className="text-[var(--ink)] font-medium">{project.sector}</strong></span>
            <span>Timeline: <strong className="text-[var(--ink)] font-medium">{project.timeline}</strong></span>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-10 text-base sm:text-lg leading-relaxed text-[var(--ink)] reading-col">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              Context
            </h2>
            <p className="text-[var(--muted)]">
              {project.context}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              The problem
            </h2>
            <p className="text-[var(--muted)]">
              {project.problem}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              The approach
            </h2>
            <p className="text-[var(--muted)]">
              {project.approach}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              The result
            </h2>
            <p className="text-[var(--muted)]">
              {project.result}
            </p>
          </section>

          {/* Key Outcomes Box */}
          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 space-y-3">
            <h3 className="font-serif text-xl font-normal text-[var(--ink)]">
              Key outcomes
            </h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {project.keyOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--crimson)] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-xl font-normal text-[var(--ink)]">
              Deliverables provided
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--muted)]">
              {project.deliverables.map((item) => (
                <li key={item} className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Project Link */}
        <div className="border-t-2 border-[var(--ink)] pt-8 flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
          >
            ← All case studies
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-xs font-semibold text-[var(--crimson)] underline decoration-1 underline-offset-4 hover:text-[var(--crimson-hover)]"
          >
            Next: {nextProject.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
