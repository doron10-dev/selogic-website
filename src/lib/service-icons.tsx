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
  Phone,
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
  const key = `${title} ${href ?? ""}`.toLowerCase();
  if (key.includes("וואטסאפ") || key.includes("whatsapp") || key.includes("wa.me")) {
    return <WhatsAppIcon className={className} />;
  }

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

  if (key.includes("tel:") || key.includes("טלפון")) return Phone;
  if (key.includes("mailto:") || key.includes("מייל") || key.includes("email")) return Mail;
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

/** WhatsApp brand mark, kept local so contact cards need no extra icon package. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.58-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.91 1.213 3.108c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.821 9.821 0 0 1 2.897 6.988c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.3-1.654a11.882 11.882 0 0 0 5.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.481-8.413Z" />
    </svg>
  );
}
