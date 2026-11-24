import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Digit Studio & Founder Emmanuel Oluyemi",
  description:
    "An independent studio led by Emmanuel Oluyemi, helping ambitious founders build brand identities, fast websites, AI video, and content.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-18">
      <div className="site-container space-y-16 max-w-4xl">
        {/* Header */}
        <div className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            About the studio
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Ideas deserve better execution.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] reading-col">
            I founded Digit Studio because most businesses do not need a twenty-person agency with three levels of bureaucracy. They need one competent partner who takes their goals seriously.
          </p>
        </div>

        {/* Founder Narrative */}
        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-[var(--ink)] reading-col">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              Who I am
            </h2>
            <p className="text-[var(--muted)]">
              My name is Emmanuel Oluyemi. I am a designer, developer, and creative technologist based in Nigeria, working with independent companies and startups worldwide.
            </p>
            <p className="text-[var(--muted)]">
              My background connects visual design, front-end software engineering, and modern AI video workflows. Because I design the layouts and write the code myself, there is zero translation loss between the original creative intent and what ships to production.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              How collaborators are brought in
            </h2>
            <p className="text-[var(--muted)]">
              For most briefs, you work solely with me from the kickoff call to launch day. When a project requires deep specialization outside my primary craft—such as long-form corporate copy, native iOS Swift development, or legal trademark registration—I coordinate vetted collaborators under my direct oversight and inform you up front.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              Working principles
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-[var(--muted)] pt-2">
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--crimson)] font-bold">·</span>
                <span><strong className="text-[var(--ink)] font-semibold">Speed over spectacle:</strong> A website that loads in under two seconds builds more trust than a 15-megabyte 3D experiment that crashes on an iPhone.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--crimson)] font-bold">·</span>
                <span><strong className="text-[var(--ink)] font-semibold">Clear pricing:</strong> Every engagement is quoted in writing with fixed milestone deliverables. No unexpected monthly bills.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--crimson)] font-bold">·</span>
                <span><strong className="text-[var(--ink)] font-semibold">Prompt answers:</strong> I reply to client inquiries within 24 to 48 hours on business days via email or WhatsApp.</span>
              </li>
            </ul>
          </section>

          {/* Founder Profile Card */}
          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--paper)] font-serif text-xl font-medium text-[var(--crimson)]">
                EO
              </div>
              <div>
                <p className="font-serif text-xl font-normal text-[var(--ink)]">{siteConfig.founder}</p>
                <p className="text-xs text-[var(--muted)]">{siteConfig.location}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
              >
                Upwork profile (100% Job Success) ↗
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
              >
                LinkedIn profile ↗
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
              >
                {siteConfig.email} ↗
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[var(--radius)] bg-[var(--crimson)] px-6 py-3 text-xs font-semibold text-white hover:bg-[var(--crimson-hover)] transition-colors"
            >
              Get a quote in 48 hours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
