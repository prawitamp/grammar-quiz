import { TenseLesson } from './types'

// Simple Future
export const simpleFuture: TenseLesson[] = [
  {
    tense: {
      id: 'simple-future',
      name: 'Simple Future',
      category: 'future',
      level: 'advanced',
      description: 'Digunakan untuk menyatakan aksi yang akan terjadi di masa depan',
      formula: 'S + will + V1',
      usage: [
        'Prediksi tentang masa depan',
        'Keputusan spontan',
        'Janji atau penawaran',
        'Fakta tentang masa depan'
      ],
      examples: {
        positive: [
          'I will read a book tomorrow.',
          'She will visit her grandmother next week.',
          'They will finish the project soon.'
        ],
        negative: [
          'I will not read a book tomorrow.',
          'She will not visit her grandmother next week.',
          'They will not finish the project soon.'
        ],
        interrogative: [
          'Will I read a book tomorrow?',
          'Will she visit her grandmother next week?',
          'Will they finish the project soon?'
        ]
      },
      timeSignals: ['tomorrow', 'next week', 'soon', 'later', 'tonight', 'in the future']
    },
    questions: [
      {
        id: 'sf-q1',
        tenseId: 'simple-future',
        question: 'I _____ call you later tonight.',
        options: [
          { letter: 'A', text: 'will', isCorrect: true },
          { letter: 'B', text: 'am', isCorrect: false },
          { letter: 'C', text: 'have', isCorrect: false },
          { letter: 'D', text: 'did', isCorrect: false }
        ],
        explanation: 'Simple Future: will + V1',
        difficulty: 'easy'
      }
    ]
  }
]

// Future Continuous
export const futureContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'future-continuous',
      name: 'Future Continuous',
      category: 'future',
      level: 'advanced',
      description: 'Aksi yang akan sedang berlangsung pada waktu tertentu di masa depan',
      formula: 'S + will + be + V-ing',
      usage: [
        'Aksi yang akan sedang berlangsung di masa depan',
        'Rencana atau janji yang sudah pasti',
        'Pertanyaan sopan tentang rencana'
      ],
      examples: {
        positive: [
          'I will be reading a book at 8 PM tonight.',
          'She will be working at the office tomorrow morning.',
          'They will be traveling to Japan next month.'
        ],
        negative: [
          'I will not be reading a book at 8 PM tonight.',
          'She will not be working at the office tomorrow morning.',
          'They will not be traveling to Japan next month.'
        ],
        interrogative: [
          'Will I be reading a book at 8 PM tonight?',
          'Will she be working at the office tomorrow morning?',
          'Will they be traveling to Japan next month?'
        ]
      },
      timeSignals: ['at this time tomorrow', 'this time next week', 'at 8 PM tomorrow']
    },
    questions: [
      {
        id: 'fc-q1',
        tenseId: 'future-continuous',
        question: 'This time tomorrow, I _____ _____ on a plane.',
        options: [
          { letter: 'A', text: 'will be flying', isCorrect: true },
          { letter: 'B', text: 'will fly', isCorrect: false },
          { letter: 'C', text: 'am flying', isCorrect: false },
          { letter: 'D', text: 'have flown', isCorrect: false }
        ],
        explanation: 'Future Continuous: will + be + V-ing',
        difficulty: 'medium'
      }
    ]
  }
]

// Future Perfect
export const futurePerfect: TenseLesson[] = [
  {
    tense: {
      id: 'future-perfect',
      name: 'Future Perfect',
      category: 'future',
      level: 'advanced',
      description: 'Aksi yang akan sudah selesai sebelum waktu tertentu di masa depan',
      formula: 'S + will + have + V3',
      usage: [
        'Aksi yang akan selesai sebelum waktu tertentu di masa depan',
        'Menekankan penyelesaian di masa depan'
      ],
      examples: {
        positive: [
          'I will have finished my homework by 9 PM.',
          'She will have graduated by next year.',
          'They will have completed the project by Friday.'
        ],
        negative: [
          'I will not have finished my homework by 9 PM.',
          'She will not have graduated by next year.',
          'They will not have completed the project by Friday.'
        ],
        interrogative: [
          'Will I have finished my homework by 9 PM?',
          'Will she have graduated by next year?',
          'Will they have completed the project by Friday?'
        ]
      },
      timeSignals: ['by tomorrow', 'by next week', 'by the time', 'before']
    },
    questions: [
      {
        id: 'fp-q1',
        tenseId: 'future-perfect',
        question: 'By this time next year, she _____ _____ her degree.',
        options: [
          { letter: 'A', text: 'will have completed', isCorrect: true },
          { letter: 'B', text: 'will complete', isCorrect: false },
          { letter: 'C', text: 'has completed', isCorrect: false },
          { letter: 'D', text: 'will be completing', isCorrect: false }
        ],
        explanation: 'Future Perfect: will + have + V3',
        difficulty: 'hard'
      }
    ]
  }
]

