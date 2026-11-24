import React from "react";
import { siteConfig } from "@/content/site";

export function ProofBand() {
  return (
    <section className="py-14 border-t-2 border-[var(--ink)]">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Verified client track record
            </p>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-serif text-3xl font-medium text-[var(--crimson)]">
                {siteConfig.upworkStats.jobSuccess} Job Success
              </span>
              <span className="text-sm font-medium text-[var(--ink)]">
                · {siteConfig.upworkStats.rating} rating
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] pt-1">
              {siteConfig.upworkStats.note}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={siteConfig.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--paper)] px-4 py-2.5 text-xs font-semibold text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
            >
              View Upwork profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
