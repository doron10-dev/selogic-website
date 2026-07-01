import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const publicRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/managed-it-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/technical-support", changeFrequency: "monthly", priority: 0.9 },
  { path: "/client-portal", changeFrequency: "monthly", priority: 0.8 },
  { path: "/information-systems-and-control", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/cybersecurity", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/backup-and-recovery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/microsoft-365-and-cloud", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/networks-and-communication", changeFrequency: "monthly", priority: 0.8 },
  { path: "/remote-support", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
