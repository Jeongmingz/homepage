'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '@/hooks/useTheme';
import { lightTheme, darkTheme } from '@/styles/theme';
import { Theme } from '@/types/theme';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const themeState = useTheme({ setMounted }); // Custom hook to manage theme state
  const currentTheme: Theme = themeState.resolvedTheme === 'dark' ? darkTheme : lightTheme;

  // Ensure the component is mounted before rendering children
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a fallback UI with the default dark theme until mounted
    return (
      <StyledThemeProvider theme={darkTheme}>
        <div
          style={{
            backgroundColor: darkTheme.colors.background,
            color: darkTheme.colors.text,
            minHeight: '100vh',
          }}
        >
          <div style={{ visibility: 'hidden' }}>{children}</div>
        </div>
      </StyledThemeProvider>
    );
  }

  // Context value to be provided to consumers
  const contextValue: ThemeContextType = {
    theme: currentTheme,
    resolvedTheme: themeState.resolvedTheme,
    setTheme: themeState.setTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
