import { contactChannels, contactDetails } from "@/data/contact";
import { getSiteUrl } from "@/lib/site-url";
import type { BreadcrumbItem } from "@/data/breadcrumbs";
import type { FaqItem } from "@/types/service-page";

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(pagePath: string, items: BreadcrumbItem[]) {
  const base = getSiteUrl();
  const trail: BreadcrumbItem[] = [{ label: "דף הבית", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => {
      const isLast = index === trail.length - 1;
      const url = isLast ? `${base}${pagePath}` : item.href ? `${base}${item.href}` : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(url ? { item: url } : {}),
      };
    }),
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: contactDetails.companyName,
    description:
      "שירותי IT מנוהלים, תמיכה טכנית, פורטל לקוחות ו-SLA לעסקים בישראל, כולל אזור טבריה והצפון.",
    url: `${getSiteUrl()}/`,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "רחוב העמקים 3",
      addressLocality: "טבריה",
      addressCountry: "IL",
    },
    areaServed: [
      { "@type": "City", name: "טבריה" },
      { "@type": "AdministrativeArea", name: "צפון הארץ" },
      { "@type": "Country", name: "Israel" },
    ],
    ...(contactChannels.whatsapp
      ? { sameAs: [contactChannels.whatsapp] }
      : {}),
  };
}
