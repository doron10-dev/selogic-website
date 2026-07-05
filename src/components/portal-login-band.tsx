import Link from "next/link";
import { Button } from "@/components/button";
import {
  contactDetails,
  getClientPortalLoginHref,
  hasExternalPortalLogin,
  siteLabels,
  siteUrls,
} from "@/data/contact";

export function PortalLoginBand() {
  const external = hasExternalPortalLogin();

  return (
    <section id="portal-login" className="theme-band-muted scroll-mt-28">
      <div className="container-page py-8 sm:py-10">
        <div className="theme-card p-6 sm:p-8">
          <h2 className="theme-text-heading text-lg font-bold">{siteLabels.clientPortal}</h2>
          {external ? (
            <>
              <p className="theme-text-body mt-2 max-w-prose text-sm leading-relaxed">
                לקוחות קיימים: התחברו לפורטל לצפייה בקריאות, סטטוסים ו-SLA.
              </p>
              <div className="mt-5">
                <a
                  href={getClientPortalLoginHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-700"
                >
                  כניסה לפורטל
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="theme-text-body mt-2 max-w-prose text-sm leading-relaxed">
                כניסה ישירה לפורטל תיפתח לאחר חיבור מערכת ה-PSA. לקוחות קיימים: פנו בטלפון או במייל ונפנה אתכם
                לערוץ הנכון.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={siteUrls.technicalSupport} variant="primary" className="min-h-11">
                  פתחו קריאת שירות
                </Button>
                <Link href={contactDetails.phoneHref} className="theme-btn-secondary inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold">
                  {contactDetails.phone}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
