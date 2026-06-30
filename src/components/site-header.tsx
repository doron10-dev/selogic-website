"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactChannels, siteLabels, siteUrls, getClientPortalHref } from "@/data/contact";
import { navItems } from "@/data/nav";

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
    <header className="sticky top-0 z-50 border-b border-slate-line/60 bg-paper/90 backdrop-blur">
      <div className="hidden border-b border-slate-line/60 bg-ink text-paper md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <Link href={portalHref} className="hover:text-signal-soft transition-colors">
              {siteLabels.clientPortal}
            </Link>
          </div>
          <div className="flex items-center gap-4 text-paper/80">
            {contactChannels.whatsapp && (
              <a href={contactChannels.whatsapp} className="hover:text-paper transition-colors">
                וואטסאפ
              </a>
            )}
            {contactChannels.phone && (
              <a href={contactChannels.phone} className="hover:text-paper transition-colors">
                טלפון
              </a>
            )}
            {contactChannels.email && (
              <a href={contactChannels.email} className="hover:text-paper transition-colors">
                אימייל
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

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="סלוג׳יק — דף הבית">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal text-sm font-bold text-white"
            aria-hidden="true"
          >
            S
          </span>
          <span className="text-lg font-bold text-slate-ink">סלוג׳יק</span>
        </Link>

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
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-line bg-paper lg:hidden"
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
                {(contactChannels.whatsapp || contactChannels.phone) && (
                  <div className="flex items-center justify-center gap-4 pt-1 text-sm text-slate-body">
                    {contactChannels.whatsapp && (
                      <a href={contactChannels.whatsapp} className="hover:text-signal">
                        וואטסאפ
                      </a>
                    )}
                    {contactChannels.phone && (
                      <a href={contactChannels.phone} className="hover:text-signal">
                        טלפון
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
