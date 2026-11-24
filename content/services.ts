export interface ServiceOffer {
  id: string;
  anchor: string;
  title: string;
  headline: string;
  forWhom: string;
  included: string[];
  notIncluded: string[];
  timeline: string;
  pricingNote: string;
  deliverableExample: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const serviceOffers: ServiceOffer[] = [
  {
    id: "brand",
    anchor: "brand",
    title: "Brand identity and graphic design",
    headline: "Distinctive visual foundations that work everywhere your business appears.",
    forWhom:
      "Early-stage companies launching a new product, and established businesses outgrowing messy, inconsistent graphics.",
    included: [
      "Discovery conversation and competitive audit",
      "Primary wordmark and secondary visual marks",
      "Typography system and accessible color palette",
      "One-page brand guidelines cheat sheet and full manual",
      "Social media profile assets and starter announcement templates",
      "Vector, raster, and web-ready file export in all formats",
    ],
    notIncluded: [
      "Full copywriting campaigns (can be quoted separately)",
      "Custom typeface design from raw vectors",
      "Trademark legal registration filing",
    ],
    timeline: "Typically 2 to 3 weeks",
    pricingNote: "Projects start from $1,500. Detailed quote sent within 48 hours of your brief.",
    deliverableExample: "Studio project: Nectar Botanical Tea Identity System",
  },
  {
    id: "websites",
    anchor: "websites",
    title: "Websites (design and development)",
    headline: "Fast, custom websites designed for reading, trust, and client inquiries.",
    forWhom:
      "Founders, studios, and service businesses who need a credible web presence that loads in under two seconds on a phone.",
    included: [
      "Information architecture and page structure planning",
      "Responsive Figma design for mobile and desktop screens",
      "Clean production code using modern standards (Next.js / static)",
      "Working inquiry form with email delivery and spam filtering",
      "SEO basics: page titles, Open Graph cards, sitemap, robots file",
      "Handover guidance showing you how to update content yourself",
    ],
    notIncluded: [
      "Custom e-commerce platforms with inventory systems",
      "Complex user authentication and database backends",
      "Legacy CMS data migrations",
    ],
    timeline: "Typically 3 to 5 weeks",
    pricingNote: "Projects start from $2,500. Detailed quote sent within 48 hours of your brief.",
    deliverableExample: "Studio project: Ardent Advisory Firm Website",
  },
  {
    id: "video",
    anchor: "video",
    title: "AI video and animation",
    headline: "Product launch teasers and motion content produced in days, not months.",
    forWhom:
      "Businesses launching digital products, hardware, or campaigns where traditional film crews and location fees are out of reach.",
    included: [
      "Script and visual storyboard outline",
      "AI-generated realistic camera movements and scene generation",
      "Voiceover track integration with licensed audio",
      "16:9 widescreen master cut and 9:16 vertical cuts for mobile",
      "Embedded captions and web-ready compressed exports",
    ],
    notIncluded: [
      "On-set physical film crews and live actors",
      "Long-form documentary production",
    ],
    timeline: "Typically 7 to 10 business days",
    pricingNote: "Projects start from $800. Detailed quote sent within 48 hours of your brief.",
    deliverableExample: "Studio project: Lumina Workspace Synthetic Reveal",
  },
  {
    id: "content",
    anchor: "content",
    title: "Social media and content",
    headline: "A sustainable monthly publishing pipeline that respects your audience's intelligence.",
    forWhom:
      "Busy operators and founders who want consistent, thoughtful publishing without managing a chaotic internal department.",
    included: [
      "Monthly content plan with clear topics and publishing dates",
      "Designed static and carousel assets aligned with your brand",
      "Short-form video editing and caption drafting",
      "Monthly review note examining what resonated and what to adjust",
    ],
    notIncluded: [
      "24/7 customer service comment monitoring",
      "Paid ad spend budget (you fund your ad accounts directly)",
    ],
    timeline: "Monthly retainer or 4-week trial sprint",
    pricingNote: "Retainers start from $1,200/month. Three-month minimum recommended.",
    deliverableExample: "Studio project: Studio Content Engine",
  },
];

export const pricingPrinciples = [
  {
    title: "Fixed quotes in writing",
    text: "Before work begins, you receive an itemized quote with deliverables, timelines, and payment stages. No surprise invoices.",
  },
  {
    title: "Staged milestones",
    text: "Most projects run on a 50% deposit and 50% upon final sign-off. Retainers are billed at the start of each month.",
  },
  {
    title: "You own everything",
    text: "Upon final payment, full intellectual property and source files belong to you. No ongoing licensing charges.",
  },
];

export const whatINeedFromYou = [
  "One decision-maker who gives final sign-off on direction.",
  "Existing brand assets, vector logos, or copy drafts if you have them.",
  "Feedback within two business days to keep your project moving on schedule.",
  "Honest answers about your business model and who you want to reach.",
];

export const serviceFaqs: FaqItem[] = [
  {
    question: "Who will actually work on my project?",
    answer:
      "I do. Emmanuel Oluyemi leads every brief, designs every layout, and writes the code. If your project requires a specialized skill (such as technical copywriting or 3D character rigging), I bring in a trusted collaborator and tell you in advance.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "A standard studio website of 4 to 6 pages usually takes 3 to 4 weeks from deposit to launch, assuming feedback is provided within two business days.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer:
      "Yes. Most of my clients are based in North America, Europe, and the UK. We communicate asynchronously via email and WhatsApp, with scheduled video calls when needed.",
  },
  {
    question: "Can I edit my own website after launch?",
    answer:
      "Yes. Content is structured in clean files and Markdown so you can update text, projects, and articles easily. I provide a walkthrough showing you exactly how it works.",
  },
  {
    question: "What is your refund and revision policy?",
    answer:
      "Every project includes two revision rounds at the concept and review stages. If we find during the initial discovery that we are not a fit, your deposit is returned minus time already spent.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send me a brief through the contact form or WhatsApp. I review your goals and reply within 48 hours with a quote and start date.",
  },
];
