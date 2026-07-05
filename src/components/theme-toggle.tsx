"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  persistTheme,
  resolveTheme,
  type ThemeMode,
} from "@/lib/theme";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const resolved = resolveTheme(getStoredTheme());
    applyTheme(resolved);
    setTheme(resolved);
  }, []);

  const toggle = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    persistTheme(next);
  };

  const isDark = theme === "dark";
  const buttonClass = `theme-icon-button cursor-pointer ${className}`;

  return (
    <button
      type="button"
      onClick={toggle}
      className={buttonClass}
      aria-label={isDark ? "מצב כהה פעיל, לחצו למצב בהיר" : "מצב בהיר פעיל, לחצו למצב כהה"}
      aria-pressed={isDark}
      suppressHydrationWarning
    >
      {isDark ? (
        <Moon size={18} className="shrink-0" aria-hidden="true" />
      ) : (
        <Sun size={18} className="shrink-0" aria-hidden="true" />
      )}
    </button>
  );
}

/** Keep React state aligned if theme was changed elsewhere. */
export function ThemeSync() {
  useEffect(() => {
    const resolved = resolveTheme(getStoredTheme());
    applyTheme(resolved);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== "selogic-theme") return;
      const next = resolveTheme(getStoredTheme());
      applyTheme(next);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return null;
}

export { readAppliedTheme } from "@/lib/theme";
