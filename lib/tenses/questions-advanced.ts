import { TenseQuestion } from './types'

export const advancedExtraQuestions: Record<string, TenseQuestion[]> = {
  'simple-future': [
    {
      id: 'sf-q2', tenseId: 'simple-future',
      question: 'I _____ help you carry that bag.',
      options: [
        { letter: 'A', text: 'will', isCorrect: true },
        { letter: 'B', text: 'am', isCorrect: false },
        { letter: 'C', text: 'going', isCorrect: false },
        { letter: 'D', text: 'was', isCorrect: false }
      ],
      explanation: '"Will" untuk tawaran spontan (spontaneous offer). Lagi liat orang bawa barang berat → I will help!',
      difficulty: 'easy'
    },
    {
      id: 'sf-q3', tenseId: 'simple-future',
      question: 'She thinks it _____ rain tomorrow.',
      options: [
        { letter: 'A', text: 'is', isCorrect: false },
        { letter: 'B', text: 'will', isCorrect: true },
        { letter: 'C', text: 'does', isCorrect: false },
        { letter: 'D', text: 'has', isCorrect: false }
      ],
      explanation: 'Prediksi masa depan = "will rain"',
      difficulty: 'easy'
    },
    {
      id: 'sf-q4', tenseId: 'simple-future',
      question: 'I promise I _____ be late again.',
      options: [
        { letter: 'A', text: 'will not', isCorrect: true },
        { letter: 'B', text: 'am not', isCorrect: false },
        { letter: 'C', text: 'don\'t', isCorrect: false },
        { letter: 'D', text: 'won\'t be', isCorrect: false }
      ],
      explanation: 'Janji (promise) = "will not" / "won\'t"',
      difficulty: 'medium'
    },
  ],
  'future-continuous': [
    {
      id: 'fc-q2', tenseId: 'future-continuous',
      question: 'This time next month, I _____ _____ in Bali.',
      options: [
        { letter: 'A', text: 'will relax', isCorrect: false },
        { letter: 'B', text: 'will be relaxing', isCorrect: true },
        { letter: 'C', text: 'am relaxing', isCorrect: false },
        { letter: 'D', text: 'relax', isCorrect: false }
      ],
      explanation: '"This time next month" = masa depan spesifik → will be relaxing',
      difficulty: 'medium'
    },
    {
      id: 'fc-q3', tenseId: 'future-continuous',
      question: 'Don\'t call at 8 PM, I _____ _____ dinner.',
      options: [
        { letter: 'A', text: 'will have', isCorrect: false },
        { letter: 'B', text: 'will be having', isCorrect: true },
        { letter: 'C', text: 'am having', isCorrect: false },
        { letter: 'D', text: 'have', isCorrect: false }
      ],
      explanation: '"At 8 PM" = waktu spesifik → "will be having" (sedang makan malam)',
      difficulty: 'medium'
    },
  ],
  'future-perfect': [
    {
      id: 'fp-q2', tenseId: 'future-perfect',
      question: 'By 2027, I _____ _____ from university.',
      options: [
        { letter: 'A', text: 'will graduate', isCorrect: false },
        { letter: 'B', text: 'will have graduated', isCorrect: true },
        { letter: 'C', text: 'have graduated', isCorrect: false },
        { letter: 'D', text: 'graduated', isCorrect: false }
      ],
      explanation: '"By 2027" = sebelum 2027 → will have graduated (akan sudah lulus)',
      difficulty: 'hard'
    },
    {
      id: 'fp-q3', tenseId: 'future-perfect',
      question: 'She _____ _____ _____ the project by Friday.',
      options: [
        { letter: 'A', text: 'will finish', isCorrect: false },
        { letter: 'B', text: 'will have finished', isCorrect: true },
        { letter: 'C', text: 'has finished', isCorrect: false },
        { letter: 'D', text: 'is finishing', isCorrect: false }
      ],
      explanation: '"By Friday" = deadline → will have finished (akan sudah selesai)',
      difficulty: 'hard'
    },
  ],
  'future-perfect-continuous': [
    {
      id: 'fpc-q2', tenseId: 'future-perfect-continuous',
      question: 'By next year, I _____ _____ _____ here for 5 years.',
      options: [
        { letter: 'A', text: 'will work', isCorrect: false },
        { letter: 'B', text: 'will have been working', isCorrect: true },
        { letter: 'C', text: 'have been working', isCorrect: false },
        { letter: 'D', text: 'will have worked', isCorrect: false }
      ],
      explanation: '"By next year" + "for 5 years" (durasi) → will have been working',
      difficulty: 'hard'
    },
    {
      id: 'fpc-q3', tenseId: 'future-perfect-continuous',
      question: 'When she retires, she _____ _____ _____ for 30 years.',
      options: [
        { letter: 'A', text: 'will have been teaching', isCorrect: true },
        { letter: 'B', text: 'will teach', isCorrect: false },
        { letter: 'C', text: 'has been teaching', isCorrect: false },
        { letter: 'D', text: 'will have taught', isCorrect: false }
      ],
      explanation: '"For 30 years" (durasi panjang) + when she retires → will have been teaching',
      difficulty: 'hard'
    },
  ],
  'simple-past-future': [
    {
      id: 'spf-q2', tenseId: 'simple-past-future',
      question: 'My mom said she _____ buy me a new phone.',
      options: [
        { letter: 'A', text: 'will', isCorrect: false },
        { letter: 'B', text: 'would', isCorrect: true },
        { letter: 'C', text: 'can', isCorrect: false },
        { letter: 'D', text: 'is', isCorrect: false }
      ],
      explanation: '"Said" (lampau) → reported speech. "Will" berubah jadi "would"',
      difficulty: 'medium'
    },
    {
      id: 'spf-q3', tenseId: 'simple-past-future',
      question: 'If I had money, I _____ buy that PlayStation.',
      options: [
        { letter: 'A', text: 'will', isCorrect: false },
        { letter: 'B', text: 'would', isCorrect: true },
        { letter: 'C', text: 'can', isCorrect: false },
        { letter: 'D', text: 'am', isCorrect: false }
      ],
      explanation: 'Kalimat pengandaian (conditional) = "would buy"',
      difficulty: 'hard'
    },
  ],
  'past-future-continuous': [
    {
      id: 'pfc-q2', tenseId: 'past-future-continuous',
      question: 'He said he _____ _____ _____ at 5 PM.',
      options: [
        { letter: 'A', text: 'will be working', isCorrect: false },
        { letter: 'B', text: 'would be working', isCorrect: true },
        { letter: 'C', text: 'was working', isCorrect: false },
        { letter: 'D', text: 'would work', isCorrect: false }
      ],
      explanation: '"He said" (lampau) + "at 5 PM" → would be working',
      difficulty: 'hard'
    },
    {
      id: 'pfc-q3', tenseId: 'past-future-continuous',
      question: 'At that time, we _____ _____ _____ together.',
      options: [
        { letter: 'A', text: 'would be traveling', isCorrect: true },
        { letter: 'B', text: 'will be traveling', isCorrect: false },
        { letter: 'C', text: 'were traveling', isCorrect: false },
        { letter: 'D', text: 'would travel', isCorrect: false }
      ],
      explanation: '"At that time" (masa lalu) → would be traveling (akan sedang traveling)',
      difficulty: 'hard'
    },
  ],
  'past-future-perfect': [
    {
      id: 'pfp-q2', tenseId: 'past-future-perfect',
      question: 'I _____ _____ _____ the exam if I had studied.',
      options: [
        { letter: 'A', text: 'will have passed', isCorrect: false },
        { letter: 'B', text: 'would have passed', isCorrect: true },
        { letter: 'C', text: 'would pass', isCorrect: false },
        { letter: 'D', text: 'have passed', isCorrect: false }
      ],
      explanation: 'Pengandaian masa lalu (type 3 conditional) = would have + V3',
      difficulty: 'hard'
    },
    {
      id: 'pfp-q3', tenseId: 'past-future-perfect',
      question: 'She _____ _____ _____ by then if she had started earlier.',
      options: [
        { letter: 'A', text: 'would have finished', isCorrect: true },
        { letter: 'B', text: 'will have finished', isCorrect: false },
        { letter: 'C', text: 'would finish', isCorrect: false },
        { letter: 'D', text: 'had finished', isCorrect: false }
      ],
      explanation: '"By then" + "had started" (past perfect) → would have finished',
      difficulty: 'hard'
    },
  ],
  'past-future-perfect-continuous': [
    {
      id: 'pfpc-q2', tenseId: 'past-future-perfect-continuous',
      question: 'He said he _____ _____ _____ _____ there for 5 years.',
      options: [
        { letter: 'A', text: 'would have been working', isCorrect: true },
        { letter: 'B', text: 'will have been working', isCorrect: false },
        { letter: 'C', text: 'had been working', isCorrect: false },
        { letter: 'D', text: 'would be working', isCorrect: false }
      ],
      explanation: '"He said" (lampau) + "for 5 years" (durasi) → would have been working',
      difficulty: 'hard'
    },
    {
      id: 'pfpc-q3', tenseId: 'past-future-perfect-continuous',
      question: 'By the end of 2023, if she hadn\'t quit, she _____ _____ _____ _____ for a decade.',
      options: [
        { letter: 'A', text: 'would have been working', isCorrect: true },
        { letter: 'B', text: 'would work', isCorrect: false },
        { letter: 'C', text: 'had been working', isCorrect: false },
        { letter: 'D', text: 'will have been working', isCorrect: false }
      ],
      explanation: 'Type 3 conditional + durasi ("for a decade") = would have been working',
      difficulty: 'hard'
    },
  ]
}
