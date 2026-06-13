'use client'

import { useState, useEffect } from 'react'
import { Card, Button, Badge, Option, Feedback, Modal } from '@/components/ui'
import { useSearchParams, useRouter } from 'next/navigation'
import { allBeginnerTenses } from '@/lib/tenses/beginner'
import { allIntermediateTenses } from '@/lib/tenses/intermediate'
import { allAdvancedTenses } from '@/lib/tenses/advanced'
import { beginnerExtraQuestions } from '@/lib/tenses/questions-beginner'
import { intermediateExtraQuestions } from '@/lib/tenses/questions-intermediate'
import { advancedExtraQuestions } from '@/lib/tenses/questions-advanced'
import { TenseQuestion } from '@/lib/tenses/types'
import { MemeReaction } from '@/components/MemeReaction'
import { markTenseCompleted } from '@/lib/progress'
import Link from 'next/link'

export default function QuizPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tenseId = searchParams.get('tense')
  const level = searchParams.get('level') || 'beginner'

  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [celebration, setCelebration] = useState(false)
  const [memeType, setMemeType] = useState<'correct' | 'incorrect' | null>(null)

  // Find tense data
  const allTenses = [...allBeginnerTenses, ...allIntermediateTenses, ...allAdvancedTenses]
  const tenseLesson = allTenses.find(t => t.tense.id === tenseId)

  // Merge original + extra questions (biar total minimal 10 per tense)
  const extraQMap: Record<string, Record<string, TenseQuestion[]>> = {
    beginner: beginnerExtraQuestions,
    intermediate: intermediateExtraQuestions,
    advanced: advancedExtraQuestions,
  }
  const extraQuestions = extraQMap[level]?.[tenseId || ''] || []
  const questions: TenseQuestion[] = [
    ...(tenseLesson?.questions || []),
    ...extraQuestions
  ]
  const currentQuestion = questions[currentQ]
  const totalQuestions = questions.length
  const isCorrect = selectedOption
    ? currentQuestion?.options.find(o => o.letter === selectedOption)?.isCorrect ?? false
    : false

  const handleOptionClick = (letter: string) => {
    if (showFeedback) return
    setSelectedOption(letter)
  }

  const handleSubmit = () => {
    if (isCorrect) {
      setScore(score + 100)
      setCorrectCount(correctCount + 1)
    }
    setMemeType(isCorrect ? 'correct' : 'incorrect')
  }

  const handleMemeComplete = () => {
    setMemeType(null)
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      // Tandai tense sebagai sudah dikerjakan
      if (tenseId) markTenseCompleted(tenseId)
      setShowResult(true)
      setCelebration(true)
    }
  }

  // If no tense selected, show guide
  if (!tenseId) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-display font-bold mb-6 text-gradient">
          Pilih Tenses untuk Quiz! 🎮
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Pilih level dan tense dari halaman Games
        </p>
        <Link href="/game">
          <Button variant="primary" size="lg">
            Go to Tenses Games 🚀
          </Button>
        </Link>
      </div>
    )
  }

  if (!tenseLesson || questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">😕 Quiz Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Maaf, quiz untuk tense ini belum tersedia
        </p>
        <Link href="/game">
          <Button variant="primary">Back to Games</Button>
        </Link>
      </div>
    )
  }

  // Result screen
  if (showResult) {
    const percentage = Math.round((correctCount / totalQuestions) * 100)
    const xpEarned = score
    const isPerfect = percentage === 100

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Card className="p-6 sm:p-12 text-center">
          <div className="text-5xl sm:text-7xl mb-4 sm:mb-6">{isPerfect ? '🏆' : percentage >= 70 ? '🎉' : '💪'}</div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-2 sm:mb-3 text-gradient">
            {isPerfect ? 'PERFECT! 🎊' : percentage >= 70 ? 'Good Job! 👏' : 'Keep Learning! 📚'}
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            {tenseLesson.tense.name}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-green-50 p-2 sm:p-4 rounded-xl">
              <div className="text-2xl sm:text-4xl font-display font-bold text-green-600">{correctCount}/{totalQuestions}</div>
              <p className="text-xs sm:text-sm font-semibold text-green-700">Benar</p>
            </div>
            <div className="bg-purple-50 p-2 sm:p-4 rounded-xl">
              <div className="text-2xl sm:text-4xl font-display font-bold text-purple-600">{percentage}%</div>
              <p className="text-xs sm:text-sm font-semibold text-purple-700">Score</p>
            </div>
            <div className="bg-yellow-50 p-2 sm:p-4 rounded-xl">
              <div className="text-2xl sm:text-4xl font-display font-bold text-yellow-600">+{xpEarned}</div>
              <p className="text-xs sm:text-sm font-semibold text-yellow-700">XP</p>
            </div>
          </div>

          {isPerfect && (
            <div className="text-2xl font-display font-bold text-green-600 mb-6 animate-bounce-subtle">
              Kamu benar-benar master {tenseLesson.tense.name}! 🌟
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`/quiz?tense=${tenseId}&level=${level}`} className="w-full sm:w-auto">
              <Button variant="secondary" block>
                🔄 Ulangi Quiz
              </Button>
            </Link>
            <Link href="/game" className="w-full sm:w-auto">
              <Button variant="primary" block>
                📚 Ke Tenses
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Meme Reaction overlay */}
      {memeType && <MemeReaction type={memeType} onComplete={handleMemeComplete} />}

      <Card>
        {/* Game Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b-3 border-purple-200 mb-10">
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="primary">🎓 {tenseLesson.tense.name}</Badge>
            <Badge variant="success">Level {level}</Badge>
            <span className="text-xs sm:text-base font-display font-bold text-purple-600">
              {currentQ + 1}/{totalQuestions}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl">
            <span className="text-xs sm:text-base font-display font-semibold text-purple-700">Score</span>
            <span className="text-xl sm:text-3xl font-display font-bold text-gradient">{score}</span>
            <span className="text-lg sm:text-2xl">⭐</span>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold font-display mb-6 sm:mb-8 text-gray-800 leading-relaxed">
            {currentQuestion?.question}
          </h3>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {currentQuestion?.options.map((option) => {
              let state: 'default' | 'selected' | 'correct' | 'incorrect' = 'default'
              if (showFeedback) {
                if (option.isCorrect) state = 'correct'
                else if (option.letter === selectedOption) state = 'incorrect'
              } else if (option.letter === selectedOption) {
                state = 'selected'
              }
              return (
                <Option
                  key={option.letter}
                  letter={option.letter}
                  text={option.text}
                  state={state}
                  onClick={() => handleOptionClick(option.letter)}
                  disabled={showFeedback}
                />
              )
            })}
          </div>

          {showFeedback && (
            <div className="mb-8">
              <Feedback
                type={isCorrect ? 'success' : 'error'}
                title={isCorrect ? 'Benar! 🎉' : 'Belum Tepat 😔'}
                message={currentQuestion?.explanation || ''}
              />
            </div>
          )}

          {/* Progress bar */}
          <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div key={i} className={`h-1.5 sm:h-2 flex-1 rounded-full ${i === currentQ ? 'bg-primary' : i < currentQ ? 'bg-success' : 'bg-gray-200'}`} />
            ))}
          </div>

          <div className="flex gap-3 sm:gap-4">
            {!showFeedback ? (
              <Button variant="primary" block size="lg" onClick={handleSubmit} disabled={!selectedOption}>
                Jawab ✨
              </Button>
            ) : (
              <Button variant="primary" block size="lg" onClick={handleNext}>
                {currentQ < totalQuestions - 1 ? 'Next 🚀' : 'Lihat Hasil 🎉'}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
