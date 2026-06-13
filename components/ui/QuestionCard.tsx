import React from 'react'
import clsx from 'clsx'
import { Badge } from './Badge'

interface QuestionCardProps {
  questionNumber: number
  totalQuestions: number
  question: string
  children: React.ReactNode
}

export function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
  children,
}: QuestionCardProps) {
  const percentage = Math.round((questionNumber / totalQuestions) * 100)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-3 border-purple-200">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="primary">
            Question {questionNumber}/{totalQuestions}
          </Badge>
          <div className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            {percentage}%
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-gray-800 leading-relaxed">
          {question}
        </h3>
        {children}
      </div>
    </div>
  )
}
