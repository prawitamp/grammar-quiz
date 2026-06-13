import { TenseLesson } from './types'

export const beginnerTenses: TenseLesson[] = [
  {
    tense: {
      id: 'simple-present',
      name: 'Simple Present',
      category: 'present',
      level: 'beginner',
      description: 'Digunakan untuk menyatakan kebiasaan, fakta umum, atau hal yang selalu terjadi',
      formula: 'S + V1 / S + V1 + s/es',
      usage: [
        'Kebiasaan atau rutinitas',
        'Fakta umum',
        'Jadwal teratur',
        'Opini atau perasaan yang permanen'
      ],
      examples: {
        positive: [
          'I read a book every day.',
          'She plays football on Saturdays.',
          'They eat breakfast at 7 AM.'
        ],
        negative: [
          "I don't read a book every day.",
          "She doesn't play football on Saturdays.",
          "They don't eat breakfast at 7 AM."
        ],
        interrogative: [
          'Do I read a book every day?',
          'Does she play football on Saturdays?',
          'Do they eat breakfast at 7 AM?'
        ]
      },
      timeSignals: ['every day', 'usually', 'often', 'sometimes', 'always', 'never', 'on weekends']
    },
    questions: [
      {
        id: 'sp-q1',
        tenseId: 'simple-present',
        question: 'She _____ to school every morning.',
        options: [
          { letter: 'A', text: 'go', isCorrect: false },
          { letter: 'B', text: 'goes', isCorrect: true },
          { letter: 'C', text: 'going', isCorrect: false },
          { letter: 'D', text: 'went', isCorrect: false }
        ],
        explanation: 'Subject "she" adalah orang ketiga singular, jadi menggunakan "goes" bukan "go"',
        difficulty: 'easy'
      },
      {
        id: 'sp-q2',
        tenseId: 'simple-present',
        question: 'They _____ not like spicy food.',
        options: [
          { letter: 'A', text: 'does', isCorrect: false },
          { letter: 'B', text: 'do', isCorrect: true },
          { letter: 'C', text: 'did', isCorrect: false },
          { letter: 'D', text: 'are', isCorrect: false }
        ],
        explanation: 'Untuk subject "they" (plural), gunakan "do" bukan "does"',
        difficulty: 'easy'
      },
      {
        id: 'sp-q3',
        tenseId: 'simple-present',
        question: 'What time _____ you usually wake up?',
        options: [
          { letter: 'A', text: 'do', isCorrect: true },
          { letter: 'B', text: 'does', isCorrect: false },
          { letter: 'C', text: 'did', isCorrect: false },
          { letter: 'D', text: 'will', isCorrect: false }
        ],
        explanation: 'Untuk pertanyaan dengan "you", gunakan "do"',
        difficulty: 'medium'
      }
    ]
  }
]

export const presentContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'present-continuous',
      name: 'Present Continuous',
      category: 'present',
      level: 'beginner',
      description: 'Digunakan untuk menyatakan aksi yang sedang berlangsung sekarang',
      formula: 'S + am/is/are + V-ing',
      usage: [
        'Aksi yang sedang terjadi saat berbicara',
        'Rencana yang sudah pasti di masa depan dekat',
        'Situasi yang sedang berlangsung (bisa jangka panjang)'
      ],
      examples: {
        positive: [
          'I am reading a book now.',
          'She is playing football at the moment.',
          'They are eating lunch right now.'
        ],
        negative: [
          'I am not reading a book now.',
          'She is not playing football at the moment.',
          'They are not eating lunch right now.'
        ],
        interrogative: [
          'Am I reading a book now?',
          'Is she playing football at the moment?',
          'Are they eating lunch right now?'
        ]
      },
      timeSignals: ['now', 'at the moment', 'right now', 'currently', 'today']
    },
    questions: [
      {
        id: 'pc-q1',
        tenseId: 'present-continuous',
        question: 'What _____ you doing right now?',
        options: [
          { letter: 'A', text: 'are', isCorrect: true },
          { letter: 'B', text: 'is', isCorrect: false },
          { letter: 'C', text: 'do', isCorrect: false },
          { letter: 'D', text: 'am', isCorrect: false }
        ],
        explanation: 'Untuk "you", gunakan "are" dalam present continuous',
        difficulty: 'easy'
      },
      {
        id: 'pc-q2',
        tenseId: 'present-continuous',
        question: 'She _____ _____ her homework at the moment.',
        options: [
          { letter: 'A', text: 'is doing', isCorrect: true },
          { letter: 'B', text: 'does do', isCorrect: false },
          { letter: 'C', text: 'is do', isCorrect: false },
          { letter: 'D', text: 'are doing', isCorrect: false }
        ],
        explanation: 'Present continuous: is + V-ing. Untuk "she", gunakan "is"',
        difficulty: 'medium'
      }
    ]
  }
]

