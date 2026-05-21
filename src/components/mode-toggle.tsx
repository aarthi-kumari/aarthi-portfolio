"use client";

import { useContext } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { DockContext } from "@/components/magicui/dock";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const dockContext = useContext(DockContext);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-transparent text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        dockContext?.resetMouseX();
      }}
    >
      <SunIcon className="size-4 block dark:hidden" />
      <MoonIcon className="hidden size-4 dark:block" />
    </button>
  );
}
