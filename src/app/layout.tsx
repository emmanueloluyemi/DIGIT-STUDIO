import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { siteConfig } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Digit Studio — Independent Brand, Web & Media Studio",
    template: "%s | Digit Studio",
  },
  description: siteConfig.shortDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Digit Studio — Ideas deserve better execution.",
    description: siteConfig.shortDescription,
    url: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#studio`,
    name: siteConfig.name,
    url: `${baseUrl}/`,
    logo: `${baseUrl}/brand/app-icon.png`,
    description: siteConfig.shortDescription,
    email: siteConfig.email,
    telephone: siteConfig.whatsappNumber,
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: siteConfig.founderRole,
      sameAs: [siteConfig.linkedinUrl, siteConfig.upworkUrl],
    },
    sameAs: [siteConfig.linkedinUrl, siteConfig.upworkUrl],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: `${baseUrl}/`,
    description: siteConfig.shortDescription,
    publisher: {
      "@id": `${baseUrl}/#studio`,
    },
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius)] focus:bg-[var(--crimson)] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
