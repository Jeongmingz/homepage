"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useState, useEffect } from "react";
import GlobalStyle from "@/styles/GlobalStyles";
import { StyleRegistry } from "styled-jsx";
import StyledComponentsRegistry from "@/lib/StyleRegistry";
import ThemeToggle from "@/_components/ThemeToggle";

// Props 타입 정의
interface LayoutProps {
  children: ReactNode; // children prop 타입 정의
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 사용자 테마 설정 저장 및 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <ThemeToggle $isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {/* 자식 컴포넌트를 렌더링 */}
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
