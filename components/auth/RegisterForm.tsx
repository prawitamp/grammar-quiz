'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui'

export function RegisterForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!name.trim()) {
      setError('Nama harus diisi!')
      return
    }
    if (password !== confirmPassword) {
      setError('Password tidak sama!')
      return
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter!')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Registrasi gagal!')
        return
      }

      router.push('/auth/login?success=Registrasi berhasil!')
    } catch (err) {
      setError('Terjadi error. Coba lagi!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label className="block text-sm font-display font-bold text-gray-700 mb-2">
          👤 Nama
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama kamu"
          className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
          required
        />
      </div>

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
            placeholder="Min. 6 karakter"
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

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-display font-bold text-gray-700 mb-2">
          🔐 Konfirmasi Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Ulangi password"
            className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
        Register 🎉
      </Button>
    </form>
  )
}
