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
      className="sticky top-[4.75rem] z-40 border-b backdrop-blur-sm"
      style={{
        borderColor: "var(--theme-border)",
        backgroundColor: "color-mix(in srgb, var(--theme-header) 82%, transparent)",
      }}
    >
      <div className="container-page overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max items-center gap-0.5 py-1.5">
          {sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className="theme-anchor-link whitespace-nowrap px-2.5 py-1 text-[12.5px] opacity-90 hover:opacity-100"
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
