import type { Metadata } from "next";
import { SITE, PLATFORM_PROFILES } from "@/data/site";
import { HeadingReveal, FadeUp } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: { absolute: "About Digit Studio | Independent Creative & Digital Studio" },
  description: "Meet Digit Studio, an independent creative and digital studio founded by Emmanuel Oluyemi.",
  alternates: {
    canonical: "/about",
  },
};

const PRINCIPLES = [
  ["01", "Understand before creating", "We take time to understand the business, audience, market and purpose behind the brief."],
  ["02", "Make creativity useful", "Strong visual work should do more than look attractive. It should communicate, clarify and support a goal."],
  ["03", "Treat every project with care", "Clear communication, thoughtful execution and respect for client confidentiality are part of the work."],
];

export default function AboutPage() {
  return (
    <div className="pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pb-28">
      <section className="container-editorial space-y-8 pb-16 sm:pb-20">
        <p className="text-eyebrow">05 · About the studio</p>
        <HeadingReveal as="h1" trigger="enter" delay={0.08} className="text-h1 max-w-5xl">
          Creative thinking, built with purpose.
        </HeadingReveal>
        <FadeUp trigger="enter" delay={0.2} className="max-w-3xl">
          <p className="text-lead text-[var(--text-secondary)]">Digit Studio is an independent creative and digital studio founded by Emmanuel Oluyemi. We bring visual design, digital development, AI-powered media and content together to help businesses turn ideas into meaningful experiences.</p>
        </FadeUp>
      </section>

      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-2"><p className="text-eyebrow">The studio</p><h2 className="font-display text-2xl sm:text-3xl font-bold">A connected approach to creative and digital work.</h2></div>
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            <p>Businesses rarely need just one isolated deliverable. A brand may need a visual identity, a website, product content and a consistent social presence. Digit Studio connects these capabilities so the work can feel coherent from the first impression to the digital experience.</p>
            <p>The studio is founder-led. Emmanuel works directly with clients and brings in trusted creative or technical collaborators when a project&apos;s scope calls for additional expertise. This keeps communication clear while allowing the right skills to support the work.</p>
            <p className="text-[var(--text-primary)] font-medium">Based in Nigeria. Working with clients and businesses across locations.</p>
          </div>
        </div>
      </section>

      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-eyebrow">Founder</p>
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 text-center shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-black/20 pointer-events-none" />
              <span className="font-display text-7xl font-bold tracking-[-0.08em] text-[var(--accent)] transition-transform duration-500 group-hover:scale-105">EO</span>
              <span className="mt-3 text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)]">Emmanuel Oluyemi</span>
              <span className="text-[11px] font-mono text-[var(--text-secondary)] mt-1">Founder &amp; Creative Technologist</span>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Emmanuel Oluyemi</h2>
            <p className="text-eyebrow">Founder · Creative &amp; Digital</p>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">Emmanuel&apos;s work spans graphic design and branding, web design and development, AI video creation, animation, content creation and social media management. His approach combines visual thinking with an understanding of the business, audience and market behind each project.</p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href={SITE.linkedinUrl} external variant="secondary" size="sm">LinkedIn ↗</MagneticButton>
              <MagneticButton href={SITE.upworkUrl} external variant="secondary" size="sm">Upwork ↗</MagneticButton>
              <MagneticButton href={SITE.whatsappUrl} external variant="secondary" size="sm">WhatsApp ↗</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Point of View / Manifesto */}
      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20">
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 sm:p-14 space-y-6">
          <p className="text-eyebrow">Studio Manifesto · Point of View</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl leading-snug">
            &ldquo;When creative vision and technical execution live under one roof, nothing gets lost in translation.&rdquo;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed pt-4 border-t border-[var(--border-subtle)]">
            <p>
              Traditional agencies often separate design teams from engineering squads, with account managers acting as lossy translators in between. By the time a concept reaches production, the nuance that made it special is diluted.
            </p>
            <p>
              At Digit Studio, we build what we design. Every typography choice, micro-interaction, shader transition, and narrative video cut is considered in concert. You communicate directly with the maker, ensuring velocity, transparency, and uncompromised craft.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-4">
            <div className="h-0.5 w-10 bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-semibold">
              Emmanuel Oluyemi — Lagos, Nigeria
            </span>
          </div>
        </div>
      </section>

      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20 space-y-8">
        <div className="max-w-3xl space-y-3"><p className="text-eyebrow">What guides the work</p><h2 className="text-h2">Good work begins with understanding.</h2></div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRINCIPLES.map(([index, title, body]) => <div key={index} className="space-y-3 border-t border-[var(--border-subtle)] pt-5"><span className="font-mono text-xs text-[var(--accent)]">{index}</span><h3 className="font-display text-xl font-bold">{title}</h3><p className="text-sm sm:text-base text-[var(--text-secondary)]">{body}</p></div>)}
        </div>
      </section>

      <section className="container-editorial border-t border-[var(--border-subtle)] py-14 sm:py-20 space-y-6">
        <div className="max-w-3xl space-y-3"><p className="text-eyebrow">Professional profiles</p><h2 className="text-h2">Find Digit Studio across platforms.</h2><p className="text-[var(--text-secondary)]">Explore the founder&apos;s professional profile or the studio&apos;s Fiverr service channel.</p></div>
        <div className="flex flex-wrap gap-3">{PLATFORM_PROFILES.map((profile) => <MagneticButton key={profile.label} href={profile.href} external variant="secondary" size="md">{profile.label} ↗</MagneticButton>)}</div>
      </section>
    </div>
  );
}
