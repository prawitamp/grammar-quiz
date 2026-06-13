// Penjelasan tenses dalam Bahasa Indonesia untuk siswa SMP/SMA
export const tenseExplanations: Record<string, {
  genZExplain: string
  realWorldExample: string
  commonMistakes: string[]
  tips: string[]
  memoryTrick: string
}> = {
  'simple-present': {
    genZExplain: 'Simple Present itu kayak "mode default" dalam bahasa Inggris 🎯 Kamu pake tense ini buat ngomongin kebiasaan sehari-hari, fakta umum, atau hal-hal yang terjadi secara rutin. Gampangnya: ini tense-nya kegiatan yang kamu lakuin SETIAP HARI atau emang udah jadi KEBENARAN UMUM.',
    realWorldExample: 'Kamu: "I wake up at 5 AM every day" (kebiasaan) ATAU "The sun rises in the east" (fakta) - yang penting: ini terjadi berulang-ulang atau memang sudah jadi fakta.',
    commonMistakes: [
      'Lupa nambahin "s/es" untuk he/she/it - ingat: HE GOES, bukan HE GO',
      'Kebalik sama present continuous - "I eat rice" vs "I am eating rice" itu beda!',
      'Pake simple present buat hal yang SEDANG TERJADI sekarang - itu pake present continuous',
      'Lupa kalo di kalimat negatif dan tanya pake "do/does" - "She doesn\'t go" bukan "She not go"'
    ],
    tips: [
      'Kalo ragu, tanya: "Apakah ini terjadi setiap hari/selalu/biasanya?" → Simple Present',
      'Jangan lupa "s/es" untuk kata kerja dengan subject he, she, it',
      'Pake "do/does" untuk bikin kalimat negatif dan pertanyaan',
      'Time signals: every day, usually, always, sometimes'
    ],
    memoryTrick: '🔁 SIMPLE = RUTINITAS. Ini tense-nya "udah biasa"!'
  },
  'present-continuous': {
    genZExplain: 'Present Continuous itu kayak "kamera live streaming" kamu 📸 Kamu pake ini kalo ada sesuatu yang SEDANG TERJADI sekarang juga, pas lagi ngomong. Bukan kegiatan sehari-hari, tapi kegiatan yang happen right now!',
    realWorldExample: 'Kamu SEKARANG: "I am reading this message" (lagu baca chat ini sekarang) ATAU "She is streaming on TikTok" (dia lagi nge-stream sekarang). Lagi kejadian saat ini juga!',
    commonMistakes: [
      'Lupa pake "am/is/are" - harus pake to be!',
      'Lupa kasih -ing di akhir kata kerja - "she is go" itu SALAH, harusnya "she is going"',
      'Pake present continuous buat kebiasaan - itu pake simple present!',
      'Lupa kalo "am" cuma buat I, "is" buat he/she/it, "are" buat you/we/they'
    ],
    tips: [
      'Kalo ragu, tanya: "Apakah ini SEDANG terjadi sekarang?" → Present Continuous',
      'Rumus: am/is/are + verb-ing',
      'Kata kunci: now, at the moment, right now, currently',
      'Ingat: yang penting aksinya SEDANG berlangsung!'
    ],
    memoryTrick: '▶️ CONTINUOUS = SEDANG TERJADI. Ini tense-nya "real time"!'
  },
  'present-perfect': {
    genZExplain: 'Present Perfect itu kayak status "udah pernah" atau "udah selesai" di masa lalu tapi masih ngaruh ke sekarang ✅ Kamu pake ini kalo mau ngomongin sesuatu yang udah kamu lakuin (pengalaman) tapi ga disebutin kapan tepatnya.',
    realWorldExample: '"I have watched that drama" (udah nonton, dan itu penting karena sekarang kamu bisa ngobrol soal dramanya) ATAU "She has visited Jogja 3 times" (pengalaman, ga perlu sebut kapan tepatnya)',
    commonMistakes: [
      'Bingung sama simple past - "I have eaten" (ga bilang kapan) vs "I ate at 7 PM" (jelas kapan)',
      'Lupa ngubungin ke sekarang - aksinya udah selesai TAPI masih ada efeknya',
      'Salah bentuk verb - "I have go" SALAH, harusnya "I have gone"',
      'Lupa pake "have" atau "has" - have buat I/you/we/they, has buat he/she/it'
    ],
    tips: [
      'Kalo ragu: "Apakah ini PENGALAMAN sampe sekarang?" → Present Perfect',
      'Rumus: have/has + verb3 (past participle)',
      'Kata kunci: just, already, yet, ever, never, recently',
      'Biasanya ga nentuin kapan tepatnya kejadian itu terjadi'
    ],
    memoryTrick: '✔️ PRESENT PERFECT = UDAH PERNAH. Ini tense-nya "pengalaman hidup"!'
  },
  'present-perfect-continuous': {
    genZExplain: 'Ini kayak Present Perfect tapi lebih ngejelasin DURASI nya ⏳ Kamu pake ini kalo mau nunjukin bahwa sesuatu udah mulai dari dulu dan MASIH berlangsung sampe sekarang. Bedanya sama Present Perfect: ini nge-highlight "lama waktu" nya!',
    realWorldExample: '"I have been studying for 3 hours" (udah belajar 3 jam dan masih belajar) ATAU "She has been waiting since 2 PM" (nunggu dari jam 2 dan masih nunggu sekarang)',
    commonMistakes: [
      'Lupa pake "been" setelah have/has - "has studying" itu SALAH',
      'Bingung bedain dengan present perfect - PPC ngejelasin DURASI, PP ngejelasin HASIL',
      'Salah subject-verb: "have" buat I/you/we/they, "has" buat he/she/it',
      'Lupa kalo aksinya HARUS masih berlangsung sampe sekarang'
    ],
    tips: [
      'Kalo ragu: "Apakah ini DURASI yang masih berlanjut?" → Present Perfect Continuous',
      'Rumus: have/has + been + verb-ing',
      'Kata kunci: for (lama waktu), since (mulai kapan), all day, lately',
      'Fokusnya di "lama" aksi berlangsung, bukan hasilnya'
    ],
    memoryTrick: '⏱️ PERFECT CONTINUOUS = LAMA WAKTU. Ini tense-nya "udah berapa lama sih"!'
  },
  'simple-past': {
    genZExplain: 'Simple Past itu tense buat cerita masa lalu yang udah SELESAI total 🏁 Udah kelar, ga ada hubungannya sama sekarang. Kayak postingan IG story yang udah expired - udah lewat, ga bisa balik. Kamu pake ini buat nyeritain kejadian yang udah selesai di waktu tertentu.',
    realWorldExample: '"I ate fried rice for breakfast yesterday" (sarapan kemarin, udah selesai) ATAU "We went to Bandung last month" (udah pergi dan balik, ga lagi di Bandung sekarang)',
    commonMistakes: [
      'Pake simple past padahal harus present perfect - bedanya: kalo ada waktu spesifik → simple past!',
      'Lupa irregular verbs - "I go" jadi "I went", BUKAN "I goed"',
      'Salah pake "did" di kalimat negatif/tanya - "Did you go?" bukan "Went you?"',
      'Nambahin -ed ke irregular verbs - "I buyed" itu SALAH, harusnya "I bought"'
    ],
    tips: [
      'Kalo ragu: "Apakah ini kejadian yang sudah SELESAI di masa lalu?" → Simple Past',
      'Biasanya ada kata waktu: yesterday, last week, ...ago, in 2023',
      'Regular verbs: tambahin -ed. Irregular verbs: hapalin! (go→went, eat→ate, buy→bought)',
      'Pake "did" untuk bikin kalimat negatif dan tanya'
    ],
    memoryTrick: '📖 SIMPLE PAST = CERITA LAMA. Udah lewat, udah kelar!'
  },
  'past-continuous': {
    genZExplain: 'Past Continuous itu kayang "lagu asik" yang lagi diputer di masa lalu 🎵 Kamu pake ini buat nunjukin suatu aksi yang SEDANG berlangsung di masa lalu. Biasanya dipake bareng simple past buat nunjukin "sedang apa" saat kejadian lain terjadi.',
    realWorldExample: '"I was studying when you called" (lagu belajar, lo telpon, terus...) - kejadian "lagu belajar" itu yang jadi latar belakang. ATAU "She was sleeping at 10 PM last night" - jam 10 malem kemaren, dia lagi tidur.',
    commonMistakes: [
      'Lupa pake was/were - was buat I/he/she/it, were buat you/we/they',
      'Lupa kasih -ing di kata kerja - "she was sleep" SALAH',
      'Bingung kapan pake past continuous vs simple past - past continuous buat LATAR BELAKANG',
      'Pake past continuous buat aksi yang SELESAI - itu pake simple past!'
    ],
    tips: [
      'Kalo ragu: "Apakah ini LATAR BELAKANG di masa lalu?" → Past Continuous',
      'Rumus: was/were + verb-ing',
      'Sering bareng "when" (tiba-tiba) atau "while" (sementara)',
      'Biasanya ada interupsi dari simple past'
    ],
    memoryTrick: '🎬 PAST CONTINUOUS = LATAR BELAKANG MASA LALU. Lagi happen pas kejadian lain datang!'
  },
  'past-perfect': {
    genZExplain: 'Past Perfect itu kayak "flashback" dalam film 🎥 Kamu pake ini kalo ada DUA kejadian di masa lalu, dan kamu mau nunjukin kejadian mana yang terjadi LEBIH DULU. Yang terjadi pertama pake Past Perfect, yang kedua pake Simple Past.',
    realWorldExample: '"I had eaten when she arrived" - aku udah MAKAN DULU (past perfect), baru dia DATANG (simple past). Jadi makannya terjadi SEBELUM kedatangan dia.',
    commonMistakes: [
      'Pake past perfect padahal simple past udah cukup - past perfect cuma kalo perlu nunjukin urutan',
      'Lupa pake "had" - "I eaten" itu SALAH, harusnya "I had eaten"',
      'Salah bentuk verb - Verb3 harus dipake! "I had went" → "I had gone"',
      'Bingung bedain sama past perfect continuous'
    ],
    tips: [
      'Kalo ragu: "Apakah ada DUA kejadian di masa lalu dan perlu nunjukin urutan?" → Past Perfect',
      'Rumus: had + verb3 (past participle)',
      'Kata kunci: before, after, by the time, already',
      'Yang PAKAI Past Perfect = yang terjadi LEBIH DULU'
    ],
    memoryTrick: '⏪ PAST PERFECT = YANG LEBIH DULU. Kayak "sebelum itu, udah..."!'
  },
  'past-perfect-continuous': {
    genZExplain: 'Past Perfect Continuous itu kayang "udah berapa lama sih" di masa lalu ⏳ Ini versi masa lalu dari present perfect continuous. Dipake buat nunjukin DURASI suatu aksi sebelum aksi lain terjadi di masa lalu.',
    realWorldExample: '"I had been studying for 3 hours when she arrived" - aku udah BELAJAR SELAMA 3 JAM (past perfect continuous) sebelum dia DATANG (simple past). Fokusnya di DURASI belajarnya!',
    commonMistakes: [
      'Lupa pake "had been" - rumusnya had + been + V-ing',
      'Bingung bedain sama past perfect - PPC buat DURASI, PP buat HASIL',
      'Pake buat aksi singkat - PPC buat aksi yang berlangsung LAMA',
      'Lupa kalo ini aksi yang MASIH BERLANGSUNG di masa lalu'
    ],
    tips: [
      'Kalo ragu: "Apakah ini DURASI sebelum aksi lain di masa lalu?" → Past Perfect Continuous',
      'Rumus: had + been + verb-ing',
      'Kata kunci: for, since, before, by the time',
      'Past perfect continuous menunjukkan LAMA WAKTU, bukan hasil'
    ],
    memoryTrick: '⏱️ PAST PERFECT CONTINUOUS = "Udah berapa lama" di masa lalu. Fokus ke durasi!'
  },
  'simple-future': {
    genZExplain: 'Simple Future itu tense buat ngebahas masa depan 🔮 Pake "will" kalo kamu mau ngomongin sesuatu yang AKAN terjadi. Gampangnya: ini tense-nya "prediksi", "janji", "rencana spontan", atau "fakta masa depan".',
    realWorldExample: '"I will call you later" (janji) ATAU "It will rain tomorrow" (prediksi berdasarkan ramalan cuaca) ATAU "I will help you!" (tawaran spontan)',
    commonMistakes: [
      'Lupa kalo abis "will" pake VERB1 - "I will going" itu SALAH',
      'Bingung bedain sama "going to" - "will" buat spontan, "going to" buat udah direncanakan',
      'Pake "will" di kalimat if - seharusnya present tense di if clause',
      'Bentuk negatif: will not = won\'t'
    ],
    tips: [
      'Kalo ragu: "Apakah ini akan terjadi di masa depan?" → Simple Future',
      'Rumus: will + verb1 (base form)',
      'WILL = keputusan spontan / janji / prediksi',
      'BE GOING TO = rencana yang udah dipikirkan sebelumnya'
    ],
    memoryTrick: '🚀 SIMPLE FUTURE = "Nanti bakalan...". Ini tense-nya masa depan!'
  },
  'future-continuous': {
    genZExplain: 'Future Continuous itu kayak ngegambarin kegiatan yang LAGI KAMU LAKUIN di waktu tertentu di masa depan 🎯 Misal: besok jam 8 malem, kamu LAGI ngapain? Nah, itu pake future continuous!',
    realWorldExample: '"I will be flying to Bali at 8 PM tomorrow" - besok jam 8 malem, aku LAGI naik pesawat ke Bali. ATAU "This time next week, I will be lying on the beach" - minggu depan jam segini, aku LAGI rebahan di pantai.',
    commonMistakes: [
      'Lupa "will be" - rumusnya WILL + BE + V-ing',
      'Lupa -ing di kata kerja - "I will be go" itu SALAH',
      'Bingung bedain sama simple future - future continuous pake durasi/spesifik waktu'
    ],
    tips: [
      'Kalo ragu: "Apakah ini SEDANG berlangsung di waktu spesifik masa depan?" → Future Continuous',
      'Rumus: will + be + verb-ing',
      'Kata kunci: at this time tomorrow, by then, when you arrive',
      'Fokus ke AKTIVITAS yang sedang berlangsung di masa depan'
    ],
    memoryTrick: '🎬 FUTURE CONTINUOUS = "SEDANG... pas itu". Real-time di masa depan!'
  },
  'future-perfect': {
    genZExplain: 'Future Perfect itu kayak target yang UDAH KELAR sebelum deadline di masa depan 📅 Kamu pake tenses ini buat nunjukin bahwa sesuatu akan UDAH SELESAI dilakukan sebelum waktu tertentu di masa depan.',
    realWorldExample: '"I will have finished my thesis by next month" - bulan depan, skripsi aku UDAH SELESAI (target kelar sebelum bulan depan). ATAU "She will have graduated by 2026" - dia udah lulus SEBELUM tahun 2026.',
    commonMistakes: [
      'Lupa "will have" - rumusnya WILL + HAVE + V3',
      'Salah bentuk verb - harus pake verb3 (past participle)',
      'Bingung bedain sama future perfect continuous'
    ],
    tips: [
      'Kalo ragu: "Apakah ini AKAN SUDAH SELESAI di waktu tertentu?" → Future Perfect',
      'Rumus: will + have + verb3 (past participle)',
      'Kata kunci: by, by the time, before + waktu',
      'Yang penting target KELAR sebelum deadline'
    ],
    memoryTrick: '✅ FUTURE PERFECT = "Udah kelar sebelum..."! Kayak ngejar deadline!'
  },
  'future-perfect-continuous': {
    genZExplain: 'Future Perfect Continuous itu kombinasi: masa depan + durasi + masih berlangsung 🎯 Kamu pake ini buat nunjukin kalo sesuatu AKAN SUDAH BERLANGSUNG selama waktu tertentu di masa depan.',
    realWorldExample: '"By next month, I will have been working here for 2 years" - bulan depan, aku UDAH AKAN SELAMA 2 TAHUN kerja di sini (dari 2 tahun lalu sampe bulan depan).',
    commonMistakes: [
      'Lupa rumus kompleks: will + have + been + V-ing',
      'Lupa -ing di kata kerja',
      'Fokus ke HASIL bukan DURASI - ini tense buat DURASI'
    ],
    tips: [
      'Kalo ragu: "Apakah ini DURASI sampe waktu tertentu di masa depan?" → Future Perfect Cont.',
      'Rumus: will + have + been + verb-ing',
      'Pake "for" buat durasi, "by" buat deadline',
      'Ini yang paling kompleks dari semua tenses!'
    ],
    memoryTrick: '⏱️ FUTURE PERFECT CONT = "Udah berapa lama saat itu" di masa depan. Level expert!'
  },

  'simple-past-future': {
    genZExplain: 'Simple Past Future itu kayak "rencana yang gagal" di masa lalu 😅 Kamu pake ini buat nunjukin sesuatu yang "bakalan" terjadi di masa lalu, tapi ternyata ga jadi. Kayak: tadinya mau, tapi batal. Ini sering dipake buat kalimat pengandaian.',
    realWorldExample: '"I would come to the party, but I was sick" - tadinya aku MAU dateng ke pesta, tapi aku sakit (jadi batal). ATAU "She said she would call" - dia bilang dia AKAN nelpon (tapi belum pasti jadi).',
    commonMistakes: [
      'Lupa pake "would" bukan "will" - ini masa lalu, jadi would!',
      'Bingung bedain sama simple future - SF buat masa depan, SPF buat batal/ga jadi',
      'Pake would di present tense - would cuma dipake di konteks masa lalu atau conditional'
    ],
    tips: [
      'Kalo ragu: "Apakah ini RENCANA DULUAN yang ga jadi?" → Simple Past Future',
      'Rumus: would + verb1 (base form)',
      'Biasanya ada alasan kenapa batal atau ga jadi',
      'Would = will versi masa lalu'
    ],
    memoryTrick: '😅 PAST FUTURE = "Tadinya mau... tapi". Rencana yang gagal!'
  },
  'past-future-continuous': {
    genZExplain: 'Past Future Continuous itu kayak ngebayangin kegiatan yang LAGI KAMU LAKUIN di masa lalu dari sudut pandang masa depan 🤯 Ribet? Iya. Tapi intinya: kamu ngebayangin "lagu apa" di masa lalu, tapi dari kacamata masa depan. Biasanya dipake di kalimat pengandaian.',
    realWorldExample: '"I would be sleeping at that time" - aku LAGI TIDUR saat itu (tapi ternyata ga jadi tidur). ATAU "She said she would be working at 5 PM" - dia bilang dia LAGI KERJA jam 5 (tapi ternyata ga).',
    commonMistakes: [
      'Ini tenses kompleks - jangan dipake kalo ga perlu!',
      'Rumus: would + be + V-ing - jangan lupa "be" dan "ing"',
      'Bingung sama future continuous - PFC buat masa lalu yang batal, FC buat masa depan beneran'
    ],
    tips: [
      'Pake tenses ini dengan hati-hati - ini level advanced banget!',
      'Rumus: would + be + verb-ing',
      'Biasanya dipake di reported speech atau conditional'
    ],
    memoryTrick: '🤯 PAST FUTURE CONT = "Lagunya... tapi batal". Advanced level!'
  },
  'past-future-perfect': {
    genZExplain: 'Past Future Perfect itu kayak "udah bakal kelar" di masa lalu dari sudut pandang masa depan 🎯 Ini kompleks! Tapi intinya: kamu ngebayangin sesuatu yang SEHARUSNYA UDAH BERES di masa lalu, tapi ga kelar. Sering dipake buat penyesalan.',
    realWorldExample: '"I would have finished the project by Friday, but I got sick" - aku UDAH AKAN SELESAI proyeknya hari Jumat itu, tapi aku sakit (jadi ga kelar). Ini penyesalan!',
    commonMistakes: [
      'Rumus kompleks: would + have + V3 - jangan ada yang ketinggalan',
      'Salah bentuk verb - harus V3 (past participle)',
      'Pake ini di kalimat sederhana - tenses ini buat situasi yang kompleks aja'
    ],
    tips: [
      'Rumus: would + have + verb3 (past participle)',
      'Ini untuk nunjukin PENYESALAN atau harapan yang ga terwujud',
      'Biasanya ada "but..." yang nunjukin kenapa ga jadi'
    ],
    memoryTrick: '😢 PAST FUTURE PERFECT = "Seharusnya udah kelar, tapi..." Penyesalan!'
  },
  'past-future-perfect-continuous': {
    genZExplain: 'Past Future Perfect Continuous... ini yang PALING KOMPLEKS dari 16 tenses! 🏆 Gabungan masa lalu + masa depan + durasi + sudah selesai + masih berlangsung. Pusing? Wajar! Kamu pake ini buat nunjukin DURASI yang SEHARUSNYA udah berlangsung di masa lalu.',
    realWorldExample: '"I would have been working here for 5 years by 2024" - aku UDAH AKAN SELAMA 5 TAHUN kerja di sini pas tahun 2024 (tapi ternyata ga jadi / berubah rencana).',
    commonMistakes: [
      'Rumus paling panjang: would + have + been + V-ing - wajib hafal!',
      'Jangan pake kalo ga perlu - ini tenses paling jarang dipake',
      'Lupa -ing di kata kerja',
      'Lupa "been" setelah "have"'
    ],
    tips: [
      'Rumus: would + have + been + verb-ing (hafalkan urutannya!)',
      'Ini tenses paling langka - bahkan native speaker jarang pake',
      'Cukup paham struktur nya, ga harus bisa pake dengan lancar',
      'Tips: cukup kenali aja, praktis jarang dipake dalam percakapan'
    ],
    memoryTrick: '🏆 PAST FUTURE PERFECT CONT = Raja dari semua tenses. Kalau udah paham ini, kamu pro!'
  }
}
