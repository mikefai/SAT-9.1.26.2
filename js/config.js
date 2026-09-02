/**
 * SAT READING & WRITING SKILLS ACADEMY - Configuration & Constants
 * Fully offline-capable, zero external dependencies.
 */

const CONFIG = {
  APP_TITLE: "SAT Skills Academy",
  SUBTITLE: "Master the Metacognition Behind Digital SAT Reading & Writing",
  TARGET_EXAM: "Digital SAT Reading & Writing (Reading & Grammar Conventions)",
  STUDENT_LEVEL: "B1–B2 ESL & SAT Aspirants (Customized for Turkish Learners)",
  ESL_SUPPORT_DEFAULT: true,
  THEME_DEFAULT: "dark",
  STORAGE_KEY: "sat_reading_academy_v2",
  TIMER_DEFAULT_SECONDS: 90,
  MASTERY_THRESHOLDS: {
    MIN_INDEPENDENT_ACCURACY: 0.80, // 80% or higher
    MAX_AVERAGE_HINTS: 1.0,         // 1.0 hint or fewer per guided item
  },
  STATUS_LABELS: {
    NOT_STARTED: "Not Started",
    LEARNING: "Learning",
    PRACTICING: "Practicing",
    MASTERED: "Mastered"
  }
};

/**
 * The SAT Distractor Taxonomy (Trap Types)
 * Used across the entire curriculum to categorize and defeat incorrect answer choices.
 */
const TRAP_TAXONOMY = {
  "Too Extreme": {
    name: "Too Extreme",
    badgeClass: "trap-extreme",
    icon: "⚠️",
    description: "Uses absolute or exaggerated words (always, never, all, strictly, proves, impossible) that go far beyond the passage's qualified claims.",
    howToDefeat: "Look for strong qualifiers. If the text says 'some researchers suggest,' eliminate choices with 'unquestionably establishes' or 'every scientist.'"
  },
  "Half Right": {
    name: "Half Right",
    badgeClass: "trap-half-right",
    icon: "🌓",
    description: "Contains a true fact directly mentioned in the passage, but answers the wrong question or misidentifies the primary function/main idea.",
    howToDefeat: "Verify not just truth, but task relevance. Ask: 'Does this directly answer the specific question stem, or is it just a true background detail?'"
  },
  "Opposite": {
    name: "Opposite",
    badgeClass: "trap-opposite",
    icon: "🔄",
    description: "Reverses the author's stance, swaps cause and effect, or flips the polarity of the relationship (positive vs. negative).",
    howToDefeat: "Double-check the passage's pivot words (however, nonetheless, yet) to ensure you aren't picking the counter-argument that was just rejected."
  },
  "Out of Scope": {
    name: "Out of Scope",
    badgeClass: "trap-out-of-scope",
    icon: "🛸",
    description: "Introduces ideas, assumptions, or real-world facts that sound plausible but have zero direct textual evidence in the provided passage.",
    howToDefeat: "Treat the SAT as an open-book test. If you cannot point your finger directly at 3–4 words in the passage proving it, it is wrong."
  },
  "Wrong Meaning": {
    name: "Wrong Meaning",
    badgeClass: "trap-wrong-meaning",
    icon: "📖",
    description: "Relies on the most common dictionary definition of a word rather than the specific contextual, tone-aligned meaning required by the sentence.",
    howToDefeat: "Blank the target word before reading the choices. Predict your own simple synonym based on context clues, then match your prediction."
  },
  "Misused Evidence": {
    name: "Misused Evidence",
    badgeClass: "trap-misused-evidence",
    icon: "📊",
    description: "Accurately quotes numbers, data, or lines from the text/table, but links them to the wrong claim or draws a false conclusion from the data.",
    howToDefeat: "Always circle the exact hypothesis or claim in the question stem first. Check if the data point genuinely supports that specific claim."
  }
};

/**
 * Reading Module Registry & Metadata
 */
const MODULES_CONFIG = [
  {
    id: "MOD-0",
    slug: "foundation",
    number: 0,
    title: "Reading Like the SAT Wants",
    domain: "Foundations",
    domainTag: "Core Metacognition",
    estimatedMinutes: 20,
    icon: "🧠",
    subtitle: "Active reading, pivot words, extreme language traps & claim-evidence architecture",
    methodName: "The ACTIVE Framework",
    stagesCount: 6
  },
  {
    id: "MOD-1",
    slug: "words-in-context",
    number: 1,
    title: "Words in Context",
    domain: "Craft & Structure",
    domainTag: "Craft & Structure",
    estimatedMinutes: 25,
    icon: "📚",
    subtitle: "Contextual vocabulary, tone matching, secondary meanings & blanking strategies",
    methodName: "The BLANK Method",
    stagesCount: 6
  },
  {
    id: "MOD-2",
    slug: "text-structure-and-purpose",
    number: 2,
    title: "Text Structure & Purpose",
    domain: "Craft & Structure",
    domainTag: "Craft & Structure",
    estimatedMinutes: 25,
    icon: "🏗️",
    subtitle: "Rhetorical roles, paragraph function, and overall passage architecture",
    methodName: "The Blueprint Technique",
    stagesCount: 6
  },
  {
    id: "MOD-3",
    slug: "cross-text-connections",
    number: 3,
    title: "Cross-Text Connections",
    domain: "Craft & Structure",
    domainTag: "Craft & Structure",
    estimatedMinutes: 30,
    icon: "⚖️",
    subtitle: "Synthesizing paired perspectives, tracking author agreements and disagreements",
    methodName: "The Venn Bridge Protocol",
    stagesCount: 6
  },
  {
    id: "MOD-4",
    slug: "central-ideas-and-details",
    number: 4,
    title: "Central Ideas & Details",
    domain: "Information & Ideas",
    domainTag: "Information & Ideas",
    estimatedMinutes: 25,
    icon: "🎯",
    subtitle: "Isolating the primary thesis, filtering secondary illustrations, and strict textual fidelity",
    methodName: "The Umbrella Test",
    stagesCount: 6
  },
  {
    id: "MOD-5",
    slug: "command-of-evidence",
    number: 5,
    title: "Command of Evidence",
    domain: "Information & Ideas",
    domainTag: "Information & Ideas",
    estimatedMinutes: 30,
    icon: "📈",
    subtitle: "Matching textual proofs and quantitative graphs/tables to specific claims",
    methodName: "The Anchor-Match Protocol",
    stagesCount: 6
  },
  {
    id: "MOD-6",
    slug: "inferences",
    number: 6,
    title: "Inferences",
    domain: "Information & Ideas",
    domainTag: "Information & Ideas",
    estimatedMinutes: 30,
    icon: "🧩",
    subtitle: "Drawing logically required, inescapable conclusions with zero speculation",
    methodName: "The Must-Be-True Rule",
    stagesCount: 6
  }
];

