'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (!result?.ok) {
        setError(result?.error || 'Login gagal. Coba lagi!')
        return
      }

      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setError('Terjadi error. Coba lagi!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input */}
      <div>
        <label className="block text-sm font-display font-bold text-gray-700 mb-2">
          📧 Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="student@example.com"
          className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
          required
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm font-display font-bold text-gray-700 mb-2">
          🔐 Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-xl font-semibold">
          ⚠️ {error}
        </div>
      )}

      {/* Submit Button */}
      <Button variant="primary" block size="lg" isLoading={isLoading}>
        Login 🎮
      </Button>
    </form>
  )
}
