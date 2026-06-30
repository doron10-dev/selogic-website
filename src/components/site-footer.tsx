import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { contactDetails, siteUrls } from "@/data/contact";

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
    text: "חברת מחשוב בוטיק לעסקים בישראל.",
  },
  {
    title: "שירותים",
    links: [
      { label: "כל השירותים", href: "/solutions" },
      { label: "שירותי IT מנוהלים", href: "/managed-it-services" },
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
      { label: "קבעו שיחת אבחון", href: siteUrls.contactDiagnosis },
      { label: "פתחו קריאת שירות", href: siteUrls.technicalSupport },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = "inline-block break-words text-sm text-paper/70 transition-colors hover:text-paper";

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
    <footer className="border-t border-ink-line bg-ink text-paper">
      <div className="container-page py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title} className="min-w-0">
              {col.isBrand ? (
                <>
                  <SiteLogo variant="footer" className="mb-4" />
                  <p className="text-sm leading-relaxed text-paper/60">{col.text}</p>
                </>
              ) : (
                <>
                  <h3 className="mb-3 text-sm font-bold text-paper">{col.title}</h3>
                  <ul className="space-y-2">
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
          <p className="mt-8 text-sm text-paper/60">{contactDetails.address}</p>
        )}

        <div className="mt-12 border-t border-ink-line pt-6 text-xs text-paper/40">
          © סלוג׳יק — כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
}
