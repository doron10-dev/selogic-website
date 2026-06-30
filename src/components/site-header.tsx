"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactChannels, siteLabels, siteUrls, getClientPortalHref, getPhoneDisplayLabel, getEmailDisplayLabel } from "@/data/contact";
import { navItems } from "@/data/nav";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const portalHref = getClientPortalHref();
  const onContactPage = pathname === siteUrls.contact;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-line/60 bg-paper/95 shadow-sm backdrop-blur-md">
      <div className="hidden border-b border-slate-line/60 bg-ink text-paper md:block">
        <div className="container-page flex h-9 items-center justify-between gap-4 text-xs">
          <div className="flex min-w-0 items-center gap-4">
            <Link href={portalHref} className="truncate hover:text-signal-soft transition-colors">
              {siteLabels.clientPortal}
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-paper/80">
            {contactChannels.whatsapp && (
              <a href={contactChannels.whatsapp} className="hover:text-paper transition-colors">
                וואטסאפ
              </a>
            )}
            {contactChannels.phone && (
              <a href={contactChannels.phone} className="hover:text-paper transition-colors">
                {getPhoneDisplayLabel()}
              </a>
            )}
            {contactChannels.email && (
              <a href={contactChannels.email} className="hidden hover:text-paper transition-colors lg:inline">
                {getEmailDisplayLabel()}
              </a>
            )}
            {!contactChannels.whatsapp && !contactChannels.phone && (
              <Link href={siteUrls.contact} className="hover:text-paper transition-colors">
                {siteLabels.contact}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <SiteLogo variant="header" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-pill px-3 py-2 text-sm font-medium text-slate-body transition-colors hover:bg-paper-mute hover:text-slate-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {!onContactPage && (
            <Link
              href={siteUrls.contactDiagnosis}
              className="hidden rounded-pill bg-signal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-signal-ink sm:inline-flex"
            >
              {siteLabels.contactCta}
            </Link>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-line text-slate-ink lg:hidden"
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-line bg-paper sm:max-h-[calc(100dvh-4rem)] lg:hidden"
          aria-label="ניווט נייד"
        >
          <div className="container-page flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-body transition-colors hover:bg-paper-mute hover:text-slate-ink"
              >
                {item.label}
              </Link>
            ))}

            {!onContactPage && (
              <div className="mt-3 space-y-2 border-t border-slate-line pt-4">
                <Link
                  href={siteUrls.contactDiagnosis}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-pill bg-signal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
                >
                  {siteLabels.contactCta}
                </Link>
                {(contactChannels.whatsapp || contactChannels.phone || contactChannels.email) && (
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-sm text-slate-body">
                    {contactChannels.phone && (
                      <a href={contactChannels.phone} className="hover:text-signal">
                        {getPhoneDisplayLabel()}
                      </a>
                    )}
                    {contactChannels.email && (
                      <a href={contactChannels.email} className="hover:text-signal">
                        {getEmailDisplayLabel()}
                      </a>
                    )}
                    {contactChannels.whatsapp && (
                      <a href={contactChannels.whatsapp} className="hover:text-signal">
                        וואטסאפ
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
