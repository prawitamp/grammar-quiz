'use client'

import { LoginForm } from '@/components/auth/LoginForm'
import { Card } from '@/components/ui'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-3 text-gradient">
            Welcome Back! 👋
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-semibold">
            Login untuk melanjutkan belajar
          </p>
        </div>

        {/* Login Card */}
        <Card className="mb-6">
          <LoginForm />
        </Card>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-gray-600 font-semibold mb-3">
            Belum punya akun?
          </p>
          <Link
            href="/auth/register"
            className="text-primary font-display font-bold hover:underline text-lg"
          >
            Register di sini! 🎉
          </Link>
        </div>
      </div>
    </div>
  )
}
