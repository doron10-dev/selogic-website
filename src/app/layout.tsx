import type { Metadata } from "next";
import { Heebo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selogic | שירותי IT מנוהלים לעסקים בישראל",
  description:
    "חברת IT בוטיק לניהול מחשוב, תמיכה, אבטחה, גיבויים, פורטל לקוחות, SLA ושקיפות מלאה לעסקים בישראל.",
  openGraph: {
    title: "Selogic | שירותי IT מנוהלים לעסקים בישראל",
    description:
      "חברת IT בוטיק לניהול מחשוב, תמיכה, אבטחה, גיבויים, פורטל לקוחות, SLA ושקיפות מלאה לעסקים בישראל.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${mono.variable}`}>
      <body className={`${heebo.className} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
