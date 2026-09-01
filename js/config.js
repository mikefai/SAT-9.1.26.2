/**
 * SAT READING SKILLS ACADEMY - Configuration & Constants
 * Fully offline-capable, zero external dependencies.
 */

const CONFIG = {
  APP_TITLE: "SAT Reading Skills Academy",
  SUBTITLE: "Master the Metacognition Behind Digital SAT Reading",
  TARGET_EXAM: "Digital SAT Reading & Writing (Reading Question Types)",
  STUDENT_LEVEL: "B1–B2 ESL & SAT Aspirants",
  ESL_SUPPORT_DEFAULT: true,
  THEME_DEFAULT: "dark",
  STORAGE_KEY: "sat_reading_academy_v1",
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
 * Module Registry & Metadata
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
    icon: "🔍",
    subtitle: "Using context clues, tone markers, and secondary meanings",
    methodName: "The BLANK Method",
    stagesCount: 6
  },
  {
    id: "MOD-2",
    slug: "text-structure-purpose",
    number: 2,
    title: "Text Structure & Purpose",
    domain: "Craft & Structure",
    domainTag: "Craft & Structure",
    estimatedMinutes: 25,
    icon: "🏗️",
    subtitle: "Identifying HOW a passage is structured and WHY the author wrote it",
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
    icon: "🔗",
    subtitle: "Comparing dual perspectives, finding common ground, and predicting author rebuttals",
    methodName: "The Venn Bridge Protocol",
    stagesCount: 6
  },
  {
    id: "MOD-4",
    slug: "central-ideas-details",
    number: 4,
    title: "Central Ideas & Details",
    domain: "Information & Ideas",
    domainTag: "Information & Ideas",
    estimatedMinutes: 25,
    icon: "🎯",
    subtitle: "Distinguishing the overarching thesis from supporting evidence and scope traps",
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
    domainTag: "Logic & Flow",
    icon: "🔄",
    subtitle: "Contrast, causation, elaboration, and illustrative transitional adverbs",
    estimatedMinutes: 25
  }
];

/**
 * =========================================================================
 * 30-DAY DAILY VOCABULARY & DRILLS CURRICULUM
 * Structured spaced-repetition sets for SAT Mastery
 * =========================================================================
 */
