'use client'

import { useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { DetailedMaterial } from '@/components/DetailedMaterial'
import { allBeginnerTenses } from '@/lib/tenses/beginner'
import { allIntermediateTenses } from '@/lib/tenses/intermediate'
import { allAdvancedTenses } from '@/lib/tenses/advanced'
import { TenseLesson } from '@/lib/tenses/types'
import { markTenseRead } from '@/lib/progress'

export default function TenseDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const tenseId = params.tenseId as string
  const level = searchParams.get('level') || 'beginner'

  // Tandai tense sebagai sudah dibaca
  useEffect(() => {
    if (tenseId) markTenseRead(tenseId)
  }, [tenseId])

  // Find the tense from all tenses
  const allTenses = [
    ...allBeginnerTenses,
    ...allIntermediateTenses,
    ...allAdvancedTenses
  ]

  const tenseLesson = allTenses.find((lesson) => lesson.tense.id === tenseId)

  if (!tenseLesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          Tense not found 😕
        </h1>
        <p className="text-lg text-gray-600">
          The tense you're looking for doesn't exist.
        </p>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <DetailedMaterial tense={tenseLesson.tense} level={level} />
    </div>
  )
}
