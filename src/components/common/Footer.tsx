import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-[var(--surface)] text-[var(--ink)] pt-14 pb-12 mt-24">
      <div className="site-container space-y-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Studio Summary */}
          <div className="md:col-span-5 space-y-3">
            <h2 className="font-serif text-2xl font-normal text-[var(--ink)]">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-[var(--muted)] reading-col">
              {siteConfig.shortDescription}
            </p>
            <p className="text-xs text-[var(--muted)] pt-1">
              {siteConfig.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Pages
            </p>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--ink)] hover:text-[var(--crimson)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/accessibility"
                  className="text-[var(--ink)] hover:text-[var(--crimson)] transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Direct communication
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--ink)] underline decoration-1 underline-offset-4"
                >
                  WhatsApp: {siteConfig.whatsappNumber} ↗
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--ink)] underline decoration-1 underline-offset-4"
                >
                  Upwork profile (100% Job Success) ↗
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--ink)] underline decoration-1 underline-offset-4"
                >
                  LinkedIn profile ↗
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rule & Copyright */}
        <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Designed and built by {siteConfig.founder}.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/accessibility"
              className="underline decoration-1 underline-offset-2 hover:text-[var(--ink)]"
            >
              Accessibility statement
            </Link>
            <span>·</span>
            <span>WCAG 2.2 AA target</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
