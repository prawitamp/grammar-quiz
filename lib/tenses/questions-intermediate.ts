import { TenseQuestion } from './types'

export const intermediateExtraQuestions: Record<string, TenseQuestion[]> = {
  'simple-past': [
    {
      id: 'sp-p-q3', tenseId: 'simple-past',
      question: 'I _____ a great movie last night.',
      options: [
        { letter: 'A', text: 'see', isCorrect: false },
        { letter: 'B', text: 'saw', isCorrect: true },
        { letter: 'C', text: 'seen', isCorrect: false },
        { letter: 'D', text: 'seeing', isCorrect: false }
      ],
      explanation: '"Last night" = lampau. "See" → V2 irregular = "saw"',
      difficulty: 'easy'
    },
    {
      id: 'sp-p-q4', tenseId: 'simple-past',
      question: 'Budi _____ to Bandung last week.',
      options: [
        { letter: 'A', text: 'go', isCorrect: false },
        { letter: 'B', text: 'goes', isCorrect: false },
        { letter: 'C', text: 'went', isCorrect: true },
        { letter: 'D', text: 'going', isCorrect: false }
      ],
      explanation: '"Last week" = kata kunci Simple Past. "Go" → V2 = "went"',
      difficulty: 'easy'
    },
    {
      id: 'sp-p-q5', tenseId: 'simple-past',
      question: 'We _____ not play football yesterday.',
      options: [
        { letter: 'A', text: 'do', isCorrect: false },
        { letter: 'B', text: 'does', isCorrect: false },
        { letter: 'C', text: 'did', isCorrect: true },
        { letter: 'D', text: 'were', isCorrect: false }
      ],
      explanation: 'Negatif Simple Past = did not + V1 (play, bukan played!)',
      difficulty: 'medium'
    },
    {
      id: 'sp-p-q6', tenseId: 'simple-past',
      question: 'Where _____ you _____ your new bag?',
      options: [
        { letter: 'A', text: 'did buy', isCorrect: true },
        { letter: 'B', text: 'did bought', isCorrect: false },
        { letter: 'C', text: 'bought', isCorrect: false },
        { letter: 'D', text: 'do buy', isCorrect: false }
      ],
      explanation: 'Pertanyaan Simple Past = did + S + V1 (buy, bukan bought!)',
      difficulty: 'medium'
    },
    {
      id: 'sp-p-q7', tenseId: 'simple-past',
      question: 'My mother _____ me a gift last week.',
      options: [
        { letter: 'A', text: 'give', isCorrect: false },
        { letter: 'B', text: 'gived', isCorrect: false },
        { letter: 'C', text: 'gave', isCorrect: true },
        { letter: 'D', text: 'given', isCorrect: false }
      ],
      explanation: '"Give" → V2 irregular = "gave"',
      difficulty: 'easy'
    },
    {
      id: 'sp-p-q8', tenseId: 'simple-past',
      question: 'The students _____ the exam last Monday.',
      options: [
        { letter: 'A', text: 'take', isCorrect: false },
        { letter: 'B', text: 'took', isCorrect: true },
        { letter: 'C', text: 'taken', isCorrect: false },
        { letter: 'D', text: 'taking', isCorrect: false }
      ],
      explanation: '"Last Monday" = lampau. "Take" → V2 = "took"',
      difficulty: 'medium'
    },
  ],
  'past-continuous': [
    {
      id: 'pc-p-q2', tenseId: 'past-continuous',
      question: 'I _____ _____ dinner when you called.',
      options: [
        { letter: 'A', text: 'was having', isCorrect: true },
        { letter: 'B', text: 'were having', isCorrect: false },
        { letter: 'C', text: 'had', isCorrect: false },
        { letter: 'D', text: 'have', isCorrect: false }
      ],
      explanation: '"When you called" (interupsi). "I" = was having',
      difficulty: 'easy'
    },
    {
      id: 'pc-p-q3', tenseId: 'past-continuous',
      question: 'At 8 PM yesterday, we _____ _____ TV.',
      options: [
        { letter: 'A', text: 'was watching', isCorrect: false },
        { letter: 'B', text: 'were watching', isCorrect: true },
        { letter: 'C', text: 'watched', isCorrect: false },
        { letter: 'D', text: 'watching', isCorrect: false }
      ],
      explanation: '"At 8 PM yesterday" = waktu spesifik. "We" = were watching',
      difficulty: 'easy'
    },
    {
      id: 'pc-p-q4', tenseId: 'past-continuous',
      question: 'While I _____ _____, it started raining.',
      options: [
        { letter: 'A', text: 'was walking', isCorrect: true },
        { letter: 'B', text: 'were walking', isCorrect: false },
        { letter: 'C', text: 'walked', isCorrect: false },
        { letter: 'D', text: 'walk', isCorrect: false }
      ],
      explanation: '"While" (sementara). "I" = was walking. Past Continuous untuk latar belakang',
      difficulty: 'medium'
    },
    {
      id: 'pc-p-q5', tenseId: 'past-continuous',
      question: 'The kids _____ _____ when I checked on them.',
      options: [
        { letter: 'A', text: 'was sleeping', isCorrect: false },
        { letter: 'B', text: 'were sleeping', isCorrect: true },
        { letter: 'C', text: 'slept', isCorrect: false },
        { letter: 'D', text: 'have been sleeping', isCorrect: false }
      ],
      explanation: '"The kids" = They (plural) → were sleeping',
      difficulty: 'medium'
    },
  ],
  'past-perfect': [
    {
      id: 'pp-past-q2', tenseId: 'past-perfect',
      question: 'After I _____ _____ the letter, I cried.',
      options: [
        { letter: 'A', text: 'had read', isCorrect: true },
        { letter: 'B', text: 'have read', isCorrect: false },
        { letter: 'C', text: 'read', isCorrect: false },
        { letter: 'D', text: 'was reading', isCorrect: false }
      ],
      explanation: '"After" + Past Perfect menunjukkan aksi pertama (baca duluan, baru nangis)',
      difficulty: 'medium'
    },
    {
      id: 'pp-past-q3', tenseId: 'past-perfect',
      question: 'She told me she _____ never _____ to Singapore.',
      options: [
        { letter: 'A', text: 'has been', isCorrect: false },
        { letter: 'B', text: 'had been', isCorrect: true },
        { letter: 'C', text: 'went', isCorrect: false },
        { letter: 'D', text: 'goes', isCorrect: false }
      ],
      explanation: '"Told" (lampau) + "before that" = Past Perfect: had been',
      difficulty: 'medium'
    },
    {
      id: 'pp-past-q4', tenseId: 'past-perfect',
      question: 'When we arrived, the movie _____ already _____ .',
      options: [
        { letter: 'A', text: 'had started', isCorrect: true },
        { letter: 'B', text: 'has started', isCorrect: false },
        { letter: 'C', text: 'started', isCorrect: false },
        { letter: 'D', text: 'was starting', isCorrect: false }
      ],
      explanation: '"When we arrived" + "already" = Past Perfect: had started (mulai duluan sebelum kita datang)',
      difficulty: 'medium'
    },
  ],
  'past-perfect-continuous': [
    {
      id: 'ppc-past-q2', tenseId: 'past-perfect-continuous',
      question: 'They _____ _____ _____ for hours before the bus arrived.',
      options: [
        { letter: 'A', text: 'had been waiting', isCorrect: true },
        { letter: 'B', text: 'have been waiting', isCorrect: false },
        { letter: 'C', text: 'were waiting', isCorrect: false },
        { letter: 'D', text: 'waited', isCorrect: false }
      ],
      explanation: '"For hours" (durasi) + "before the bus arrived" = Past Perfect Continuous',
      difficulty: 'hard'
    },
    {
      id: 'ppc-past-q3', tenseId: 'past-perfect-continuous',
      question: 'Her eyes were red because she _____ _____ _____ .',
      options: [
        { letter: 'A', text: 'had been crying', isCorrect: true },
        { letter: 'B', text: 'was crying', isCorrect: false },
        { letter: 'C', text: 'has been crying', isCorrect: false },
        { letter: 'D', text: 'cried', isCorrect: false }
      ],
      explanation: 'Mata merah karena sebelumnya menangis (durasi, penyebab) = had been crying',
      difficulty: 'hard'
    },
  ]
}
