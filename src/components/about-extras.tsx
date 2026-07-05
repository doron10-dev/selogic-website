import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { contactDetails, getAddressMapsUrl, siteUrls } from "@/data/contact";
import { MapPin, Building2, Handshake } from "lucide-react";

type Panel = {
  icon: LucideIcon;
  title: string;
  body: string;
  action?: { label: string; href: string; external?: boolean };
};

const panels: Panel[] = [
  {
    icon: MapPin,
    title: "אזור שירות",
    body: "מבוססים בטבריה ומשרתים עסקים בצפון הארץ: טבריה, עמק הירדן, הגליל, חיפה והסביבה. תמיכה מרחוק זמינה לכל הארץ.",
    action: { label: "Google Maps", href: getAddressMapsUrl(), external: true },
  },
  {
    icon: Building2,
    title: "למי זה מתאים",
    body: "עסקים קטנים ובינוניים שרוצים שותף IT קבוע: משרדים, קליניקות, מוסדות וארגונים שצריכים סדר, תיעוד ואחריות, לא מוקד אנונימי.",
  },
  {
    icon: Handshake,
    title: "מה חשוב לנו",
    body: "שקיפות, תיעוד ו-SLA אמיתי. בלי מספרים שיווקיים מומצאים, בלי הבטחות ריקות. שותף לטווח ארוך שמרגיש אחראי.",
    action: { label: "שירותי IT מנוהלים", href: "/managed-it-services" },
  },
];

export function AboutExtras() {
  return (
    <section className="theme-section-tint-band">
      <div className="container-page py-10 sm:py-14 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {panels.map((panel) => (
            <article key={panel.title} className="theme-card-interactive">
              <span className="icon-chip !h-11 !w-11">
                <panel.icon size={22} aria-hidden="true" />
              </span>
              <h2 className="theme-text-heading mt-4 text-lg font-bold">{panel.title}</h2>
              <p className="theme-text-muted mt-2 text-sm leading-relaxed">{panel.body}</p>
              {panel.action ? (
                panel.action.external ? (
                  <a
                    href={panel.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {panel.action.label}
                  </a>
                ) : (
                  <Link
                    href={panel.action.href}
                    className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {panel.action.label}
                  </Link>
                )
              ) : null}
            </article>
          ))}
        </div>
        <p className="theme-text-muted mt-8 text-center text-sm">
          {contactDetails.address} ·{" "}
          <Link href={siteUrls.contact} className="font-semibold text-blue-600 hover:text-blue-700">
            צור קשר
          </Link>
        </p>
      </div>
    </section>
  );
}