const DAILY_VOCAB_SETS = [
  {
    day: 1,
    theme: "Pivots & Contrast (Zıtlık & Değişim)",
    words: [
      { word: "Alleviate", pos: "verb", tr: "Hafifletmek, dindirmek", en: "Make pain or problem less severe", ex: "The new bypass highway helped alleviate heavy suburban traffic congestion.", mnemonic: "Alleviate = 'Relieve' gibi rahatlatır." },
      { word: "Compound", pos: "verb", tr: "Kötüleştirmek, katlamak", en: "Make a problem worse by adding to it", ex: "Delaying maintenance will only compound structural damage to the bridge.", mnemonic: "Compound interest katlandığı gibi, problem de katlanır." },
      { word: "Mitigate", pos: "verb", tr: "Hafifletmek, etkisini azaltmak", en: "Make less severe or harmful", ex: "Planting mangroves along the coast mitigates destructive storm surges.", mnemonic: "Mitigate = Milder (daha ılımlı) hale getirmek." },
      { word: "Exacerbate", pos: "verb", tr: "Alevlendirmek, daha da bozmak", en: "Make a negative situation worse", ex: "High interest rates exacerbated the company's financial distress.", mnemonic: "Exacerbate = 'Extra bad' yapmak." }
    ],
    quiz: {
      question: "Which word best completes: 'The government introduced subsidies to _______ the rising cost of winter heating for low-income families'?",
      options: ["A) exacerbate", "B) alleviate", "C) compound", "D) fabricate"],
      answer: "B",
      explanation: "Subsidies are meant to relieve or lessen financial burdens, requiring 'alleviate'."
    }
  },
  {
    day: 2,
    theme: "Academic Precision & Claims (İddia & Sınırlandırma)",
    words: [
      { word: "Qualify", pos: "verb", tr: "Sınırlandırmak, şart koymak", en: "To limit or moderate a broad assertion", ex: "The researcher qualified her conclusion by noting the small sample size.", mnemonic: "SAT'de 'diploma almak' değil, iddiayı daraltmaktır." },
      { word: "Substantiate", pos: "verb", tr: "Somut kanıtla ispatlamak", en: "Provide evidence to prove truth", ex: "Without archival records, the historian could not substantiate the claim.", mnemonic: "Substance (somut madde/kanıt) katmak." },
      { word: "Corroborate", pos: "verb", tr: "Teyit etmek, doğrulamak", en: "Confirm or support a finding", ex: "Independent satellite data corroborated the deforestation report.", mnemonic: "Co-operate gibi, iki delil birbirini onaylar." },
      { word: "Undermine", pos: "verb", tr: "Baltalamak, zayıflatmak", en: "Weaken the foundation of a claim", ex: "The leaked documents completely undermined the minister's credibility.", mnemonic: "Altını (under) kazıp (mine) binayı çökertmek." }
    ],
    quiz: {
      question: "Which word best completes: 'Dr. Santos published new fossil radiometric dates that _______ the revised timeline for early hominid migration'?",
      options: ["A) undermined", "B) corroborated", "C) eradicated", "D) eclipsed"],
      answer: "B",
      explanation: "The dates confirmed and supported the timeline, which means they 'corroborated' it."
    }
  },
  {
    day: 3,
    theme: "Clarity & Tone (Üslup & Açıklık)",
    words: [
      { word: "Lucid", pos: "adj", tr: "Açık, net, kolay anlaşılır", en: "Expressed clearly; easy to comprehend", ex: "Her lucid explanation made quantum mechanics accessible to novices.", mnemonic: "Luz (ışık) gibi aydınlık ve berrak." },
      { word: "Equivocal", pos: "adj", tr: "Muğlak, iki anlamlı, belirsiz", en: "Open to more than one interpretation", ex: "The diplomat's equivocal response left both nations uncertain of treaty terms.", mnemonic: "Equal voices = iki tarafı da ima eden belirsizlik." },
      { word: "Unflappable", pos: "adj", tr: "Soğukkanlı, sarsılmaz", en: "Showing marked composure in crisis", ex: "The flight captain remained unflappable during severe engine turbulence.", mnemonic: "Kanat çırpıp (flap) telaşlanmayan sarsılmaz kişi." },
      { word: "Indefatigable", pos: "adj", tr: "Yorulmak bilmez, azimli", en: "Persisting tirelessly without fatigue", ex: "The indefatigable activist spent fifty years organizing labor unions.", mnemonic: "Fatigue (yorgunluk) nedir bilmeyen." }
    ],
    quiz: {
      question: "Which word best completes: 'Despite the chaotic press conference, the spokesperson maintained an _______ demeanor and answered every aggressive question calmly'?",
      options: ["A) equivocal", "B) unflappable", "C) volatile", "D) obsolete"],
      answer: "B",
      explanation: "Remaining calm in a chaotic situation means being 'unflappable'."
    }
  },
  {
    day: 4,
    theme: "Change & Innovation (Yenilik & Dönüşüm)",
    words: [
      { word: "Augment", pos: "verb", tr: "Artırmak, çoğaltmak", en: "Make greater by adding to it", ex: "The museum augmented its collection with twenty rare Renaissance drawings.", mnemonic: "August (yüce) gibi büyütmek/artırmak." },
      { word: "Curtail", pos: "verb", tr: "Kısmak, sınırlandırmak", en: "Reduce in extent or impose limits", ex: "Budget deficits forced the city council to curtail public library hours.", mnemonic: "Kuyruğunu kesip (cut tail) kısaltmak." },
      { word: "Novel", pos: "adj", tr: "Özgün, daha önce görülmemiş yeni", en: "Strikingly new or unusual", ex: "The startup proposed a novel method for recycling ocean microplastics.", mnemonic: "Roman değil, sıfat olarak yepyeni orijinal fikir." },
      { word: "Obsolete", pos: "adj", tr: "Modası geçmiş, köhnemiş", en: "No longer produced or used", ex: "Cloud storage has rendered floppy disks completely obsolete.", mnemonic: "Eski eşyalar gibi miadı dolmuş." }
    ],
    quiz: {
      question: "Which word best completes: 'Rising material costs forced the aerospace contractor to _______ production on the experimental supersonic jet'?",
      options: ["A) augment", "B) curtail", "C) celebrate", "D) replicate"],
      answer: "B",
      explanation: "Rising costs force a reduction or limitation in production, requiring 'curtail'."
    }
  },
  {
    day: 5,
    theme: "Investigation & Analysis (İnceleme & Delil)",
    words: [
      { word: "Scrutinize", pos: "verb", tr: "Kılı kırk yarmak, didik didik incelemek", en: "Examine or inspect with great care", ex: "Tax auditors scrutinized five years of corporate accounting ledgers.", mnemonic: "Büyüteçle kılı kırk yaran dedektif gibi." },
      { word: "Speculative", pos: "adj", tr: "Spekülatif, kanıtsız tahmine dayalı", en: "Based on conjecture rather than knowledge", ex: "Without physical artifact proof, the lost city theory remains purely speculative.", mnemonic: "Spekülasyon = kanıtsız tahmin." },
      { word: "Elucidate", pos: "verb", tr: "Açıklığa kavuşturmak, izah etmek", en: "Make clear and explain thoroughly", ex: "The chemist's diagrams elucidated the multi-step enzymatic reaction.", mnemonic: "Lucid (ışık tutarak) izah etmek." },
      { word: "Disparate", pos: "adj", tr: "Tamamen farklı, bağdaşmaz", en: "Fundamentally distinct or incongruous", ex: "The study combined disparate datasets from genomics, geology, and linguistics.", mnemonic: "Dis (ayrı) + par (denklik yok)." }
    ],
    quiz: {
      question: "Which word best completes: 'The biography was praised for its ability to _______ the complex political motives behind the 1848 revolutions'?",
      options: ["A) elucidate", "B) eradicate", "C) impede", "D) compromise"],
      answer: "A",
      explanation: "Explaining and clarifying complex motives means to 'elucidate' them."
    }
  }
];


