import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-signal text-white hover:bg-signal-ink shadow-card",
  secondary:
    "bg-white text-slate-ink border border-slate-line hover:border-signal hover:text-signal",
  ghost:
    "bg-transparent text-paper border border-paper/25 hover:bg-paper/10",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
