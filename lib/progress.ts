'use client'

// Progress tracking menggunakan localStorage
// Nanti bisa di-migrate ke database ketika backend siap

const STORAGE_KEY = 'grammarquiz_progress'

interface ProgressData {
  readTenses: string[]      // tense IDs yang materi nya sudah dibaca
  completedTenses: string[] // tense IDs yang quiznya sudah selesai
}

function getProgress(): ProgressData {
  if (typeof window === 'undefined') return { readTenses: [], completedTenses: [] }
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) return JSON.parse(data)
  } catch { }
  return { readTenses: [], completedTenses: [] }
}

function saveProgress(data: ProgressData) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

/** Tandai tense sebagai sudah dibaca */
export function markTenseRead(tenseId: string) {
  const data = getProgress()
  if (!data.readTenses.includes(tenseId)) {
    data.readTenses.push(tenseId)
    saveProgress(data)
  }
}

/** Tandai tense sebagai sudah dikerjakan quiznya */
export function markTenseCompleted(tenseId: string) {
  const data = getProgress()
  if (!data.completedTenses.includes(tenseId)) {
    data.completedTenses.push(tenseId)
  }
  // Auto-mark as read juga
  if (!data.readTenses.includes(tenseId)) {
    data.readTenses.push(tenseId)
  }
  saveProgress(data)
}

/** Cek apakah tense sudah dibaca */
export function isTenseRead(tenseId: string): boolean {
  return getProgress().readTenses.includes(tenseId)
}

/** Cek apakah tense sudah dikerjakan */
export function isTenseCompleted(tenseId: string): boolean {
  return getProgress().completedTenses.includes(tenseId)
}

/** Dapatkan jumlah tenses yang sudah dikerjakan */
export function getCompletedCount(totalTenses: number): {
  completed: number
  read: number
  percentage: number
} {
  const data = getProgress()
  const completed = data.completedTenses.length
  const read = data.readTenses.length
  const percentage = totalTenses > 0 ? Math.round((completed / totalTenses) * 100) : 0
  return { completed, read, percentage }
}

/** Dapatkan semua data progress */
export function getAllProgress(): ProgressData {
  return getProgress()
}
