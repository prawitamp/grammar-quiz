'use client'

import { Card, Button } from '@/components/ui'
import { TenseData } from '@/lib/tenses/types'
import Link from 'next/link'

interface MaterialViewerProps {
  tense: TenseData
  level: string
  onStartQuiz?: () => void
}

export function MaterialViewer({ tense, level, onStartQuiz }: MaterialViewerProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold mb-3 text-gradient">
          {tense.name}
        </h1>
        <p className="text-xl text-gray-600 font-semibold">
          {tense.description}
        </p>
      </div>

      {/* Formula Card */}
      <Card className="bg-gradient-primary">
        <div className="text-center">
          <p className="text-sm opacity-90 mb-2 font-semibold">Formula</p>
          <p className="text-3xl font-mono font-bold">{tense.formula}</p>
        </div>
      </Card>

      {/* Usage */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-4">📚 When to Use</h3>
        <ul className="space-y-2">
          {tense.usage.map((use, i) => (
            <li key={i} className="flex gap-3 text-lg">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="font-semibold text-gray-700">{use}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Examples */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-6">💡 Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Positive */}
          <div>
            <p className="font-display font-bold text-green-600 mb-3">✓ Positive</p>
            <ul className="space-y-2">
              {tense.examples.positive.map((ex, i) => (
                <li key={i} className="text-sm bg-green-50 p-3 rounded font-semibold text-gray-700">
                  "{ex}"
                </li>
              ))}
            </ul>
          </div>

          {/* Negative */}
          <div>
            <p className="font-display font-bold text-red-600 mb-3">✗ Negative</p>
            <ul className="space-y-2">
              {tense.examples.negative.map((ex, i) => (
                <li key={i} className="text-sm bg-red-50 p-3 rounded font-semibold text-gray-700">
                  "{ex}"
                </li>
              ))}
            </ul>
          </div>

          {/* Interrogative */}
          <div>
            <p className="font-display font-bold text-blue-600 mb-3">❓ Question</p>
            <ul className="space-y-2">
              {tense.examples.interrogative.map((ex, i) => (
                <li key={i} className="text-sm bg-blue-50 p-3 rounded font-semibold text-gray-700">
                  "{ex}"
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Time Signals */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-4">🕐 Time Signals</h3>
        <div className="flex flex-wrap gap-3">
          {tense.timeSignals.map((signal, i) => (
            <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
              {signal}
            </span>
          ))}
        </div>
      </Card>

      {/* Start Quiz */}
      <div className="text-center pt-6">
        <Link href={`/game?tense=${tense.id}&level=${level}`}>
          <Button variant="primary" size="lg" block>
            Start Practice Quiz 🎮
          </Button>
        </Link>
      </div>
    </div>
  )
}
