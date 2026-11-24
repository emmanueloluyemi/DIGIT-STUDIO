import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function FounderDesk() {
  return (
    <section className="py-16 border-t-2 border-[var(--ink)]">
      <div className="site-container">
        <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--sand)] p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Founder Monogram / Photo Frame */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <div className="flex h-36 w-36 items-center justify-center rounded-[var(--radius)] border-2 border-[var(--ink)] bg-[var(--surface)] shadow-xs">
                <span className="font-serif text-5xl font-medium text-[var(--crimson)]">
                  EO
                </span>
              </div>
              <div>
                <p className="font-serif text-xl font-normal text-[var(--ink)]">
                  {siteConfig.founder}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {siteConfig.founderRole}
                </p>
              </div>
            </div>

            {/* Straight Answer Copy */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
                A straight answer on who you hire
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--ink)] leading-snug">
                You work directly with the person who designs your files and writes your code.
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed reading-col">
                When you hire Digit Studio, your brief is not passed down to a junior designer or filtered through layers of account managers. I personally lead every project, direct the visual identity, and build the front-end code. If a project requires specialized support (such as longform technical writing or 3D character work), I bring in vetted collaborators and tell you in advance.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[var(--ink)]">
                <span className="font-medium">
                  Response time: <strong className="font-semibold text-[var(--crimson)]">Within 48 hours</strong>
                </span>
                <span>·</span>
                <Link
                  href="/about"
                  className="font-semibold underline decoration-1 underline-offset-4 hover:text-[var(--crimson)]"
                >
                  Read studio background →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
