"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS, type ProjectItem } from "@/data/projects";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";

export function SelectedWorkSection() {
  const featured = PROJECTS.slice(0, 5);
  const heroProject = featured[0]; // Kinetik Pay
  const duoLeft = featured[1];     // Vespera Atelier
  const duoRight = featured[2];    // Aether Robotics
  const bannerProject = featured[3]; // NexaFlow Growth
  const spotlightProject = featured[4]; // Sora Editorial

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="relative hairline-t overflow-hidden section-pad bg-[var(--bg-primary)]"
    >
      <div className="container-editorial relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[var(--border-subtle)] pb-10">
          <div className="space-y-4 max-w-3xl">
            <p className="text-eyebrow">03 · Selected Work</p>
            <HeadingReveal as="h2" id="selected-work-heading" className="text-h2">
              Featured projects &amp; studio explorations
            </HeadingReveal>
          </div>

          <FadeUp className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] lg:text-right">
              Carefully crafted digital platforms, brand identities, and AI media. Conceptual projects are clearly marked; confidential client engagements remain protected.
            </p>
            <TransitionLink
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              <span>View full archive ({PROJECTS.length})</span>
              <span aria-hidden="true">→</span>
            </TransitionLink>
          </FadeUp>
        </div>

        {/* Varied Editorial Composition 1: Hero Large Featured Project */}
        {heroProject && (
          <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-10 transition-all duration-300 hover:border-[var(--accent)]/60 shadow-[var(--shadow-sm)]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">
                    {heroProject.index}
                  </span>
                  <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                    {heroProject.category}
                  </span>
                  {heroProject.isConcept && (
                    <span className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                      Studio Concept
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-[var(--text-primary)]">
                    {heroProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {heroProject.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {heroProject.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-[var(--text-muted)] rounded bg-[var(--bg-surface)] px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <TransitionLink
                    href={`/work/${heroProject.slug}`}
                    className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] text-white hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    <span>View Case Study</span>
                    <span aria-hidden="true">→</span>
                  </TransitionLink>
                </div>
              </div>

              <div className="lg:col-span-7">
                <TransitionLink
                  href={`/work/${heroProject.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
                >
                  <Image
                    src={heroProject.posterImage}
                    alt={heroProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </TransitionLink>
              </div>
            </div>
          </div>
        )}

        {/* Varied Editorial Composition 2: Asymmetric Two-Column Duo */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Branding Showcase */}
          {duoLeft && (
            <div className="lg:col-span-6 group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[var(--accent)]/50 transition-all duration-300">
              <TransitionLink
                href={`/work/${duoLeft.slug}`}
                className="block relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
              >
                <Image
                  src={duoLeft.posterImage}
                  alt={duoLeft.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </TransitionLink>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">{duoLeft.index}</span>
                  <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                    {duoLeft.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">Studio Concept</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {duoLeft.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {duoLeft.tagline}
                </p>

                <div className="pt-2">
                  <TransitionLink
                    href={`/work/${duoLeft.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <span>Read Exploration</span>
                    <span aria-hidden="true">→</span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: AI Video Showcase */}
          {duoRight && (
            <div className="lg:col-span-6 group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[var(--accent)]/50 transition-all duration-300">
              <TransitionLink
                href={`/work/${duoRight.slug}`}
                className="block relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
              >
                <Image
                  src={duoRight.posterImage}
                  alt={duoRight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </TransitionLink>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">{duoRight.index}</span>
                  <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                    {duoRight.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">Studio Concept</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {duoRight.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {duoRight.tagline}
                </p>

                <div className="pt-2">
                  <TransitionLink
                    href={`/work/${duoRight.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <span>Read Exploration</span>
                    <span aria-hidden="true">→</span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Varied Editorial Composition 3: Full-Width Marketing & Content Banner */}
        {bannerProject && (
          <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-10 transition-all duration-300 hover:border-[var(--accent)]/50">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <TransitionLink
                  href={`/work/${bannerProject.slug}`}
                  className="block relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
                >
                  <Image
                    src={bannerProject.posterImage}
                    alt={bannerProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </TransitionLink>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">{bannerProject.index}</span>
                  <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                    {bannerProject.category}
                  </span>
                  <span className="font-mono text-[11px] uppercase text-[var(--text-muted)]">Studio Concept</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {bannerProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {bannerProject.tagline}
                </p>

                <div className="pt-2">
                  <TransitionLink
                    href={`/work/${bannerProject.slug}`}
                    className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] text-white hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    <span>View Case Study</span>
                    <span aria-hidden="true">→</span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confidentiality Commitment Banner */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
              Client Privacy &amp; Non-Disclosure
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Real client engagements subject to non-disclosure agreements are protected and shared only with verified permission.
            </p>
          </div>
          <TransitionLink
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 text-xs font-mono uppercase tracking-[0.12em] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] shrink-0"
          >
            <span>Request Private Showcase</span>
            <span aria-hidden="true">↗</span>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
