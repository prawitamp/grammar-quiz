'use client'

import { useState, useEffect } from 'react'
import { Card, Button } from '@/components/ui'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getAllProgress } from '@/lib/progress'

type Level = 'beginner' | 'intermediate' | 'advanced'

interface LevelData {
  id: Level
  name: string
  icon: string
  description: string
  color: string
  tenses: { id: string; name: string; locked: boolean }[]
}

export default function GamePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null)
  const [completedTenses, setCompletedTenses] = useState<string[]>([])
  const [readTenses, setReadTenses] = useState<string[]>([])

  useEffect(() => {
    const progress = getAllProgress()
    setCompletedTenses(progress.completedTenses)
    setReadTenses(progress.readTenses)
  }, [])

  // Level definitions with progressive unlocking
  const levels: LevelData[] = [
    {
      id: 'beginner',
      name: 'Beginner',
      icon: '🌱',
      description: 'Master Present Tenses',
      color: 'from-green-400 to-green-500',
      tenses: [
        { id: 'simple-present', name: 'Simple Present', locked: false },
        { id: 'present-continuous', name: 'Present Continuous', locked: false },
        { id: 'present-perfect', name: 'Present Perfect', locked: false },
        { id: 'present-perfect-continuous', name: 'Present Perfect Continuous', locked: false }
      ]
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      icon: '📚',
      description: 'Master Past Tenses',
      color: 'from-blue-400 to-blue-500',
      tenses: [
        { id: 'simple-past', name: 'Simple Past', locked: false },
        { id: 'past-continuous', name: 'Past Continuous', locked: false },
        { id: 'past-perfect', name: 'Past Perfect', locked: false },
        { id: 'past-perfect-continuous', name: 'Past Perfect Continuous', locked: false }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      icon: '🚀',
      description: 'Master Future Tenses',
      color: 'from-purple-400 to-purple-500',
      tenses: [
        { id: 'simple-future', name: 'Simple Future', locked: false },
        { id: 'future-continuous', name: 'Future Continuous', locked: false },
        { id: 'future-perfect', name: 'Future Perfect', locked: false },
        { id: 'future-perfect-continuous', name: 'Future Perfect Continuous', locked: false }
      ]
    }
  ]

  const currentLevel = levels.find(l => l.id === selectedLevel)

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      {!selectedLevel ? (
        /* Level Selection Screen */
        <>
          <div className="text-center mb-6 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl font-display font-bold mb-2 sm:mb-3 text-gradient">
              Choose Your Level! 🎮
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-semibold">
              Pilih level dan mulai belajar tenses!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {levels.map((level) => (
              <Card
                key={level.id}
                className={`bg-gradient-to-br ${level.color} text-white cursor-pointer hover:scale-105 transform text-center p-5 sm:p-8`}
                onClick={() => setSelectedLevel(level.id)}
              >
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{level.icon}</div>
                <h3 className="text-xl sm:text-3xl font-display font-bold mb-1 sm:mb-2">{level.name}</h3>
                <p className="text-xs sm:text-base opacity-90 mb-3 sm:mb-4">{level.description}</p>
                <div className="inline-block bg-white bg-opacity-20 px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-sm sm:text-base">
                  {level.tenses.length} Tenses
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        /* Tense Selection Screen */
        <>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-3">
            <div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold mb-1 sm:mb-2">
                {currentLevel?.icon} {currentLevel?.name} Level
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 font-semibold">
                Pilih tense dan mulai latihan!
              </p>
            </div>
            <Button variant="secondary" onClick={() => setSelectedLevel(null)} className="text-sm sm:text-base">
              ← Change Level
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {currentLevel?.tenses.map((tense, index) => {
              const isCompleted = completedTenses.includes(tense.id)

              return (
                <Card
                  key={tense.id}
                  className={`relative hover:scale-105 transform ${tense.locked ? 'opacity-60' : ''}`}
                >
                  {tense.locked && (
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl flex items-center justify-center backdrop-blur-sm z-10">
                      <div className="text-center">
                        <div className="text-5xl mb-2">🔒</div>
                        <p className="font-display font-bold text-gray-700">
                          Complete previous tenses
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {index + 1}. {tense.name}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {readTenses.includes(tense.id) && !isCompleted && (
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-display font-bold text-sm">
                          📖 Dibaca
                        </div>
                      )}
                      {isCompleted && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-display font-bold text-sm">
                          ✅ Completed
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href={`/tenses/${tense.id}?level=${selectedLevel}`}>
                      <Button variant="secondary" block disabled={tense.locked}>
                        📖 View Material
                      </Button>
                    </Link>
                    <Link href={`/quiz?tense=${tense.id}&level=${selectedLevel}`}>
                      <Button variant="primary" block disabled={tense.locked}>
                        {isCompleted ? 'Practice Again 🎯' : 'Start Quiz 🚀'}
                      </Button>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Progress Summary */}
          <Card className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-2xl font-display font-bold mb-1 sm:mb-2">Progress</h3>
                <p className="text-xs sm:text-base text-gray-700 font-semibold">
                  ✅ {completedTenses.filter(t => currentLevel?.tenses.some(lt => lt.id === t)).length}/{currentLevel?.tenses.length}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                  📖 {readTenses.filter(t => currentLevel?.tenses.some(lt => lt.id === t)).length}/{currentLevel?.tenses.length} read
                </p>
              </div>
              <div className="text-3xl sm:text-5xl">
                {completedTenses.length === currentLevel?.tenses.length ? '🏆' : '📊'}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
