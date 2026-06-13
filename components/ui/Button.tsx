import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  block?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  block = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-200 inline-flex items-center justify-center gap-2 font-display'

  const variantClasses = {
    primary: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-playful-lg hover:-translate-y-1 active:translate-y-0 hover:scale-105 active:scale-100',
    secondary: 'bg-gradient-to-br from-blue-100 to-purple-100 text-purple-600 border-2 border-purple-300 hover:shadow-playful hover:-translate-y-1 active:scale-95',
    danger: 'bg-gradient-to-br from-red-500 to-orange-500 text-white hover:shadow-playful-lg hover:-translate-y-1 active:translate-y-0',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledClasses = disabled || isLoading ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60' : ''

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        block && 'w-full',
        disabledClasses,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className="animate-spin">⟳</span>}
      {children}
    </button>
  )
}
