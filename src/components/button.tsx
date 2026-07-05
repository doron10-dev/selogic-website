import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-blue-600 text-white shadow-md hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
  secondary:
    "theme-btn-secondary hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
  dark:
    "bg-slate-950 text-white shadow-md hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-white/25 bg-transparent text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
