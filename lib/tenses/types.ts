export interface TenseData {
  id: string
  name: string
  category: 'present' | 'past' | 'future' | 'past-future'
  level: 'beginner' | 'intermediate' | 'advanced'
  description: string
  formula: string
  usage: string[]
  examples: {
    positive: string[]
    negative: string[]
    interrogative: string[]
  }
  timeSignals: string[]
}

export interface TenseQuestion {
  id: string
  tenseId: string
  question: string
  options: {
    letter: string
    text: string
    isCorrect: boolean
  }[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface TenseLesson {
  tense: TenseData
  questions: TenseQuestion[]
}
