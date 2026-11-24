import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility Statement · Digit Studio",
  description:
    "Digit Studio's commitment to digital accessibility, WCAG 2.2 Level AA compliance, and keyboard/screen-reader standards.",
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="site-container max-w-3xl space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Standards &amp; Commitments
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Accessibility statement
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Digit Studio is committed to ensuring digital accessibility for people of all abilities. We design and build with semantic structure, sufficient contrast, and native assistive device support as first principles.
          </p>
        </div>

        {/* Target Standard */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
            Conformance target
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            This website targets conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. These guidelines specify how to make web content accessible to individuals with visual, auditory, motor, and cognitive disabilities.
          </p>
        </div>

        {/* Concrete Features */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
            Implemented accessibility measures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
              <p className="font-semibold text-sm text-[var(--ink)]">High-contrast palette</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Default ink copy (#17120F) against warm paper (#F4EFE6) achieves an 11.8:1 contrast ratio, well exceeding the 4.5:1 WCAG AA threshold for body text.
              </p>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
              <p className="font-semibold text-sm text-[var(--ink)]">Native keyboard navigation</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                A permanent skip-to-content link is positioned at the top of every page. All interactive buttons, form controls, and anchors have visible focus rings.
              </p>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
              <p className="font-semibold text-sm text-[var(--ink)]">Reduced motion support</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                The website does not employ disruptive scroll hijacking, preloader screens, or custom cursors. System preferences for reduced motion are respected automatically.
              </p>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
              <p className="font-semibold text-sm text-[var(--ink)]">Semantic document outline</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Pages use clean semantic landmarks (header, nav, main, footer) with a logical H1-H4 heading hierarchy to facilitate effortless screen reader browsing.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
            Feedback and assistance
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            If you encounter any barrier on this website or require content in an alternative format, please contact Emmanuel Oluyemi directly. We take accessibility feedback seriously and aim to remediate issues promptly.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <a
              href={`mailto:${siteConfig.email}?subject=Accessibility%20Inquiry%20%E2%80%94%20Digit%20Studio`}
              className="inline-flex rounded-[var(--radius)] bg-[var(--ink)] px-4 py-2.5 text-[var(--paper)]"
            >
              Email accessibility feedback
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-4 py-2.5 text-[var(--ink)] hover:border-[var(--ink)]"
            >
              Message on WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="text-xs text-[var(--muted)]">
          <p>Last reviewed and updated: February 2026.</p>
        </div>
      </div>
    </div>
  );
}
