"use client";

import React from "react";
import { FOUNDER_COPY } from "@/data/home";
import { SITE } from "@/data/site";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function SoloOrTeamSection() {
  return (
    <section
      id="studio"
      aria-labelledby="founder-studio-heading"
      className="relative overflow-hidden section-pad hairline-t bg-[var(--bg-primary)]"
    >
      <div className="container-editorial relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <p className="text-eyebrow">{FOUNDER_COPY.eyebrow}</p>
          <HeadingReveal as="h2" id="founder-studio-heading" className="text-h1">
            Independent by design.{" "}
            <span
              className="font-normal italic text-[var(--accent-text)]"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Collaborative
            </span>{" "}
            by nature.
          </HeadingReveal>
        </div>

        {/* Editorial Two-Column Main Presentation */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Founder Persona & Identity Seal (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10 space-y-6 overflow-hidden">
              {/* Subtle crimson radial glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-20"
                style={{ background: "var(--accent)" }}
              />

              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  FOUNDER PROFILE
                </span>
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </div>

              {/* Monogram Seal */}
              <div className="flex aspect-square max-w-[140px] flex-col items-center justify-center rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-surface)] p-6 text-center shadow-inner">
                <span className="font-display text-5xl font-bold tracking-tight text-[var(--accent-text)]">
                  EO
                </span>
                <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  DIRECTOR
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {SITE.owner}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent-text)]">
                  Founder &amp; Creative Lead
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                  Responsible for Digit Studio&apos;s creative direction, design philosophy and professional standards across every client commission.
                </p>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-6 flex flex-wrap gap-3">
                <MagneticButton href={SITE.linkedinUrl} external variant="secondary" size="sm">
                  LinkedIn ↗
                </MagneticButton>
                <MagneticButton href={SITE.upworkUrl} external variant="secondary" size="sm">
                  Upwork ↗
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Architecture & Operating Model (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeUp>
              <p className="text-lg sm:text-2xl text-[var(--text-primary)] font-medium leading-relaxed">
                {FOUNDER_COPY.intro}
              </p>
            </FadeUp>

            {/* Two Structural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-3">
                <span className="font-mono text-xs text-[var(--accent-text)] font-bold">01</span>
                <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Direct Founder Leadership
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {FOUNDER_COPY.directionNote} You communicate directly with the person designing and overseeing your deliverables.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-3">
                <span className="font-mono text-xs text-[var(--accent-text)] font-bold">02</span>
                <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Coordinated Specialists
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {FOUNDER_COPY.collaborationNote}
                </p>
              </div>
            </div>

            {/* Transparency Callout */}
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 space-y-3">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                Our Standard
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                We believe in authentic capability over corporate posturing. We do not invent fictional staff or claim services we do not master. Every project benefits from focused attention, technical precision, and honest creative counsel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
