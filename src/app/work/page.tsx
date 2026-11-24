import type { Metadata } from "next";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { WorkGalleryClient } from "@/components/work/WorkGalleryClient";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio | Selected Creative & Digital Work | Digit Studio",
  },
  description:
    "Explore selected concept projects and approved creative and digital work from Digit Studio.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      <section className="container-editorial space-y-12 sm:space-y-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4 max-w-4xl">
            <p className="text-eyebrow">02 · Selected work · Creative and digital projects</p>
            <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1">
              Selected work and creative explorations
            </HeadingReveal>
          </div>

          <FadeUp trigger="enter" delay={0.2} className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              A selection of concept explorations and approved project work. Client projects protected by confidentiality agreements are not displayed without permission.
            </p>
          </FadeUp>
        </div>

        <WorkGalleryClient />

        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="space-y-2 max-w-xl">
            <p className="text-eyebrow">Want results like these?</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Bring your next idea to Digit Studio.
            </h2>
          </div>
          <MagneticButton href="/contact" variant="primary" size="lg">
            <span>Start your project</span>
            <span aria-hidden="true">→</span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
