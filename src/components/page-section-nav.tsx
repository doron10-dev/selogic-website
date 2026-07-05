import type { PageSectionLink } from "@/data/page-sections";

type PageSectionNavProps = {
  sections: PageSectionLink[];
};

export function PageSectionNav({ sections }: PageSectionNavProps) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="קפיצה לסקציות בעמוד"
      className="theme-nav-strip sticky top-[4.75rem] z-40"
    >
      <div className="container-page overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max gap-1 py-2.5">
          {sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className="theme-anchor-link"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
