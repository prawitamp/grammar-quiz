import React from 'react'
import clsx from 'clsx'

type OptionState = 'default' | 'selected' | 'correct' | 'incorrect'

interface OptionProps {
  letter: string
  text: string
  state?: OptionState
  onClick?: () => void
  disabled?: boolean
}

export function Option({
  letter,
  text,
  state = 'default',
  onClick,
  disabled = false,
}: OptionProps) {
  const stateClasses = {
    default: 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50 hover:scale-102 hover:shadow-playful',
    selected: 'border-purple-500 bg-gradient-to-r from-purple-100 to-pink-100 scale-102 shadow-playful',
    correct: 'border-green-500 bg-gradient-to-r from-green-100 to-emerald-100 shadow-playful-lg animate-bounce-subtle',
    incorrect: 'border-red-500 bg-gradient-to-r from-red-100 to-pink-100 shadow-playful',
  }

  const letterClasses = {
    default: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md',
    selected: 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg',
    correct: 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg animate-bounce-subtle',
    incorrect: 'bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex items-center gap-4 p-4 border-3 rounded-2xl transition-all duration-300 text-left w-full font-display',
        stateClasses[state],
        disabled && 'cursor-not-allowed opacity-60'
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-center w-14 h-14 rounded-xl font-bold text-lg flex-shrink-0',
          letterClasses[state]
        )}
      >
        {letter}
      </div>
      <span className="font-semibold text-lg">{text}</span>
    </button>
  )
}
