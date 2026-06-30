import Link from "next/link";

const LOGO_MARK = {
  src: "/brand/selogic-mark.png",
  src2x: "/brand/selogic-mark@2x.png",
  width: 32,
  height: 32,
} as const;

type SiteLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function SiteLogo({ variant = "header", className = "" }: SiteLogoProps) {
  const isFooter = variant === "footer";
  const nameClass = isFooter
    ? "text-base font-bold text-paper sm:text-lg"
    : "text-base font-bold text-slate-ink sm:text-lg";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2 sm:gap-2.5 ${className}`}
      aria-label="סלוג׳יק — דף הבית"
    >
      <img
        src={LOGO_MARK.src}
        srcSet={`${LOGO_MARK.src} 1x, ${LOGO_MARK.src2x} 2x`}
        width={LOGO_MARK.width}
        height={LOGO_MARK.height}
        alt=""
        aria-hidden="true"
        className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
        decoding="async"
      />
      <span className={nameClass}>סלוג׳יק</span>
    </Link>
  );
}
