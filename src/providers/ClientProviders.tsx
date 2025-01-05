'use client'

import { ThemeProvider } from "@/providers/ThemeProvider"
import GlobalStyle from "@/styles/GlobalStyles"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
