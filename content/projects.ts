export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: "Brand identity" | "Websites" | "AI video & animation";
  sector: string;
  clientLabel: string;
  timeline: string;
  summary: string;
  context: string;
  problem: string;
  approach: string;
  result: string;
  keyOutcomes: string[];
  deliverables: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nectar-tea",
    title: "Nectar Botanical Tea",
    subtitle: "Brand identity and packaging hierarchy for an organic single-origin tea company.",
    category: "Brand identity",
    sector: "Specialty Consumer Goods",
    clientLabel: "Studio project",
    timeline: "3 weeks",
    summary:
      "A complete visual identity system and tactile packaging architecture designed for sustainable retail display.",
    context:
      "Specialty beverage brands often default to minimal white pharmaceutical packaging or cluttered heritage patterns. Nectar needed an identity that felt rooted in soil and plant medicine while remaining modern on shelves.",
    problem:
      "How to communicate single-origin provenance, tasting notes, and ethical harvesting across six product varieties without overwhelming the packaging face.",
    approach:
      "Created a distinctive serif wordmark paired with an earth-toned secondary palette and structured grid layouts for carton labels. Every variety features color-coded typography and tactile blind deboss specifications for local box printing.",
    result:
      "A cohesive 6-sku packaging suite, brand manual, social launch assets, and print-ready carton die lines.",
    keyOutcomes: [
      "Unified 6 product varieties under a single packaging system",
      "Ready-to-print vector die lines and color specifications",
      "One-page operational guidelines for in-house staff",
    ],
    deliverables: [
      "Custom wordmark & seal",
      "Carton packaging die lines",
      "Brand guidelines booklet",
      "Social media templates",
    ],
  },
  {
    slug: "ardent-advisory",
    title: "Ardent Advisory",
    subtitle: "High-performance website and client inquiry portal for a boutique corporate consultancy.",
    category: "Websites",
    sector: "Professional Services",
    clientLabel: "Studio project",
    timeline: "4 weeks",
    summary:
      "A calm, typography-led website built with clean Next.js code, loading in under two seconds on a standard 4G phone.",
    context:
      "Ardent works with mid-market family offices and growth enterprises. Their previous site was built on a bloated template that took six seconds to render on mobile devices and discouraged serious inquiries.",
    problem:
      "Potential clients arriving on mobile were greeted with broken layout shifts, unreadable font sizes, and a confusing seven-page contact maze.",
    approach:
      "Restructured the firm's advisory pillars into a clear four-page flow. Built from scratch with semantic HTML and vanilla CSS tokens, prioritizing readable typography, zero layout shift, and a single-step confidential inquiry route.",
    result:
      "Mobile Lighthouse score improved to 99, Time to Interactive dropped to 0.8 seconds, and the inquiry flow reduced friction for busy executives.",
    keyOutcomes: [
      "Sub-second page loads on throttled 4G connections",
      "Zero cumulative layout shift (CLS: 0.00)",
      "Accessible inquiry form with automated email notification",
    ],
    deliverables: [
      "Information architecture",
      "Responsive UI design",
      "Custom Next.js front-end build",
      "Turnstile spam protection",
    ],
  },
  {
    slug: "lumina-workspace",
    title: "Lumina Workspace",
    subtitle: "Scripted AI video teaser and product announcement for an ergonomic hardware concept.",
    category: "AI video & animation",
    sector: "Consumer Hardware",
    clientLabel: "Studio project",
    timeline: "8 business days",
    summary:
      "A cinematic 30-second synthetic product reveal and vertical social cutdowns created without physical film crews.",
    context:
      "Hardware startups face a common chicken-and-egg challenge: they need compelling video to validate market interest and announce launch dates before spending six figures on injection molds and physical sets.",
    problem:
      "Traditional studio filming with cranes, studio lighting, and post-production would cost upwards of $15,000 and take two months to coordinate.",
    approach:
      "Drafted a tightly timed script focused on material details, desk context, and ergonomic adjustment. Generated photorealistic camera sweeps and shadow interplay using modern AI video diffusion models, followed by professional voiceover matching and audio mixing.",
    result:
      "Delivered a 16:9 widescreen announcement video and two 9:16 vertical reels for social ads within eight working days.",
    keyOutcomes: [
      "Complete launch asset suite delivered in 8 business days",
      "Multi-format delivery (16:9 master, 9:16 reels, square cuts)",
      "Embedded captions and licensed ambient soundtrack",
    ],
    deliverables: [
      "30-second announcement film",
      "2 vertical cutdowns for Instagram/TikTok",
      "Voiceover track and sound mix",
      "Web-ready compressed video assets",
    ],
  },
];
