// app/layout.tsx
import StyledComponentsRegistry from "@/lib/StyleRegistry"
import { ClientProviders } from "@/providers/ClientProviders"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
            `,
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientProviders>
            {children}
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
