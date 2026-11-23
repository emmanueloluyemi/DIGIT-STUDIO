"use client";

import React, { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { STATS } from "@/data/home";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { useMediaCapabilities } from "@/hooks/useMediaCapabilities";

function formatNumber(
  val: number,
  decimals: number,
  padLength: number
): string {
  if (decimals > 0) {
    return val.toFixed(decimals);
  }
  const rounded = Math.round(val);
  return padLength > 0 ? String(rounded).padStart(padLength, "0") : String(rounded);
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { prefersReducedMotion } = useMediaCapabilities();

  useEffect(() => {
    ensureGsapRegistered();
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll<HTMLElement>("[data-counter-target]");
    if (!counters.length) return;

    if (prefersReducedMotion) {
      counters.forEach((el) => {
        const target = Number(el.dataset.counterTarget || "0");
        const decimals = Number(el.dataset.counterDecimals || "0");
        const pad = Number(el.dataset.counterPad || "0");
        el.textContent = formatNumber(target, decimals, pad);
      });
      return;
    }

    const ctx = gsap.context(() => {
      counters.forEach((el, idx) => {
        const target = Number(el.dataset.counterTarget || "0");
        const decimals = Number(el.dataset.counterDecimals || "0");
        const pad = Number(el.dataset.counterPad || "0");
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.4,
          delay: idx * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatNumber(obj.val, decimals, pad);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="credibility"
      ref={sectionRef}
      aria-label="Track record and credibility"
      className="relative overflow-hidden section-pad hairline-t hairline-b bg-[var(--bg-primary)]"
    >
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[540px] w-[540px] rounded-full blur-[140px] opacity-15"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-editorial relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl border-b border-[var(--border-subtle)] pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-text)] font-semibold">
            05 · Verified Track Record
          </p>
          <HeadingReveal as="h2" className="text-h2">
            Proven standards. Measurable satisfaction.
          </HeadingReveal>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Founder-reported milestone achievements across independent client engagements, direct collaborations and verified platform contracts.
          </p>
        </div>

        {/* High-Contrast Editorial Track Record Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10 flex flex-col justify-between gap-8 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/15"
            >
              {/* Card Header Status */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-5">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Metric 0{idx + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-[var(--accent-text)]" />
              </div>

              {/* Giant Numerical Indicator */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-1">
                  <span
                    data-counter-target={stat.value}
                    data-counter-decimals={stat.decimals || 0}
                    data-counter-pad={stat.padLength || 0}
                    className="font-display text-6xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-[var(--text-primary)]"
                  >
                    0
                  </span>
                  <span className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-[var(--accent-text)]">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {stat.label}
                </h3>
              </div>

              {/* Contextual Narrative */}
              <div className="border-t border-[var(--border-subtle)] pt-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Transparency Verification Footnote */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--accent-text)]" />
            <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">
              All statistics reflect documented client delivery history and live Upwork freelancer scores.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] shrink-0">
            Founder-Verified Data
          </span>
        </div>
      </div>
    </section>
  );
}
