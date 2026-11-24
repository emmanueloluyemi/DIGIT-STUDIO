export type ProjectCategory =
  | "Branding"
  | "Development"
  | "AI Video"
  | "Marketing"
  | "Content";

export interface ProjectItem {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  serviceSlug: string;
  services: string[];
  sector: string;
  blurb: string;
  type: string;
  isConcept?: boolean;
  year: string;
  client: string;
  engagementModel: "Solo" | "Solo + Team";
  role: string;
  tools: string[];
  timeline: string;
  posterImage: string;
  mobilePosterImage?: string;
  videoPreview?: string;
  accentHue: string;
  challenge: string;
  process: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  galleryImages: string[];
}

export const PROJECT_CATEGORIES: Array<"All Work" | ProjectCategory> = [
  "All Work",
  "Branding",
  "Development",
  "AI Video",
  "Marketing",
  "Content",
];

export const PROJECT_SECTORS = [
  "All Sectors",
  "Fintech",
  "Luxury Skincare",
  "Hardware & AI",
  "Automation & SaaS",
  "Specialty Coffee",
] as const;

export type ProjectSector = (typeof PROJECT_SECTORS)[number];

/**
 * Single source of truth for portfolio case studies.
 * Sample projects are transparently flagged `isConcept: true` until replaced by NDA-cleared client case studies.
 */
