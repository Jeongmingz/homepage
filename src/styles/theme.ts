// styles/theme.ts

import { Theme } from "@/types/theme";

export const lightTheme: Theme = {
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
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#1E2337",
    surface: "#252B42",
    surfaceSecondary: "#2D355A",
    text: "#A5BFCC", // 밝은 회색빛 하양으로 변경
    textSecondary: "#CBD5E1", // 약간 더 어두운 회색빛
    textTertiary: "#94A3B8", // 더 부드러운 회색조
    border: "#364067",
    primary: "#60A5FA",
    secondary: "#9CA3AF",
    accent: "#34D399",
    info: "#2563EB",
  },
};