/**
 * Standard keyboard shortcuts supported across the application
 */
const KEYBOARD_SHORTCUTS = {
  "1": "Select Option A / Stage 1",
  "2": "Select Option B / Stage 2",
  "3": "Select Option C / Stage 3",
  "4": "Select Option D / Stage 4",
  "a": "Select Option A",
  "b": "Select Option B",
  "c": "Select Option C",
  "d": "Select Option D",
  "h": "Request next hint (Guided Practice)",
  "m": "Open / Close Method Card",
  "t": "Open Turkish SAT Vocabulary & Strategy Guide (🇹🇷)",
  "shift+t": "Toggle Teacher Mode",
  "g": "Go to Grammar Academy",
  "v": "Go to Daily Vocab & Drills",
  "e": "Go to Error Log (Hata Defteri)",
  "n": "Open Student Scratchpad / Notes Drawer",
  "Enter": "Next Step / Submit Answer",
  "Escape": "Close Modal / Drawer"
};

/**
 * =========================================================================
 * DIGITAL SAT GRAMMAR ACADEMY CONFIGURATION
 * Standard English Conventions & Expression of Ideas
 * =========================================================================
 */
const GRAMMAR_MODULES_CONFIG = [
  {
    id: "GRAM-1",
    slug: "sentence-boundaries",
    number: 1,
    title: "Boundaries & Run-ons",
    turkishTitle: "Cümle Sınırları & Noktalama Hataları",
    domain: "Standard English Conventions",
    domainTag: "Sentence Structure",
    icon: "🧱",
    subtitle: "Comma splices, fused sentences, coordinating conjunctions (FANBOYS), and subordinating clauses",
    estimatedMinutes: 20
  },
  {
    id: "GRAM-2",
    slug: "colons-semicolons-dashes",
    number: 2,
    title: "Semicolons, Colons & Dashes",
    turkishTitle: "Noktalı Virgül, İki Nokta & Tire Kuralları",
    domain: "Standard English Conventions",
    domainTag: "Punctuation Precision",
    icon: "⚡",
    subtitle: "Independent clause pairing, explanatory colons, and non-essential appositive dashes",
    estimatedMinutes: 20
  },
  {
    id: "GRAM-3",
    slug: "subject-verb-agreement",
    number: 3,
    title: "Subject-Verb & Pronoun Agreement",
    turkishTitle: "Özne-Yüklem & Zamir Uyumu",
    domain: "Standard English Conventions",
    domainTag: "Agreement & Number",
    icon: "⚖️",
    subtitle: "Eliminating prepositional phrase distractors, collective nouns, and pronoun ambiguity",
    estimatedMinutes: 25
  },
  {
    id: "GRAM-4",
    slug: "modifiers-participles",
    number: 4,
    title: "Modifiers & Dangling Participles",
    turkishTitle: "Sıfat/Zarf Tümceleri & Düşük Cümleler",
    domain: "Standard English Conventions",
    domainTag: "Syntax & Placement",
    icon: "🎯",
    subtitle: "Introductory participial phrases, misplaced adjectives, and logical subject attachment",
    estimatedMinutes: 20
  },
  {
    id: "GRAM-5",
    slug: "rhetorical-transitions",
    number: 5,
    title: "Rhetorical Transitions",
    turkishTitle: "Bağlaçlar & Mantıksal Geçişler",
    domain: "Expression of Ideas",
    domainTag: "Transitions",
    icon: "🔄",
    subtitle: "Contrast, causation, elaboration, and addition transitions in paragraph flow",
    estimatedMinutes: 20
  }
];

/**
 * =========================================================================
 * 30-DAY DAILY VOCABULARY & SENTENCE COMPLETION DRILLS
 * High-Yield Digital SAT Words with Turkish Scaffold & Mnemonics
 * =========================================================================
 */