export const presentPerfect: TenseLesson[] = [
  {
    tense: {
      id: 'present-perfect',
      name: 'Present Perfect',
      category: 'present',
      level: 'beginner',
      description: 'Digunakan untuk aksi yang sudah selesai tapi efeknya masih terasa sekarang',
      formula: 'S + have/has + V3',
      usage: [
        'Pengalaman hidup (belum disebutkan kapan)',
        'Aksi yang baru saja selesai',
        'Hasil dari aksi di masa lalu yang masih relevan sekarang',
        'Aksi yang dimulai di masa lalu dan masih berlanjut'
      ],
      examples: {
        positive: [
          'I have read this book.',
          'She has visited Paris.',
          'They have finished their homework.'
        ],
        negative: [
          'I have not read this book.',
          'She has not visited Paris.',
          'They have not finished their homework.'
        ],
        interrogative: [
          'Have I read this book?',
          'Has she visited Paris?',
          'Have they finished their homework?'
        ]
      },
      timeSignals: ['already', 'just', 'yet', 'ever', 'never', 'so far', 'recently', 'since', 'for']
    },
    questions: [
      {
        id: 'pp-q1',
        tenseId: 'present-perfect',
        question: 'I _____ already _____ my breakfast.',
        options: [
          { letter: 'A', text: 'have eaten', isCorrect: true },
          { letter: 'B', text: 'has eaten', isCorrect: false },
          { letter: 'C', text: 'am eating', isCorrect: false },
          { letter: 'D', text: 'ate', isCorrect: false }
        ],
        explanation: 'Present Perfect: have/has + V3. Untuk "I", gunakan "have"',
        difficulty: 'easy'
      },
      {
        id: 'pp-q2',
        tenseId: 'present-perfect',
        question: 'She _____ never _____ to Japan.',
        options: [
          { letter: 'A', text: 'has been', isCorrect: true },
          { letter: 'B', text: 'have been', isCorrect: false },
          { letter: 'C', text: 'was', isCorrect: false },
          { letter: 'D', text: 'is', isCorrect: false }
        ],
        explanation: 'Untuk "she" (singular), gunakan "has" + V3',
        difficulty: 'medium'
      }
    ]
  }
]

export const presentPerfectContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'present-perfect-continuous',
      name: 'Present Perfect Continuous',
      category: 'present',
      level: 'beginner',
      description: 'Aksi yang dimulai di masa lalu dan masih berlangsung sampai sekarang dengan penekanan pada durasi',
      formula: 'S + have/has + been + V-ing',
      usage: [
        'Aksi yang dimulai di masa lalu dan masih berlanjut sekarang',
        'Menekankan durasi waktu',
        'Menunjukkan sebab dari kondisi sekarang'
      ],
      examples: {
        positive: [
          'I have been reading this book for two hours.',
          'She has been studying English since 2020.',
          'They have been waiting here all morning.'
        ],
        negative: [
          'I have not been reading this book for two hours.',
          'She has not been studying English since 2020.',
          'They have not been waiting here all morning.'
        ],
        interrogative: [
          'Have I been reading this book for two hours?',
          'Has she been studying English since 2020?',
          'Have they been waiting here all morning?'
        ]
      },
      timeSignals: ['for', 'since', 'all day', 'all week', 'recently', 'lately']
    },
    questions: [
      {
        id: 'ppc-q1',
        tenseId: 'present-perfect-continuous',
        question: 'She _____ _____ for three hours.',
        options: [
          { letter: 'A', text: 'has been working', isCorrect: true },
          { letter: 'B', text: 'have been working', isCorrect: false },
          { letter: 'C', text: 'is working', isCorrect: false },
          { letter: 'D', text: 'has worked', isCorrect: false }
        ],
        explanation: 'Present Perfect Continuous: has/have + been + V-ing. Untuk "she", gunakan "has"',
        difficulty: 'medium'
      },
      {
        id: 'ppc-q2',
        tenseId: 'present-perfect-continuous',
        question: 'How long _____ you _____ here?',
        options: [
          { letter: 'A', text: 'have been waiting', isCorrect: true },
          { letter: 'B', text: 'has been waiting', isCorrect: false },
          { letter: 'C', text: 'are waiting', isCorrect: false },
          { letter: 'D', text: 'wait', isCorrect: false }
        ],
        explanation: 'Untuk pertanyaan dengan "you", gunakan "have been" + V-ing',
        difficulty: 'hard'
      }
    ]
  }
]

// Export all beginner tenses
export const allBeginnerTenses = [
  ...beginnerTenses,
  ...presentContinuous,
  ...presentPerfect,
  ...presentPerfectContinuous
]
