'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Card, Badge, ProgressBar, Button } from '@/components/ui'
import Link from 'next/link'
import { allBeginnerTenses as beginner } from '@/lib/tenses/beginner'
import { allIntermediateTenses as intermediate } from '@/lib/tenses/intermediate'
import { allAdvancedTenses as advanced } from '@/lib/tenses/advanced'
import { getCompletedCount } from '@/lib/progress'

const totalTenses = beginner.length + intermediate.length + advanced.length

export default function DashboardPage() {
  const { data: session } = useSession()
  const user = session?.user

  const [progress, setProgress] = useState({ completed: 0, read: 0, percentage: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setProgress(getCompletedCount(totalTenses))
    setMounted(true)
  }, [])

  const { completed: completedTenses, read: readTenses, percentage: progressPercent } = progress

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero / CTA Section */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-5 sm:p-8 md:p-12 mb-6 sm:mb-10 shadow-playful-lg">
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 sm:mb-3">
            Welcome back, {user?.name || 'Learner'}! 👋
          </h1>
          <p className="text-sm sm:text-lg text-white text-opacity-90 font-semibold mb-4 sm:mb-6 max-w-xl">
            Kamu sudah menguasai <strong>{completedTenses}</strong> dari <strong>{totalTenses}</strong> tenses! Ayo lanjutkan belajarmu! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link href="/game" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="bg-white text-purple-700 hover:bg-purple-50 hover:shadow-xl w-full sm:w-auto text-sm sm:text-base">
                🎮 Lanjut Belajar
              </Button>
            </Link>
            <Link href="/profile" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-purple-700 w-full sm:w-auto text-sm sm:text-base">
                👤 Lihat Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-10">
        <Card variant="gradient" className="text-center p-3 sm:p-5">
          <div className="text-2xl sm:text-4xl font-display font-bold">{user?.totalXP || 0}</div>
          <p className="text-xs font-semibold opacity-90 mt-1">⭐ Total XP</p>
        </Card>
        <Card variant="warm" className="text-center p-3 sm:p-5">
          <div className="text-2xl sm:text-4xl font-display font-bold">{user?.streak || 0}🔥</div>
          <p className="text-xs font-semibold opacity-90 mt-1">Streak</p>
        </Card>
        <Card variant="success" className="text-center p-3 sm:p-5">
          <div className="text-2xl sm:text-4xl font-display font-bold">{completedTenses}/{totalTenses}</div>
          <p className="text-xs font-semibold opacity-90 mt-1">Tenses</p>
        </Card>
        <Card className="text-center p-3 sm:p-5">
          <div className="text-2xl sm:text-4xl font-display font-bold text-gradient">Lv.{user?.level || 1}</div>
          <p className="text-xs font-semibold text-gray-600 mt-1">Level</p>
        </Card>
      </div>

      {/* Progress + Resume */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-10">
        <Card variant="gradient" className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-2xl font-display font-bold">📊 Progress</h3>
            <Badge variant="success">{progressPercent}%</Badge>
          </div>
          <ProgressBar value={progressPercent} className="mb-4 sm:mb-6" variant="primary" size="md" />
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="bg-white bg-opacity-20 rounded-xl p-2 sm:p-3 backdrop-blur">
              <div className="text-base sm:text-xl font-display font-bold">{beginner.length}</div>
              <div className="text-xs opacity-90 font-semibold">🌱 Beginner</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-2 sm:p-3 backdrop-blur">
              <div className="text-base sm:text-xl font-display font-bold">{intermediate.length}</div>
              <div className="text-xs opacity-90 font-semibold">📚 Intermediate</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-2 sm:p-3 backdrop-blur">
              <div className="text-base sm:text-xl font-display font-bold">{advanced.length}</div>
              <div className="text-xs opacity-90 font-semibold">🚀 Advanced</div>
            </div>
          </div>
        </Card>

        {/* Daily Challenge */}
        <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 p-4 sm:p-6 flex flex-col items-center justify-center text-center">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce-subtle">🎯</div>
          <h3 className="text-lg sm:text-2xl font-display font-bold mb-2 text-orange-800">Daily Challenge</h3>
          <p className="text-xs sm:text-sm font-semibold text-orange-700 mb-4">
            Kerjakan 1 quiz tenses hari ini!
          </p>
          <Link href="/game" className="w-full sm:w-auto">
            <Button variant="primary" className="bg-gradient-to-r from-orange-500 to-red-500 w-full sm:w-auto text-sm sm:text-base">
              Mulai 🚀
            </Button>
          </Link>
        </Card>
      </div>

      {/* Learning Path */}
      <div className="mb-6 sm:mb-10">
        <h3 className="text-lg sm:text-2xl font-display font-bold mb-4 sm:mb-6">📚 Learning Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          <Card className="p-4 sm:p-6 text-center hover:scale-105 transform cursor-pointer">
            <div className="text-5xl mb-4">🌱</div>
            <h4 className="text-xl font-display font-bold mb-2">Beginner</h4>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Present Tenses • 4 materials</p>
            <Link href="/game">
              <Button variant="secondary" block>Start Learning →</Button>
            </Link>
          </Card>
          <Card className="p-6 text-center hover:scale-105 transform cursor-pointer">
            <div className="text-5xl mb-4">📚</div>
            <h4 className="text-xl font-display font-bold mb-2">Intermediate</h4>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Past Tenses • 4 materials</p>
            <Link href="/game">
              <Button variant="secondary" block>Start Learning →</Button>
            </Link>
          </Card>
          <Card className="p-6 text-center hover:scale-105 transform cursor-pointer">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-display font-bold mb-2">Advanced</h4>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Future Tenses • 8 materials</p>
            <Link href="/game">
              <Button variant="secondary" block>Start Learning →</Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* Traktir Eskrim */}
      <div className="mb-6 sm:mb-10">
        <a href="https://teer.id/prawitamp" target="_blank" rel="noopener noreferrer" className="block">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-cyan-300 p-4 sm:p-6 text-center hover:scale-105 transform cursor-pointer transition-all">
            <div className="text-4xl sm:text-5xl mb-3">🍦</div>
            <h3 className="text-lg sm:text-2xl font-display font-bold mb-2 text-cyan-800">
              Traktir Eskrim untuk Developer 🍦
            </h3>
            <p className="text-sm sm:text-base font-semibold text-cyan-700">
              Kalau aplikasi ini membantu belajarmu, boleh banget traktir eskrim biar aku makin semangat! 😊
              <p>Langsung KLIK aja ya disiniii~ maaciw </p>
            </p>
          </Card>
        </a>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        <Link href="/game">
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 p-4 sm:p-6 hover:scale-105 transform cursor-pointer">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-3xl sm:text-5xl">🎮</div>
              <div>
                <h4 className="text-base sm:text-xl font-display font-bold">Practice Tenses</h4>
                <p className="text-xs sm:text-sm font-semibold text-gray-600">Pilih level dan mulai belajar!</p>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="/profile">
          <Card className="bg-gradient-to-br from-blue-100 to-green-100 border-2 border-blue-200 p-4 sm:p-6 hover:scale-105 transform cursor-pointer">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-3xl sm:text-5xl">🏆</div>
              <div>
                <h4 className="text-base sm:text-xl font-display font-bold">My Achievements</h4>
                <p className="text-xs sm:text-sm font-semibold text-gray-600">Lihat progress dan stats!</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}