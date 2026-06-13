'use client'

import { useEffect, useState } from 'react'

interface MemeReactionProps {
  type: 'correct' | 'incorrect'
  onComplete?: () => void
}

const correctReactions = [
  { emoji: '🎉', text: 'BENAR! 🎊', bg: 'from-green-400 to-emerald-500' },
  { emoji: '🔥', text: 'Keren abis! 🔥', bg: 'from-yellow-400 to-orange-500' },
  { emoji: '🏆', text: 'Mantap Jiwa! 🏆', bg: 'from-purple-400 to-pink-500' },
  { emoji: '👑', text: 'YOU ARE THE GOAT! 🐐', bg: 'from-indigo-400 to-purple-500' },
  { emoji: '🚀', text: 'Level Up! 🚀', bg: 'from-blue-400 to-cyan-500' },
  { emoji: '💯', text: 'Perfecto! 💯', bg: 'from-green-400 to-teal-500' },
  { emoji: '⭐', text: 'Smart Banget! ⭐', bg: 'from-amber-400 to-yellow-500' },
  { emoji: '🎯', text: 'Tepat Sasaran! 🎯', bg: 'from-rose-400 to-red-500' },
  { emoji: '💪', text: 'Susah? Santai! 💪', bg: 'from-violet-400 to-purple-500' },
]

const incorrectReactions = [
  { emoji: '😅', text: 'Yahh, kurang tepat!', bg: 'from-orange-400 to-red-500' },
  { emoji: '🤔', text: 'Hampir! Coba lagi!', bg: 'from-amber-400 to-orange-500' },
  { emoji: '💪', text: 'Semangat! Next! 💪', bg: 'from-rose-400 to-pink-500' },
  { emoji: '📚', text: 'Belajar lagi aja yuk!', bg: 'from-indigo-400 to-purple-500' },
  { emoji: '🎯', text: 'Kurang dikit! 🎯', bg: 'from-fuchsia-400 to-pink-500' },
  { emoji: '🔥', text: 'Keep trying! 🔥', bg: 'from-red-400 to-orange-500' },
  { emoji: '🤗', text: 'Yang sabar ya... 🤗', bg: 'from-teal-400 to-blue-500' },
  { emoji: '😎', text: 'Tenang, gas aja!', bg: 'from-cyan-400 to-blue-500' },
]

export function MemeReaction({ type, onComplete }: MemeReactionProps) {
  const [randomIdx, setRandomIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setRandomIdx(Math.floor(Math.random() * (type === 'correct' ? correctReactions : incorrectReactions).length))
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onComplete?.(), 100)
    }, 1500)

    return () => clearTimeout(timer)
  }, [type, onComplete])

  const reactions = type === 'correct' ? correctReactions : incorrectReactions
  const reaction = reactions[randomIdx]

  const particles = Array.from({ length: type === 'correct' ? 12 : 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    emoji: type === 'correct' ? ['🎉', '✨', '⭐', '💫'][i % 4] : ['💪', '📚', '🤗', '🔥'][i % 4],
    delay: Math.random() * 0.5,
    size: 20 + Math.random() * 30,
  }))

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-bounce-subtle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: '1.5s',
            opacity: 0.8,
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Main Reaction */}
      <div
        className={`bg-gradient-to-br ${reaction.bg} rounded-3xl p-8 shadow-2xl text-center animate-in fade-in zoom-in min-w-[280px]`}
        style={{
          animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        }}
      >
        <div
          className="text-7xl md:text-8xl mb-4"
          style={{
            animation: 'bounce 0.6s ease-in-out infinite',
          }}
        >
          {reaction.emoji}
        </div>
        <div className="text-2xl md:text-3xl font-display font-bold text-white">
          {reaction.text}
        </div>
        <div className="text-white text-opacity-80 text-sm mt-2 font-semibold">
          {type === 'correct' ? '+100 XP' : 'Jangan menyerah!'}
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  )
}
