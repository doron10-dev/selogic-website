import Link from "next/link";
import type { BreadcrumbItem } from "@/data/breadcrumbs";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  const trail: BreadcrumbItem[] = [{ label: "דף הבית", href: "/" }, ...items];

  return (
    <nav aria-label="מסלול ניווט" className="mb-4">
      <ol className="theme-breadcrumb">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1.5">
              {index > 0 ? (
                <span className="theme-breadcrumb-sep" aria-hidden="true">
                  /
                </span>
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={`truncate ${isLast ? "theme-text-heading font-medium" : ""}`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="theme-link truncate hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
