"use client";

import { useLayoutEffect, useState } from "react";
import { IconMoon, IconSun } from "@/components/ui/icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // Start matching the server's default so hydration never mismatches; the
  // inline script in <head> has already set the real value on <html> by the
  // time this runs, so read it back before paint.
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
}
