import type { Metadata } from "next";
import { Noto_Sans_Hebrew, Rubik, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MainLandmark, MobileStickyCta } from "@/components/mobile-sticky-cta";
import { LazySiteChatbot } from "@/components/lazy-site-chatbot";
import { ThemeScript } from "@/components/theme-script";
import { ThemeSync } from "@/components/theme-toggle";
import { JsonLd } from "@/components/json-ld";
import { buildLocalBusinessJsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-hebrew",
  display: "swap",
  preload: true,
});

/** Distinct display face for headings — geometric, high-impact, Hebrew-native. */
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Selogic",
    template: "%s | Selogic",
  },
  description:
    "שירותי IT מנוהלים, תמיכה טכנית, פורטל לקוחות ו-SLA לעסקים בישראל, Selogic.",
  openGraph: {
    siteName: "Selogic",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      data-theme="dark"
      suppressHydrationWarning
      className={`${notoSansHebrew.variable} ${rubik.variable} ${notoSansHebrew.className} ${mono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <ThemeSync />
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <a
          href="#main-content"
          className="fixed start-4 top-4 z-[100] -translate-y-[220%] rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform focus:translate-y-0 focus:outline-none focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
        >
          דילוג לתוכן הראשי
        </a>
        <SiteHeader />
        <MainLandmark>{children}</MainLandmark>
        <SiteFooter />
        <MobileStickyCta />
        <LazySiteChatbot />
      </body>
    </html>
  );
}
