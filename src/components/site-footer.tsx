import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { contactChannels, contactDetails, siteUrls } from "@/data/contact";
import { isoCredentials } from "@/data/credentials";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerCols: Array<
  | { title: string; isBrand: true; text: string }
  | { title: string; isBrand?: false; links: FooterLink[] }
> = [
  {
    title: "brand",
    isBrand: true,
    text: "סלוג׳יק היא מחלקת IT חיצונית לעסק, המחברת בין שירותי מחשוב מנוהלים, ניטור, אבטחת מידע, תיעוד, דוחות, מערכות מידע ובקרה ניהולית.",
  },
  {
    title: "שירותים",
    links: [
      { label: "כל השירותים", href: "/solutions" },
      { label: "שירותי IT מנוהלים", href: "/managed-it-services" },
      { label: "ניטור ובקרה RMM", href: siteUrls.rmm },
      { label: "תמיכה טכנית לעסקים", href: siteUrls.technicalSupport },
      { label: "אבטחת מידע וסייבר", href: "/solutions/cybersecurity" },
      { label: "גיבוי והתאוששות", href: "/solutions/backup-and-recovery" },
      { label: "Microsoft 365 וענן", href: "/solutions/microsoft-365-and-cloud" },
      { label: "רשתות ותקשורת", href: "/solutions/networks-and-communication" },
    ],
  },
  {
    title: "ניווט",
    links: [
      { label: "מערכות ובקרה", href: "/information-systems-and-control" },
      { label: "תיק אתר / תיק לקוח", href: siteUrls.siteDossier },
      { label: "פורטל לקוחות", href: siteUrls.clientPortal },
      { label: "תמיכה מרחוק", href: siteUrls.remoteSupport },
      { label: "אודות", href: "/about" },
      { label: "צור קשר", href: siteUrls.contact },
    ],
  },
  {
    title: "יצירת קשר",
    links: [
      { label: contactDetails.phone, href: contactDetails.phoneHref, external: true },
      { label: contactDetails.email, href: `mailto:${contactDetails.email}`, external: true },
      ...(contactChannels.whatsapp
        ? [{ label: "וואטסאפ", href: contactChannels.whatsapp, external: true as const }]
        : []),
      { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
      { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = "theme-footer-link";

  if (link.external) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="theme-footer">
      <div className="container-page py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title} className="min-w-0">
              {col.isBrand ? (
                <>
                  <SiteLogo variant="footer" className="mb-4" />
                  <p className="theme-text-muted max-w-prose text-[17px] leading-relaxed">{col.text}</p>
                </>
              ) : (
                <>
                  <h3 className="theme-text-heading mb-3 text-sm font-semibold">{col.title}</h3>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={`${col.title}-${link.label}-${link.href}`}>
                        <FooterLinkItem link={link} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {contactDetails.address && (
          <p className="theme-text-muted mt-8 text-sm leading-relaxed">{contactDetails.address}</p>
        )}

        {isoCredentials().length > 0 && (
          <p className="theme-text-muted mt-2 text-sm leading-relaxed">{isoCredentials().join(" · ")}</p>
        )}

        <div className="theme-footer-bar">
          <p>© סלוג׳יק. כל הזכויות שמורות</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href={siteUrls.privacy} className="theme-footer-link">
              מדיניות פרטיות
            </Link>
            <Link href={siteUrls.terms} className="theme-footer-link">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
