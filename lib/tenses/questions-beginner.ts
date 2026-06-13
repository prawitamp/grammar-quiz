import { TenseQuestion } from './types'

// Additional questions for Beginner level (Present Tenses)
export const beginnerExtraQuestions: Record<string, TenseQuestion[]> = {
  'simple-present': [
    {
      id: 'sp-q4', tenseId: 'simple-present',
      question: 'He _____ breakfast at 7 AM every day.',
      options: [
        { letter: 'A', text: 'eat', isCorrect: false },
        { letter: 'B', text: 'eats', isCorrect: true },
        { letter: 'C', text: 'eating', isCorrect: false },
        { letter: 'D', text: 'ate', isCorrect: false }
      ],
      explanation: 'Subject "He" adalah orang ketiga singular, jadi pakai "eats" (eat + s)',
      difficulty: 'easy'
    },
    {
      id: 'sp-q5', tenseId: 'simple-present',
      question: 'The sun _____ in the east.',
      options: [
        { letter: 'A', text: 'rise', isCorrect: false },
        { letter: 'B', text: 'rises', isCorrect: true },
        { letter: 'C', text: 'is rising', isCorrect: false },
        { letter: 'D', text: 'rose', isCorrect: false }
      ],
      explanation: 'Ini fakta umum, jadi pakai Simple Present. "The sun" = It (orang ketiga) → rises',
      difficulty: 'easy'
    },
    {
      id: 'sp-q6', tenseId: 'simple-present',
      question: '_____ you like ice cream?',
      options: [
        { letter: 'A', text: 'Does', isCorrect: false },
        { letter: 'B', text: 'Are', isCorrect: false },
        { letter: 'C', text: 'Do', isCorrect: true },
        { letter: 'D', text: 'Is', isCorrect: false }
      ],
      explanation: 'Untuk "you" dalam pertanyaan Simple Present, pakai "Do"',
      difficulty: 'easy'
    },
    {
      id: 'sp-q7', tenseId: 'simple-present',
      question: 'My grandmother _____ in a small village.',
      options: [
        { letter: 'A', text: 'live', isCorrect: false },
        { letter: 'B', text: 'lives', isCorrect: true },
        { letter: 'C', text: 'living', isCorrect: false },
        { letter: 'D', text: 'is live', isCorrect: false }
      ],
      explanation: '"My grandmother" = She (orang ketiga), jadi pakai "lives"',
      difficulty: 'easy'
    },
    {
      id: 'sp-q8', tenseId: 'simple-present',
      question: 'We _____ watch TV late at night.',
      options: [
        { letter: 'A', text: 'don\'t', isCorrect: true },
        { letter: 'B', text: 'doesn\'t', isCorrect: false },
        { letter: 'C', text: 'aren\'t', isCorrect: false },
        { letter: 'D', text: 'not', isCorrect: false }
      ],
      explanation: '"We" pake "don\'t" untuk kalimat negatif Simple Present',
      difficulty: 'medium'
    },
    {
      id: 'sp-q9', tenseId: 'simple-present',
      question: 'Ani _____ to school by bus every day.',
      options: [
        { letter: 'A', text: 'go', isCorrect: false },
        { letter: 'B', text: 'is going', isCorrect: false },
        { letter: 'C', text: 'goes', isCorrect: true },
        { letter: 'D', text: 'going', isCorrect: false }
      ],
      explanation: '"Ani" = She (orang ketiga), jadi pakai "goes" untuk kebiasaan sehari-hari',
      difficulty: 'easy'
    },
    {
      id: 'sp-q10', tenseId: 'simple-present',
      question: 'I _____ understand this lesson.',
      options: [
        { letter: 'A', text: 'don\'t', isCorrect: true },
        { letter: 'B', text: 'doesn\'t', isCorrect: false },
        { letter: 'C', text: 'am not', isCorrect: false },
        { letter: 'D', text: 'not', isCorrect: false }
      ],
      explanation: '"I" pakai "don\'t" untuk negatif Simple Present',
      difficulty: 'medium'
    },
  ],
  'present-continuous': [
    {
      id: 'pc-q3', tenseId: 'present-continuous',
      question: 'Listen! Someone _____ at the door.',
      options: [
        { letter: 'A', text: 'knocks', isCorrect: false },
        { letter: 'B', text: 'is knocking', isCorrect: true },
        { letter: 'C', text: 'knock', isCorrect: false },
        { letter: 'D', text: 'knocked', isCorrect: false }
      ],
      explanation: '"Listen!" menandakan aksi SEDANG terjadi, jadi pakai "is knocking"',
      difficulty: 'easy'
    },
    {
      id: 'pc-q4', tenseId: 'present-continuous',
      question: 'The children _____ in the park now.',
      options: [
        { letter: 'A', text: 'is playing', isCorrect: false },
        { letter: 'B', text: 'are playing', isCorrect: true },
        { letter: 'C', text: 'play', isCorrect: false },
        { letter: 'D', text: 'plays', isCorrect: false }
      ],
      explanation: '"The children" = They (plural), jadi pakai "are playing"',
      difficulty: 'easy'
    },
    {
      id: 'pc-q5', tenseId: 'present-continuous',
      question: 'Rina _____ _____ her room at the moment.',
      options: [
        { letter: 'A', text: 'is cleaning', isCorrect: true },
        { letter: 'B', text: 'are cleaning', isCorrect: false },
        { letter: 'C', text: 'cleans', isCorrect: false },
        { letter: 'D', text: 'clean', isCorrect: false }
      ],
      explanation: '"Rina" = She, "at the moment" = right now, jadi "is cleaning"',
      difficulty: 'easy'
    },
    {
      id: 'pc-q6', tenseId: 'present-continuous',
      question: 'They _____ _____ a movie right now.',
      options: [
        { letter: 'A', text: 'is watching', isCorrect: false },
        { letter: 'B', text: 'are watching', isCorrect: true },
        { letter: 'C', text: 'watch', isCorrect: false },
        { letter: 'D', text: 'watches', isCorrect: false }
      ],
      explanation: '"They" (plural) + "right now" → are watching',
      difficulty: 'easy'
    },
    {
      id: 'pc-q7', tenseId: 'present-continuous',
      question: 'Why _____ you _____ at me like that?',
      options: [
        { letter: 'A', text: 'are looking', isCorrect: true },
        { letter: 'B', text: 'is looking', isCorrect: false },
        { letter: 'C', text: 'do look', isCorrect: false },
        { letter: 'D', text: 'look', isCorrect: false }
      ],
      explanation: '"You" + "like that" (sedang terjadi) → are looking',
      difficulty: 'medium'
    },
    {
      id: 'pc-q8', tenseId: 'present-continuous',
      question: 'I _____ (not/watch) TV right now.',
      options: [
        { letter: 'A', text: 'am not watching', isCorrect: true },
        { letter: 'B', text: 'don\'t watch', isCorrect: false },
        { letter: 'C', text: 'isn\'t watching', isCorrect: false },
        { letter: 'D', text: 'not watching', isCorrect: false }
      ],
      explanation: '"I" + "right now" → negatifnya "am not watching"',
      difficulty: 'medium'
    },
  ],
  'present-perfect': [
    {
      id: 'pp-q3', tenseId: 'present-perfect',
      question: 'I _____ never _____ to Bali.',
      options: [
        { letter: 'A', text: 'has been', isCorrect: false },
        { letter: 'B', text: 'have been', isCorrect: true },
        { letter: 'C', text: 'went', isCorrect: false },
        { letter: 'D', text: 'am going', isCorrect: false }
      ],
      explanation: '"I" = have, "never" = kata kunci Present Perfect → have been',
      difficulty: 'easy'
    },
    {
      id: 'pp-q4', tenseId: 'present-perfect',
      question: '_____ you ever _____ sushi?',
      options: [
        { letter: 'A', text: 'Have eaten', isCorrect: true },
        { letter: 'B', text: 'Has ate', isCorrect: false },
        { letter: 'C', text: 'Did eat', isCorrect: false },
        { letter: 'D', text: 'Are eating', isCorrect: false }
      ],
      explanation: '"Ever" = kata kunci Present Perfect. "You" → Have + eaten (V3)',
      difficulty: 'easy'
    },
    {
      id: 'pp-q5', tenseId: 'present-perfect',
      question: 'She _____ already _____ her homework.',
      options: [
        { letter: 'A', text: 'have finished', isCorrect: false },
        { letter: 'B', text: 'has finished', isCorrect: true },
        { letter: 'C', text: 'finished', isCorrect: false },
        { letter: 'D', text: 'finishes', isCorrect: false }
      ],
      explanation: '"Already" = Present Perfect. "She" = has + finished (V3)',
      difficulty: 'easy'
    },
    {
      id: 'pp-q6', tenseId: 'present-perfect',
      question: 'They _____ just _____ from school.',
      options: [
        { letter: 'A', text: 'have returned', isCorrect: true },
        { letter: 'B', text: 'has returned', isCorrect: false },
        { letter: 'C', text: 'returned', isCorrect: false },
        { letter: 'D', text: 'are returning', isCorrect: false }
      ],
      explanation: '"Just" (baru saja) = Present Perfect. "They" = have returned',
      difficulty: 'medium'
    },
  ],
  'present-perfect-continuous': [
    {
      id: 'ppc-q3', tenseId: 'present-perfect-continuous',
      question: 'I _____ _____ here for 30 minutes!',
      options: [
        { letter: 'A', text: 'have been waiting', isCorrect: true },
        { letter: 'B', text: 'has been waiting', isCorrect: false },
        { letter: 'C', text: 'am waiting', isCorrect: false },
        { letter: 'D', text: 'waited', isCorrect: false }
      ],
      explanation: '"For 30 minutes" menunjukkan durasi. "I" → have been waiting',
      difficulty: 'medium'
    },
    {
      id: 'ppc-q4', tenseId: 'present-perfect-continuous',
      question: 'Rina _____ _____ since 8 AM.',
      options: [
        { letter: 'A', text: 'have been studying', isCorrect: false },
        { letter: 'B', text: 'has been studying', isCorrect: true },
        { letter: 'C', text: 'is studying', isCorrect: false },
        { letter: 'D', text: 'studied', isCorrect: false }
      ],
      explanation: '"Since 8 AM" (mulai jam 8). "Rina" = She → has been studying',
      difficulty: 'medium'
    },
    {
      id: 'ppc-q5', tenseId: 'present-perfect-continuous',
      question: 'They _____ _____ _____ for hours!',
      options: [
        { letter: 'A', text: 'has been playing', isCorrect: false },
        { letter: 'B', text: 'have been playing', isCorrect: true },
        { letter: 'C', text: 'are playing', isCorrect: false },
        { letter: 'D', text: 'played', isCorrect: false }
      ],
      explanation: '"For hours" = durasi. "They" → have been playing',
      difficulty: 'medium'
    },
  ]
}
