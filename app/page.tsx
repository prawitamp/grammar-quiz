'use client'

import { Card, Button } from '@/components/ui'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LandingPage() {
  const { data: session } = useSession()
  const router = useRouter()

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session, router])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-gradient">
          Welcome to GrammarQuiz! ✨
        </h1>
        <p className="text-2xl text-gray-700 font-semibold mb-8">
          Belajar grammar bahasa Inggris dengan cara yang seru dan menyenangkan! 🚀
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/register">
            <Button variant="primary" size="lg">
              Mulai Sekarang 🎉
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center hover:scale-105 transform">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl font-display font-bold mb-3">Game Interaktif</h3>
          <p className="text-gray-700 font-semibold">
            Belajar grammar lewat quiz dan game yang seru
          </p>
        </Card>

        <Card className="text-center hover:scale-105 transform">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-2xl font-display font-bold mb-3">Track Progress</h3>
          <p className="text-gray-700 font-semibold">
            Lihat perkembangan XP, streak, dan accuracy kamu
          </p>
        </Card>

        <Card className="text-center hover:scale-105 transform">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-display font-bold mb-3">Achievements</h3>
          <p className="text-gray-700 font-semibold">
            Unlock achievements dan kompetisi dengan teman
          </p>
        </Card>
      </div>
    </div>
  )
}
