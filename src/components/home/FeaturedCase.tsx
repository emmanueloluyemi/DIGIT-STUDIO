import React from "react";
import Link from "next/link";
import { caseStudies } from "@/content/projects";

export function FeaturedCase() {
  const project = caseStudies[1]; // Ardent Advisory

  return (
    <section className="py-16 border-t-2 border-[var(--ink)]">
      <div className="site-container space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Featured studio work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)] mt-1">
              {project.title}
            </h2>
          </div>
          <span className="text-xs font-medium text-[var(--crimson)]">
            {project.clientLabel} · {project.category}
          </span>
        </div>

        {/* Large Case Study Card */}
        <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  The problem
                </p>
                <p className="text-base sm:text-lg text-[var(--ink)] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  What was done
                </p>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  The result
                </p>
                <p className="text-sm sm:text-base font-medium text-[var(--ink)] leading-relaxed">
                  {project.result}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--crimson)] underline decoration-2 underline-offset-4 hover:text-[var(--crimson-hover)]"
                >
                  Read complete case breakdown →
                </Link>
              </div>
            </div>

            {/* Right Plain Browser Frame */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] p-6 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)]/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)]/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)]/30" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--muted)]">
                    ardent-advisory.com
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="font-serif text-xl font-normal text-[var(--ink)]">
                    Measurable outcomes
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--muted)]">
                    {project.keyOutcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="text-[var(--crimson)] font-bold">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--muted)]">
                Timeline: {project.timeline} · Fixed quote delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
