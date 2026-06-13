import { TenseLesson } from './types'

export const simplePast: TenseLesson[] = [
  {
    tense: {
      id: 'simple-past',
      name: 'Simple Past',
      category: 'past',
      level: 'intermediate',
      description: 'Digunakan untuk menyatakan aksi yang terjadi dan selesai di masa lalu',
      formula: 'S + V2 / S + did + V1',
      usage: [
        'Aksi yang terjadi dan selesai di masa lalu',
        'Urutan peristiwa di masa lalu',
        'Kebiasaan di masa lalu',
        'Fakta di masa lalu'
      ],
      examples: {
        positive: [
          'I read a book yesterday.',
          'She played football last Saturday.',
          'They went to the beach last week.'
        ],
        negative: [
          'I did not read a book yesterday.',
          'She did not play football last Saturday.',
          'They did not go to the beach last week.'
        ],
        interrogative: [
          'Did I read a book yesterday?',
          'Did she play football last Saturday?',
          'Did they go to the beach last week?'
        ]
      },
      timeSignals: ['yesterday', 'last week', 'last month', 'ago', 'in 2020', 'then', 'when']
    },
    questions: [
      {
        id: 'sp-p-q1',
        tenseId: 'simple-past',
        question: 'She _____ to the market yesterday.',
        options: [
          { letter: 'A', text: 'goes', isCorrect: false },
          { letter: 'B', text: 'went', isCorrect: true },
          { letter: 'C', text: 'go', isCorrect: false },
          { letter: 'D', text: 'going', isCorrect: false }
        ],
        explanation: 'Simple Past menggunakan V2 (past form). "went" adalah past form dari "go"',
        difficulty: 'easy'
      },
      {
        id: 'sp-p-q2',
        tenseId: 'simple-past',
        question: 'They _____ not finish their work last night.',
        options: [
          { letter: 'A', text: 'does', isCorrect: false },
          { letter: 'B', text: 'did', isCorrect: true },
          { letter: 'C', text: 'do', isCorrect: false },
          { letter: 'D', text: 'were', isCorrect: false }
        ],
        explanation: 'Untuk negative Simple Past, gunakan "did not" + V1',
        difficulty: 'medium'
      }
    ]
  }
]

export const pastContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'past-continuous',
      name: 'Past Continuous',
      category: 'past',
      level: 'intermediate',
      description: 'Digunakan untuk aksi yang sedang berlangsung di masa lalu',
      formula: 'S + was/were + V-ing',
      usage: [
        'Aksi yang sedang terjadi pada waktu tertentu di masa lalu',
        'Dua aksi yang terjadi bersamaan di masa lalu',
        'Aksi latar belakang (interrupted action)'
      ],
      examples: {
        positive: [
          'I was reading a book at 3 PM yesterday.',
          'She was sleeping when you called.',
          'They were playing football all afternoon.'
        ],
        negative: [
          'I was not reading a book at 3 PM yesterday.',
          'She was not sleeping when you called.',
          'They were not playing football all afternoon.'
        ],
        interrogative: [
          'Was I reading a book at 3 PM yesterday?',
          'Was she sleeping when you called?',
          'Were they playing football all afternoon?'
        ]
      },
      timeSignals: ['at 5 PM', 'yesterday', 'when', 'while', 'all afternoon', 'last night']
    },
    questions: [
      {
        id: 'pc-p-q1',
        tenseId: 'past-continuous',
        question: 'When you arrived, she _____ cooking dinner.',
        options: [
          { letter: 'A', text: 'is', isCorrect: false },
          { letter: 'B', text: 'was', isCorrect: true },
          { letter: 'C', text: 'were', isCorrect: false },
          { letter: 'D', text: 'cook', isCorrect: false }
        ],
        explanation: 'Past Continuous: was/were + V-ing. Untuk "she", gunakan "was"',
        difficulty: 'medium'
      }
    ]
  }
]

export const pastPerfect: TenseLesson[] = [
  {
    tense: {
      id: 'past-perfect',
      name: 'Past Perfect',
      category: 'past',
      level: 'intermediate',
      description: 'Aksi yang terjadi lebih dulu sebelum aksi lain di masa lalu',
      formula: 'S + had + V3',
      usage: [
        'Aksi pertama dalam urutan dua aksi di masa lalu',
        'Menekankan aksi mana yang terjadi lebih dulu',
        'Menyatakan pengalaman sebelum waktu tertentu di masa lalu'
      ],
      examples: {
        positive: [
          'I had finished my homework before she arrived.',
          'She had eaten dinner before the movie started.',
          'They had left the house when it started raining.'
        ],
        negative: [
          'I had not finished my homework before she arrived.',
          'She had not eaten dinner before the movie started.',
          'They had not left the house when it started raining.'
        ],
        interrogative: [
          'Had I finished my homework before she arrived?',
          'Had she eaten dinner before the movie started?',
          'Had they left the house when it started raining?'
        ]
      },
      timeSignals: ['before', 'after', 'when', 'by the time', 'already', 'by then']
    },
    questions: [
      {
        id: 'pp-past-q1',
        tenseId: 'past-perfect',
        question: 'By the time you arrived, I _____ already _____ the dishes.',
        options: [
          { letter: 'A', text: 'had washed', isCorrect: true },
          { letter: 'B', text: 'have washed', isCorrect: false },
          { letter: 'C', text: 'washed', isCorrect: false },
          { letter: 'D', text: 'was washing', isCorrect: false }
        ],
        explanation: 'Past Perfect: had + V3. Menunjukkan aksi yang selesai sebelum waktu lain di masa lalu',
        difficulty: 'hard'
      }
    ]
  }
]

export const pastPerfectContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'past-perfect-continuous',
      name: 'Past Perfect Continuous',
      category: 'past',
      level: 'intermediate',
      description: 'Aksi yang berlangsung di masa lalu dan selesai sebelum aksi lain terjadi',
      formula: 'S + had + been + V-ing',
      usage: [
        'Aksi berkelanjutan yang berakhir di masa lalu',
        'Menekankan durasi sebelum aksi lain',
        'Menunjukkan penyebab dari situasi di masa lalu'
      ],
      examples: {
        positive: [
          'I had been working for three hours when he arrived.',
          'She had been studying English for two years before moving to London.',
          'They had been waiting all day when the bus finally came.'
        ],
        negative: [
          'I had not been working for three hours when he arrived.',
          'She had not been studying English for two years before moving to London.',
          'They had not been waiting all day when the bus finally came.'
        ],
        interrogative: [
          'Had I been working for three hours when he arrived?',
          'Had she been studying English for two years before moving to London?',
          'Had they been waiting all day when the bus finally came?'
        ]
      },
      timeSignals: ['for', 'before', 'when', 'by the time', 'all day', 'for months']
    },
    questions: [
      {
        id: 'ppc-past-q1',
        tenseId: 'past-perfect-continuous',
        question: 'She _____ been studying for two hours when I called her.',
        options: [
          { letter: 'A', text: 'have', isCorrect: false },
          { letter: 'B', text: 'has', isCorrect: false },
          { letter: 'C', text: 'had', isCorrect: true },
          { letter: 'D', text: 'was', isCorrect: false }
        ],
        explanation: 'Past Perfect Continuous: had + been + V-ing',
        difficulty: 'hard'
      }
    ]
  }
]

export const allIntermediateTenses = [
  ...simplePast,
  ...pastContinuous,
  ...pastPerfect,
  ...pastPerfectContinuous
]
