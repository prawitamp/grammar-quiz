'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
          required
        />
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
