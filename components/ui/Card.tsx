import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'success' | 'warm'
}

export function Card({
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border-2 border-purple-100 shadow-playful hover:shadow-playful-lg',
    gradient: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-playful-lg hover:shadow-playful',
    success: 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-playful-lg hover:shadow-playful',
    warm: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 text-white shadow-playful-lg hover:shadow-playful',
  }

  return (
    <div
      className={clsx(
        'rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('flex justify-between items-center mb-4 pb-4 border-b border-opacity-30 border-white', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('text-3xl font-bold font-display', className)} {...props}>
      {children}
    </h3>
  )
}
