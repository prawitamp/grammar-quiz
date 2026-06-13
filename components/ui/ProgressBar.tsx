import React from 'react'
import clsx from 'clsx'

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'success' | 'warning'
}

export function ProgressBar({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  className,
  ...props
}: ProgressBarProps) {
  const percentage = (value / max) * 100

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400',
    success: 'bg-gradient-to-r from-green-400 to-emerald-500',
    warning: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  }

  return (
    <div className={clsx('w-full bg-purple-100 rounded-full overflow-hidden shadow-inner', sizeClasses[size], className)} {...props}>
      <div
        className={clsx('h-full rounded-full transition-all duration-700 ease-out shadow-sm', variantClasses[variant])}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
