'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export function Navbar() {
  const { data: session } = useSession()
  const [isAkunOpen, setIsAkunOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAkunOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [])

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b-2 border-purple-200 shadow-playful">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <Link href={session ? '/dashboard' : '/'} className="flex items-center gap-2 group shrink-0">
            <span className="text-2xl sm:text-4xl group-hover:animate-wiggle transition-transform">✨</span>
            <span className="text-gradient font-display font-bold text-lg sm:text-2xl truncate">GrammarQuiz</span>
          </Link>

          {/* Mobile: Hamburger */}
          {session && (
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-purple-50 transition-colors"
              aria-label="Menu"
            >
              <div className="w-6 h-0.5 bg-purple-600 mb-1.5 transition-all" style={{ transform: isMobileOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }} />
              <div className="w-6 h-0.5 bg-purple-600 mb-1.5 transition-all" style={{ opacity: isMobileOpen ? 0 : 1 }} />
              <div className="w-6 h-0.5 bg-purple-600 transition-all" style={{ transform: isMobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : '' }} />
            </button>
          )}

          {/* Desktop Nav */}
          {session && (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/dashboard" className="px-3 py-2 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 font-semibold font-display rounded-xl transition-all duration-300 hover:shadow-playful hover:scale-105 text-sm lg:text-base">
                🏠 Dashboard
              </Link>
              <Link href="/game" className="px-3 py-2 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 font-semibold font-display rounded-xl transition-all duration-300 hover:shadow-playful hover:scale-105 text-sm lg:text-base">
                🎮 Tenses Games
              </Link>
            </div>
          )}

          {/* Desktop: User/Auth */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <>
                <div className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
                  <span className="text-sm font-display font-bold text-yellow-700">
                    ⭐ {session.user?.totalXP || 0} XP
                  </span>
                </div>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsAkunOpen(!isAkunOpen)}
                    className="px-4 py-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold font-display rounded-xl hover:shadow-playful hover:scale-105 transition-all flex items-center gap-2 text-sm lg:text-base"
                  >
                    <span>👤</span>
                    <span className="hidden lg:inline">{session.user?.name}</span>
                    <span className="text-xs">{isAkunOpen ? '▲' : '▼'}</span>
                  </button>
                  {isAkunOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white border-2 border-purple-200 rounded-2xl shadow-playful-lg py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-display font-bold text-gray-800">{session.user?.name}</p>
                        <p className="text-sm text-gray-500 truncate">{session.user?.email}</p>
                      </div>
                      <Link href="/profile" onClick={() => setIsAkunOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors font-semibold text-gray-700">
                        <span className="text-xl">👤</span><span>Profile</span>
                      </Link>
                      <div className="border-t border-gray-100 my-1" />
                      <button onClick={() => signOut({ redirectTo: '/' })}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors font-semibold text-red-600 w-full text-left">
                        <span className="text-xl">🚪</span><span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="px-3 py-2 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 font-semibold font-display rounded-xl transition-all duration-300 hover:shadow-playful text-sm lg:text-base">
                  Login
                </Link>
                <Link href="/auth/register" className="px-3 py-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold font-display rounded-xl hover:shadow-playful hover:scale-105 transition-all text-sm lg:text-base">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {session && isMobileOpen && (
          <div className="md:hidden border-t-2 border-purple-100 mt-2 pt-3 pb-4 space-y-1 animate-in slide-in-from-top">
            <div className="flex items-center gap-2 px-3 py-2 mb-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <span className="text-lg">👤</span>
              <span className="font-display font-bold text-purple-700 truncate">{session.user?.name}</span>
              <span className="ml-auto text-sm font-semibold text-yellow-700">⭐ {session.user?.totalXP || 0} XP</span>
            </div>
            <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-purple-600 hover:bg-purple-50 font-semibold font-display rounded-xl transition-colors text-base">
              🏠 Dashboard
            </Link>
            <Link href="/game" onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-purple-600 hover:bg-purple-50 font-semibold font-display rounded-xl transition-colors text-base">
              🎮 Tenses Games
            </Link>
            <Link href="/profile" onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-purple-600 hover:bg-purple-50 font-semibold font-display rounded-xl transition-colors text-base">
              👤 Profile
            </Link>
            <div className="border-t border-gray-100 my-2" />
            <button onClick={() => signOut({ redirectTo: '/' })}
              className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-semibold font-display rounded-xl transition-colors text-base">
              🚪 Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
