"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { useMotionRoot } from "@/components/motion/MotionRootContext";
import { SITE } from "@/data/site";

const SESSION_KEY = "digit_studio_preloader_seen";

export function Preloader() {
  const pathname = usePathname();
  const { setPreloaderDone, bumpEnterCycle } = useMotionRoot();
  const [shouldRender, setShouldRender] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const logoMarkRef = useRef<SVGSVGElement>(null);
  const brandNameRef = useRef<HTMLDivElement>(null);
  const counterTextRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapRegistered();

    const isHome = pathname === "/";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    let finished = false;
    const complete = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Ignore storage restrictions
      }
      document.documentElement.dataset.preloader = "done";
      setPreloaderDone(true);
      bumpEnterCycle();
      setShouldRender(false);
    };

    if (!isHome || alreadySeen || prefersReduced) {
      document.documentElement.dataset.preloader = "done";
      const rafId = window.requestAnimationFrame(complete);
      return () => window.cancelAnimationFrame(rafId);
    }

    const counter = { value: 0 };

    // Strict safety timeout: never block page longer than 1.0s
    const hardTimeout = window.setTimeout(() => {
      complete();
    }, 1000);

    const ctx = gsap.context(() => {
      gsap.set(logoMarkRef.current, { scale: 0.85, opacity: 0 });
      gsap.set(brandNameRef.current, { y: 16, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: complete,
      });

      // Rapid smooth count-up and logo entrance
      tl.to(
        counter,
        {
          value: 100,
          duration: 0.5,
          ease: "power2.inOut",
          onUpdate: () => {
            const val = Math.round(counter.value);
            if (counterTextRef.current) {
              counterTextRef.current.textContent = String(val).padStart(3, "0");
            }
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${val / 100})`;
            }
          },
        },
        0
      )
        .to(
          logoMarkRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "expo.out",
          },
          0.05
        )
        .to(
          brandNameRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "expo.out",
          },
          0.1
        )
        // Elegant curtain exit
        .to(
          hudRef.current,
          {
            opacity: 0,
            y: -12,
            duration: 0.2,
            ease: "power2.in",
          },
          0.55
        )
        .add(() => {
          setPreloaderDone(true);
          bumpEnterCycle();
        })
        .to(
          topCurtainRef.current,
          {
            yPercent: -100,
            duration: 0.45,
            ease: "expo.inOut",
          },
          "<"
        )
        .to(
          bottomCurtainRef.current,
          {
            yPercent: 100,
            duration: 0.45,
            ease: "expo.inOut",
          },
          "<"
        );
    }, rootRef);

    return () => {
      window.clearTimeout(hardTimeout);
      ctx.revert();
    };
  }, [pathname, setPreloaderDone, bumpEnterCycle]);

  if (!shouldRender) return null;

  return (
    <div
      id="digit-preloader"
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[var(--z-preloader)] pointer-events-auto select-none overflow-hidden"
    >
      {/* Top Curtain Half */}
      <div
        ref={topCurtainRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
      />
      {/* Bottom Curtain Half */}
      <div
        ref={bottomCurtainRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--bg-primary)]"
      />

      {/* Centered Brand HUD */}
      <div
        ref={hudRef}
        className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-8 md:px-14 md:py-12"
      >
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
          <span>{SITE.brandUpper}</span>
          <span>Independent Creative &amp; Digital Studio</span>
        </div>

        <div className="my-auto flex flex-col items-center gap-7">
          {/* Digit Studio Geometric Mark */}
          <div className="relative flex flex-col items-center gap-5">
            <svg
              ref={logoMarkRef}
              viewBox="0 0 100 100"
              width="90"
              height="90"
              className="overflow-visible"
            >
              <rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="20"
                fill="none"
                stroke="#F5F2ED"
                strokeOpacity="0.15"
                strokeWidth="1.5"
              />
              {/* Distinctive Geometric D with Crimson Dot */}
              <path
                d="M32 24 h20 c18 0 28 11 28 26 s-10 26 -28 26 H32 V24 z m14 13 v26 h6 c8 0 13 -4 13 -13 s-5 -13 -13 -13 h-6 z"
                fill="#8B0D1A"
              />
              <rect x="68" y="18" width="8" height="8" fill="#8B0D1A" />
            </svg>

            <div
              ref={brandNameRef}
              className="flex items-center gap-3 font-display text-2xl sm:text-3xl font-bold uppercase tracking-[0.24em] text-[var(--text-primary)]"
            >
              <span>DIGIT</span>
              <span className="text-[var(--accent)] font-normal italic font-serif" style={{ fontFamily: "var(--font-editorial)" }}>
                STUDIO
              </span>
            </div>
          </div>

          {/* Restrained Crimson Progress Rail */}
          <div className="w-full max-w-sm space-y-2.5">
            <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              <span>Initializing</span>
              <span
                ref={counterTextRef}
                className="font-display tabular-nums text-base sm:text-lg font-bold text-[var(--text-primary)]"
              >
                000
              </span>
            </div>
            <div className="relative h-[2px] w-full overflow-hidden bg-white/10 rounded-full">
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-[var(--accent)]"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)]">
          <span>{SITE.timezoneNote}</span>
          <span>Founder-Led Studio</span>
        </div>
      </div>
    </div>
  );
}
