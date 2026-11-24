import React from "react";

const STEPS = [
  {
    step: "Step 1",
    title: "Discovery & written quote",
    timeline: "Days 1–2",
    whatYouDo: "Share your business goals, target audience, and any existing materials.",
    whatIDo: "Review your requirements and send a fixed quote with timeline and deliverables within 48 hours.",
  },
  {
    step: "Step 2",
    title: "Direction & concept design",
    timeline: "Week 1",
    whatYouDo: "Review two distinct visual concepts and select the direction that fits your company.",
    whatIDo: "Produce functional mockups, typography samples, and structural layouts based on your brief.",
  },
  {
    step: "Step 3",
    title: "Refinement & production",
    timeline: "Weeks 2–3",
    whatYouDo: "Test interactive previews and provide consolidated feedback within two business days.",
    whatIDo: "Build clean, production-ready code or final vector artwork, incorporating your revisions.",
  },
  {
    step: "Step 4",
    title: "Launch & file handover",
    timeline: "Final milestone",
    whatYouDo: "Confirm domain or publishing credentials and test the live deliverable.",
    whatIDo: "Deploy code to Cloudflare, hand over full source files, and walk you through maintenance.",
  },
];

export function ProjectRunTimeline() {
  return (
    <section className="py-16 border-t-2 border-[var(--ink)]">
      <div className="site-container space-y-10">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            How a project runs
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)]">
            Four predictable steps from brief to launch.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            Clear expectations on both sides keep projects on schedule and eliminate awkward surprises.
          </p>
        </div>

        {/* 4-step vertical timeline */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-2">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--crimson)]">{s.step}</span>
                  <span className="text-[var(--muted)]">{s.timeline}</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-[var(--ink)]">
                  {s.title}
                </h3>
                <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[var(--ink)] block">What you do:</span>
                    <span className="text-[var(--muted)]">{s.whatYouDo}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)] block">What I do:</span>
                    <span className="text-[var(--muted)]">{s.whatIDo}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--muted)]">
                Stage {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
