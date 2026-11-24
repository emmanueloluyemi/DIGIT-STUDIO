export interface NavItem {
  index: string;
  label: string;
  href: string;
  description: string;
}

export interface ExternalProfile {
  label: string;
  href: string;
  handle?: string;
}

export const SITE = {
  brand: "Digit Studio",
  brandUpper: "DIGIT STUDIO",
  alternateName: "DIGIT Studio",
  owner: "Emmanuel Oluyemi",
  email: "oluyemiemmanuel21@gmail.com",
  timezoneNote: "Based in Nigeria · Working worldwide",
  whatsappUrl: "https://wa.me/2348028634791",
  phone: "+2348028634791",
  linkedinUrl: "https://www.linkedin.com/in/emmanueloluyemi",
  // TODO: Verify fiverrUrl handle; currently configured with placeholder/channel URL
  fiverrUrl: "https://www.fiverr.com/users/brittanydedrick",
  upworkUrl: "https://www.upwork.com/freelancers/~01c06bedf0cb7cfed6",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production"
      ? (() => {
          throw new Error("NEXT_PUBLIC_SITE_URL is required in production");
        })()
      : "http://localhost:3000"),
  tagline: "Creative thinking, digital craft and visual storytelling for ambitious brands.",
  shortLockup: "Branding · Development · AI Video · Digital Experiences",
  nameLine: "Digit Studio is an independent creative and digital studio founded by Emmanuel Oluyemi.",
  description:
    "Digit Studio is a founder-led creative and digital studio offering branding and graphic design, web design and development, AI video and animation, social media management, and content creation.",
  availability: {
    active: true,
    label: "Open to project enquiries",
  },
} as const;

export const NAV_LINKS: NavItem[] = [
  { index: "01", label: "Home", href: "/", description: "The Digit Studio experience" },
  { index: "02", label: "Work", href: "/work", description: "Selected creative and digital work" },
  { index: "03", label: "Services", href: "/services", description: "Explore what we can create together" },
  { index: "04", label: "Process", href: "/how-we-work", description: "How projects move from idea to delivery" },
  { index: "05", label: "About", href: "/about", description: "The studio and its founder" },
  { index: "06", label: "FAQ", href: "/faq", description: "Answers to common project questions" },
  { index: "07", label: "Contact", href: "/contact", description: "Tell us what you want to build" },
];

export const PLATFORM_PROFILES: ExternalProfile[] = [
  { label: "Upwork", href: SITE.upworkUrl, handle: "100% Job Success · 5-star rating" },
  { label: "Fiverr", href: SITE.fiverrUrl, handle: "Digit Studio service channel" },
];

export const SOCIAL_LINKS: ExternalProfile[] = [
  { label: "LinkedIn", href: SITE.linkedinUrl },
];

export function isPlaceholderHref(href: string): boolean {
  return !href || (href.includes("[") && href.includes("]"));
}
