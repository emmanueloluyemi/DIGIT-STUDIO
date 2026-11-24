import type { Metadata, Viewport } from "next";
import { Syne, Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE } from "@/data/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Digit Studio | Creative & Digital Studio",
    template: "%s | Digit Studio",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    title: "Digit Studio | Creative & Digital Studio",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digit Studio | Creative & Digital Studio",
    description: SITE.description,
  },
  appleWebApp: {
    capable: true,
    title: SITE.brand,
    statusBarStyle: "black-translucent",
  },
};

const PRELOADER_BOOT_SCRIPT = `
try {
  var savedTheme = localStorage.getItem('digit-studio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.dataset.theme = savedTheme;
  } else {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
  }
  var seen = sessionStorage.getItem('digit_studio_preloader_seen') === '1';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.dataset.preloader = (seen || reduced) ? 'done' : 'active';
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sameAs = [SITE.linkedinUrl, SITE.fiverrUrl, SITE.upworkUrl];
  const baseUrl = SITE.siteUrl.replace(/\/$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#studio`,
    name: SITE.brand,
    alternateName: SITE.alternateName,
    url: `${baseUrl}/`,
    logo: `${baseUrl}/brand/app-icon.png`,
    image: `${baseUrl}/brand/logo-mark-dark.svg`,
    description:
      SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      "@id": `${baseUrl}/#founder`,
      name: SITE.owner,
      sameAs,
    },
    sameAs,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: SITE.brand,
    description: SITE.description,
    publisher: {
      "@id": `${baseUrl}/#studio`,
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${instrumentSerif.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_BOOT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
