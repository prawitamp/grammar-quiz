'use client'

import { RegisterForm } from '@/components/auth/RegisterForm'
import { Card } from '@/components/ui'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-3 text-gradient">
            Join GrammarQuiz! 🚀
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-semibold">
            Buat akun dan mulai belajar grammar
          </p>
        </div>

        {/* Register Card */}
        <Card className="mb-6">
          <RegisterForm />
        </Card>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 font-semibold mb-3">
            Sudah punya akun?
          </p>
          <Link
            href="/auth/login"
            className="text-primary font-display font-bold hover:underline text-lg"
          >
            Login di sini! 🎮
          </Link>
        </div>
      </div>
    </div>
  )
}