// Future Perfect Continuous
export const futurePerfectContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'future-perfect-continuous',
      name: 'Future Perfect Continuous',
      category: 'future',
      level: 'advanced',
      description: 'Aksi yang akan sudah berlangsung sekian lama di masa depan',
      formula: 'S + will + have + been + V-ing',
      usage: [
        'Menekankan durasi aksi hingga waktu tertentu di masa depan',
        'Aksi yang akan terus berlangsung sampai masa depan'
      ],
      examples: {
        positive: [
          'I will have been working here for 10 years next month.',
          'She will have been studying English for 5 years by graduation.',
          'They will have been living in Tokyo for a decade by 2030.'
        ],
        negative: [
          'I will not have been working here for 10 years next month.',
          'She will not have been studying English for 5 years by graduation.',
          'They will not have been living in Tokyo for a decade by 2030.'
        ],
        interrogative: [
          'Will I have been working here for 10 years next month?',
          'Will she have been studying English for 5 years by graduation?',
          'Will they have been living in Tokyo for a decade by 2030?'
        ]
      },
      timeSignals: ['by next month', 'for 10 years by', 'by the time']
    },
    questions: [
      {
        id: 'fpc-q1',
        tenseId: 'future-perfect-continuous',
        question: 'By December, I _____ _____ _____ in this company for three years.',
        options: [
          { letter: 'A', text: 'will have been working', isCorrect: true },
          { letter: 'B', text: 'will work', isCorrect: false },
          { letter: 'C', text: 'have been working', isCorrect: false },
          { letter: 'D', text: 'will be working', isCorrect: false }
        ],
        explanation: 'Future Perfect Continuous: will + have + been + V-ing',
        difficulty: 'hard'
      }
    ]
  }
]

// Simple Past Future
export const simplePastFuture: TenseLesson[] = [
  {
    tense: {
      id: 'simple-past-future',
      name: 'Simple Past Future',
      category: 'past-future',
      level: 'advanced',
      description: 'Rencana atau keinginan di masa lalu yang tidak terjadi',
      formula: 'S + would + V1',
      usage: [
        'Rencana di masa lalu yang tidak terwujud',
        'Keinginan atau niat di masa lalu',
        'Situasi hipotetis di masa lalu'
      ],
      examples: {
        positive: [
          'I would read that book (but I didn\'t).',
          'She would visit her friend (but she couldn\'t).',
          'They would finish the work (but they ran out of time).'
        ],
        negative: [
          'I would not read that book.',
          'She would not visit her friend.',
          'They would not finish the work.'
        ],
        interrogative: [
          'Would I read that book?',
          'Would she visit her friend?',
          'Would they finish the work?'
        ]
      },
      timeSignals: ['if', 'in that situation', 'at that time']
    },
    questions: [
      {
        id: 'spf-q1',
        tenseId: 'simple-past-future',
        question: 'He said he _____ come to the party.',
        options: [
          { letter: 'A', text: 'would', isCorrect: true },
          { letter: 'B', text: 'will', isCorrect: false },
          { letter: 'C', text: 'is', isCorrect: false },
          { letter: 'D', text: 'was', isCorrect: false }
        ],
        explanation: 'Simple Past Future: would + V1 (untuk menyatakan rencana di masa lalu)',
        difficulty: 'hard'
      }
    ]
  }
]

// Past Future Continuous
export const pastFutureContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'past-future-continuous',
      name: 'Past Future Continuous',
      category: 'past-future',
      level: 'advanced',
      description: 'Aksi yang akan sedang berlangsung di masa lalu (tetapi tidak terjadi)',
      formula: 'S + would + be + V-ing',
      usage: [
        'Rencana yang akan sedang berlangsung di masa lalu',
        'Aksi yang akan terjadi tetapi tidak jadi'
      ],
      examples: {
        positive: [
          'I would be working at that time (but it didn\'t happen).',
          'She would be studying abroad (but plans changed).',
          'They would be traveling together (but they cancelled).'
        ],
        negative: [
          'I would not be working at that time.',
          'She would not be studying abroad.',
          'They would not be traveling together.'
        ],
        interrogative: [
          'Would I be working at that time?',
          'Would she be studying abroad?',
          'Would they be traveling together?'
        ]
      },
      timeSignals: ['at that time', 'if', 'in that case']
    },
    questions: [
      {
        id: 'pfc-q1',
        tenseId: 'past-future-continuous',
        question: 'She said she _____ _____ at the office at 5 PM.',
        options: [
          { letter: 'A', text: 'would be working', isCorrect: true },
          { letter: 'B', text: 'will be working', isCorrect: false },
          { letter: 'C', text: 'was working', isCorrect: false },
          { letter: 'D', text: 'would work', isCorrect: false }
        ],
        explanation: 'Past Future Continuous: would + be + V-ing',
        difficulty: 'hard'
      }
    ]
  }
]

