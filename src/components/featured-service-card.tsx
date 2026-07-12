"use client";

import Link from "next/link";
import { MiniMockup, type MiniMockupVariant } from "@/components/mini-mockup";
import { ServiceIconChip } from "@/lib/service-icons";
import type { CardItem } from "@/types/service-page";

type FeaturedServiceCardProps = {
  item: CardItem;
  mockupVariant?: MiniMockupVariant;
};

export function FeaturedServiceCard({ item, mockupVariant }: FeaturedServiceCardProps) {
  if (!item.href) {
    return null;
  }

  const content = (
    <div className="min-w-0">
      <ServiceIconChip title={item.title} href={item.href} />
      <span className="theme-eyebrow mt-4 block text-xs font-semibold">שירות מרכזי</span>
      <h3 className="theme-text-heading mt-2 text-2xl font-semibold">{item.title}</h3>
      <p className="theme-text-body mt-3 max-w-prose text-[17px] leading-relaxed">{item.body}</p>
      <span
        className="theme-link mt-4 inline-block text-sm font-medium transition-transform duration-200 group-hover:-translate-x-1"
        aria-hidden="true"
      >
        ←
      </span>
    </div>
  );

  return (
    <Link href={item.href} className="theme-feature-card--featured group block sm:p-8">
      {mockupVariant ? (
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {content}
          <div className="min-w-0 lg:justify-self-end">
            <MiniMockup variant={mockupVariant} />
          </div>
        </div>
      ) : (
        content
      )}
    </Link>
  );
}
