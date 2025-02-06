"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useState, useEffect } from "react";
import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/StyleRegistry";
import ThemeToggle from "@/_components/ThemeToggle";
import 'md-editor-rt/lib/style.css';
import { Noto_Sans_KR } from 'next/font/google';

// Props 타입 정의
interface LayoutProps {
  children: ReactNode; // children prop 타입 정의
}

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});



export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 사용자 테마 설정 저장 및 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: light)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "light" : "dark");
      return newMode;
    });
  };

  return (
    <html>
      <body className={notoSansKr.variable}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <ThemeToggle $isDarkMode={!isDarkMode} toggleTheme={toggleTheme} />
            {/* 자식 컴포넌트를 렌더링 */}
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