export const PROJECTS: ProjectItem[] = [
  {
    slug: "kinetik-pay",
    index: "01",
    title: "Kinetik Pay",
    tagline: "Custom Next.js fintech launch site & interactive pricing flow (Studio Concept).",
    category: "Development",
    serviceSlug: "web-design-development",
    services: ["Web Design", "Development", "Design System"],
    sector: "Fintech",
    blurb: "High-performance treasury & invoicing platform built with Next.js, sub-second edge routing, and interactive fee models.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Fintech",
    engagementModel: "Solo",
    role: "Lead Designer & Developer",
    tools: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/web-platform.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Demonstrating how a technical treasury product can present transparent pricing and conversion-focused messaging without template clutter or slow mobile load times.",
    process: [
      "Structured the landing page around immediate clarity, proof points and direct call/demo actions.",
      "Built an interactive fee-comparison layout with clean Figma-to-React component tokens.",
      "Engineered responsive motion choreography with GSAP ScrollTrigger and mobile performance guardrails.",
    ],
    results: [
      "Concept blueprint showing sub-second static page delivery and crisp mobile typography.",
      "Full production client case study details available on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Stack", value: "Next.js" },
      { label: "Model", value: "Solo" },
    ],
    galleryImages: [
      "/images/visuals/web-platform.svg",
      "/images/visuals/custom-solutions.svg",
    ],
  },
  {
    slug: "vespera-atelier",
    index: "02",
    title: "Vespera Atelier",
    tagline: "Botanical brand identity, packaging direction & luxury storefront (Studio Concept).",
    category: "Branding",
    serviceSlug: "branding-design",
    services: ["Brand Identity", "Packaging Design", "E-Commerce"],
    sector: "Luxury Skincare",
    blurb: "Monochrome botanical identity, tactile packaging specifications and a bespoke high-conversion direct storefront.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Skincare",
    engagementModel: "Solo + Team",
    role: "Creative Direction, Identity & Web Build",
    tools: ["Figma", "Brand Guidelines", "Design System", "Custom CSS"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/branding-system.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Crafting a cohesive identity system and direct-to-consumer storefront that looks bespoke while remaining straightforward for an internal founder team to update.",
    process: [
      "Defined monochrome packaging typography, embossed box specs and visual direction.",
      "Paired brand collateral with a tailored storefront using bespoke layout styling.",
      "Documented reusable brand guidelines and social launch templates.",
    ],
    results: [
      "Unified brand identity across packaging, social assets and editable storefront.",
      "Full client branding examples shared on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Design", value: "Bespoke System" },
      { label: "Model", value: "Team" },
    ],
    galleryImages: [
      "/images/visuals/branding-system.svg",
      "/images/visuals/editorial-content.svg",
    ],
  },
  {
    slug: "aether-robotics",
    index: "03",
    title: "Aether Robotics",
    tagline: "Scripted AI video launch teaser & multi-format social ad suite (Studio Concept).",
    category: "AI Video",
    serviceSlug: "ai-video-animation",
    services: ["AI Video Production", "Motion Graphics", "Paid Social Ads"],
    sector: "Hardware & AI",
    blurb: "Studio-grade synthetic product teaser and 9:16 vertical paid social cutdown suite delivered in days without physical shoots.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Hardware",
    engagementModel: "Solo + Team",
    role: "Creative Director & AI Video Producer",
    tools: ["AI Video Tools", "Storyboard", "Voiceover", "Captions"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/ai-production.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Producing studio-grade product launch video and paid social cutdowns quickly without coordinating a physical film crew or location shoot.",
    process: [
      "Drafted script, shot pacing and visual storyboard aligned with brand lighting.",
      "Generated core visual scenes and voiceover tracks using modern AI video pipelines.",
      "Edited, captioned and exported native 16:9 and 9:16 cuts for web and social.",
    ],
    results: [
      "Multi-aspect launch video workflow ready for Instagram, TikTok, YouTube and paid ads.",
      "Additional AI video reels shared on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Formats", value: "16:9 & 9:16" },
      { label: "Model", value: "Team" },
    ],
    galleryImages: [
      "/images/visuals/ai-production.svg",
      "/images/visuals/web-platform.svg",
    ],
  },
  {
    slug: "nexaflow-automation",
    index: "04",
    title: "NexaFlow Growth",
    tagline: "Multi-channel marketing campaign, social strategy & automated funnel (Studio Concept).",
    category: "Marketing",
    serviceSlug: "social-media-management",
    services: ["Marketing Strategy", "Paid Ads Creative", "Conversion Funnels"],
    sector: "Automation & SaaS",
    blurb: "Unified multi-channel acquisition funnel pairing narrative positioning hooks with conversion-engineered ad creatives.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Marketing & Funnels",
    engagementModel: "Solo",
    role: "Growth & Marketing Strategist",
    tools: ["Social Strategy", "Campaign Creative", "Conversion Funnels", "Analytics"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/marketing-campaign.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Aligning fragmented marketing creatives into an intentional multi-channel campaign that clearly communicates value and improves acquisition efficiency.",
    process: [
      "Established core positioning hooks, content pillars and paid ad creative variations.",
      "Designed high-impact visual assets optimized for platform-specific consumption habits.",
      "Mapped conversion flow from ad impression to landing page enquiry.",
    ],
    results: [
      "End-to-end campaign architecture driving clear engagement and measurable pipeline results.",
      "Custom campaign case studies available on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Channels", value: "Meta / LinkedIn" },
      { label: "Model", value: "Solo" },
    ],
    galleryImages: [
      "/images/visuals/marketing-campaign.svg",
      "/images/visuals/branding-system.svg",
    ],
  },
  {
    slug: "sora-roastery",
    index: "05",
    title: "Sora Editorial",
    tagline: "Narrative storytelling, brand publications & educational digital content (Studio Concept).",
    category: "Content",
    serviceSlug: "content-creation",
    services: ["Editorial Content", "Brand Storytelling", "Video Direction"],
    sector: "Specialty Coffee",
    blurb: "Multi-chapter digital publications and educational video storyboards establishing cultural presence and brand authority.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Brand Publication",
    engagementModel: "Solo + Team",
    role: "Editorial Lead & Content Strategist",
    tools: ["Editorial Direction", "Copywriting", "Storyboarding", "Video Production"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/editorial-content.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Creating engaging digital editorial content and educational narrative video that builds brand authority and commands attention.",
    process: [
      "Drafted comprehensive content strategy, brand voice guidelines and editorial narrative arcs.",
      "Produced multi-chapter digital story assets designed for desktop and mobile reading.",
      "Structured video storyboard sequences paired with clean typographic treatments.",
    ],
    results: [
      "High-craft content ecosystem providing a sustainable pipeline of meaningful brand storytelling.",
      "Client publication samples shared on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Format", value: "Multi-Format" },
      { label: "Model", value: "Team" },
    ],
    galleryImages: [
      "/images/visuals/editorial-content.svg",
      "/images/visuals/branding-system.svg",
    ],
  },
  {
    slug: "velo-mobile-app",
    index: "06",
    title: "Velo Modern Platform",
    tagline: "High-performance web architecture, custom dashboard & API integrations (Studio Concept).",
    category: "Development",
    serviceSlug: "web-design-development",
    services: ["Platform Architecture", "Dashboard UI", "API Integration"],
    sector: "Fintech",
    blurb: "High-velocity web architecture with 60fps micro-interactions, responsive data dashboards, and edge-cached APIs.",
    type: "Studio Concept",
    isConcept: true,
    year: "2026",
    client: "Studio Concept · Digital Product",
    engagementModel: "Solo + Team",
    role: "Lead Interface Architect & Engineer",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Micro-interactions"],
    timeline: "Concept Case Study",
    posterImage: "/images/visuals/custom-solutions.svg",
    accentHue: "#8B0D1A",
    challenge:
      "Designing and engineering an ultra-responsive web platform with high-velocity data visualisation and seamless micro-interactions.",
    process: [
      "Architected clean component hierarchy using modern TypeScript and Tailwind CSS patterns.",
      "Integrated smooth 60fps micro-animations and gesture-friendly navigation.",
      "Engineered edge-cached API routes with robust sub-second response times.",
    ],
    results: [
      "Resilient web architecture combining editorial aesthetic sophistication with technical power.",
      "Live interactive demos available on request.",
    ],
    metrics: [
      { label: "Status", value: "Concept" },
      { label: "Performance", value: "100 Lighthouse" },
      { label: "Stack", value: "Next.js + TS" },
    ],
    galleryImages: [
      "/images/visuals/custom-solutions.svg",
      "/images/visuals/web-platform.svg",
    ],
  },
];
