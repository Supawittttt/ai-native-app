import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import './globals.css'

const sarabun = Sarabun({
  variable: '--font-sarabun',
  subsets: ['thai', 'latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'AI Native App',
    template: '%s | AI Native App'
  },
  description: 'AI-Native Application with Next.js 16 & Better Auth',
  keywords: ['Next.js', 'AI', 'Authentication', 'Better Auth', 'RAG']
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='th' suppressHydrationWarning>
      <body className={`${sarabun.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
