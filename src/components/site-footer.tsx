import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import {
  contactChannels,
  contactDetails,
  getClientPortalHref,
  getEmailDisplayLabel,
  getPhoneDisplayLabel,
  siteLabels,
  siteUrls,
} from "@/data/contact";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const portalHref = getClientPortalHref();

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
    title: "ניווט",
    links: [
      { label: "בית", href: "/" },
      { label: "שירותים", href: "/managed-it-services" },
      { label: "פתרונות", href: "/solutions" },
      { label: "אודות", href: "/about" },
    ],
  },
  {
    title: "פתרונות",
    links: [
      { label: "סייבר", href: "/solutions/cybersecurity" },
      { label: "גיבוי", href: "/solutions/backup-and-recovery" },
      { label: "ענן", href: "/solutions/microsoft-365-and-cloud" },
      { label: "תקשורת", href: "/solutions/networks-and-communication" },
    ],
  },
  {
    title: "יצירת קשר",
    links: [
      ...(contactChannels.phone
        ? [{ label: getPhoneDisplayLabel(), href: contactChannels.phone, external: true as const }]
        : []),
      ...(contactChannels.whatsapp
        ? [{ label: "וואטסאפ", href: contactChannels.whatsapp, external: true as const }]
        : []),
      ...(contactChannels.email
        ? [{ label: getEmailDisplayLabel(), href: contactChannels.email, external: true as const }]
        : []),
      { label: siteLabels.contact, href: siteUrls.contact },
      { label: siteLabels.clientPortal, href: portalHref },
      { label: siteLabels.remoteSupport, href: siteUrls.remoteSupport },
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
