import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'GrammarQuiz - Belajar Grammar dengan Seru',
  description: 'Platform belajar grammar interaktif untuk siswa SD, SMP, dan SMA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
