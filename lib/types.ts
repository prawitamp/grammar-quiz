export interface Question {
  id: number
  level: 'beginner' | 'intermediate' | 'advanced'
  category: 'present-tense' | 'past-tense' | 'future-tense' | 'tense-mix'
  question: string
  options: QuestionOption[]
  explanation: string
  difficulty: number
}

export interface QuestionOption {
  letter: string
  text: string
  isCorrect: boolean
}

export interface User {
  id: string
  name: string
  email: string
  totalXP: number
  streak: number
  accuracy: number
  level: number
  createdAt: Date
  updatedAt: Date
}

export interface GameSession {
  id: string
  userId: string
  gameId: string
  score: number
  correctAnswers: number
  totalQuestions: number
  startedAt: Date
  completedAt: Date | null
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: Date | null
}
