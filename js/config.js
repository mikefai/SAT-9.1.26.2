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
  "e": "Toggle Answer Elimination Mode",
  "Enter": "Next Step / Submit Answer",
  "Escape": "Close Modal / Drawer"
};

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

