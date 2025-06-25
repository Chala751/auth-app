// app/layout.tsx
import './globals.css'
import { Toaster } from 'sonner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth App',
  description: 'Next.js Auth App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  )
}
