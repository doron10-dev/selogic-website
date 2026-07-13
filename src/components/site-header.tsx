"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  contactChannels,
  siteLabels,
  siteUrls,
  getClientPortalLoginHref,
  getPhoneDisplayLabel,
  getEmailDisplayLabel,
} from "@/data/contact";
import { headerNavItems, secondaryNavItems } from "@/data/nav";
import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onContactPage = pathname === siteUrls.contact;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="theme-header">
      <div className="container-page flex min-h-[4.5rem] items-center justify-between gap-3 py-2 sm:min-h-[5rem] sm:py-2.5 2xl:grid 2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:justify-normal 2xl:gap-4">
        <SiteLogo variant="header" compact className="shrink-0" />

        <nav
          className="hidden min-w-0 2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-0.5 2xl:px-1"
          aria-label="ניווט ראשי"
        >
          {headerNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const shortLabel = item.shortLabel ?? item.label;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
                className={`theme-header-nav-link 3xl:px-2.5 3xl:text-sm ${isActive ? "is-active" : ""}`}
              >
                <span className="3xl:hidden">{shortLabel}</span>
                <span className="hidden 3xl:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-2 sm:gap-2.5 2xl:ms-0">
          <ThemeToggle />

          {!onContactPage && (
            <>
              <Link
                href={siteUrls.contactDiagnosis}
                className="cine-btn-primary inline-flex min-h-10 shrink-0 rounded-full px-3 py-2 text-xs font-semibold 2xl:hidden"
              >
                אבחון
              </Link>
              <div className="hidden shrink-0 items-center gap-2 2xl:flex 3xl:gap-3">
                <Link
                  href={siteUrls.technicalSupport}
                  className="theme-btn-secondary inline-flex min-h-10 items-center justify-center whitespace-nowrap px-4 py-2.5 text-[13px] 3xl:px-5 3xl:text-sm"
                >
                  פתחו קריאת שירות
                </Link>
                <Button
                  href={siteUrls.contactDiagnosis}
                  variant="diagnosis"
                  className="min-h-10 whitespace-nowrap px-4 py-2.5 text-[13px] 3xl:px-5 3xl:text-sm"
                >
                  {siteLabels.contactCta}
                </Button>
              </div>
            </>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="theme-icon-button 2xl:hidden"
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
          className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t theme-section-white 2xl:hidden"
          style={{ borderColor: "var(--theme-border)" }}
          aria-label="ניווט נייד"
        >
          <div className="container-page flex flex-col gap-1 py-3">
            {headerNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`theme-nav-item ${isActive ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="theme-divider mt-2 flex flex-col gap-1 pt-2">
              {secondaryNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`theme-nav-item ${isActive ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {!onContactPage && (
              <div className="theme-divider mt-3 space-y-2 pt-4">
                <Link
                  href={getClientPortalLoginHref()}
                  onClick={() => setOpen(false)}
                  className="theme-btn-secondary flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                >
                  {siteLabels.clientPortal}
                </Link>
                <Link
                  href={siteUrls.contactDiagnosis}
                  onClick={() => setOpen(false)}
                  className="cine-btn-primary flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                >
                  {siteLabels.contactCta}
                </Link>
                <Link
                  href={siteUrls.technicalSupport}
                  onClick={() => setOpen(false)}
                  className="theme-btn-secondary flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                >
                  פתחו קריאת שירות
                </Link>
                {(contactChannels.whatsapp || contactChannels.phone || contactChannels.email) && (
                  <div className="theme-text-muted flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-sm">
                    {contactChannels.phone && (
                      <a href={contactChannels.phone} className="theme-link hover:underline">
                        טלפון {getPhoneDisplayLabel()}
                      </a>
                    )}
                    {contactChannels.email && (
                      <a href={contactChannels.email} className="theme-link hover:underline">
                        {getEmailDisplayLabel()}
                      </a>
                    )}
                    {contactChannels.whatsapp && (
                      <a href={contactChannels.whatsapp} className="theme-link hover:underline">
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
