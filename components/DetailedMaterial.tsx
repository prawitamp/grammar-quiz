'use client'

import { Card, Button } from '@/components/ui'
import { TenseData } from '@/lib/tenses/types'
import { tenseExplanations } from '@/lib/tenses/explanations'
import Link from 'next/link'

interface DetailedMaterialProps {
  tense: TenseData
  level: string
}

export function DetailedMaterial({ tense, level }: DetailedMaterialProps) {
  const explanation = tenseExplanations[tense.id]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold mb-3 text-gradient">
          {tense.name} 📚
        </h1>
        <p className="text-xl text-gray-600 font-semibold mb-4">
          {tense.description}
        </p>
        <Link href={`/tenses`}>
          <Button variant="secondary" className="mb-6">
            ← Back to Tenses
          </Button>
        </Link>
      </div>

      {/* Gen Z Explanation */}
      {explanation && (
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-purple-200">
          <h3 className="text-2xl font-display font-bold mb-4 text-purple-700">
            💭 What's This About?
          </h3>
          <p className="text-lg leading-relaxed text-gray-800 font-semibold">
            {explanation.genZExplain}
          </p>
        </Card>
      )}

      {/* Formula */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-4">⚙️ Formula</h3>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-lg font-bold">
          {tense.formula}
        </div>
      </Card>

      {/* Real World Example */}
      {explanation && (
        <Card className="bg-green-50 border-2 border-green-200">
          <h3 className="text-2xl font-display font-bold mb-4 text-green-700">
            🌍 Real World Example
          </h3>
          <p className="text-lg text-gray-800 font-semibold">
            {explanation.realWorldExample}
          </p>
        </Card>
      )}

      {/* Memory Trick */}
      {explanation && (
        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-orange-300">
          <h3 className="text-2xl font-display font-bold mb-4 text-orange-700">
            🎯 Memory Trick
          </h3>
          <p className="text-xl font-display text-orange-800">
            {explanation.memoryTrick}
          </p>
        </Card>
      )}

      {/* Common Mistakes */}
      {explanation && (
        <Card className="bg-red-50 border-2 border-red-200">
          <h3 className="text-2xl font-display font-bold mb-4 text-red-700">
            ❌ Common Mistakes
          </h3>
          <ul className="space-y-3">
            {explanation.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <span className="text-gray-800 font-semibold">{mistake}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Tips */}
      {explanation && (
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h3 className="text-2xl font-display font-bold mb-4 text-blue-700">
            💡 Pro Tips
          </h3>
          <ul className="space-y-3">
            {explanation.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">✨</span>
                <span className="text-gray-800 font-semibold">{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Usage Context */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-4">📖 When to Use This Tense</h3>
        <ul className="space-y-2">
          {tense.usage.map((use, i) => (
            <li key={i} className="flex gap-3 text-lg">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="font-semibold text-gray-700">{use}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Time Signals */}
      <Card>
        <h3 className="text-2xl font-display font-bold mb-4">🕐 Time Signals (Look for these words)</h3>
        <div className="flex flex-wrap gap-3">
          {tense.timeSignals.map((signal, i) => (
            <span key={i} className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 px-4 py-2 rounded-full font-semibold">
              "{signal}"
            </span>
          ))}
        </div>
      </Card>

      {/* Start Quiz CTA */}
      <div className="text-center pt-6">
        <p className="text-lg font-semibold text-gray-600 mb-4">
          Ready to master this tense? 🎮
        </p>
        <Link href={`/quiz?tense=${tense.id}&level=${level}`}>
          <Button variant="primary" size="lg" block>
            Start Practice Quiz 🚀
          </Button>
        </Link>
      </div>
    </div>
  )
}
