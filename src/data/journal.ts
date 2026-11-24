export interface JournalPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "Creative Technology" | "Engineering" | "Design & Craft";
  excerpt: string;
  tags: string[];
  sections: {
    heading: string;
    body: string[];
    codeSnippet?: {
      language: string;
      code: string;
    };
  }[];
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "how-the-hero-3d-scene-is-built",
    title: "Building the Hero 3D Monolith: WebGL, Procedural Shaders & Mobile Performance",
    subtitle: "A deep dive into creating an interactive obsidian & crimson sculpture that stays at 60fps across low-power mobile devices.",
    date: "November 2026",
    readTime: "6 min read",
    category: "Creative Technology",
    excerpt: "How we balanced heavy physical transmission materials, dual-axis pointer damping, and strict GPU lifecycle safety on modern web browsers.",
    tags: ["Three.js", "WebGL", "Performance", "Shaders"],
    sections: [
      {
        heading: "1. The Conceptual Geometry: Monolith Meets Refractive Core",
        body: [
          "When directing the visual identity of Digit Studio, we wanted a hero element that immediately announced our technical craft without resorting to generic 3D asset libraries. The centerpiece is a dual-layered sculpture: a faceted obsidian icosahedron framed by a crimson wireframe cage, sheltering a refractive crimson octahedron core.",
          "Around this core rotate two concentric kinetic rings and six satellite crystal facets that orbit on sinusoidal paths. Every coordinate and geometry is procedurally created in Three.js without downloading megabyte-sized GLTF or OBJ models, keeping the asset payload under 10 KB."
        ],
      },
      {
        heading: "2. The Transmission Bottleneck: Desktop vs Low-Power Mobile",
        body: [
          "MeshPhysicalMaterial with transmission, roughness, and index-of-refraction (IOR) looks breathtaking on desktop GPUs with dedicated VRAM. However, on battery-constrained mobile phones, rendering multi-bounce transmission on every frame can quickly trigger thermal throttling.",
          "To solve this, we implemented an adaptive hardware capability probe. We check window width and navigator.hardwareConcurrency. If a device has fewer than 4 cores or runs on a compact screen, the core switches to a simplified MeshStandardMaterial with calibrated metalness and roughness."
        ],
        codeSnippet: {
          language: "typescript",
          code: `const isLowPower = isMobile || (typeof navigator !== "undefined" && Boolean(navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));

const coreMat = isLowPower
  ? new THREE.MeshStandardMaterial({
      color: 0x8b0d1a,
      roughness: 0.2,
      metalness: 0.35,
      transparent: true,
      opacity: 0.88,
    })
  : new THREE.MeshPhysicalMaterial({
      color: 0x8b0d1a,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.52,
      thickness: 1.2,
    });`
        }
      },
      {
        heading: "3. Power Conservation & Context Loss Resilience",
        body: [
          "A major flaw in many 3D websites is running the requestAnimationFrame loop constantly—even when the canvas has scrolled off-screen or the visitor switched browser tabs. This drains battery and makes mobile devices run hot.",
          "We paired an IntersectionObserver (with a 5% threshold) and the document visibilitychange API. Whenever the canvas is out of view or the tab is hidden, the render call is bypassed entirely.",
          "Furthermore, we added listeners for webglcontextlost and webglcontextrestored. If the OS reclaims GPU memory while the browser is in the background, the context doesn't crash the tab—it cleanly resumes when the user returns."
        ],
      },
      {
        heading: "4. Memory Lifecycle & Explicit Disposal",
        body: [
          "In Single Page Applications (SPAs) like Next.js, switching routes does not destroy the WebGL canvas memory automatically. If geometries, materials, and textures are not explicitly disposed, memory leaks compound with every page transition.",
          "In the component unmount hook, we systematically invoke .dispose() on every geometry, every material (including multi-material arrays), and the renderer itself, ensuring zero dangling buffers."
        ],
      }
    ],
  },
  {
    slug: "making-gsap-lenis-fast-on-mobile",
    title: "Making GSAP ScrollTrigger & Lenis Fast on Touch Devices",
    subtitle: "Architectural strategies for maintaining 60fps smooth scroll without fighting native mobile inertia and gesture velocity.",
    date: "November 2026",
    readTime: "5 min read",
    category: "Engineering",
    excerpt: "Why syncTouch breaks native mobile behavior, how to synchronize Lenis with GSAP's internal ticker, and managing scrollbar-gutter stability.",
    tags: ["GSAP", "Lenis", "Mobile Web", "Animation"],
    sections: [
      {
        heading: "1. The Desktop vs Mobile Scrolling Duality",
        body: [
          "Smooth scrolling on desktop (fine-pointer mouse wheel) adds an editorial, fluid weight that elevates agency portfolios. But on touchscreens (smartphones and tablets), users have developed deep muscle memory for native iOS and Android inertia scrolling.",
          "When smooth scroll libraries hijack touch events via syncTouch: true, the result often feels sluggish or disconnected from the finger velocity. The golden rule is: smooth the wheel on desktop, but allow native touch gestures on mobile."
        ],
        codeSnippet: {
          language: "typescript",
          code: `const lenis = new Lenis({
  lerp: isDesktopFinePointer ? 0.1 : 0.12,
  smoothWheel: true,
  syncTouch: false, // Prevents fighting native touch momentum
  touchMultiplier: 1,
  wheelMultiplier: 1,
});`
        }
      },
      {
        heading: "2. Single Source of Truth Ticker Synchronization",
        body: [
          "If Lenis runs its own requestAnimationFrame loop while GSAP runs another, micro-jitter occurs whenever ScrollTrigger tries to calculate pinned section offsets. They fall out of phase by a fraction of a millisecond.",
          "The solution is to drive Lenis directly through GSAP's internal ticker via gsap.ticker.add((time) => lenis.raf(time * 1000)). We also set gsap.ticker.lagSmoothing(0) so GSAP doesn't artificially jump frames when waking up from background tabs."
        ],
      },
      {
        heading: "3. Layout Shift Prevention with scrollbar-gutter",
        body: [
          "When opening full-screen navigation menus or initiating route transitions, developers often lock scrolling by setting overflow: hidden on the body or document. On Windows and Linux browsers with classical scrollbars, this suddenly removes the 15px scrollbar track, causing the entire page layout to visibly jump to the right.",
          "By applying scrollbar-gutter: stable to the html root element, the browser permanently reserves space for the scrollbar track whether scrolling is locked or active, completely eradicating horizontal layout shift."
        ],
      },
      {
        heading: "4. Accessibility: Honoring prefers-reduced-motion",
        body: [
          "For visitors experiencing vestibular disorders, smooth scroll damping and scrubbed parallax can cause disorientation or nausea. We hook into the window.matchMedia('(prefers-reduced-motion: reduce)') capability.",
          "When enabled, Lenis is immediately destroyed, native browser scrolling is restored, and all GSAP ScrollTrigger tweens resolve to their terminal state with zero duration."
        ],
      }
    ],
  },
];
