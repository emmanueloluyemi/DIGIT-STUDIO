import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { DirectContact } from "@/components/home/DirectContact";

export const metadata: Metadata = {
  title: "Contact Digit Studio · Start a Project with Emmanuel Oluyemi",
  description:
    "Direct contact channels for Digit Studio. Share your project requirements for brand identity, websites, AI video, or content management.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="site-container max-w-4xl space-y-8 mb-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Get in touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Start a project with Digit Studio.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed reading-col">
            Every inquiry comes directly to founder Emmanuel Oluyemi. Whether you need a full brand system, a high-performance website, or an AI video commercial, let us know what you are looking to build.
          </p>
        </div>

        {/* 3 Direct Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">Channel 01</p>
            <p className="font-semibold text-sm text-[var(--ink)]">Direct email inbox</p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Best for detailed briefs, RFPs, and sharing existing assets or scopes.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20%E2%80%94%20Digit%20Studio`}
              className="inline-block text-xs font-semibold text-[var(--crimson)] underline pt-1"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">Channel 02</p>
            <p className="font-semibold text-sm text-[var(--ink)]">WhatsApp direct</p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Fastest response for preliminary questions, quick check-ins, or intro calls.
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-[var(--crimson)] underline pt-1"
            >
              Chat {siteConfig.whatsappNumber} ↗
            </a>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">Channel 03</p>
            <p className="font-semibold text-sm text-[var(--ink)]">Upwork verified</p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Prefer escrow payment protection and hourly or fixed contract management?
            </p>
            <a
              href={siteConfig.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-[var(--crimson)] underline pt-1"
            >
              View Upwork profile ↗
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Form Component */}
      <DirectContact />
    </div>
  );
}
