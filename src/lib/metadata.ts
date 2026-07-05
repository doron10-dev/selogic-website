import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export function pageUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = pageUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "he_IL",
      siteName: "Selogic",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
