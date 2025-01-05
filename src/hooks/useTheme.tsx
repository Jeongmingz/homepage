// hooks/useTheme.ts
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/styles/theme";
import { Theme } from "@/types/theme";

type ThemeMode = "light" | "dark";

export function useTheme({ setMounted }: { setMounted: (value: boolean) => void }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark"); // Default to dark theme
  const [theme, setTheme] = useState<Theme>(darkTheme); // Default to dark theme object

  // Load theme from localStorage or fallback to default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }
    setMounted(true); // Notify that the component is mounted
  }, [setMounted]);

  // Sync theme changes to localStorage and update document attributes
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
    setTheme(themeMode === "dark" ? darkTheme : lightTheme);
  }, [themeMode]);

  // Function to toggle or explicitly set the theme
  const toggleTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme);
  };

  return {
    theme, // The current theme object (light or dark)
    resolvedTheme: themeMode, // The current mode ("light" or "dark")
    setTheme: toggleTheme, // Function to change the theme
    mounted: true, // Always true after initial mount
  };
}
