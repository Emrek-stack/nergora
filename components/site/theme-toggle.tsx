"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  const useDark = theme === "dark";

  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.style.colorScheme = theme;
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function setTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");
  const isDark = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const preferredTheme =
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    applyTheme(preferredTheme);
    listeners.forEach((listener) => listener());
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";

    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      onClick={toggleTheme}
      suppressHydrationWarning
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
