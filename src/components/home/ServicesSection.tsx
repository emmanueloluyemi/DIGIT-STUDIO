"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES, type ServiceItem } from "@/data/services";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden section-pad hairline-t bg-[var(--bg-primary)]"
    >
      {/* Background Architectural Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-20 h-[480px] w-[480px] opacity-[0.04]"
      >
        <Image
          src="/brand/monogram-crimson.svg"
          alt=""
          width={480}
          height={480}
          unoptimized
          className="h-full w-full rotate-12"
        />
      </div>

      <div className="container-editorial relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[var(--border-subtle)] pb-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-eyebrow">02 · Creative &amp; Digital Index</p>
            <HeadingReveal as="h2" id="services-heading" className="text-h2">
              Six core disciplines. One unified standard.
            </HeadingReveal>
          </div>

          <FadeUp className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] lg:text-right">
              From strategic visual identity to full-stack engineering and AI video, each discipline is executed with depth and creative intention.
            </p>
            <TransitionLink
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              <span>Explore all capabilities</span>
              <span aria-hidden="true">→</span>
            </TransitionLink>
          </FadeUp>
        </div>

        {/* Large Numbered Editorial Service Index */}
        <div className="space-y-4">
          {SERVICES.map((service: ServiceItem) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`group relative rounded-2xl border transition-all duration-400 overflow-hidden cursor-pointer ${
                  isActive
                    ? "border-[var(--accent)]/50 bg-[var(--bg-elevated)] shadow-2xl"
                    : "border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {/* Collapsed / Header Horizontal Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 sm:p-8 gap-6">
                  {/* Left: Index Number & Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span
                      className={`font-display text-3xl sm:text-4xl font-bold transition-all duration-300 ${
                        isActive
                          ? "text-[var(--accent)] scale-105"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      {service.index}
                    </span>

                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        {service.shortTag}
                      </p>
                    </div>
                  </div>

                  {/* Right: Quick Action Pill */}
                  <div className="flex items-center gap-4 self-end lg:self-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors hidden sm:inline">
                      {isActive ? "Selected" : "View Overview"}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white rotate-45"
                          : "border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:border-[var(--border-strong)]"
                      }`}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </div>

                {/* Expanded Discovery Panel for the Active Service */}
                {isActive && (
                  <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 lg:p-10 transition-all duration-500">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                      {/* Left: Service Description & Highlights (7 cols) */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                            {service.accentLabel}
                          </span>
                          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                            {service.intro}
                          </p>
                        </div>

                        {/* Top Capabilities Preview */}
                        <div className="space-y-2">
                          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                            Core Capabilities:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.slice(0, 5).map((cap) => (
                              <span
                                key={cap}
                                className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Dedicated Exploration Link */}
                        <div className="pt-2">
                          <TransitionLink
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] text-white hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/20"
                          >
                            <span>Explore {service.title} Details</span>
                            <span aria-hidden="true">→</span>
                          </TransitionLink>
                        </div>
                      </div>

                      {/* Right: Original Visual Artwork Preview (5 cols) */}
                      <div className="lg:col-span-5">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-inner group">
                          <Image
                            src={service.previewImage}
                            alt={service.previewAlt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            <span>Original Artwork</span>
                            <span>{service.index} / 06</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
