import Link from "next/link";

const LOGO_TRIM = {
  src: "/brand/selogic-logo-trim.png",
  src2x: "/brand/selogic-logo-trim@2x.png",
  width: 169,
  height: 81,
} as const;

type SiteLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function SiteLogo({ variant = "header", className = "" }: SiteLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="סלוג׳יק — דף הבית"
    >
      {isFooter ? (
        <span className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-3">
          <img
            src={LOGO_TRIM.src}
            srcSet={`${LOGO_TRIM.src} 1x, ${LOGO_TRIM.src2x} 2x`}
            width={LOGO_TRIM.width}
            height={LOGO_TRIM.height}
            alt="Selogic — סלוג׳יק טכנולוגיות ומערכות מידע"
            className="block h-[81px] w-[169px] max-w-full"
            decoding="async"
          />
        </span>
      ) : (
        <img
          src={LOGO_TRIM.src}
          srcSet={`${LOGO_TRIM.src} 1x, ${LOGO_TRIM.src2x} 2x`}
          width={LOGO_TRIM.width}
          height={LOGO_TRIM.height}
          alt="Selogic — סלוג׳יק טכנולוגיות ומערכות מידע"
          className="h-10 w-auto sm:h-11"
          decoding="async"
        />
      )}
    </Link>
  );
}
