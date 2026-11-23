"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { FadeUp } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { useMediaCapabilities } from "@/hooks/useMediaCapabilities";
import { HERO_COPY } from "@/data/home";
import { SITE } from "@/data/site";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 rounded-full border border-[var(--accent)]/30 animate-pulse" />
    </div>
  ),
});

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [is3DHovered, setIs3DHovered] = useState(false);
  const { prefersReducedMotion } = useMediaCapabilities();

  // Subtle depth parallax on scroll out
  useEffect(() => {
    ensureGsapRegistered();
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    if (!section || !leftCol || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(leftCol, {
        yPercent: 8,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden pt-[calc(var(--header-height)+1.75rem)] pb-8 sm:pb-12"
    >
      {/* Background Architectural Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 h-[560px] w-[560px] rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-32 h-[420px] w-[420px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
        }}
      />

      {/* Main Two-Column Asymmetric Editorial Composition */}
      <div className="container-editorial relative z-10 my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Expressive Typography & CTAs (7 cols on lg) */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-7 sm:space-y-9">
            {/* Introductory Label Badge */}
            <FadeUp trigger="enter" delay={0.05} className="inline-block">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/90 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-secondary)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="status-dot-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span>{HERO_COPY.availabilityLabel}</span>
              </div>
            </FadeUp>

            {/* Expressive Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-[clamp(2.75rem,6.8vw,5.75rem)] font-bold leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">
                <span className="block">Ideas deserve</span>
                <span className="block mt-1">
                  <span
                    className="font-normal italic text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    better
                  </span>{" "}
                  <span className="text-[var(--accent-text)]">execution.</span>
                </span>
              </h1>
            </div>

            {/* Supporting Statement */}
            <FadeUp trigger="enter" delay={0.2} className="max-w-xl">
              <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                {HERO_COPY.subhead}
              </p>
            </FadeUp>

            {/* Primary & Secondary CTAs */}
            <FadeUp trigger="enter" delay={0.3} className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="#contact" variant="primary" size="lg">
                <span>{HERO_COPY.primaryCta}</span>
                <span aria-hidden="true">→</span>
              </MagneticButton>

              <MagneticButton href="/work" variant="secondary" size="lg">
                <span>{HERO_COPY.secondaryCta}</span>
                <span aria-hidden="true">↗</span>
              </MagneticButton>
            </FadeUp>

            {/* Editorial Footer Sub-Strip */}
            <div className="border-t border-[var(--border-subtle)] pt-6 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.14em] text-[var(--text-muted)]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Founder: {SITE.owner}
              </span>
              <span>·</span>
              <span>{SITE.timezoneNote}</span>
            </div>
          </div>

          {/* Right Column: Abstract 3D Creative Technology Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[480px] lg:max-w-none rounded-3xl border border-[var(--border-subtle)] bg-[radial-gradient(circle_at_50%_50%,rgba(23,17,18,0.7)_0%,rgba(11,11,11,0.92)_100%)] p-2 backdrop-blur-md overflow-hidden shadow-2xl">
              {/* Corner Accent Indicators */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  3D SCULPTURE
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                KINETIC FACETS
              </div>

              {/* 3D WebGL Canvas */}
              <div className="h-full w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px]">
                <HeroCanvas onHoverStateChange={setIs3DHovered} />
              </div>

              {/* Subtle Bottom Interaction Hint */}
              <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--text-muted)]">
                <span className="transition-colors duration-200" style={{ color: is3DHovered ? "var(--accent)" : "inherit" }}>
                  {is3DHovered ? "Direct Interaction Active" : "Drag or hover to rotate"}
                </span>
                <span>OBSIDIAN &amp; CRIMSON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
