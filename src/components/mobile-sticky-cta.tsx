"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { siteLabels, siteUrls } from "@/data/contact";

/** Paths where the sticky bar would duplicate the primary action */
const HIDDEN_PATHS = new Set<string>([siteUrls.contact]);

function useStickyCtaVisible(): boolean {
  const pathname = usePathname();
  return !HIDDEN_PATHS.has(pathname);
}

export function MainLandmark({ children }: { children: ReactNode }) {
  const showStickyPad = useStickyCtaVisible();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`outline-none ${showStickyPad ? "pb-[4.75rem] 2xl:pb-0" : ""}`}
    >
      {children}
    </main>
  );
}

export function MobileStickyCta() {
  const visible = useStickyCtaVisible();

  if (!visible) {
    return null;
  }

  return (
    <div className="theme-sticky-bar fixed inset-x-0 bottom-0 z-40 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] 2xl:hidden">
      <Link
        href={siteUrls.contactDiagnosis}
        className="cine-btn-primary flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold"
      >
        {siteLabels.contactCta}
      </Link>
    </div>
  );
}
