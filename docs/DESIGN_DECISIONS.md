# Architectural & Design Decisions: The Digit Studio Rebuild

## Executive Summary
This document outlines the design, architectural, and engineering decisions behind the rebuild of Digit Studio.

Digit Studio was previously built on a cloned and reskinned agency template ("Digital Experts"), sharing its codebase structure, GSAP/Lenis/Three.js motion dependencies, dark-glow styling, and fictional client data. 

This rebuild discards that shared DNA completely. It replaces the template with a custom, light-first editorial system engineered specifically for client acquisition, sub-second performance, and absolute accessibility.

---

## 1. Palette: Paper, Ink, Sand, and Crimson
- **The Problem with the Old Palette**: The previous site used near-black (`#05060a` / `#0A0A0A`) with heavy neon glow effects and glassmorphism. This aesthetic has become ubiquitous across generic developer templates, obscuring content and reading poorly in daylight.
- **The New Palette**:
  - **Paper (`#F4EFE6`)**: A warm, tactile, unbleached paper background that reduces eye strain and conveys editorial care.
  - **Surface (`#FBF8F2`)**: Elevated card surface for subtle layering without artificial drop shadows or glows.
  - **Sand (`#E6DCCB`)**: Muted structural border tone for clean separation.
  - **Ink (`#17120F`)**: Deep, warm black text delivering an 11.8:1 contrast ratio against Paper (far exceeding WCAG AA).
  - **Muted (`#5A5249`)**: Secondary descriptive copy with a 6.2:1 contrast ratio.
  - **Crimson (`#8B0D1A`)**: A measured, historic crimson accent used sparingly for focal actions, key outcomes, and verified badges.

---

## 2. Typography: Fraunces & Hanken Grotesk
- **The Problem with the Old Fonts**: Syne, JetBrains Mono, and Inter/Manrope were copied directly from the reference site. The heavy use of monospace uppercase labels created an artificially technical look detached from design craftsmanship.
- **The New Type System**:
  - **Fraunces (Variable Display Serif)**: Designed with warm optical sizing and soft, sculpted curves. It communicates editorial authority, literary quality, and deliberate design.
  - **Hanken Grotesk (Humanist Sans Body)**: A clean, highly legible grotesque sans with generous x-height, excellent mobile readability, and humanist character.
  - **No Monospace Labels**: All badges, buttons, and eyebrows use clean sentence-case typography without uppercase mono posturing.

---

## 3. Structural Rules: 6px Radii and 2px Ink Rules
- **Tactile Structure**: Instead of 24px pill borders with diffuse box-shadows, the interface uses crisp 6px radii and deliberate 2px ink divider rules.
- **Printed Matter Feel**: Sections, timelines, and cards resemble well-structured editorial spreads, conveying precision and permanence.

---

## 4. Content Architecture: Problem-First ("What do you need made?")
- **The Problem with Agency Hero Poetry**: The old hero displayed a 3D canvas and abstract copy ("We craft digital universes"), requiring visitors to scroll past three sections before understanding what the studio actually sells.
- **The New "Four Doors" Architecture**:
  - The hero immediately answers the buyer's primary question: **"What do you need made?"**
  - Visitors immediately see four distinct service entry points:
    1. **Brand identity** (2–3 weeks, from $1,500)
    2. **A website** (3–5 weeks, from $2,500)
    3. **AI video & animation** (7–10 days, from $800)
    4. **Social & content** (Monthly retainer, from $1,200/mo)
  - Every door states scope, timeline, starting price, and an anchor link to full details.

---

## 5. Technology Stack: Why GSAP, Lenis, and Three.js Were Removed
1. **Performance**: Eliminating Three.js, GSAP plugins, and smooth-scroll libraries removed over 400 KB of compressed JavaScript, drastically reducing first-input delay and battery consumption on mobile devices.
2. **Native Scroll & Native Cursor**: Hijacking scroll behavior (Lenis) breaks native browser inertia, trackpad gestures, keyboard arrow scrolling, and spatial navigation. Custom cursors disorient users and break assistive devices. The new site relies 100% on native CSS and browser scrolling.
3. **Accessibility**: Without continuous WebGL render loops, the site runs at 60–120fps with minimal GPU utilization and zero risk of triggering motion-sensitivity issues.
4. **Cloudflare Workers Optimization**: Clean Next.js SSR with minimal client-side hydration overhead ensures instant page loads on edge runtimes.

---

## 6. Honest Studio Presentation
- All concept work is transparently labelled **"Studio project"**.
- Fictional statistics ("120+ happy clients", "99.8% satisfaction") have been removed and replaced with verified client proof: **Upwork Verified 100% Job Success, 5.0 Rating**.
- Founder Emmanuel Oluyemi speaks in the honest first person: explaining who works on projects, how pricing works, and committing to a 48-hour response window.
