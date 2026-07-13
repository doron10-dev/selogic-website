import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "diagnosis" | "secondary" | "dark" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-blue-600 text-white shadow-md hover:bg-blue-500 active:shadow-sm",
  diagnosis:
    "cine-btn-primary",
  secondary:
    "theme-btn-secondary active:shadow-sm",
  dark:
    "bg-slate-950 text-white shadow-md hover:bg-slate-800",
  ghost:
    "border border-white/25 bg-transparent text-white hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-lift inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
