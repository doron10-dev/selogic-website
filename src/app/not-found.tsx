import Link from "next/link";
import { Button } from "@/components/button";
import { siteUrls } from "@/data/contact";

export default function NotFound() {
  return (
    <section className="theme-page-hero">
      <div className="container-page flex min-h-[50vh] flex-col items-start justify-center py-16 sm:py-24">
        <p className="theme-eyebrow">404</p>
        <h1 className="font-display theme-text-heading mt-3 max-w-xl text-3xl font-extrabold sm:text-4xl">
          הדף לא נמצא
        </h1>
        <p className="theme-text-body mt-4 max-w-prose text-[17px] leading-relaxed">
          הקישור שביקשתם לא קיים, הוסר, או שהוזן כתובת שגויה. אפשר לחזור לדף הבית או ליצור קשר.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            דף הבית
          </Button>
          <Button href={siteUrls.contact} variant="secondary">
            צור קשר
          </Button>
          <Link href={siteUrls.technicalSupport} className="theme-link inline-flex min-h-11 items-center text-sm font-semibold">
            תמיכה טכנית
          </Link>
        </div>
      </div>
    </section>
  );
}
