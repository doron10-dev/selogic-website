import {
  Activity,
  Cloud,
  DatabaseBackup,
  FileText,
  Headset,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICON_SIZE = 22;

export function ServiceIcon({
  title,
  href,
  className = "h-[22px] w-[22px]",
}: {
  title: string;
  href?: string;
  className?: string;
}) {
  const Icon = resolveServiceIcon(title, href);
  return <Icon size={ICON_SIZE} className={className} aria-hidden="true" />;
}

export function ServiceIconChip({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <span className="icon-chip !h-11 !w-11">
      <ServiceIcon title={title} href={href} />
    </span>
  );
}

function resolveServiceIcon(title: string, href?: string): LucideIcon {
  const key = `${title} ${href ?? ""}`.toLowerCase();

  if (key.includes("managed-it") || key.includes("it מנוהלים")) return Headset;
  if (key.includes("technical-support") || key.includes("תמיכה טכנית")) return Wrench;
  if (key.includes("microsoft") || key.includes("365") || key.includes("ענן")) return Mail;
  if (key.includes("backup") || key.includes("גיבוי")) return DatabaseBackup;
  if (key.includes("cyber") || key.includes("אבטח")) return ShieldCheck;
  if (key.includes("network") || key.includes("רשת") || key.includes("תקשורת")) return Network;
  if (key.includes("information-systems") || key.includes("מערכות") || key.includes("בקרה")) return Activity;
  if (key.includes("client-portal") || key.includes("פורטל")) return LayoutDashboard;
  if (key.includes("remote") || key.includes("מרחוק")) return MonitorSmartphone;
  if (key.includes("solutions") || key.includes("כל השירות")) return Cloud;
  if (key.includes("תיעוד")) return FileText;

  return Headset;
}