// Past Future Perfect
export const pastFuturePerfect: TenseLesson[] = [
  {
    tense: {
      id: 'past-future-perfect',
      name: 'Past Future Perfect',
      category: 'past-future',
      level: 'advanced',
      description: 'Aksi yang akan sudah selesai di masa lalu (tetapi tidak terjadi)',
      formula: 'S + would + have + V3',
      usage: [
        'Rencana yang akan selesai di masa lalu tetapi gagal',
        'Penyesalan tentang masa lalu'
      ],
      examples: {
        positive: [
          'I would have finished the work by then (but I didn\'t).',
          'She would have graduated last year (but she postponed).',
          'They would have arrived on time (but they were late).'
        ],
        negative: [
          'I would not have finished the work by then.',
          'She would not have graduated last year.',
          'They would not have arrived on time.'
        ],
        interrogative: [
          'Would I have finished the work by then?',
          'Would she have graduated last year?',
          'Would they have arrived on time?'
        ]
      },
      timeSignals: ['by that time', 'if', 'in that situation']
    },
    questions: [
      {
        id: 'pfp-q1',
        tenseId: 'past-future-perfect',
        question: 'By yesterday, he _____ _____ _____ his project.',
        options: [
          { letter: 'A', text: 'would have completed', isCorrect: true },
          { letter: 'B', text: 'will have completed', isCorrect: false },
          { letter: 'C', text: 'had completed', isCorrect: false },
          { letter: 'D', text: 'would complete', isCorrect: false }
        ],
        explanation: 'Past Future Perfect: would + have + V3',
        difficulty: 'hard'
      }
    ]
  }
]

// Past Future Perfect Continuous
export const pastFuturePerfectContinuous: TenseLesson[] = [
  {
    tense: {
      id: 'past-future-perfect-continuous',
      name: 'Past Future Perfect Continuous',
      category: 'past-future',
      level: 'advanced',
      description: 'Aksi yang akan sudah berlangsung lama di masa lalu (tetapi tidak terjadi)',
      formula: 'S + would + have + been + V-ing',
      usage: [
        'Durasi aksi yang akan terjadi di masa lalu tetapi gagal',
        'Menekankan waktu yang seharusnya berlangsung'
      ],
      examples: {
        positive: [
          'I would have been working there for 5 years by now (but I quit).',
          'She would have been studying for 3 hours (but she stopped).',
          'They would have been traveling for a month (but they came back early).'
        ],
        negative: [
          'I would not have been working there for 5 years by now.',
          'She would not have been studying for 3 hours.',
          'They would not have been traveling for a month.'
        ],
        interrogative: [
          'Would I have been working there for 5 years by now?',
          'Would she have been studying for 3 hours?',
          'Would they have been traveling for a month?'
        ]
      },
      timeSignals: ['for', 'by that time', 'if']
    },
    questions: [
      {
        id: 'pfpc-q1',
        tenseId: 'past-future-perfect-continuous',
        question: 'By 2025, she _____ _____ _____ _____ here for 10 years.',
        options: [
          { letter: 'A', text: 'would have been living', isCorrect: true },
          { letter: 'B', text: 'will have been living', isCorrect: false },
          { letter: 'C', text: 'had been living', isCorrect: false },
          { letter: 'D', text: 'would be living', isCorrect: false }
        ],
        explanation: 'Past Future Perfect Continuous: would + have + been + V-ing',
        difficulty: 'hard'
      }
    ]
  }
]

export const allAdvancedTenses = [
  ...simpleFuture,
  ...futureContinuous,
  ...futurePerfect,
  ...futurePerfectContinuous,
  ...simplePastFuture,
  ...pastFutureContinuous,
  ...pastFuturePerfect,
  ...pastFuturePerfectContinuous
]
