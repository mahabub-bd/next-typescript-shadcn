"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDarkMode = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      className="focus-visible:ring-offset-0"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Moon className="h-[0.8rem] w-[0.8rem] transition-all" />
      ) : (
        <Sun className="h-[0.8rem] w-[0.8rem] transition-all" />
      )}
    </Button>
  );
}