/**
 * =========================================================================
 * TURKISH SAT VOCABULARY VAULT & STRATEGY GUIDE (🇹🇷 TÜRKÇE REHBER)
 * Specially designed for Turkish students preparing for the Digital SAT.
 * =========================================================================
 */
const TURKISH_SAT_VOCAB_VAULT = {
  top100Vocab: [
    { word: "Alleviate", pos: "verb", tr: "Hafifletmek, dindirmek, yatıştırmak", en: "Make pain, suffering, or problem less severe", satTip: "SAT'de 'traffic congestion' veya 'environmental stress' durumlarını azaltmak için sıkça kullanılır." },
    { word: "Augment", pos: "verb", tr: "Artırmak, çoğaltmak, büyütmek", en: "Make something greater by adding to it", satTip: "Verimlilik (productivity) veya kapasite artışlarında doğru yanıttır." },
    { word: "Bolster", pos: "verb", tr: "Desteklemek, güçlendirmek, pekiştirmek", en: "Support or strengthen an argument or structure", satTip: "Bir hipotezi veya iddiayı destekleyen kanıt sorularında anahtar kelimedir." },
    { word: "Compound", pos: "verb", tr: "Kötüleştirmek, katlamak, durumu vahimleştirmek", en: "Make a problem worse by adding to it", satTip: "Kimyadaki 'bileşik' anlamının dışında, fiil olarak 'sorunu katlamak' demektir." },
    { word: "Corroborate", pos: "verb", tr: "Doğrulamak, teyit etmek, delillerle desteklemek", en: "Confirm or give support to a statement or theory", satTip: "Deney sonuçlarının bir teoriyi onaylaması durumlarında test edilir." },
    { word: "Curtail", pos: "verb", tr: "Kısmak, sınırlandırmak, azaltmak", en: "Reduce in extent or quantity; impose a restriction on", satTip: "Bütçe, harcama veya serbest hareket kısıtlamalarında kullanılır." },
    { word: "Defer", pos: "verb", tr: "Ertelemek, sonraya bırakmak; (to) boyun eğmek", en: "Put off to a later time; yield respectfully", satTip: "'Defer to' bir uzmanın görüşüne saygıyla teslim olmak demektir." },
    { word: "Delineate", pos: "verb", tr: "Ayrıntılarıyla betimlemek, sınırlarını çizmek", en: "Describe, outline, or portray precisely", satTip: "Metin yapısı sorularında yazarın metodunu anlatırken çıkar." },
    { word: "Disparate", pos: "adj", tr: "Tamamen farklı, birbiriyle bağdaşmaz", en: "Essentially different in kind; not allowing comparison", satTip: "Farklı disiplin veya veri setlerinin bir araya gelişini açıklar." },
    { word: "Disseminate", pos: "verb", tr: "Yaymak, dağıtmak (bilgi, fikir, tohum)", en: "Spread something (especially information) widely", satTip: "Bilimsel bulguların veya kültürel fikirlerin toplumda yayılması." },
    { word: "Elucidate", pos: "verb", tr: "Açıklığa kavuşturmak, izah etmek", en: "Make something clear; explain in detail", satTip: "Karmaşık bir mekanizmanın çözülmesini anlatır." },
    { word: "Equivocal", pos: "adj", tr: "Muğlak, iki anlama gelebilen, belirsiz", en: "Open to more than one interpretation; ambiguous", satTip: "'Unequivocal' ise kesin/net demektir; aralarındaki zıtlığa dikkat edin." },
    { word: "Exacerbate", pos: "verb", tr: "Alevlendirmek, daha da kötüleştirmek", en: "Make a problem, bad situation, or negative feeling worse", satTip: "İklim krizi veya ekonomik krizlerin derinleşmesinde geçer." },
    { word: "Impede", pos: "verb", tr: "Engellemek, köstek olmak, geciktirmek", en: "Delay or prevent someone or something by obstructing", satTip: "Gelişimi yavaşlatan faktörleri ifade eder." },
    { word: "Indefatigable", pos: "adj", tr: "Yorulmak bilmez, azimli, tükenmez", en: "Persisting tirelessly without fatigue", satTip: "Tarihi liderlerin veya araştırmacıların gayretini överken kullanılır." },
    { word: "Inherent", pos: "adj", tr: "Doğasında olan, içkin, özünde bulunan", en: "Existing in something as a permanent or essential attribute", satTip: "Biyolojik veya yapısal özellikleri tanımlar." },
    { word: "Lucid", pos: "adj", tr: "Açık, net, kolay anlaşılır; berrak", en: "Expressed clearly; easy to understand", satTip: "Yazarın üslubunu veya açıklamalarını niteler." },
    { word: "Mitigate", pos: "verb", tr: "Hafifletmek, etkisini azaltmak, yatıştırmak", en: "Make less severe, serious, or painful", satTip: "Zararlı etkilerin azaltılması (risk mitigation) bağlamında gelir." },
    { word: "Pervasive", pos: "adj", tr: "Her yere yayılan, sinen, yaygın", en: "Spreading widely throughout an area or group", satTip: "Kültürel bir inancın veya etkinin yaygınlığını belirtir." },
    { word: "Plausible", pos: "adj", tr: "Akla yatkın, makul, olası", en: "Seeming reasonable or probable", satTip: "Bilimsel hipotezlerin akla yatkınlığını niteler." },
    { word: "Pragmatic", pos: "adj", tr: "Uygulamacı, faydacı, pratik şartlara göre hareket eden", en: "Dealing with things sensibly and realistically", satTip: "İdealist teoriler yerine somut koşullara odaklanan yaklaşımlar." },
    { word: "Preclude", pos: "verb", tr: "Önceden engellemek, imkansız kılmak", en: "Prevent from happening; make impossible", satTip: "Bir durumun diğer olasılıkları devre dışı bırakması." },
    { word: "Qualify", pos: "verb (ikincil)", tr: "Sınırlandırmak, şart/kayıt koşmak, ılımlılaştırmak", en: "To limit, modify, or restrict a claim (academic meaning)", satTip: "🚨 DİKKAT: 'Nitelikli/kalifiye olmak' değil, bir iddiaya sınır koymaktır!" },
    { word: "Reconcile", pos: "verb", tr: "Uzlaştırmak, aralarındaki çelişkiyi gidermek", en: "Restore friendly relations; make consistent", satTip: "Çatışan iki teoriyi tek modelde birleştirmek." },
    { word: "Repudiate", pos: "verb", tr: "Reddetmek, tanımamak, inkar etmek", en: "Refuse to accept or be associated with", satTip: "Eski bir teoriyi veya geleneği kesin bir dille reddetmek." },
    { word: "Scrutinize", pos: "verb", tr: "Kılı kırk yarmak, didik didik incelemek", en: "Examine or inspect closely and thoroughly", satTip: "Bilimsel verilerin titizlikle tetkik edilmesi." },
    { word: "Speculative", pos: "adj", tr: "Spekülatif, tahmini, kanıtlanmamış varsayıma dayalı", en: "Engaged in, expressing, or based on conjecture", satTip: "Ampirik kanıtı olmayan saf teorik modelleri anlatır." },
    { word: "Substantiate", pos: "verb", tr: "Somut kanıtlarla doğrulamak/ispatlamak", en: "Provide evidence to support or prove the truth of", satTip: "Command of Evidence sorularında 'delillendirmek' anlamında çıkar." },
    { word: "Tenuous", pos: "adj", tr: "Çok zayıf, iğreti, pamuk ipliğine bağlı", en: "Very weak or slight; insubstantial", satTip: "Zayıf hipotezler veya yetersiz bağlantılar için kullanılır." },
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
      stemEn: "As used in the text, what does the word [X] most nearly mean?",
      stemTr: "Metindeki kullanımıyla [X] sözcüğü en yakın hangi anlama gelmektedir?",
      strategyTr: "Şıklara bakmadan önce kelimenin üzerini kapatın (BLANK). Cümledeki ipuçlarından basit bir eşanlamlı tahmin edin, ardından şıklarla eşleştirin."
    }
  ]
};

