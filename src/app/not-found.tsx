import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found · Digit Studio",
  description: "The page you are looking for does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <div className="site-container max-w-2xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Error 404
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            This page is not on the map.
          </h1>
          <p className="text-base text-[var(--muted)] reading-col">
            The link you followed may be outdated, or the page was moved during our recent site rebuild.
          </p>
        </div>

        <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 space-y-4">
          <p className="text-sm font-semibold text-[var(--ink)]">
            Here are the primary parts of the studio website:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-[var(--crimson)] underline hover:text-[var(--crimson-hover)]">
                Homepage
              </Link>
              <span className="text-[var(--muted)]"> — Studio overview, problem-first doors, and working model.</span>
            </li>
            <li>
              <Link href="/work" className="text-[var(--crimson)] underline hover:text-[var(--crimson-hover)]">
                Selected Work
              </Link>
              <span className="text-[var(--muted)]"> — Three studio-built case studies across brand, web, and video.</span>
            </li>
            <li>
              <Link href="/services" className="text-[var(--crimson)] underline hover:text-[var(--crimson-hover)]">
                Services &amp; Pricing
              </Link>
              <span className="text-[var(--muted)]"> — Scope, timelines, pricing philosophy, and FAQs.</span>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--crimson)] underline hover:text-[var(--crimson-hover)]">
                Contact
              </Link>
              <span className="text-[var(--muted)]"> — Direct intake form, studio inbox, and WhatsApp chat.</span>
            </li>
          </ul>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex rounded-[var(--radius)] bg-[var(--ink)] px-5 py-2.5 text-xs font-semibold text-[var(--paper)] hover:bg-[var(--ink)]/90"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
