import Link from "next/link";

type SiteLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  /** Tighter header lockup for desktop nav bar */
  compact?: boolean;
};

export function SiteLogo({ variant = "header", className = "", compact = false }: SiteLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 flex-col items-start leading-none ${className}`}
      aria-label="סלוג׳יק, דף הבית"
    >
      <span
        className={`font-semibold tracking-tight theme-text-heading ${
          isFooter ? "text-lg sm:text-xl" : "text-base sm:text-lg"
        }`}
      >
        סלוג׳יק
      </span>
      {!compact && !isFooter ? (
        <span className="theme-text-muted mt-0.5 hidden text-[11px] 3xl:block 3xl:text-xs">
          שירותי IT מנוהלים לעסקים
        </span>
      ) : null}
      {isFooter ? (
        <span className="theme-text-muted mt-1 text-xs sm:text-sm">טכנולוגיות ומערכות מידע</span>
      ) : null}
    </Link>
  );
}
