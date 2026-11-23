"use client";

import React from "react";
import Image from "next/image";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { ContactForm } from "@/components/shared/ContactForm";
import { PLATFORM_PROFILES, SITE } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden section-pad hairline-t bg-[var(--bg-primary)]"
    >
      {/* Ambient Crimson Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-6 h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] opacity-[0.05]"
      >
        <Image
          src="/brand/monogram-crimson.svg"
          alt=""
          width={460}
          height={460}
          unoptimized
          className="h-full w-full -rotate-12"
        />
      </div>
      <div className="container-editorial relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="space-y-5">
            <p className="text-eyebrow">07 · Start Your Project</p>
            <HeadingReveal as="h2" id="contact-heading" className="text-h1">
              Let&apos;s create something meaningful.
            </HeadingReveal>
            <FadeUp>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Tell us what you want to create. We will review the brief and follow up with a clear proposal and timeline.
              </p>
            </FadeUp>
          </div>

          <FadeUp className="space-y-6 border-t border-[var(--border-subtle)] pt-6">
            <div className="space-y-1.5">
              <p className="text-eyebrow">Prefer email?</p>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex min-h-[44px] items-center font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                {SITE.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-4 text-xs font-mono uppercase tracking-[0.12em] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]"
              >
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
              {PLATFORM_PROFILES.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[var(--border-subtle)] px-4 text-xs font-mono uppercase tracking-[0.12em] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  <span>{p.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
