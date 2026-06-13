'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, Button, Badge } from '@/components/ui'
import { useSession } from 'next-auth/react'

const AVATAR_KEY = 'grammarquiz_avatar'

export default function ProfilePage() {
  const { data: session, update } = useSession()
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [passMsg, setPassMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem(AVATAR_KEY)
    if (saved) setAvatarUrl(saved)
  }, [])

  if (!session) return <div className="text-center py-20 text-xl">Loading...</div>

  const user = session.user

  // Generate avatar initials
  const initials = user.name
    ? user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?'

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validasi tipe file
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'File harus berupa gambar!' })
      return
    }

    // Validasi ukuran max 2MB
    if (file.size > 2 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Ukuran foto max 2MB!' })
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      setAvatarUrl(dataUrl)
      localStorage.setItem(AVATAR_KEY, dataUrl)
      setMessage({ type: 'success', text: 'Foto profil berhasil diubah! 📸' })
    }
    reader.readAsDataURL(file)

    // Reset input supaya bisa pilih file yang sama lagi
    e.target.value = ''
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPassMsg(null)

    if (newPassword !== confirmPassword) {
      setPassMsg({ type: 'error', text: 'Password baru tidak sama!' })
      return
    }
    if (newPassword.length < 6) {
      setPassMsg({ type: 'error', text: 'Password minimal 6 karakter!' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      const data = await res.json()
      if (res.ok) {
        setPassMsg({ type: 'success', text: 'Password berhasil diubah! 🔒' })
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      } else {
        setPassMsg({ type: 'error', text: data.error || 'Gagal ganti password' })
      }
    } catch {
      setPassMsg({ type: 'error', text: 'Terjadi error. Coba lagi!' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Profile Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="relative inline-block mb-4 group">
          {avatarUrl ? (
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-playful-lg mx-auto ring-4 ring-purple-300">
              <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold text-white shadow-playful-lg mx-auto">
              {initials}
            </div>
          )}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-all cursor-pointer"
          >
            📷
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold mb-1 text-gradient">{user.name}</h1>
        <p className="text-sm sm:text-base text-gray-500 font-semibold">{user.email}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 sm:mb-8 justify-center">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-display font-bold transition-all text-sm sm:text-base ${activeTab === 'profile'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-playful'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          👤 Profile
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-display font-bold transition-all text-sm sm:text-base ${activeTab === 'password'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-playful'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          🔒 Password
        </button>
      </div>

      {activeTab === 'profile' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <Card variant="gradient" className="text-center p-3 sm:p-6">
              <div className="text-2xl sm:text-4xl font-display font-bold">{user.totalXP || 0}</div>
              <p className="text-xs font-semibold opacity-90">Total XP</p>
            </Card>
            <Card variant="warm" className="text-center p-3 sm:p-6">
              <div className="text-2xl sm:text-4xl font-display font-bold">{user.streak || 0}</div>
              <p className="text-xs font-semibold opacity-90">🔥 Streak</p>
            </Card>
            <Card variant="success" className="text-center p-3 sm:p-6">
              <div className="text-2xl sm:text-4xl font-display font-bold">{user.accuracy || 0}%</div>
              <p className="text-xs font-semibold opacity-90">Accuracy</p>
            </Card>
            <Card className="text-center p-3 sm:p-6">
              <div className="text-2xl sm:text-4xl font-display font-bold text-gradient">Lv.{user.level || 1}</div>
              <p className="text-xs font-semibold text-gray-600">Level</p>
            </Card>
          </div>

          {/* Info */}
          <Card>
            <h2 className="text-2xl font-display font-bold mb-6">📋 Info Profile</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-600">Nama</span>
                <span className="font-bold">{user.name}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-600">Email</span>
                <span className="font-bold">{user.email}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-600">Level</span>
                <Badge variant="primary">Level {user.level || 1}</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-600">Status</span>
                <Badge variant="success">Aktif ✅</Badge>
              </div>
            </div>
          </Card>

          {message && (
            <div className={`mt-4 p-4 rounded-xl font-semibold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
              {message.text}
            </div>
          )}
        </>
      )}

      {activeTab === 'password' && (
        <Card>
          <h2 className="text-2xl font-display font-bold mb-6">🔒 Ganti Password</h2>
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div>
              <label className="block text-sm font-display font-bold text-gray-700 mb-2">
                Password Saat Ini
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-display font-bold text-gray-700 mb-2">
                Password Baru
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Min. 6 karakter"
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-display font-bold text-gray-700 mb-2">
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ulangi password baru"
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-semibold"
                required
              />
            </div>

            {passMsg && (
              <div className={`p-4 rounded-xl font-semibold ${passMsg.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                {passMsg.text}
              </div>
            )}

            <Button variant="primary" block size="lg" isLoading={loading}>
              Simpan Password 🔒
            </Button>
          </form>
        </Card>
      )}
    </div>
  )
}
