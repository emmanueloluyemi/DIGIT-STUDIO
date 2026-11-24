"use client";

import React, { Suspense, useLayoutEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ensureGsapRegistered, Flip, gsap, ScrollTrigger } from "@/lib/gsap";
import {
  PROJECT_CATEGORIES,
  PROJECT_SECTORS,
  PROJECTS,
  type ProjectCategory,
  type ProjectSector,
} from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { TransitionLink } from "@/components/motion/PageTransitionProvider";
import { useMediaCapabilities } from "@/hooks/useMediaCapabilities";

type FilterCategory = "All Work" | ProjectCategory;
type ViewMode = "grid" | "list";

function GalleryInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialCat = (searchParams?.get("category") as FilterCategory) || "All Work";
  const initialSector = (searchParams?.get("sector") as ProjectSector) || "All Sectors";
  const initialView = (searchParams?.get("view") as ViewMode) || "grid";

  const [activeCategory, setActiveCategory] = useState<FilterCategory>(
    PROJECT_CATEGORIES.includes(initialCat) ? initialCat : "All Work"
  );
  const [activeSector, setActiveSector] = useState<ProjectSector>(
    PROJECT_SECTORS.includes(initialSector) ? initialSector : "All Sectors"
  );
  const [viewMode, setViewMode] = useState<ViewMode>(
    initialView === "list" ? "list" : "grid"
  );

  const gridRef = useRef<HTMLDivElement>(null);
  const flipStateRef = useRef<Flip.FlipState | null>(null);
  const { prefersReducedMotion } = useMediaCapabilities();

  const updateUrl = (cat: FilterCategory, sec: ProjectSector, view: ViewMode) => {
    const params = new URLSearchParams();
    if (cat !== "All Work") params.set("category", cat);
    if (sec !== "All Sectors") params.set("sector", sec);
    if (view !== "grid") params.set("view", view);
    const qs = params.toString();
    const target = qs ? `${pathname}?${qs}` : pathname;
    router.replace(target, { scroll: false });
  };

  const handleCategoryChange = (cat: FilterCategory) => {
    if (cat === activeCategory) return;
    if (!prefersReducedMotion && gridRef.current) {
      ensureGsapRegistered();
      const items = gridRef.current.querySelectorAll<HTMLElement>("[data-flip-card]");
      if (items.length) {
        flipStateRef.current = Flip.getState(items);
      }
    }
    setActiveCategory(cat);
    updateUrl(cat, activeSector, viewMode);
  };

  const handleSectorChange = (sec: ProjectSector) => {
    if (sec === activeSector) return;
    if (!prefersReducedMotion && gridRef.current) {
      ensureGsapRegistered();
      const items = gridRef.current.querySelectorAll<HTMLElement>("[data-flip-card]");
      if (items.length) {
        flipStateRef.current = Flip.getState(items);
      }
    }
    setActiveSector(sec);
    updateUrl(activeCategory, sec, viewMode);
  };

  const handleViewToggle = (mode: ViewMode) => {
    if (mode === viewMode) return;
    setViewMode(mode);
    updateUrl(activeCategory, activeSector, mode);
  };

  useLayoutEffect(() => {
    const state = flipStateRef.current;
    const grid = gridRef.current;
    if (!state || !grid) return;

    flipStateRef.current = null;
    ensureGsapRegistered();

    const items = grid.querySelectorAll<HTMLElement>("[data-flip-card]");
    if (!items.length) return;

    Flip.from(state, {
      targets: items,
      duration: 0.62,
      stagger: 0.04,
      ease: "expo.out",
      absolute: true,
      nested: true,
      onEnter: (elements) => gsapFade(elements, 0, 1, 0.94, 1),
      onLeave: (elements) => gsapFade(elements, 1, 0, 1, 0.94),
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }, [activeCategory, activeSector, viewMode]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCat =
        activeCategory === "All Work" || p.category === activeCategory;
      const matchSec =
        activeSector === "All Sectors" || p.sector === activeSector;
      return matchCat && matchSec;
    });
  }, [activeCategory, activeSector]);

  return (
    <div className="space-y-8 sm:space-y-12 overflow-x-clip">
      {/* Controls Bar: Category Filter + Sector Dropdown + View Toggle */}
      <div className="flex flex-col gap-5 border-y border-[var(--border-subtle)] py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter projects by discipline"
          className="flex flex-wrap items-center gap-2"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-3.5 sm:px-4 text-xs font-medium transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] font-semibold"
                    : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Sector Filter & View Mode Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Sector Selector */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
            <label htmlFor="sector-select" className="sr-only">Filter by sector</label>
            <span className="text-[var(--text-muted)]">Sector:</span>
            <select
              id="sector-select"
              value={activeSector}
              onChange={(e) => handleSectorChange(e.target.value as ProjectSector)}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
            >
              {PROJECT_SECTORS.map((sec) => (
                <option key={sec} value={sec} className="bg-[var(--bg-elevated)] text-[var(--text-primary)]">
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Grid / List Mode Toggle */}
          <div className="inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-0.5" role="group" aria-label="View mode">
            <button
              type="button"
              aria-label="Grid view"
              onClick={() => handleViewToggle("grid")}
              className={`rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                viewMode === "grid"
                  ? "bg-[var(--accent)] text-[var(--accent-ink)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              aria-label="List view"
              onClick={() => handleViewToggle("list")}
              className={`rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                viewMode === "list"
                  ? "bg-[var(--accent)] text-[var(--accent-ink)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-12 text-center">
          <p className="text-lead text-[var(--text-secondary)]">No case studies match this combined filter.</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All Work");
              setActiveSector("All Sectors");
              updateUrl("All Work", "All Sectors", viewMode);
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-[var(--accent-ink)]"
          >
            Reset Filters
          </button>
        </div>
      ) : null}

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div
          ref={gridRef}
          className="relative grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.slug}
              data-flip-card
              data-flip-id={project.slug}
              className="block"
            >
              <ProjectCard
                project={project}
                index={idx}
                staggerOffset={false}
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      ) : (
        /* List View (Editorial Row Index) */
        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {filteredProjects.map((project) => (
            <TransitionLink
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-4 py-6 transition-all sm:flex-row sm:items-center sm:justify-between sm:py-7 hover:bg-[var(--bg-elevated)]/60 px-3 -mx-3 rounded-xl"
            >
              <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs text-[var(--text-muted)] w-6 shrink-0">
                  {project.index}
                </span>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 font-mono text-[10px] uppercase text-[var(--text-secondary)]">
                      {project.sector}
                    </span>
                    {project.isConcept ? (
                      <span className="rounded-full border border-[var(--border-subtle)] bg-black/40 px-2 py-0.5 font-mono text-[9px] uppercase text-[var(--text-muted)]">
                        Concept
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-1 max-w-2xl">
                    {project.blurb || project.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 sm:justify-end shrink-0 pl-10 sm:pl-0">
                <div className="hidden lg:flex items-center gap-2">
                  {project.services?.slice(0, 2).map((s) => (
                    <span key={s} className="font-mono text-[11px] text-[var(--text-muted)]">
                      {s} ·
                    </span>
                  ))}
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">{project.year}</span>
                </div>
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] transition-all group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]"
                >
                  ↗
                </span>
              </div>
            </TransitionLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function WorkGalleryClient() {
  return (
    <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-[var(--bg-elevated)]" />}>
      <GalleryInner />
    </Suspense>
  );
}

function gsapFade(
  elements: Element[],
  fromOpacity: number,
  toOpacity: number,
  fromScale: number,
  toScale: number
) {
  return gsap.fromTo(
    elements,
    { opacity: fromOpacity, scale: fromScale },
    {
      opacity: toOpacity,
      scale: toScale,
      duration: 0.45,
      ease: "power3.out",
      clearProps: "scale,opacity",
    }
  );
}
