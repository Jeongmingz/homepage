// types/theme.ts
export interface Theme {
  readonly colors: {
    readonly background: string;
    readonly surface: string;
    readonly surfaceSecondary: string;
    readonly text: string;
    readonly textSecondary: string;
    readonly textTertiary: string;
    readonly border: string;
    readonly primary: string;
    readonly secondary: string;
    readonly accent: string;
    readonly info: string;
  };
}
