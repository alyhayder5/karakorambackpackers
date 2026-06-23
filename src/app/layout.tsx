import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers/providers";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import {
  defaultKeywords,
  getSiteUrl,
  siteDescription,
  siteName,
  siteNameSlug,
} from "@/lib/site";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#0b121e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Adventure Travel in Gilgit-Baltistan`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: defaultKeywords,
  applicationName: siteNameSlug,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Premium Adventure Travel`,
    description: siteDescription,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Adventure Travel`,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} min-h-screen antialiased`}
      >
        <Providers>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          {children}
        </Providers>
      </body>
    </html>
  );
}
