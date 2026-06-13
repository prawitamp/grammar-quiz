import React from 'react'
import clsx from 'clsx'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'primary'
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  const variantClasses = {
    success: 'bg-gradient-to-r from-green-300 to-emerald-300 text-green-700 font-bold',
    warning: 'bg-gradient-to-r from-yellow-300 to-orange-300 text-orange-700 font-bold',
    danger: 'bg-gradient-to-r from-red-300 to-pink-300 text-red-700 font-bold',
    primary: 'bg-gradient-to-r from-purple-300 to-pink-300 text-purple-700 font-bold',
  }

  return (
    <span
      className={clsx(
        'inline-block px-4 py-2 rounded-full text-sm font-display font-semibold shadow-playful',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
