import type { Metadata } from "next";
import Link from "next/link";
import {
  serviceOffers,
  pricingPrinciples,
  whatINeedFromYou,
  serviceFaqs,
} from "@/content/services";

export const metadata: Metadata = {
  title: "Services & Pricing — Brand Identity, Websites, AI Video, Content",
  description:
    "Transparent deliverables, timelines, and starting prices for brand identity, custom website design and development, AI video, and monthly social content.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-18">
      <div className="site-container space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
            Studio capabilities &amp; pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-[var(--ink)]">
            Four focused offers, priced and scoped in writing.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] reading-col">
            I work directly with founders and marketing teams. Below is an honest breakdown of what is included, what is excluded, how long it takes, and what it costs.
          </p>
        </div>

        {/* Four Stacked Service Offers with Anchors */}
        <div className="space-y-16 border-t-2 border-[var(--ink)] pt-12">
          {serviceOffers.map((offer, idx) => (
            <section
              key={offer.id}
              id={offer.anchor}
              className="scroll-mt-24 rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-10 lg:p-12 space-y-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[var(--muted)]">Offer 0{idx + 1}</span>
                  <h2 className="font-serif text-3xl font-normal text-[var(--ink)]">
                    {offer.title}
                  </h2>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-[var(--crimson)]">{offer.timeline}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg font-medium text-[var(--ink)] reading-col">
                {offer.headline}
              </p>

              {/* Who It Is For */}
              <div className="space-y-1.5 text-sm">
                <p className="font-semibold text-[var(--ink)]">Who this is for:</p>
                <p className="text-[var(--muted)] leading-relaxed reading-col">{offer.forWhom}</p>
              </div>

              {/* Two columns: Included vs Not Included */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-2">
                <div className="space-y-2 rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                    What is included
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--muted)]">
                    {offer.included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--crimson)] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    What is not included
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--muted)]">
                    {offer.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--muted)] font-bold">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing, Mini Case Study & CTA */}
              <div className="flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                <div className="space-y-1">
                  <p className="font-semibold text-[var(--crimson)]">{offer.pricingNote}</p>
                  <p className="text-xs text-[var(--muted)]">{offer.deliverableExample}</p>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(offer.title)}`}
                  className="inline-flex items-center justify-center rounded-[var(--radius)] bg-[var(--crimson)] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[var(--crimson-hover)] transition-colors shrink-0"
                >
                  Get a quote in 48 hours
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* How We Price Section */}
        <section className="py-12 border-t-2 border-[var(--ink)] space-y-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Pricing philosophy
            </p>
            <h2 className="font-serif text-3xl font-normal text-[var(--ink)]">
              How pricing works.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 space-y-2"
              >
                <h3 className="font-serif text-xl font-normal text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Need From You */}
        <section className="py-12 border-t-2 border-[var(--ink)] space-y-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Client collaboration
            </p>
            <h2 className="font-serif text-3xl font-normal text-[var(--ink)]">
              What I need from you.
            </h2>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--ink)]">
              {whatINeedFromYou.map((req) => (
                <li key={req} className="flex items-start gap-2.5">
                  <span className="text-[var(--crimson)] font-bold">·</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ with Native <details> */}
        <section className="py-12 border-t-2 border-[var(--ink)] space-y-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-normal text-[var(--ink)]">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 text-sm transition-colors open:bg-[var(--paper)]"
              >
                <summary className="cursor-pointer font-serif text-lg font-normal text-[var(--ink)] hover:text-[var(--crimson)] focus:outline-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed reading-col">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
