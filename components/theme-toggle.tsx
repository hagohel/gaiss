"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next ?? "light")}
      className="rounded-full border border-[rgb(var(--border))] px-3 py-2 text-sm hover:bg-[rgb(var(--card))]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}
