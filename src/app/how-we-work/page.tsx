import type { Metadata } from "next";
import { PROCESS_STEPS, FOUNDER_COPY } from "@/data/home";
import { SITE } from "@/data/site";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";

export const metadata: Metadata = {
  title: {
    absolute: "How We Work · Studio Methodology & Process | Digit Studio",
  },
  description:
    "Explore Digit Studio's five-stage creative and technical delivery methodology, led by founder Emmanuel Oluyemi.",
  alternates: {
    canonical: "/how-we-work",
  },
};

const WORKING_PRINCIPLES = [
  {
    index: "01",
    title: "Direct Access",
    summary:
      "You collaborate directly with founder Emmanuel Oluyemi. No junior account managers or misaligned layers between your vision and the work.",
  },
  {
    index: "02",
    title: "Transparent Scope",
    summary:
      "Every milestone, timeline, deliverable and budget tier is established in writing before production begins. No unexpected costs.",
  },
  {
    index: "03",
    title: "Iterative Check-ins",
    summary:
      "Progress is reviewed at agreed staging milestones. You provide feedback while work evolves, ensuring final sign-off is frictionless.",
  },
  {
    index: "04",
    title: "Complete Ownership",
    summary:
      "Upon final handover, you receive all organized source files, production code, brand vector assets and clear guidelines for independent management.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      {/* Page Hero Header */}
      <section className="container-editorial space-y-8 pb-16 sm:pb-20">
        <p className="text-eyebrow">04 · Studio Methodology &amp; Delivery</p>
        <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1 max-w-5xl">
          A disciplined creative process. From first spark to final delivery.
        </HeadingReveal>
        <FadeUp trigger="enter" delay={0.2} className="max-w-3xl">
          <p className="text-lead text-[var(--text-secondary)]">
            Digit Studio is an independent studio founded and led by Emmanuel Oluyemi. Every engagement combines structured strategic inquiry, high-craft execution and transparent milestone collaboration.
          </p>
        </FadeUp>
      </section>

      {/* The 5 Deliberate Stages */}
      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20 space-y-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="text-eyebrow">The Five Stages</p>
          <h2 className="text-h2">Our structured engagement lifecycle</h2>
          <p className="text-base text-[var(--text-secondary)]">
            Every project—whether a brand identity system, custom web platform, or AI video campaign—advances through five rigorous phases.
          </p>
        </div>

        <div className="space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.index}
              className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-7 sm:p-10 transition-all duration-300 hover:border-[var(--accent)]/50"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left: Stage Number & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl font-bold text-[var(--accent)]">
                      {step.index}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {step.subtitle}
                  </p>
                </div>

                {/* Middle: Narrative Description */}
                <div className="lg:col-span-4 space-y-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Phase Scope
                  </p>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: Key Deliverables */}
                <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                    Tangible Deliverables
                  </p>
                  <ul className="space-y-2">
                    {step.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)]"
                      >
                        <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-[9px]">
                          ✓
                        </span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Philosophy: Independent by Design */}
      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-eyebrow">Operating Model</p>
          <h2 className="text-h2">
            Independent by design.{" "}
            <span
              className="font-normal italic text-[var(--accent)]"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Collaborative
            </span>{" "}
            by nature.
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {FOUNDER_COPY.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Framework 1: Founder Direction */}
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--accent)]">
                CORE LEADERSHIP
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Direct Founder Leadership
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Emmanuel Oluyemi personally steers the design architecture, creative vision and code quality across every engagement. You get focused, experienced decision-making without diluted communication.
              </p>
            </div>
            <div className="border-t border-[var(--border-subtle)] pt-4 text-xs font-mono text-[var(--text-muted)]">
              Best for brand identities, custom web products, AI films &amp; focused digital initiatives.
            </div>
          </div>

          {/* Framework 2: Vetted Collaborators */}
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-[var(--accent)]">
                SCALABLE CAPABILITY
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Vetted Collaborative Specialists
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                When a complex commission requires multi-disciplinary scale—such as native mobile engineering or multi-lingual content pipelines—trusted specialists are brought in under single unified studio direction.
              </p>
            </div>
            <div className="border-t border-[var(--border-subtle)] pt-4 text-xs font-mono text-[var(--text-muted)]">
              Best for multi-platform products, large-scale campaigns &amp; integrated launches.
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20 space-y-10">
        <div className="space-y-2 max-w-2xl">
          <p className="text-eyebrow">Professional Standards</p>
          <h2 className="text-h2">The standards behind our work</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKING_PRINCIPLES.map((principle) => (
            <div
              key={principle.index}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-7 space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[var(--accent)]">
                {principle.index}
              </span>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {principle.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Project Intake CTA */}
      <section className="container-editorial pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-12">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
              Next Steps
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Have an idea you are ready to build?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Share your project requirements through our structured enquiry form. We will review your brief and recommend the most effective execution path.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <TransitionLink
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[var(--accent)] px-7 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent)]/25"
            >
              <span>Start an enquiry</span>
              <span aria-hidden="true">→</span>
            </TransitionLink>

            <MagneticButton href={SITE.whatsappUrl} external variant="secondary" size="md">
              Chat on WhatsApp ↗
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
