"use client";

import React, { useState } from "react";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";
import { FadeUp } from "@/components/motion/TextReveal";

const SERVICES_OPTIONS = [
  { label: "high-performance web platforms", category: "Development", hint: "Next.js architecture & 60fps micro-interactions" },
  { label: "distinctive brand identities", category: "Branding", hint: "Visual identity, typography & packaging systems" },
  { label: "scripted AI video campaigns", category: "AI Video", hint: "16:9 cinematic teasers & 9:16 social cutdowns" },
  { label: "growth marketing funnels", category: "Marketing", hint: "Positioning hooks & conversion-engineered ad creatives" },
  { label: "narrative digital publications", category: "Content", hint: "Longform editorial stories & brand education assets" },
];

const SECTOR_OPTIONS = [
  { label: "Fintech", sector: "Fintech" },
  { label: "Luxury Skincare", sector: "Luxury Skincare" },
  { label: "Hardware & AI", sector: "Hardware & AI" },
  { label: "Automation & SaaS", sector: "Automation & SaaS" },
  { label: "Specialty Coffee", sector: "Specialty Coffee" },
];

export function InteractiveStatementSection() {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);
  const [selectedSectorIdx, setSelectedSectorIdx] = useState(0);

  const currentService = SERVICES_OPTIONS[selectedServiceIdx];
  const currentSector = SECTOR_OPTIONS[selectedSectorIdx];

  const workLink = `/work?category=${encodeURIComponent(currentService.category)}&sector=${encodeURIComponent(currentSector.sector)}`;
  const contactLink = `/contact?service=${encodeURIComponent(currentService.label)}`;

  return (
    <section className="container-editorial py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <FadeUp trigger="scroll" className="space-y-6">
        <p className="text-eyebrow">Interactive Studio Matrix · Tailored Engagements</p>
        
        {/* Dynamic Editorial Mad-Libs Sentence */}
        <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
          <span>We engineer </span>
          <span className="relative inline-block border-b-2 border-[var(--accent)] pb-0.5">
            <select
              aria-label="Select discipline"
              value={selectedServiceIdx}
              onChange={(e) => setSelectedServiceIdx(Number(e.target.value))}
              className="appearance-none bg-transparent pr-7 font-bold text-[var(--accent)] outline-none cursor-pointer"
            >
              {SERVICES_OPTIONS.map((opt, i) => (
                <option key={opt.label} value={i} className="bg-[var(--bg-elevated)] text-[var(--text-primary)] text-base font-sans">
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-xs text-[var(--accent)]">
              ▾
            </span>
          </span>
          <span> for ambitious businesses in </span>
          <span className="relative inline-block border-b-2 border-[var(--accent)] pb-0.5">
            <select
              aria-label="Select sector"
              value={selectedSectorIdx}
              onChange={(e) => setSelectedSectorIdx(Number(e.target.value))}
              className="appearance-none bg-transparent pr-7 font-bold text-[var(--accent)] outline-none cursor-pointer"
            >
              {SECTOR_OPTIONS.map((opt, i) => (
                <option key={opt.label} value={i} className="bg-[var(--bg-elevated)] text-[var(--text-primary)] text-base font-sans">
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-xs text-[var(--accent)]">
              ▾
            </span>
          </span>
          <span>.</span>
        </div>

        {/* Live Detail Strip & Action Buttons */}
        <div className="flex flex-col gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 mt-6">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Delivery Blueprint · {currentSector.label}
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {currentService.hint}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <TransitionLink
              href={workLink}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
            >
              <span>Explore {currentService.category} Work</span>
              <span aria-hidden="true">→</span>
            </TransitionLink>
            <TransitionLink
              href={contactLink}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-xs font-semibold text-[var(--accent-ink)] hover:opacity-90 transition-all"
            >
              <span>Start This Brief</span>
              <span aria-hidden="true">↗</span>
            </TransitionLink>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
