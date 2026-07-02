import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghost-ink";
  className?: string;
};

const variants = {
  primary:
    "bg-signal text-white hover:bg-signal-ink shadow-card",
  secondary:
    "bg-white text-slate-ink border border-slate-line hover:border-signal hover:text-signal",
  ghost:
    "bg-transparent text-paper border border-paper/25 hover:bg-paper/10",
  "ghost-ink":
    "bg-transparent text-slate-ink border border-transparent underline decoration-signal/40 decoration-2 underline-offset-4 hover:text-signal hover:decoration-signal",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
