import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--paper)]/95 backdrop-blur-xs">
      <div className="site-container flex h-18 items-center justify-between">
        {/* Brand Logo & Studio Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-xl font-medium tracking-tight text-[var(--ink)] hover:text-[var(--crimson)]"
          aria-label={`${siteConfig.name} — Home`}
        >
          <Image
            src="/brand/app-icon.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[4px] object-contain"
          />
          <span>{siteConfig.name}</span>
        </Link>

        {/* Always-visible Navigation Links */}
        <nav aria-label="Main navigation" className="flex items-center gap-6 sm:gap-8">
          <ul className="flex items-center gap-5 sm:gap-7 text-sm font-medium">
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
          </ul>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-[var(--radius)] bg-[var(--crimson)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--crimson-hover)] transition-colors"
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
