import { Section, type SectionTone } from "@/components/section";
import { credentialCopy, trustChips } from "@/data/credentials";

type TrustBarProps = {
  heading?: string;
  /** Optional narrative paragraph rendered above the chips (e.g. ISO wording). */
  intro?: string;
  /** Show the full, approved public-bodies sentence (incl. named entities). */
  showPublicBodies?: boolean;
  tone?: SectionTone;
  className?: string;
};

/**
 * Compact trust strip built from approved, flag-gated credentials only.
 * No logos, no numbers, no SLA / 24-7, no "official supplier" wording.
 */
export function TrustBar({
  heading,
  intro,
  showPublicBodies = true,
  tone = "tint",
  className = "py-8 sm:py-10",
}: TrustBarProps) {
  const chips = trustChips();

  return (
    <Section tone={tone} className={className}>
      {heading ? <p className="theme-eyebrow mb-4">{heading}</p> : null}
      {intro ? <p className="theme-text-body mb-5 max-w-3xl text-[17px] leading-relaxed">{intro}</p> : null}
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
        {chips.map((chip) => (
          <li
            key={chip.label}
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="theme-text-heading text-sm font-semibold">{chip.label}</span>
            {chip.sub ? <span className="theme-text-muted text-xs">{chip.sub}</span> : null}
          </li>
        ))}
      </ul>
      {showPublicBodies ? (
        <p className="theme-text-muted mt-4 max-w-3xl text-sm leading-relaxed">{credentialCopy.publicBodiesFull}</p>
      ) : null}
    </Section>
  );
}
