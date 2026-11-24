export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  topic: string;
  excerpt: string;
  bodyParagraphs: string[];
  takeaways: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "what-a-brand-identity-should-include",
    title: "What a brand identity should include (and what to skip)",
    subtitle: "A practical guide for founders spending real money on their first design system.",
    date: "February 2026",
    readTime: "4 min read",
    topic: "Branding",
    excerpt:
      "Many branding proposals are packed with 80-page fluff documents you will never open. Here is what an early-stage company actually needs to launch cleanly.",
    bodyParagraphs: [
      "When business owners hire a designer for brand identity, they frequently receive proposals quoting sixty to eighty pages of brand manuals. In practice, eighty percent of that manual is never referenced by anyone in the company after launch day.",
      "What a growing business actually needs is clarity, consistency, and accessible files. You need a primary mark that scales down to a 32-pixel favicon without blurring, a secondary wordmark for wide banners, a strict typographic hierarchy (one serif or display font, one clean reading font), and a functional palette with clear background-to-text contrast ratios.",
      "Skip the philosophical brand mood boards that look like art school thesis papers. Instead, ask for a single-page brand cheat sheet that your social media manager or presentation designer can pin to their desktop and follow every afternoon.",
      "A healthy brand identity is not a locked museum piece; it is a tool kit that makes your daily communication faster and your business more recognizable.",
    ],
    takeaways: [
      "Prioritize legible marks over intricate illustrations that vanish on mobile screens.",
      "Insist on a one-page cheat sheet containing hex codes, font sizes, and logo spacing rules.",
      "Make sure you receive native vector files (.svg, .eps) and pre-sized PNGs for everyday staff.",
    ],
  },
  {
    slug: "how-much-does-a-small-business-website-cost",
    title: "How much does a small-business website cost in 2026?",
    subtitle: "A transparent breakdown of template builders, freelancer rates, and custom studio builds.",
    date: "January 2026",
    readTime: "5 min read",
    topic: "Websites",
    excerpt:
      "Website pricing ranges from $20/month DIY builders to $25,000 agency quotes. Here is what drives the cost and where small businesses should invest.",
    bodyParagraphs: [
      "The wide variance in website pricing confuses almost every first-time buyer. A DIY Squarespace site costs twenty dollars a month, an offshore freelancer on a marketplace charges five hundred dollars, and an established digital agency asks twenty-five thousand dollars for five pages.",
      "The real difference lies in three factors: strategic copy alignment, mobile speed engineering, and who takes responsibility when something breaks. A generic template is cheap up front, but it saddens your conversion rate if your pages take four seconds to load on mobile phones or contain confusing corporate jargon.",
      "For most independent companies, professional bespoke builds between $2,000 and $5,000 represent the sweet spot. In that bracket, you get direct collaboration with a senior practitioner, custom typography tailored to your market, sub-second load times, and clean forms that actually deliver client inquiries to your inbox.",
      "When comparing quotes, ask developers about mobile speed guarantees, hosting overhead, and whether you will own your code or be locked into a proprietary website builder.",
    ],
    takeaways: [
      "Never judge a website by its desktop layout alone; test it on a phone on mobile data.",
      "Avoid recurring monthly page builder lock-in when clean static code can run for pennies.",
      "Insist on seeing real mobile performance benchmarks (Lighthouse scores) before signing off.",
    ],
  },
  {
    slug: "ai-video-where-it-works-for-brands",
    title: "AI video: where it works for brands and where it doesn't",
    subtitle: "Cutting through the hype to see what synthetic video pipelines can reliably deliver today.",
    date: "January 2026",
    readTime: "4 min read",
    topic: "AI Video",
    excerpt:
      "AI video is not a magical button that replaces creative directors. Here is an honest assessment of its strengths and hard limitations.",
    bodyParagraphs: [
      "The marketing around AI video tools currently swings between two extremes: evangelists claiming Hollywood is obsolete, and skeptics dismissing the technology as uncanny valley slop. The reality for working businesses sits squarely in the middle.",
      "Where AI video genuinely excels today is in concept product announcements, atmospheric mood teasers, short social cutdowns, and background video loops where coordinating a five-person camera crew and location rental is financially unjustifiable.",
      "Where it still falls flat is complex human emotional storytelling, long dialogue scenes with precise mouth synchronization, and multi-actor interaction. Trying to fake a customer testimonial with an AI avatar looks cheap and instantly damages brand trust.",
      "The smart approach is hybrid: use AI video to visualize physical products, architectural spaces, and kinetic motion, while keeping human strategy, scripting, and editorial pacing at the steering wheel.",
    ],
    takeaways: [
      "Use synthetic video for visual mood, hardware reveals, and motion teasers.",
      "Never use synthetic talking heads for client testimonials or founder apologies.",
      "Keep shots under four seconds to prevent artifact drift and uncanny movement.",
    ],
  },
  {
    slug: "one-month-social-content-plan",
    title: "A one-month social content plan you can actually keep",
    subtitle: "How to stop burning out on daily content creation and build a simple weekly rhythm.",
    date: "December 2025",
    readTime: "3 min read",
    topic: "Content",
    excerpt:
      "Most content schedules fail by week two because they require twenty hours of weekly production. Here is a sustainable four-week framework.",
    bodyParagraphs: [
      "Most social media advice aimed at businesses suggests posting three times a day across four different networks. For an independent business owner with client work to deliver, this advice is a guaranteed recipe for burnout and abandoned profiles.",
      "A sustainable social presence requires only two thoughtful pieces of content per week if they directly address the questions your buyers are asking. One educational breakdown sharing how you solved a real client problem, and one perspective piece on industry standards.",
      "Batch your production into a single three-hour window on Monday morning. Write the copy, format the graphics using consistent brand templates, and schedule them for Tuesday and Thursday. The rest of your week belongs to serving your paying clients.",
      "Consistency over six months beats intense hyperactivity followed by three months of silence every single time.",
    ],
    takeaways: [
      "Two high-quality posts per week outperform fourteen rushed daily graphics.",
      "Base content on questions real prospects asked you in sales calls this month.",
      "Batch design production into a single morning session rather than daily scrambling.",
    ],
  },
];