const DAILY_VOCAB_SETS = [
  {
    day: 1,
    title: "Day 1: Tone & Severity Modulation",
    words: [
      { word: "Alleviate", pos: "verb", en: "To make suffering or a problem less severe", tr: "Hafifletmek, dindirmek", ex: "The new policy aimed to alleviate economic strain on working families.", mnemonic: "Alleviate -> 'Ali ve Ateş' (Ali yangına su döküp ateşi hafifletti)." },
      { word: "Compound", pos: "verb", en: "To make something bad worse; intensify or add to", tr: "Daha da kötüleştirmek, katlamak", ex: "The severe drought compounded the agricultural crisis.", mnemonic: "Compound -> bileşik faiz gibi sorunları katlamak." },
      { word: "Mitigate", pos: "verb", en: "To make less severe, harmful, or painful", tr: "Yatıştırmak, etkisini azaltmak", ex: "Urban planners planted trees to mitigate extreme heat island effects.", mnemonic: "Mitigate -> 'Miti (efsaneyi) gate (kapıda)' durdurup zararı azalttık." },
      { word: "Exacerbate", pos: "verb", en: "To make a problem, bad situation, or negative feeling worse", tr: "Alevlendirmek, şiddetlendirmek", ex: "Cutting public transit funding will only exacerbate traffic congestion.", mnemonic: "Exacerbate -> 'Extra acerbic' (aşırı asidik/acı hale getirmek)." }
    ],
    quiz: {
      sentence: "Although city officials hoped the new bus lanes would _______ traffic congestion, ongoing road construction only served to _______ the gridlock.",
      options: ["A) mitigate ... compound", "B) exacerbate ... alleviate", "C) overlook ... substantiate", "D) qualify ... scrutinize"],
      answer: "A",
      explanation: "İlk boşluk olumlu bir azaltma fiili ('mitigate' = hafifletmek) gerektirir. 'Although' zıtlık bağlacından sonraki ikinci boşluk ise durumu daha da kötüleştiren bir eylem ('compound' = katlamak/kötüleştirmek) gerektirir."
    }
  },
  {
    day: 2,
    title: "Day 2: Scientific Evidence & Claims",
    words: [
      { word: "Qualify", pos: "verb (SAT special)", en: "To limit, modify, or restrict the scope of a claim", tr: "Sınırlandırmak, kayıt/şart koymak", ex: "The biologist qualified her hypothesis by noting that the results applied only to temperate climates.", mnemonic: "Qualify SAT'de 'diplomalı olmak' değil, iddiaya sınır koymaktır." },
      { word: "Substantiate", pos: "verb", en: "To provide evidence to support or prove the truth of something", tr: "Somut kanıtlarla doğrulamak", ex: "The archaeologist excavated further layers to substantiate her dating of the settlement.", mnemonic: "Substantiate -> 'Substance' (madde, somut delil) koymak." },
      { word: "Corroborate", pos: "verb", en: "To confirm or give support to a statement, theory, or finding", tr: "Teyit etmek, doğrulamak", ex: "Satellite imagery corroborated the eyewitness reports of glacial retreat.", mnemonic: "Corroborate -> 'Co-robot' (birlikte doğrulayan sistem)." },
      { word: "Undermine", pos: "verb", en: "To lessen the effectiveness, power, or validity of something", tr: "Baltalamak, temelini zayıflatmak", ex: "New geological data completely undermined the previous continental drift timeline.", mnemonic: "Under-mine -> altını kazıp temeli çökerterek zayıflatmak." }
    ],
    quiz: {
      sentence: "Recent isotopic measurements failed to _______ the long-held volcanic winter theory, instead providing data that significantly _______ its core premises.",
      options: ["A) undermine ... corroborated", "B) substantiate ... undermined", "C) fabricate ... augmented", "D) articulate ... championed"],
      answer: "B",
      explanation: "'Failed to' olumsuz ifadesinden sonra teoriyi doğrulayacak bir fiil ('substantiate') gerekir. 'Instead' zıtlık bildirdiği için ikinci kısım teoriyi zayıflatan ('undermined') olmalıdır."
    }
  },
  {
    day: 3,
    title: "Day 3: Clarity, Ambiguity & Intellect",
    words: [
      { word: "Lucid", pos: "adj", en: "Expressed clearly; easy to understand; bright", tr: "Açık, berrak, anlaşılır", ex: "Her lucid explanation of quantum entanglement made the concept accessible to beginners.", mnemonic: "Lucid -> 'Lüks ışık' gibi pırıl pırıl ve aydınlık." },
      { word: "Equivocal", pos: "adj", en: "Open to more than one interpretation; ambiguous; uncertain", tr: "Muğlak, iki anlama gelebilen, belirsiz", ex: "The candidate gave an equivocal response to questions about the proposed tax increase.", mnemonic: "Equi (eşit) + vocal (ses): iki farklı tarafa da çekilebilen ses." },
      { word: "Unflappable", pos: "adj", en: "Having or showing calmness in a crisis; calm and unperturbed", tr: "Soğukkanlı, sarsılmaz", ex: "Even when the flight instruments malfunctioned, the pilot remained unflappable.", mnemonic: "Flap (kanat çırpmak, telaşlanmak) yapmayan -> sakin." },
      { word: "Indefatigable", pos: "adj", en: "Persisting tirelessly without fatigue", tr: "Yorulmak bilmez, azimli", ex: "The botanist’s indefatigable field work in the Amazon documented over 500 new species.", mnemonic: "In- (olumsuz) + fatigue (yorgunluk) -> hiç yorulmayan." }
    ],
    quiz: {
      sentence: "Unlike her predecessor whose speeches were deliberately _______ and evasive, the new director presented a _______ roadmap for the company's restructuring.",
      options: ["A) equivocal ... lucid", "B) lucid ... equivocal", "C) dogmatic ... tenuous", "D) candid ... obsolete"],
      answer: "A",
      explanation: "'Unlike' karşılaştırması: İlk kısım 'evasive' (kaçamak) ile uyumlu 'equivocal' (muğlak) gerektirirken, ikinci kısım net ve açık olan 'lucid' kelimesini gerektirir."
    }
  },
  {
    day: 4,
    title: "Day 4: Magnitude, Time & Innovation",
    words: [
      { word: "Augment", pos: "verb", en: "To make something greater by adding to it; increase", tr: "Artırmak, büyütmek, takviye etmek", ex: "The museum augmented its collection through a generous donation of Renaissance paintings.", mnemonic: "Augment -> 'Augustus' imparatorluğu büyüterek genişletti." },
      { word: "Curtail", pos: "verb", en: "To reduce in extent or quantity; impose a restriction on", tr: "Kısmak, kısıtlamak, yarıda kesmek", ex: "Budget constraints forced the university to curtail several study abroad programs.", mnemonic: "Curtail -> 'Curtain' (perdeyi erken kapatıp kısmak)." },
      { word: "Novel", pos: "adj (SAT special)", en: "New and not resembling something formerly known or used", tr: "Yepyeni, özgün, orijinal", ex: "The team designed a novel algorithmic architecture that reduced processing latency by half.", mnemonic: "Novel sıfat olarak 'roman' değil, 'yepyeni ve özgün' demektir." },
      { word: "Obsolete", pos: "adj", en: "No longer produced or used; out of date", tr: "Kullanımdan kalkmış, demode", ex: "Advances in digital photography quickly rendered chemical darkrooms obsolete.", mnemonic: "Obsolete -> 'O fosil oldu' (artık kullanılmıyor)." }
    ],
    quiz: {
      sentence: "Rather than relying on _______ legacy techniques, the engineering firm developed a _______ filtration method that significantly reduced industrial water waste.",
      options: ["A) obsolete ... novel", "B) novel ... obsolete", "C) pervasive ... tenuous", "D) candid ... dogmatic"],
      answer: "A",
      explanation: "'Legacy' (eski/miras) teknikler 'obsolete' (kullanımdan kalkmış) iken, geliştirilen yeni yöntem 'novel' (özgün/yeni) olmalıdır."
    }
  },
  {
    day: 5,
    title: "Day 5: Scientific Inquiry & Scrutiny",
    words: [
      { word: "Scrutinize", pos: "verb", en: "To examine or inspect closely and thoroughly", tr: "Didik didik incelemek, kılı kırk yarmak", ex: "Peer reviewers scrutinized the clinical trial data for statistical anomalies.", mnemonic: "Scrutinize -> 'Screw' gibi vidalayıp en ince vidasına kadar bakmak." },
      { word: "Speculative", pos: "adj", en: "Engaged in, expressing, or based on conjecture rather than empirical knowledge", tr: "Varsayımsal, ampirik kanıta dayanmayan", ex: "Without fossil evidence, any claim about the sauropod's vocalizations remains purely speculative.", mnemonic: "Speculative -> sadece tahmin ve kurgu içeren." },
      { word: "Elucidate", pos: "verb", en: "To make something clear; explain", tr: "Aydınlatmak, izah etmek", ex: "The lecture elucidated the biochemical mechanism underlying cellular respiration.", mnemonic: "Elucidate -> 'Lucid' (aydınlık/net) hale getirmek." },
      { word: "Disparate", pos: "adj", en: "Essentially different in kind; not allowing comparison", tr: "Tamamen farklı, apayrı, bağdaşmaz", ex: "The anthology brought together disparate essays ranging from medieval history to modern sociology.", mnemonic: "Disparate -> 'Dis-parallel' (asla paralel ve benzer olmayan)." }
    ],
    quiz: {
      sentence: "Until the research team can obtain physical core samples, their hypothesis about deep-mantle convection remains _______ and cannot yet be _______ as fact.",
      options: ["A) speculative ... substantiated", "B) substantiated ... scrutinized", "C) pervasive ... undermined", "D) pragmatic ... augmented"],
      answer: "A",
      explanation: "Fiziksel numune alınamadığı için hipotez 'speculative' (tahmini/varsayımsal) kalır ve gerçek olarak 'substantiated' (kanıtlanamaz)."
    }
  },
  {
    day: 6,
    title: "Day 6: Argumentation, Stance & Conviction",
    words: [
      { word: "Champion", pos: "verb (SAT special)", en: "To vigorously support or defend a cause or person", tr: "Savunmak, öncülüğünü yapmak", ex: "The senator championed environmental protections throughout her long legislative career.", mnemonic: "Champion fiil olunca 'şampiyon olmak' değil, davayı sonuna kadar savunmaktır." },
      { word: "Repudiate", pos: "verb", en: "To refuse to accept or be associated with; deny the truth or validity of", tr: "Reddetmek, tanımamak, inkar etmek", ex: "The philosopher later repudiated his early writings on determinism.", mnemonic: "Repudiate -> 'Re-put' (geri itip reddetmek)." },
      { word: "Dogmatic", pos: "adj", en: "Inclined to lay down principles as incontrovertibly true, without evidence or debate", tr: "Bağnaz, dogmatik, tartışmasız dayatmacı", ex: "Her dogmatic approach to policy prevented any fruitful compromise with opposing parties.", mnemonic: "Dogmatic -> dogmalara körü körüne sarılan." },
      { word: "Candid", pos: "adj", en: "Truthful and straightforward; frank", tr: "İçten, dürüst, dobra", ex: "In a rare candid interview, the CEO acknowledged the company's product design flaws.", mnemonic: "Candid -> 'Candle' (mumu yakıp her şeyi dosdoğru gösteren)." }
    ],
    quiz: {
      sentence: "While public relations representatives issued carefully staged statements, the lead investigator offered a _______ assessment that explicitly _______ the contractor's safety record.",
      options: ["A) candid ... repudiated", "B) dogmatic ... championed", "C) speculative ... alleviated", "D) plastic ... mitigated"],
      answer: "A",
      explanation: "Halkla ilişkilerin yapmacık açıklamalarına zıt olarak müfettiş dobra ('candid') bir değerlendirme sunmuş ve şirketin güvenlik kaydını reddetmiştir ('repudiated')."
    }
  },
  {
    day: 7,
    title: "Day 7: Precision, Caution & Skepticism",
    words: [
      { word: "Fastidious", pos: "adj", en: "Very attentive to and concerned about accuracy and detail", tr: "Aşırı titiz, kılı kırk yaran", ex: "The restorer was fastidious in matching the exact pigment ratios of the 17th-century fresco.", mnemonic: "Fastidious -> 'Fasulyeyi tek tek ayıran titiz aşçı'." },
      { word: "Tenuous", pos: "adj", en: "Very weak or slight; insubstantial", tr: "Zayıf, iğreti, pamuk ipliğine bağlı", ex: "The statistical correlation between the two variables was tenuous at best.", mnemonic: "Tenuous -> 'Tenis ipi gibi incecik ve zayıf'." },
      { word: "Plausible", pos: "adj", en: "Seeming reasonable or probable", tr: "Akla yatkın, makul, olası", ex: "Her explanation for the missing artifacts was completely plausible.", mnemonic: "Plausible -> 'Alkışlanabilir' (applause), yani mantığa uygun." },
      { word: "Incongruous", pos: "adj", en: "Not in harmony or keeping with the surroundings or other aspects of something", tr: "Uyumsuz, yersiz, abes", ex: "A modern steel sculpture looked incongruous in the quiet Renaissance courtyard.", mnemonic: "In- (olumsuz) + congratulate (uyumlu olmak) -> uyumsuz." }
    ],
    quiz: {
      sentence: "Given that the archival evidence linking the two Renaissance painters is _______, scholars consider claims of direct collaboration to be highly _______.",
      options: ["A) tenuous ... dubious", "B) fastidious ... plausible", "C) pervasive ... lucid", "D) concrete ... unassailable"],
      answer: "A",
      explanation: "Arşiv kanıtları 'tenuous' (zayıf) olduğu için, doğrudan işbirliği iddiaları da 'dubious' (şüpheli) görülür."
    }
  },
  {
    day: 8,
    title: "Day 8: Change, Adaptability & Resilience",
    words: [
      { word: "Plastic", pos: "adj (SAT special)", en: "Easily shaped or molded; adaptable to change", tr: "Şekil alabilen, esnek, uyum sağlayan", ex: "Brain development in early childhood is remarkably plastic.", mnemonic: "Plastic SAT'de pet şişe değil, 'esnek ve değişebilir' (neuroplasticity) demektir." },
      { word: "Immutable", pos: "adj", en: "Unchanging over time or unable to be changed", tr: "Değişmez, sabit", ex: "Newtonian physicists once viewed time as an immutable absolute.", mnemonic: "Im- (olumsuz) + mutate (mutasyon/değişim) -> değişmeyen." },
      { word: "Malleable", pos: "adj", en: "Able to be hammered or pressed permanently out of shape; easily influenced", tr: "Dövülüp şekil verilebilir; kolay yönlendirilen", ex: "Gold is one of the most malleable metals known to science.", mnemonic: "Malleable -> 'Mallet' (ahşap çekiçle dövülüp bükülen)." },
      { word: "Resilient", pos: "adj", en: "Able to withstand or recover quickly from difficult conditions", tr: "Dirençli, kendini çabuk toparlayan", ex: "Mangrove ecosystems are remarkably resilient against severe coastal storms.", mnemonic: "Resilient -> 'Re-silent' (fırtınadan sonra hemen toparlanıp sükunete kavuşan)." }
    ],
    quiz: {
      sentence: "Contrary to early theories that viewed cortical architecture as _______ once adulthood is reached, modern neurobiology reveals neural circuits to be exceptionally _______.",
      options: ["A) immutable ... plastic", "B) plastic ... immutable", "C) resilient ... tenuous", "D) obsolete ... dogmatic"],
      answer: "A",
      explanation: "'Contrary to' ifadesi: Yetişkinlikte beynin 'immutable' (değişmez) olduğu inancına zıt olarak beynin 'plastic' (esnek ve şekil alabilir) olduğu ortaya çıkmıştır."
    }
  },
  {
    day: 9,
    title: "Day 9: Rhetoric, Persuasion & Stance",
    words: [
      { word: "Polemical", pos: "adj", en: "Relating to or involving strongly critical, controversial writing or speech", tr: "Kavgacı, tartışmalı, sert polemik içeren", ex: "The essay was a polemical attack on contemporary architectural trends.", mnemonic: "Polemical -> 'Polemik' yaratan sert üslup." },
      { word: "Dispassionate", pos: "adj", en: "Not influenced by strong emotion, and so able to be rational and impartial", tr: "Tarafsız, duygulardan arınmış, nesnel", ex: "A judge must maintain a dispassionate evaluation of testimony.", mnemonic: "Dis- (yoksun) + passion (duygu/tutku) -> tamamen nesnel." },
      { word: "Partisan", pos: "adj", en: "Prejudiced in favor of a particular cause or party", tr: "Taraf tutan, militanca taraftar", ex: "Partisan newspapers distorted the economic statistics to favor their political candidates.", mnemonic: "Partisan -> bir partinin fanatik savunucusu." },
      { word: "Pragmatic", pos: "adj", en: "Dealing with things sensibly and realistically in a way that is based on practical conditions", tr: "Faydacı, pratik şartlara göre hareket eden", ex: "The mayor took a pragmatic approach to zoning, balancing conservation with housing needs.", mnemonic: "Pragmatic -> 'Pratik' faydaya odaklanan." }
    ],
    quiz: {
      sentence: "Rather than adopting a _______ tone that alienates ideological opponents, the mediator delivered a _______ summary that focused exclusively on verifiable facts.",
      options: ["A) polemical ... dispassionate", "B) dispassionate ... polemical", "C) pragmatic ... partisan", "D) candid ... equivocal"],
      answer: "A",
      explanation: "Rakipleri uzaklaştıran 'polemical' (kavgacı) ton yerine sadece doğrulanabilir gerçeklere odaklanan 'dispassionate' (tarafsız) bir özet sunulmuştur."
    }
  },
  {
    day: 10,
    title: "Day 10: Scope, Breadth & Ubiquity",
    words: [
      { word: "Pervasive", pos: "adj", en: "Spreading widely throughout an area or a group of people", tr: "Her yere sinen, yaygın", ex: "Microplastics have become a pervasive contaminant in marine habitats worldwide.", mnemonic: "Pervasive -> 'Pervane gibi her tarafa dağılan'." },
      { word: "Ubiquitous", pos: "adj", en: "Present, appearing, or found everywhere", tr: "Her yerde hazır ve nazır, çok yaygın", ex: "Smartphones have become ubiquitous across all demographics.", mnemonic: "Ubiquitous -> 'U-bi-kutu' (her kutuda, her yerde bulunan)." },
      { word: "Circumscribed", pos: "adj", en: "Restricted within limits; confined", tr: "Sınırlandırılmış, dar bir çerçeveye hapsedilmiş", ex: "In the 19th century, women’s economic roles were strictly circumscribed by law.", mnemonic: "Circum- (daire) + scribe (çizmek) -> etrafına daire çizilip sınırlandırılmış." },
      { word: "Comprehensive", pos: "adj", en: "Complete; including all or nearly all elements or aspects of something", tr: "Kapsamlı, etraflı", ex: "The climatologist published a comprehensive assessment of Arctic sea ice dynamics.", mnemonic: "Comprehensive -> 'Comprehend' (her şeyi içeren ve kapsayan)." }
    ],
    quiz: {
      sentence: "Although access to clean water was once _______ to major metropolitan centers, recent infrastructure initiatives have made potable water nearly _______ across the rural territory.",
      options: ["A) circumscribed ... ubiquitous", "B) ubiquitous ... circumscribed", "C) pervasive ... tenuous", "D) novel ... obsolete"],
      answer: "A",
      explanation: "Eskiden sadece büyük şehirlere 'circumscribed' (sınırlandırılmış) iken, yeni projelerle kırsalda bile 'ubiquitous' (her yerde bulunur) hale gelmiştir."
    }
  }
];

