import type { Metadata } from "next";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { ContactForm } from "@/components/shared/ContactForm";
import { PLATFORM_PROFILES, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Digit Studio | Start Your Web or Design Project",
  },
  description:
    "Tell us about your branding, website, AI video, social media or content project.",
  alternates: {
    canonical: "/contact",
  },
};

interface ContactPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;

  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      <section className="container-editorial grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div className="space-y-6">
            <p className="text-eyebrow">07 · Contact · Tell us what you need</p>
            <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1">
              Tell us about your project
            </HeadingReveal>
            <FadeUp trigger="enter" delay={0.2}>
              <p className="text-lead text-[var(--text-secondary)]">
                The more detail you share, the better your quote. Not ready to write it all
                down? Message us on WhatsApp instead.
              </p>
            </FadeUp>
          </div>

          <FadeUp trigger="enter" delay={0.28} className="space-y-6 border-t border-[var(--border-subtle)] pt-8">
            {/* 3 Intake Routes */}
            <div className="space-y-4">
              <p className="text-eyebrow">Three ways to connect</p>

              {/* Route 1: Online Brief */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-[var(--accent)] font-semibold">Route 01</span>
                  <span className="text-xs text-[var(--text-muted)]">· Most detailed</span>
                </div>
                <p className="font-display text-base font-bold text-[var(--text-primary)]">Interactive Project Brief</p>
                <p className="text-xs text-[var(--text-secondary)]">Complete the 6-step inquiry form for an accurate scope, timeline and cost estimate.</p>
              </div>

              {/* Route 2: Direct WhatsApp */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-[var(--accent)] font-semibold">Route 02</span>
                  <span className="text-xs text-[var(--text-muted)]">· Fastest response</span>
                </div>
                <p className="font-display text-base font-bold text-[var(--text-primary)]">Direct WhatsApp Chat</p>
                <p className="text-xs text-[var(--text-secondary)]">Message founder Emmanuel Oluyemi directly for urgent inquiries or preliminary questions.</p>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-4 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors"
                >
                  <span>Chat +234 802 863 4791</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Route 3: Studio Inbox */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-[var(--accent)] font-semibold">Route 03</span>
                  <span className="text-xs text-[var(--text-muted)]">· Direct email</span>
                </div>
                <p className="font-display text-base font-bold text-[var(--text-primary)]">Direct Studio Inbox</p>
                <a
                  href={`mailto:${SITE.email}?subject=Project%20Inquiry%20%E2%80%94%20Digit%20Studio`}
                  className="font-mono text-sm font-semibold text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)] block"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* Discovery Call Card */}
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-primary)] p-5 space-y-3">
              <p className="text-eyebrow">Discovery Call</p>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Book a 20-Minute Intro Call
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Prefer to discuss your goals face-to-face? Request a Google Meet or WhatsApp video call with Emmanuel.
              </p>
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hi Emmanuel, I would like to schedule a 20-minute intro call to discuss my project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 text-xs font-semibold hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors"
              >
                <span>Schedule a 20-Min Call</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="space-y-2.5">
              <p className="text-eyebrow">Ordering on Fiverr or Upwork? Find us there</p>
              <div className="flex flex-wrap gap-3">
                {PLATFORM_PROFILES.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-xs font-mono uppercase tracking-[0.12em] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span>{p.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {SITE.timezoneNote}. {SITE.nameLine}
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-7">
          <ContactForm defaultService={service} />
        </div>
      </section>
    </div>
  );
}
