"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS, type ProcessStep } from "@/data/home";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";

export function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = PROCESS_STEPS[activeIdx] ?? PROCESS_STEPS[0];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden section-pad hairline-t bg-[var(--bg-primary)]"
    >
      {/* Background Architectural Monogram */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] opacity-[0.035]"
      >
        <Image
          src="/brand/monogram-crimson.svg"
          alt=""
          width={500}
          height={500}
          unoptimized
          className="h-full w-full -rotate-12"
        />
      </div>

      <div className="container-editorial relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[var(--border-subtle)] pb-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-eyebrow">06 · How Projects Move</p>
            <HeadingReveal as="h2" id="process-heading" className="text-h2">
              From intent to delivery in five deliberate stages.
            </HeadingReveal>
          </div>

          <FadeUp className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] lg:text-right">
            Every engagement follows a structured milestone path ensuring creative rigor, clear feedback loops, and on-time execution.
          </FadeUp>
        </div>

        {/* 5-Stage Interactive Editorial Journey */}
        <div className="space-y-8">
          {/* Timeline Stage Navigator (Desktop Horizontal Rail) */}
          <div className="hidden lg:grid grid-cols-5 gap-3 border-b border-[var(--border-subtle)] pb-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={step.index}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative text-left p-4 rounded-xl transition-all duration-300 ${
                    isSelected
                      ? "bg-[var(--bg-elevated)] border border-[var(--accent)]/40"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {step.index}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        isSelected ? "bg-[var(--accent)] scale-125" : "bg-white/10"
                      }`}
                    />
                  </div>
                  <h4
                    className={`mt-2 font-display text-base font-bold transition-colors ${
                      isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs text-[var(--text-muted)] truncate">
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Editorial Stage Board */}
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[var(--accent)]">
                  {activeStep.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {activeStep.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {activeStep.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  Stage {activeIdx + 1} of 5
                </span>
                <div className="flex gap-1.5 ml-2">
                  <button
                    type="button"
                    disabled={activeIdx === 0}
                    onClick={() => setActiveIdx((p) => Math.max(0, p - 1))}
                    aria-label="Previous process stage"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    disabled={activeIdx === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveIdx((p) => Math.min(PROCESS_STEPS.length - 1, p + 1))}
                    aria-label="Next process stage"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Core Narrative & Deliverables Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 pt-8 lg:items-start">
              <div className="lg:col-span-6 space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  Stage Intent &amp; Scope
                </p>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--border-subtle)] lg:pl-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Stage Deliverables
                </p>
                <ul className="space-y-3">
                  {activeStep.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-3 text-sm text-[var(--text-primary)]"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-[10px]">
                        ✓
                      </span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Accordion Alternative for Small Devices */}
          <div className="lg:hidden space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              if (idx === activeIdx) return null;
              return (
                <button
                  key={step.index}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="w-full text-left rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 flex items-center justify-between"
                >
                  <span className="font-mono text-xs text-[var(--accent)] font-bold">
                    {step.index} — {step.title}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Tap to view →</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
