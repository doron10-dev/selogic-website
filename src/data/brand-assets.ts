/**
 * Canonical brand asset paths (Gate 10D).
 * Source files live in incoming-brand-assets/ — mapped after visual inspection.
 *
 * Not wired into header: compact mark + text remains clearer at small sizes.
 * Wide / tagline logos: footer, OG image, and future brand surfaces.
 */

export const brandAssets = {
  /** ~188×60 — Selogic + Hebrew tagline (JPEG, light bg) */
  logoCompact: "/brand/selogic-logo-compact.jpg",
  /** ~380×60 — wide horizontal wordmark + tagline */
  logoWide: "/brand/selogic-logo-wide.jpg",
  /** ~380×285 — tall source / master with padding */
  logoSource: "/brand/selogic-logo-source.jpg",
  /** Transparent PNG compact wordmark + full Hebrew tagline */
  logoHebrewTaglinePng: "/brand/selogic-logo-hebrew-tagline.png",
  /** Wide tagline logo (JPEG) — preferred for OG / wide surfaces */
  logoHebrewTaglineJpg: "/brand/selogic-logo-hebrew-tagline.jpg",
  /** White wordmark on black square (~900×900) */
  logoOnDark: "/brand/selogic-logo-on-dark.png",
  /** SAFE / SKY / SUP strip with Hebrew labels (dark bg) */
  serviceStripHebrew: "/brand/selogic-service-strip-hebrew.png",
  /** SAFE / SKY / SUP icon strip — white on black, all icons present */
  serviceStripIcons: "/brand/selogic-service-strip-icons.png",
  /** Existing compact mark used in header/footer */
  logoMark: "/brand/selogic-mark.png",
  logoMark2x: "/brand/selogic-mark@2x.png",
  /** Open Graph / social share image (1200×630) */
  ogImage: "/brand/selogic-og-image.png",
} as const;

/** incoming-brand-assets03.png — incomplete icon strip (SUP missing icon); not published. */
export const brandAssetsUnusable = ["incoming-brand-assets/incoming-brand-assets03.png"] as const;
