// styles/theme.ts

import { Theme } from "@/types/theme";

export const lightTheme: Theme = {
  name: "light",
  colors: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    surfaceSecondary: "#F9FAFB",
    text: "#1A1A1A",
    textSecondary: "#404040",
    textTertiary: "#9CA3AF",
    border: "#E5E5E5",
    primary: "#3B82F6",
    secondary: "#6B7280",
    accent: "#10B981",
    info: "#2563EB",
    themeToggle: "#000",
  },
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    background: "#1E2337",
    surface: "#252B42",
    surfaceSecondary: "#2D355A",
    text: "#D1E8FF" /* 주 텍스트 (가장 밝은 청회색) */,
    textSecondary: "#AEC3D4" /* 보조 텍스트 */,
    textTertiary: "#8FA8BF" /* 3차 텍스트 */,
    border: "#364067",
    primary: "#60A5FA",
    secondary: "#9CA3AF",
    accent: "#34D399",
    info: "#2563EB",
    themeToggle: "#fff",
  },
};
