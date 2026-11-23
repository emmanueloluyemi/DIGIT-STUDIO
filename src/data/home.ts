export interface StatItem {
  value: number;
  decimals?: number;
  padLength?: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface EngagementModel {
  id: "solo" | "team";
  label: string;
  badge: string;
  headline: string;
  summary: string;
  howItWorks: string[];
  typicalScope: string;
  speedLabel: string;
  idealFor: string;
}

export interface TeamRole {
  title: string;
  focus: string;
  tools: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  country: string;
  projectType: string;
  source: string;
  metaNote?: string;
  price?: string;
}

export interface ToolLogoItem {
  name: string;
  category: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export const HERO_COPY = {
  availabilityLabel: "INDEPENDENT CREATIVE & DIGITAL STUDIO",
  headline: "Ideas deserve better execution.",
  subhead: "Design, technology and visual storytelling come together to help businesses create what is next.",
  primaryCta: "START A PROJECT",
  secondaryCta: "EXPLORE OUR WORK",
  canvasHint: "Interactive 3D Technology Sculpture",
};

export const INTRO_COPY = {
  eyebrow: "01 · Creative Philosophy",
  statement: "Digit Studio brings creative thinking, design expertise and digital execution together. From distinctive brand identities and expressive visual content to responsive websites and AI-powered video, we help businesses transform ideas into meaningful experiences.",
  ctaLabel: "More about Digit Studio",
};

export const FOUNDER_COPY = {
  eyebrow: "04 · Studio Leadership",
  heading: "Independent by design. Collaborative by nature.",
  intro: "Digit Studio is founded by Emmanuel Oluyemi, bringing together creative thinking, design expertise and digital execution to help businesses transform ideas into meaningful experiences.",
  directionNote: "Emmanuel leads every project's creative direction, design integrity and technical standards from inception to handover.",
  collaborationNote: "When project requirements call for specialized disciplines—such as multi-platform engineering or large-scale video campaigns—the studio coordinates trusted, vetted collaborators under single unified creative leadership.",
};

export const STATS: StatItem[] = [
  {
    value: 300,
    padLength: 3,
    suffix: "+",
    label: "People worked with",
    detail: "Founder-reported cumulative client collaborations across independent creative and digital commissions.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Upwork Job Success Score",
    detail: "Top-rated client satisfaction score maintained across verified Upwork client engagements.",
  },
  {
    value: 5,
    decimals: 1,
    suffix: "/5",
    label: "Upwork rating",
    detail: "Five-star average client feedback score across independent design and development contracts.",
  },
];

export const TOOLS_MARQUEE: ToolLogoItem[] = [
  { name: "Next.js", category: "Full-Stack" },
  { name: "React", category: "Interface" },
  { name: "TypeScript", category: "Engineering" },
  { name: "Tailwind CSS", category: "Design Tokens" },
  { name: "GSAP", category: "Motion" },
  { name: "Three.js", category: "3D Visuals" },
  { name: "Figma", category: "UI/UX & Design" },
  { name: "Adobe Creative Suite", category: "Branding" },
  { name: "Runway", category: "AI Video" },
  { name: "HeyGen", category: "AI Media" },
  { name: "After Effects", category: "Motion Design" },
  { name: "WordPress", category: "Web CMS" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    subtitle: "Understanding your intent",
    description: "We dive deep into your business model, target audience, competitive landscape and aesthetic objectives to define clear project criteria.",
    deliverables: [
      "Discovery consultation & requirements audit",
      "Audience, market and competitor benchmarking",
      "Scope, milestones and transparent budget alignment",
    ],
  },
  {
    index: "02",
    title: "Strategy",
    subtitle: "Setting the creative architecture",
    description: "We build the strategic foundation—establishing art direction, user experience frameworks and the technical stack required for scale.",
    deliverables: [
      "Art direction moodboards and style boards",
      "Information architecture and wireframe blueprints",
      "Technical specifications & milestone roadmap",
    ],
  },
  {
    index: "03",
    title: "Creation",
    subtitle: "Designing and engineering",
    description: "Ideas turn into tangible reality. We craft high-fidelity designs, code responsive interfaces, generate cinematic AI media and refine motion choreography.",
    deliverables: [
      "Bespoke brand assets, typography & design tokens",
      "High-performance frontend and backend build",
      "Cinematic video production and motion sequences",
    ],
  },
  {
    index: "04",
    title: "Review & Refinement",
    subtitle: "Precision polish",
    description: "We test across real devices and screen sizes, gathering your direct feedback to hone every visual element, micro-interaction and conversion touchpoint.",
    deliverables: [
      "Cross-browser and mobile responsive testing",
      "Interactive staging review and feedback loops",
      "Performance, typography and accessibility validation",
    ],
  },
  {
    index: "05",
    title: "Delivery",
    subtitle: "Launch & organized handover",
    description: "We deploy the project, hand over clean organized source files and production assets, and provide clear documentation so you move forward with confidence.",
    deliverables: [
      "Production deployment and domain configuration",
      "Complete organized asset packages and vector files",
      "Handover guide and post-launch support recommendations",
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "services",
    tag: "Services",
    question: "What capabilities does Digit Studio offer?",
    answer: "Digit Studio operates across six core creative disciplines: Branding & Graphic Design, Web Design & Development, AI Video & Animation, Social Media & Digital Marketing, Content Creation, and custom multi-disciplinary solutions.",
  },
  {
    id: "team",
    tag: "Studio",
    question: "Who will I be working with directly?",
    answer: "You work directly with founder Emmanuel Oluyemi, who personally oversees creative direction, design standards and project delivery. When a complex scope requires additional specialized disciplines, trusted collaborators are coordinated under the studio's direction.",
  },
  {
    id: "process",
    tag: "Process",
    question: "How does a new project kick off?",
    answer: "Begin with our structured project enquiry form or reach out via WhatsApp. Share your goals, preferred timeline and estimated budget. We will review your brief and schedule an initial discovery conversation before any commitment.",
  },
  {
    id: "pricing",
    tag: "Pricing",
    question: "How does project pricing work?",
    answer: "Every project is priced transparently based on scope, deliverables and technical complexity. Use the enquiry form to indicate your budget tier so we can propose the best approach for your investment.",
  },
  {
    id: "confidentiality",
    tag: "Confidentiality",
    question: "How do you handle confidential client projects?",
    answer: "Client confidentiality is strictly protected. Work governed by NDAs or client privacy requests is never published publicly or shared without prior written consent.",
  },
  {
    id: "timelines",
    tag: "Timelines",
    question: "What are typical project timelines?",
    answer: "Focused branding systems or landing pages typically take 2 to 3 weeks. Comprehensive web platforms, multi-page builds or complex video campaigns typically take 4 to 8 weeks depending on scope.",
  },
];

export const ENGAGEMENT_MODELS: Record<"solo" | "team", EngagementModel> = {
  solo: {
    id: "solo",
    label: "Founder-led",
    badge: "Direct collaboration",
    headline: "Work directly with the founder.",
    summary: "Your project is guided by Emmanuel Oluyemi, with direct communication, clear expectations and close attention to the details that matter to your business.",
    howItWorks: [
      "Discuss your goals directly with the founder.",
      "Agree on scope, deliverables, timeline and budget before work begins.",
      "Receive clear updates and a considered handover.",
    ],
    typicalScope: "Brand identities, websites, AI videos, creative campaigns and focused digital projects.",
    speedLabel: "Direct communication and focused execution",
    idealFor: "Founders and businesses that value a direct working relationship.",
  },
  team: {
    id: "team",
    label: "Collaborative studio",
    badge: "Trusted specialists when needed",
    headline: "The right creative capabilities around one clear direction.",
    summary: "For projects that require multiple disciplines, Digit Studio can coordinate trusted creative and technical collaborators while maintaining a clear point of contact and consistent creative direction.",
    howItWorks: [
      "The project is scoped and directed through Digit Studio.",
      "Relevant collaborators are brought in when the scope requires them.",
      "Communication, quality checks and delivery remain coordinated.",
    ],
    typicalScope: "Multi-page websites, integrated brand launches, video campaigns and projects spanning several creative disciplines.",
    speedLabel: "Flexible collaboration around the project scope",
    idealFor: "Businesses with projects that need more than one specialist discipline.",
  },
};

export const TEAM_ROLES: TeamRole[] = [
  {
    title: "Brand & Graphic Design",
    focus: "Identity systems, visual communication and marketing design",
    tools: "Branding · Design",
  },
  {
    title: "Web Design & Development",
    focus: "Responsive websites, custom interfaces and web applications",
    tools: "Next.js · React · Web",
  },
  {
    title: "AI Video & Animation",
    focus: "Product videos, explainers, 2D and 3D motion design",
    tools: "AI Video · 2D · 3D",
  },
  {
    title: "Social Media & Marketing",
    focus: "Content planning, platform management and campaign execution",
    tools: "Social · Strategy",
  },
  {
    title: "Content Creation",
    focus: "Educational, promotional and brand-led digital storytelling",
    tools: "Script · Video · Edit",
  },
];

// Strictly empty until approved client reviews are available
export const TESTIMONIALS: TestimonialItem[] = [];
