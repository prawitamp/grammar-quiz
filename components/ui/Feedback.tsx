import React from 'react'
import clsx from 'clsx'

interface FeedbackProps {
  type: 'success' | 'error'
  title: string
  message: string
}

export function Feedback({ type, title, message }: FeedbackProps) {
  const typeClasses = {
    success: {
      container: 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 text-green-700 shadow-playful',
      icon: '🎉',
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    error: {
      container: 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-400 text-red-700 shadow-playful',
      icon: '💭',
      iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    },
  }

  const styles = typeClasses[type]

  return (
    <div className={clsx('flex items-start gap-4 p-5 rounded-2xl', styles.container)}>
      <div className={clsx('flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 text-2xl', styles.iconBg)}>
        {styles.icon}
      </div>
      <div>
        <h4 className="font-bold font-display text-lg mb-1">{title}</h4>
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  )
}
