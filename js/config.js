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
  },
  {
    "day": 11,
    "title": "Day 11: Contrast, Paradox & Juxtaposition",
    "words": [
      {
        "word": "Juxtapose",
        "pos": "verb",
        "en": "To place close together or side by side for comparison or contrast",
        "tr": "Yan yana koymak (karşılaştırmak için)",
        "ex": "The exhibition juxtaposes classical marble sculptures with contemporary digital installations.",
        "mnemonic": "Juxta (yanında) + pose (poz vermek) -> kıyaslamak için yan yana koymak."
      },
      {
        "word": "Anachronistic",
        "pos": "adj",
        "en": "Belonging to a period other than that in which it exists; chronologically out of place",
        "tr": "Çağdışı, kronolojik olarak ait olmadığı zamana ait",
        "ex": "Using mechanical typewriters in a high-tech data laboratory seemed completely anachronistic.",
        "mnemonic": "Ana- (ters) + chrono (zaman) -> zaman hatası içeren."
      },
      {
        "word": "Incongruous",
        "pos": "adj",
        "en": "Not in harmony or keeping with the surroundings; out of place",
        "tr": "Uyumsuz, yersiz, ortama uymayan",
        "ex": "The ornate Victorian chandelier was strikingly incongruous with the minimalist industrial concrete warehouse.",
        "mnemonic": "In- (olumsuz) + congruent (uyumlu) -> ahenksiz."
      },
      {
        "word": "Paradoxical",
        "pos": "adj",
        "en": "Seemingly absurd or contradictory but in reality expressing a possible truth",
        "tr": "Çelişkili görünen ama doğru olan, paradoksal",
        "ex": "It is paradoxical that increased automation has sometimes resulted in longer working hours for software engineers.",
        "mnemonic": "Paradox -> zıtlıktan doğan şaşırtıcı gerçek."
      }
    ],
    "quiz": {
      "sentence": "By placing traditional acoustic folk instruments alongside synthesized electronic rhythms, the composer created an _______ sonic landscape that _______ listeners' conventional notions of genre boundaries.",
      "options": [
        "A) anachronistic ... confirmed",
        "B) incongruous ... challenged",
        "C) obsolete ... bolstered",
        "D) dogmatic ... substantiated"
      ],
      "answer": "B",
      "explanation": "Zıt enstrümanları yan yana koymak 'incongruous' (şaşırtıcı ve uyumsuz) bir ses atmosferi üretir ve dinleyicilerin tür sınırları algısına meydan okur ('challenged')."
    }
  },
  {
    "day": 12,
    "title": "Day 12: Explicitness, Clarity & Ambiguity",
    "words": [
      {
        "word": "Unequivocal",
        "pos": "adj",
        "en": "Leaving no doubt; clear, unambiguous, and unmistakable",
        "tr": "Kesin, şüpheye yer bırakmayan, sarih",
        "ex": "The Supreme Court delivered an unequivocal ruling protecting investigative journalism.",
        "mnemonic": "Un- (olumsuz) + equivocal (muğlak) -> hiçbir şüpheye yer bırakmayan kesinlik."
      },
      {
        "word": "Ambiguous",
        "pos": "adj",
        "en": "Open to more than one interpretation; having a double meaning; unclear",
        "tr": "Belirsiz, iki anlama gelebilen",
        "ex": "The treaty's ambiguous wording regarding territorial waters caused renewed diplomatic friction.",
        "mnemonic": "Ambi- (her iki yön) -> net olmayan."
      },
      {
        "word": "Conspicuous",
        "pos": "adj",
        "en": "Standing out so as to be clearly visible; attracting notice or attention",
        "tr": "Göze çarpan, belirgin, dikkat çekici",
        "ex": "Her bright yellow coat made her conspicuous among the sea of dark suits.",
        "mnemonic": "Conspicuous -> 'Con-spect' (herkesin gözünün baktığı)."
      },
      {
        "word": "Opaque",
        "pos": "adj (SAT special)",
        "en": "Not transparent; difficult or impossible to understand",
        "tr": "Anlaşılması güç, karmaşık, kapalı",
        "ex": "The bureaucrat's opaque prose disguised the fact that funding had been halved.",
        "mnemonic": "Opaque SAT'de opak bardak değil, 'anlaşılmaz, karanlık metin' anlamında test edilir."
      }
    ],
    "quiz": {
      "sentence": "While the initial press release was intentionally _______ and left room for multiple interpretations, the formal committee report offered an _______ timeline for completion.",
      "options": [
        "A) ambiguous ... unequivocal",
        "B) unequivocal ... ambiguous",
        "C) candid ... opaque",
        "D) dogmatic ... tenuous"
      ],
      "answer": "A",
      "explanation": "'While' zıtlığı: İlk açıklama birden fazla yoruma açık ('ambiguous') iken, resmi rapor net ve kesin ('unequivocal') bir takvim sunmuştur."
    }
  },
  {
    "day": 13,
    "title": "Day 13: Authority, Orthodoxy & Nonconformity",
    "words": [
      {
        "word": "Orthodox",
        "pos": "adj",
        "en": "Conforming to what is generally or traditionally accepted as right or true",
        "tr": "Geleneksel, yerleşik kurallara uyan",
        "ex": "He challenged orthodox macroeconomic theories by emphasizing behavioral irrationality.",
        "mnemonic": "Ortho (düzgün/standart) + dox (inanç) -> ana akım inanç."
      },
      {
        "word": "Heterodox",
        "pos": "adj",
        "en": "Not conforming with accepted or orthodox standards or beliefs",
        "tr": "Alışılagelmişin dışında, aykırı, gelenekdışı",
        "ex": "The economist’s heterodox monetary proposals were initially dismissed by central bankers.",
        "mnemonic": "Hetero (farklı) + dox (inanç) -> ana akıma uymayan görüş."
      },
      {
        "word": "Iconoclast",
        "pos": "noun",
        "en": "A person who attacks cherished beliefs or established institutions",
        "tr": "Yerleşik inanç ve tabuları yıkan kimse",
        "ex": "Steve Jobs was renowned as an iconoclast who upended the traditional personal computing industry.",
        "mnemonic": "Icon (kutsal tasvir) + clast (kıran) -> tabu yıkıcı."
      },
      {
        "word": "Dogma",
        "pos": "noun",
        "en": "A principle or set of principles laid down by an authority as incontrovertibly true",
        "tr": "Dogma, sorgulanmadan kabul edilen öğreti",
        "ex": "Scientific inquiry thrives only when researchers are willing to discard outdated dogma.",
        "mnemonic": "Dogma -> sorgulanması yasaklanmış inanç."
      }
    ],
    "quiz": {
      "sentence": "Celebrated as an intellectual _______, the physicist refused to adhere to established scientific _______, developing instead a radically new theory of cosmic expansion.",
      "options": [
        "A) iconoclast ... dogma",
        "B) partisan ... evidence",
        "C) conformist ... hypothesis",
        "D) spectator ... ambiguity"
      ],
      "answer": "A",
      "explanation": "Kurallara uymayan fizikçi 'iconoclast' (tabu yıkıcı) olarak nitelenir ve yerleşik dogmalara ('dogma') boyun eğmeyi reddeder."
    }
  },
  {
    "day": 14,
    "title": "Day 14: Restraint, Moderation & Austerity",
    "words": [
      {
        "word": "Temper",
        "pos": "verb (SAT special)",
        "en": "To act as a neutralizing or moderating force to; mitigate; soften",
        "tr": "Yumuşatmak, hafifletmek, dengelemek",
        "ex": "The finance minister tempered his optimism with warnings about rising inflation.",
        "mnemonic": "Temper SAT'de 'öfke' değil, 'aşırılığı törpülemek, dengelemek' anlamındadır."
      },
      {
        "word": "Ascetic",
        "pos": "adj",
        "en": "Characterized by severe self-discipline and abstention from all forms of indulgence",
        "tr": "Çileci, zevkten arınmış, aşırı sade",
        "ex": "The monk lived an ascetic existence in a remote stone hermitage.",
        "mnemonic": "Ascetic -> 'Asil sadelik' içinde dünyevi zevkleri reddetmek."
      },
      {
        "word": "Abstain",
        "pos": "verb",
        "en": "Restrain oneself from doing or enjoying something; formally decline to vote",
        "tr": "Kaçınmak, uzak durmak, çekimser kalmak",
        "ex": "During negotiations, several delegates chose to abstain from voting on the controversial amendment.",
        "mnemonic": "Ab- (uzak) + stain -> lekelenmemek için uzak durmak."
      },
      {
        "word": "Moderate",
        "pos": "verb",
        "en": "To make or become less extreme, intense, or violent",
        "tr": "Ilıımlılaştırmak, yatıştırmak",
        "ex": "The presence of large ocean bodies moderates coastal seasonal temperatures.",
        "mnemonic": "Moderate -> aşırılıkları dengeye çekmek."
      }
    ],
    "quiz": {
      "sentence": "Although the quarterly corporate earnings report showed historic revenue growth, the CEO wisely _______ her enthusiasm by highlighting potential supply chain bottlenecks in the coming fiscal year.",
      "options": [
        "A) tempered",
        "B) exacerbated",
        "C) repudiated",
        "D) augmented"
      ],
      "answer": "A",
      "explanation": "'Although' yapısı: Gelir rekor kırsa da CEO heyecanını riskleri belirterek dengelemiş / yumuşatmıştır ('tempered')."
    }
  },
  {
    "day": 15,
    "title": "Day 15: Severity, Criticism & Harshness",
    "words": [
      {
        "word": "Acerbic",
        "pos": "adj",
        "en": "Sharp and forthright; tasting sour or bitter (metaphorically biting)",
        "tr": "İğneleyici, zehir zemberek, keskin dilli",
        "ex": "The theater critic was infamous for her acerbic reviews of poorly staged Broadway revivals.",
        "mnemonic": "Acerbic -> 'Asit gibi yakıcı' eleştiri üslubu."
      },
      {
        "word": "Caustic",
        "pos": "adj",
        "en": "Sarcastic in a scathing and bitter way; able to burn or corrode",
        "tr": "Yakıcı, aşındırıcı, iğneleyici",
        "ex": "His caustic remarks in the boardroom created lasting resentment among junior partners.",
        "mnemonic": "Caustic -> 'Kostik soda' gibi temas ettiği yeri yakan alaycı tavır."
      },
      {
        "word": "Castigate",
        "pos": "verb",
        "en": "To reprimand someone severely; punish",
        "tr": "Ağır şekilde cezalandırmak/paylamak",
        "ex": "The ethics committee castigated the executive for withholding internal financial audits.",
        "mnemonic": "Castigate -> 'Kasıtlı hatayı' sertçe paylamak."
      },
      {
        "word": "Astringent",
        "pos": "adj",
        "en": "Sharp or severe in manner or style; causing the contraction of body tissues",
        "tr": "Sert, tavizsiz, keskin",
        "ex": "Her astringent prose eliminated all sentimentality from the wartime memoirs.",
        "mnemonic": "Astringent -> cildi gerip sıkılaştıran gibi sert ve süssüz stil."
      }
    ],
    "quiz": {
      "sentence": "Known for her _______ wit and refusal to indulge flattering platitudes, the columnist wrote a review that _______ the political candidate for his inconsistent voting record.",
      "options": [
        "A) acerbic ... castigated",
        "B) lucid ... championed",
        "C) flattering ... scrutinized",
        "D) tenuous ... corroborated"
      ],
      "answer": "A",
      "explanation": "Yaltaklanmayı sevmeyen yazarın keskin/iğneleyici ('acerbic') üslubu adayı tutarsızlığı nedeniyle ağır biçimde eleştirmiştir ('castigated')."
    }
  },
  {
    "day": 16,
    "title": "Day 16: Tenacity, Persistence & Permanence",
    "words": [
      {
        "word": "Tenacious",
        "pos": "adj",
        "en": "Tending to keep a firm hold of something; clinging or adhering closely; persistent",
        "tr": "İnatçı, sımsıkı sarılan, vazgeçmeyen",
        "ex": "Through tenacious investigative reporting, the journalist uncovered the offshore fraud network.",
        "mnemonic": "Tenacious -> 'Teneke gibi sağlam' ve bırakmayan."
      },
      {
        "word": "Perennial",
        "pos": "adj",
        "en": "Lasting or existing for a long or apparently infinite time; continually recurring",
        "tr": "Kalıcı, çok yıllık, her daim yinelenen",
        "ex": "Traffic congestion remains a perennial problem for expanding metropolitan transit planners.",
        "mnemonic": "Perennial -> 'Yıllar boyu (per-annual)' sürüp giden."
      },
      {
        "word": "Inveterate",
        "pos": "adj",
        "en": "Having a particular habit, activity, or interest that is long-established and unlikely to change",
        "tr": "Müzmin, kökleşmiş, iflah olmaz",
        "ex": "An inveterate skeptic, the historian demanded primary archival proof before accepting the oral myth.",
        "mnemonic": "In- + veteran (kıdemli) -> alışkanlığı kökleşmiş."
      },
      {
        "word": "Obstinate",
        "pos": "adj",
        "en": "Stubbornly refusing to change one's opinion or chosen course of action",
        "tr": "İnatçı, dik kafalı",
        "ex": "Despite overwhelming archaeological evidence, the obstinate collector insisted his artifact was authentic.",
        "mnemonic": "Obstinate -> 'Obstacle' (engel) gibi yerinden kıpırdamayan inatçılık."
      }
    ],
    "quiz": {
      "sentence": "Urban water scarcity in the arid Southwest is not a temporary crisis but a _______ challenge that will require _______ conservation policies across multiple generations.",
      "options": [
        "A) perennial ... tenacious",
        "B) transient ... dogmatic",
        "C) novel ... speculative",
        "D) circumscribed ... candid"
      ],
      "answer": "A",
      "explanation": "Geçici olmayan bir kriz 'perennial' (sürekli/kökleşmiş) bir sorundur ve kararlı/azimle sürdürülen ('tenacious') politikalar gerektirir."
    }
  },
  {
    "day": 17,
    "title": "Day 17: Transience, Brevity & Fleetingness",
    "words": [
      {
        "word": "Ephemeral",
        "pos": "adj",
        "en": "Lasting for a very short time; transitory",
        "tr": "Geçici, kısa ömürlü, fani",
        "ex": "Cherry blossoms create an ephemeral display of beauty that lasts barely two weeks each spring.",
        "mnemonic": "Ephemeral -> 'Efervesan tablet' gibi suya atınca çabucak kaybolan."
      },
      {
        "word": "Evanescent",
        "pos": "adj",
        "en": "Soon passing out of sight, memory, or existence; quickly fading or disappearing",
        "tr": "Uçucu, kaybolup giden, silik",
        "ex": "The rainbow was an evanescent phenomenon that dissolved as the storm clouds cleared.",
        "mnemonic": "Evanescent -> buharlaşan (evaporate) gibi uçup giden."
      },
      {
        "word": "Transient",
        "pos": "adj",
        "en": "Lasting only for a short time; impermanent; staying only briefly",
        "tr": "Geçici, süreksiz, konup göçen",
        "ex": "Migratory songbirds are transient visitors to the suburban nature preserve.",
        "mnemonic": "Transient -> 'Transit yolcu' gibi kalıcı olmayan."
      },
      {
        "word": "Fleeting",
        "pos": "adj",
        "en": "Lasting for a very short time; brief",
        "tr": "Göz açıp kapayıncaya kadar süren, anlık",
        "ex": "He caught only a fleeting glimpse of the snow leopard before it vanished into the crags.",
        "mnemonic": "Fleet (hızlı kaçan) -> hemen biten."
      }
    ],
    "quiz": {
      "sentence": "Unlike stone monuments built to withstand millennia of environmental weathering, ice sculptures are inherently _______, melting away after only a few _______ hours in the sunlight.",
      "options": [
        "A) ephemeral ... fleeting",
        "B) durable ... perpetual",
        "C) ubiquitous ... comprehensive",
        "D) fastidious ... deliberate"
      ],
      "answer": "A",
      "explanation": "Taş anıtların aksine buz heykelleri doğası gereği geçicidir ('ephemeral') ve birkaç anlık/kısa saatte ('fleeting') erir."
    }
  },
  {
    "day": 18,
    "title": "Day 18: Skill, Ingenuity & Artifice",
    "words": [
      {
        "word": "Deft",
        "pos": "adj",
        "en": "Neatly skillful and quick in one's movements; demonstrating skill and cleverness",
        "tr": "Usta, maharetli, çevik",
        "ex": "With a deft motion of her scalpel, the surgeon removed the benign tumor without damaging nerves.",
        "mnemonic": "Deft -> 'Defteri ustalıkla dolduran usta el'."
      },
      {
        "word": "Adroit",
        "pos": "adj",
        "en": "Clever or skillful in using the hands or mind",
        "tr": "Becerikli, hünerli, iş bitirici",
        "ex": "The diplomat was adroit at defusing tense negotiations without conceding essential territory.",
        "mnemonic": "Adroit -> Fransızca 'droit' (sağ el) -> hünerli."
      },
      {
        "word": "Artless",
        "pos": "adj (SAT special)",
        "en": "Without guile or deception; natural and innocent; simple",
        "tr": "Hilesiz, doğal, içten, samimi",
        "ex": "The child's artless honesty disarmed the skeptical interrogators.",
        "mnemonic": "Artless SAT'de 'sanatsız' değil, 'hile ve yapmacıklıktan uzak, saf' demektir."
      },
      {
        "word": "Ingenuous",
        "pos": "adj",
        "en": "Innocent and unsuspecting; naive; sincere",
        "tr": "Saf, iyi niyetli, dolambaçsız",
        "ex": "He was too ingenuous to recognize the deceptive fine print in the commercial contract.",
        "mnemonic": "Ingenuous (saf) vs Ingenious (dahi) -> dikkat: 'u' harfi masumiyeti simgeler."
      }
    ],
    "quiz": {
      "sentence": "Through _______ diplomatic maneuvering, the ambassador prevented an armed escalation while presenting an _______ persona that won the trust of both rival factions.",
      "options": [
        "A) adroit ... artless",
        "B) artless ... polemical",
        "C) dogmatic ... deft",
        "D) tenuous ... disingenuous"
      ],
      "answer": "A",
      "explanation": "Krizi önlemek ustaca ('adroit') diplomasi gerektirir, güven kazanmak ise hilesiz ve içten ('artless') bir tavırla mümkündür."
    }
  },
  {
    "day": 19,
    "title": "Day 19: Praise, Acclaim & Veneration",
    "words": [
      {
        "word": "Extol",
        "pos": "verb",
        "en": "Praise enthusiastically and lavishly",
        "tr": "Öve öve bitirememek, göklere çıkarmak",
        "ex": "Critics extolled the young cellist’s technical precision and emotional maturity.",
        "mnemonic": "Extol -> 'Extra tall' (boyunu aşacak kadar övmek)."
      },
      {
        "word": "Laud",
        "pos": "verb",
        "en": "Praise highly, especially in a public context",
        "tr": "Övmek, takdirle anmak",
        "ex": "The city council lauded the firefighters for their heroism during the waterfront warehouse blaze.",
        "mnemonic": "Laud -> 'Applaud' (alkışlamakla övmek)."
      },
      {
        "word": "Revere",
        "pos": "verb",
        "en": "Feel deep respect or admiration for something or someone",
        "tr": "Derin saygı duymak, hürmet etmek",
        "ex": "Theoretical physicists revere Albert Einstein for fundamentally reshaping humanity's grasp of spacetime.",
        "mnemonic": "Revere -> 'Reverans' yaparak saygı göstermek."
      },
      {
        "word": "Exalt",
        "pos": "verb",
        "en": "Hold in very high regard; think or speak very highly of; elevate to higher rank",
        "tr": "Yüceltmek, rütbesini/makamını yükseltmek",
        "ex": "Romantic poetry often exalts wild nature over mechanical industrial civilization.",
        "mnemonic": "Exalt -> 'Altitude' (yükseğe) çıkarmak."
      }
    ],
    "quiz": {
      "sentence": "Rather than condemning the novel's unconventional prose rhythms, literary critics across the globe _______ the author for her stylistic audacity and _______ her as a pioneer of postmodern fiction.",
      "options": [
        "A) extolled ... lauded",
        "B) castigated ... repudiated",
        "C) undermined ... curtailed",
        "D) mitigated ... moderated"
      ],
      "answer": "A",
      "explanation": "Kınamak yerine yazarı cesaretinden ötürü göklere çıkardılar ('extolled') ve öncü olarak övdüler ('lauded')."
    }
  },
  {
    "day": 20,
    "title": "Day 20: Criticism, Censure & Reproach",
    "words": [
      {
        "word": "Censure",
        "pos": "verb (SAT special)",
        "en": "Express severe disapproval of someone or something, especially in a formal statement",
        "tr": "Kınamak, resmi olarak ayıplamak",
        "ex": "The regulatory body censured the accounting firm for failing to flag inflated corporate balance sheets.",
        "mnemonic": "Censure 'Sansür' (censor) değildir! Censure 'resmi kınama'dır."
      },
      {
        "word": "Denounce",
        "pos": "verb",
        "en": "Publicly declare to be wrong or evil",
        "tr": "Açıkça suçlamak, kınamak, ihbar etmek",
        "ex": "The international coalition denounced the unauthorized nuclear tests as a violation of sovereignty.",
        "mnemonic": "Denounce -> 'De-announce' (halka suç olduğunu haykırmak)."
      },
      {
        "word": "Rebuke",
        "pos": "verb",
        "en": "Express sharp disapproval or criticism of someone because of their behavior or actions",
        "tr": "Azarlamak, terslemek, çıkışmak",
        "ex": "The judge issued a stinging rebuke to the defense attorney for badgering the vulnerable witness.",
        "mnemonic": "Rebuke -> 'Rica bitti' diyerek terslemek."
      },
      {
        "word": "Disparage",
        "pos": "verb",
        "en": "Regard or represent as being of little worth; belittle",
        "tr": "Kötülemek, küçük düşürmek, kıymet vermemek",
        "ex": "Snobbish purists often disparaged popular science writing as an oversimplification of academic research.",
        "mnemonic": "Disparage -> 'Dis-par' (eşit görmeyip aşağılamak)."
      }
    ],
    "quiz": {
      "sentence": "When the pharmaceutical company concealed adverse clinical trial results, medical ethicists immediately _______ the deception and urged licensing boards to formally _______ the executives.",
      "options": [
        "A) denounced ... censure",
        "B) lauded ... revere",
        "C) substantiated ... corroborate",
        "D) augmented ... qualify"
      ],
      "answer": "A",
      "explanation": "Gizlenen sonuçları etik uzmanları açıkça suçlamış/kınamış ('denounced') ve kurullardan yöneticileri resmi olarak ayıplamalarını ('censure') talep etmiştir."
    }
  },
  {
    "day": 21,
    "title": "Day 21: Energy, Passion & Apathy",
    "words": [
      {
        "word": "Zealous",
        "pos": "adj",
        "en": "Having or showing passion and devotion; fervent",
        "tr": "Aşırı gayretli, şevkli, tutkulu",
        "ex": "The zealous environmental activist rallied thousands of university students to clean the riverbanks.",
        "mnemonic": "Zealous -> 'Zil çalarak coşkuyla koşan'."
      },
      {
        "word": "Fervent",
        "pos": "adj",
        "en": "Having or displaying a passionate intensity",
        "tr": "Coşkulu, ateşli, candan",
        "ex": "Her fervent belief in equal educational access motivated her twenty-year literacy campaign.",
        "mnemonic": "Fervent -> 'Fever' (ateş) gibi sıcak ve tutkulu."
      },
      {
        "word": "Apathetic",
        "pos": "adj",
        "en": "Showing or feeling no interest, enthusiasm, or concern",
        "tr": "Kayıtsız, umursamaz, bezgin",
        "ex": "Voter turnout dropped sharply as citizens became increasingly apathetic toward political promises.",
        "mnemonic": "A- (yokluk) + pathos (duygu) -> tamamen duygusuz/ilgisiz."
      },
      {
        "word": "Lethargic",
        "pos": "adj",
        "en": "Affected by lethargy; sluggish and apathetic; lacking vitality",
        "tr": "Uyuşuk, miskin, enerjisiz",
        "ex": "The extreme summer humidity left the hikers feeling completely lethargic.",
        "mnemonic": "Lethargic -> kolunu kaldıracak hali olmayan uyuşukluk."
      }
    ],
    "quiz": {
      "sentence": "While grassroots organizers were _______ in their door-to-door campaigning, the general electorate remained stubbornly _______, resulting in historically low ballot participation.",
      "options": [
        "A) zealous ... apathetic",
        "B) apathetic ... zealous",
        "C) fastidious ... resilient",
        "D) circumscribed ... candid"
      ],
      "answer": "A",
      "explanation": "'While' zıtlığı: Organizatörler aşırı gayretli ve tutkulu ('zealous') iken, seçmen kitlesi duyarsız ve kayıtsız ('apathetic') kalmıştır."
    }
  },
  {
    "day": 22,
    "title": "Day 22: Generosity, Frugality & Wealth",
    "words": [
      {
        "word": "Munificent",
        "pos": "adj",
        "en": "Characterized by or displaying great generosity; lavish",
        "tr": "Son derece cömert, eli açık",
        "ex": "A munificent endowment from an anonymous alumna funded ten full university scholarships.",
        "mnemonic": "Munificent -> 'Muazzam nafaka' gibi bolca bağış yapan."
      },
      {
        "word": "Parsimonious",
        "pos": "adj",
        "en": "Unwilling to spend money or use resources; stingy or frugal",
        "tr": "Aşırı tutumlu, eli sıkı, cimri",
        "ex": "The parsimonious landlord refused to replace the broken water boiler during sub-freezing weather.",
        "mnemonic": "Parsimonious -> 'Parasını tutumlu kuruş kuruş sayan'."
      },
      {
        "word": "Magnanimous",
        "pos": "adj",
        "en": "Generous or forgiving, especially toward a rival or less powerful person",
        "tr": "Alçakgönüllü, yüce gönüllü, affedici",
        "ex": "In a magnanimous victory speech, the newly elected governor praised her opponent’s dedicated public service.",
        "mnemonic": "Magna (büyük) + animus (ruh) -> büyük ruhlu, affedici."
      },
      {
        "word": "Paucity",
        "pos": "noun",
        "en": "The presence of something only in small or insufficient quantities or amounts; scarcity",
        "tr": "Kıtlık, azlık, yetersizlik",
        "ex": "The paucity of historical documentation regarding the Olmec civilization hinders archaeological consensus.",
        "mnemonic": "Paucity -> 'Pauper' (yoksul) gibi elinde çok az şey bulunması."
      }
    ],
    "quiz": {
      "sentence": "Rather than maintaining a _______ posture that restricted research grants, the philanthropic trust made a _______ multi-million dollar donation to the university oncology laboratory.",
      "options": [
        "A) parsimonious ... munificent",
        "B) munificent ... parsimonious",
        "C) dogmatic ... tenuous",
        "D) polemical ... lucid"
      ],
      "answer": "A",
      "explanation": "Araştırma burslarını kısan cimri ('parsimonious') bir tutum yerine vakıf son derece cömert ('munificent') bir bağışta bulunmuştur."
    }
  },
  {
    "day": 23,
    "title": "Day 23: Deception, Guile & Pretense",
    "words": [
      {
        "word": "Disingenuous",
        "pos": "adj",
        "en": "Not candid or sincere, typically by pretending that one knows less about something than one really does",
        "tr": "Samimiyetsiz, sinsi, bilmezden gelen",
        "ex": "It was disingenuous of the lobbyist to claim he had never read the disputed environmental bill.",
        "mnemonic": "Dis- (olumsuz) + ingenuous (saf) -> saf numarası yapan kurnaz."
      },
      {
        "word": "Specious",
        "pos": "adj",
        "en": "Superficially plausible, but actually wrong; misleading in appearance",
        "tr": "İlk bakışta doğru görünen ama aldatıcı/asılsız",
        "ex": "The defense attorney built her closing argument on specious analogies that collapsed under empirical scrutiny.",
        "mnemonic": "Specious -> 'Species' gibi sadece dış görünüşü ikna edici ama içi boş."
      },
      {
        "word": "Duplicity",
        "pos": "noun",
        "en": "Deceitfulness; double-dealing",
        "tr": "İki yüzlülük, hilekarlık",
        "ex": "The undercover agent revealed the politician's financial duplicity to federal investigators.",
        "mnemonic": "Duplicity -> 'Duplicate' (iki farklı yüze sahip olma)."
      },
      {
        "word": "Frankness",
        "pos": "noun",
        "en": "The quality of being open, honest, and direct in speech or writing",
        "tr": "Açık sözlülük, dobralık",
        "ex": "Foreign correspondents appreciated the diplomat's unusual frankness during the private briefing.",
        "mnemonic": "Frank -> dosdoğru ve dürüst konuşma."
      }
    ],
    "quiz": {
      "sentence": "The marketing team's defense of the product's safety was ultimately _______; what initially appeared to be sound clinical evidence was revealed under federal investigation to be complete _______.",
      "options": [
        "A) specious ... duplicity",
        "B) unequivocal ... frankness",
        "C) fastidious ... tenacity",
        "D) durable ... paucity"
      ],
      "answer": "A",
      "explanation": "İlk başta doğru gibi görünen savunma aslında aldatıcıdır ('specious') ve sağlam kanıt sanılan şey tam bir iki yüzlülüktür ('duplicity')."
    }
  },
  {
    "day": 24,
    "title": "Day 24: Abundance, Variety & Scarcity",
    "words": [
      {
        "word": "Copious",
        "pos": "adj",
        "en": "Abundant in supply or quantity; profuse",
        "tr": "Bol, bereketli, çok sayıda",
        "ex": "The botanist took copious notes throughout her six-month expedition in the tropical cloud forest.",
        "mnemonic": "Copious -> 'Cornucopia' (bereket boynuzu) gibi bol bol."
      },
      {
        "word": "Myriad",
        "pos": "adj / noun",
        "en": "A countless or extremely great number; innumerably diverse",
        "tr": "Sayısız, pek çok, envaiçeşit",
        "ex": "Coral atolls shelter myriad invertebrate species that cannot survive in open pelagic waters.",
        "mnemonic": "Myriad -> 'Milyarlarca' çeşit barındıran."
      },
      {
        "word": "Dearth",
        "pos": "noun",
        "en": "A scarcity or lack of something",
        "tr": "Kıtlık, yokluk, eksiklik",
        "ex": "A dearth of qualified math instructors led the school district to launch an emergency recruitment drive.",
        "mnemonic": "Dearth -> 'Dert' (yokluğundan dert çekilen kıtlık)."
      },
      {
        "word": "Plethora",
        "pos": "noun",
        "en": "A large or excessive amount of something",
        "tr": "Aşırı bolluk, gereğinden fazla miktar",
        "ex": "The library offers a plethora of databases, which sometimes overwhelms first-year undergraduates.",
        "mnemonic": "Plethora -> 'Plenty' kelimesinin akademik ve aşırı fazlalık hali."
      }
    ],
    "quiz": {
      "sentence": "Despite the _______ of historical artifacts recovered from the royal tomb, researchers suffered from a frustrating _______ of written scrolls detailing the monarch's daily life.",
      "options": [
        "A) plethora ... dearth",
        "B) dearth ... plethora",
        "C) paucity ... copious",
        "D) tenuous ... myriad"
      ],
      "answer": "A",
      "explanation": "'Despite' zıtlığı: Mezardan bolca ('plethora') eşya çıkmasına rağmen, yazılı papirüslerin kıtlığı / yokluğu ('dearth') araştırmacıları zorlamıştır."
    }
  },
  {
    "day": 25,
    "title": "Day 25: Harmony, Discord & Amity",
    "words": [
      {
        "word": "Congruent",
        "pos": "adj",
        "en": "In agreement or harmony; identical in form",
        "tr": "Uyumlu, örtüşen, birbirine tam denk",
        "ex": "Her field observations were completely congruent with the theoretical climate model predictions.",
        "mnemonic": "Congruent -> geometriden 'eş' üçgenler gibi birebir örtüşen."
      },
      {
        "word": "Discordant",
        "pos": "adj",
        "en": "Disagreeing or incongruous; characterized by quarreling or conflict",
        "tr": "Uyumsuz, ahenksiz, kulağı tırmalayan",
        "ex": "The harsh industrial horns introduced a discordant element into the serene classical symphony.",
        "mnemonic": "Dis- (olumsuz) + accord (uyum) -> ahenksizlik."
      },
      {
        "word": "Amicable",
        "pos": "adj",
        "en": "Characterized by friendliness and absence of discord; peaceful",
        "tr": "Dostane, barışçıl, uzlaşmacı",
        "ex": "After months of negotiations, the co-founders reached an amicable financial settlement.",
        "mnemonic": "Amicable -> 'Amigo' (dostça) yapılan anlaşma."
      },
      {
        "word": "Belligerent",
        "pos": "adj",
        "en": "Hostile and aggressive; engaged in war or conflict",
        "tr": "Kavgacı, saldırgan, savaşçı",
        "ex": "The belligerent general rejected all international diplomatic ceasefire proposals.",
        "mnemonic": "Bell- (savaş, bellicose) -> saldırgan ve kavgacı."
      }
    ],
    "quiz": {
      "sentence": "While the boundary dispute threatened to provoke _______ military posturing, the mediation team steered both nations toward an _______ diplomatic resolution.",
      "options": [
        "A) belligerent ... amicable",
        "B) amicable ... belligerent",
        "C) congruent ... discordant",
        "D) opaque ... candid"
      ],
      "answer": "A",
      "explanation": "'While' zıtlığı: Sınır gerginliği saldırgan/savaşçı ('belligerent') bir tavrı körükleme riski taşırken, arabulucular dostane ('amicable') bir barış sağlamıştır."
    }
  },
  {
    "day": 26,
    "title": "Day 26: Complexity, Intricacy & Convolutedness",
    "words": [
      {
        "word": "Convoluted",
        "pos": "adj",
        "en": "Extremely complex and difficult to follow; intricately folded or twisted",
        "tr": "Çetrefilli, dolambaçlı, karmaşık",
        "ex": "The legal code was so convoluted that even seasoned corporate tax attorneys disagreed on its interpretation.",
        "mnemonic": "Convoluted -> 'Kıvrım kıvrım' bükülmüş, içinden çıkılmaz labirent."
      },
      {
        "word": "Byzantine",
        "pos": "adj",
        "en": "Excessively complicated, and typically involving a great deal of administrative detail",
        "tr": "Aşırı karmaşık, bürokratik labirent gibi",
        "ex": "Navigating the municipal permit process required surviving a byzantine network of regulatory committees.",
        "mnemonic": "Byzantine -> Bizans saray entrikaları gibi karmaşık bürokrasi."
      },
      {
        "word": "Nuanced",
        "pos": "adj",
        "en": "Characterized by subtle distinctions or variations in meaning, sound, or color",
        "tr": "Hassas ayrıntıları gözeten, nüanslı",
        "ex": "The historian offered a nuanced analysis of the cold war, avoiding simplistic hero-villain narratives.",
        "mnemonic": "Nuanced -> her ince detayı ve gri tonu hesaba katan."
      },
      {
        "word": "Labyrinthine",
        "pos": "adj",
        "en": "Like a labyrinth; irregular and twisting; extremely intricate",
        "tr": "Labirent gibi, karmaşık ve dolambaçlı",
        "ex": "The medieval fortress was ringed with labyrinthine subterranean tunnels.",
        "mnemonic": "Labyrinth -> labirentin içinde kaybolmuş gibi."
      }
    ],
    "quiz": {
      "sentence": "Rather than providing a simplistic explanation, the sociologist offered a _______ argument that accounted for the _______ network of economic and cultural pressures shaping modern urban migrations.",
      "options": [
        "A) nuanced ... byzantine",
        "B) byzantine ... nuanced",
        "C) dogmatic ... superficial",
        "D) candid ... obsolete"
      ],
      "answer": "A",
      "explanation": "Basit anlatımın aksine ince ayrıntıları içeren ('nuanced') bir analiz yapılmış ve karmaşık bürokratik ('byzantine') ağ açıklanmıştır."
    }
  },
  {
    "day": 27,
    "title": "Day 27: Certainty, Proof & Inevitability",
    "words": [
      {
        "word": "Incontrovertible",
        "pos": "adj",
        "en": "Not able to be denied or disputed; indisputable",
        "tr": "Tartışmasız, reddedilemez, kesin",
        "ex": "Genetic profiling provided incontrovertible evidence identifying the rightful heir.",
        "mnemonic": "In- (olumsuz) + controversy (tartışma) -> karşı çıkılamaz gerçek."
      },
      {
        "word": "Ineluctable",
        "pos": "adj",
        "en": "Unable to be resisted or avoided; inescapable",
        "tr": "Kaçınılmaz, önüne geçilemez",
        "ex": "Aging and cellular senescence remain an ineluctable reality of multicellular biology.",
        "mnemonic": "Ineluctable -> 'Elinden kaçılamayan' zorunluluk."
      },
      {
        "word": "Contingent",
        "pos": "adj",
        "en": "Subject to chance; dependent on something else that might or might not happen",
        "tr": "Şarta bağlı, tesadüfi, bağımlı",
        "ex": "Approval of the commercial loan was strictly contingent on a clean environmental soil audit.",
        "mnemonic": "Contingent -> 'Continue on Condition' (şarta bağlı olarak ilerleyen)."
      },
      {
        "word": "Provisional",
        "pos": "adj",
        "en": "Arranged or existing for the present, possibly to be changed later; tentative",
        "tr": "Geçici, nihai olmayan, şartlı",
        "ex": "The election council declared a provisional winner pending the manual recount of mail-in ballots.",
        "mnemonic": "Provisional -> son hali kesinleşene kadar 'geçici' tutulan."
      }
    ],
    "quiz": {
      "sentence": "Although the physical fossil evidence is _______ and definitively proves the species existed, any reconstruction of its soft tissue coloration must remain entirely _______.",
      "options": [
        "A) incontrovertible ... provisional",
        "B) provisional ... incontrovertible",
        "C) tenuous ... unassailable",
        "D) dogmatic ... immutable"
      ],
      "answer": "A",
      "explanation": "'Although' yapısı: Kemik kanıtı tartışmasız ('incontrovertible') ve kesin iken, renk tahmini şimdilik geçici ('provisional') olmak zorundadır."
    }
  },
  {
    "day": 28,
    "title": "Day 28: Boldness, Courage & Timidity",
    "words": [
      {
        "word": "Audacious",
        "pos": "adj",
        "en": "Showing a willingness to take surprisingly bold risks; daring",
        "tr": "Cüretkar, gözü pek, cesur",
        "ex": "The architectural firm proposed an audacious design featuring a cantilevered pool over the city skyline.",
        "mnemonic": "Audacious -> 'O cesur' (audacity sahibi)."
      },
      {
        "word": "Intrepid",
        "pos": "adj",
        "en": "Fearless; adventurous (often used for humorous effect)",
        "tr": "Yılmayan, korkusuz, cesur",
        "ex": "The intrepid polar explorers trekked across Antarctic pack ice in sub-zero whiteout blizzards.",
        "mnemonic": "In- (olumsuz) + trepidation (korku/kaygı) -> hiç korkmayan."
      },
      {
        "word": "Timorous",
        "pos": "adj",
        "en": "Showing or suffering from nervousness or a lack of confidence",
        "tr": "Ürkek, çekingen, korkak",
        "ex": "The timorous junior clerk hesitated for ten minutes before knocking on the director’s door.",
        "mnemonic": "Timorous -> 'Timid' (ürkek) kelimesinin edebî hali."
      },
      {
        "word": "Diffident",
        "pos": "adj",
        "en": "Modest or shy because of a lack of self-confidence",
        "tr": "Çekingen, kendine güveni az, mahcup",
        "ex": "Despite her brilliant intellectual insights, she remained diffident in large conference panels.",
        "mnemonic": "Diffident -> 'Fiducia' (özgüven) eksikliğinden utangaç kalan."
      }
    ],
    "quiz": {
      "sentence": "While her colleagues took a cautious and _______ stance during the corporate audit, the junior accountant made an _______ move by presenting the hidden discrepancies directly to the board.",
      "options": [
        "A) timorous ... audacious",
        "B) audacious ... timorous",
        "C) fastidious ... tenacious",
        "D) polemical ... lucid"
      ],
      "answer": "A",
      "explanation": "Meslektaşları çekingen/korkak ('timorous') bir tavır takınırken, genç muhasebeci cesur ve cüretkar ('audacious') bir hamle yapmıştır."
    }
  },
  {
    "day": 29,
    "title": "Day 29: Scholarly Intellect, Pedantry & Esotericism",
    "words": [
      {
        "word": "Erudite",
        "pos": "adj",
        "en": "Having or showing great knowledge or learning; scholarly",
        "tr": "Bilge, çok okumuş, derin ilim sahibi",
        "ex": "The professor’s erudite lecture cited primary medieval texts in both Latin and Old Norse.",
        "mnemonic": "Erudite -> 'Erozyona uğramayan bilgi hazinesi'."
      },
      {
        "word": "Pedantic",
        "pos": "adj",
        "en": "Excessively concerned with minor details or rules; overly scholarly",
        "tr": "Aşırı kuralcı, lüzumsuz ayrıntıya takılan, ukala",
        "ex": "Her pedantic insistence on correcting minor typographical errors derailed the broad strategy discussion.",
        "mnemonic": "Pedantic -> 'Pedal çevirir gibi kuralları tek tek sayan' dar bakışlı."
      },
      {
        "word": "Esoteric",
        "pos": "adj",
        "en": "Intended for or likely to be understood by only a small number of people with a specialized knowledge",
        "tr": "Sadece uzmanların anlayabileceği, ezoterik",
        "ex": "The seminar explored esoteric algorithms for quantum error correction.",
        "mnemonic": "Esoteric -> 'Ender zekaların' anladığı gizemli bilgi."
      },
      {
        "word": "Arcane",
        "pos": "adj",
        "en": "Understood by few; mysterious or secret",
        "tr": "Gizemli, sır dolu, anlaşılması zor",
        "ex": "Ancient alchemical manuscripts were written in arcane symbols to prevent unauthorized replication.",
        "mnemonic": "Arcane -> 'Arka odanın sırrı' gibi herkese kapalı bilgi."
      }
    ],
    "quiz": {
      "sentence": "Rather than becoming bogged down in _______ debates over minor grammatical punctuation, the symposium keynote delivered an _______ overview of classical philosophy that inspired the entire audience.",
      "options": [
        "A) pedantic ... erudite",
        "B) erudite ... pedantic",
        "C) dogmatic ... opaque",
        "D) candid ... tenuous"
      ],
      "answer": "A",
      "explanation": "Ayrıntıya takılan ukalaca ('pedantic') tartışmalar yerine, salondakilere ilham veren engin bilgili ve bilgece ('erudite') bir sunum yapılmıştır."
    }
  },
  {
    "day": 30,
    "title": "Day 30: Grandeur, Mastery & The Apex",
    "words": [
      {
        "word": "Sublime",
        "pos": "adj",
        "en": "Of such excellence, grandeur, or beauty as to inspire great admiration or awe",
        "tr": "Yüce, hayranlık uyandıran, muhteşem",
        "ex": "The alpine view from the mountain summit was a sublime spectacle of light and granite.",
        "mnemonic": "Sublime -> 'Süblim' (ulaşılabilecek en üstün seviye)."
      },
      {
        "word": "Quintessential",
        "pos": "adj",
        "en": "Representing the most perfect or typical example of a quality or class",
        "tr": "Tam anlamıyla mükemmel bir örnek teşkil eden, tipik",
        "ex": "Her calm composure during the crisis made her the quintessential model of effective leadership.",
        "mnemonic": "Quint-essence -> işin 'beşinci özü', yani saf prototipi."
      },
      {
        "word": "Paradigm",
        "pos": "noun",
        "en": "A typical example or pattern of something; a model or world-view",
        "tr": "Paradigma, temel model, dünya görüşü",
        "ex": "The discovery of plate tectonics created a complete paradigm shift in the geosciences.",
        "mnemonic": "Paradigm -> bilimin düşünce kalıbı."
      },
      {
        "word": "Apex",
        "pos": "noun",
        "en": "The top or highest part of something, especially one forming a point; peak",
        "tr": "Zirve, doruk noktası",
        "ex": "Winning the Nobel Prize marked the absolute apex of her illustrious research career.",
        "mnemonic": "Apex -> en tepedeki sivri zirve noktası."
      }
    ],
    "quiz": {
      "sentence": "The publication of the groundbreaking treaty represented the _______ of the diplomat's career, establishing her as the _______ statesman of her generation.",
      "options": [
        "A) apex ... quintessential",
        "B) paucity ... dogmatic",
        "C) dearth ... polemical",
        "D) anachronism ... transient"
      ],
      "answer": "A",
      "explanation": "Çığır açan anlaşma kariyerin zirvesini ('apex') simgeler ve onu kuşağının kusursuz prototipi ('quintessential') olan devlet insanı konumuna getirir."
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
