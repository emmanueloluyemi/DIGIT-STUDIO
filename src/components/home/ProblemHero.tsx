import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function ProblemHero() {
  return (
    <section className="pt-12 sm:pt-18 pb-16">
      <div className="site-container space-y-10">
        {/* Intro Question & Positioning */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--crimson)]">
            What do you need made?
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[var(--ink)]">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] reading-col pt-1">
            I help independent companies and founders turn promising concepts into polished brand identities, fast websites, AI video campaigns, and social media content.
          </p>
        </div>

        {/* Four Large Service Doors */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
          {siteConfig.doors.map((door) => (
            <Link
              key={door.title}
              href={door.href}
              className="group flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--ink)] hover:shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[var(--muted)]">
                  <span>{door.turnaround}</span>
                  <span className="text-[var(--crimson)] font-medium">{door.startingPrice}</span>
                </div>
                <h2 className="font-serif text-2xl font-normal text-[var(--ink)] group-hover:text-[var(--crimson)] transition-colors">
                  {door.title}
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {door.tagline}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--muted)] truncate max-w-[160px]">
                  Eg: {door.exampleLabel}
                </span>
                <span className="font-semibold text-[var(--crimson)] group-hover:translate-x-1 transition-transform">
                  Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
