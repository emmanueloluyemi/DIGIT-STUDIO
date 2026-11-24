export interface SiteConfig {
  name: string;
  founder: string;
  founderRole: string;
  tagline: string;
  location: string;
  email: string;
  whatsappUrl: string;
  whatsappNumber: string;
  linkedinUrl: string;
  upworkUrl: string;
  siteUrl: string;
  shortDescription: string;
  upworkStats: {
    jobSuccess: string;
    rating: string;
    note: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  doors: {
    title: string;
    tagline: string;
    turnaround: string;
    startingPrice: string;
    href: string;
    exampleLabel: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Digit Studio",
  founder: "Emmanuel Oluyemi",
  founderRole: "Founder and Lead Designer",
  tagline: "Ideas deserve better execution.",
  location: "Based in Nigeria · Working with clients worldwide",
  email: "oluyemiemmanuel21@gmail.com",
  whatsappUrl: "https://wa.me/2348028634791",
  whatsappNumber: "+234 802 863 4791",
  linkedinUrl: "https://www.linkedin.com/in/emmanueloluyemi",
  upworkUrl: "https://www.upwork.com/freelancers/~01c06bedf0cb7cfed6",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production"
      ? (() => {
          throw new Error("NEXT_PUBLIC_SITE_URL is required in production");
        })()
      : "http://localhost:3000"),
  shortDescription:
    "An independent studio led by Emmanuel Oluyemi. I design brand identities, build fast websites, produce AI video, and manage social content for businesses that take their reputation seriously.",
  upworkStats: {
    jobSuccess: "100%",
    rating: "5.0 / 5.0",
    note: "Verified on Upwork with 100% Job Success across client commissions.",
  },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  doors: [
    {
      title: "Brand identity",
      tagline: "Wordmarks, colors, typography, packaging, and practical brand rules.",
      turnaround: "2 to 3 weeks",
      startingPrice: "From $1,500",
      href: "/services#brand",
      exampleLabel: "Nectar Botanical Tea",
    },
    {
      title: "A website",
      tagline: "Custom design and clean code built for sub-second mobile speed.",
      turnaround: "3 to 5 weeks",
      startingPrice: "From $2,500",
      href: "/services#websites",
      exampleLabel: "Ardent Advisory",
    },
    {
      title: "AI video & animation",
      tagline: "Product launch teasers and social video without film-set overhead.",
      turnaround: "7 to 10 days",
      startingPrice: "From $800",
      href: "/services#video",
      exampleLabel: "Lumina Workspace",
    },
    {
      title: "Social & content",
      tagline: "Monthly editorial calendars, graphic templates, and short video edits.",
      turnaround: "Monthly retainer",
      startingPrice: "From $1,200/mo",
      href: "/services#content",
      exampleLabel: "Studio Content Engine",
    },
  ],
};