/**
 * =========================================================================
 * TURKISH SAT VOCABULARY & STRATEGY VAULT
 * 150+ High-Frequency SAT Words, 25+ False Friends, Transitions & Stem Decoders
 * =========================================================================
 */
const TURKISH_SAT_VOCAB_VAULT = {
  top100Vocab: [
    { word: "Ambivalent", pos: "adj", tr: "İkircikli, çelişik duygular besleyen", en: "Having mixed feelings or contradictory ideas", satTip: "Bir konuda hem olumlu hem olumsuz yönleri aynı anda görmektir." },
    { word: "Alleviate", pos: "verb", tr: "Hafifletmek, acıyı azaltmak", en: "Make (suffering, deficiency, or a problem) less severe", satTip: "Zararın veya acının şiddetini düşürür." },
    { word: "Arbitrary", pos: "adj", tr: "Keyfi, mantıksal bir kurala dayanmayan", en: "Based on random choice or personal whim, rather than any reason", satTip: "Bilimsel olmayan, rastgele seçilmiş kriterler için kullanılır." },
    { word: "Augment", pos: "verb", tr: "Artırmak, büyütmek, takviye etmek", en: "Make (something) greater by adding to it; increase", satTip: "Bir koleksiyonu veya veriyi genişletmek." },
    { word: "Bolster", pos: "verb", tr: "Desteklemek, güçlendirmek", en: "Support or strengthen; prop up", satTip: "Command of Evidence sorularında 'hipotezi güçlendirmek' anlamında çıkar." },
    { word: "Candid", pos: "adj", tr: "Samimi, içten, dobra", en: "Truthful and straightforward; frank", satTip: "Yazarın veya karakterin maskesiz, dürüst tavrını niteler." },
    { word: "Circumscribe", pos: "verb", tr: "Sınırlandırmak, çerçevesini daraltmak", en: "Restrict (something) within limits", satTip: "Yetkinin veya alanın sınırlarını daraltmak." },
    { word: "Compromise", pos: "verb (ikincil)", tr: "Tehlikeye atmak, zedelemek", en: "To endanger or weaken (academic secondary meaning)", satTip: "🚨 'Uzlaşmak' değil, bağışıklığı veya güvenliği riske atmaktır." },
    { word: "Concede", pos: "verb", tr: "İstemeyerek de olsa hak vermek, teslim etmek", en: "Admit that something is true or valid after first denying or resisting it", satTip: "Zıtlık paragraflarında karşı tarafın doğru yönünü kabul etmek." },
    { word: "Corroborate", pos: "verb", tr: "Teyit etmek, doğrulamak", en: "Confirm or give support to (a statement, theory, or finding)", satTip: "Bağımsız bir araştırmacının ilk bulguyu kanıtlaması." },
    { word: "Curtail", pos: "verb", tr: "Kısmak, kısıtlamak, azaltmak", en: "Reduce in extent or quantity; impose a restriction on", satTip: "Bütçe veya harcama kısıtlamalarında gelir." },
    { word: "Disinterested", pos: "adj", tr: "Tarafsız, kişisel çıkarı olmayan", en: "Not influenced by considerations of personal advantage; impartial", satTip: "🚨 'İlgisiz' (uninterested) değil, 'tarafsız ve adil' demektir!" },
    { word: "Disparate", pos: "adj", tr: "Tamamen farklı, bağdaşmaz", en: "Essentially different in kind; not allowing comparison", satTip: "Birbiriyle alakası olmayan iki veri kaynağı." },
    { word: "Dogmatic", pos: "adj", tr: "Bağnaz, tartışmasız dayatmacı", en: "Inclined to lay down principles as incontrovertibly true", satTip: "Kanıt olmaksızın kendi fikrini mutlak gören yaklaşım." },
    { word: "Elucidate", pos: "verb", tr: "Aydınlatmak, anlaşılır kılmak", en: "Make (something) clear; explain", satTip: "Karmaşık bir mekanizmayı izah etmek." },
    { word: "Equivocal", pos: "adj", tr: "Muğlak, iki tarafa çekilebilir, belirsiz", en: "Open to more than one interpretation; ambiguous", satTip: "Net olmayan politikacı demeçleri için gelir." },
    { word: "Exacerbate", pos: "verb", tr: "Alevlendirmek, daha da kötüleştirmek", en: "Make (a problem, bad situation, or negative feeling) worse", satTip: "Yangına körükle gitmek gibi krizi büyütmek." },
    { word: "Fastidious", pos: "adj", tr: "Aşırı titiz, kılı kırk yaran", en: "Very attentive to and concerned about accuracy and detail", satTip: "Detaylara aşırı özen gösteren bilim insanları." },
    { word: "Formidable", pos: "adj", tr: "Korku ve saygı uyandıran, çetin, aşılması zor", en: "Inspiring fear or respect through being impressively large, powerful, or intense", satTip: "Zorlu bir engel veya güçlü bir rakip." },
    { word: "Immutable", pos: "adj", tr: "Değişmez, ebedi sabit", en: "Unchanging over time or unable to be changed", satTip: "Fizik kanunlarının evrenselliği için kullanılır." },
    { word: "Incongruous", pos: "adj", tr: "Uyumsuz, ortama yakışmayan", en: "Not in harmony or keeping with the surroundings", satTip: "Beklenmeyen, tuhaf duran ögeler." },
    { word: "Indefatigable", pos: "adj", tr: "Yorulmak bilmez, yılmaz", en: "Persisting tirelessly", satTip: "Azimle çalışan araştırmacılar." },
    { word: "Lucid", pos: "adj", tr: "Açık, net, kolay anlaşılır; berrak", en: "Expressed clearly; easy to understand", satTip: "Yazarın üslubunu veya açıklamalarını niteler." },
    { word: "Malleable", pos: "adj", tr: "Şekillendirilebilir, esnek", en: "Able to be hammered or pressed permanently out of shape", satTip: "Kolay yönlendirilen zihinler veya metaller." },
    { word: "Mitigate", pos: "verb", tr: "Hafifletmek, etkisini azaltmak, yatıştırmak", en: "Make less severe, serious, or painful", satTip: "Zararlı etkilerin azaltılması bağlamında gelir." },
    { word: "Novel", pos: "adj (ikincil)", tr: "Özgün, yepyeni, daha önce görülmemiş", en: "New and not resembling something formerly known", satTip: "🚨 'Roman' değil, 'orijinal/yeni keşfedilmiş' demektir." },
    { word: "Pervasive", pos: "adj", tr: "Her yere yayılan, sinen, yaygın", en: "Spreading widely throughout an area or group", satTip: "Kültürel bir inancın veya etkinin yaygınlığını belirtir." },
    { word: "Plastic", pos: "adj (ikincil)", tr: "Esnek, değişime ve şekil almaya açık", en: "Easily shaped or molded (e.g., neuroplasticity)", satTip: "🚨 'Plastik madde' değil, 'beynin şekil alma esnekliği'dir." },
    { word: "Plausible", pos: "adj", tr: "Akla yatkın, makul, olası", en: "Seeming reasonable or probable", satTip: "Bilimsel hipotezlerin akla yatkınlığını niteler." },
    { word: "Polemical", pos: "adj", tr: "Kavgacı, sert tartışma ve polemik içeren", en: "Involving strongly critical or disputatious writing/speech", satTip: "Sert eleştirel denemeler." },
    { word: "Pragmatic", pos: "adj", tr: "Uygulamacı, faydacı, pratik şartlara göre hareket eden", en: "Dealing with things sensibly and realistically", satTip: "İdealist teoriler yerine somut koşullara odaklanan yaklaşımlar." },
    { word: "Preclude", pos: "verb", tr: "Önceden engellemek, imkansız kılmak", en: "Prevent from happening; make impossible", satTip: "Bir durumun diğer olasılıkları devre dışı bırakması." },
    { word: "Qualify", pos: "verb (ikincil)", tr: "Sınırlandırmak, şart/kayıt koşmak, ılımlılaştırmak", en: "To limit, modify, or restrict a claim (academic meaning)", satTip: "🚨 DİKKAT: 'Nitelikli olmak' değil, bir iddiaya sınır koymaktır!" },
    { word: "Reconcile", pos: "verb", tr: "Uzlaştırmak, aralarındaki çelişkiyi gidermek", en: "Restore friendly relations; make consistent", satTip: "Çatışan iki teoriyi tek modelde birleştirmek." },
    { word: "Repudiate", pos: "verb", tr: "Reddetmek, tanımamak, inkar etmek", en: "Refuse to accept or be associated with", satTip: "Eski bir teoriyi veya geleneği kesin bir dille reddetmek." },
    { word: "Resilient", pos: "adj", tr: "Dirençli, kendini çabuk toparlayan", en: "Able to withstand or recover quickly from difficult conditions", satTip: "Zorluklar karşısında yıkılmayan ekosistemler." },
    { word: "Scrutinize", pos: "verb", tr: "Kılı kırk yarmak, didik didik incelemek", en: "Examine or inspect closely and thoroughly", satTip: "Bilimsel verilerin titizlikle tetkik edilmesi." },
    { word: "Speculative", pos: "adj", tr: "Spekülatif, tahmini, kanıtlanmamış varsayıma dayalı", en: "Engaged in, expressing, or based on conjecture", satTip: "Ampirik kanıtı olmayan saf teorik modelleri anlatır." },
    { word: "Substantiate", pos: "verb", tr: "Somut kanıtlarla doğrulamak/ispatlamak", en: "Provide evidence to support or prove the truth of", satTip: "Command of Evidence sorularında 'delillendirmek' anlamında çıkar." },
    { word: "Table", pos: "verb (ikincil)", tr: "Askıya almak, görüşülmesini ertelemek", en: "To postpone consideration of a topic (US English)", satTip: "🚨 'Masa' değil, bir kanun teklifini ertelemektir." },
    { word: "Temper", pos: "verb (ikincil)", tr: "Yumuşatmak, aşırılığını dengelemek", en: "To moderate or soften with a counteracting force", satTip: "🚨 'Öfke' değil, aşırı coşkuyu gerçekçilikle dizginlemektir." },
    { word: "Tenuous", pos: "adj", tr: "Çok zayıf, iğreti, pamuk ipliğine bağlı", en: "Very weak or slight; insubstantial", satTip: "Zayıf hipotezler veya yetersiz bağlantılar için kullanılır." },
    { word: "Ubiquitous", pos: "adj", tr: "Her yerde bulunan, çok yaygın", en: "Present, appearing, or found everywhere", satTip: "Her alanda görülen cihazlar veya organizmalar." },
    { word: "Undermine", pos: "verb", tr: "Baltalamak, temelini sarsmak, zayıflatmak", en: "Damage or weaken the foundation of a claim/theory", satTip: "Bir argümanın geçerliliğini çürüten karşı kanıtlar için kullanılır." },
    { word: "Unflappable", pos: "adj", tr: "Soğukkanlı, sarsılmaz, paniğe kapılmayan", en: "Having or showing calmness in a crisis", satTip: "Karakter veya lider analizlerinde sakinliği över." },
    { word: "Vindicate", pos: "verb", tr: "Aklamak, haklılığını ispatlamak", en: "Clear of blame or suspicion; prove to be right", satTip: "Başta alay edilen bir bilim insanının yıllar sonra haklı çıkması." }
  ],

  falseFriends: [
    {
      word: "Qualify",
      wrongTurkishThinking: "Kalifiye olmak, diploma/yetki sahibi olmak",
      satRealMeaning: "Bir iddiayı sınırlandırmak, aşırı genellemeyi daraltmak (Limit/restrict scope).",
      example: "'Dr. Lee sought to qualify the author's claim' = Dr. Lee yazarın iddiasını sınırladı, kapsamını daralttı."
    },
    {
      word: "Compromise",
      wrongTurkishThinking: "Yalnızca iki tarafın karşılıklı anlaşması (uzlaşma)",
      satRealMeaning: "Güvenliği veya sağlığı tehlikeye atmak, zedelemek (Endanger/weaken).",
      example: "'The immune system was compromised' = Bağışıklık sistemi tehlikeye girdi / zayıfladı."
    },
    {
      word: "Champion",
      wrongTurkishThinking: "Turnuvada birinci olan şampiyon (isim)",
      satRealMeaning: "Fiil olarak: Bir fikri/davayı hararetle savunmak, öncülüğünü yapmak (Advocate).",
      example: "'She championed civil rights legislation' = Medeni haklar yasasını savundu ve destekledi."
    },
    {
      word: "Table",
      wrongTurkishThinking: "Yemek masası veya sayısal tablo",
      satRealMeaning: "Amerikan İngilizcesinde fiil: Bir konuyu görüşmeyi ertelemek, askıya almak (Postpone).",
      example: "'The committee decided to table the proposal' = Komite teklifi ertelemeye karar verdi."
    },
    {
      word: "Novel",
      wrongTurkishThinking: "Okunan edebi roman",
      satRealMeaning: "Sıfat olarak: Daha önce görülmemiş, yepyeni, özgün (Original, new).",
      example: "'A novel chemical catalyst' = Özgün, daha önce keşfedilmemiş yeni bir kimyasal katalizör."
    },
    {
      word: "Temper",
      wrongTurkishThinking: "Öfke veya sinir krizi",
      satRealMeaning: "Fiil olarak: Aşırılığı ılımlı hale getirmek, yumuşatmak, dengelemek (Moderate).",
      example: "'Enthusiasm was tempered by realism' = Coşku, gerçekçilikle dengelendi."
    },
    {
      word: "Plastic",
      wrongTurkishThinking: "Pet şişe plastiği",
      satRealMeaning: "Sıfat olarak: Esnek, şekil alabilir, değişime açık (Malleable, flexible).",
      example: "'Neural plasticity in the brain' = Beynin yeni bağlantılar kurarak şekil alma esnekliği."
    },
    {
      word: "Faculty",
      wrongTurkishThinking: "Üniversite fakültesi",
      satRealMeaning: "Zihinsel veya bedensel yetenek, doğal güç (Mental/physical capability).",
      example: "'The cognitive faculty of memory' = Zihnin hafıza yetisi/kapasitesi."
    },
    {
      word: "Disinterested",
      wrongTurkishThinking: "İlgisiz, umursamaz, sıkılmış (Uninterested)",
      satRealMeaning: "Tarafsız, kişisel çıkarı olmayan, adil ve objektif (Impartial, unbiased).",
      example: "'A disinterested arbitrator resolved the labor dispute' = Tarafsız bir hakem iş uyuşmazlığını çözdü."
    },
    {
      word: "Arbitrary",
      wrongTurkishThinking: "Arabulucu veya arzu edilen",
      satRealMeaning: "Keyfi, mantıksal bir kurala dayanmayan, rastgele (Random, whimsical).",
      example: "'An arbitrary deadline created unnecessary stress' = Keyfi konulmuş bir teslim tarihi gereksiz stres yarattı."
    },
    {
      word: "Pretentious",
      wrongTurkishThinking: "Önceden niyetli veya hazırlıklı",
      satRealMeaning: "Kibirli, olduğundan daha bilgili/önemli görünmeye çalışan (Pompous, showy).",
      example: "'The critic dismissed the prose as pretentious' = Eleştirmen metni gösterişçi ve yapmacık bularak reddetti."
    },
    {
      word: "Sympathy",
      wrongTurkishThinking: "Sempatiklik, cana yakınlık",
      satRealMeaning: "Başkasının acısını anlama, duygudaşlık, merhamet (Compassion, pity).",
      example: "'She expressed deep sympathy for the victims' = Mağdurlara derin taziyelerini ve duygudaşlığını iletti."
    },
    {
      word: "Eventual",
      wrongTurkishThinking: "Olaylarla dolu, hareketli (Eventful)",
      satRealMeaning: "Eninde sonunda gerçekleşen, nihai (Ultimate, final).",
      example: "'The eventual outcome of the trials' = Deneylerin nihai/en son sonucu."
    },
    {
      word: "Pedestrian",
      wrongTurkishThinking: "Yalnızca kaldırımda yürüyen yaya",
      satRealMeaning: "Sıfat olarak: Sıradan, sıkıcı, heyecansız, vasat (Dull, ordinary).",
      example: "'A pedestrian plot that offered no surprises' = Hiçbir sürpriz sunmayan sıradan bir kurgu."
    },
    {
      word: "Arresting",
      wrongTurkishThinking: "Polis tarafından gözaltına alan",
      satRealMeaning: "Sıfat olarak: Göz alıcı, çarpıcı, dikkat çekici (Striking, eye-catching).",
      example: "'An arresting portrait with vivid colors' = Canlı renkleriyle son derece çarpıcı bir portre."
    },
    {
      word: "Grave",
      wrongTurkishThinking: "Mezar (isim)",
      satRealMeaning: "Sıfat olarak: Çok ciddi, vahim, ağır (Serious, solemn, grim).",
      example: "'A grave threat to marine biodiversity' = Deniz biyolojik çeşitliliğine yönelik çok vahim bir tehdit."
    }
  ],

  transitions: [
    {
      category: "Zıtlık & Çelişki (Contrast / Turn)",
      role: "Yazarın asıl fikri genellikle bu bağlaçtan HEMEN SONRA gelir.",
      words: [
        { en: "However / Yet", tr: "Ancak / Oysa / Fakat" },
        { en: "Nonetheless / Nevertheless", tr: "Yine de / Buna rağmen" },
        { en: "Conversely / In contrast", tr: "Aksine / Bunun tam tersine" },
        { en: "Notwithstanding", tr: "...e rağmen / Buna karşın" },
        { en: "Whereas / While", tr: "-iken / Oysa ki (iki durumu kıyaslar)" }
      ]
    },
    {
      category: "Sebep - Sonuç & Çıkarım (Causation / Inference)",
      role: "Soru kökü 'most logically completes' ise sonuç cümlesi bu bağlaçla bağlanır.",
      words: [
        { en: "Consequently / Therefore", tr: "Bu nedenle / Sonuç olarak" },
        { en: "Thus / Hence", tr: "Böylece / Dolayısıyla" },
        { en: "Thereby", tr: "Bunun vasıtasıyla / Böylece (-erek/-arak)" },
        { en: "Accordingly", tr: "Buna uygun olarak / Bu doğrultuda" }
      ]
    },
    {
      category: "Ek Bilgi & Pekiştirme (Reinforcement / Addition)",
      role: "Önceki iddiayı güçlendiren yeni bir kanıt veya boyut ekler.",
      words: [
        { en: "Furthermore / Moreover", tr: "Dahası / Ayrıca / Üstelik" },
        { en: "Indeed / In fact", tr: "Nitekim / Aslında (iddianın altını çizer)" },
        { en: "Likewise / Similarly", tr: "Benzer şekilde / Aynı biçimde" }
      ]
    },
    {
      category: "Ödün Verme & Sınırlandırma (Concession & Qualification)",
      role: "Karşıt görüşün doğru bir yönünü kabul eder ama ana argümanı korur.",
      words: [
        { en: "Admittedly / Granted", tr: "Kabul etmek gerekir ki / Kuşkusuz" },
        { en: "To be sure", tr: "Elbette ki / Şüphesiz" },
        { en: "Even so", tr: "Öyle olsa bile / Yine de" }
      ]
    },
    {
      category: "Örnekleme & Açıklama (Exemplification & Elaboration)",
      role: "Soyut bir kuralı somutlaştırır veya önceki cümleyi yeniden tanımlar.",
      words: [
        { en: "For instance / For example", tr: "Örneğin / Misal olarak" },
        { en: "Specifically / Namely", tr: "Özellikle / Şöyle ki" },
        { en: "In other words / That is", tr: "Başka bir deyişle / Yani" }
      ]
    }
  ],

  questionStems: [
    {
      stemEn: "Which choice best states the main purpose of the text?",
      stemTr: "Bu metnin yazılış amacı en iyi hangi seçenekte belirtilmiştir?",
      strategyTr: "Metnin ne anlattığına (konuya) değil, yazarın ne YAPTIĞINA (eyleme) odaklanın: Tanım mı yapıyor, teoriyi mi çürütüyor, yoksa uzlaşma mı öneriyor?"
    },
    {
      stemEn: "Which choice most logically completes the text?",
      stemTr: "Metni en mantıklı şekilde hangi seçenek tamamlar?",
      strategyTr: "Asla hayal gücünüzle tahmin yürütmeyin. Metindeki öncüllerden (Premises) zorunlu olarak çıkan, en mütevazı ve kanıtlanabilir sonucu seçin."
    },
    {
      stemEn: "Which finding, if true, would most directly support the hypothesis?",
      stemTr: "Doğru kabul edilirse, hangi bulgu araştırmacıların hipotezini en doğrudan destekler?",
      strategyTr: "Önce hipotezi tek bir cümleyle özetleyin. Seçeneklerde tam olarak o hipotezi test eden kontrol grubu ve ölçüm sonucunu arayın."
    },
    {
      stemEn: "Which finding, if true, would most directly weaken the claim?",
      stemTr: "Doğru kabul edilirse, hangi bulgu yazarın iddiasını en doğrudan zayıflatır/çürütür?",
      strategyTr: "Yazarın iddiasındaki temel sebep-sonuç ilişkisini tersine çeviren veya alternatif bir açıklamayı kanıtlayan seçeneği arayın."
    },
    {
      stemEn: "As used in the text, what does the word [X] most nearly mean?",
      stemTr: "Metindeki kullanımıyla [X] sözcüğü en yakın hangi anlama gelmektedir?",
      strategyTr: "Şıklara bakmadan önce kelimenin üzerini kapatın (BLANK). Cümledeki ipuçlarından basit bir eşanlamlı tahmin edin, ardından şıklarla eşleştirin."
    },
    {
      stemEn: "Based on the texts, how would the author of Text 2 most likely respond to the claim made in Text 1?",
      stemTr: "Metinlere göre, 2. Metnin yazarı 1. Metindeki iddiaya büyük olasılıkla nasıl yanıt verirdi?",
      strategyTr: "Önce 2. Yazarın ana tezini belirleyin. Ardından 1. Metindeki iddiayı eleştirirken 2. Yazarın kullanacağı spesifik kanıtı veya sınırlamayı eşleştirin."
    }
  ]
};
