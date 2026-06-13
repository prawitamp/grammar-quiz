'use client'

import { useState } from 'react'
import { Card, Button, Badge } from '@/components/ui'
import Link from 'next/link'
import { allBeginnerTenses } from '@/lib/tenses/beginner'
import { allIntermediateTenses } from '@/lib/tenses/intermediate'
import { allAdvancedTenses } from '@/lib/tenses/advanced'

type Level = 'beginner' | 'intermediate' | 'advanced'

export default function TensesPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null)

  const levels = [
    { id: 'beginner', name: 'Beginner', icon: '🌱', desc: 'Present Tenses', color: 'from-green-400 to-green-500' },
    { id: 'intermediate', name: 'Intermediate', icon: '📚', desc: 'Past Tenses', color: 'from-blue-400 to-blue-500' },
    { id: 'advanced', name: 'Advanced', icon: '🚀', desc: 'Future + Past Future', color: 'from-purple-400 to-purple-500' }
  ]

  const tensesByLevel = {
    beginner: allBeginnerTenses,
    intermediate: allIntermediateTenses,
    advanced: allAdvancedTenses
  }

  const currentTenses = selectedLevel ? tensesByLevel[selectedLevel] : []

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-display font-bold mb-3 text-gradient">
          Master 16 English Tenses! 🎓
        </h1>
        <p className="text-xl text-gray-600 font-semibold">
          Pilih level kamu dan mulai belajar tenses dengan seru
        </p>
      </div>

      {!selectedLevel ? (
        /* Level Selection */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {levels.map((level) => (
            <Card
              key={level.id}
              className={`bg-gradient-to-br ${level.color} text-white cursor-pointer hover:scale-105 transform text-center p-8`}
              onClick={() => setSelectedLevel(level.id as Level)}
            >
              <div className="text-6xl mb-4">{level.icon}</div>
              <h3 className="text-3xl font-display font-bold mb-2">{level.name}</h3>
              <p className="text-base opacity-90 mb-4">{level.desc}</p>
              <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-lg font-semibold">
                {level.id === 'beginner' ? '4' : level.id === 'intermediate' ? '4' : '8'} Tenses
              </div>
            </Card>
          ))}
        </div>
      ) : (
        /* Tense Selection */
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">
              {levels.find(l => l.id === selectedLevel)?.name} Level
            </h2>
            <Button variant="secondary" onClick={() => setSelectedLevel(null)}>
              ← Back
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTenses.map((lesson) => (
              <Card key={lesson.tense.id} className="hover:scale-105 transform">
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {lesson.tense.name}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-3">
                    {lesson.tense.description}
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mb-3">
                    <p className="text-sm font-mono font-bold text-primary">
                      Formula: {lesson.tense.formula}
                    </p>
                  </div>
                </div>

                {/* Tense Usage */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Usage:</p>
                  <ul className="text-sm space-y-1">
                    {lesson.tense.usage.slice(0, 2).map((u, i) => (
                      <li key={i} className="text-gray-700">• {u}</li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Example:</p>
                  <p className="text-sm bg-green-50 p-2 rounded text-green-700 font-semibold">
                    ✓ {lesson.tense.examples.positive[0]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href={`/tenses/${lesson.tense.id}?level=${selectedLevel}`}>
                    <Button variant="secondary" block>
                      📖 View Details
                    </Button>
                  </Link>
                  <Link href={`/game?tense=${lesson.tense.id}&level=${selectedLevel}`}>
                    <Button variant="primary" block>
                      Start Quiz 🎮
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
