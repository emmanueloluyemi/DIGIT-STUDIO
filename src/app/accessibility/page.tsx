import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: {
    absolute: "Accessibility Statement · Commitment to Digital Inclusivity | Digit Studio",
  },
  description:
    "Digit Studio's accessibility commitment, WCAG 2.1 AA target compliance, keyboard navigation, and reduced motion capabilities.",
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      <section className="container-editorial space-y-6 pb-12 sm:pb-16 border-b border-[var(--border-subtle)]">
        <p className="text-eyebrow">Digital Inclusivity · WCAG 2.1 AA Target</p>
        <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1 max-w-4xl">
          Accessibility Statement
        </HeadingReveal>
        <FadeUp trigger="enter" delay={0.2} className="max-w-2xl">
          <p className="text-lead text-[var(--text-secondary)]">
            Digit Studio is committed to ensuring our digital experiences are accessible to everyone, including individuals with visual, motor, auditory, and cognitive disabilities.
          </p>
        </FadeUp>
      </section>

      <section className="container-editorial py-12 sm:py-16 max-w-4xl space-y-12">
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Conformance Standards
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            We target compliance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines define best practices for making web content accessible for people with disabilities and user-friendly for all visitors.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Key Accessibility Features Implemented
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">01 · Visual &amp; Color Contrast</span>
              <h3 className="font-display text-lg font-bold">Contrast Ratios &amp; Theming</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                All body copy adheres to a minimum 4.5:1 contrast ratio against background surfaces in both Dark and Light themes. Contrast is continuously validated across interactive buttons and form controls.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">02 · Motion Sensitivity</span>
              <h3 className="font-display text-lg font-bold">prefers-reduced-motion</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We automatically respect OS-level motion reduction preferences. Smooth scrolling is disabled, WebGL animations cease execution, and GSAP transitions resolve immediately to eliminate vestibular strain.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">03 · Keyboard Navigation</span>
              <h3 className="font-display text-lg font-bold">Skip Links &amp; Focus Rings</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A permanent skip-to-content link is present at the top of the DOM. Interactive elements support standard Tab/Shift-Tab navigation with visible, high-contrast focus rings.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">04 · Screen Readers</span>
              <h3 className="font-display text-lg font-bold">Semantic HTML &amp; ARIA Live</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Page transitions announce route changes using aria-live regions. Forms include descriptive labels, error alerts, and fieldsets. Form decorative SVGs are flagged with aria-hidden.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
            Feedback &amp; Accessibility Assistance
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            We welcome feedback on the accessibility of Digit Studio. If you encounter any barrier, require content in an alternative format, or have suggestions for improvement, please contact us directly:
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton href={`mailto:${SITE.email}?subject=Accessibility%20Feedback`} external variant="primary" size="md">
              Email Accessibility Feedback ↗
            </MagneticButton>
            <MagneticButton href={SITE.whatsappUrl} external variant="secondary" size="md">
              Direct WhatsApp ↗
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
