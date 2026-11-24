import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work — Studio Projects & Client Case Studies",
  description:
    "Selected brand identities, responsive websites, and AI video campaigns designed and built by Digit Studio.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="py-12 sm:py-18">
      <div className="site-container space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Selected work
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Case studies &amp; studio projects.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] reading-col">
            A selection of brand identities, high-speed websites, and AI video productions. Every project is shown with the specific problem, approach, and measurable result.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12 border-t-2 border-[var(--ink)] pt-8">
          {caseStudies.map((project, idx) => (
            <article
              key={project.slug}
              className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-10 lg:p-12 space-y-6 hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--muted)]">0{idx + 1}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--ink)]">
                    <Link href={`/work/${project.slug}`} className="hover:text-[var(--crimson)] transition-colors">
                      {project.title}
                    </Link>
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-[var(--radius)] border border-[var(--border-subtle)] px-2 py-0.5 text-[var(--muted)]">
                    {project.sector}
                  </span>
                  <span className="font-semibold text-[var(--crimson)]">
                    {project.clientLabel}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
                  <p className="text-[var(--ink)] font-medium">
                    {project.subtitle}
                  </p>
                  <p>
                    <strong className="text-[var(--ink)] font-semibold">The problem:</strong> {project.problem}
                  </p>
                  <p>
                    <strong className="text-[var(--ink)] font-semibold">The result:</strong> {project.result}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between border-t border-[var(--border-subtle)] pt-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 space-y-4">
                  <div className="space-y-2 text-xs">
                    <p className="font-semibold uppercase tracking-wider text-[var(--ink)]">Deliverables</p>
                    <ul className="space-y-1 text-[var(--muted)]">
                      {project.deliverables.map((d) => (
                        <li key={d}>· {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--crimson)] underline decoration-1 underline-offset-4 hover:text-[var(--crimson-hover)]"
                    >
                      Read full breakdown →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
