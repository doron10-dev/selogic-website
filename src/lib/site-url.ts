/**
 * Safe site URL for sitemap, robots, and metadataBase.
 * Uses NEXT_PUBLIC_SITE_URL when set; falls back to local dev.
 * Do not hardcode production domain here.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : "http://localhost:3000";
  return url.replace(/\/+$/, "");
}
