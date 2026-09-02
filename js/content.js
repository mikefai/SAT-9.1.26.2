/**
 * SAT READING SKILLS ACADEMY - Content Repository
 * Enriched with Digital SAT Reading & Writing Curriculum, Grammar Academy Modules,
 * Turkish Scaffolds, Bilingual Glosses, Metacognitive Heuristics, and Deep Explanations.
 */

const ACADEMY_CONTENT = {
  "MOD-0": {
    "metadata": {
      "id": "MOD-0",
      "title": "Reading Like the SAT Wants",
      "domain": "Foundations",
      "methodName": "The ACTIVE Framework",
      "tagline": "Stop reading for pure interest; start reading for structural logic, pivots, and boundary traps."
    },
    "stage1_skill": {
      "title": "What Does the SAT Actually Test?",
      "whatItTests": "The Digital SAT Reading section is not a test of speed-reading or personal interpretation. It is a standardized logic test dressed up as a reading comprehension exam. Every question has exactly one 100% indisputably defensible answer and three objectively flawed distractors.",
      "frequency": "Foundational to ALL 27-29 reading questions per module on test day.",
      "recognitionTest": "Whenever you read ANY passage on the Digital SAT, look for: (1) Main claim vs. supporting data, (2) Pivot transitions (however, yet, nonetheless), (3) Nuance qualifiers (some, may, partially vs. always, completely).",
      "goldenRules": [
        {
          "title": "The Literal Truth Rule",
          "description": "If an option cannot be proven by 3–5 exact words in the text, it is wrong. Never infer outside the four corners of the passage."
        },
        {
          "title": "The Pivot Priority Principle",
          "description": "Authors spend 80% of their words setting up context and 20% delivering their true thesis immediately after pivot words (however, yet, nonetheless)."
        },
        {
          "title": "The Modesty Preference",
          "description": "Academic authors qualify their claims (e.g., 'suggests a correlation', 'may indicate'). The SAT rewards cautious, modest language."
        },
        {
          "title": "The 100% Correct Mandate",
          "description": "An answer that is 99% true and 1% inaccurate is 100% wrong. One single extreme word invalidates the entire choice."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "20",
            "action": "Anchor & Skim",
            "detail": "Identify topic noun + locate pivot transitions"
          },
          {
            "seconds": "15",
            "action": "Form Prediction",
            "detail": "Draft your own simple 3-word answer before peeking"
          },
          {
            "seconds": "35",
            "action": "Eliminate Traps",
            "detail": "Cross out Extreme, Opposite, and Out-of-Scope options"
          },
          {
            "seconds": "15",
            "action": "Verify Anchor",
            "detail": "Confirm your chosen answer directly matches passage text"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The 'Sounds Intelligent' Trap",
          "explanation": "Picking a choice because it uses impressive academic vocabulary or states a true real-world scientific fact that was never mentioned in the text."
        },
        {
          "name": "The Confirmation Bias Leap",
          "explanation": "Connecting two unrelated sentences in the passage using your own outside common sense rather than what the text explicitly states."
        }
      ],
      "eslNote": "For non-native English speakers: Look out for 'qualifier words' (partially, tends to, plausible). Traps rely on bold absolute words (invariably, completely, impossible) that sound convincing in everyday speech but fail formal logic.",
      "turkishScaffold": {
        "title": "🇹🇷 Türk Öğrenciler İçin Temel Sınav & Kelime Stratejisi",
        "strategyNote": "Digital SAT Reading bir genel kültür veya hızlı okuma sınavı değildir; formel mantık sınavıdır. Türkçe düşünürken yapılan en büyük hata, parçadaki iki ayrı cümleyi kendi mantığımızla birleştirip aşırı yorum (over-interpretation) yapmaktır. SAT'de yazarın doğrudan yazmadığı hiçbir şey doğru cevap olamaz.",
        "falseFriends": [
          {
            "word": "Assume",
            "wrongConcept": "Görevi üstlenmek / Kabul etmek",
            "correctConcept": "Varsaymak, kanıtsız kabul etmek"
          },
          {
            "word": "Challenge",
            "wrongConcept": "Meydan okumak (kavga)",
            "correctConcept": "Bir teorinin doğruluğunu sorgulamak/itiraz etmek"
          }
        ],
        "keyVocab": [
          {
            "word": "Orthodoxy",
            "pos": "noun",
            "tr": "Yerleşik/geleneksel kabul görmüş öğreti veya inanç"
          },
          {
            "word": "Preclude",
            "pos": "verb",
            "tr": "Önceden engellemek, imkansız kılmak"
          },
          {
            "word": "Pragmatic",
            "pos": "adj",
            "tr": "Pratik, faydacı, gerçekçi şartlara göre hareket eden"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The ACTIVE Framework",
      "summary": "5 core cognitive moves every top 1% SAT reader makes automatically.",
      "examFormula": "Passage = [Traditional View / Context] + [Pivot Transition (However/Yet)] + [Author's Qualified Stance] + [Supporting Data]",
      "steps": [
        {
          "num": 1,
          "title": "Anchor the Core Topic",
          "rule": "Identify the primary subject noun within the first 10 words.",
          "expertMove": "I ask: 'Who or what is this text about?' and strip away distracting introductory clauses."
        },
        {
          "num": 2,
          "title": "Catch the Pivot Word",
          "rule": "Highlight words like 'however', 'conversely', 'despite this', or 'in contrast'.",
          "expertMove": "The sentence IMMEDIATELY following a pivot word almost always contains the author's true stance."
        },
        {
          "num": 3,
          "title": "Separate Claim from Evidence",
          "rule": "Distinguish an argument/thesis from the experiment/data used to back it up.",
          "expertMove": "If an option discusses specific numbers or sample sizes, I check if the question asked for the big claim instead."
        },
        {
          "num": 4,
          "title": "Track Author Polarity",
          "rule": "Assign a mental (+) positive, (-) negative, or (~) neutral badge to the tone.",
          "expertMove": "If an author expresses cautious praise (+), I immediately eliminate scathing criticisms (-) and unconditional worship (++)."
        },
        {
          "num": 5,
          "title": "Veto Extreme Distractors",
          "rule": "Eliminate choices with words like 'all', 'never', 'wholly impossible', or 'uniquely'.",
          "expertMove": "I treat absolute statements as guilty until proven innocent by explicit passage text."
        }
      ],
      "checklist": [
        "Did I locate the pivot word (however, yet, conversely)?",
        "Does my answer match the author's polarity (+/-)?",
        "Did I eliminate any choices with extreme words (all, never, exclusively)?",
        "Can I point to 3 specific words in the text that justify my selection?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "FND-W-01",
        "type": "foundation",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "When a passage opens with 'Many scientists assumed X. However, recent findings Y...', the main structure is always a transition from an established belief to a new challenging discovery.",
        "passage": "Many paleontologists long assumed that tyrannosaurids were solitary hunters that rarely tolerated rivals in their territory. However, the recent discovery of multiple *Albertosaurus* fossils preserved together in a single quarry in Alberta, Canada, has challenged this orthodoxy. Because the individuals were buried simultaneously in a single geological event, researchers suggest that these apex predators may have engaged in cooperative pack hunting to bring down large ceratopsian prey.",
        "question": "Which choice best describes the main shift in the passage?",
        "choices": [
          "A) It establishes an undisputed fact about prehistoric ecosystems and then describes how modern predators mimic that behavior.",
          "B) It outlines a traditional scientific assumption and then introduces evidence that calls it into question.",
          "C) It proves conclusively that all tyrannosaurids hunted in massive packs throughout their evolutionary history.",
          "D) It compares the hunting efficiency of *Albertosaurus* to that of contemporary mammalian apex carnivores."
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Scan the Anchor & Opening Frame): Sentence 1 opens with 'Many paleontologists long assumed...' This signals a past belief, not an immutable fact.",
          "Step 2 (Catch the Major Structural Pivot): Sentence 2 hits the pivot: 'However, the recent discovery... has challenged this orthodoxy.' The text is pivoting from old belief to new challenge.",
          "Step 3 (Analyze the Supporting Evidence): Sentence 3 explains the new discovery: multiple fossils buried together in one event, suggesting pack hunting.",
          "Step 4 (Formulate Independent Prediction): The passage moves from [an old scientific assumption] to [new fossil evidence that challenges it].",
          "Step 5 (Evaluate Choices Against Prediction): Choice B is a direct, 1-to-1 match for my prediction.",
          "Step 6 (Distractor Autopsy): Choice A introduces 'modern predators' (Out of Scope). Choice C uses extreme words 'proves conclusively' and 'all tyrannosaurids' (Too Extreme). Choice D mentions 'mammalian carnivores' (Out of Scope)."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B accurately captures the two-part rhetorical blueprint signaled by 'However': the first sentence introduces a traditional assumption ('long assumed'), and the subsequent sentences present quarry findings that challenge that belief ('challenged this orthodoxy').",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: The text never mentions modern predators mimicking dinosaur behavior; it focuses strictly on prehistoric Albertosaurus fossils.",
            "B": "Correct Answer: Perfectly maps the structural shift from a traditional assumption to new challenging evidence.",
            "C": "Too Extreme Trap: The passage states researchers 'suggest' they 'may have' hunted in packs; it does not 'prove conclusively' that 'all' tyrannosaurids did so.",
            "D": "Out of Scope Trap: Modern mammalian carnivores (such as lions or wolves) are never mentioned or compared in the text."
          },
          "keyTakeaway": "On Digital SAT structural questions, look for structural marker words like 'assumed' followed by 'however'. The correct answer will always reflect a shift from prior belief to new evidence."
        },
        "glosses": {
          "solitary": "(adj.) living, hunting, or existing alone rather than in a social group • 🇹🇷 Yalnız yaşayan, münferit, tek başına avlanan",
          "orthodoxy": "(noun) a traditionally accepted belief, theory, or standard practice • 🇹🇷 Yerleşik inanç, geleneksel kabul görmüş öğreti",
          "apex predators": "(noun phrase) carnivores at the top of a food chain upon which no other creatures prey • 🇹🇷 Besin zincirinin en tepesindeki avcılar",
          "ceratopsian": "(noun) a group of beaked, horned herbivorous dinosaurs • 🇹🇷 Boynuzlu otçul dinozor türü"
        }
      },
      {
        "id": "FND-W-02",
        "type": "foundation",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "On perspective questions involving multiple scholars, always separate the subject of the question stem (e.g., Higginbotham) from other voices (e.g., modern critics).",
        "passage": "Historian Evelyn Brooks Higginbotham coined the term 'politics of respectability' to describe how early twentieth-century African American women navigated racial subjugation. By adhering strictly to middle-class behavioral norms, temperance, and educational attainment, these activists sought to counter prevailing racist stereotypes and claim moral citizenship. While critics today argue that this strategy conceded too much ground to bourgeois ideals, Higginbotham contends that within the oppressive constraints of the Jim Crow era, respectability politics served as an indispensable, subversive shield.",
        "question": "Based on the text, how would Higginbotham most likely characterize respectability politics as practiced in the early 20th century?",
        "choices": [
          "A) As a flawed campaign that ultimately reinforced the racist stereotypes it sought to overturn.",
          "B) As an infallible political philosophy that achieved complete legal parity for all African Americans.",
          "C) As a pragmatic and protective tactic adapted to an exceptionally restrictive historical environment.",
          "D) As an elite intellectual movement that was universally rejected by working-class Black communities."
        ],
        "answer": "C",
        "thinkAloud": [
          "Step 1 (Isolate the Question Subject): The stem asks specifically for Higginbotham's viewpoint, NOT the viewpoint of 'critics today'.",
          "Step 2 (Locate Higginbotham's Stance in the Text): The final clause states: 'Higginbotham contends that within the oppressive constraints... it served as an indispensable, subversive shield.'",
          "Step 3 (Decode Tone & Nuance): Higginbotham's view is positive/defensive (+). She sees it as necessary ('indispensable') and protective ('shield') given the severe limitations ('oppressive constraints').",
          "Step 4 (Formulate Prediction): Higginbotham views it as a necessary, protective strategy tailored to a hostile, oppressive era.",
          "Step 5 (Match with Choices): Choice C uses 'pragmatic and protective tactic adapted to an exceptionally restrictive historical environment'—a precise match for 'indispensable shield' within 'oppressive constraints'.",
          "Step 6 (Eliminate Wrong Choices): Choice A is the viewpoint of modern critics (Opposite/Attribution trap). Choice B uses extreme words 'infallible' and 'complete legal parity' (Too Extreme trap). Choice D claims it was 'universally rejected' (Out of Scope/Extreme trap)."
        ],
        "trapTypes": {
          "A": "Opposite",
          "B": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice C directly mirrors Higginbotham's claim in the final sentence: she argues that under 'oppressive constraints', respectability politics was an 'indispensable, subversive shield'—which translates directly to a pragmatic, protective tactic adapted to a restrictive environment.",
          "choiceBreakdown": {
            "A": "Opposite / Wrong Attribution Trap: This summarizes the viewpoint of modern critics ('conceded too much ground'), which Higginbotham explicitly pushes back against.",
            "B": "Too Extreme Trap: 'Infallible' (flawless) and 'achieved complete legal parity' are gross exaggerations not supported by the text.",
            "C": "Correct Answer: Accurately captures Higginbotham's nuanced assessment of the strategy as a protective shield within severe constraints.",
            "D": "Out of Scope / Extreme Trap: The passage never mentions working-class reception or claims the movement was 'universally rejected'."
          },
          "keyTakeaway": "When a passage presents a debate ('While critics argue X, scholar Y contends Z'), verify who the question is asking about. Distractors frequently quote the wrong debater."
        },
        "glosses": {
          "subjugation": "(noun) the act of bringing someone or a group under complete domination or control • 🇹🇷 Boyunduruk altına alma, tahakküm, baskı",
          "temperance": "(noun) abstinence from alcohol; moderation and self-restraint • 🇹🇷 Alkol karşıtlığı; ölçülülük ve nefis terbiyesi",
          "bourgeois": "(adj.) characteristic of the middle class; conforming to conventional social standards • 🇹🇷 Burjuva, orta sınıf değerlerine uygun",
          "subversive": "(adj.) seeking or intended to disrupt or undermine an established political system • 🇹🇷 Yıkıcı, yerleşik düzeni sarsan/altüst eden",
          "pragmatic": "(adj.) dealing with things sensibly and realistically based on practical conditions • 🇹🇷 Pratik, faydacı, gerçekçi şartlara göre hareket eden"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "FND-TRAP-01",
        "stem": "Text: 'Astronomers detected subtle fluctuations in the star's luminosity, leading some researchers to hypothesize the transit of an exoplanet.'",
        "wrongChoice": "The astronomers have provided undeniable proof that a habitable terrestrial planet orbits the star.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Opposite",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "'Undeniable proof' and 'habitable terrestrial planet' are severe exaggerations. The passage merely mentions 'subtle fluctuations' and researchers who 'hypothesize' an exoplanet."
      },
      {
        "id": "FND-TRAP-02",
        "stem": "Text: 'Although the author praised the poet's lyrical agility in her early stanzas, he ultimately lamented the disorganized thematic conclusion of the collection.'",
        "wrongChoice": "The author regarded the poetry collection as an unmitigated masterpiece of modern literature.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Too Extreme",
          "Half Right",
          "Wrong Meaning"
        ],
        "rationale": "The passage notes that the author 'lamented the disorganized thematic conclusion'. Calling it an 'unmitigated masterpiece' flips the author's final negative evaluation to a purely positive one."
      },
      {
        "id": "FND-TRAP-03",
        "stem": "Text: 'The study tracked 400 bumblebees across urban gardens and noted that bees exposed to floral diversity collected 15% more pollen than those in monoculture lawns.'",
        "wrongChoice": "Urban gardens are superior to all natural forests for preserving pollinator biodiversity worldwide.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Too Extreme",
          "Half Right",
          "Misused Evidence"
        ],
        "rationale": "Natural forests and worldwide biodiversity were never mentioned in the text. The choice introduces outside concepts not tested by the study."
      },
      {
        "id": "FND-TRAP-04",
        "stem": "Text: 'Biologist Dr. Sarah Lin demonstrated that cold-tolerant alpine flora produce specific antifreeze proteins. However, she emphasized that climate warming may disrupt this evolutionary adaptation.'",
        "wrongChoice": "Alpine flora produce specialized antifreeze proteins to survive sub-zero temperatures.",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Too Extreme",
          "Opposite",
          "Out of Scope"
        ],
        "rationale": "While factually stated in sentence 1, if the question asks for Dr. Lin's primary concern or main takeaway, selecting this detail ignores the critical pivot after 'However'."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "FND-G-01",
        "type": "foundation",
        "stage": "guided",
        "difficulty": "Easy",
        "strategyHeuristic": "Look for contrast frame markers like 'While traditional X... recent Y demonstrates Z'. The author's main point resides in the Y/Z clause.",
        "passage": "While traditional economic models assume that consumers always behave like rational utility-maximizers, behavioral economists have repeatedly demonstrated that cognitive biases routinely distort decision-making. For instance, the 'endowment effect' causes individuals to value an item substantially more merely because they own it, regardless of its objective market worth.",
        "question": "Which choice best summarizes the author's primary argument?",
        "choices": [
          "A) Traditional economic models perfectly predict consumer purchases in modern marketplaces.",
          "B) Human decision-making is often influenced by cognitive distortions rather than pure economic rationality.",
          "C) The endowment effect is the only cognitive bias that prevents humans from making logical choices.",
          "D) Consumers should be legally prevented from making purchases when experiencing emotional attachment."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the pivot word 'While' in the opening sentence. Where does the author place their real emphasis?",
          "Hint 2 (Strategy Reminder): Apply Step 5 of the ACTIVE Framework: Watch out for extreme words like 'perfectly' or 'only'.",
          "Hint 3 (Partial Solution): Choice A contradicts the text ('distort decision-making'), Choice C has the extreme word 'only', and Choice D is completely out of scope. Narrow your focus to Choice B."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B accurately states the core argument: behavioral economics proves that cognitive biases distort human choices, directly overturning the assumption of pure economic rationality.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The passage argues the exact reverse—traditional models fail because cognitive biases distort rational behavior.",
            "B": "Correct Answer: Captures the main contrast between assumed rationality and actual psychological distortion.",
            "C": "Too Extreme Trap: The word 'only' is an absolute distractor; the endowment effect is given as one 'instance' among many biases.",
            "D": "Out of Scope Trap: The author explains a psychological phenomenon; no legal policy or purchasing ban is proposed."
          },
          "keyTakeaway": "On main argument questions, avoid choices with extreme qualifiers ('only', 'perfectly', 'never') unless the passage uses equally extreme language."
        },
        "glosses": {
          "utility-maximizers": "(noun) consumers who seek the greatest possible satisfaction or value from their purchases • 🇹🇷 Fayda maksimize ediciler (rasyonel tüketiciler)",
          "cognitive biases": "(noun) systematic errors in thinking that affect decisions and judgments • 🇹🇷 Bilişsel önyargılar ve sistematik düşünce yanılgıları",
          "endowment effect": "(noun) the psychological tendency to overvalue things simply because one owns them • 🇹🇷 Sahiplik etkisi (sahip olunan şeye aşırı değer biçme)"
        }
      },
      {
        "id": "FND-G-02",
        "type": "foundation",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Pay close attention to concluding sentences introduced by cause-and-effect transitions like 'Consequently' or 'As a result'.",
        "passage": "For decades, architectural preservationists in Chicago fought to protect mid-century modernist buildings, arguing that their clean lines and steel frames represented a vital chapter in urban heritage. Recently, however, civic planners have pointed out that many of these structures are remarkably energy-inefficient, with single-pane glass facades that require exorbitant heating and cooling costs. Consequently, a growing consensus favors retrofitting these landmarks with sustainable materials rather than preserving them in an unmodified state.",
        "question": "Based on the text, what resolution has emerged regarding mid-century modernist buildings in Chicago?",
        "choices": [
          "A) They will be completely demolished to make room for zero-emission skyscrapers.",
          "B) They will be preserved exactly as originally built to safeguard their historical authenticity.",
          "C) They will be modified with eco-friendly upgrades that balance heritage with energy efficiency.",
          "D) They will be sold exclusively to private collectors capable of paying their heating bills."
        ],
        "answer": "C",
        "hints": [
          "Hint 1 (Nudge): Look at the concluding transition word 'Consequently' in the final sentence.",
          "Hint 2 (Strategy Reminder): The passage sets up a conflict between historical preservation and energy costs. How does the text bridge the two?",
          "Hint 3 (Partial Solution): The text says 'retrofitting these landmarks with sustainable materials rather than preserving them in an unmodified state.' Which choice mirrors this compromise?"
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "B": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice C matches the final sentence: the emerging consensus is 'retrofitting these landmarks with sustainable materials' rather than leaving them unmodified, balancing historic preservation with energy upgrades.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: 'Completely demolished' is an extreme distortion; the text advocates for 'retrofitting' existing buildings.",
            "B": "Opposite Trap: The passage explicitly rejects preserving them 'in an unmodified state'.",
            "C": "Correct Answer: Faithfully translates 'retrofitting with sustainable materials' as eco-friendly upgrades.",
            "D": "Out of Scope Trap: Selling buildings to private collectors is completely fabricated outside the passage."
          },
          "keyTakeaway": "When a passage presents a tension between two values (heritage vs. energy efficiency), look for the compromise solution introduced at the conclusion."
        },
        "glosses": {
          "preservationists": "(noun) people who advocate for protecting historic buildings and sites • 🇹🇷 Tarihi eserleri ve binaları koruma savunucuları",
          "exorbitant": "(adj.) unreasonably high; excessive in cost • 🇹🇷 Fahiş, aşırı yüksek, ölçüsüz (maliyet vb.)",
          "retrofitting": "(verb/noun) adding new technologies or features to older existing structures • 🇹🇷 Eski binalara modern ve çevre dostu teknolojiler ekleme"
        }
      },
      {
        "id": "FND-G-03",
        "type": "foundation",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "When a sentence contains a 'not merely X, but Y' construction, the correct answer will synthesize BOTH elements.",
        "passage": "In 18th-century Europe, botanical gardens shifted from serving primarily as medicinal herb collections for apothecaries to becoming vast repositories of imperial botany. European explorers returned from the Pacific and the Americas with thousands of exotic specimens. Naturalists like Joseph Banks organized these specimens systematically according to Linnaean taxonomy, seeking not merely to catalog nature, but to identify commercially lucrative cash crops—such as tea, rubber, and breadfruit—that could be transplanted across colonial territories.",
        "question": "According to the passage, what motivated the 18th-century transformation of European botanical gardens?",
        "choices": [
          "A) A desire to abandon medical research in favor of artistic floral exhibitions.",
          "B) An exclusive interest in domestic European plant species with cold-hardiness.",
          "C) A combination of scientific classification and the pursuit of economically valuable colonial crops.",
          "D) A legal mandate requiring all apothecaries to close their local dispensaries."
        ],
        "answer": "C",
        "hints": [
          "Hint 1 (Nudge): Re-read the final sentence. What two goals are connected by 'not merely to catalog... but to identify'?",
          "Hint 2 (Strategy Reminder): Match the exact words: 'catalog nature systematically' (scientific classification) + 'identify commercially lucrative cash crops' (economic pursuit).",
          "Hint 3 (Partial Solution): Eliminate Choice B because the text says 'exotic specimens' from 'the Pacific and the Americas', not domestic European species. Look for the choice that captures both science and commerce."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "B": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice C synthesizes both motives explicitly stated in the final sentence: systematic Linnaean organization ('scientific classification') and identifying lucrative cash crops for transplantation ('economic pursuit').",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: The text never mentions artistic floral exhibitions.",
            "B": "Opposite Trap: The passage emphasizes 'exotic specimens' brought from the Pacific and Americas, not domestic European species.",
            "C": "Correct Answer: Accurately combines the dual scientific and commercial goals highlighted in the text.",
            "D": "Out of Scope Trap: No legal mandate closing apothecary dispensaries is mentioned."
          },
          "keyTakeaway": "Dual-purpose passages ('not merely X, but Y') require an answer that includes both components rather than favoring one in isolation."
        },
        "glosses": {
          "apothecaries": "(noun) historical medical practitioners who prepared and sold remedies • 🇹🇷 Tarihi eczacılar, şifacılar",
          "repositories": "(noun) central storage places where items are collected and preserved • 🇹🇷 Depolar, zengin koleksiyon ve saklama alanları",
          "Linnaean taxonomy": "(noun) the formal biological naming and classification system",
          "lucrative": "(adj.) producing great financial gain or profit • 🇹🇷 Çok karlı, yüksek kazanç getiren"
        }
      },
      {
        "id": "FND-G-04",
        "type": "foundation",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Identify the cause of discrepancy when scientific data contradicts an initial fear or expectation.",
        "passage": "Many marine ecologists hypothesized that marine protected areas (MPAs) with strict 'no-take' fishing bans would invariably lead to economic hardship for local artisanal fishing communities. However, empirical studies in the Mediterranean show that the resulting 'spillover effect'—wherein adult fish and larvae emigrate from the protected reserve into adjacent fishing grounds—frequently boosts catches in surrounding waters within five years, compensating for the initial restriction.",
        "question": "Which choice best describes the relationship between the ecologists' initial hypothesis and the empirical findings?",
        "choices": [
          "A) The empirical findings demonstrated that the initial hypothesis was wholly accurate across all global marine zones.",
          "B) The empirical findings revealed that the initial hypothesis failed to anticipate the compensatory benefits of fish spillover.",
          "C) The initial hypothesis correctly predicted that artisanal fishing communities would permanently collapse.",
          "D) The empirical findings proved that marine protected areas have zero impact on fish populations outside the reserve."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the pivot 'However' and compare the fear in sentence 1 with the reality in sentence 2.",
          "Hint 2 (Strategy Reminder): The hypothesis expected 'economic hardship', but the findings showed a 'spillover effect' that 'boosts catches'. What did the hypothesis miss?",
          "Hint 3 (Partial Solution): Choice A says the hypothesis was accurate (Opposite). Choice C says fishing collapsed (Opposite). Choice D says MPAs have zero impact (Opposite). Choice B precisely identifies what the hypothesis overlooked."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B accurately reflects the contrast: the initial hypothesis predicted economic hardship from fishing bans, but empirical data proved that the 'spillover effect' boosted fish catches outside the reserve, compensating for the bans.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The empirical findings contradicted the hypothesis rather than proving it accurate.",
            "B": "Correct Answer: Precisely identifies that the initial hypothesis failed to foresee the positive spillover effect.",
            "C": "Opposite Trap: Communities did not collapse; catches were boosted within five years.",
            "D": "Opposite Trap: The reserve had a direct positive impact on outside populations via the spillover effect."
          },
          "keyTakeaway": "When empirical findings overturn a theoretical model, look for answer choices that focus on the unmodeled mechanism (here: the spillover effect)."
        },
        "glosses": {
          "artisanal": "(adj.) small-scale, traditional, non-industrial practices • 🇹🇷 Usta işi el zanaatlarına ait",
          "empirical": "(adj.) based on verifiable observation or experimentation rather than pure theory • 🇹🇷 Ampirik, gözlem ve deneye dayalı",
          "compensating": "(verb) counterbalancing or making up for an initial loss or setback • 🇹🇷 Dengeleyen, telafi eden"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "FND-I-01",
        "type": "foundation",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Distinguish between the contrasting movements in literary/historical passages by tracking what each movement rejected.",
        "passage": "During the Gilded Age, American literary realism arose as a deliberate repudiation of 19th-century romantic idealism. Whereas romantic novelists depicted morally pure protagonists triumphing over melodramatic villainy, realist authors such as William Dean Howells and Henry James focused on ordinary middle-class characters confronting everyday ethical dilemmas, social stratification, and psychological ambiguity.",
        "question": "According to the passage, how did American literary realism primarily differ from romantic idealism?",
        "choices": [
          "A) Realism focused on ordinary characters facing complex social and moral challenges rather than idealized heroes.",
          "B) Realism entirely eliminated dialogue and plot in order to present statistical tables about poverty.",
          "C) Realism celebrated romantic knights and fantastical creatures to provide escapism from industrial factories.",
          "D) Realism was created exclusively to support the political agendas of corporate monopolies."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A directly translates the contrast in the second sentence: romanticism used morally pure heroes triumphing over villains, whereas realism focused on ordinary characters facing ethical dilemmas and social stratification.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately reflects the textual distinction between ordinary, morally complex characters and idealized heroes.",
            "B": "Too Extreme Trap: Realist authors did not 'eliminate dialogue and plot' to present statistical tables.",
            "C": "Opposite Trap: Celebrating romantic knights is characteristic of romantic idealism, not literary realism.",
            "D": "Out of Scope Trap: Supporting corporate monopolies is never mentioned."
          },
          "keyTakeaway": "On contrast-based detail questions, verify that the answer choice attributes the correct characteristics to the target subject (realism vs. romanticism)."
        },
        "glosses": {
          "repudiation": "(noun) rejection of a proposal, idea, or authority • 🇹🇷 Reddetme, inkar etme, tanımama",
          "melodramatic": "(adj.) sensationalized, exaggerated, or overemotional • 🇹🇷 Aşırı duygusal, abartılı ve yapay dramatik",
          "stratification": "(noun) the arrangement of society into distinct social or economic classes • 🇹🇷 Toplumsal tabakalaşma, sınıflara ayrılma"
        }
      },
      {
        "id": "FND-I-02",
        "type": "foundation",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "On function-of-a-sentence questions, identify the rhetorical role (challenging an old paradigm) rather than merely restating factual biology.",
        "passage": "In neuroscience, the long-standing 'neurocentric' paradigm posited that information processing in the brain is exclusively conducted by neurons, with glial cells serving merely as structural scaffold and metabolic glue. Yet, recent optogenetic research indicates that astrocytes—a subtype of glial cell—can modulate synaptic transmission and directly influence memory consolidation by releasing gliotransmitters into the synaptic cleft.",
        "question": "Which choice best describes the function of the second sentence in the text as a whole?",
        "choices": [
          "A) It provides definitive proof that neurons play no meaningful role in cognitive memory.",
          "B) It introduces experimental findings that challenge the passive view of glial cells in brain function.",
          "C) It reconciles two completely identical theories of cellular neurobiology into a single model.",
          "D) It warns clinicians that optogenetic techniques are too hazardous for laboratory experimentation."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B accurately states the function of sentence 2: introduced by 'Yet', it presents recent optogenetic findings (astrocytes modulating synaptic transmission) to challenge the traditional view that glia are merely passive metabolic glue.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: The passage never claims neurons play 'no meaningful role'; it shows glia also play an active role.",
            "B": "Correct Answer: Identifies the rhetorical move: presenting evidence that challenges the old passive view of glia.",
            "C": "Opposite Trap: The two views are contrasting, not identical.",
            "D": "Out of Scope Trap: The text discusses neuroscience discoveries, not clinical hazards of optogenetics."
          },
          "keyTakeaway": "A sentence starting with 'Yet' or 'However' following an old paradigm almost always functions to introduce evidence challenging that paradigm."
        },
        "glosses": {
          "neurocentric": "(adj.) focused exclusively on neurons to the neglect of other brain components • 🇹🇷 Nöron odaklı (diğer beyin hücrelerini yok sayan)",
          "posited": "(verb) put forward as a basis of argument or established theory • 🇹🇷 İleri sürülen, varsayılan",
          "modulate": "(verb) exert a controlling or modifying influence on a process • 🇹🇷 Düzenlemek, ayarlamak, kontrol altında tutmak",
          "synaptic cleft": "(noun) the microscopic gap between communicating neurons • 🇹🇷 Sinaptik yarık (nöronlar arası iletişim boşluğu)"
        }
      },
      {
        "id": "FND-I-03",
        "type": "foundation",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "When asked why a historical forecast failed, look for the unexpected destination where surplus economic gains were redirected.",
        "passage": "In 1930, British economist John Maynard Keynes famously predicted that technological advancement and capital accumulation would reduce the standard workweek to fifteen hours by the early twenty-first century. However, sociological data from OECD countries indicate that while productivity per worker has skyrocketed over five-fold since 1950, average annual hours worked have declined only marginally, as societal gains have been channeled into higher consumer consumption and expanding bureaucratic service sectors.",
        "question": "Based on the text, why did Keynes's prediction fail to materialize?",
        "choices": [
          "A) Workers experienced a massive decline in technological innovation and factory automation.",
          "B) Increased productivity was absorbed by higher consumption and new economic sectors rather than massive leisure time.",
          "C) Governments across the OECD outlawed part-time employment and mandated 60-hour workweeks.",
          "D) Technological advancements caused a complete collapse of all international trade markets."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Opposite",
          "C": "Too Extreme",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B directly reflects the explanation given in the final clause: productivity rose over five-fold, but those gains were absorbed by 'higher consumer consumption and expanding bureaucratic service sectors' rather than leisure time reduction.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The text states productivity 'skyrocketed over five-fold', refuting any technological decline.",
            "B": "Correct Answer: Perfectly restates the mechanism that prevented the 15-hour workweek from happening.",
            "C": "Too Extreme Trap: No laws mandating 60-hour workweeks or banning part-time jobs are mentioned.",
            "D": "Too Extreme Trap: Collapse of trade markets is an unsupported exaggeration."
          },
          "keyTakeaway": "On 'why did X happen' questions, find the causal connector ('as', 'because', 'due to') in the final clause of the text."
        },
        "glosses": {
          "capital accumulation": "(noun) the growth of wealth through reinvested savings and capital investment • 🇹🇷 Sermaye birikimi",
          "OECD": "(noun) Organization for Economic Co-operation and Development (group of developed economies)",
          "marginally": "(adv.) to only a slight, minimal extent • 🇹🇷 Çok az, cüzi miktarda, marjinal düzeyde",
          "materialize": "(verb) to become actual fact; to come into real existence • 🇹🇷 Gerçekleşmek, somut hale gelmek"
        }
      },
      {
        "id": "FND-I-04",
        "type": "foundation",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for the cooperative biological mechanism that disproved an old competitive assumption.",
        "passage": "Soil microbiologists traditionally classified subterranean fungal networks simply as nutrient competitors with plant roots. However, isotopic tracing experiments have revealed that mycorrhizal networks actively facilitate resource-sharing between trees of different species. When a mature birch tree experiences full sunlight, it can transfer surplus carbon compounds via underground fungal filaments to neighboring shaded fir saplings, enhancing forest-wide resilience.",
        "question": "The passage suggests that mycorrhizal fungal networks:",
        "choices": [
          "A) serve as conduit systems that enable cross-species nutrient transfer among forest trees.",
          "B) invariably destroy mature birch trees by draining their essential root carbohydrates.",
          "C) prevent all shaded saplings from receiving any underground chemical signals.",
          "D) are unable to survive in soil that contains more than one species of tree."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A summarizes the author's primary discovery: mycorrhizal networks 'facilitate resource-sharing' and transfer carbon from sunny birch trees to shaded fir saplings across species lines.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately identifies the fungal network as an underground conduit for resource sharing.",
            "B": "Too Extreme / Opposite Trap: Fungi do not destroy birch trees; they enhance forest resilience.",
            "C": "Opposite Trap: Fungi facilitate nutrient delivery to shaded saplings, rather than preventing it.",
            "D": "Too Extreme Trap: Fungi actively connect multiple tree species simultaneously."
          },
          "keyTakeaway": "Scientific passages about ecological symbiosis reward choices emphasizing cooperative transfer and mutual resilience."
        },
        "glosses": {
          "subterranean": "(adj.) existing or operating beneath the surface of the earth • 🇹🇷 Yeraltında bulunan/gerçekleşen",
          "isotopic tracing": "(noun) a technique tracking chemical pathways using identifiable isotopes • 🇹🇷 İzotopik takip (kimyasal yolları izleme tekniği)",
          "mycorrhizal": "(adj.) relating to the symbiotic association between fungi and plant root systems • 🇹🇷 Mikorizal (mantar ve bitki kökü ortak yaşamı)",
          "conduit": "(noun) a channel or pipeline through which resources or signals pass • 🇹🇷 Kanal, nakil borusu, iletim yolu"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Foundations Self-Audit",
      "prompts": [
        {
          "id": "sa-1",
          "label": "I can instantly spot pivot transitions (however, yet, conversely) and use them to locate the author's main point."
        },
        {
          "id": "sa-2",
          "label": "I can distinguish the author's primary claim from secondary experimental details."
        },
        {
          "id": "sa-3",
          "label": "I actively veto choices with extreme language (all, proves, never, wholly) unless the text explicitly demands it."
        }
      ]
    }
  },
  "MOD-1": {
    "metadata": {
      "id": "MOD-1",
      "title": "Words in Context",
      "domain": "Craft & Structure",
      "methodName": "The BLANK Method",
      "tagline": "Never look at the choices first; blank the target word, predict a simple synonym from clues, and defeat secondary meaning traps."
    },
    "stage1_skill": {
      "title": "What Does Words in Context Test?",
      "whatItTests": "Words in Context tests your ability to determine the precise meaning of high-utility academic vocabulary based on the rhetorical and syntactic clues in a passage. Crucially, the SAT rarely tests obscure dictionary words; instead, it tests common words used in subtle, secondary, or discipline-specific senses.",
      "frequency": "4 to 6 questions per module (approx. 18% of the entire Reading & Writing section).",
      "recognitionTest": "The question stem almost always reads: 'As used in the text, what does the word [X] most nearly mean?' or 'Which choice completes the text with the most logical and precise word or phrase?'",
      "goldenRules": [
        {
          "title": "The Blind Prediction Rule",
          "description": "Cover the four choices immediately. If you look at options before predicting, your brain will rationalize incorrect dictionary definitions."
        },
        {
          "title": "The Contrast Equation",
          "description": "Look for contrast hinges ('not X but Y', 'rather than', 'although'). The blank is frequently the exact antonym of a stated clue."
        },
        {
          "title": "The Secondary Meaning Trap",
          "description": "Common words like 'qualify' (limit), 'table' (postpone), 'compromise' (endanger), and 'champion' (advocate) are tested in their academic senses."
        },
        {
          "title": "The Tone Matching Check",
          "description": "Determine whether the blank requires a positive (+), negative (-), or neutral (~) charge before narrowing options."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "15",
            "action": "Blank & Context",
            "detail": "Read sentence and replace target word with a mental [BLANK]"
          },
          {
            "seconds": "15",
            "action": "Clue Hunt",
            "detail": "Find the synonym, antonym, or definition already in the text"
          },
          {
            "seconds": "20",
            "action": "Predict Word",
            "detail": "Draft a 4th-grade simple synonym (e.g., 'worsen', 'limit', 'praise')"
          },
          {
            "seconds": "25",
            "action": "Match & Eliminate",
            "detail": "Pick choice matching your prediction; veto wrong-meaning traps"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The Primary Definition Reflex",
          "explanation": "Selecting the most common dictionary definition of a word (e.g., assuming 'couch' means a sofa rather than 'to express in words')."
        },
        {
          "name": "The Sound-Alike Association",
          "explanation": "Confusing words that look or sound similar (e.g., confusing 'deprecate' with 'depreciate' or 'lucid' with 'lurid')."
        }
      ],
      "eslNote": "The #1 trap for ESL learners is picking the word's most famous definition. Always substitute your chosen word back into the full sentence to ensure grammatical and semantic fit.",
      "turkishScaffold": {
        "title": "🇹🇷 Words in Context: Türk Öğrenciler İçin Sözlük Tuzakları",
        "strategyNote": "Words in Context sorularında en sık düşülen tuzak, kelimenin Türkçede ilk akla gelen sözlük anlamını seçmektir. SAT her zaman kelimenin bağlam içindeki (çoğu zaman ikincil akademik) anlamını sorar. Asla şıklara hemen bakmayın; boşluğu [BLANK] yapıp cümlenin zıtlık veya tanım ipuçlarından kendi kelimenizi tahmin edin.",
        "falseFriends": [
          {
            "word": "Qualify",
            "wrongConcept": "Kalifiye/nitelikli olmak",
            "correctConcept": "Bir iddiayı sınırlandırmak, şart koymak (Limit/moderate)"
          },
          {
            "word": "Compromise",
            "wrongConcept": "Sadece uzlaşmak",
            "correctConcept": "Tehlikeye atmak, zedelemek (Endanger/weaken)"
          },
          {
            "word": "Champion",
            "wrongConcept": "Şampiyon (isim)",
            "correctConcept": "Fiil: Bir fikri savunmak, öncüsü olmak (Advocate)"
          },
          {
            "word": "Table",
            "wrongConcept": "Masa / Tablo",
            "correctConcept": "Fiil: Bir konuyu ertelemek / askıya almak (Postpone)"
          }
        ],
        "keyVocab": [
          {
            "word": "Alleviate",
            "pos": "verb",
            "tr": "Hafifletmek, dindirmek, yatıştırmak"
          },
          {
            "word": "Compound",
            "pos": "verb",
            "tr": "Kötüleştirmek, katlamak, durumu vahimleştirmek"
          },
          {
            "word": "Indefatigable",
            "pos": "adj",
            "tr": "Yorulmak bilmez, azimli, tükenmez"
          },
          {
            "word": "Unflappable",
            "pos": "adj",
            "tr": "Soğukkanlı, sarsılmaz, panik yapmayan"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The BLANK Method",
      "summary": "A 4-step disciplined protocol that prevents your brain from being hijacked by attractive distractor choices.",
      "examFormula": "Sentence Clue + Contrast Marker (Rather than / But) = Required Blank Polarity",
      "steps": [
        {
          "num": 1,
          "title": "Blank the Target Word",
          "rule": "Put a mental box/blank over the underlined word or blank space.",
          "expertMove": "Do NOT read the 4 choices yet. Looking at choices early primes your brain with misleading associations."
        },
        {
          "num": 2,
          "title": "Locate the Clue Sentences",
          "rule": "Find the definition, synonym, antonym, or tone marker already present in the text.",
          "expertMove": "Every SAT passage contains an internal 'equation'—a parallel phrase or contrast word that defines the blank."
        },
        {
          "num": 3,
          "title": "Anticipate / Predict Your Own Word",
          "rule": "Draft a simple, elementary school word (e.g., 'stop', 'show', 'change', 'support') that fits the blank.",
          "expertMove": "I write or think my simple prediction: e.g., 'The sentence needs a word meaning LIMIT'."
        },
        {
          "num": 4,
          "title": "Match & Eliminate Traps",
          "rule": "Compare each choice to your prediction, watching for 'Wrong Meaning' and 'Too Extreme' traps.",
          "expertMove": "If choice A matches my prediction and fits the tone, I confirm why B, C, and D fail before moving on."
        }
      ],
      "checklist": [
        "Did I predict a simple synonym before looking at the choices?",
        "Does the chosen word match the positive/negative tone of the sentence?",
        "Did I check if the word has a secondary academic definition?",
        "Did I read the full sentence with my chosen word inserted?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "WIC-W-01",
        "type": "words-in-context",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "The syntax 'would not X but would instead [BLANK] it' creates a mandatory opposite relationship. The blank must mean the reverse of alleviate.",
        "passage": "In his 1958 essay on urban design, Lewis Mumford argued that suburban highway expansion would not alleviate traffic congestion but would instead _______ it. By making distant commutes easier, new expressways inevitably generate additional automobile journeys, quickly overwhelming the very lanes built to absorb them.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) compound",
          "B) alleviate",
          "C) fabricate",
          "D) stabilize"
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1 (Blank the Word & Analyze Sentence Frame): The sentence structure is 'would not alleviate traffic... but would instead [BLANK] it.'",
          "Step 2 (Analyze Rhetorical Contrast): 'Alleviate' means reduce/make better. 'Not alleviate... but instead' forces the blank to be the semantic opposite: make worse or multiply.",
          "Step 3 (Gather Textual Corroboration): Sentence 2 explains: 'inevitably generate additional automobile journeys, quickly overwhelming the very lanes...' This confirms the problem increases.",
          "Step 4 (Form Simple Prediction): Prediction = 'worsen', 'increase', or 'multiply'.",
          "Step 5 (Evaluate Choices): Choice A ('compound') means to make a bad situation worse or multiply it. Exact match.",
          "Step 6 (Eliminate Traps): Choice B ('alleviate') is an Opposite trap. Choice C ('fabricate' = forge/invent) is Out of Scope. Choice D ('stabilize' = keep steady) fails to capture worsening."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because 'compound' means to intensify, multiply, or make an existing problem worse. This perfectly fits Mumford's argument that new highways generate even more traffic and overwhelm road capacity.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately means to worsen or multiply a dilemma, directly matching 'generate additional journeys' and 'overwhelming lanes'.",
            "B": "Opposite Trap: 'Alleviate' means reduce or soothe, which directly contradicts the author's argument.",
            "C": "Out of Scope Trap: 'Fabricate' means to manufacture or forge from scratch, which does not apply to traffic congestion.",
            "D": "Opposite Trap: 'Stabilize' means to keep at a constant level, whereas the text describes an escalating increase in cars."
          },
          "keyTakeaway": "In 'not X but instead Y' frames, Y must be the antonym of X. If X is alleviate (reduce), Y must be compound (worsen)."
        },
        "glosses": {
          "alleviate": "(verb) make pain, suffering, or a deficiency less severe • 🇹🇷 Hafifletmek, dindirmek, yatıştırmak",
          "compound": "(verb) to make something bad worse by adding to it; to multiply an existing problem • 🇹🇷 Kötüleştirmek, katlamak, durumu vahimleştirmek",
          "inevitably": "(adv.) as is certain to happen; unavoidably • 🇹🇷 Kaçınılmaz olarak, çaresizce",
          "overwhelming": "(verb/adj.) overpowering completely; submerging with excessive force • 🇹🇷 Ezici, alt eden, üstesinden gelinemez"
        }
      },
      {
        "id": "WIC-W-02",
        "type": "words-in-context",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "Look for academic secondary meanings: 'qualify' on the SAT almost always means 'to limit, moderate, or place boundaries on a claim'.",
        "passage": "Although Dr. Aris Thorne recognized that the archaeological artifacts recovered from the coastal cave were genuine, he sought to _______ the lead investigator's bolder claim that the site represented an unrecorded pre-Columbian civilization. Thorne noted that similar toolkits had been discovered across the region without indicating any organized urban hierarchy.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) endorse",
          "B) qualify",
          "C) fabricate",
          "D) eradicate"
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Analyze Concession & Syntax): 'Although Dr. Thorne recognized that artifacts were genuine, he sought to [BLANK] the bolder claim...'",
          "Step 2 (Trace the Evidence): Thorne does NOT call the artifacts fake, but he argues they do not prove an entire 'civilization' because similar tools exist without urban hierarchy.",
          "Step 3 (Formulate Prediction): Thorne wants to 'limit', 'temper', or 'set boundaries on' the bold interpretation.",
          "Step 4 (Test Choices Against Secondary Meanings): Choice A ('endorse' = support) is an Opposite trap. Choice B ('qualify') has an essential academic secondary definition: 'to limit or restrict the scope of an assertion'. Perfect match.",
          "Step 5 (Eliminate Extreme Traps): Choice C ('fabricate' = forge) is Out of Scope. Choice D ('eradicate' = wipe out/destroy) is far Too Extreme.",
          "Step 6 (Verify Full Sentence): '...he sought to qualify the lead investigator's bolder claim...' Perfectly matches his moderated stance."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. In academic rhetoric, 'qualify' means to moderate, limit, or place conditions on an overly broad claim. Thorne accepts the physical tools but restricts the sweeping claim of a lost civilization.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Endorse' means to fully support or approve, which contradicts Thorne's skepticism.",
            "B": "Correct Answer: Accurately utilizes the secondary academic definition of qualify (to place limits on a claim).",
            "C": "Out of Scope Trap: 'Fabricate' implies making up falsehoods, but Thorne accepts the artifacts are genuine.",
            "D": "Too Extreme Trap: 'Eradicate' means to completely destroy or exterminate, which is excessively violent and inappropriate."
          },
          "keyTakeaway": "Be alert to words with secondary meanings: 'qualify' (to limit), 'reserve' (to withhold), 'table' (to postpone), 'compromise' (to endanger)."
        },
        "glosses": {
          "qualify": "(verb - secondary meaning) to limit, modify, or restrict the scope of a statement • 🇹🇷 Sınırlandırmak, şart koymak, kapsamı daraltmak",
          "pre-Columbian": "(adj.) referring to the Americas before the arrival of Columbus in 1492",
          "hierarchy": "(noun) an organized system of ranking or social authority • 🇹🇷 Hiyerarşi, aşamalı derece/rütbe düzeni",
          "eradicate": "(verb) destroy completely; put an end to entirely • 🇹🇷 Kökünü kazımak, tamamen yok etmek"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "WIC-TRAP-01",
        "stem": "Text: 'Rather than embracing the avant-garde poet's radical syntax, the conservative journal published a _______ review calling the work unreadable.'",
        "wrongChoice": "laudatory",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Wrong Meaning",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "'Laudatory' means expressing praise. The passage states the journal called the work 'unreadable', meaning the review was negative, not praise-filled."
      },
      {
        "id": "WIC-TRAP-02",
        "stem": "Text: 'To ensure the historical documentary remained engaging, the director decided to _______ the archival footage with modern animated maps.'",
        "wrongChoice": "fabricate",
        "correctTrap": "Wrong Meaning",
        "options": [
          "Wrong Meaning",
          "Too Extreme",
          "Opposite",
          "Half Right"
        ],
        "rationale": "'Fabricate' means to invent or forge. A student might think of 'fabricating' as making/producing, but in context the director is combining/interspersing media, not creating fraudulent evidence."
      },
      {
        "id": "WIC-TRAP-03",
        "stem": "Text: 'The botanist cautioned that while the soil additive showed promise in greenhouse trials, its agricultural efficacy under field conditions was still _______.'",
        "wrongChoice": "wholly nonexistent",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Opposite",
          "Wrong Meaning",
          "Out of Scope"
        ],
        "rationale": "Claiming the efficacy is 'wholly nonexistent' is an absolute overstatement. The text says it showed promise in trials, so its field efficacy is merely 'provisional' or 'unproven', not definitively impossible."
      },
      {
        "id": "WIC-TRAP-04",
        "stem": "Text: 'The architect was determined to _______ the dilapidated warehouse into a vibrant community arts center.'",
        "wrongChoice": "demolish",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Opposite",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "While demolition often occurs in construction projects, the sentence specifies turning the warehouse 'into a vibrant community arts center', which requires transformation/renovation, not total destruction."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "WIC-G-01",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Easy",
        "strategyHeuristic": "Look for temporal markers like 'until X happened' to signal that the action was delayed or postponed.",
        "passage": "Because the mountain pass was notoriously hazardous during winter blizzards, local guides advised travelers to _______ their journeys until the spring thaw made the trails passable.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) accelerate",
          "B) defer",
          "C) celebrate",
          "D) terminate"
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the time clue: 'until the spring thaw made the trails passable.'",
          "Hint 2 (Strategy Reminder): Apply Step 3 of the BLANK Method: What word means 'to postpone or delay until a later time'?",
          "Hint 3 (Partial Solution): 'Accelerate' means speed up (Opposite). 'Terminate' means cancel forever (Too Extreme). Which word specifically means to delay until later?"
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'Defer' means to put off or postpone an action to a later time, which matches the condition 'until the spring thaw made the trails passable'.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Accelerate' means to speed up, which would send travelers into dangerous blizzards.",
            "B": "Correct Answer: Accurately means to postpone or delay until safer spring weather.",
            "C": "Out of Scope Trap: 'Celebrate' has no contextual relevance to hazardous travel timing.",
            "D": "Too Extreme Trap: 'Terminate' means to permanently cancel forever, ignoring the 'until spring' qualification."
          },
          "keyTakeaway": "Distinguish between permanent cancellation ('terminate') and temporary postponement ('defer'). Clues like 'until' require postponement."
        },
        "glosses": {
          "notoriously": "(adv.) widely and unfavorably known • 🇹🇷 Kötü şöhretli olarak, herkesçe bilinen olumsuzluk",
          "defer": "(verb) put off or postpone to a future time • 🇹🇷 Ertelemek, sonraya bırakmak",
          "passable": "(adj.) clear of barriers and able to be traveled along • 🇹🇷 Geçilebilir, ulaşıma elverişli"
        }
      },
      {
        "id": "WIC-G-02",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "When a semicolon is followed by an explanatory sentence, the second sentence literally defines the blank.",
        "passage": "The diplomat was renowned for her _______ demeanor during tense international negotiations; even when foreign ministers engaged in heated accusations, she remained entirely calm and composed, refusing to be drawn into emotional disputes.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) volatile",
          "B) impassioned",
          "C) unflappable",
          "D) combative"
        ],
        "answer": "C",
        "hints": [
          "Hint 1 (Nudge): Find the definition clue right after the semicolon: 'she remained entirely calm and composed, refusing to be drawn into emotional disputes.'",
          "Hint 2 (Strategy Reminder): The target word must match 'calm', 'composed', and 'unbothered by tension'.",
          "Hint 3 (Partial Solution): 'Volatile' (explosive), 'Impassioned' (emotional), and 'Combative' (eager to fight) are all the direct OPPOSITE of calm. Only Choice C works."
        ],
        "trapTypes": {
          "A": "Opposite",
          "B": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice C is correct. 'Unflappable' means demonstrating marked calmness and composure in a crisis, which directly mirrors the clause 'remained entirely calm and composed, refusing to be drawn into emotional disputes'.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Volatile' means unpredictable and explosive, the exact opposite of composed.",
            "B": "Opposite Trap: 'Impassioned' means filled with intense emotion, contradicting 'calm and composed'.",
            "C": "Correct Answer: Perfectly defines a person who cannot be rattled or agitated by conflict.",
            "D": "Opposite Trap: 'Combative' means eager to argue or fight, contradicting 'refusing to be drawn into disputes'."
          },
          "keyTakeaway": "A semicolon (;) acts like an equals sign (=). The clause after the semicolon defines the adjective needed before it."
        },
        "glosses": {
          "unflappable": "(adj.) having or showing remarkable calmness in a crisis • 🇹🇷 Soğukkanlı, sarsılmaz, panik yapmayan",
          "volatile": "(adj.) liable to change rapidly and unpredictably, especially for the worse • 🇹🇷 Değişken, dengesiz, patlamaya hazır",
          "combative": "(adj.) ready or eager to fight; aggressively contentious • 🇹🇷 Kavgacı, saldırgan, mücadeleci"
        }
      },
      {
        "id": "WIC-G-03",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for the concession contrast: 'while prose was lucid (clear)... structure was [BLANK]', followed by 'jumped erratically without progression'.",
        "passage": "In his review of the new biography, the literary critic noted that while the author's prose was undeniably lucid, the book's narrative structure was surprisingly _______; chapters jumped erratically across decades without clear chronological or thematic progression.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) disjointed",
          "B) cohesive",
          "C) pristine",
          "D) monotonous"
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the pivot 'while... prose was lucid' and the clue after the semicolon: 'jumped erratically across decades without clear... progression.'",
          "Hint 2 (Strategy Reminder): What simple word describes a structure that is fragmented, lacking smooth flow, and disconnected?",
          "Hint 3 (Partial Solution): 'Cohesive' means unified (Opposite). 'Pristine' means untouched/pure (Out of Scope). 'Monotonous' means boringly repetitive (Wrong concept). Choice A means lacking orderly connection."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Wrong Meaning"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. 'Disjointed' means lacking coherent sequence, connection, or orderly flow, perfectly capturing 'jumped erratically across decades without clear chronological or thematic progression'.",
          "choiceBreakdown": {
            "A": "Correct Answer: Directly matches the erratic, disconnected narrative timeline described.",
            "B": "Opposite Trap: 'Cohesive' means unified and flowing smoothly, which is the exact opposite of erratic jumping.",
            "C": "Out of Scope Trap: 'Pristine' means in its original, untouched condition.",
            "D": "Wrong Meaning Trap: 'Monotonous' means unvarying and repetitively boring, which does not mean chronologically disordered."
          },
          "keyTakeaway": "Match the specific descriptor: erratic jumping across time indicates lack of structure ('disjointed'), not repetitiveness ('monotonous')."
        },
        "glosses": {
          "lucid": "(adj.) expressed clearly; easy to understand • 🇹🇷 Açık, net, kolay anlaşılır, berrak",
          "disjointed": "(adj.) lacking a coherent sequence, connection, or unity • 🇹🇷 Kopuk, bağlantısız, dağınık",
          "erratically": "(adv.) in an irregular, unpredictable manner • 🇹🇷 Düzensizce, kararsızca, sağa sola saparak"
        }
      },
      {
        "id": "WIC-G-04",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "The contrast 'Unlike predecessors who viewed X as mere Y, Hurston recognized X was [BLANK]' demands a strong positive value word.",
        "passage": "Unlike her predecessors, who treated traditional folkloric tales as mere children's entertainment, anthropologist Zora Neale Hurston recognized that these oral narratives were _______ historical repositories that documented the resilience, humor, and linguistic ingenuity of Southern African American communities.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) peripheral",
          "B) vital",
          "C) obsolete",
          "D) superficial"
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look for the contrast frame: 'Unlike her predecessors, who treated [them] as mere children's entertainment, Hurston recognized that [they] were [BLANK]...'",
          "Hint 2 (Strategy Reminder): Predecessors saw them as unimportant ('mere'). Hurston saw them as possessing great value ('documented resilience, humor, and ingenuity'). We need a strong positive word.",
          "Hint 3 (Partial Solution): 'Peripheral' (minor/edge), 'Obsolete' (outdated), and 'Superficial' (shallow) are all negative/dismissive words. Only Choice B provides the necessary high-value positive meaning."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'Vital' means of fundamental importance and essential value. This contrasts with 'mere children's entertainment' and aligns with documenting resilience, humor, and linguistic ingenuity.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Peripheral' means minor or secondary, aligning with the predecessors rather than Hurston.",
            "B": "Correct Answer: Accurately conveys the indispensable cultural importance recognized by Hurston.",
            "C": "Opposite Trap: 'Obsolete' means no longer useful or outdated.",
            "D": "Opposite Trap: 'Superficial' means shallow or lacking depth, contradicting Hurston's deep appreciation."
          },
          "keyTakeaway": "On contrast questions starting with 'Unlike X, Y recognized...', the blank will invert X's dismissive stance with a word of genuine significance."
        },
        "glosses": {
          "folkloric": "(adj.) relating to traditional customs, tales, and cultural oral history • 🇹🇷 Folklorik, halk kültürüne ait",
          "peripheral": "(adj.) of secondary or minor importance; on the margins • 🇹🇷 Çevresel, tali, ikincil derecede önemsiz",
          "ingenuity": "(noun) the quality of being clever, inventive, and original • 🇹🇷 Yaratıcılık, ustalık, pratik zeka",
          "obsolete": "(adj.) no longer produced or used; out of date • 🇹🇷 Kullanımdan kalkmış, modası geçmiş, köhnemiş"
        }
      },
      {
        "id": "WIC-G-05",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Look for the financial evidence after the semicolon: 'costs exceeded municipal bond revenue estimates by more than eighty million dollars.'",
        "passage": "The city council's oversight committee on urban renewal found that the ambitious downtown revitalization plan was financially _______; projected construction costs exceeded municipal bond revenue estimates by more than eighty million dollars.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) untenable",
          "B) lucrative",
          "C) unprecedented",
          "D) rudimentary"
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the financial discrepancy after the semicolon: costs exceed revenue estimates by $80 million.",
          "Hint 2 (Strategy Reminder): What word describes an economic plan that cannot be supported or maintained in reality?",
          "Hint 3 (Partial Solution): 'Untenable' means incapable of being defended or sustained. 'Lucrative' means profitable (Opposite)."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Wrong Meaning"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. 'Untenable' means not able to be maintained or defended. A project whose costs exceed revenue projections by eighty million dollars cannot realistically proceed, making it financially untenable.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately reflects a financial position that cannot be sustained or defended.",
            "B": "Opposite Trap: 'Lucrative' means highly profitable, contradicting the massive deficit.",
            "C": "Out of Scope Trap: 'Unprecedented' means never done before, which does not address financial viability.",
            "D": "Wrong Meaning Trap: 'Rudimentary' means basic or undeveloped, not financially insolvent."
          },
          "keyTakeaway": "When the context describes an insurmountable shortfall, choose words signifying unsustainable failure ('untenable')."
        },
        "glosses": {
          "untenable": "(adj.) not able to be maintained or defended against objection or difficulty • 🇹🇷 Sürdürülemez, savunulamaz, çıkmazda",
          "lucrative": "(adj.) producing a great deal of profit • 🇹🇷 Kazançlı, karlı",
          "rudimentary": "(adj.) involving or limited to basic principles • 🇹🇷 İlkel, başlangıç düzeyinde"
        }
      },
      {
        "id": "WIC-G-06",
        "type": "words-in-context",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Contrast with 'calculating and cold' using the pivot 'While... correspondence reveals a far more [BLANK] public servant who agonized over humanitarian fallout.'",
        "passage": "While earlier biographers often portrayed the diplomat as calculating and cold, newly declassified correspondence reveals a far more _______ public servant who frequently agonized over the humanitarian fallout of international sanctions.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) ruthless",
          "B) compassionate",
          "C) detached",
          "D) devious"
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Identify the concession pivot 'While earlier... calculating and cold' which contrasts with the new evidence.",
          "Hint 2 (Strategy Reminder): The target adjective must directly describe someone who 'agonized over humanitarian fallout'.",
          "Hint 3 (Partial Solution): 'Compassionate' means showing deep sympathy for the suffering of others."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'Compassionate' means feeling or showing sympathy and concern for others. This directly contrasts with 'calculating and cold' and aligns with 'agonized over the humanitarian fallout'.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Ruthless' means having no pity, matching the old view rather than the new finding.",
            "B": "Correct Answer: Directly matches the empathetic, conscience-driven diplomat revealed by the letters.",
            "C": "Opposite Trap: 'Detached' means aloof or unemotional, reinforcing 'cold' rather than contrasting it.",
            "D": "Opposite Trap: 'Devious' means deceitful or underhanded, reinforcing 'calculating'."
          },
          "keyTakeaway": "Contrast structures ('While earlier... cold, new records show a far more [BLANK]...') require an antonym that matches the positive new evidence."
        },
        "glosses": {
          "compassionate": "(adj.) feeling or showing sympathy and concern for others • 🇹🇷 Şefkatli, merhametli, vicdanlı",
          "ruthless": "(adj.) having or showing no pity or compassion • 🇹🇷 Acımasız, merhametsiz",
          "declassified": "(adj.) officially made available to the public after being secret • 🇹🇷 Gizliliği kaldırılmış"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "WIC-I-01",
        "type": "words-in-context",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for the contrast between the feared outcome (job elimination) and the actual outcome (spending less time on routines and more on complex inquiries).",
        "passage": "Although many economists predicted that the introduction of automated kiosks would immediately eliminate service-sector jobs, recent employment surveys suggest that the machines have actually _______ worker productivity, allowing employees to spend less time on routine transactions and more time resolving complex customer inquiries.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) augmented",
          "B) undermined",
          "C) fabricated",
          "D) impeded"
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. 'Augmented' means made greater or enhanced. The text contrasts the predicted elimination of jobs with the reality that kiosks enabled workers to focus on higher-value customer inquiries, thus increasing productivity.",
          "choiceBreakdown": {
            "A": "Correct Answer: Directly matches increasing/enhancing worker efficiency and focus.",
            "B": "Opposite Trap: 'Undermined' means weakened or damaged, contradicting the positive outcome.",
            "C": "Out of Scope Trap: 'Fabricated' means forged or manufactured falsely.",
            "D": "Opposite Trap: 'Impeded' means obstructed or slowed down."
          },
          "keyTakeaway": "When a sentence starts with 'Although economists predicted disaster...', the main clause after the comma will describe a positive or enhanced outcome ('augmented')."
        },
        "glosses": {
          "augmented": "(verb) made greater in size, value, or productivity; increased • 🇹🇷 Artırılmış, çoğaltılmış, güçlendirilmiş",
          "undermined": "(verb) lessened the effectiveness, power, or stability of • 🇹🇷 Baltalanmış, temeli zayıflatılmış",
          "impeded": "(verb) delayed or obstructed the progress of • 🇹🇷 Engellenmiş, geciktirilmiş"
        }
      },
      {
        "id": "WIC-I-02",
        "type": "words-in-context",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Identify the defining phrase: 'without falsifiable empirical predictions, it remains a purely mathematical conjecture'.",
        "passage": "In theoretical physics, string theory is often criticized because its foundational mathematical formulations require eleven dimensions, making experimental verification extraordinarily difficult. Consequently, several prominent physicists have labeled the theory _______, arguing that without falsifiable empirical predictions, it remains a purely mathematical conjecture rather than true physical science.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) speculative",
          "B) irrefutable",
          "C) tangible",
          "D) pedestrian"
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Opposite",
          "D": "Wrong Meaning"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. 'Speculative' means based on theoretical conjecture rather than empirical proof. This directly mirrors 'without falsifiable empirical predictions' and 'purely mathematical conjecture'.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately describes an unproven theory resting on conjecture without empirical testing.",
            "B": "Opposite Trap: 'Irrefutable' means impossible to disprove, which is the exact opposite of an unverified theory.",
            "C": "Opposite Trap: 'Tangible' means concrete and touchable.",
            "D": "Wrong Meaning Trap: 'Pedestrian' means ordinary or dull, which does not mean experimentally unverified."
          },
          "keyTakeaway": "Match exact technical synonyms: 'conjecture without empirical proof' = 'speculative'."
        },
        "glosses": {
          "conjecture": "(noun) an opinion or conclusion formed on incomplete evidence • 🇹🇷 Varsayım, tahmine dayalı fikir",
          "falsifiable": "(adj.) capable of being tested and proven false by experiment • 🇹🇷 Yanlışlanabilir (deneyle çürütülebilir)",
          "speculative": "(adj.) based on conjecture rather than direct empirical knowledge • 🇹🇷 Spekülatif, kanıtsız varsayıma dayalı",
          "irrefutable": "(adj.) impossible to deny, disprove, or dispute • 🇹🇷 Çürütülemez, inkar edilemez kesinlikte"
        }
      },
      {
        "id": "WIC-I-03",
        "type": "words-in-context",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "'Far from being a passive observer...' forces the blank to describe tireless, active energy.",
        "passage": "Far from being a passive observer during the constitutional convention of 1787, James Madison was an _______ advocate for a strong national legislature, drafting the foundational Virginia Plan and authoring numerous essays to persuade skeptical delegates.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) apathetic",
          "B) indefatigable",
          "C) ambiguous",
          "D) impartial"
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'Indefatigable' means persisting tirelessly without fatigue. This directly contrasts with 'passive observer' and aligns with Madison drafting plans and writing numerous persuasive essays.",
          "choiceBreakdown": {
            "A": "Opposite Trap: 'Apathetic' means showing no enthusiasm or concern.",
            "B": "Correct Answer: Accurately reflects Madison's tireless, energetic advocacy.",
            "C": "Out of Scope Trap: 'Ambiguous' means open to multiple interpretations.",
            "D": "Opposite Trap: 'Impartial' means neutral, whereas Madison was an active partisan advocate."
          },
          "keyTakeaway": "'Far from being passive' requires a word denoting tireless vigor ('indefatigable')."
        },
        "glosses": {
          "indefatigable": "(adj.) persisting tirelessly without losing energy or enthusiasm • 🇹🇷 Yorulmak bilmez, azimli, tükenmez",
          "apathetic": "(adj.) showing or feeling no interest or concern • 🇹🇷 Kayıtsız, ilgisiz, umursamaz",
          "impartial": "(adj.) treating rivals equally; neutral and unbiased • 🇹🇷 Tarafsız, objektif, yansız"
        }
      },
      {
        "id": "WIC-I-04",
        "type": "words-in-context",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "The contrast 'not meant to [BLANK] the historic hall, but rather to complement it' requires a word meaning to overshadow or diminish.",
        "passage": "The curator was careful to emphasize that the museum's new wing was not meant to _______ the historic 19th-century main hall, but rather to complement its classical stonework with minimalist glass and light.",
        "question": "Which choice completes the text with the most logical and precise word or phrase?",
        "choices": [
          "A) eclipse",
          "B) celebrate",
          "C) preserve",
          "D) duplicate"
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Opposite",
          "D": "Wrong Meaning"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. 'Eclipse' (used figuratively as a verb) means to overshadow, diminish the prominence of, or surpass. The curator states the new wing will not overshadow the original hall, but rather enhance it.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately means to overshadow or diminish the visual importance of the historic hall.",
            "B": "Out of Scope Trap: 'Celebrate' does not fit the contrast frame with complement.",
            "C": "Opposite Trap: The curator certainly wanted to preserve the hall.",
            "D": "Wrong Meaning Trap: 'Duplicate' is contradicted by the mention of contrasting materials (minimalist glass vs. stone)."
          },
          "keyTakeaway": "Words like 'eclipse' are often tested in their secondary, metaphorical sense (to overshadow)."
        },
        "glosses": {
          "eclipse": "(verb - metaphorical) to overshadow, obscure, or surpass in importance • 🇹🇷 Gölgede bırakmak, önemini bastırmak",
          "complement": "(verb) to add to in a way that enhances or completes • 🇹🇷 Tamamlamak, bütünlemek, uyum sağlamak",
          "minimalist": "(adj.) deliberately simple, uncluttered, and stripped of excess • 🇹🇷 Sade, gösterişsiz, minimalist"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Words in Context Self-Audit",
      "prompts": [
        {
          "id": "wic-1",
          "label": "I blank the word and predict a synonym BEFORE reading the four answer choices."
        },
        {
          "id": "wic-2",
          "label": "I identify the specific context clue sentence (contrast, definition, or cause-and-effect) that forces the meaning."
        },
        {
          "id": "wic-3",
          "label": "I avoid picking common dictionary definitions when the passage demands a secondary academic meaning."
        }
      ]
    }
  },
  "MOD-2": {
    "metadata": {
      "id": "MOD-2",
      "title": "Text Structure & Purpose",
      "domain": "Craft & Structure",
      "methodName": "The Blueprint Technique",
      "tagline": "Distinguish WHAT the text says (content) from HOW it works (structure) and WHY the author wrote it (purpose)."
    },
    "stage1_skill": {
      "title": "What Does Text Structure & Purpose Test?",
      "whatItTests": "This question type tests your understanding of rhetorical architecture. You must determine either: (1) The overall function/purpose of the entire passage, (2) The structural relationship between two paragraphs or two sentences, or (3) The specific rhetorical role of an underlined sentence.",
      "frequency": "3 to 4 questions per module.",
      "recognitionTest": "Common question stems include: 'Which choice best describes the overall structure of the text?', 'Which choice best states the main purpose of the text?', or 'Which choice best describes the function of the underlined portion?'",
      "goldenRules": [
        {
          "title": "The Verb-First Elimination Rule",
          "description": "Read the first active verb of each answer choice (e.g., 'critiques', 'introduces', 'reconciles'). If the author did not perform that action, eliminate immediately."
        },
        {
          "title": "Function Over Content",
          "description": "Don't get distracted by what the topic is (e.g., dinosaurs, poetry). Focus on what the sentence DOES (e.g., provides counter-evidence, defines a term)."
        },
        {
          "title": "The Part-to-Whole Test",
          "description": "Underlined sentences usually serve as: (1) an opening hook, (2) a transition pivot, (3) supporting evidence, or (4) a concluding takeaway."
        },
        {
          "title": "The Detail Trap Veto",
          "description": "An option that accurately summarizes sentence 3 is NOT the main purpose of the entire text; it is merely an illustrative detail."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "20",
            "action": "Chunk the Text",
            "detail": "Divide text into Part 1 (Sentence 1) and Part 2 (Sentence 2–3)"
          },
          {
            "seconds": "15",
            "action": "Assign Action Verbs",
            "detail": "Tag each chunk with an action: [Claims X] -> [Refutes with Y]"
          },
          {
            "seconds": "30",
            "action": "Match Choice Verbs",
            "detail": "Check verbs in choices against your chunk tags"
          },
          {
            "seconds": "15",
            "action": "Confirm Purpose",
            "detail": "Ensure the choice covers the whole text, not just one detail"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The Content Summary Fallacy",
          "explanation": "Picking a choice that describes what the passage is about rather than how the argument is structured."
        },
        {
          "name": "The False Resolution Error",
          "explanation": "Choosing an option that claims the author 'settled a debate' when the author merely presented two competing views without resolving them."
        }
      ],
      "eslNote": "Learn the specific rhetorical verbs used on the SAT: 'qualify' (limit), 'substantiate' (provide evidence for), 'reconcile' (bring two opposing views together), 'delineate' (describe in detail).",
      "turkishScaffold": {
        "title": "🇹🇷 Text Structure & Purpose: Retorik Eylemleri Tanıma",
        "strategyNote": "Bu soru tipinde seçeneklerin ilk fiiline (action verb) bakın: Describe (betimliyor mu), Challenge (eleştiriyor mu), Reconcile (uzlaştırıyor mu), Concede (kabul edip geri adım mı atıyor)? Parçanın ne anlattığına değil, yazarın yapısal olarak ne YAPTIĞINA odaklanın.",
        "falseFriends": [
          {
            "word": "Concede",
            "wrongConcept": "Yenilgiyi kabul etmek",
            "correctConcept": "Karşı tarafın haklı bir noktasını teslim etmek (ödün/itiraf)"
          },
          {
            "word": "Substantiate",
            "wrongConcept": "Maddeleştirmek",
            "correctConcept": "Somut delillerle doğrulamak/ispatlamak"
          }
        ],
        "keyVocab": [
          {
            "word": "Paradox",
            "pos": "noun",
            "tr": "Çelişki, görünüşte mantıksız ama gerçek olan durum"
          },
          {
            "word": "Impasse",
            "pos": "noun",
            "tr": "Çıkmaz sokak, kilitlenme, çözümsüzlük"
          },
          {
            "word": "Delineate",
            "pos": "verb",
            "tr": "Ayrıntılarıyla betimlemek, sınırlarını çizmek"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The Blueprint Technique",
      "summary": "Map the passage into functional blocks rather than getting lost in the factual details.",
      "examFormula": "Text Structure = Chunk 1 [Action Verb 1] + Transition Joint + Chunk 2 [Action Verb 2]",
      "steps": [
        {
          "num": 1,
          "title": "Divide into Functional Chunks",
          "rule": "Split the passage into Part 1 (Sentence 1-2) and Part 2 (Remaining text).",
          "expertMove": "I ask: 'Where is the structural joint?' usually marked by a transition or topic shift."
        },
        {
          "num": 2,
          "title": "Assign an Action Verb to Each Chunk",
          "rule": "Label each chunk with a rhetorical action (e.g., [States old theory] -> [Provides counter-example]).",
          "expertMove": "I never summarize what the text says; I summarize what the text DOES."
        },
        {
          "num": 3,
          "title": "Verify the Verb in the Choices",
          "rule": "Match your two-part action blueprint against the verbs in the answer options.",
          "expertMove": "If an option starts with 'Defends a controversial theory,' but the passage was attacking the theory, I kill it instantly on the verb."
        },
        {
          "num": 4,
          "title": "Differentiate Purpose from Detail",
          "rule": "Beware of 'Half Right' traps that describe a true sub-point rather than the passage's overall mission.",
          "expertMove": "A supporting example is not the overall purpose; it is merely evidence for the purpose."
        }
      ],
      "checklist": [
        "Did I check if the opening verb matches the author's action (e.g., introduces vs. refutes)?",
        "Does the option capture both halves of a two-part passage?",
        "If it's an underlined sentence, did I check how it connects to the sentences before and after it?",
        "Did I eliminate options that merely restate a single detail?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "TSP-W-01",
        "type": "text-structure-purpose",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "Map the 3-part chronological flow: [Hypothesis proposed] -> [Initial scientific rejection] -> [Subsequent discovery that validated it].",
        "passage": "In 1912, Alfred Wegener proposed the theory of continental drift, hypothesizing that Earth's landmasses were once joined in a supercontinent he named Pangaea. At the time, prominent geologists overwhelmingly dismissed Wegener's ideas because he could not propose a convincing physical mechanism capable of propelling entire continents across solid oceanic crust. Decades later, however, the mapping of the mid-Atlantic ridge and the discovery of seafloor spreading provided the missing geophysical mechanism, transforming Wegener's once-ridiculed hypothesis into the bedrock of modern plate tectonics.",
        "question": "Which choice best describes the overall structure of the text?",
        "choices": [
          "A) It introduces a scientific hypothesis, explains why it was initially rejected, and then describes the later discoveries that validated it.",
          "B) It compares two competing geological theories and concludes that neither is supported by empirical observations.",
          "C) It presents a historical timeline of technological inventions that allowed researchers to map the mid-Atlantic seabed.",
          "D) It details a prevailing geological consensus and argues that modern plate tectonics has become fundamentally outdated."
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1 (Chunk the Text): Sentence 1 = Wegener proposes continental drift (Introduction). Sentence 2 = Geologists dismiss it for lack of mechanism (Rejection). Sentence 3 = 'Decades later, however...' seafloor spreading validates it (Validation).",
          "Step 2 (Assign Action Verbs): [Introduces hypothesis] -> [Explains initial rejection] -> [Describes later validation].",
          "Step 3 (Compare Verbs in Choices): Choice A: 'introduces a hypothesis... explains why initially rejected... describes later discoveries that validated it'. Perfect 3-part blueprint match.",
          "Step 4 (Eliminate Choice B): Choice B says 'neither is supported' (Opposite trap).",
          "Step 5 (Eliminate Choice C): Choice C focuses on 'technological inventions' (Half Right / Detail trap).",
          "Step 6 (Eliminate Choice D): Choice D claims plate tectonics is 'outdated' (Opposite trap)."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Half Right",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because it matches the exact 3-step rhetorical blueprint: introducing Wegener's continental drift hypothesis -> detailing why peers rejected it -> explaining how seafloor spreading later validated it.",
          "choiceBreakdown": {
            "A": "Correct Answer: 1-to-1 structural mapping of the passage's chronological and logical development.",
            "B": "Opposite Trap: The passage concludes that Wegener's theory was validated, not that neither theory was supported.",
            "C": "Half Right / Detail Trap: Seabed mapping is a supporting detail used to explain validation, not the overarching structure.",
            "D": "Opposite Trap: Plate tectonics is presented as the foundational bedrock of modern science, not outdated."
          },
          "keyTakeaway": "On 3-sentence historical science passages, look for the standard arc: Hypothesis -> Rejection -> Late Vindication."
        },
        "glosses": {
          "continental drift": "(noun) the geological theory that continents shift positions across the earth's surface • 🇹🇷 Kıtaların kayması teorisi",
          "orthodoxy": "(noun) authorized or generally accepted theory • 🇹🇷 Yerleşik inanç, geleneksel kabul görmüş öğreti",
          "bedrock": "(noun) fundamental principles or foundation • 🇹🇷 Temel taş, esas dayanak",
          "geophysical": "(adj.) relating to the physics of the earth • 🇹🇷 Jeofiziksel (yer fiziğine ait)"
        }
      },
      {
        "id": "TSP-W-02",
        "type": "text-structure-purpose",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "When a sentence starts with 'Yet this reading overlooks...', its function is to introduce the author's counter-claim against a prevailing interpretation.",
        "passage": "Many literary historians have characterized Mary Shelley's *Frankenstein* (1818) exclusively as a cautionary tale warning against unfettered scientific hubris. <u>Yet this narrow reading overlooks Shelley's intense engagement with contemporary socio-political philosophy.</u> Throughout the novel, the creature's monstrous descent is driven not by inherently evil biology, but by the relentless social ostracization, cruelty, and emotional abandonment he experiences at the hands of human society.",
        "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
        "choices": [
          "A) It establishes an analogy between the monster's physical appearance and 19th-century scientific instruments.",
          "B) It introduces the author's primary counter-claim against a prevailing critical interpretation of the novel.",
          "C) It provides statistical evidence demonstrating that Shelley's novel was unpopular among 19th-century readers.",
          "D) It concedes that the novel's main theme is indeed the dangerous ambition of modern scientists."
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Analyze Context Surrounding Underlined Sentence): Sentence 1 outlines the conventional critical view ('cautionary tale against scientific hubris'). Sentence 3 explains the sociological theme.",
          "Step 2 (Examine the Underlined Sentence Itself): 'Yet this narrow reading overlooks Shelley's intense engagement with contemporary socio-political philosophy.'",
          "Step 3 (Determine Rhetorical Function): The sentence acts as the thesis pivot—it rejects the narrow traditional view and asserts a broader sociological counter-claim.",
          "Step 4 (Test Choice B): Choice B: 'introduces the author's primary counter-claim against a prevailing critical interpretation.' Exact match.",
          "Step 5 (Eliminate Distractors): Choice A is Out of Scope (no analogy). Choice C is Out of Scope (no statistics on popularity). Choice D is an Opposite trap (it rejects the exclusive scientific ambition reading)."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B accurately states the function: by opening with 'Yet this narrow reading overlooks...', the underlined sentence directly challenges the prevailing critical interpretation from sentence 1 and introduces the author's counter-claim that is elaborated in the rest of the text.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: The text draws no comparison or analogy to scientific instruments.",
            "B": "Correct Answer: Accurately identifies the rhetorical role as introducing a counter-claim against a dominant reading.",
            "C": "Out of Scope Trap: The text discusses literary interpretation, not reader popularity statistics.",
            "D": "Opposite Trap: The sentence argues against viewing the novel exclusively as a warning about scientific ambition."
          },
          "keyTakeaway": "Underlined sentences containing 'Yet this overlooks X' serve as the thesis pivot of the passage."
        },
        "glosses": {
          "unfettered": "(adj.) unrestrained, unrestricted, or uncontrolled • 🇹🇷 Bağsız, serbest, sınırsız",
          "hubris": "(noun) excessive pride or dangerous overconfidence • 🇹🇷 Aşırı kibir, küstahlık, haddini aşma",
          "ostracization": "(noun) exclusion or banishment from a community or society • 🇹🇷 Toplumdan dışlanma, aforoz edilme",
          "counter-claim": "(noun) an argument presented to oppose or refute a previous assertion • 🇹🇷 Karşı iddia, antitez"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "TSP-TRAP-01",
        "stem": "Text: 'While traditional historians credited the industrial revolution solely to steam engine patents, recent archival economic studies emphasize the pivotal role of agricultural yield surpluses in creating urban labor pools.'",
        "wrongChoice": "To prove that steam engines were completely useless during the 19th century.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Opposite",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "'Completely useless' is an extreme distortion. The author acknowledges steam engines were credited, but qualifies this by showing agricultural yields were also critical."
      },
      {
        "id": "TSP-TRAP-02",
        "stem": "Text: 'The author opens by describing a common culinary misconception, illustrates it with a baking experiment, and concludes by providing a chemical explanation for why yeast responds to temperature.'",
        "wrongChoice": "To provide step-by-step instructions for baking a loaf of sourdough bread at home.",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Too Extreme",
          "Out of Scope",
          "Opposite"
        ],
        "rationale": "While baking is used as an illustrative example, the overall purpose of the passage is explaining the underlying science of yeast and correcting a misconception, not offering a practical kitchen recipe."
      },
      {
        "id": "TSP-TRAP-03",
        "stem": "Text: 'The passage explores whether decentralized solar microgrids can stabilize rural electrification, examines three pilot programs in Kenya, and highlights their cost-effectiveness.'",
        "wrongChoice": "It condemns international aid organizations for failing to invest in national electric power plants.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Opposite",
          "Too Extreme",
          "Half Right"
        ],
        "rationale": "The passage discusses the success of solar microgrids in Kenya. Condemning aid organizations or national power plants is an unmentioned outside topic."
      },
      {
        "id": "TSP-TRAP-04",
        "stem": "Text: 'Sentence 1 establishes that sleep deprivation impairs memory consolidation. Sentence 2 details how slow-wave brain oscillations during deep sleep transfer short-term memories into the neocortex.'",
        "wrongChoice": "Sentence 2 refutes the biological premise introduced in Sentence 1.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Half Right",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "Sentence 2 supports and explains the mechanism behind Sentence 1; it does not refute or contradict it."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "TSP-G-01",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Easy",
        "strategyHeuristic": "Look at the relationship: Sentence 1 defines a general concept, and Sentences 2-3 provide a concrete case study illustrating it.",
        "passage": "Biomimicry is the practice of looking to nature for solutions to complex engineering challenges. For example, the high-speed Japanese Shinkansen bullet train originally generated a deafening sonic boom whenever it exited tunnels at high speeds. Engineer Eiji Nakatsu resolved this dilemma by redesigning the train's nose to mimic the streamlined beak of the kingfisher bird, which dives seamlessly into water with minimal splash and resistance.",
        "question": "Which choice best describes the main purpose of the text?",
        "choices": [
          "A) To argue that modern high-speed trains are too hazardous for urban transportation.",
          "B) To illustrate the concept of biomimicry by explaining a specific engineering problem and its biological solution.",
          "C) To provide a detailed anatomical description of the kingfisher's respiratory system.",
          "D) To prove that nature has provided the blueprint for every modern machine in existence."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the first sentence ('Biomimicry is the practice of...') and note how the train story connects to it via 'For example'.",
          "Hint 2 (Strategy Reminder): Apply Step 2 of the Blueprint Technique: What is the relationship between the definition in sentence 1 and the example in sentences 2-3?",
          "Hint 3 (Partial Solution): Choice A is negative/unsupported. Choice C is a tiny detail (Half Right). Choice D uses extreme language ('every modern machine in existence'). Choice B captures definition + illustrative example."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Half Right",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Sentence 1 establishes the definition of biomimicry, and sentences 2–3 describe a specific case study (the Shinkansen train nose inspired by the kingfisher beak) to illustrate how biological principles solve human engineering problems.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: The author describes how the sonic boom dilemma was solved, not that trains are hazardous.",
            "B": "Correct Answer: Accurately identifies the purpose as illustrating biomimicry via a specific engineering case study.",
            "C": "Half Right Trap: The kingfisher's beak is mentioned briefly as an inspiration, but its respiratory system is not described.",
            "D": "Too Extreme Trap: 'Every modern machine in existence' is an absurdly absolute overstatement."
          },
          "keyTakeaway": "When a passage opens with a definition and follows with 'For example...', the main purpose is to define and illustrate that concept."
        },
        "glosses": {
          "biomimicry": "(noun) the practice of designing materials or systems modeled on biological structures • 🇹🇷 Biyotaklit (doğayı taklit eden mühendislik)",
          "deafening": "(adj.) extremely loud • 🇹🇷 Kulak tırmalayıcı, sağır edici ses",
          "streamlined": "(adj.) designed to offer the least resistance to air or fluid flow • 🇹🇷 Akıcı, aerodinamik sürtünmesiz hatlar"
        }
      },
      {
        "id": "TSP-G-02",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "The underlined sentence introduces the technological methodology used to break a historical scholarly deadlock.",
        "passage": "For centuries, the origin of the Indus Valley Civilization's enigmatic script remained a major scholarly impasse, with epigraphers debating whether the inscriptions represented a spoken Dravidian tongue, an Indo-European dialect, or a purely non-linguistic symbol system. <u>Recently, computational linguist Rajesh Rao applied conditional entropy algorithms to compare the script against known human languages and non-linguistic data sets.</u> Rao's statistical models demonstrated that the script's pattern regularity falls squarely within the range of natural spoken languages, effectively ruling out the non-linguistic symbol hypothesis.",
        "question": "Which choice best describes the function of the underlined sentence?",
        "choices": [
          "A) It introduces a novel computational method used to investigate a long-standing scholarly debate.",
          "B) It concedes that the Indus Valley script can never be deciphered by modern linguistic techniques.",
          "C) It summarizes the final grammatical rules of the Indus Valley language.",
          "D) It demonstrates that human speech patterns are fundamentally unpredictable."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at what comes before the underlined sentence ('scholarly impasse... debating whether...') and what comes after ('Rao's statistical models demonstrated...').",
          "Hint 2 (Strategy Reminder): The underlined sentence describes Rajesh Rao applying 'conditional entropy algorithms'. How does this connect the unresolved debate to the new finding?",
          "Hint 3 (Partial Solution): The underlined sentence introduces the technological tool/approach (computational method) that broke the historical impasse. Look for the choice stating 'introduces a novel computational method'."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Half Right",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A accurately identifies the sentence's rhetorical role: it introduces Rajesh Rao's use of computational algorithms as a new method to investigate the long-standing debate introduced in sentence 1.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately identifies the sentence as introducing a new computational method to address the debate.",
            "B": "Too Extreme Trap: The passage is optimistic about computational analysis, not conceding permanent failure.",
            "C": "Half Right Trap: The study determined the script was a spoken language, but did not produce its grammatical rules.",
            "D": "Opposite Trap: The passage found predictable patterns in language, not that speech is unpredictable."
          },
          "keyTakeaway": "Track how an underlined sentence links the problem (historical impasse) to the solution (statistical findings)."
        },
        "glosses": {
          "enigmatic": "(adj.) difficult to interpret or understand; mysterious • 🇹🇷 Esrarengiz, gizemli, anlaşılması güç",
          "impasse": "(noun) a deadlock where no progress is possible • 🇹🇷 Çıkmaz sokak, kilitlenme, çözümsüzlük",
          "epigraphers": "(noun) scholars who study ancient inscriptions • 🇹🇷 Yazıtbilimciler (antik yazıt uzmanları)",
          "conditional entropy": "(noun) a statistical measure of information regularity • 🇹🇷 Koşullu entropi (düzenlilik istatistiği)"
        }
      },
      {
        "id": "TSP-G-03",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for the classic two-part interdisciplinary structure: [Orthodox view from Field A] + [Alternative perspective from Field B].",
        "passage": "In standard neoclassical macroeconomics, high inflation is attributed almost exclusively to an excessive expansion of the money supply by central banks. Sociologist Greta Krippner, however, offers an alternative perspective, demonstrating that the severe inflation of the 1970s was deeply tied to political struggles over income distribution. When governments lacked the political capital to allocate fiscal burdens directly, they allowed wage-price spirals to proliferate as a temporary political compromise, effectively deferring structural economic conflict.",
        "question": "Which choice best describes the overall structure of the text?",
        "choices": [
          "A) It establishes an economic principle, provides statistical data proving its universal validity, and calls for stricter monetary regulation.",
          "B) It outlines a conventional economic explanation for a phenomenon and then presents a sociological framework that interprets it differently.",
          "C) It compares two sociological theories of political compromise and concludes that both are fundamentally flawed.",
          "D) It chronicles the historical development of central banking systems from the 18th century to the present day."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Spot the pivot word 'however' in the second sentence. What two fields are contrasted?",
          "Hint 2 (Strategy Reminder): Sentence 1 = neoclassical macroeconomics view. Sentence 2-3 = Greta Krippner's sociological perspective. How does the passage move?",
          "Hint 3 (Partial Solution): Choice B matches: 'conventional economic explanation' -> 'sociological framework that interprets it differently'. Check why Choice A and C fail."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The text begins with the orthodox neoclassical explanation for inflation (money supply expansion) and then presents Krippner's sociological research interpreting 1970s inflation through political distribution struggles.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The passage introduces Krippner's work to provide an alternative, not to prove the economic principle universally valid.",
            "B": "Correct Answer: Accurately captures the structural movement from conventional economic explanation to alternative sociological framework.",
            "C": "Opposite Trap: It compares an economic view with a sociological view, not two sociological views.",
            "D": "Out of Scope Trap: The text does not provide an 18th-century banking history."
          },
          "keyTakeaway": "On interdisciplinary passages, identify the two disciplines being contrasted (economics vs. sociology)."
        },
        "glosses": {
          "neoclassical": "(adj.) referring to mainstream economic theory based on supply, demand, and monetary policy • 🇹🇷 Neoklasik ekonomi kuramı",
          "proliferate": "(verb) increase rapidly in number; multiply • 🇹🇷 Hızla çoğalmak, yayılmak",
          "deferring": "(verb) putting off an action or confrontation to a future time • 🇹🇷 Ertelemek, geciktirmek"
        }
      },
      {
        "id": "TSP-G-04",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "References to discarded theories (like miasma) establish the historical baseline of error that the protagonist overcame.",
        "passage": "In 1854, during a catastrophic cholera outbreak in London's Soho district, prevailing medical dogma insisted that the disease was transmitted through 'miasma'—noxious air arising from decaying organic matter. Physician John Snow rejected this atmospheric theory. By meticulously plotting cholera deaths on a street map and interviewing residents, Snow demonstrated that infections clustered exclusively around the Broad Street water pump. When Snow persuaded local authorities to remove the pump handle, new infections plummeted, inaugurating the field of modern spatial epidemiology.",
        "question": "Which choice best describes the function of the reference to the 'miasma' theory in the text?",
        "choices": [
          "A) It highlights the prevailing, incorrect belief that John Snow's empirical investigation successfully disproved.",
          "B) It provides the scientific evidence that John Snow utilized to convince the city council to remove the pump handle.",
          "C) It explains why London officials refused to allow John Snow to construct a street map of cholera deaths.",
          "D) It demonstrates that cholera is an airborne pathogen that cannot be spread through municipal water sources."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): What does the passage call the miasma theory? ('prevailing medical dogma'). Did Snow agree or disagree?",
          "Hint 2 (Strategy Reminder): The text says 'Snow rejected this atmospheric theory' and proved water contamination instead.",
          "Hint 3 (Partial Solution): The reference to miasma sets up the baseline incorrect belief that Snow had to overturn. Look for Choice A."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A accurately describes the function of the miasma reference: it establishes the dominant, erroneous medical dogma of the era, which gives context to the significance of John Snow's waterborne discovery.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately identifies the miasma theory as the flawed belief that Snow's mapping disproved.",
            "B": "Opposite Trap: Snow disproved miasma; he did not use it as evidence to remove the handle.",
            "C": "Out of Scope Trap: Officials did not block his map; they complied by removing the handle.",
            "D": "Opposite Trap: Cholera is waterborne, which is what Snow proved."
          },
          "keyTakeaway": "References to ancient/flawed beliefs serve as rhetorical contrasts to highlight the groundbreaking nature of a new discovery."
        },
        "glosses": {
          "dogma": "(noun) a principle laid down by authority as incontrovertibly true • 🇹🇷 Dogma (sorgulanmadan kabul edilen inanç)",
          "miasma": "(noun) an oppressive vapor or noxious air formerly thought to cause diseases • 🇹🇷 Miyazma (eski tıpta zehirli kirli hava inancı)",
          "noxious": "(adj.) harmful, poisonous, or highly unpleasant • 🇹🇷 Zararlı, zehirli, sağlığa aykırı",
          "spatial epidemiology": "(noun) the geographical study of disease distribution and spread • 🇹🇷 Mekansal epidemiyoloji (hastalık haritalama)"
        }
      },
      {
        "id": "TSP-G-05",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Track the shift from a common scientific assumption to experimental counter-evidence demonstrating animal tool sophistication.",
        "passage": "For decades, primatologists assumed that complex tool manufacture was an exclusively hominid achievement, setting humans and our direct ancestors apart from all other primates. However, field observations of wild New Caledonian crows have upended this consensus. Researchers observed the corvids selecting specific pandanus leaves, cutting uniform serrated hooks using their beaks, and deploying these handcrafted implements to extract beetle larvae from narrow tree hollows—a multi-stage manufacturing sequence previously thought impossible in avian brains.",
        "question": "Which choice best describes the primary purpose of the text?",
        "choices": [
          "A) To establish that New Caledonian crows possess greater cognitive ability than hominids.",
          "B) To challenge a traditional scientific assumption by presenting evidence of sophisticated tool fabrication in a non-human species.",
          "C) To argue that pandanus trees are the sole habitat capable of supporting complex avian behavior.",
          "D) To describe how hominids originally learned toolmaking techniques by observing wild corvids."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at Sentence 1 ('assumed that complex tool manufacture was exclusively hominid') and Sentence 2 ('However... upended this consensus').",
          "Hint 2 (Strategy Reminder): What did the crows actually do? They selected leaves, cut serrated hooks, and extracted larvae (multi-stage toolmaking).",
          "Hint 3 (Partial Solution): Choice B accurately captures challenging the hominid-only assumption using the crow evidence."
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The text begins by outlining the long-held assumption that complex tool manufacture belonged exclusively to hominids, and then shows how observations of New Caledonian crows fabrication sequences challenged that view.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: The passage does not claim crows are smarter than humans, only that toolmaking is not uniquely human.",
            "B": "Correct Answer: Accurately summarizes challenging a long-held belief with new empirical observations.",
            "C": "Too Extreme Trap: Pandanus leaves are one material used; the text never claims they are the sole capable habitat.",
            "D": "Opposite Trap: Reverses chronology; hominids did not learn toolmaking from crows."
          },
          "keyTakeaway": "Notice the transition from an orthodox dogma ('For decades, scientists assumed...') through 'However' to empirical counter-evidence."
        },
        "glosses": {
          "hominid": "(noun) a primate of a family that includes humans and their fossil ancestors • 🇹🇷 İnsangiller (hominidler)",
          "corvids": "(noun) birds of the crow family, renowned for high intelligence • 🇹🇷 Karga familyası üyeleri",
          "serrated": "(adj.) having or denoting a jagged edge; saw-like • 🇹🇷 Testere dişli, tırtıklı"
        }
      },
      {
        "id": "TSP-G-06",
        "type": "text-structure-purpose",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Identify how the final sentence qualifies the celebratory findings introduced in the middle of the text.",
        "passage": "In 2021, geothermal engineers successfully drilled a 4.5-kilometer borehole into the Krafla caldera in Iceland, directly reaching magma chambers with temperatures exceeding 900 degrees Celsius. The breakthrough generated widespread optimism that superhot geothermal energy could provide virtually limitless, zero-carbon baseload electricity to power modern industrial centers. Yet materials scientists emphasize that corrosive volcanic gases and extreme thermal pressures rapidly degrade drilling casings, warning that commercial viability remains decades away until resilient alloy metallurgy advances significantly.",
        "question": "Which choice best describes the function of the final sentence in the overall context of the text?",
        "choices": [
          "A) It offers a practical caution that tempers the enthusiasm generated by the technological milestone described earlier.",
          "B) It proves that geothermal energy production is fundamentally hazardous and should be halted immediately.",
          "C) It provides statistical proof that Krafla caldera magma is hotter than magma found in other volcanic systems.",
          "D) It outlines the specific chemical composition of the resilient alloy casings used during the initial 2021 drilling."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the pivot 'Yet' at the start of the last sentence, introducing 'materials scientists emphasize... warning that commercial viability remains decades away'.",
          "Hint 2 (Strategy Reminder): Sentence 2 describes 'widespread optimism'. How does the final sentence relate to that optimism?",
          "Hint 3 (Partial Solution): The final sentence tempers or qualifies the optimism by noting technical hurdles (corrosive gases, metallurgy limitations)."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Out of Scope",
          "D": "Half Right"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The passage progresses from a milestone (reaching magma) to optimism (limitless zero-carbon power), but the final sentence introduces practical constraints (corrosive gases, casing degradation) that temper this excitement.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately characterizes the final sentence as a practical caution that balances earlier enthusiasm.",
            "B": "Too Extreme Trap: The scientists warn about metallurgical hurdles, not that drilling must be halted immediately.",
            "C": "Out of Scope Trap: The text does not compare Krafla temperatures to other volcanic systems.",
            "D": "Half Right Trap: It mentions that resilient alloys are still needed, not that they were already used in 2021."
          },
          "keyTakeaway": "Look for qualifying sentences ('Yet scientists emphasize that challenges remain...') that temper optimistic breakthroughs."
        },
        "glosses": {
          "caldera": "(noun) a large volcanic crater formed by a major eruption • 🇹🇷 Kaldera (çökmüş yanardağ krateri)",
          "baseload": "(noun) the permanent minimum load that a power grid must supply • 🇹🇷 Temel yük (kesintisiz elektrik arzı)",
          "metallurgy": "(noun) the branch of science concerned with the properties of metals and alloys • 🇹🇷 Metalürji (metal bilimi)"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "TSP-I-01",
        "type": "text-structure-purpose",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Identify the structure: Introduction of an agricultural technology + Sociological critique of its unintended consolidation impact.",
        "passage": "Many agricultural researchers have celebrated precision farming—the use of GPS, drone imagery, and soil sensors to apply fertilizers only where needed—as an unqualified environmental victory. However, rural sociologists caution that the steep capital costs of precision hardware tend to accelerate farm consolidation, forcing smaller family farms out of business while enriching massive agribusiness conglomerates.",
        "question": "Which choice best states the primary purpose of the text?",
        "choices": [
          "A) To advocate for a complete ban on GPS-guided agricultural machinery in modern farming.",
          "B) To present a technological innovation in agriculture and highlight a negative socioeconomic consequence associated with its adoption.",
          "C) To describe the precise technical specifications of drone cameras used in modern agriculture.",
          "D) To prove that family-owned farms produce higher crop yields than large corporate conglomerates."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Half Right",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The passage introduces precision farming (the technological innovation) and then presents the sociologists' warning that high costs accelerate farm consolidation (a negative socioeconomic consequence).",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: The passage urges caution regarding economic impact; it does not advocate a complete ban.",
            "B": "Correct Answer: Perfectly captures the balance between introducing the technology and highlighting its socioeconomic side effect.",
            "C": "Half Right Trap: Drone cameras are mentioned as one tool, but technical specifications are not given.",
            "D": "Out of Scope Trap: The passage never compares crop yields between family and corporate farms."
          },
          "keyTakeaway": "On purpose questions for technology passages, look for balanced choices that capture both the innovation and the critical drawback."
        },
        "glosses": {
          "precision farming": "(noun) high-tech farming utilizing sensors and GPS to optimize fertilizer and water • 🇹🇷 Hassas tarım (GPS ve sensörlü modern tarım)",
          "consolidation": "(noun) the merging of multiple smaller businesses into giant conglomerates • 🇹🇷 Hafıza konsolidasyonu (anının kalıcı depoya yazılması)",
          "conglomerates": "(noun) large commercial corporations composed of merged companies • 🇹🇷 Büyük holdingler, çok uluslu şirketler"
        }
      },
      {
        "id": "TSP-I-02",
        "type": "text-structure-purpose",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "When a chemical paradox or trade-off is established in sentence 1, the underlined sentence introduces the molecular innovation that solves the paradox.",
        "passage": "In materials science, developing polymers that are both extraordinarily rigid and easily recyclable has long posed a chemical paradox: rigidity requires permanent covalent cross-linking between molecular chains, whereas easy recyclability requires weak bonds that can be disassembled by heat. <u>Recently, chemist Jianing Zhang synthesised a class of 'vitrimers' containing dynamic covalent bonds that remain stable at room temperature but exchange partners when heated above 150°C.</u> This molecular architecture allows the material to retain the mechanical strength of thermoset plastics while permitting repeated reprocessing.",
        "question": "Which choice best describes the function of the underlined sentence in the overall passage?",
        "choices": [
          "A) It introduces a chemical breakthrough that resolves the trade-off described earlier in the text.",
          "B) It demonstrates why vitrimers are unsuitable for any commercial manufacturing applications.",
          "C) It provides historical context on the discovery of rubber vulcanization in the 19th century.",
          "D) It proves that heating plastics above 150°C invariably causes irreversible structural degradation."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A accurately describes the function: sentence 1 poses the trade-off (rigidity vs. recyclability), and the underlined sentence introduces Zhang's synthesized vitrimers as the breakthrough that overcomes this chemical paradox.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately identifies the sentence as introducing the solution to the chemical trade-off.",
            "B": "Opposite Trap: The passage celebrates vitrimers as a success permitting repeated reprocessing.",
            "C": "Out of Scope Trap: 19th-century rubber vulcanization is never mentioned.",
            "D": "Opposite Trap: Heating above 150°C allows dynamic bond exchange without irreversible degradation."
          },
          "keyTakeaway": "Problem-and-solution passages have a predictable structure: Sentence 1 introduces the engineering paradox; the underlined sentence introduces the innovative solution."
        },
        "glosses": {
          "covalent bonds": "(noun) strong chemical bonds where atoms share electron pairs • 🇹🇷 Kovalent bağlar (güçlü kimyasal bağ)",
          "thermoset plastics": "(noun) rigid polymers that cannot be remelted once cured • 🇹🇷 Termoset plastikler (eritilip şekil almayan)",
          "vitrimers": "(noun) dynamic plastic materials capable of flow and recycling when heated • 🇹🇷 Vitrimerler (ısıtıldığında geri dönüşen akıllı plastik)"
        }
      },
      {
        "id": "TSP-I-03",
        "type": "text-structure-purpose",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Track the evolution: [Early academic methodology] -> [Contemporary theoretical critique].",
        "passage": "Early 20th-century ethnomusicologists often recorded Indigenous folksongs with the stated aim of 'salvaging' dying cultures before they assimilated into modern Western society. Contemporary musicologist Beverly Diamond critiques this salvage framework as fundamentally paternalistic. She argues that Indigenous musical traditions were never static relics doomed to extinction, but rather dynamic, evolving practices through which communities actively assert sovereignty and adapt to historical change.",
        "question": "Which choice best describes the overall structure of the text?",
        "choices": [
          "A) It presents an early academic approach to a subject and then discusses a modern critique that reinterprets that subject's nature.",
          "B) It describes a musical notation system, explains its mathematical complexity, and advocates for its adoption in public schools.",
          "C) It details a dispute between two 20th-century field researchers regarding the audio quality of wax cylinder recordings.",
          "D) It establishes that traditional Indigenous songs have completely ceased to exist in the contemporary era."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A captures the rhetorical movement: sentence 1 introduces the early 20th-century 'salvage' approach, and sentences 2–3 detail Beverly Diamond's modern critique, which reconceptualizes Indigenous music as dynamic and sovereign.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately maps the structure from early academic approach to modern reinterpretation.",
            "B": "Out of Scope Trap: No musical notation system or school curriculum is discussed.",
            "C": "Out of Scope Trap: No audio quality dispute between field researchers is mentioned.",
            "D": "Opposite Trap: Diamond argues traditions are dynamic and alive, not that they ceased to exist."
          },
          "keyTakeaway": "Look for shifts between historical paradigms and contemporary critical reformulations."
        },
        "glosses": {
          "ethnomusicologists": "(noun) scholars who study music in its cultural and social contexts • 🇹🇷 Etnomüzikologlar (kültürel müzik bilimciler)",
          "paternalistic": "(adj.) treating people in a fatherly manner that restricts their freedom or autonomy • 🇹🇷 Babacan ama vesayetçi/kısıtlayıcı yaklaşım",
          "sovereignty": "(noun) the authority of a people to govern their own affairs and cultural identity • 🇹🇷 Egemenlik, bağımsızlık"
        }
      },
      {
        "id": "TSP-I-04",
        "type": "text-structure-purpose",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for historical counter-evidence that invalidated a famous economic forecast.",
        "passage": "In 1798, Thomas Malthus published his *Essay on the Principle of Population*, arguing that because human population grows geometrically while food production increases only arithmetically, mass famine was mathematically inevitable. <u>Yet Malthus failed to foresee the Haber-Bosch process and genetic hybridization, which exponentially multiplied agricultural yields throughout the 20th century.</u> Consequently, global food production has outpaced population growth, though political distribution inequalities continue to cause localized food insecurity.",
        "question": "Which choice best describes the function of the underlined sentence in the text?",
        "choices": [
          "A) It provides historical validation for Malthus's mathematical population projections.",
          "B) It identifies specific technological innovations that undermined the premise of Malthus's dire prediction.",
          "C) It argues that synthetic fertilizers should be banned to protect global biodiversity.",
          "D) It proves that hunger has been completely and permanently eliminated worldwide."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Sentence 1 establishes Malthus's prediction of inevitable famine. The underlined sentence introduces the unforeseen innovations (Haber-Bosch process, genetic hybridization) that multiplied food yields and undermined his premise.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The sentence refutes Malthus's projection rather than validating it.",
            "B": "Correct Answer: Accurately explains that the sentence introduces technological breakthroughs that invalidated Malthus's prediction.",
            "C": "Out of Scope Trap: Banning synthetic fertilizers is never argued.",
            "D": "Too Extreme Trap: The final sentence explicitly notes that localized food insecurity still exists."
          },
          "keyTakeaway": "Underlined sentences highlighting unforeseen discoveries explain why a historical theory failed."
        },
        "glosses": {
          "geometrically": "(adv.) increasing exponentially at a multiplying ratio • 🇹🇷 Geometrik/üstel olarak (katlanarak artan)",
          "arithmetically": "(adv.) increasing linearly at a constant addition rate • 🇹🇷 Aritmetik olarak (doğrusal 1-2-3 artan)",
          "Haber-Bosch process": "(noun) an industrial chemical method for synthesizing ammonia fertilizer",
          "hybridization": "(noun) cross-breeding varieties to produce higher-yielding crops • 🇹🇷 Melezleme, çaprazlama yoluyla verim artırma"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Text Structure & Purpose Self-Audit",
      "prompts": [
        {
          "id": "tsp-1",
          "label": "I can identify the structural pivot (where the text shifts from introduction to critique, evidence, or resolution)."
        },
        {
          "id": "tsp-2",
          "label": "I evaluate answer choices by looking at the active rhetorical verbs (introduces, critiques, qualifies) rather than just topic words."
        },
        {
          "id": "tsp-3",
          "label": "I can distinguish between a specific detail used as evidence and the overall purpose of the entire passage."
        }
      ]
    }
  },
  "MOD-3": {
    "metadata": {
      "id": "MOD-3",
      "title": "Cross-Text Connections",
      "domain": "Craft & Structure",
      "methodName": "The Venn Bridge Protocol",
      "tagline": "Isolate Text 1's thesis, isolate Text 2's thesis, identify the logical bridge, and never mix up the perspective direction."
    },
    "stage1_skill": {
      "title": "What Does Cross-Text Connections Test?",
      "whatItTests": "Cross-Text Connections presents two paired passages (Text 1 and Text 2) on the same topic and asks you to evaluate how the author of one text would respond to the findings, claims, or perspective of the other.",
      "frequency": "1 to 2 questions per module.",
      "recognitionTest": "The question stem typically asks: 'Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 regarding [X]?' or 'Which choice best describes a shared assumption between both authors?'",
      "goldenRules": [
        {
          "title": "The Perspective Lock Rule",
          "description": "Always underline WHO is responding to WHOM in the question stem. The #1 trap is picking Author 1's view when asked for Author 2's response."
        },
        {
          "title": "The Bridge Relationship Check",
          "description": "Paired texts almost never completely agree or completely disagree. They usually: (1) qualify a claim, (2) provide an alternative cause for the same fact, or (3) identify an overlooked flaw."
        },
        {
          "title": "The Common Ground Anchor",
          "description": "Both authors usually agree on the core fact or observation, but diverge sharply on the interpretation or causation."
        },
        {
          "title": "The Nuance Mandate",
          "description": "Author 2's response will be courteous and reasoned (e.g., 'acknowledges the data but questions the scope'), never aggressive or dismissive."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "25",
            "action": "Summarize Text 1",
            "detail": "Note main claim + author's polarity (+/-)"
          },
          {
            "seconds": "25",
            "action": "Summarize Text 2",
            "detail": "Note how Text 2 reacts to Text 1 (Counter, Alternative, Qualify)"
          },
          {
            "seconds": "20",
            "action": "Lock Question Stem",
            "detail": "Confirm: 'How does Author 2 view Author 1's claim on X?'"
          },
          {
            "seconds": "20",
            "action": "Select & Veto",
            "detail": "Pick the nuanced bridge; eliminate perspective reversal traps"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "Perspective Reversal",
          "explanation": "Choosing an answer that accurately summarizes Text 1 when the question asked for Text 2's rebuttal."
        },
        {
          "name": "Total Rejection Assumption",
          "explanation": "Assuming Author 2 denies all of Text 1's facts, when Author 2 actually accepts the facts but offers a different explanation."
        }
      ],
      "eslNote": "Watch for concession words in Text 2 ('While Author 1 correctly observes X, they overlook Y'). The real answer lies in Y.",
      "turkishScaffold": {
        "title": "🇹🇷 Cross-Text Connections: İki Metin Arasındaki Köprü",
        "strategyNote": "İki metinli sorularda yazarlar nadiren birbirini %100 onaylar veya %100 reddeder. Genellikle Metin 2, Metin 1'in gözlemlediği veriyi kabul eder fakat SEBEBİNİ farklı açıklar veya kapsamını sınırlandırır. Soru kökünde kimin kime cevap verdiğine çok dikkat edin (Yazar 1 mi Yazar 2'ye, yoksa Yazar 2 mi Yazar 1'e?).",
        "falseFriends": [
          {
            "word": "Skeptical",
            "wrongConcept": "Düşmanca saldırmak",
            "correctConcept": "Şüpheci yaklaşmak, temkinli delil aramak"
          },
          {
            "word": "Divergence",
            "wrongConcept": "Ayrılık/Boşanma",
            "correctConcept": "Farklılaşma, yolların ve gelişim hızlarının ayrılması"
          }
        ],
        "keyVocab": [
          {
            "word": "Consensus",
            "pos": "noun",
            "tr": "Görüş birliği, ortak uzlaşı"
          },
          {
            "word": "Synergistic",
            "pos": "adj",
            "tr": "Birlikte çalışarak çarpan etkisi yaratan"
          },
          {
            "word": "Anomalous",
            "pos": "adj",
            "tr": "Alışılmışın dışında, kural dışı, sapma gösteren"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The Venn Bridge Protocol",
      "summary": "A rigorous 4-step synthesis workflow to lock down dual viewpoints.",
      "examFormula": "Text 1 Claim + Text 2 Concession & Counter-Thesis = Inter-textual Bridge",
      "steps": [
        {
          "num": 1,
          "title": "Summarize Text 1 in One Sentence",
          "rule": "Identify Text 1's central claim and author's tone (+, -, or ~).",
          "expertMove": "I write a mental note: 'Text 1: Reintroduction of wolves restored riverbanks (Enthusiastic +)'."
        },
        {
          "num": 2,
          "title": "Summarize Text 2 in One Sentence",
          "rule": "Identify Text 2's stance on the exact same subject.",
          "expertMove": "I write a mental note: 'Text 2: Willow recovery was caused by hydrology changes, not wolves (Skeptical -)'."
        },
        {
          "num": 3,
          "title": "Classify the Bridge Relationship",
          "rule": "Determine whether Text 2: (A) Fully agrees, (B) Directly contradicts, (C) Qualifies/Limits scope, or (D) Offers alternative explanation.",
          "expertMove": "Text 2 doesn't deny the willow recovery, but attributes it to a different cause (Alternative Explanation)."
        },
        {
          "num": 4,
          "title": "Verify Perspective Direction",
          "rule": "Re-read the question stem to make 100% sure you are answering from the requested author's point of view.",
          "expertMove": "If asked 'How would Author 2 respond?', I channel Author 2's skepticism toward Author 1's conclusion."
        }
      ],
      "checklist": [
        "Did I check whose perspective is required by the question stem?",
        "Did I locate the exact point of overlap between both texts?",
        "Does Author 2 concede any facts before disagreeing?",
        "Did I avoid choices that exaggerate Author 2's disagreement?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "CTC-W-01",
        "type": "cross-text-connections",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "Look at the concession in Text 2: Kacelnik accepts the physical dexterity of the crows, but rejects that it represents learned cultural transmission.",
        "passage": "<b>Text 1</b><br>For decades, primatologists maintained that tool use was a uniquely hominid adaptation that catalyzed human cognitive evolution. However, extensive field observations of wild New Caledonian crows (*Corvus moneduloides*) have overturned this assumption. These birds systematically fashion hooked twigs and barbed leaves to extract grubs from tree bark, displaying sophisticated multi-step problem solving without possessing mammalian neocortical brain structures.<br><br><b>Text 2</b><br>While cognitive biologist Alex Kacelnik acknowledges the remarkable tool-making dexterity of New Caledonian crows, he cautions against equating avian tool behavior with human-style cumulative culture. Human technology relies on social transmission, teaching, and iterative generational improvement. In contrast, laboratory experiments demonstrate that isolated crows raised in complete isolation from adult conspecifics still instinctively construct hooked tools, suggesting that their behavior is largely an innate genetic adaptation rather than learned cultural innovation.",
        "question": "Based on the texts, how would Kacelnik (Text 2) most likely respond to the characterization of crow tool use in Text 1?",
        "choices": [
          "A) By arguing that wild New Caledonian crows do not actually use tools to forage for grubs in the wild.",
          "B) By conceding that crow tool fabrication relies on the same mammalian neocortical structures found in hominids.",
          "C) By agreeing that crows exhibit complex tool-making abilities while disputing that their behavior represents learned cultural transmission.",
          "D) By asserting that human technological development is entirely driven by innate genetic instincts rather than social learning."
        ],
        "answer": "C",
        "thinkAloud": [
          "Step 1 (Analyze Text 1 Stance): Author 1 says crow tool-making disproves human uniqueness and shows sophisticated problem-solving without a mammalian neocortex.",
          "Step 2 (Analyze Text 2 Stance): Kacelnik admits crows have 'remarkable tool-making dexterity', BUT cautions against equating it with human culture because isolated crows make tools instinctively (genetic, not social culture).",
          "Step 3 (Bridge Relationship): Kacelnik agrees with the physical ability (dexterity), but qualifies the cognitive interpretation (innate instinct vs. learned culture).",
          "Step 4 (Verify Stem Direction): 'How would Kacelnik (Text 2) respond to Text 1?'",
          "Step 5 (Evaluate Choice C): Choice C matches: agrees crows make complex tools, but disputes that it represents learned cultural transmission.",
          "Step 6 (Eliminate Traps): Choice A contradicts Text 2 (Kacelnik acknowledges dexterity). Choice B contradicts both texts (crows lack mammalian neocortex). Choice D reverses human culture (humans rely on social learning, not instinct)."
        ],
        "trapTypes": {
          "A": "Opposite",
          "B": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice C accurately synthesizes Kacelnik's position in Text 2: he acknowledges the impressive tool-making dexterity of crows (agreeing with their complex skill) but presents isolation data to argue that their behavior is an innate genetic adaptation rather than socially learned cumulative culture.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Kacelnik explicitly acknowledges the tool-making dexterity of crows; he does not deny that they use tools.",
            "B": "Opposite Trap: Text 1 states crows lack mammalian neocortical structures, and Text 2 never claims they possess them.",
            "C": "Correct Answer: Perfectly captures Kacelnik's two-part stance: agreeing with the physical ability while rejecting the cultural interpretation.",
            "D": "Opposite Trap: Text 2 explicitly states that human technology relies on social transmission, not innate instincts."
          },
          "keyTakeaway": "On Cross-Text questions, the correct choice frequently pairs an area of agreement (complex tools) with an area of divergence (innate vs. cultural)."
        },
        "glosses": {
          "hominid": "(noun) a member of the biological family including humans and their fossil ancestors • 🇹🇷 İnsansı (insan ve atalarının biyolojik ailesi)",
          "dexterity": "(noun) skill in performing physical tasks, especially with hands or appendages • 🇹🇷 El becerisi, alet yapma ustalığı",
          "cumulative culture": "(noun) the transmission and progressive improvement of knowledge across generations • 🇹🇷 Kümülatif kültür (kuşaktan kuşağa biriken bilgi)",
          "conspecifics": "(noun) members of the same biological species • 🇹🇷 Aynı türden olan bireyler"
        }
      },
      {
        "id": "CTC-W-02",
        "type": "cross-text-connections",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "Pomeranz attacks the assumption that European institutions were unique by demonstrating that China had equally strong property rights.",
        "passage": "<b>Text 1</b><br>The 'Great Divergence'—the historical phenomenon whereby Western European economies leaped ahead of Asian economies in the 18th and 19th centuries—is frequently attributed by institutional economists to Europe's superior property rights, legal contracts, and financial markets, which incentivized capital investment and industrial innovation.<br><br><b>Text 2</b><br>Historian Kenneth Pomeranz disputes this Eurocentric narrative, noting that around 1750, core commercial regions in China, such as the Yangtze Delta, possessed land markets, commercial law, and labor mobility that were just as robust as those in Britain. Instead, Pomeranz argues that Britain's breakthrough was driven by fortuitous geographical accidents: easily accessible domestic coal deposits and access to resource-rich American colonial ghost acreage.",
        "question": "Based on the texts, how would Pomeranz (Text 2) most likely respond to the institutional economists mentioned in Text 1?",
        "choices": [
          "A) By arguing that Britain was impoverished compared to China because British financial markets were non-existent.",
          "B) By contending that institutional property rights were not unique to Western Europe and that geographical advantages were the primary catalyst.",
          "C) By claiming that China industrialized fifty years earlier than Great Britain due to coal mining in the Yangtze Delta.",
          "D) By agreeing that institutional legal frameworks were the sole cause of the Industrial Revolution."
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Analyze Text 1): Institutional economists argue Europe diverged because of superior property rights, contracts, and financial markets.",
          "Step 2 (Analyze Text 2): Pomeranz shows that China's Yangtze Delta had property rights and commercial law just as robust as Britain's (institutions were not unique). He attributes Britain's success to coal and colonial resources.",
          "Step 3 (Bridge): Pomeranz rejects institutional superiority and offers geography/resources as the true explanation.",
          "Step 4 (Test Choice B): 'By contending that institutional property rights were not unique to Western Europe and that geographical advantages were the primary catalyst.' Exact match.",
          "Step 5 (Eliminate Distractors): Choice A is Too Extreme. Choice C contradicts historical chronology. Choice D is an Opposite/Perspective trap (represents Text 1)."
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Pomeranz directly refutes the institutional thesis by noting that the Yangtze Delta had equally robust legal and property institutions around 1750, arguing that geographical advantages (coal and colonial land) were the decisive drivers.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: Pomeranz does not claim British financial markets were non-existent.",
            "B": "Correct Answer: Directly articulates Pomeranz's dual counter-argument (institutions weren't unique; geography was the catalyst).",
            "C": "Opposite Trap: China did not industrialize earlier; the Great Divergence describes Europe pulling ahead.",
            "D": "Opposite / Wrong Attribution Trap: This summarizes the view of institutional economists in Text 1, which Pomeranz rejects."
          },
          "keyTakeaway": "When Author 2 rejects Author 1's causal explanation, look for a choice that mentions both the debunked cause and the newly proposed cause."
        },
        "glosses": {
          "Great Divergence": "(noun) the historical gap in wealth and industrial capacity between the West and the rest of the world",
          "incentivized": "(verb) provided with an economic motive or incentive • 🇹🇷 Teşvik edilmiş, özendirilmiş",
          "fortuitous": "(adj.) happening by a lucky chance or coincidence • 🇹🇷 Şans eseri olan, rastlantısal talih",
          "ghost acreage": "(noun) foreign land or colonies exploited to provide food and raw materials • 🇹🇷 Gölge arazi (sömürgelerden çekilen ek kaynaklar)"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "CTC-TRAP-01",
        "stem": "Text 1 claims a new drug cured 95% of patients. Text 2 notes the trial lacked a placebo control group and only tested mild cases.",
        "wrongChoice": "The author of Text 2 agrees that the drug has been conclusively proven safe and effective for all medical conditions.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Opposite",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "Text 2 is critical and cautious. Stating that Author 2 agrees it is 'conclusively proven safe and effective for all conditions' makes an extreme, unfounded leap that reverses Author 2's skeptical stance."
      },
      {
        "id": "CTC-TRAP-02",
        "stem": "Text 1 asserts that Shakespeare wrote all 37 plays attributed to him. Text 2 suggests Edward de Vere co-authored several late comedies.",
        "wrongChoice": "The author of Text 2 agrees with Text 1 that Shakespeare was the sole author of every comedy in the first folio.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Too Extreme",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "Text 2 specifically argues for co-authorship by Edward de Vere. Saying Author 2 agrees Shakespeare was the 'sole author' directly flips the author's stated counter-hypothesis."
      },
      {
        "id": "CTC-TRAP-03",
        "stem": "Text 1 discusses the migration routes of monarch butterflies. Text 2 analyzes the nutritional value of milkweed plants for caterpillars.",
        "wrongChoice": "The author of Text 2 argues that monarch butterflies should be classified as a pest species and eradicated from farmland.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Too Extreme",
          "Opposite",
          "Wrong Meaning"
        ],
        "rationale": "Neither text mentions classifying butterflies as pests or eradicating them. This introduces an entirely fabricated outside claim."
      },
      {
        "id": "CTC-TRAP-04",
        "stem": "Question: 'How would Author 1 respond to the study cited in Text 2?' Text 1 believes organic farming has lower yields.",
        "wrongChoice": "Author 2 demonstrated that organic farming techniques improved soil microbial diversity by 40%.",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Opposite",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "This choice accurately summarizes a fact from Text 2, but it completely fails to answer the question stem, which asked how AUTHOR 1 would react to it."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "CTC-G-01",
        "type": "cross-text-connections",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Identify what Text 2 concedes (individual flexibility) vs. what it warns against (loss of spontaneous collaboration).",
        "passage": "<b>Text 1</b><br>Advocates of remote work contend that eliminating daily commutes significantly enhances employee well-being and productivity. By giving workers autonomy over their physical environment and schedules, companies observe lower burnout rates and higher employee retention.<br><br><b>Text 2</b><br>While organizational psychologist David Chen acknowledges that remote work provides individual flexibility, he points out that informal, spontaneous workplace interactions—the unplanned 'watercooler conversations'—are essential for cross-departmental innovation. In entirely remote environments, communication becomes siloed, ultimately reducing the generation of novel corporate ideas.",
        "question": "Based on the texts, how would David Chen (Text 2) most likely characterize the view expressed by the advocates in Text 1?",
        "choices": [
          "A) As an outright falsehood that has caused every remote company to immediately go bankrupt.",
          "B) As an accurate assessment of individual benefits that nevertheless overlooks the collective long-term costs to collaborative innovation.",
          "C) As a flawed economic theory that overestimates the importance of spontaneous employee discussions.",
          "D) As an indisputable proof that all in-person office spaces should be permanently closed."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the opening concession in Text 2: 'While... Chen acknowledges that remote work provides individual flexibility, he points out that...'",
          "Hint 2 (Strategy Reminder): Apply the Venn Bridge: Chen doesn't deny individual benefits (well-being/autonomy), but he adds a neglected downside (loss of spontaneous collaboration).",
          "Hint 3 (Partial Solution): Choice A and D are Too Extreme. Choice C says Chen thinks spontaneous discussion is unimportant (Opposite). Choice B captures the balanced assessment: individual benefits are real, but collaborative innovation suffers."
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Chen concedes that remote work improves individual flexibility (validating Text 1's premise), but argues that it damages cross-departmental innovation (identifying an overlooked collective cost).",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: 'Outright falsehood' and 'caused every company to go bankrupt' are gross exaggerations.",
            "B": "Correct Answer: Accurately reflects Chen's balanced stance: individual advantages exist, but collaborative innovation is harmed.",
            "C": "Opposite Trap: Chen emphasizes that spontaneous discussions are vital, not that they are overestimated.",
            "D": "Too Extreme Trap: Chen does not advocate closing all physical office spaces."
          },
          "keyTakeaway": "Scholarly critiques rarely call an opposing view an 'outright falsehood'; they usually argue it is 'an incomplete assessment that overlooks another dimension'."
        },
        "glosses": {
          "autonomy": "(noun) the right or condition of self-governance; freedom from external control • 🇹🇷 Özerklik, bağımsız karar verme yetkisi",
          "siloed": "(adj.) isolated within separate departments or operational silos • 🇹🇷 Kendi departmanına kapanmış, iletişimsiz",
          "watercooler conversations": "(noun) informal, casual workplace interactions • 🇹🇷 Ayaküstü yapılan gayriresmi sohbetler"
        }
      },
      {
        "id": "CTC-G-02",
        "type": "cross-text-connections",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Contrast the time horizons: Gomez focuses on rapid short-term uptake; Vance focuses on long-term ecological security.",
        "passage": "<b>Text 1</b><br>Ecologist Elena Gomez argues that planting monoculture forests of fast-growing commercial pine is an effective, rapid strategy for carbon sequestration. Her field measurements indicate that young pine plantations absorb atmospheric carbon dioxide at twice the annual rate of mature, slow-growing native oak woodlands.<br><br><b>Text 2</b><br>Conservation biologist Marcus Vance cautions that measuring short-term carbon uptake in pine monocultures presents a misleading picture of ecological stability. Monoculture plantations are exceptionally vulnerable to pest infestations and wildfires, both of which abruptly release sequestered carbon back into the atmosphere. Vance contends that biodiverse native forests, while slower to mature, provide far more secure, resilient long-term carbon storage.",
        "question": "Based on the texts, how does Vance (Text 2) differ from Gomez (Text 1) regarding forest management for carbon storage?",
        "choices": [
          "A) Vance believes that oak woodlands absorb carbon faster than pine plantations in their first five years.",
          "B) Vance prioritizes the long-term ecological resilience and security of carbon storage over rapid short-term uptake rates.",
          "C) Vance argues that planting trees has no measurable impact on atmospheric carbon dioxide concentrations.",
          "D) Vance contends that pine monocultures are completely immune to pest outbreaks and environmental disturbances."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Contrast Gomez's focus on 'rapid annual uptake' with Vance's emphasis on 'secure, resilient long-term carbon storage'.",
          "Hint 2 (Strategy Reminder): Vance highlights the vulnerability of pine to pests and wildfires. Why does this make him favor native forests?",
          "Hint 3 (Partial Solution): Choice A contradicts the text (Gomez's data shows pine absorbs faster initially). Choice C is unsupported. Choice D is the opposite of Vance's point. Choice B accurately captures Vance's core distinction."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Gomez prioritizes the rapid, short-term rate of carbon sequestration in pine, whereas Vance argues that risk of fire and pest outbreaks makes biodiverse native forests a more secure long-term carbon reservoir.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Vance concedes that native woodlands are 'slower to mature' than pine.",
            "B": "Correct Answer: Accurately identifies Vance's emphasis on long-term resilience over short-term speed.",
            "C": "Out of Scope Trap: Vance agrees tree planting sequesters carbon; he debates which forest type is more secure.",
            "D": "Opposite Trap: Vance explicitly warns that pine monocultures are exceptionally vulnerable to pests."
          },
          "keyTakeaway": "On environmental debates, look for the trade-off between short-term rate and long-term stability."
        },
        "glosses": {
          "monoculture": "(noun) the cultivation of a single plant species over a large area • 🇹🇷 Tek tip ürün ekimi (tek tür tarımı)",
          "carbon sequestration": "(noun) the capture and long-term storage of atmospheric carbon dioxide • 🇹🇷 Karbon tutma ve toprağa hapsetme",
          "biodiverse": "(adj.) containing a wide variety of plant and animal species • 🇹🇷 Biyoçeşitliliği zengin"
        }
      },
      {
        "id": "CTC-G-03",
        "type": "cross-text-connections",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Look at the discrepancy between Renfrew's overland decay model and Santos's discovery of massive distant caches.",
        "passage": "<b>Text 1</b><br>In his analysis of ancient Mediterranean commerce, archaeologist Colin Renfrew proposed that the obsidian trade was driven by 'down-the-line' exchange: each village along a trade corridor traded raw stone with its immediate neighbor, resulting in an exponential drop-off in obsidian abundance the further a site was from the volcanic source.<br><br><b>Text 2</b><br>Geochemist Maria Santos utilized X-ray fluorescence to analyze obsidian blades at the coastal site of Tell el-Hajj, located 800 kilometers from the nearest Anatolian volcano. Rather than finding only minute traces consistent with down-the-line decay, Santos discovered vast caches of high-purity obsidian, suggesting direct maritime seafaring trade routes that bypassed intermediate overland settlements.",
        "question": "Based on the texts, how do the findings made by Santos (Text 2) challenge Renfrew's model (Text 1)?",
        "choices": [
          "A) By proving that ancient Mediterranean societies possessed no interest in trading volcanic minerals.",
          "B) By showing that obsidian abundance at a distant site was significantly higher than predicted by an overland down-the-line model.",
          "C) By establishing that Anatolian volcanoes were active only during the late medieval period.",
          "D) By confirming that all obsidian transport occurred strictly through overland pedestrian caravans."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): What did Renfrew's model predict for distant sites? ('exponential drop-off / minute traces'). What did Santos actually find at Tell el-Hajj?",
          "Hint 2 (Strategy Reminder): Santos found 'vast caches' 800 km away, which contradicts the 'exponential drop-off' expected from overland neighbor-to-neighbor trade.",
          "Hint 3 (Partial Solution): Choice A and C are Out of Scope. Choice D represents Renfrew's assumption, not Santos's discovery of maritime routes. Choice B accurately states the numerical/spatial discrepancy."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Renfrew's down-the-line model predicted an exponential decrease resulting in only minute traces at distant sites, but Santos discovered massive caches 800 km away, demonstrating that direct seafaring bypassed overland decay.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Both authors confirm obsidian was widely and heavily traded.",
            "B": "Correct Answer: Accurately points out that the abundance at 800 km was far higher than Renfrew's decay model predicted.",
            "C": "Out of Scope Trap: Volcano activity timing is not mentioned.",
            "D": "Opposite Trap: Santos demonstrated maritime transport, disproving the strict overland caravan assumption."
          },
          "keyTakeaway": "When a new archaeological finding challenges a mathematical decay model, the challenge is almost always an unexpected abundance at a distant location."
        },
        "glosses": {
          "obsidian": "(noun) a dark, glasslike volcanic rock prized for sharp cutting tools • 🇹🇷 Obsidyen (volkanik kesici cam taşı)",
          "down-the-line exchange": "(noun) a trade pattern where goods are handed sequentially from neighbor to neighbor • 🇹🇷 Köyden köye aktarmalı komşu ticareti",
          "X-ray fluorescence": "(noun) a non-destructive chemical analysis technique"
        }
      },
      {
        "id": "CTC-G-04",
        "type": "cross-text-connections",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "For 'both authors would agree' questions, find the shared premise (that reward structures influence motivation) rather than extreme absolutes.",
        "passage": "<b>Text 1</b><br>Many behavioral psychologists argue that intrinsic motivation—doing an activity for its inherent satisfaction—is invariably eroded when tangible external rewards, such as monetary bonuses, are introduced. In this view, extrinsic rewards cause individuals to perceive their behavior as externally controlled, diminishing their spontaneous creativity and long-term engagement.<br><br><b>Text 2</b><br>Management scholar Teresa Amabile suggests that the relationship between rewards and motivation is far more nuanced. While transactional, controlling rewards that dictate exactly how a task must be performed do stifle creativity, 'synergistic' rewards—such as recognition of competence, professional autonomy, or bonus funding that enables further independent exploration—can actually bolster intrinsic motivation.",
        "question": "Based on the texts, both authors would most likely agree with which of the following statements?",
        "choices": [
          "A) All monetary incentives universally destroy creativity in every workplace setting.",
          "B) The manner in which external rewards are structured can impact a person's intrinsic motivation.",
          "C) Creative workers perform at their highest potential only when completely unpaid.",
          "D) Extrinsic bonuses have zero psychological effect on employee satisfaction."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look for the common ground (the overlap in the Venn diagram). Both authors discuss how external rewards interact with internal motivation.",
          "Hint 2 (Strategy Reminder): Author 1 says rewards erode motivation; Author 2 says certain rewards erode motivation while others enhance it. What do they both agree matters?",
          "Hint 3 (Partial Solution): Choices A and C are Too Extreme. Choice D says rewards have zero effect (contradicted by both texts). Choice B is a moderate, shared premise."
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Both authors agree that the introduction and structure of external rewards exert a meaningful psychological influence on intrinsic motivation (Text 1 focuses on the erosive effects of extrinsic rewards, while Text 2 distinguishes between controlling and synergistic rewards).",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: Text 2 explicitly denies that all rewards destroy creativity, showing synergistic rewards bolster it.",
            "B": "Correct Answer: Formulates the moderate, universally supported premise that reward structure affects motivation.",
            "C": "Too Extreme Trap: Neither author claims workers must be completely unpaid.",
            "D": "Opposite Trap: Both authors emphasize that rewards have substantial psychological effects."
          },
          "keyTakeaway": "On shared agreement questions, the correct answer is always a moderate, overarching principle, never an extreme absolute."
        },
        "glosses": {
          "intrinsic motivation": "(noun) the internal drive to do an activity for its own sake • 🇹🇷 İçsel motivasyon (kendi zevki için yapma)",
          "extrinsic rewards": "(noun) external incentives such as cash bonuses or awards • 🇹🇷 Dışsal ödüller (para, prim, kupa)",
          "synergistic": "(adj.) working together cooperatively to produce an enhanced total effect • 🇹🇷 Sinerjik, birbirini güçlendirip çarpan yaratan"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "CTC-I-01",
        "type": "cross-text-connections",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look at the core catalyst disagreement: Infrastructure investment (Text 1) vs. Automobile economic taxes/penalties (Text 2).",
        "passage": "<b>Text 1</b><br>Urban planners in Copenhagen attribute the city's cycling boom to extensive investments in segregated bike highways with dedicated traffic signals. They argue that physical separation from motor vehicles is the essential prerequisite for encouraging risk-averse demographics, including children and elderly citizens, to adopt cycling for daily transit.<br><br><b>Text 2</b><br>Transportation economist Liam O'Connor contends that while segregated infrastructure is beneficial, Copenhagen's cycling adoption was primarily driven by aggressive economic disincentives on automobiles, including a 150% registration tax on private cars and high municipal parking fees. Without these financial penalties, O'Connor argues, separated bike lanes alone would not have induced car owners to switch to bicycles.",
        "question": "Based on the texts, how does O'Connor's view in Text 2 differ from the view of the Copenhagen urban planners in Text 1?",
        "choices": [
          "A) O'Connor believes that building segregated bike lanes causes an immediate increase in traffic accidents.",
          "B) O'Connor argues that financial disincentives on cars were the decisive catalyst for transit mode switching, rather than bike infrastructure alone.",
          "C) O'Connor claims that Copenhagen citizens prefer driving cars regardless of vehicle taxes.",
          "D) O'Connor asserts that children and elderly citizens refuse to use bicycles under any circumstances."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Text 1 credits separated bike infrastructure as the essential driver. O'Connor in Text 2 argues that heavy vehicle taxes and parking fees were the primary catalyst, asserting that bike lanes alone would have been insufficient.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: O'Connor does not claim bike lanes cause traffic accidents.",
            "B": "Correct Answer: Accurately pinpoints O'Connor's claim that vehicle financial disincentives were the decisive factor.",
            "C": "Opposite Trap: O'Connor explains why citizens switched to bikes, not that they insist on driving.",
            "D": "Too Extreme Trap: O'Connor never makes claims about children or elderly riders refusing to bike."
          },
          "keyTakeaway": "Cross-Text questions often pit an infrastructure explanation against an economic incentive explanation."
        },
        "glosses": {
          "segregated": "(adj.) physically separated from other traffic lanes • 🇹🇷 Fiziksel olarak ayrılmış (ayrı bisiklet yolu)",
          "risk-averse": "(adj.) hesitant or unwilling to take physical or financial risks • 🇹🇷 Riskten kaçınan, temkinli",
          "disincentives": "(noun) financial penalties or deterrents that discourage behavior • 🇹🇷 Caydırıcı ekonomik cezalar ve vergiler"
        }
      },
      {
        "id": "CTC-I-02",
        "type": "cross-text-connections",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Bergner's natural geochemical explanation (hydrogen venting) eliminates the necessity of Loeb's alien technology hypothesis.",
        "passage": "<b>Text 1</b><br>Astrophysicist Avi Loeb proposed that the interstellar object 'Oumuamua, discovered in 2017, exhibited non-gravitational acceleration as it exited our solar system, which he suggested could be explained by radiation pressure acting on a thin, artificial solar sail constructed by extraterrestrial intelligence.<br><br><b>Text 2</b><br>Planetary scientist Jennifer Bergner developed a geochemical model demonstrating that 'Oumuamua's acceleration could be fully accounted for by natural outgassing. Bergner showed that cosmic rays striking water ice within the interstellar comet would liberate entrapped molecular hydrogen (H<sub>2</sub>), which, upon solar heating, was vented in invisible jets that accelerated the object without producing a visible dust coma.",
        "question": "Based on the texts, how would Bergner (Text 2) most likely respond to Loeb's hypothesis in Text 1?",
        "choices": [
          "A) By arguing that 'Oumuamua was stationary and never exhibited any acceleration as it traversed the solar system.",
          "B) By proposing that 'Oumuamua was composed entirely of solid metallic iron forged in an alien shipyard.",
          "C) By demonstrating that the object's anomalous trajectory can be explained through known natural chemical processes without invoking artificial origin.",
          "D) By agreeing that artificial solar sails are the only possible mechanism capable of producing non-gravitational velocity shifts."
        ],
        "answer": "C",
        "trapTypes": {
          "A": "Opposite",
          "B": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice C is correct. Bergner's research provides a natural geochemical explanation (cosmic-ray-liberated hydrogen outgassing) that accounts for 'Oumuamua's acceleration without requiring Loeb's artificial extraterrestrial solar sail hypothesis.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Both scientists agree 'Oumuamua exhibited non-gravitational acceleration.",
            "B": "Out of Scope Trap: Bergner describes water ice and hydrogen outgassing, not an alien metallic shipyard.",
            "C": "Correct Answer: Accurately summarizes Bergner's natural scientific alternative to Loeb's alien hypothesis.",
            "D": "Opposite Trap: Bergner explicitly disproves that artificial sails are the only explanation."
          },
          "keyTakeaway": "When a scientist introduces a natural physical mechanism, their stance toward a supernatural or alien hypothesis is that the phenomenon can be explained without invoking extraordinary causes."
        },
        "glosses": {
          "interstellar": "(adj.) originating from between stars outside our solar system • 🇹🇷 Yıldızlararası uzaydan gelen",
          "outgassing": "(noun/verb) the release of trapped or frozen gas from a celestial body • 🇹🇷 Gaz salınımı (buzun ısınarak gaz çıkarması)",
          "anomalous": "(adj.) deviating from standard or expected trajectories • 🇹🇷 Alışılmışın dışında, kural dışı sapma"
        }
      },
      {
        "id": "CTC-I-03",
        "type": "cross-text-connections",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Modern cognitive psychology replaces absolute linguistic determinism with perceptual nuance.",
        "passage": "<b>Text 1</b><br>The 'linguistic relativity' hypothesis, famously articulated by Benjamin Lee Whorf, posits that the structural grammar and vocabulary of a person's native language strictly determine their cognitive worldview and constrain what concepts they are capable of conceptualizing.<br><br><b>Text 2</b><br>While modern cognitive psychologists accept that language can influence the speed of perceptual categorization—such as Russian speakers distinguishing shades of light and dark blue more rapidly—they reject strong Whorfian determinism. Cross-cultural experiments reveal that human infants and speakers of languages lacking specific grammatical tenses can still conceptualize counterfactual conditions and temporal sequences effortlessly.",
        "question": "Based on the texts, how does the modern cognitive psychologist perspective in Text 2 modify the traditional Whorfian hypothesis described in Text 1?",
        "choices": [
          "A) It replaces strict grammatical determinism with a more moderate view that language influences perceptual efficiency but does not strictly restrict thought.",
          "B) It proves that human infants possess no cognitive faculties until they have mastered complex grammatical vocabulary.",
          "C) It asserts that Russian is the only natural human language capable of expressing abstract concepts.",
          "D) It demonstrates that grammatical structure has absolutely zero connection to human perception or memory."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Text 1 describes strong determinism (language strictly determines and constrains thought). Text 2 softens this into a moderate position: language can influence the speed of perceptual categorization, but it does not fundamentally prevent or restrict conceptual thought.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately reflects the shift from strict determinism to moderate perceptual influence.",
            "B": "Too Extreme Trap: Text 2 notes infants can conceptualize sequences without language, refuting this choice.",
            "C": "Too Extreme Trap: Russian color perception is cited merely as a single illustrative example.",
            "D": "Opposite Trap: Text 2 acknowledges language does influence categorization speed, so it does not claim zero connection."
          },
          "keyTakeaway": "Scientific evolution usually shifts extreme theories ('strictly determines') into nuanced models ('moderately influences')."
        },
        "glosses": {
          "linguistic relativity": "(noun) the hypothesis that language structure influences human worldview • 🇹🇷 Dilsel görelilik (dilin düşünceyi şekillendirmesi)",
          "determinism": "(noun) the belief that outcomes and thoughts are strictly dictated by prior causes • 🇹🇷 Belirlenimcilik, katı determinizm",
          "counterfactual": "(adj.) expressing what would happen under different hypothetical conditions • 🇹🇷 Gerçek dışı / varsayımsal durumlar"
        }
      },
      {
        "id": "CTC-I-04",
        "type": "cross-text-connections",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Goldthwaite broadens the historical lens from elite aristocratic patronage to widespread merchant-class commercial demand.",
        "passage": "<b>Text 1</b><br>Art historians of the Italian Renaissance long attributed the era's dramatic artistic flourishing to the wealthy patronage of the Medici family in Florence, whose financial commissions allowed painters and sculptors to focus exclusively on aesthetic perfection.<br><br><b>Text 2</b><br>Economic historian Richard Goldthwaite emphasizes that focusing solely on elite banking dynasties overlooks the broader material culture of Renaissance Italy. Goldthwaite demonstrates that a burgeoning merchant class created widespread demand for domestic luxury goods, ceramics, and architectural renovations, fueling a competitive commercial market for artisanal craftsmanship across multiple Italian city-states.",
        "question": "Based on the texts, how does Goldthwaite's argument (Text 2) expand upon the traditional view described in Text 1?",
        "choices": [
          "A) By arguing that the Medici family actively confiscated artwork from private merchant households.",
          "B) By showing that artistic flourishing was supported by a broad commercial market driven by the merchant class, rather than just elite patronage.",
          "C) By claiming that Florence was the only Italian city that produced meaningful Renaissance artwork.",
          "D) By proving that Italian Renaissance painters refused all financial compensation for their masterpieces."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Text 1 focuses narrowly on elite Medici patronage in Florence. Goldthwaite in Text 2 broadens the historical framework by showing that a growing merchant class across multiple Italian city-states created widespread commercial demand for art and craftsmanship.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: Medici confiscation of art is never mentioned.",
            "B": "Correct Answer: Accurately states that Goldthwaite expands the scope to include broad merchant-class commercial demand.",
            "C": "Too Extreme Trap: Goldthwaite highlights multiple Italian city-states, directly refuting that Florence was the only one.",
            "D": "Opposite Trap: Painters operated within a competitive commercial market for financial compensation."
          },
          "keyTakeaway": "When a question asks how Author 2 'expands upon' Author 1, look for choices showing a broader demographic or economic base."
        },
        "glosses": {
          "patronage": "(noun) financial support and sponsorship given by a wealthy patron • 🇹🇷 Maddi himaye, sanatçıya sağlanan sponsorluk",
          "burgeoning": "(adj.) growing and flourishing rapidly • 🇹🇷 Hızla büyüyen ve filizlenen",
          "artisanal": "(adj.) relating to skilled craftsmanship and manual artistry • 🇹🇷 Usta işi el zanaatlarına ait"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Cross-Text Connections Self-Audit",
      "prompts": [
        {
          "id": "ctc-1",
          "label": "I summarize each text separately before attempting to answer the question."
        },
        {
          "id": "ctc-2",
          "label": "I check the perspective direction in the question stem so I don't confuse Author 1 with Author 2."
        },
        {
          "id": "ctc-3",
          "label": "I identify the precise relationship (agreement, direct contradiction, or nuanced qualification) connecting the two texts."
        }
      ]
    }
  },
  "MOD-4": {
    "metadata": {
      "id": "MOD-4",
      "title": "Central Ideas & Details",
      "domain": "Information & Ideas",
      "methodName": "The Umbrella Test",
      "tagline": "The main idea must cover ALL paragraphs like an umbrella; reject answer choices that are too narrow (a single rib) or too broad (the entire sky)."
    },
    "stage1_skill": {
      "title": "What Does Central Ideas & Details Test?",
      "whatItTests": "Central Ideas & Details questions test whether you can synthesize the overarching thesis of a passage without getting trapped by supporting evidence, single-sentence details, or overly broad generalizations.",
      "frequency": "2 to 3 questions per module.",
      "recognitionTest": "Question stems include: 'Which choice best states the central idea of the text?' or 'According to the text, what is true about [X]?'",
      "goldenRules": [
        {
          "title": "The Scope Calibration Rule",
          "description": "The correct central idea is neither too narrow (describing only sentence 2) nor too broad (making a grand claim about all human nature)."
        },
        {
          "title": "The Topic + Takeaway Formula",
          "description": "Central Idea = Specific Subject + What the author specifically concludes about that subject."
        },
        {
          "title": "The Detail Trap Filter",
          "description": "On Central Idea questions, distractors often quote a 100% true fact from the text. Ask: 'Did the author write the entire passage just to say this one fact?'"
        },
        {
          "title": "The Literal Retrieval Rule",
          "description": "On Details questions ('According to the text...'), the correct answer will literally rephrase 1–2 sentences with exact synonyms."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "20",
            "action": "Identify Anchor",
            "detail": "Locate topic noun and author's primary conclusion"
          },
          {
            "seconds": "15",
            "action": "Formulate Umbrella",
            "detail": "State thesis: 'The author's main takeaway is that X causes Y'"
          },
          {
            "seconds": "30",
            "action": "Filter Single Details",
            "detail": "Eliminate options that only cover a single sentence or experiment"
          },
          {
            "seconds": "15",
            "action": "Verify Full Passage",
            "detail": "Ensure every paragraph sits comfortably under the chosen choice"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The 'Factually True but Too Narrow' Trap",
          "explanation": "Picking an answer choice that is 100% accurate based on the text, but only summarizes one minor supporting fact instead of the whole thesis."
        },
        {
          "name": "The Cosmic Overreach",
          "explanation": "Picking an answer that generalizes the author's specific finding into an exaggerated rule for all society or all animals."
        }
      ],
      "eslNote": "Pay close attention to words like 'primarily', 'in turn', 'consequently'. They lead you directly to the author's primary takeaway.",
      "turkishScaffold": {
        "title": "🇹🇷 Central Ideas & Details: Şemsiye Testi ve Kapsam Tuzakları",
        "strategyNote": "Ana fikir (Central Idea) sorulduğunda şıklarda parçadaki tek bir deneyi veya cümleyi özetleyen seçenekler 'Detay Tuzağı'dır (Half Right). Doğru ana fikir, parçadaki tüm paragrafları ıslanmaktan koruyan bir ŞEMSİYE gibi hepsini kapsamalıdır.",
        "falseFriends": [
          {
            "word": "Articulate",
            "wrongConcept": "Eklem / Artikülasyon",
            "correctConcept": "Bir fikri net ve akıcı şekilde ifade etmek"
          },
          {
            "word": "Elucidate",
            "wrongConcept": "Halüsinasyon görmek",
            "correctConcept": "Açıklığa kavuşturmak, izah etmek"
          }
        ],
        "keyVocab": [
          {
            "word": "Synthesize",
            "pos": "verb",
            "tr": "Farklı unsurları birleştirerek bütün oluşturmak"
          },
          {
            "word": "Endosymbiotic",
            "pos": "adj",
            "tr": "İç içe yaşayan, karşılıklı yarar sağlayan ortak yaşam"
          },
          {
            "word": "Idiosyncratic",
            "pos": "adj",
            "tr": "Kendine has, nev-i şahsına münhasır"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The Umbrella Test",
      "summary": "Ensure the chosen answer is neither too narrow nor too broad.",
      "examFormula": "Central Idea = Core Topic Noun + Author's Unifying Claim",
      "steps": [
        {
          "num": 1,
          "title": "Identify Topic + Author's Takeaway",
          "rule": "Central Idea = (Specific Subject) + (What the author concludes about it).",
          "expertMove": "If the passage is about mycorrhizal fungi, the topic is fungi, and the takeaway is that they share nutrients across tree species."
        },
        {
          "num": 2,
          "title": "Apply the Umbrella Check",
          "rule": "Can every sentence in the passage sit underneath this claim?",
          "expertMove": "If sentence 4 discusses an experiment, that experiment is just water falling on the umbrella; the umbrella itself is the general principle."
        },
        {
          "num": 3,
          "title": "Eliminate Single-Detail Traps",
          "rule": "Cross out options that only describe one supporting example or sentence.",
          "expertMove": "I ask: 'Did the author write the whole paragraph just to say this one fact, or to make a larger argument?'"
        },
        {
          "num": 4,
          "title": "Eliminate Over-Generalizations",
          "rule": "Reject options that make sweeping claims about 'all ecosystems' or 'human nature'.",
          "expertMove": "Keep the scope calibrated strictly to the passage's boundaries."
        }
      ],
      "checklist": [
        "Does the chosen idea cover the beginning, middle, and end of the text?",
        "Did I eliminate options that only describe a single supporting experiment?",
        "Did I avoid choices with exaggerated words like 'all' or 'never'?",
        "If it's a detail question, can I point to the exact sentence supporting it?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "CID-W-01",
        "type": "central-ideas-details",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "The central idea balances the historical oversight (dismissed as assistant) with the modern re-evaluation (visionary pioneer of computer algorithms).",
        "passage": "Although early biographers of Ada Lovelace often dismissed her 1843 notes on Charles Babbage's Analytical Engine as mere transcription of Babbage's ideas, modern computer scientists have re-evaluated her contribution. Lovelace did not merely annotate the engine's mechanical gears; she formulated an algorithm to compute Bernoulli numbers, recognized that the machine could manipulate symbols and musical notes rather than just numbers, and articulated the distinction between hardware and software. Consequently, Lovelace is now recognized not merely as an assistant, but as the visionary author of the world's first published computer program.",
        "question": "Which choice best states the central idea of the text?",
        "choices": [
          "A) Charles Babbage deliberately stole Ada Lovelace's algorithms to claim sole credit for the Analytical Engine.",
          "B) Modern reassessments demonstrate that Ada Lovelace was an original computational thinker who wrote the first computer algorithm.",
          "C) The Bernoulli number algorithm was the only mathematical calculation that the Analytical Engine was capable of executing.",
          "D) Ada Lovelace focused exclusively on translating mechanical gear diagrams into musical compositions."
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Find Topic & Thesis Arc): Subject = Ada Lovelace's contribution to computing. Arc = Early dismissal -> Modern reassessment as true programming pioneer.",
          "Step 2 (Apply the Umbrella Test): Sentence 2 (algorithms, symbols, hardware/software) and Sentence 3 (first computer program) must both fit under the chosen answer.",
          "Step 3 (Formulate Prediction): Modern reassessments prove Ada Lovelace was an original visionary who authored the first computer program.",
          "Step 4 (Test Choice B): 'Modern reassessments demonstrate that Ada Lovelace was an original computational thinker who wrote the first computer algorithm.' Exact umbrella match.",
          "Step 5 (Eliminate Distractors): Choice A is Out of Scope (Babbage didn't steal her work). Choice C has the extreme word 'only' (Too Extreme). Choice D distorts music manipulation (Half Right / Distorted)."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Too Extreme",
          "D": "Half Right"
        },
        "explanation": {
          "correctBridge": "Choice B is correct because it encapsulates the primary thesis: while early biographers minimized Lovelace's role as a transcriber, modern re-evaluation proves she was an original thinker who authored the world's first computer algorithm and conceptualized software.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: The text never claims Babbage stole her ideas.",
            "B": "Correct Answer: Perfectly captures the overarching reassessment of Lovelace as an original computational pioneer.",
            "C": "Too Extreme Trap: The passage never claims Bernoulli numbers were the 'only' calculation possible.",
            "D": "Half Right / Distorted Trap: Music manipulation was an illustrative example of symbolic processing, not her exclusive focus."
          },
          "keyTakeaway": "Central idea options must capture the unifying claim of the passage, not just an isolated historical anecdote."
        },
        "glosses": {
          "transcription": "(noun) the process of copying out or recording text • 🇹🇷 Kopyalama, metne dökme",
          "Bernoulli numbers": "(noun) a sequence of rational numbers fundamental to number theory",
          "articulated": "(verb) expressed or formulated an idea with clarity • 🇹🇷 Açık ve net şekilde ifade edilmiş"
        }
      },
      {
        "id": "CID-W-02",
        "type": "central-ideas-details",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "On detail questions, identify the exact anatomical and symbiotic mechanism that delivers nutrition.",
        "passage": "In deep-sea hydrothermal vents, where sunlight cannot penetrate, life does not depend on solar-driven photosynthesis. Instead, chemoautotrophic bacteria synthesize organic carbohydrates by oxidizing hydrogen sulfide issuing from volcanic chimneys. These bacteria form endosymbiotic relationships with giant tube worms (*Riftia pachyptila*), which lack mouths and digestive tracts entirely. The tube worms absorb hydrogen sulfide and oxygen through their bright red plumes and transport them via specialized hemoglobin to internal bacteria, which in turn provide complete nutrition to their worm hosts, sustaining complex food webs in absolute darkness.",
        "question": "According to the text, how do giant tube worms (*Riftia pachyptila*) obtain nutrition in hydrothermal vent environments?",
        "choices": [
          "A) By grazing on photosynthetic algae floating down from the ocean's sunlit surface layers.",
          "B) By using digestive tracts to consume smaller crustaceans that inhabit volcanic chimneys.",
          "C) By hosting symbiotic bacteria that convert volcanic chemicals into organic nutrients for the worm.",
          "D) By absorbing dissolved sunlight through their specialized bright red plumes."
        ],
        "answer": "C",
        "thinkAloud": [
          "Step 1 (Analyze Question Stem): This is an explicit Detail question: 'According to the text, how do giant tube worms obtain nutrition?'",
          "Step 2 (Locate Textual Anchor): Sentences 3–4 state: Tube worms 'lack mouths and digestive tracts entirely' and host 'internal bacteria, which in turn provide complete nutrition to their worm hosts' by oxidizing volcanic hydrogen sulfide.",
          "Step 3 (Formulate Prediction): They get nutrition from internal symbiotic bacteria that chemically convert volcanic sulfide into food.",
          "Step 4 (Test Choice C): 'By hosting symbiotic bacteria that convert volcanic chemicals into organic nutrients for the worm.' 100% literal match.",
          "Step 5 (Eliminate Distractors): Choice A contradicts deep-sea conditions (no photosynthesis). Choice B contradicts that they 'lack digestive tracts entirely'. Choice D claims they absorb sunlight in 'absolute darkness' (Opposite)."
        ],
        "trapTypes": {
          "A": "Opposite",
          "B": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice C is correct. The text explicitly states that chemoautotrophic bacteria live symbiotically inside the tube worms, converting volcanic hydrogen sulfide into organic nutrients that nourish the host worm.",
          "choiceBreakdown": {
            "A": "Opposite Trap: The passage explicitly states life does not depend on photosynthetic surface algae.",
            "B": "Opposite Trap: The text states tube worms 'lack mouths and digestive tracts entirely', making grazing impossible.",
            "C": "Correct Answer: Accurately restates the symbiotic bacterial chemical synthesis described in sentences 3–4.",
            "D": "Opposite Trap: The vents exist in 'absolute darkness', where sunlight cannot penetrate."
          },
          "keyTakeaway": "On detail questions, look for direct paraphrasing of literal facts in the text. Veto choices that contradict anatomical or environmental constraints."
        },
        "glosses": {
          "chemoautotrophic": "(adj.) synthesizing organic food using energy derived from chemical reactions • 🇹🇷 Kemoototrof (kimyasal enerjiyle besin üreten)",
          "endosymbiotic": "(adj.) referring to a mutually beneficial relationship where one organism lives inside another • 🇹🇷 Endosimbiyotik (hücre içi ortak yaşam)",
          "hemoglobin": "(noun) a specialized protein that binds and transports oxygen and sulfides in the bloodstream • 🇹🇷 Hemoglobin (oksijen taşıyıcı protein)"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "CID-TRAP-01",
        "stem": "Text explains how urban vertical farming saves 95% water and reduces transportation emissions, though high electricity costs for LED lighting remain an economic challenge.",
        "wrongChoice": "Electricity costs will invariably cause all vertical farming enterprises to go bankrupt by next year.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Opposite",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "The text notes electricity is an economic challenge, but predicting that all vertical farms will go bankrupt next year is an extreme, ungrounded extrapolation."
      },
      {
        "id": "CID-TRAP-02",
        "stem": "Text discusses how the Rosetta Stone, discovered in 1799, allowed Jean-François Champollion to decipher Egyptian hieroglyphs because it contained the same royal decree written in three scripts.",
        "wrongChoice": "The Rosetta Stone contained a decree inscribed in ancient Greek, Demotic, and Egyptian hieroglyphic scripts.",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Opposite",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "While this fact is 100% true, if the question asks for the CENTRAL IDEA of why the stone was historically significant, this choice is just a background factual detail that omits Champollion's breakthrough decipherment."
      },
      {
        "id": "CID-TRAP-03",
        "stem": "Text explains that honeybee waggle dances communicate the distance and direction of nectar sources relative to the sun's position.",
        "wrongChoice": "Honeybees use acoustic sonar pulses to locate underground termite colonies for food.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Too Extreme",
          "Opposite",
          "Half Right"
        ],
        "rationale": "Sonar pulses and termite colonies are completely fabricated outside topics not mentioned anywhere in the passage."
      },
      {
        "id": "CID-TRAP-04",
        "stem": "Text describes how rewilding wolves in Yellowstone reduced elk overgrazing along riverbanks, allowing willow trees to recover and beavers to build dams.",
        "wrongChoice": "Reintroducing wolves in Yellowstone caused devastating damage to willow trees and drove beavers to extinction.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Too Extreme",
          "Half Right",
          "Out of Scope"
        ],
        "rationale": "This choice directly inverts the ecological outcome: the text states willows recovered and beavers flourished, not that they suffered damage or extinction."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "CID-G-01",
        "type": "central-ideas-details",
        "stage": "guided",
        "difficulty": "Easy",
        "strategyHeuristic": "Synthesize the mechanism (infrasound waves) with its survival function (long-distance coordination across dense vegetation).",
        "passage": "While studying the acoustic calls of African forest elephants (*Loxodonta cyclotis*), bioacousticians discovered that the animals communicate extensively using low-frequency infrasound waves below the limit of human hearing (under 20 Hz). These infrasonic rumbles travel for several kilometers through dense rainforest vegetation with minimal atmospheric attenuation. Consequently, elephant herds can coordinate movements, warn of predators, and locate mating partners across vast forested landscapes without visual contact.",
        "question": "Which choice best states the central idea of the text?",
        "choices": [
          "A) African forest elephants rely on low-frequency infrasound to communicate over long distances in dense rainforest environments.",
          "B) Human hearing is fully capable of perceiving all vocalizations produced by African forest elephants.",
          "C) Infrasound waves are used exclusively by African elephants to scare away rival predators.",
          "D) Rainforest deforestation has forced forest elephants to stop producing acoustic vocalizations."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): What is the specific subject (African forest elephants) and what is the author's primary takeaway about their communication?",
          "Hint 2 (Strategy Reminder): Apply the Umbrella Test: Sentence 1 defines infrasound calls, sentence 2 explains how they travel, and sentence 3 details their coordinating functions.",
          "Hint 3 (Partial Solution): Choice B contradicts sentence 1 ('below the limit of human hearing'). Choice C contains the extreme word 'exclusively'. Choice D is out of scope. Choice A covers all sentences."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because it unifies the entire passage: forest elephants use low-frequency infrasound rumbles that penetrate dense foliage to coordinate herds and communicate across kilometers.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately synthesizes the acoustic mechanism and its environmental coordinating function.",
            "B": "Opposite Trap: The text states infrasound is 'below the limit of human hearing'.",
            "C": "Too Extreme Trap: 'Exclusively to scare away predators' ignores herd coordination and finding mating partners.",
            "D": "Out of Scope Trap: Deforestation is not mentioned."
          },
          "keyTakeaway": "A central idea must cover both the biological mechanism and the multiple functions it serves."
        },
        "glosses": {
          "infrasound": "(noun) low-frequency sound waves below the human hearing limit (under 20 Hz) • 🇹🇷 İnfrases (insan kulağının duyamadığı çok pes sesler)",
          "attenuation": "(noun) the reduction of wave intensity or signal strength as it travels • 🇹🇷 Dalga sinyalinin zayıflaması veya sönümlenmesi",
          "vocalizations": "(noun) sounds produced by vocal cords • 🇹🇷 Ses telleriyle çıkarılan sesler"
        }
      },
      {
        "id": "CID-G-02",
        "type": "central-ideas-details",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Locate the explicit obstacle: Fleming discovered penicillin but could not isolate or chemically stabilize the compound.",
        "passage": "In 1928, Alexander Fleming observed that a stray mould contaminating a petri dish of *Staphylococcus* bacteria had created a clear halo of inhibited bacterial growth. Although Fleming published his findings on this substance, which he named penicillin, he was unable to isolate and stabilize the unstable chemical compound for medical therapy. It was not until a decade later that biochemists Howard Florey and Ernst Chain developed purification techniques and mass-production protocols, transforming penicillin from an academic curiosity into the world's first life-saving mass antibiotic.",
        "question": "According to the passage, why was Fleming's initial discovery of penicillin unable to be used immediately in clinical medicine?",
        "choices": [
          "A) Fleming refused to share his laboratory findings with the international medical community.",
          "B) Fleming lacked the biochemical methods needed to isolate and stabilize the active penicillin compound.",
          "C) Howard Florey and Ernst Chain published fraudulent data declaring penicillin too hazardous for human use.",
          "D) *Staphylococcus* bacteria had developed immediate genetic resistance to all antibiotic compounds."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Re-read the second sentence: 'Although Fleming published... he was unable to...'",
          "Hint 2 (Strategy Reminder): This is a Detail question. Locate the precise reason Fleming could not provide medical therapy.",
          "Hint 3 (Partial Solution): The text explicitly states Fleming 'was unable to isolate and stabilize the unstable chemical compound'. Look for Choice B."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Out of Scope",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Sentence 2 explicitly mentions that Fleming 'was unable to isolate and stabilize the unstable chemical compound for medical therapy', explaining why clinical application was delayed until Florey and Chain developed purification methods.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Fleming 'published his findings', refuting that he refused to share them.",
            "B": "Correct Answer: Literal match for Fleming's inability to isolate and chemically stabilize the substance.",
            "C": "Out of Scope Trap: Florey and Chain successfully purified penicillin, rather than publishing fraud.",
            "D": "Out of Scope Trap: Bacterial antibiotic resistance is not mentioned in the passage."
          },
          "keyTakeaway": "On historical discovery questions, distinguish between initial observation and later biochemical purification."
        },
        "glosses": {
          "inhibited": "(verb) hindered, restrained, or prevented growth • 🇹🇷 Engellenmiş, durdurulmuş",
          "purification": "(noun) the chemical extraction and isolation of a clean compound • 🇹🇷 Saflaştırma, kimyasal ayrıştırma",
          "antibiotic": "(noun) a medicine that destroys or inhibits bacterial growth • 🇹🇷 Antibiyotik (bakteri öldürücü ilaç)"
        }
      },
      {
        "id": "CID-G-03",
        "type": "central-ideas-details",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "The central idea must capture both the statistical linguistic evidence AND the continued mystery surrounding decipherment.",
        "passage": "The Voynich manuscript, a 15th-century illustrated codex written in an undeciphered script, has long baffled cryptographers. While early 20th-century theories dismissed the manuscript as an elaborate Renaissance hoax with meaningless gibberish, recent statistical analyses of letter distribution reveal that the text exhibits Zipf's law—a mathematical pattern of word frequencies found in all genuine human natural languages. However, whether the codex represents a complex cipher, an encoded phonetic dialect, or an invented constructed language remains fiercely unresolved.",
        "question": "Which choice best states the central idea of the text?",
        "choices": [
          "A) The Voynich manuscript has been proven to be a fraudulent hoax created by Renaissance art dealers.",
          "B) Although mathematical evidence suggests the Voynich manuscript contains genuine linguistic structure, its exact meaning and nature remain uncracked.",
          "C) Cryptographers have successfully translated the Voynich manuscript into modern phonetic English using Zipf's law.",
          "D) Zipf's law is a statistical principle that applies exclusively to undeciphered 15th-century Renaissance ciphers."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Look at the contrast in the passage: Sentence 2 notes that statistical tests (Zipf's law) show genuine language structure, while Sentence 3 emphasizes that the meaning remains 'fiercely unresolved'.",
          "Hint 2 (Strategy Reminder): The central idea must balance both the linguistic evidence AND the continued mystery.",
          "Hint 3 (Partial Solution): Choice A claims it was proven a hoax (Opposite). Choice C claims it has been translated (Opposite). Choice D misdefines Zipf's law. Choice B is the only balanced synthesis."
        ],
        "trapTypes": {
          "A": "Opposite",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. It captures both halves of the passage: recent mathematical analyses prove the text exhibits Zipf's law (genuine linguistic properties), yet its underlying meaning, cipher, or language remains unresolved.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Recent statistical tests challenged the hoax theory.",
            "B": "Correct Answer: Accurately balances the evidence of authentic linguistic structure with the ongoing mystery of decipherment.",
            "C": "Opposite Trap: The manuscript remains completely undeciphered and untranslated.",
            "D": "Too Extreme Trap: Zipf's law applies to 'all genuine human natural languages', not exclusively to Renaissance ciphers."
          },
          "keyTakeaway": "When a passage discusses an unsolved mystery, the central idea must acknowledge both the clues discovered and the unresolved question."
        },
        "glosses": {
          "codex": "(noun) an ancient manuscript text in bound book form • 🇹🇷 Kodeks (antik el yazması ciltli kitap)",
          "cryptographers": "(noun) experts in code-breaking and deciphering ciphers • 🇹🇷 Kriptograflar, şifre çözücüler",
          "Zipf's law": "(noun) an empirical law showing word frequency distribution in natural language"
        }
      },
      {
        "id": "CID-G-04",
        "type": "central-ideas-details",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Trace the biological causal chain: Thawing permafrost -> Microbes metabolize organic carbon -> Release CO2/methane -> Amplifies warming.",
        "passage": "In high-latitude tundra ecosystems, permafrost acts as a colossal frozen carbon sink, locking away approximately 1,500 billion tons of decomposed organic matter. As global temperatures rise, however, the active soil layer deepens, enabling microbes to metabolize this previously frozen organic material. This microbial respiration releases immense volumes of methane and carbon dioxide, establishing a positive feedback loop that accelerates atmospheric warming far beyond initial climate model forecasts.",
        "question": "According to the passage, what occurs when permafrost in the tundra thaws?",
        "choices": [
          "A) Microbial activity ceases completely, preventing the release of all greenhouse gases.",
          "B) Thawing permafrost instantly transforms the tundra into dense tropical rainforest.",
          "C) Soil microbes consume the thawed organic matter and release greenhouse gases that amplify warming.",
          "D) Glaciers expand rapidly, permanently trapping organic carbon beneath deep ice sheets."
        ],
        "answer": "C",
        "hints": [
          "Hint 1 (Nudge): Re-read sentences 2-3: What do microbes do when the active soil layer deepens?",
          "Hint 2 (Strategy Reminder): Trace the biological chain reaction: Thaw -> Microbes metabolize organic matter -> Respiration releases methane/CO2 -> Accelerates warming.",
          "Hint 3 (Partial Solution): Choice A and D state the opposite of what happens. Choice B is an absurd exaggeration. Choice C accurately tracks the microbial mechanism."
        ],
        "trapTypes": {
          "A": "Opposite",
          "B": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice C is correct. The text explicitly outlines the mechanism: thawing allows microbes to metabolize thawed organic carbon, releasing methane and CO2 that trigger a positive feedback loop accelerating warming.",
          "choiceBreakdown": {
            "A": "Opposite Trap: Microbial activity increases and accelerates gas release.",
            "B": "Too Extreme Trap: The passage does not claim tundra turns into tropical rainforest.",
            "C": "Correct Answer: Accurately mirrors the biological sequence of microbial respiration and gas release.",
            "D": "Opposite Trap: Thawing releases carbon rather than trapping it under glaciers."
          },
          "keyTakeaway": "On cause-and-effect science questions, map out the step-by-step chain of events."
        },
        "glosses": {
          "permafrost": "(noun) permanently frozen ground beneath the surface • 🇹🇷 Sürekli donmuş toprak tabakası",
          "carbon sink": "(noun) a natural reservoir that absorbs and stores carbon compounds • 🇹🇷 Karbon yutağı (karbon depolayan doğal havza)",
          "positive feedback loop": "(noun) a cyclic process where an effect amplifies the initial cause • 🇹🇷 Pozitif geri besleme (birbirini tetikleyerek hızlanan döngü)"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "CID-I-01",
        "type": "central-ideas-details",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for the institutional problem (chaotic local solar times causing rail collisions) and corporate solution (standard time zones).",
        "passage": "During the 19th century, the expansion of the American railway network transformed not only freight transportation but also standard timekeeping. Prior to 1883, thousands of towns operated on idiosyncratic local solar times based on the sun's zenith, creating chaotic scheduling conflicts for railway dispatchers managing single-track lines. To prevent collisions and streamline operations, railway companies unilaterally instituted four standard time zones across the United States in November 1883, a corporate convention that the federal government officially codified into law decades later.",
        "question": "Which choice best states the central idea of the text?",
        "choices": [
          "A) Railway companies established standardized time zones to resolve dangerous scheduling chaos caused by local solar timekeeping.",
          "B) Local communities successfully sued railway companies to preserve their traditional solar noon timekeeping.",
          "C) The American railway network collapsed in 1883 due to irreconcilable conflicts between state and federal dispatchers.",
          "D) The federal government created standard time zones in 1883 to ban all solar clocks worldwide."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. It unifies the entire passage: chaotic local solar times created dangerous scheduling hazards for railways, prompting rail companies to institute standard time zones in 1883.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately captures both the problem (scheduling chaos from local solar times) and the solution (railroad time zones).",
            "B": "Opposite Trap: Communities did not sue to stop time zones; rail companies instituted them unilaterally.",
            "C": "Too Extreme Trap: The railway network did not collapse; it streamlined operations.",
            "D": "Out of Scope / Inaccurate Trap: Railroads created the zones in 1883, not the federal government, and solar clocks were not banned worldwide."
          },
          "keyTakeaway": "Check historical actors carefully: railroads initiated standard time in 1883; the government only codified it decades later."
        },
        "glosses": {
          "idiosyncratic": "(adj.) distinctive or peculiar to a specific place or individual • 🇹🇷 Kendine has, yerel ve sıra dışı",
          "zenith": "(noun) the highest point reached by the sun in the sky • 🇹🇷 Güneşin gökyüzündeki en tepe noktası (öğle vakti)",
          "codified": "(verb) formally arranged into laws or official statutes • 🇹🇷 Yasalara geçirilmiş, kanunlaştırılmış"
        }
      },
      {
        "id": "CID-I-02",
        "type": "central-ideas-details",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Identify the quantum mechanism: discrete orbital shifts accompanied by photon absorption or emission.",
        "passage": "In 1913, Niels Bohr introduced his quantum model of the hydrogen atom, postulating that electrons orbit the nucleus only in discrete, quantized energy levels without radiating energy. When an electron transitions between these orbits, it emits or absorbs a photon of light with a frequency corresponding exactly to the energy differential between the levels. This quantized model successfully explained the empirical Balmer emission spectral lines of hydrogen, which classical Newtonian physics had failed to elucidate.",
        "question": "According to the passage, how did Bohr's model explain the spectral lines of hydrogen?",
        "choices": [
          "A) By showing that electrons emit or absorb photons of light when shifting between discrete quantized energy orbits.",
          "B) By demonstrating that hydrogen nuclei contain neutral neutrons that emit continuous radio waves.",
          "C) By proving that electrons continuously radiate energy and spiral directly into the atomic nucleus.",
          "D) By confirming that classical Newtonian mechanics accurately predicts all subatomic orbital behaviors."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Opposite",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Sentences 2–3 state that electrons emit or absorb photons when jumping between discrete quantized energy levels, explaining the specific spectral frequencies of hydrogen.",
          "choiceBreakdown": {
            "A": "Correct Answer: Direct paraphrase of electron transitions between quantized orbits emitting/absorbing photons.",
            "B": "Out of Scope Trap: Neutrons and radio waves are not mentioned.",
            "C": "Opposite Trap: Classical physics expected electrons to radiate continuously and spiral in, which Bohr disproved.",
            "D": "Opposite Trap: The passage states classical Newtonian physics failed to explain the lines."
          },
          "keyTakeaway": "On physics detail questions, locate the exact sentence describing the quantum transition mechanism."
        },
        "glosses": {
          "quantized": "(adj.) restricted to discrete, distinct mathematical values rather than a continuous spectrum • 🇹🇷 Kuantize (kesikli, basamaklı enerji düzeyleri)",
          "differential": "(noun) the difference between two values or energy states • 🇹🇷 İki enerji veya değer arasındaki fark",
          "elucidate": "(verb) to make clear; explain with clarity • 🇹🇷 Açıklığa kavuşturmak, izah etmek"
        }
      },
      {
        "id": "CID-I-03",
        "type": "central-ideas-details",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Industrial melanism demonstrates dynamic natural selection in response to soot and subsequent clean air recovery.",
        "passage": "Biologists studying the evolutionary genetics of the peppered moth (*Biston betularia*) in industrial England documented a phenomenon known as industrial melanism. Before the mid-19th century, light-colored speckled moths predominated because they were camouflaged against lichen-encrusted tree trunks. As coal soot blackened the forests during the Industrial Revolution, dark-colored melanic mutants gained a predatory survival advantage against birds, rapidly increasing to over 98% of the population by 1895. Following clean air legislation in the late 20th century, lichen returned, and light-colored morphs once again became the dominant form.",
        "question": "Which choice best summarizes the primary takeaway of the passage?",
        "choices": [
          "A) Coal pollution permanently eliminated all predatory bird species across industrial England.",
          "B) Natural selection caused moth population coloration to shift dynamically in response to soot pollution and subsequent environmental recovery.",
          "C) Peppered moths intentionally altered their wing pigmentation to match the color of industrial factory brickwork.",
          "D) Lichen species in England are genetically incapable of growing on trees exposed to clean air."
        ],
        "answer": "B",
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Wrong Meaning",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The text illustrates natural selection in real time: soot favored dark moths, and clean air laws later restored light moths, showing dynamic population shifts in response to environmental change.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: Birds were not eliminated; they continued preying on non-camouflaged moths.",
            "B": "Correct Answer: Accurately summarizes the evolutionary principle of dynamic natural selection.",
            "C": "Wrong Meaning / Misconception Trap: Evolution is not an intentional, conscious choice made by individual moths.",
            "D": "Opposite Trap: Lichen returned once the air became clean."
          },
          "keyTakeaway": "Evolution passages describe population-level natural selection, never individual conscious choices."
        },
        "glosses": {
          "industrial melanism": "(noun) the darkening of organism populations in soot-polluted industrial regions • 🇹🇷 Endüstriyel melanizm (is kirliliğiyle rengin koyulaşması)",
          "lichen": "(noun) composite symbiotic organisms growing on tree bark • 🇹🇷 Liken (ağaç kabuğundaki mantar-yosun birliği)",
          "morphs": "(noun) distinct phenotypic forms or color variations in a species • 🇹🇷 Farklı renk ve görünüm biçimleri (morflar)"
        }
      },
      {
        "id": "CID-I-04",
        "type": "central-ideas-details",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Ventris's decipherment proved that Mycenaean civilization was culturally and linguistically Greek 500 years before Homer.",
        "passage": "In linguistics, the decipherment of the ancient Linear B script by architect Michael Ventris in 1952 overturned long-standing historical assumptions about Aegean civilization. Prevailing archaeological consensus had held that the Minoan and Mycenaean tablets represented an unknown, non-Greek Mediterranean language. Ventris discovered that the syllabic signs actually encoded an archaic dialect of Greek spoken five centuries before Homer, proving that Mycenaean society was culturally and linguistically Greek.",
        "question": "According to the passage, what was the major significance of Michael Ventris's decipherment of Linear B?",
        "choices": [
          "A) It proved that Mycenaean civilization was linguistically and culturally connected to early Greek society.",
          "B) It demonstrated that the Homeric epics were written in a non-Indo-European script.",
          "C) It showed that ancient Aegean tablets were purely decorative art pieces with no written text.",
          "D) It confirmed that Minoan civilization had zero contact with any European civilizations."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The final sentence states that deciphering Linear B proved the script encoded an archaic Greek dialect, establishing that Mycenaean society was culturally and linguistically Greek.",
          "choiceBreakdown": {
            "A": "Correct Answer: Direct paraphrase of the historical breakthrough connecting Mycenaeans to Greek language and culture.",
            "B": "Out of Scope Trap: Homeric epics are mentioned only as a chronological marker ('five centuries before Homer').",
            "C": "Opposite Trap: The tablets contained genuine syllabic writing, not purely decorative art.",
            "D": "Too Extreme Trap: Zero contact with European civilization is unsupported."
          },
          "keyTakeaway": "Look at the final conclusion of the text to find the overarching historical significance."
        },
        "glosses": {
          "Linear B": "(noun) an ancient Bronze Age syllabic script used in Mycenaean Greece",
          "archaic": "(adj.) very old; belonging to an ancient historical period • 🇹🇷 Arkaik, çok eski, antik döneme ait",
          "syllabic": "(adj.) a writing system where characters represent syllables • 🇹🇷 Heceye dayalı yazı sistemi"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Central Ideas & Details Self-Audit",
      "prompts": [
        {
          "id": "cid-1",
          "label": "I distinguish between a single true factual detail and the overarching main thesis."
        },
        {
          "id": "cid-2",
          "label": "I apply the Umbrella Test to ensure the chosen central idea covers all major paragraphs."
        },
        {
          "id": "cid-3",
          "label": "On detail questions, I verify that the answer is directly supported by literal words in the text."
        }
      ]
    }
  },
  "MOD-5": {
    "metadata": {
      "id": "MOD-5",
      "title": "Command of Evidence",
      "domain": "Information & Ideas",
      "methodName": "The Anchor-Match Protocol",
      "tagline": "Pinpoint the precise hypothesis in the question stem, find the exact textual quote or data row, and reject true data linked to the wrong claim."
    },
    "stage1_skill": {
      "title": "What Does Command of Evidence Test?",
      "whatItTests": "Command of Evidence tests your ability to identify which piece of factual evidence (either a textual excerpt or quantitative data from a table/graph) best supports or weakens a specific claim, hypothesis, or finding.",
      "frequency": "4 to 6 questions per module (both textual evidence and data table questions).",
      "recognitionTest": "Look for stems like: 'Which finding, if true, would most directly support the researchers' hypothesis?' or 'Which choice best uses data from the table to complete the statement?'",
      "goldenRules": [
        {
          "title": "The Hypothesis Anchor Mandate",
          "description": "Always isolate the exact hypothesis in the question stem before looking at data. Evidence is ONLY valid if it tests that specific claim."
        },
        {
          "title": "The 'Misused Evidence' Filter",
          "description": "The most common trap quotes real numbers accurately from the table, but attaches them to the wrong scientific conclusion."
        },
        {
          "title": "The Control Group Principle",
          "description": "To prove X causes Y, the evidence MUST compare a group with X against a control group without X under identical conditions."
        },
        {
          "title": "Axis & Unit Verification",
          "description": "Double-check units (percentages vs. raw counts, milligrams vs. grams, milliseconds vs. seconds). Lower milliseconds = faster reaction."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "20",
            "action": "Anchor Claim",
            "detail": "Underline the exact hypothesis or finding to support"
          },
          {
            "seconds": "15",
            "action": "Determine Data Shape",
            "detail": "Formulate: 'I need data showing Group A > Group B'"
          },
          {
            "seconds": "35",
            "action": "Table / Text Match",
            "detail": "Locate matching rows, columns, or textual citations"
          },
          {
            "seconds": "20",
            "action": "Veto Misused Data",
            "detail": "Eliminate choices with correct numbers but wrong conclusions"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The Accurate Number Fallacy",
          "explanation": "Picking an answer because its numbers match the table, without checking whether those numbers actually support the author's argument."
        },
        {
          "name": "The Uncontrolled Variable Error",
          "explanation": "Selecting an experimental result where two variables changed at the same time, making it impossible to isolate the cause."
        }
      ],
      "eslNote": "For quantitative questions: Do NOT guess based on intuition or general math trends. The correct answer will directly match specific rows/columns described in the text.",
      "turkishScaffold": {
        "title": "🇹🇷 Command of Evidence: Tablo Okuma ve Hipotez Eşleme",
        "strategyNote": "Tablo sorularında şıktaki sayıların doğru olması o seçeneğin doğru cevap olduğu anlamına gelmez! Sayılar tablodan doğru alınmış olsa bile, yazarın iddia ettiği hipotezi DESTEKLEMEYEBİLİR (Misused Evidence tuzağı). Önce hipotezi tek cümleyle özetleyin, ardından o hipotezi doğrudan ispatlayan sütunları eşleştirin.",
        "falseFriends": [
          {
            "word": "Significant",
            "wrongConcept": "Sadece çok önemli",
            "correctConcept": "İstatistiki olarak anlamlı ve ölçülebilir fark"
          },
          {
            "word": "Biomass",
            "wrongConcept": "Biyolojik kütle (ağırlık)",
            "correctConcept": "Belirli alandaki toplam organik bitki/canlı kütlesi"
          }
        ],
        "keyVocab": [
          {
            "word": "Tensile Strength",
            "pos": "noun",
            "tr": "Çekme dayanımı, kopma direnci"
          },
          {
            "word": "Corroborate",
            "pos": "verb",
            "tr": "Bulguları teyit etmek, delille doğrulamak"
          },
          {
            "word": "Disparity",
            "pos": "noun",
            "tr": "Belirgin eşitsizlik veya farklılık"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The Anchor-Match Protocol",
      "summary": "A 4-step precision matching workflow for text and data evidence.",
      "examFormula": "Hypothesis (Independent Variable -> Dependent Variable) + Experimental Data / Table Proof = Validated Evidence",
      "steps": [
        {
          "num": 1,
          "title": "Anchor the Exact Claim / Hypothesis",
          "rule": "Underline the specific claim the researchers want to prove or weaken.",
          "expertMove": "I ask: 'What exact relationship is being tested?' (e.g., 'Soil moisture increases root growth in Species A but NOT Species B')."
        },
        {
          "num": 2,
          "title": "Determine the Required Evidence Shape",
          "rule": "Formulate what data or quote is needed BEFORE looking at choices.",
          "expertMove": "Prediction: 'I need data showing Species A roots grew longer in wet soil while Species B stayed flat.'"
        },
        {
          "num": 3,
          "title": "Scan Table / Text for the Anchor Variables",
          "rule": "Check the table headers, labels, and units of measurement carefully.",
          "expertMove": "If the text discusses percentages, I make sure the choice doesn't confuse percentages with absolute headcounts."
        },
        {
          "num": 4,
          "title": "Eliminate Misused Evidence",
          "rule": "Reject choices that accurately cite numbers or lines that fail to support the specific claim.",
          "expertMove": "Correct data + wrong conclusion = automatic elimination."
        }
      ],
      "checklist": [
        "Did I circle the exact hypothesis in the question stem?",
        "Do the numbers in my selected choice match the table rows 100%?",
        "Does the data demonstrate causation for the target group specifically?",
        "Did I avoid choices with accurate data that answer the wrong question?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "COE-W-01",
        "type": "command-of-evidence",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "To support a comparative hypothesis (cooling benefits are greater in asphalt-dense vs. lawn-rich areas), the evidence must compare temperature drops in both neighborhood types.",
        "passage": "Ecologist Dr. Anika Patel hypothesized that urban tree canopies provide greater cooling benefits in low-income neighborhoods with high asphalt density than in affluent neighborhoods with extensive residential lawns. To test this hypothesis, Patel measured afternoon surface temperatures across twelve distinct urban zones with varying canopy coverage.",
        "question": "Which finding, if true, would most directly support Dr. Patel's hypothesis?",
        "choices": [
          "A) Adding 10% tree canopy in neighborhoods with 80% asphalt coverage reduced surface temperatures by 4.2°C, whereas the same canopy increase in lawn-rich neighborhoods reduced temperatures by only 1.1°C.",
          "B) Affluent neighborhoods with large residential lawns consistently had higher average surface temperatures than densely paved industrial districts.",
          "C) Low-income neighborhoods with high asphalt density contained significantly fewer total trees than neighborhoods with expansive private lawns.",
          "D) Planting trees in urban zones required substantially more municipal irrigation funding than maintaining standard turfgrass lawns."
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1 (Anchor Hypothesis): Patel's hypothesis = Tree canopies cool high-asphalt neighborhoods MORE than they cool lawn-rich neighborhoods.",
          "Step 2 (Determine Evidence Shape): We need comparative data showing a larger temperature reduction in asphalt-heavy areas vs. lawn-heavy areas for equal canopy increases.",
          "Step 3 (Evaluate Choice A): 10% canopy increase = 4.2°C drop in 80% asphalt areas vs. only 1.1°C drop in lawn-rich areas. Direct proof.",
          "Step 4 (Eliminate Choice B): Choice B contradicts realistic physics and does not test tree canopy cooling benefits.",
          "Step 5 (Eliminate Choice C): Choice C notes tree quantity distribution, which does not measure cooling effectiveness (Misused Evidence trap).",
          "Step 6 (Eliminate Choice D): Choice D is about municipal water funding (Out of Scope)."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Half Right",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. It provides direct comparative evidence: adding the exact same amount of canopy (10%) produced a 4.2°C cooling drop in high-asphalt neighborhoods compared to only 1.1°C in lawn-rich neighborhoods, validating that cooling benefits are greater in paved areas.",
          "choiceBreakdown": {
            "A": "Correct Answer: Perfectly matches the required comparative temperature reduction between asphalt and lawn zones.",
            "B": "Opposite Trap: Contradicts baseline urban heat island physics and fails to test canopy cooling benefits.",
            "C": "Half Right / Misused Evidence Trap: Documents existing tree disparity, but does not test cooling effectiveness.",
            "D": "Out of Scope Trap: Focuses on municipal budget costs rather than temperature reductions."
          },
          "keyTakeaway": "Evidence supporting a comparative claim ('greater in X than in Y') must provide explicit comparative measurements for both X and Y under identical intervention."
        },
        "glosses": {
          "canopy": "(noun) the high, spreading foliage of trees providing shade • 🇹🇷 Ağaçların tepesindeki gölge yaprak örtüsü",
          "asphalt": "(noun) dark bituminous material used for paving roads and parking lots • 🇹🇷 Asfalt kaplama yüzey",
          "affluent": "(adj.) wealthy; having abundant economic resources • 🇹🇷 Varlıklı, zengin, refah düzeyi yüksek"
        }
      },
      {
        "id": "COE-W-02",
        "type": "command-of-evidence",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "For two-part claims based on tables, verify both metrics: maximum tensile strength (highest MPa) AND elastic recovery (highest percentage).",
        "passage": "A research team tested the tensile strength and elastic recovery of four synthetic biomaterial fibers intended for surgical sutures.<br><br><b>Fiber Performance Metrics:</b><br><table class='sat-table'><thead><tr><th>Fiber Type</th><th>Tensile Strength (MPa)</th><th>Elastic Recovery (%)</th><th>Degradation Time (Weeks)</th></tr></thead><tbody><tr><td>BioFiber-A</td><td>420</td><td>94%</td><td>12</td></tr><tr><td>BioFiber-B</td><td>310</td><td>82%</td><td>24</td></tr><tr><td>BioFiber-C</td><td>510</td><td>68%</td><td>8</td></tr><tr><td>BioFiber-D</td><td>290</td><td>91%</td><td>16</td></tr></tbody></table><br>The researchers concluded that while BioFiber-C can withstand the greatest maximum force before rupturing, BioFiber-A is superior for cardiovascular surgery, which requires high flexibility and rapid shape restoration after arterial contractions.",
        "question": "Which choice best uses data from the table to support the researchers' conclusion regarding BioFiber-A and BioFiber-C?",
        "choices": [
          "A) BioFiber-C has a tensile strength of 510 MPa, which is the highest in the group, but BioFiber-A achieved an elastic recovery of 94%, significantly outperforming BioFiber-C's 68%.",
          "B) BioFiber-A has a degradation time of 12 weeks, which is twice as long as BioFiber-B's degradation time of 24 weeks.",
          "C) BioFiber-D exhibited an elastic recovery of 91%, making it superior in tensile strength to BioFiber-C's 510 MPa.",
          "D) BioFiber-C achieved an elastic recovery of 68%, which is the highest elastic recovery recorded among all four tested fibers."
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1 (Anchor Dual Claim): (1) BioFiber-C withstands greatest force (highest tensile strength). (2) BioFiber-A is superior for shape restoration (highest elastic recovery).",
          "Step 2 (Scan Table): Tensile Strength column: BioFiber-C is 510 MPa (highest). Elastic Recovery column: BioFiber-A is 94% (highest), BioFiber-C is only 68%.",
          "Step 3 (Test Choice A): Choice A states: BioFiber-C has tensile strength of 510 MPa (highest), but BioFiber-A has elastic recovery of 94% vs. BioFiber-C's 68%. 100% accurate.",
          "Step 4 (Eliminate Choice B): 12 weeks is half of 24, not twice (Mathematical error).",
          "Step 5 (Eliminate Choice C): Confuses elastic recovery with tensile strength.",
          "Step 6 (Eliminate Choice D): Falsely claims 68% is the highest elastic recovery (94% is)."
        ],
        "trapTypes": {
          "B": "Misused Evidence",
          "C": "Misused Evidence",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because it accurately cites the table numbers supporting both parts of the conclusion: BioFiber-C's 510 MPa validates that it withstands the highest tensile force, while BioFiber-A's 94% elastic recovery proves its superior shape restoration over BioFiber-C's 68%.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately cross-references both data columns to validate the two-part medical conclusion.",
            "B": "Misused Evidence Trap: 12 weeks is half of 24 weeks, not twice as long.",
            "C": "Misused Evidence Trap: Confuses elastic recovery percentage with tensile strength in MPa.",
            "D": "Opposite Trap: Falsely claims 68% is the highest value in the column."
          },
          "keyTakeaway": "On table questions, read each column header carefully and verify that the mathematical comparisons in the answer choice are factually true."
        },
        "glosses": {
          "tensile strength": "(noun) resistance of a material to breaking under tension • 🇹🇷 Çekme dayanımı, kopma direnci",
          "elastic recovery": "(noun) the ability of a stretched material to return to its original shape • 🇹🇷 Elastik toparlanma (esneyip eski şekline dönme)",
          "sutures": "(noun) medical stitches used to close surgical incisions • 🇹🇷 Cerrahi ameliyat dikiş iplikleri"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "COE-TRAP-01",
        "stem": "Hypothesis: 'Adding nitrogen fertilizer increases leaf surface area in corn plants.'",
        "wrongChoice": "Corn plants treated with nitrogen produced 25% more root nodules but had 10% smaller leaf surface area than untreated plants.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Misused Evidence",
          "Out of Scope",
          "Too Extreme"
        ],
        "rationale": "The finding shows a DECREASE in leaf surface area (-10%), which directly contradicts and refutes the hypothesis rather than supporting it."
      },
      {
        "id": "COE-TRAP-02",
        "stem": "Hypothesis: 'Bilingual children switch tasks faster than monolingual children.' Table shows: Bilingual Reaction Time = 320ms; Monolingual Reaction Time = 450ms.",
        "wrongChoice": "Monolingual children had a reaction time of 450ms, proving that monolinguals switch tasks faster than bilinguals.",
        "correctTrap": "Misused Evidence",
        "options": [
          "Misused Evidence",
          "Out of Scope",
          "Too Extreme",
          "Half Right"
        ],
        "rationale": "The choice accurately quotes the 450ms number, but draws the false conclusion that higher milliseconds means faster performance (in reaction time, lower ms is faster!)."
      },
      {
        "id": "COE-TRAP-03",
        "stem": "Hypothesis: 'Ancient ceramic vessels found in tomb B were used to store olive oil.'",
        "wrongChoice": "Tomb B was constructed during the Bronze Age by an architect named Menes who also designed royal granaries.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Misused Evidence",
          "Opposite",
          "Too Extreme"
        ],
        "rationale": "The identity of the architect who built the tomb provides zero chemical or archaeological evidence regarding whether the ceramic pots contained olive oil."
      },
      {
        "id": "COE-TRAP-04",
        "stem": "Hypothesis: 'Exposure to morning blue light improves test scores among college students.'",
        "wrongChoice": "Students exposed to morning blue light achieved an undisputed 100% on every final examination across all academic departments.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Out of Scope",
          "Half Right",
          "Opposite"
        ],
        "rationale": "Claiming students scored 100% on every single exam across all departments is an absurdly exaggerated finding that goes far beyond realistic scientific evidence."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "COE-G-01",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Test both parts of the hypothesis: (1) Losing the polymer does NOT increase antibiotic death, but (2) DOES allow rival bacterial invasion.",
        "passage": "Biologist Dr. Kevin Foster hypothesized that bacterial biofilms produce extracellular polymers not to protect individual cells from antibiotics, but primarily to establish shared structural architecture that prevents competitor strains from colonizing the nutrient-rich surface.",
        "question": "Which finding, if true, would most directly support Dr. Foster's hypothesis?",
        "choices": [
          "A) Biofilms lacking extracellular polymers were eradicated by antibiotics at the exact same rate as wild-type biofilms with intact polymers, but were immediately invaded and overtaken by rival bacterial strains.",
          "B) Individual free-floating bacteria exposed to antibiotics died within ten minutes, whereas biofilm-bound bacteria survived for forty-eight hours.",
          "C) Extracellular polymers produced by biofilms were composed primarily of polysaccharide sugars and water molecules.",
          "D) Competitor bacterial strains were completely unable to survive in any aquatic ecosystem containing antibiotics."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the two parts of Foster's hypothesis: (1) NOT to protect from antibiotics, (2) YES to prevent competitor strains from colonizing.",
          "Hint 2 (Strategy Reminder): What experiment tests both parts? We need a result showing that losing the polymer does NOT change antibiotic death, BUT DOES allow rival invasion.",
          "Hint 3 (Partial Solution): Choice A matches both halves of the hypothesis perfectly. Choice B supports the opposite view (that polymers protect from antibiotics). Choice C is just chemical composition. Choose A."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Half Right",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A provides direct double-barreled proof: biofilms without polymers died from antibiotics at the exact same rate (confirming polymers do not protect against antibiotics), but were immediately invaded by rival bacteria (confirming polymers block competitor colonization).",
          "choiceBreakdown": {
            "A": "Correct Answer: Perfectly isolates both predictions of the hypothesis.",
            "B": "Opposite Trap: Supports the traditional belief that biofilms protect against antibiotics.",
            "C": "Half Right Trap: Describes chemical structure without testing the defense hypothesis.",
            "D": "Out of Scope Trap: Focuses on rival survival in antibiotics rather than biofilm colonization."
          },
          "keyTakeaway": "When a hypothesis has two conditions ('not X, but Y'), the winning evidence must test both conditions simultaneously."
        },
        "glosses": {
          "biofilms": "(noun) structured communities of bacteria attached to surfaces and encased in matrix slime • 🇹🇷 Biyofilmler (yüzeylere yapışan bakteri tabakaları)",
          "extracellular polymers": "(noun) complex sugary compounds secreted by microbes for structural matrix • 🇹🇷 Hücre dışı koruyucu yapışkan şeker polimerleri",
          "colonizing": "(verb) establishing and spreading a population in a new territory • 🇹🇷 Yerleşmek, kolonileşmek, yayılmak"
        }
      },
      {
        "id": "COE-G-02",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for positive evidence along maritime Persian Gulf routes paired with an absence of evidence along overland routes.",
        "passage": "Historian Marcus Miller investigated trade networks between ancient Mesopotamia and the Indus Valley. Miller argued that contrary to the traditional assumption that trade was conducted exclusively via overland caravans through the Iranian plateau, maritime trade via Persian Gulf ports accounted for the vast majority of raw lapis lazuli imports into Ur during the Early Dynastic period.",
        "question": "Which finding, if true, would most directly support Miller's argument?",
        "choices": [
          "A) Bronze Age shipwrecks in the Persian Gulf contained large consignments of unworked Indus lapis lazuli, while contemporaneous overland trading posts in Iran yielded virtually no lapis artifacts.",
          "B) Lapis lazuli was considered a luxury gemstone worn exclusively by Mesopotamian royalty and high priests.",
          "C) Camel caravans required approximately six months to travel the overland route from the Indus Valley to Mesopotamia.",
          "D) Archaeological excavations at Ur uncovered ceramic storage jars containing preserved grain and barley."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Anchor the claim: Maritime trade in the Persian Gulf was responsible for lapis lazuli imports, NOT overland caravans through Iran.",
          "Hint 2 (Strategy Reminder): What archaeological evidence proves maritime trade over overland trade? Look for artifacts on sea routes vs. land routes.",
          "Hint 3 (Partial Solution): Choice A shows lapis on Persian Gulf shipwrecks and virtually none at Iranian overland posts. Choice B discusses who wore the stone (Out of Scope). Choice D mentions grain instead of lapis (Half Right)."
        ],
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Half Right",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A directly supports Miller's maritime claim: finding unworked lapis lazuli on Persian Gulf shipwrecks while finding virtually none at overland Iranian sites proves trade flowed primarily by sea.",
          "choiceBreakdown": {
            "A": "Correct Answer: Directly establishes the maritime route while discounting the overland route.",
            "B": "Out of Scope Trap: Who wore the gemstone does not prove which trade route was used.",
            "C": "Half Right Trap: Caravan transit time does not prove goods moved by sea.",
            "D": "Out of Scope Trap: Preserved grain jars are irrelevant to lapis lazuli trade routes."
          },
          "keyTakeaway": "To support a claim that Route A was favored over Route B, look for physical evidence present on Route A and absent on Route B."
        },
        "glosses": {
          "lapis lazuli": "(noun) a deep-blue semi-precious metamorphic gemstone • 🇹🇷 Lacivert taşı (kıymetli mavi antik mineral)",
          "consignments": "(noun) commercial shipments of goods • 🇹🇷 Ticari mal sevkiyatları",
          "contemporaneous": "(adj.) occurring during the same historical time period • 🇹🇷 Aynı çağda yaşamış/gerçekleşmiş, çağdaş"
        }
      },
      {
        "id": "COE-G-03",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Verify that Hairy Vetch achieves high weed suppression (88%) while also adding the highest nitrogen (145 kg/ha).",
        "passage": "An agricultural research station evaluated four cover crop species for their capacity to suppress weed biomass and enhance soil nitrogen content.<br><br><b>Cover Crop Performance Data:</b><br><table class='sat-table'><thead><tr><th>Cover Crop Species</th><th>Weed Suppression (%)</th><th>Nitrogen Added (kg/ha)</th><th>Soil Moisture Retained (%)</th></tr></thead><tbody><tr><td>Crimson Clover</td><td>64%</td><td>110</td><td>32%</td></tr><tr><td>Hairy Vetch</td><td>88%</td><td>145</td><td>28%</td></tr><tr><td>Winter Rye</td><td>92%</td><td>15</td><td>44%</td></tr><tr><td>Field Pea</td><td>58%</td><td>85</td><td>26%</td></tr></tbody></table><br>An agronomist claims that while Winter Rye is the most effective crop for controlling weed growth, Hairy Vetch provides the best overall balance for farmers seeking both substantial weed reduction and significant soil fertilization.",
        "question": "Which choice best uses data from the table to support the agronomist's claim?",
        "choices": [
          "A) Winter Rye achieved 92% weed suppression, the highest among all crops, while Hairy Vetch combined strong weed suppression (88%) with the highest nitrogen addition (145 kg/ha).",
          "B) Field Pea added 85 kg/ha of nitrogen, which was higher than Hairy Vetch's 145 kg/ha.",
          "C) Crimson Clover provided 64% weed suppression and retained 32% soil moisture, making it superior to Winter Rye in both metrics.",
          "D) Winter Rye added 15 kg/ha of nitrogen, which was the highest nitrogen contribution recorded in the trial."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look up two things in the table: (1) Who had the highest weed suppression? (Winter Rye at 92%), (2) How does Hairy Vetch balance weed suppression and nitrogen?",
          "Hint 2 (Strategy Reminder): Match Hairy Vetch's numbers: Weed Suppression = 88% (second highest), Nitrogen = 145 kg/ha (highest).",
          "Hint 3 (Partial Solution): Choice A matches both numbers accurately and directly supports the agronomist's dual claim. Choices B, C, and D contain obvious mathematical falsehoods."
        ],
        "trapTypes": {
          "B": "Misused Evidence",
          "C": "Misused Evidence",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because it pulls accurate numbers from the table: Winter Rye has the highest weed suppression (92%), while Hairy Vetch combines near-top weed suppression (88%) with the highest nitrogen fertilization (145 kg/ha), validating its balanced dual benefit.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately reports 92% for Winter Rye and 88% / 145 kg/ha for Hairy Vetch.",
            "B": "Misused Evidence / Math Error Trap: 85 kg/ha is less than 145 kg/ha, not higher.",
            "C": "Misused Evidence Trap: Crimson Clover's 64% weed suppression is far below Winter Rye's 92%.",
            "D": "Opposite Trap: 15 kg/ha is the lowest nitrogen contribution, not the highest."
          },
          "keyTakeaway": "Always check numerical rankings: 'best overall balance' requires verifying strong performance across both required columns."
        },
        "glosses": {
          "biomass": "(noun) total organic plant mass in a given area • 🇹🇷 Biyokütle (toplam organik bitki örtüsü ağırlığı)",
          "agronomist": "(noun) an agricultural scientist specializing in soil and crop management • 🇹🇷 Agronomist (tarım ve toprak bilimci)",
          "suppress": "(verb) prevent or substantially reduce the growth of weeds • 🇹🇷 Baskılamak, yabani ot gelişimini önlemek"
        }
      },
      {
        "id": "COE-G-04",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Look for equal physical disease markers (amyloid plaques) alongside superior cognitive memory recall in multilingual patients.",
        "passage": "Neuroscientists investigated whether multilingualism delays the onset of cognitive symptoms in Alzheimer's patients. Dr. Elena Rostova hypothesized that cognitive reserve acquired from managing multiple languages does not prevent the physical accumulation of amyloid plaques in the brain, but rather enables the brain to maintain functional memory performance despite underlying neurodegeneration.",
        "question": "Which finding, if true, would most directly support Dr. Rostova's hypothesis?",
        "choices": [
          "A) Multilingual Alzheimer's patients exhibited the exact same high volume of amyloid plaques on PET scans as monolingual patients, but scored significantly higher on clinical memory recall assessments.",
          "B) Multilingual individuals had zero amyloid plaques in their brains, proving that bilingualism confers complete immunity against Alzheimer's disease.",
          "C) Monolingual patients learned foreign language vocabulary significantly faster than multilingual patients during memory trials.",
          "D) Brain scans revealed that multilingual patients had identical brain volume and identical memory recall scores to healthy young college students."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the two parts of Rostova's hypothesis: (1) Does NOT prevent physical plaques, (2) DOES maintain functional memory.",
          "Hint 2 (Strategy Reminder): Look for a choice where physical plaque volume is EQUAL, but memory test performance is HIGHER in multilinguals.",
          "Hint 3 (Partial Solution): Choice A shows identical plaque levels alongside superior memory scores. Choice B is an extreme/opposite claim (claiming zero plaques). Choice A is the correct match."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A directly proves both conditions of Rostova's hypothesis: multilinguals exhibited the same volume of amyloid plaques (confirming plaques still accumulate physically) while scoring higher on memory recall tests (confirming functional cognitive reserve).",
          "choiceBreakdown": {
            "A": "Correct Answer: Perfectly pairs identical plaque pathology with superior memory performance.",
            "B": "Too Extreme / Opposite Trap: 'Zero amyloid plaques' and 'complete immunity' contradict the hypothesis that plaques still accumulate.",
            "C": "Opposite Trap: Irrelevant and contrary to cognitive reserve.",
            "D": "Too Extreme Trap: Alzheimer's patients having identical brain volume to young healthy students is medically impossible."
          },
          "keyTakeaway": "To support cognitive reserve hypotheses, look for identical underlying physical damage paired with superior functional performance."
        },
        "glosses": {
          "cognitive reserve": "(noun) the mind's resistance to neuropathological brain damage • 🇹🇷 Bilişsel rezerv (beynin hasara karşı zihinsel direnci)",
          "amyloid plaques": "(noun) protein misfold aggregates in the brains of Alzheimer's patients • 🇹🇷 Amiloid plakları (Alzheimer'a yol açan protein yumakları)",
          "neurodegeneration": "(noun) progressive structural and functional decay of neurons • 🇹🇷 Nörodejenerasyon (sinir hücrelerinin harabiyeti)"
        }
      },
      {
        "id": "COE-G-05",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Anchor the hypothesis: 'microplastics reduce photosynthesis in marine phytoplankton'. Look for the choice showing reduced photosynthetic output or chlorophyll.",
        "passage": "Marine biologist Dr. Elena Rostova hypothesized that exposure to high concentrations of microplastic particles inhibits the photosynthetic efficiency of marine phytoplankton, the primary producers responsible for half of global oxygen output. To test this hypothesis, Rostova cultured identical populations of the diatom *Thalassiosira pseudonana* in sealed aquatic chambers containing varying concentrations of polyethylene microplastic spheres over a fourteen-day period.",
        "question": "Which finding from Rostova's experiment, if true, would most directly support her hypothesis?",
        "choices": [
          "A) Diatoms grown in water with high microplastic concentrations exhibited a 42% decrease in chlorophyll fluorescence and carbon fixation compared to control populations.",
          "B) Polyethylene microplastic spheres remained suspended in the water column longer than microplastics made from heavier polypropylene polymers.",
          "C) The diatom *Thalassiosira pseudonana* reproduced at higher rates in warm coastal waters than in colder polar open-ocean waters.",
          "D) Phytoplankton populations exposed to agricultural fertilizer runoff exhibited rapid algal blooms regardless of water temperature."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Identify the specific claim in Rostova's hypothesis: 'exposure to microplastics inhibits photosynthetic efficiency'.",
          "Hint 2 (Strategy Reminder): You need a choice that links [microplastics present] -> [photosynthesis measured as lower].",
          "Hint 3 (Partial Solution): Choice A specifically measures 'chlorophyll fluorescence and carbon fixation' (direct proxies for photosynthesis) showing a 42% decrease."
        ],
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Out of Scope",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Decreased chlorophyll fluorescence and carbon fixation directly measure a decline in photosynthetic efficiency, confirming the hypothesis that microplastics impair diatoms' energy-producing capacity.",
          "choiceBreakdown": {
            "A": "Correct Answer: Directly provides quantitative proof of reduced photosynthetic activity in the microplastic-exposed group.",
            "B": "Out of Scope Trap: Discusses physical buoyancy of polymers, not photosynthetic output.",
            "C": "Out of Scope Trap: Compares water temperatures without addressing microplastic impact.",
            "D": "Out of Scope Trap: Focuses on agricultural fertilizer runoff, which is irrelevant to Rostova's hypothesis."
          },
          "keyTakeaway": "Anchor the exact dependent variable in the hypothesis (photosynthetic efficiency) and match it to the direct biological measurement in the findings."
        },
        "glosses": {
          "phytoplankton": "(noun) microscopic marine algae that perform photosynthesis • 🇹🇷 Fitoplankton (deniz yosunları)",
          "diatom": "(noun) a major group of microalgae with cell walls made of silica • 🇹🇷 Diyatom (silis kabuklu mikroskobik alg)",
          "carbon fixation": "(noun) the conversion process of inorganic carbon into organic compounds by living organisms • 🇹🇷 Karbon tutulumu / fotosentez bağlanması"
        }
      },
      {
        "id": "COE-G-06",
        "type": "command-of-evidence",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Find the claim: 'urban green roofs mitigate the heat island effect by cooling surface ambient temperatures through evapotranspiration'.",
        "passage": "Urban climatologist Marcus Vance investigated the cooling benefits of vegetative green roofs in dense downtown districts. Vance asserted that green roofs cool the surrounding urban microclimate primarily through evapotranspiration—the process by which water is transferred from plant foliage to the atmosphere—rather than merely shading rooftop gravel.",
        "question": "Which finding, if true, would most directly support Vance's assertion?",
        "choices": [
          "A) Traditional tar rooftops coated with reflective white paint produced similar surface cooling as vegetative sedum mats during winter months.",
          "B) Irrigated vegetative green roofs achieved ambient temperature reductions 3.8°C greater than artificial plastic turf mats that provided identical physical shading.",
          "C) Installation costs for downtown commercial green roofs exceeded initial municipal budget projections by nearly twenty percent.",
          "D) Urban heat islands were more pronounced in cities with extensive asphalt parking facilities than in cities with subterranean parking garages."
        ],
        "answer": "B",
        "hints": [
          "Hint 1 (Nudge): Vance asserts that cooling comes from *evapotranspiration* (biological plant water release), *not merely shading*.",
          "Hint 2 (Strategy Reminder): To isolate evapotranspiration, compare living plants to a non-living material that provides identical shade.",
          "Hint 3 (Partial Solution): Choice B isolates this variable: living roofs cooled 3.8°C more than artificial turf providing the exact same shade."
        ],
        "trapTypes": {
          "A": "Out of Scope",
          "C": "Out of Scope",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. By comparing living green roofs to artificial plastic turf that provides identical shade, Choice B controls for the shading effect and proves that the additional 3.8°C cooling is attributable to the biological process of evapotranspiration.",
          "choiceBreakdown": {
            "A": "Out of Scope Trap: Compares reflective paint during winter, failing to test evapotranspiration.",
            "B": "Correct Answer: Cleanly isolates biological evapotranspiration from physical shading with a controlled experimental comparison.",
            "C": "Out of Scope Trap: Focuses on installation costs rather than thermodynamic cooling mechanisms.",
            "D": "Out of Scope Trap: Compares parking structures rather than green roof cooling dynamics."
          },
          "keyTakeaway": "When an author claims an effect is caused by Process X rather than Process Y, look for data that holds Process Y constant while varying Process X."
        },
        "glosses": {
          "evapotranspiration": "(noun) the combined water loss from soil evaporation and plant transpiration • 🇹🇷 Buharlaşma-terleme (bitki su salınımı)",
          "ambient": "(adj.) relating to the immediate surrounding atmosphere or temperature • 🇹🇷 Ortam (çevre) sıcaklığı",
          "sedum": "(noun) a hardy succulent plant commonly used on green roofs • 🇹🇷 Damkoruğu (yeşil çatı sukulenti)"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "COE-I-01",
        "type": "command-of-evidence",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for behavioral metrics (drop in disciplinary referrals) rather than caloric metrics to validate Dr. Lin's hypothesis.",
        "passage": "Economist Dr. Maya Lin hypothesized that introducing universal free school lunches in public school districts increases academic achievement primarily by reducing classroom behavioral disruptions rather than merely by improving individual caloric intake.",
        "question": "Which finding, if true, would most directly support Dr. Lin's hypothesis?",
        "choices": [
          "A) Following the policy, disciplinary referrals dropped by 45% across all classrooms, and academic gains were largest in classrooms that previously experienced the most behavioral disruptions.",
          "B) Students who ate school lunches consumed 20% more calories per day than students who brought lunches from home.",
          "C) School districts spending the most money on cafeteria kitchen equipment had the lowest standardized math test scores.",
          "D) High school students universally agreed that cafeteria lunch food was superior in taste to restaurant food."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Half Right",
          "C": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct because it directly validates the behavioral mechanism: disciplinary referrals fell by 45%, and the greatest academic gains occurred in the classrooms that had previously suffered the most disruptions.",
          "choiceBreakdown": {
            "A": "Correct Answer: Direct behavioral evidence linking disruption reductions to academic gains.",
            "B": "Half Right / Counter Trap: Focuses on caloric intake, which Lin hypothesized was NOT the primary mechanism.",
            "C": "Opposite Trap: Shows an inverse relationship between kitchen spending and test scores.",
            "D": "Out of Scope Trap: Subjective taste opinions provide no academic achievement evidence."
          },
          "keyTakeaway": "Match the specific proposed mechanism (classroom behavior reduction) rather than the alternative mechanism (calories)."
        },
        "glosses": {
          "caloric intake": "(noun) total energy consumed from food • 🇹🇷 Günlük gıdalardan alınan kalori miktarı",
          "referrals": "(noun) official disciplinary notices sending students to administrative offices • 🇹🇷 Disiplin sevk bildirimleri"
        }
      },
      {
        "id": "COE-I-02",
        "type": "command-of-evidence",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Look for the double correlation: rising noise (dB) corresponds to both higher minimum pitch (Hz) AND higher amplitude (dB).",
        "passage": "Ornithologists recorded the vocal frequency and amplitude of urban European blackbirds (*Turdus merula*) across four cities with varying levels of anthropogenic noise.<br><br><b>Urban Song Characteristics:</b><br><table class='sat-table'><thead><tr><th>City Location</th><th>Ambient Traffic Noise (dB)</th><th>Minimum Song Frequency (Hz)</th><th>Song Amplitude (dB)</th></tr></thead><tbody><tr><td>Rural Forest (Control)</td><td>42</td><td>1,850</td><td>68</td></tr><tr><td>City Park</td><td>58</td><td>2,200</td><td>74</td></tr><tr><td>Suburban Plaza</td><td>65</td><td>2,450</td><td>79</td></tr><tr><td>Urban Center</td><td>76</td><td>2,800</td><td>84</td></tr></tbody></table><br>A researcher asserts that European blackbirds dynamically adapt their vocalizations in noisy urban environments by both shifting their songs to higher acoustic pitches and singing at higher volumes to prevent traffic noise from masking their territory calls.",
        "question": "Which choice best uses data from the table to support the researcher's assertion?",
        "choices": [
          "A) As ambient traffic noise increased from 42 dB in the rural forest to 76 dB in the urban center, the blackbirds' minimum song frequency rose from 1,850 Hz to 2,800 Hz and song amplitude rose from 68 dB to 84 dB.",
          "B) Blackbirds in the urban center sang at a lower frequency (1,850 Hz) and lower volume (68 dB) than blackbirds in the rural forest.",
          "C) Rural forest blackbirds experienced an ambient noise level of 76 dB, which caused them to sing at an amplitude of 84 dB.",
          "D) Blackbirds in the city park sang at 2,800 Hz, which was higher than the frequency of blackbirds in the urban center (2,200 Hz)."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Misused Evidence",
          "D": "Misused Evidence"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. It accurately pulls the numbers from the table: as traffic noise increased from 42 dB to 76 dB, frequency rose from 1,850 Hz to 2,800 Hz (higher pitch) and amplitude rose from 68 dB to 84 dB (higher volume).",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately reflects the positive correlation between noise, pitch, and amplitude.",
            "B": "Opposite Trap: Swaps rural and urban figures, stating an inverted relationship.",
            "C": "Misused Evidence Trap: Attributes urban center noise (76 dB) to the rural forest.",
            "D": "Misused Evidence Trap: Swaps city park and urban center frequencies."
          },
          "keyTakeaway": "Verify that the start and end values for all three columns (Noise, Frequency, Amplitude) match the table rows precisely."
        },
        "glosses": {
          "anthropogenic": "(adj.) originating from human activity • 🇹🇷 İnsan faaliyetlerinden kaynaklanan",
          "amplitude": "(noun) the maximum extent of acoustic vibration; loudness • 🇹🇷 Ses dalgasının genliği; ses şiddeti/gürültü",
          "masking": "(noun) the acoustic drowning out of one sound by another • 🇹🇷 Akustik maskeleme (bir sesin diğerini bastırması)"
        }
      },
      {
        "id": "COE-I-03",
        "type": "command-of-evidence",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Look for the threshold turning point: compressive strength increases at 0.5% concentration but drops at 1.0% due to clumping.",
        "passage": "Materials engineers hypothesized that adding multi-walled carbon nanotubes (MWCNTs) to concrete would increase compressive strength by bridging microscopic cracks, but only up to a concentration of 0.5% by weight; beyond that threshold, nanotube clumping would create internal void defects that weaken the material.",
        "question": "Which finding, if true, would most directly support the engineers' hypothesis?",
        "choices": [
          "A) Concrete with 0.5% MWCNTs exhibited 45% higher compressive strength than plain concrete, while concrete with 1.0% MWCNTs exhibited 20% lower compressive strength than plain concrete due to widespread agglomeration.",
          "B) Concrete with 1.0% MWCNTs possessed the highest compressive strength ever recorded in civil engineering history.",
          "C) Plain concrete without any carbon nanotubes was completely impervious to cracking under all tectonic earthquake pressures.",
          "D) Carbon nanotubes increased the financial cost of producing concrete by 300% per metric ton."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A directly proves the threshold hypothesis: compressive strength increased by 45% at 0.5% concentration, but dropped by 20% at 1.0% concentration due to agglomeration (clumping).",
          "choiceBreakdown": {
            "A": "Correct Answer: Perfectly demonstrates the peak at 0.5% and subsequent decline at 1.0%.",
            "B": "Opposite Trap: Claims 1.0% had the highest strength, contradicting the 0.5% threshold.",
            "C": "Too Extreme Trap: Plain concrete is not impervious to earthquake pressure.",
            "D": "Out of Scope Trap: Financial production cost does not test structural material strength."
          },
          "keyTakeaway": "Threshold hypotheses ('benefits up to X%, but harms beyond X%') require data points both below and above the critical percentage."
        },
        "glosses": {
          "nanotubes": "(noun) microscopic cylindrical carbon molecules with immense strength • 🇹🇷 Karbon nanotüpler (mikroskobik ultra güçlü silindirler)",
          "compressive strength": "(noun) the capacity of a material to withstand crushing loads • 🇹🇷 Basınç dayanımı (ezilmeye karşı direnç)",
          "agglomeration": "(noun) clumping or clustering together of particles • 🇹🇷 Topaklanma, parçacıkların kümelenmesi"
        }
      },
      {
        "id": "COE-I-04",
        "type": "command-of-evidence",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Look for poor active vocabulary recall paired with intact native-level accent and phonological pitch discrimination.",
        "passage": "Linguist Dr. Sonia Rao hypothesized that heritage language speakers (individuals raised in homes where a non-English language is spoken) retain intuitive grammatical phonology in their heritage tongue even when their adult active conversational vocabulary has significantly atrophied.",
        "question": "Which finding, if true, would most directly support Dr. Rao's hypothesis?",
        "choices": [
          "A) Heritage speakers who could recall only 20% of basic conversational nouns still produced native-like accent vowel pitch and tone distinctions in phonological listening tests indistinguishable from native residents.",
          "B) Heritage speakers forgot how to pronounce vowels in their native language within two years of beginning English schooling.",
          "C) Heritage speakers scored 100% on every formal written grammar and vocabulary exam in both languages.",
          "D) English monolinguals acquired foreign language phonology faster than fluent bilingual adults."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A directly demonstrates Dr. Rao's claim: heritage speakers with severe vocabulary loss (only 20% noun recall) still retained native-like phonological accent and vowel pitch perception.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately pairs atrophied vocabulary with intact phonology.",
            "B": "Opposite Trap: Contradicts the claim that phonology is retained.",
            "C": "Too Extreme Trap: Scoring 100% on written vocabulary exams contradicts vocabulary atrophy.",
            "D": "Opposite Trap: Monolingual language acquisition is irrelevant to heritage speakers."
          },
          "keyTakeaway": "Match the exact contrast tested: low vocabulary performance + high accent/phonology retention."
        },
        "glosses": {
          "phonology": "(noun) the sound and intonation system of a language • 🇹🇷 Sesbilim, bir dilin telaffuz ve tonlama sistemi",
          "atrophied": "(verb/adj.) diminished or decayed through lack of active use • 🇹🇷 Körelmiş, kullanılmadığı için zayıflamış"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Command of Evidence Self-Audit",
      "prompts": [
        {
          "id": "coe-1",
          "label": "I identify the exact claim or hypothesis in the question stem before evaluating evidence options."
        },
        {
          "id": "coe-2",
          "label": "For table/graph questions, I verify each number, column header, and trend against the answer choices."
        },
        {
          "id": "coe-3",
          "label": "I reject 'Misused Evidence' options that quote true data but link it to the wrong conclusion."
        }
      ]
    }
  },
  "MOD-6": {
    "metadata": {
      "id": "MOD-6",
      "title": "Inferences",
      "domain": "Information & Ideas",
      "methodName": "The Must-Be-True Rule",
      "tagline": "The correct inference requires ZERO speculation—it is the minimal, inescapable logical step forced by the passage."
    },
    "stage1_skill": {
      "title": "What Does Inferences Test?",
      "whatItTests": "Inference questions present an argument, experiment, or logical chain of premises that ends with a blank line. Your job is to select the choice that 'most logically completes the text.' On the SAT, an inference is NOT an imaginative creative guess; it is an airtight, mathematically forced logical conclusion.",
      "frequency": "4 to 6 questions per module.",
      "recognitionTest": "The question stem almost always reads: 'Which choice most logically completes the text?'",
      "goldenRules": [
        {
          "title": "The Zero Speculation Rule",
          "description": "If an inference requires you to say 'Well, it's possible that in the real world...', it is WRONG. The answer must be forced by the text."
        },
        {
          "title": "The Minimal Leap Heuristic",
          "description": "Pick the answer that takes the smallest, most cautious, most modest step forward. Bold leaps are always distractor traps."
        },
        {
          "title": "The Boundary Enforcement Rule",
          "description": "If the passage is about 3 species of deep-sea worms, the conclusion cannot be about 'all marine animals on Earth'."
        },
        {
          "title": "The Final Connector Check",
          "description": "Transitions like 'Therefore', 'Consequently', or 'Suggesting that' dictate the logical direction of the final sentence."
        }
      ],
      "pacingStrategy": {
        "steps": [
          {
            "seconds": "20",
            "action": "Chain Premises",
            "detail": "Identify Premise 1 (Fact A) and Premise 2 (Fact B)"
          },
          {
            "seconds": "15",
            "action": "Check Transition",
            "detail": "Identify concluding transition ('Therefore', 'Thus', 'Suggesting that')"
          },
          {
            "seconds": "30",
            "action": "Bound the Deduction",
            "detail": "Formulate the minimal inescapable conclusion"
          },
          {
            "seconds": "25",
            "action": "Veto Extreme Leaps",
            "detail": "Eliminate choices with sweeping extrapolations or outside facts"
          }
        ]
      },
      "commonPitfalls": [
        {
          "name": "The Real-World Plausibility Trap",
          "explanation": "Choosing an option that is scientifically true in real life, but not logically entailed by the specific premises given in the passage."
        },
        {
          "name": "The Grand Extrapolation",
          "explanation": "Taking a localized laboratory finding and concluding that a worldwide revolution or universal truth has occurred."
        }
      ],
      "eslNote": "Look for modest modal verbs in correct answers: 'can', 'may', 'tends to', 'is consistent with'. Avoid 'proves', 'always', 'invariably', 'impossible'.",
      "turkishScaffold": {
        "title": "🇹🇷 Inferences: Sıfır Spekülasyon ve Zorunlu Mantık",
        "strategyNote": "Inference sorularında boşluktan önceki 'Therefore', 'Consequently', 'Suggesting that' bağlaçlarına odaklanın. Asla 'Gerçek hayatta bu da olabilir' diyerek metnin dışına çıkmayın. Doğru çıkarım, metindeki öncüllerden (Premises) kaçınılmaz olarak çıkan en mütevazı ve dar kapsamlı mantıksal sonuçtur.",
        "falseFriends": [
          {
            "word": "Speculative",
            "wrongConcept": "Borsada spekülasyon yapmak",
            "correctConcept": "Kanıtsız varsayıma dayalı, tahmini"
          },
          {
            "word": "Nominal",
            "wrongConcept": "İsimsel",
            "correctConcept": "Çok küçük, sembolik, önemsiz düzeyde"
          }
        ],
        "keyVocab": [
          {
            "word": "Deduction",
            "pos": "noun",
            "tr": "Tümdenbelim, mantıksal zorunlu çıkarım"
          },
          {
            "word": "Inescapable",
            "pos": "adj",
            "tr": "Kaçınılmaz, zorunlu olarak ortaya çıkan"
          },
          {
            "word": "Thermodynamic",
            "pos": "adj",
            "tr": "Isı enerjisinin dönüşümüyle ilgili"
          }
        ]
      }
    },
    "stage2_method": {
      "name": "The Must-Be-True Rule",
      "summary": "A 4-step logic protocol that eliminates ungrounded assumptions.",
      "examFormula": "Premise 1 (Fact A) + Premise 2 (Fact B) + Logical Joint (Therefore) = Inescapable Conclusion",
      "steps": [
        {
          "num": 1,
          "title": "Diagram the Premise Chain",
          "rule": "Identify Premise 1, Premise 2, and the Final Transition Word.",
          "expertMove": "I summarize: 'Fact A: Deep caves lack light. Fact B: Blind cavefish conserve 15% energy by not developing eyes. Therefore...'"
        },
        {
          "num": 2,
          "title": "Check the Final Transition",
          "rule": "Notice words like 'suggesting that', 'therefore', 'consequently', or 'it follows that'.",
          "expertMove": "The transition dictates the logical direction: positive consequence, negative limitation, or alternative explanation."
        },
        {
          "num": 3,
          "title": "Enforce the Boundary Limits",
          "rule": "The conclusion must stay within the exact nouns, conditions, and parameters established in the text.",
          "expertMove": "If the text is about cavefish, the conclusion cannot be about 'all subterranean vertebrates worldwide'."
        },
        {
          "num": 4,
          "title": "Select the Minimal Necessary Step",
          "rule": "Choose the answer that requires the smallest possible logical leap.",
          "expertMove": "On the SAT, the most modest, qualified, unexciting choice is almost always the right answer."
        }
      ],
      "checklist": [
        "Is my conclusion 100% forced by the given premises?",
        "Does the answer stay strictly within the nouns and boundaries of the passage?",
        "Did I eliminate dramatic leaps and speculative assumptions?",
        "Does the tone use cautious academic phrasing (may, suggests, can)?"
      ]
    },
    "stage3_workedExamples": [
      {
        "id": "INF-W-01",
        "type": "inferences",
        "stage": "worked-example",
        "difficulty": "Medium",
        "strategyHeuristic": "When wheat inoculated with fungi absorbs 35% more soil phosphorus under deficient conditions, the minimal logical inference is that fungal inoculation can reduce reliance on synthetic fertilizers.",
        "passage": "Agricultural scientists know that phosphorus is an essential nutrient for crop development, yet global rock phosphate reserves are rapidly depleting. To explore sustainable alternatives, researchers inoculated wheat crops with mycorrhizal fungi, which secrete organic acids that solubilize insoluble phosphorus bound in mineral soil. The inoculated wheat absorbed 35% more soil phosphorus than non-inoculated control crops grown in identical phosphorus-deficient soils, leading the researchers to conclude that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) mycorrhizal fungi can fully replace water and sunlight in commercial wheat agriculture.",
          "B) inoculating crops with mycorrhizal fungi could help sustain agricultural yields while reducing dependence on synthetic phosphate fertilizers.",
          "C) non-inoculated wheat crops are genetically incapable of absorbing any soil nutrients whatsoever.",
          "D) global rock phosphate reserves will be completely replenished naturally within the next decade."
        ],
        "answer": "B",
        "thinkAloud": [
          "Step 1 (Map the Premise Chain): Premise 1 = Phosphate reserves are depleting. Premise 2 = Mycorrhizal fungi unlock insoluble soil phosphorus. Premise 3 = Inoculated wheat absorbed 35% more phosphorus in low-phosphate soil.",
          "Step 2 (Trace the Logical Completion): The experiment tested a sustainable alternative to depleting phosphate reserves. Inoculation worked.",
          "Step 3 (Formulate Minimal Prediction): Inoculating wheat with fungi can help sustain crop growth and reduce reliance on mined phosphate fertilizers.",
          "Step 4 (Test Choice B): 'inoculating crops with mycorrhizal fungi could help sustain agricultural yields while reducing dependence on synthetic phosphate fertilizers.' Modest, cautious, logically forced.",
          "Step 5 (Eliminate Distractors): Choice A claims fungi replace water and sunlight (Absurd / Too Extreme). Choice C claims non-inoculated wheat absorbs zero nutrients (Too Extreme). Choice D claims reserves will replenish naturally (Opposite / Out of Scope)."
        ],
        "trapTypes": {
          "A": "Too Extreme",
          "C": "Too Extreme",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice B is correct. It draws the minimal, logically required conclusion: because mycorrhizal fungi increase phosphorus uptake in depleted soils, using them could sustain crop yields while reducing reliance on depleting synthetic phosphate reserves.",
          "choiceBreakdown": {
            "A": "Too Extreme Trap: Fungi solubilize phosphorus; they cannot replace water or sunlight.",
            "B": "Correct Answer: Formulates the cautious, logically entailed conclusion addressing the depletion problem.",
            "C": "Too Extreme Trap: Non-inoculated crops absorbed less phosphorus, but they are not 'incapable of absorbing any nutrients'.",
            "D": "Out of Scope / Opposite Trap: Mined rock phosphate does not replenish naturally in a decade."
          },
          "keyTakeaway": "On inference questions addressing a resource dilemma, the correct completion connects the experimental solution to mitigating the resource shortage."
        },
        "glosses": {
          "inoculated": "(verb) introduced beneficial microorganisms into an agricultural crop • 🇹🇷 Aşılanmış, yararlı mikroorganizma verilmiş",
          "solubilize": "(verb) make an insoluble substance dissolve in liquid • 🇹🇷 Çözünür hale getirmek, sıvı içinde eritmek",
          "depleting": "(verb/adj.) diminishing or exhausting available supply reserves • 🇹🇷 Tükenmekte olan, azalan rezervler"
        }
      },
      {
        "id": "INF-W-02",
        "type": "inferences",
        "stage": "worked-example",
        "difficulty": "Hard",
        "strategyHeuristic": "Disparity in penalty severity (lethal warrants vs. minor fines) proves the state's true underlying priority.",
        "passage": "Historians studying 14th-century Venetian glassmaking have debated whether the republic's strict 1291 decree relocating all glass furnaces to the island of Murano was motivated primarily by fire prevention in the wooden city or by a desire to guard state industrial secrets. Records show that Venetian glassmakers who fled Murano to practice their craft abroad faced severe financial penalties and even state-sponsored assassination warrants, whereas infractions of municipal fire safety codes in other Venetian industries were punished merely by nominal fines. This disparity strongly suggests that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) the Venetian government prioritized safeguarding its lucrative glassmaking monopoly over standard urban fire safety concerns.",
          "B) glass furnaces on Murano were completely immune to accidental fires and structural heat damage.",
          "C) foreign glassmakers successfully overthrew the Venetian republic's diplomatic trade treaties.",
          "D) municipal fire codes in 14th-century Venice were universally ignored by all industrial guilds."
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1 (Identify the Core Historical Debate): Was the 1291 Murano decree about (A) fire prevention, or (B) guarding glassmaking secrets?",
          "Step 2 (Compare the Legal Evidence): Leaking glass secrets abroad = assassination warrants and massive penalties. Violating fire safety codes in other industries = minor fines.",
          "Step 3 (Deduce the Inescapable Conclusion): The extreme difference in punishment severity proves the state cared far more about protecting its secret glass monopoly than about fire safety.",
          "Step 4 (Test Choice A): 'the Venetian government prioritized safeguarding its lucrative glassmaking monopoly over standard urban fire safety concerns.' Exact deduction.",
          "Step 5 (Eliminate Distractors): Choice B claims furnaces were 'immune to fires' (Too Extreme). Choice C mentions overthrowing treaties (Out of Scope). Choice D claims fire codes were 'universally ignored' (Too Extreme)."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The dramatic disparity between lethal punishments for sharing glassmaking secrets and minor fines for fire code violations logically forces the conclusion that the state's primary motivation was protecting its lucrative glass monopoly rather than fire prevention.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately deduces the state's priority from the comparative severity of the penalties.",
            "B": "Too Extreme Trap: Furnaces were not immune to fires.",
            "C": "Out of Scope Trap: Overthrowing diplomatic treaties is never mentioned.",
            "D": "Too Extreme Trap: Fire codes were punished with nominal fines, not 'universally ignored'."
          },
          "keyTakeaway": "When comparative legal evidence reveals stark asymmetry in punishment, the conclusion must identify the state's primary underlying priority."
        },
        "glosses": {
          "nominal": "(adj.) very small; far below the real value or significance • 🇹🇷 Sembolik, çok küçük, önemsiz düzeyde",
          "disparity": "(noun) a noticeable inequality or difference between things • 🇹🇷 Belirgin eşitsizlik, büyük fark",
          "lucrative": "(adj.) generating a high amount of financial profit • 🇹🇷 Çok karlı, yüksek kazanç getiren"
        }
      }
    ],
    "stage4_trapLab": [
      {
        "id": "INF-TRAP-01",
        "stem": "Text: 'Studies show that cats sleep an average of 14 hours per day to conserve energy for predatory sprints.'",
        "wrongChoice": "Therefore, any cat that sleeps only 12 hours will permanently lose the ability to catch mice.",
        "correctTrap": "Too Extreme",
        "options": [
          "Too Extreme",
          "Out of Scope",
          "Opposite",
          "Half Right"
        ],
        "rationale": "Claiming a cat sleeping 12 hours will 'permanently lose the ability' to hunt is an extreme, ungrounded leap not supported by the average sleep statistic."
      },
      {
        "id": "INF-TRAP-02",
        "stem": "Text: 'Excavations in an ancient Celtic settlement revealed Roman amphorae filled with wine residues dating to 50 BCE, long before the Roman military conquest of Gaul.'",
        "wrongChoice": "This proves that Celtic tribes conquered Rome and established trade colonies in central Italy in 50 BCE.",
        "correctTrap": "Opposite",
        "options": [
          "Opposite",
          "Too Extreme",
          "Out of Scope",
          "Half Right"
        ],
        "rationale": "Finding Roman wine in a Celtic village indicates pre-conquest trade from Rome to the Celts, not a Celtic military conquest of Rome (swaps the subject and direction)."
      },
      {
        "id": "INF-TRAP-03",
        "stem": "Text: 'Electric vehicles produce zero tailpipe emissions, but the manufacturing of their lithium-ion batteries generates substantial upfront greenhouse gases.'",
        "wrongChoice": "Therefore, all electric vehicle factories should be converted into petroleum refineries immediately.",
        "correctTrap": "Out of Scope",
        "options": [
          "Out of Scope",
          "Too Extreme",
          "Opposite",
          "Half Right"
        ],
        "rationale": "Converting EV factories into oil refineries is a radical policy proposal fabricated entirely outside the scientific trade-off described in the text."
      },
      {
        "id": "INF-TRAP-04",
        "stem": "Text: 'Bats emit ultrasonic chirps and calculate the time delay of returning echoes to determine an insect's exact distance.'",
        "wrongChoice": "Bats emit high-frequency ultrasonic chirps from their vocal tracts.",
        "correctTrap": "Half Right",
        "options": [
          "Half Right",
          "Opposite",
          "Too Extreme",
          "Out of Scope"
        ],
        "rationale": "This choice merely restates a background premise from sentence 1. It is not an INFERENCE or logical completion of the argument; it is just a repeated detail."
      }
    ],
    "stage5_guidedPractice": [
      {
        "id": "INF-G-01",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Easy",
        "strategyHeuristic": "Physical adaptation (capillary channels directing fog to mouth) -> Logical conclusion (passive harvesting of atmospheric water in arid deserts).",
        "passage": "Desert horned lizards (*Phrynosoma*) inhabit arid regions where open water sources are virtually nonexistent. Researchers observed that during rare morning fogs, moisture condenses on the lizard's specialized keeled scales. Microscopic capillary channels between the scales automatically transport the water droplets across the lizard's skin directly into its mouth, even when the animal is facing uphill against gravity. This anatomical adaptation suggests that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) horned lizards rely on specialized passive skin structures to harvest drinking water from atmospheric moisture in arid environments.",
          "B) horned lizards are incapable of surviving in habitats where rainwater falls frequently.",
          "C) microscopic capillary channels are present in all desert reptilian species worldwide.",
          "D) horned lizards drink water exclusively by submerging their heads in freshwater rivers."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at what the scales do: collect fog moisture and automatically channel it into the lizard's mouth without open water.",
          "Hint 2 (Strategy Reminder): Apply the Must-Be-True Rule: What is the direct functional takeaway of this physical adaptation?",
          "Hint 3 (Partial Solution): Choice B is an ungrounded negative assumption. Choice C has the extreme word 'all reptilian species'. Choice D contradicts the text (open water is nonexistent). Choice A is the direct, logical completion."
        ],
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text details how the lizard's scales condense fog and passively channel water into its mouth, compelling the logical deduction that this anatomical adaptation enables harvesting atmospheric moisture in dry habitats.",
          "choiceBreakdown": {
            "A": "Correct Answer: Formulates the direct, minimal functional conclusion forced by the anatomical description.",
            "B": "Out of Scope Trap: The text does not claim they cannot survive in rainy regions.",
            "C": "Too Extreme Trap: Generalizes capillary scales to 'all desert reptilian species worldwide'.",
            "D": "Opposite Trap: Contradicts the text's opening premise that open water is virtually nonexistent."
          },
          "keyTakeaway": "Anatomical adaptations described in biological texts logically infer a survival mechanism tailored to environmental constraints."
        },
        "glosses": {
          "keeled": "(adj.) having a central ridge like the keel of a boat • 🇹🇷 Omurgalı, çıkıntılı sırt pullarına sahip",
          "capillary": "(adj.) relating to narrow channels drawing liquids by surface tension • 🇹🇷 Kılcal damar etkisiyle sıvıyı çeken dar kanallar",
          "arid": "(adj.) extremely dry; lacking sufficient rainfall • 🇹🇷 Kurak, çorak, yağışsız"
        }
      },
      {
        "id": "INF-G-02",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Contrast the driving energy mechanisms: Earth (solar heating at equator) vs. Jupiter (internal core heat at poles).",
        "passage": "In 1977, the Voyager 1 spacecraft detected lightning discharges in the atmosphere of Jupiter. However, while terrestrial lightning on Earth is most frequent around the equatorial tropics where solar heating drives atmospheric convection, Voyager's optical sensors detected lightning strikes on Jupiter clustered almost exclusively around the polar regions. On Jupiter, sunlight is too weak to drive tropical convection, but internal heat radiating from the planet's core creates strong convective plumes at the poles where solar interference is minimal. It can therefore be inferred that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) the primary thermodynamic engine driving atmospheric convection on Jupiter differs fundamentally from that on Earth.",
          "B) Jupiter's atmosphere is completely devoid of electrical storms during the winter months.",
          "C) lightning strikes on Earth are caused exclusively by geothermal energy released from deep volcanic trenches.",
          "D) the Voyager 1 spacecraft malfunctioned and misidentified harmless auroral glows as lightning strikes."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Compare Earth's engine (solar heating driving equatorial convection) with Jupiter's engine (internal core heat driving polar convection).",
          "Hint 2 (Strategy Reminder): What overarching conclusion bridges the contrast between Earth's solar-driven storms and Jupiter's core-heat-driven storms?",
          "Hint 3 (Partial Solution): Choice A states that the thermodynamic engine driving convection differs fundamentally between the two planets. Choice B is out of scope. Choice C is the opposite of Earth's solar model. Choice D is an unsupported conspiracy."
        ],
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Opposite",
          "D": "Out of Scope"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Terrestrial lightning is driven by external solar heat at the equator, whereas Jovian lightning is driven by internal core heat at the poles, forcing the inference that the primary thermodynamic engines driving convection differ fundamentally.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately bridges the comparative contrast between external solar heating and internal planetary heat.",
            "B": "Out of Scope Trap: Seasonal winter storms are never mentioned.",
            "C": "Opposite Trap: Earth lightning is solar-driven at the equator, not caused by volcanic trenches.",
            "D": "Out of Scope Trap: Spacecraft malfunction is an unfounded speculation."
          },
          "keyTakeaway": "When two planetary phenomena operate via different heat sources, the inference is that their thermodynamic mechanisms differ fundamentally."
        },
        "glosses": {
          "convection": "(noun) the movement in fluids caused by warmer, less dense material rising and cooler material sinking • 🇹🇷 Konveksiyon (sıvı veya gazlarda ısı taşınımı)",
          "thermodynamic": "(adj.) relating to the conversion of heat into other forms of energy • 🇹🇷 Termodinamik (ısı ve enerji fiziği)",
          "auroral": "(adj.) relating to polar atmospheric electrical light displays • 🇹🇷 Kutup ışıklarına (aurora) ait"
        }
      },
      {
        "id": "INF-G-03",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Identical cultural attitudes + stark participation disparity (12% vs 99%) = default administrative policy settings are the decisive factor.",
        "passage": "In behavioral economics, researchers evaluated whether requiring consumers to 'opt out' rather than 'opt in' to organ donation registries increases participation rates. In countries with opt-in systems (such as Germany), where citizens must actively fill out a form to become donors, registration rates linger around 12%. In contrast, in countries with opt-out systems (such as Austria), where citizens are presumed donors unless they register an explicit objection, donation consent rates exceed 99%. Crucially, surveys show that public moral attitudes toward organ donation are virtually identical in both countries. This finding suggests that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) the massive disparity in organ donation rates between these nations is driven by administrative default settings rather than underlying cultural values.",
          "B) citizens in Germany are overwhelmingly hostile toward the medical efficacy of organ transplants.",
          "C) opt-out organ donation policies invariably lead to widespread political uprisings across European democracies.",
          "D) cultural attitudes have zero influence on any human behavioral decision in modern society."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Note the key contrast: Huge registration gap (12% vs 99%), BUT identical moral attitudes.",
          "Hint 2 (Strategy Reminder): If moral attitudes are identical, what is responsible for the 87% difference? Look at the difference in the policy structure (opt-in vs. opt-out default).",
          "Hint 3 (Partial Solution): Choice A identifies 'administrative default settings' rather than 'cultural values' as the driver. Choice B contradicts the survey data. Choice D is far too extreme. Select Choice A."
        ],
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Because moral attitudes toward donation are identical in Germany and Austria, the massive gap in registration (12% vs. 99%) must be attributed to the administrative default rules (opt-in vs. opt-out) rather than cultural values.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately deduces that default administrative settings explain the participation disparity.",
            "B": "Opposite Trap: Survey data proves German attitudes are virtually identical to Austrian attitudes, not hostile.",
            "C": "Too Extreme Trap: Political uprisings are never mentioned.",
            "D": "Too Extreme Trap: 'Zero influence on any human decision' is an unwarranted universal overreach."
          },
          "keyTakeaway": "When cultural variables are identical but behavioral outcomes diverge, the cause must be the structural/administrative difference."
        },
        "glosses": {
          "opt-out": "(noun/adj.) a default system where enrollment is automatic unless an explicit objection is filed • 🇹🇷 Varsayılan olarak dahil edilen (çıkmak için bildirim gereken) sistem",
          "disparity": "(noun) a great and noticeable difference between figures or groups • 🇹🇷 Belirgin eşitsizlik, büyük fark",
          "efficacy": "(noun) the capacity to produce a desired beneficial result • 🇹🇷 Etkililik, beklenen faydayı üretme gücü"
        }
      },
      {
        "id": "INF-G-04",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Fragile canines + Powerful muscular forelimbs = Pin prey first to prevent tooth breakage before delivering a bite.",
        "passage": "To determine the hunting strategies of extinct sabertooth cats (*Smilodon fatalis*), paleontologists analyzed the mechanical bite force and skull anatomy of fossil specimens. Smilodon possessed elongated, blade-like canine teeth that were exceptionally brittle and vulnerable to snapping if subjected to torsional stress from struggling prey. However, Smilodon also possessed robust, muscular forelimbs capable of pinning large herbivores to the ground with immense force. It is therefore reasonable to conclude that Smilodon _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) relied on its powerful forelimbs to immobilize prey before delivering a precise, lethal bite with its fragile canines.",
          "B) consumed exclusively small rodents and insects that posed zero risk of damaging its teeth.",
          "C) used its brittle canines to shatter heavy bison leg bones during high-speed chases.",
          "D) abandoned predatory carnivory entirely in favor of scavenging long-dead carcasses."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Look at the physical dilemma and solution: (1) Canines were fragile/brittle against struggling prey, BUT (2) Forelimbs were heavily muscled for pinning prey.",
          "Hint 2 (Strategy Reminder): How do these two anatomical facts fit together logically into a coordinated hunting strategy?",
          "Hint 3 (Partial Solution): Choice A synthesizes both: pin first with forelimbs, then deliver the bite so the teeth don't break. Choice C contradicts the brittle nature of the canines. Choice A is forced by the text."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text sets up two complementary anatomical traits: because the canines would snap against struggling prey, Smilodon utilized its muscular forelimbs to pin large prey first, eliminating torsional stress before biting.",
          "choiceBreakdown": {
            "A": "Correct Answer: Perfectly integrates the fragile canines with the powerful forelimbs into a logical predatory sequence.",
            "B": "Too Extreme Trap: Forelimbs were adapted for pinning 'large herbivores', not small rodents.",
            "C": "Opposite Trap: Canines were brittle and would snap if used to shatter heavy bones.",
            "D": "Too Extreme Trap: Abandoning carnivory is refuted by the specialized predatory forelimbs."
          },
          "keyTakeaway": "When a predator has a vulnerable weapon paired with a strong stabilizing appendage, the inference is that the appendage secures the prey to protect the weapon."
        },
        "glosses": {
          "torsional": "(adj.) relating to twisting or wrenching forces • 🇹🇷 Burulma/bükülme kuvvetleriyle ilgili",
          "immobilize": "(verb) prevent an animal from moving or struggling • 🇹🇷 Hareketsiz kılmak, etkisiz hale getirmek",
          "carnivory": "(noun) the practice of hunting and consuming animal flesh • 🇹🇷 Etoburluk, avlanarak etle beslenme"
        }
      },
      {
        "id": "INF-G-05",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Hard",
        "strategyHeuristic": "Combine Premise 1 (coral bleaching occurs when water exceeds 30°C) and Premise 2 (symbiotic clade D zooxanthellae tolerate up to 33°C).",
        "passage": "Coral bleaching occurs when rising ocean temperatures induce stony corals to expel their symbiotic dinoflagellate algae (zooxanthellae), depriving the coral polyps of their primary photosynthetic nutrient supply. Most shallow-water Acropora corals host clade C zooxanthellae, which denature and trigger bleaching at temperatures exceeding 30.5°C. However, marine biologists have identified that colonies harboring clade D zooxanthellae maintain normal photosynthetic nutrient production up to 33.0°C. If sea surface temperatures in tropical reef systems consistently fluctuate between 31.0°C and 32.5°C during summer warming anomalies, it can reasonably be inferred that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) coral colonies harboring clade D zooxanthellae will be significantly more resilient against temperature-induced bleaching than those hosting clade C.",
          "B) shallow-water Acropora corals will completely cease all calcification and suffer total colony mortality across tropical reefs.",
          "C) clade C zooxanthellae will rapidly mutate within days to withstand water temperatures exceeding 34.0°C.",
          "D) coral bleaching anomalies will subside entirely as ocean currents distribute heat evenly to polar regions."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): The temperature anomaly is 31.0°C to 32.5°C. Check what happens to clade C (fails at 30.5°C) versus clade D (survives up to 33.0°C).",
          "Hint 2 (Strategy Reminder): A valid inference combines the exact numbers without making unstated catastrophic predictions.",
          "Hint 3 (Partial Solution): Clade D colonies can survive this temperature range, whereas clade C colonies will bleach. Choice A logically captures this differential resilience."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Out of Scope",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text establishes that clade C triggers bleaching above 30.5°C, while clade D maintains photosynthetic function up to 33.0°C. In waters between 31.0°C and 32.5°C, clade D will survive while clade C will bleach, making clade D colonies significantly more resilient.",
          "choiceBreakdown": {
            "A": "Correct Answer: Strictly derives from the comparative temperature thresholds provided in the premises.",
            "B": "Too Extreme Trap: 'Completely cease all calcification and suffer total mortality' ignores that clade D colonies survive up to 33°C.",
            "C": "Out of Scope Trap: Claims rapid mutation within days, which is unsupported by the text.",
            "D": "Opposite Trap: Claims bleaching will subside entirely, which contradicts the premises."
          },
          "keyTakeaway": "Inference questions with comparative numbers require you to apply the given thresholds to the specified scenario."
        },
        "glosses": {
          "dinoflagellate": "(noun) single-celled marine organisms, including photosynthetic coral symbionts • 🇹🇷 Dinoflagellat (tek hücreli deniz yosunu)",
          "denature": "(verb) destroy the characteristic properties of a protein or biological system by heat • 🇹🇷 Denatüre olmak (yapısı bozulmak)",
          "anomalies": "(noun) deviations from what is standard, normal, or expected • 🇹🇷 Anomaliler (olağandışı sapmalar)"
        }
      },
      {
        "id": "INF-G-06",
        "type": "inferences",
        "stage": "guided",
        "difficulty": "Medium",
        "strategyHeuristic": "Combine Premise 1 (low nitrogen restricts leaf growth) + Premise 2 (carnivorous pitcher plants produce nitrogen-rich digestive enzymes only when prey is captured).",
        "passage": "In nutrient-poor peat bogs, low soil nitrogen levels severely restrict the growth rate of native vascular plants. The carnivorous pitcher plant *Sarracenia purpurea* overcomes this limitation by capturing and digesting insects inside water-filled pitfall traps. However, producing the digestive proteases required to dissolve insect exoskeletons demands significant metabolic energy from the plant. In nitrogen-rich experimental greenhouses where soil nutrients are artificially abundant, *Sarracenia purpurea* plants produce significantly smaller carnivorous pitchers and noticeably larger flat photosynthetic leaves, suggesting that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) the plant allocates metabolic resources away from costly carnivorous traps when soil nitrogen is directly accessible.",
          "B) carnivorous plants are incapable of synthesizing chlorophyll when grown in peat bog ecosystems.",
          "C) insect prey in greenhouse environments contains higher concentrations of nitrogen than prey in natural bogs.",
          "D) artificial fertilizers permanently eliminate the pitcher plant's genetic capacity to capture insect prey."
        ],
        "answer": "A",
        "hints": [
          "Hint 1 (Nudge): Compare the plant's behavior in poor soil (produces insect-trapping pitchers) vs rich soil (produces smaller pitchers and larger photosynthetic leaves).",
          "Hint 2 (Strategy Reminder): Producing digestive proteases costs energy. If soil already has nitrogen, why spend energy on traps?",
          "Hint 3 (Partial Solution): Choice A matches the economic trade-off: the plant shifts resources away from costly traps when nitrogen is already available in soil."
        ],
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text notes that producing carnivorous digestive enzymes requires high metabolic energy. When nitrogen is plentiful in the soil, the plant grows smaller traps and larger leaves, logically indicating that it conserves energy by reducing trap investment when soil nitrogen is readily available.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately synthesizes the resource-allocation trade-off between trap production and soil nutrient availability.",
            "B": "Too Extreme Trap: The plant obviously photosynthesizes in bogs; it has photosynthetic leaves.",
            "C": "Out of Scope Trap: The text makes no comparison of insect prey nutrient content.",
            "D": "Too Extreme Trap: Changes in leaf allocation do not mean permanent genetic elimination of carnivory."
          },
          "keyTakeaway": "When an organism scales back a costly adaptation in the presence of an alternative resource, infer a strategic metabolic allocation."
        },
        "glosses": {
          "vascular": "(adj.) relating to plant tissue that conducts water and nutrients • 🇹🇷 Damarlı (iletim demetli bitkiler)",
          "proteases": "(noun) enzymes that break down proteins and peptides • 🇹🇷 Proteazlar (protein parçalayıcı enzimler)",
          "pitfall": "(noun) a trap in which prey falls into a hollow cavity • 🇹🇷 Kapan (tuzak çukuru)"
        }
      }
    ],
    "stage6_independentPractice": [
      {
        "id": "INF-I-01",
        "type": "inferences",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Bleaching is an active biological expulsion triggered by toxic reactive oxygen, not an instantaneous thermal death.",
        "passage": "In marine ecology, coral reefs rely on photosynthetic dinoflagellates (zooxanthellae) living inside their tissues to provide glucose. When water temperatures exceed normal thresholds by as little as 1°C for several weeks, the heat damages the algae's photosynthetic machinery, causing them to produce toxic reactive oxygen species. In response, the coral host expels the algae, leading to 'coral bleaching'. If elevated temperatures persist, the bleached coral inevitably starves to death. This biological sequence indicates that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) coral bleaching is an active biological expulsion triggered by chemical stress rather than an immediate thermal death of the coral animal.",
          "B) dinoflagellates thrive best in boiling ocean water with high reactive oxygen concentrations.",
          "C) bleached corals instantly adapt to consuming deep-sea hydrothermal minerals for survival.",
          "D) all global marine coral species will be completely extinct by the end of the current month."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Out of Scope",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text describes bleaching as the coral host actively expelling algae due to toxic reactive oxygen, resulting in eventual starvation only if heat persists, rather than immediate heat death.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately characterizes bleaching as an active defense response to toxic chemical stress.",
            "B": "Opposite Trap: Dinoflagellates are damaged by 1°C warming, not boiling water.",
            "C": "Out of Scope Trap: Hydrothermal minerals are never mentioned.",
            "D": "Too Extreme Trap: Total global extinction by the end of the month is an absurd exaggeration."
          },
          "keyTakeaway": "In biological sequence questions, distinguish between the immediate cellular response (expelling toxic algae) and the eventual long-term consequence (starvation)."
        },
        "glosses": {
          "dinoflagellates": "(noun) single-celled symbiotic algae living in coral tissue • 🇹🇷 Dinozoflagellatlar (mercanla yaşayan tek hücreli algler)",
          "reactive oxygen species": "(noun) chemically reactive molecules causing cellular toxicity • 🇹🇷 Reaktif oksijen türleri (hücreye zarar veren toksik moleküller)",
          "bleaching": "(noun) the loss of color in corals resulting from expelling symbiotic algae • 🇹🇷 Mercan beyazlaması (algleri dışarı atarak ağarma)"
        }
      },
      {
        "id": "INF-I-02",
        "type": "inferences",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "Precise chronological convergence (150-year drought matching crop failures and site burnings in 1200 BCE) forces the inference of a climate-induced catalyst.",
        "passage": "During the Bronze Age collapse (circa 1200 BCE), several interconnected Mediterranean civilizations—including the Mycenaeans, Hittites, and New Kingdom Egyptians—experienced sudden political disintegration. Historians long debated whether this collapse was triggered by foreign invasions by the enigmatic 'Sea Peoples' or by severe multi-decadal megadroughts. Recent isotopic analysis of stalagmites from regional caves reveals a sharp 150-year reduction in precipitation across the entire eastern Mediterranean beginning precisely around 1200 BCE, coinciding with widespread agricultural crop failures and grain warehouse burnings. This chronological and paleoclimatic convergence suggests that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) climatic desiccation and subsequent food shortages played a central catalyst role in the systemic breakdown of Bronze Age societies.",
          "B) the Sea Peoples built sophisticated underground cave networks to control the region's stalagmite formations.",
          "C) the civilizations of the eastern Mediterranean had zero trade or agricultural connections with one another.",
          "D) the 1200 BCE drought instantly caused all human life across the Mediterranean basin to vanish."
        ],
        "answer": "A",
        "thinkAloud": [
          "Step 1: The debate is Invasions vs. Megadroughts.",
          "Step 2: Stalagmites prove a 150-year drought starting precisely at 1200 BCE, matching crop failures and societal collapse.",
          "Step 3: Conclusion: Climate-driven drought and food shortages were central catalysts."
        ],
        "trapTypes": {
          "B": "Out of Scope",
          "C": "Opposite",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The paleoclimatic stalagmite data directly coincides with the 1200 BCE collapse, logically establishing that severe drought and agricultural failure were primary catalysts in the collapse.",
          "choiceBreakdown": {
            "A": "Correct Answer: Inescapable deduction linking the 150-year drought to societal breakdown.",
            "B": "Out of Scope Trap: Sea Peoples building underground cave networks is an absurd invention.",
            "C": "Opposite Trap: The passage describes them as 'interconnected civilizations'.",
            "D": "Too Extreme Trap: All human life did not vanish instantly."
          },
          "keyTakeaway": "When chronological data matches historical collapse precisely, infer that the environmental factor was a primary catalyst."
        },
        "glosses": {
          "stalagmites": "(noun) mineral formations growing upward from cave floors • 🇹🇷 Dikitler (mağara tabanından yükselen kireç oluşumları)",
          "desiccation": "(noun) the state of extreme dryness or moisture removal • 🇹🇷 Aşırı kuruma, nem kaybı",
          "convergence": "(noun) the coming together of separate lines of evidence • 🇹🇷 Kanıtların ve verilerin aynı noktada birleşmesi"
        }
      },
      {
        "id": "INF-I-03",
        "type": "inferences",
        "stage": "independent",
        "difficulty": "Hard",
        "strategyHeuristic": "The mental effort of retrieving partially faded memories is the exact mechanism that builds long-term synaptic consolidation.",
        "passage": "In cognitive psychology, the 'spacing effect' demonstrates that students retain information significantly longer when study sessions are distributed across days rather than concentrated into a single cramming session. Brain imaging studies show that during spaced repetitions, the neural memory trace must be actively reconstructed by the prefrontal cortex, which strengthens synaptic consolidation. During massed cramming, however, the target information remains continuously active in working memory, preventing the neural retrieval effort required to forge enduring long-term connections. It follows that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) the mental difficulty of retrieving partially faded information is actually an essential mechanism in forming robust long-term memories.",
          "B) cramming the night before an examination causes immediate permanent damage to the prefrontal cortex.",
          "C) spaced study sessions eliminate the need for students to review any academic material ever again.",
          "D) working memory is completely useless for any real-world cognitive problem solving."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Too Extreme",
          "C": "Too Extreme",
          "D": "Too Extreme"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text explains that spaced learning works because the neural memory trace must be actively reconstructed through retrieval effort, logically concluding that the effort of retrieving faded information is essential for long-term memory formation.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately identifies cognitive retrieval effort as the key mechanism of memory consolidation.",
            "B": "Too Extreme Trap: Cramming does not cause permanent prefrontal cortex brain damage.",
            "C": "Too Extreme Trap: Spaced sessions improve retention; they do not eliminate all future studying.",
            "D": "Too Extreme Trap: Working memory is not 'completely useless'."
          },
          "keyTakeaway": "On cognitive neuroscience inferences, look for choices that identify the functional psychological mechanism."
        },
        "glosses": {
          "prefrontal cortex": "(noun) the frontal brain region responsible for complex cognitive planning and active retrieval • 🇹🇷 Prefrontal korteks (ön beyin karar ve hafıza merkezi)",
          "consolidation": "(noun) the biological stabilization of memory traces into long-term storage • 🇹🇷 Hafıza konsolidasyonu (anının kalıcı depoya yazılması)",
          "working memory": "(noun) the temporary workspace for active mental processing • 🇹🇷 Çalışma belleği (kısa süreli aktif zihin alanı)"
        }
      },
      {
        "id": "INF-I-04",
        "type": "inferences",
        "stage": "independent",
        "difficulty": "Medium",
        "strategyHeuristic": "Overlapping brain circuitry in Heschl's gyrus explains why musical training produces cross-domain enhancements in language pitch perception.",
        "passage": "To investigate whether early childhood musical training enhances general linguistic ability, researchers compared phoneme discrimination in 6-year-old children who completed one year of violin instruction versus children who completed an identical duration of painting classes. While both groups scored identically on baseline non-auditory visual puzzle tests, the violin group demonstrated significantly higher accuracy in distinguishing subtle pitch inflections in unfamiliar tonal foreign languages. Because musical pitch processing and linguistic pitch processing share overlapping neural circuits in Heschl's gyrus, the researchers concluded that _______",
        "question": "Which choice most logically completes the text?",
        "choices": [
          "A) instrumental musical training can produce cross-domain auditory enhancements that benefit foreign language phonological perception.",
          "B) painting instruction destroys a child's natural ability to distinguish speech sounds in their native language.",
          "C) children who learn the violin are genetically predisposed to scoring 100% on every standardized academic test.",
          "D) musical training has zero effect on any cognitive faculty outside of playing classical violin sonatas."
        ],
        "answer": "A",
        "trapTypes": {
          "B": "Opposite",
          "C": "Too Extreme",
          "D": "Opposite"
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Violin instruction improved foreign language pitch discrimination due to shared neural circuits in Heschl's gyrus, logically establishing that instrumental training produces cross-domain benefits for linguistic perception.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately concludes that musical training provides cross-domain benefits to linguistic auditory perception.",
            "B": "Opposite / Extreme Trap: Painting did not destroy speech discrimination.",
            "C": "Too Extreme Trap: Scoring 100% on all tests is an absurd exaggeration.",
            "D": "Opposite Trap: The passage proved musical training transferred directly to foreign language pitch perception."
          },
          "keyTakeaway": "Shared neural pathways between two skills infer cross-domain cognitive transfer from one skill to the other."
        },
        "glosses": {
          "phoneme": "(noun) a distinct unit of sound in a specified language • 🇹🇷 Fonem (bir dildeki en küçük anlam ayırt edici ses)",
          "inflections": "(noun) subtle changes in pitch or tone of voice • 🇹🇷 Ses tonu bükümleri ve tonlama değişiklikleri",
          "Heschl's gyrus": "(noun) the primary auditory cortex region in the human brain"
        }
      }
    ],
    "selfAssessmentRubric": {
      "title": "Inferences Self-Audit",
      "prompts": [
        {
          "id": "inf-1",
          "label": "I ensure my selected conclusion requires zero outside speculation and stays strictly within text boundaries."
        },
        {
          "id": "inf-2",
          "label": "I check the final transition word (therefore, consequently, suggesting that) to align the logical direction."
        },
        {
          "id": "inf-3",
          "label": "I pick the minimal necessary step and eliminate dramatic, extreme generalizations."
        }
      ]
    }
  }
};

const GRAMMAR_CONTENT = {
  "GRAM-1": {
    "metadata": {
      "id": "GRAM-1",
      "title": "Boundaries & Run-ons",
      "turkishTitle": "Cümle Sınırları & Noktalama Hataları",
      "domain": "Standard English Conventions"
    },
    "lesson": {
      "title": "Cümle Sınırları, Comma Splices ve FANBOYS Formülü",
      "turkishExplanation": "Digital SAT'de en sık sorulan dilbilgisi kuralı iki tam bağımsız cümlenin (Independent Clause = Özne + Yüklem) nasıl birleştirileceğidir. İki bağımsız cümle asla yalnızca tek bir virgülle (,) birbirine bağlanamaz; buna 'Comma Splice' hatası denir.",
      "formula": "İki Bağımsız Cümle Bağlama Formülleri:\n1) [Cümle 1] . [Cümle 2]\n2) [Cümle 1] ; [Cümle 2]\n3) [Cümle 1] , + FANBOYS (for, and, nor, but, or, yet, so) [Cümle 2]\n4) [Because/Although + Cümle 1] , [Cümle 2]",
      "goldenRules": [
        "İki tam cümle arasına tek başına asla virgül (,) koymayın (Comma Splice Tuzağı).",
        "FANBOYS (and, but, so, yet...) bağlaçlarından önce virgül gelmesi için bağlaçtan SONRA da tam bir özne ve yüklem olması şarttır.",
        "'However', 'therefore', 'moreover' gibi geçiş zarfları iki cümleyi virgülle bağlayamaz; öncesine noktalı virgül (;) veya nokta (.) gerekir."
      ],
      "commonTraps": [
        {
          "name": "The Comma Splice Trap",
          "desc": "İki tam cümlenin arasına sadece virgül koyarak birleştirmek."
        },
        {
          "name": "The Transitional Adverb Illusion",
          "desc": "'However' veya 'therefore' kelimelerini 'and' gibi bağlaç sanıp virgülden sonra kullanmak."
        }
      ]
    },
    "drills": [
      {
        "id": "GRAM-D1-01",
        "passage": "In 1898, Marie Curie discovered the radioactive elements polonium and _______ she received the Nobel Prize in Physics four years later.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) radium, consequently,",
          "B) radium; consequently,",
          "C) radium, and",
          "D) radium, subsequently"
        ],
        "answer": "B",
        "strategyHeuristic": "İki tam bağımsız cümle 'consequently' geçiş zarfıyla bağlanırken noktalı virgül + virgül (; consequently,) gerektirir.",
        "turkishSolverGuide": {
          "step1": "Boşluktan önceki kısma bakın: 'Marie Curie discovered...' (Tam Bağımsız Cümle).",
          "step2": "Boşluktan sonraki kısma bakın: 'she received the Nobel Prize...' (Tam Bağımsız Cümle).",
          "step3": "İki tam cümle 'consequently' ile bağlanacaksa: Noktalı virgül (;) + consequently + virgül (,) formülü zorunludur.",
          "step4": "A ve D şıkları Comma Splice hatasıdır. C şıkkında 'and' sonrası zaman zarfı eksiktir. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'In 1898, Marie Curie discovered...' and 'she received the Nobel Prize...' are two independent clauses. Connecting them with a conjunctive adverb ('consequently') requires a semicolon before the adverb and a comma after it.",
          "choiceBreakdown": {
            "A": "Comma Splice Trap: Using a comma before 'consequently' creates an illegal comma splice between two independent clauses.",
            "B": "Correct Answer: Perfectly pairs the two independent clauses using a semicolon before the transition adverb.",
            "C": "Wrong Structure: While 'and' can connect clauses, it alters the causal consequence emphasized in the sentence.",
            "D": "Comma Splice Trap: 'Subsequently' is an adverb, not a coordinating conjunction; a comma alone is grammatically invalid."
          },
          "keyTakeaway": "Two complete independent clauses separated by conjunctive adverbs (however, therefore, consequently) require a semicolon before and a comma after."
        }
      },
      {
        "id": "GRAM-D1-02",
        "passage": "Although atmospheric methane concentrations are significantly lower than carbon dioxide _______ methane traps substantially more infrared radiation per molecule over a twenty-year period.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) levels, but",
          "B) levels, yet",
          "C) levels,",
          "D) levels; however,"
        ],
        "answer": "C",
        "strategyHeuristic": "Cümle başında 'Although' gibi bir yan cümle bağlacı (subordinator) varken, ana cümlenin başına 'but' veya 'yet' konulamaz (Çift Bağlaç Tuzağı).",
        "turkishSolverGuide": {
          "step1": "Cümlenin en başına bakın: 'Although' (Bağımlı Yan Cümle Başlatıcısı).",
          "step2": "Kural: Yan cümle bittiğinde sadece tek bir virgül konur ve ana cümle başlar: [Although X] , [Y].",
          "step3": "A ve B şıklarında 'Although' varken 'but/yet' eklenmiş (Çift bağlaç hatası).",
          "step4": "D şıkkında noktalı virgül kullanılmış (Yan cümle ana cümleden noktalı virgülle ayrılamaz). Doğru cevap C."
        },
        "explanation": {
          "correctBridge": "Choice C is correct. The sentence begins with the subordinating conjunction 'Although', creating a dependent clause ('Although atmospheric methane concentrations are significantly lower than carbon dioxide levels'). A dependent clause must be followed simply by a comma before the main independent clause.",
          "choiceBreakdown": {
            "A": "Double Conjunction Trap: Using 'Although' and 'but' in the same sentence creates a grammatical conflict.",
            "B": "Double Conjunction Trap: Using 'Although' with 'yet' is redundant and ungrammatical.",
            "C": "Correct Answer: Correctly uses a single comma to separate the introductory dependent clause from the main clause.",
            "D": "Punctuation Error: Semicolons cannot separate a dependent clause from an independent clause."
          },
          "keyTakeaway": "When a sentence starts with 'Although/Because/While', use only a comma between the dependent clause and the independent clause."
        }
      },
      {
        "id": "GRAM-D1-03",
        "passage": "The architectural restoration team repaired the historic church's crumbling sandstone _______ reinforced the supporting iron arches in the bell tower.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) facade, and",
          "B) facade and",
          "C) facade; and",
          "D) facade, they"
        ],
        "answer": "B",
        "strategyHeuristic": "Tek bir özneye (team) bağlı iki yüklem (repaired + reinforced) arasına virgül konmaz (Compound Predicate).",
        "turkishSolverGuide": {
          "step1": "Özneyi bulun: 'The architectural restoration team'.",
          "step2": "Yüklemleri bulun: 1. Yüklem = 'repaired...', 2. Yüklem = 'reinforced...'.",
          "step3": "Kural: Aynı öznenin yaptığı iki eylem 'and' ile bağlanırken araya virgül konmaz (Özne + Fiil1 AND Fiil2).",
          "step4": "A şıkkında gereksiz virgül var. D şıkkında Comma Splice var. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The sentence has a single subject ('The architectural restoration team') performing two actions in a compound predicate ('repaired...' and 'reinforced...'). No comma is used before 'and' when joining two verbs with the same subject.",
          "choiceBreakdown": {
            "A": "Unnecessary Comma Trap: A comma is not used before 'and' in a simple compound predicate without a second subject.",
            "B": "Correct Answer: Correctly joins two parallel verbs ('repaired' and 'reinforced') without unnecessary punctuation.",
            "C": "Punctuation Error: Semicolons cannot precede 'and' to join compound verbs.",
            "D": "Comma Splice Trap: Creates two independent clauses separated only by a comma without a conjunction."
          },
          "keyTakeaway": "Do not place a comma before 'and' unless it is followed by a full subject and verb, or separates three or more list items."
        }
      },
      {
        "id": "GRAM-D1-04",
        "passage": "During the 1920s Harlem Renaissance, poet Langston Hughes sought to celebrate Black working-class _______ his lyrical verses incorporated the syncopated rhythms and call-and-response patterns of African American blues music.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) life, and",
          "B) life,",
          "C) life;",
          "D) life"
        ],
        "answer": "C",
        "strategyHeuristic": "İki tam bağımsız cümle noktalı virgül (;) ile doğrudan ve en temiz şekilde birleştirilir.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: 'Langston Hughes sought to celebrate Black working-class life' (Tam Cümle).",
          "step2": "2. Cümle: 'his lyrical verses incorporated...' (Tam Cümle).",
          "step3": "İki bağımsız cümleyi bağlamak için: Noktalı virgül (;) kullanılır.",
          "step4": "B şıkkı Comma Splice'tır. D şıkkı Fused Sentence (noktalamasız run-on) hatasıdır. Doğru cevap C."
        },
        "explanation": {
          "correctBridge": "Choice C is correct. Both clauses are independent. A semicolon is the standard and correct punctuation mark to separate two related independent clauses without a coordinating conjunction.",
          "choiceBreakdown": {
            "A": "Coordination Error: 'and' is possible with a comma, but here the relationship is an explanatory semicolon.",
            "B": "Comma Splice Trap: Separating two independent clauses with only a comma is grammatically incorrect.",
            "C": "Correct Answer: Correctly connects two independent clauses using a semicolon.",
            "D": "Fused Sentence Trap: Joining two independent clauses with no punctuation is a run-on error."
          },
          "keyTakeaway": "A semicolon (;) functions exactly like a period to separate two independent clauses."
        }
      },
      {
        "id": "GRAM-D1-05",
        "passage": "Paleontologist Mary Anning unearthed some of the most significant marine fossil specimens of the Jurassic _______ her pioneering discoveries transformed early scientific understanding of prehistoric life on Earth.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) period, and",
          "B) period,",
          "C) period",
          "D) period; and"
        ],
        "answer": "A",
        "strategyHeuristic": "İki tam bağımsız cümle virgül + FANBOYS bağlacı (period, and) ile bağlanır.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: 'Paleontologist Mary Anning unearthed... Jurassic period' (Tam Bağımsız Cümle).",
          "step2": "2. Cümle: 'her pioneering discoveries transformed...' (Tam Bağımsız Cümle).",
          "step3": "İki bağımsız cümleyi bağlamak için: Virgül (,) + and (FANBOYS) kullanılır.",
          "step4": "B şıkkı Comma Splice hatasıdır. C şıkkı Run-on hatasıdır. D şıkkında noktalı virgül ile 'and' birlikte kullanılamaz. Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Both clauses are independent. Standard English conventions require a coordinating conjunction preceded by a comma (', and') to link two independent clauses.",
          "choiceBreakdown": {
            "A": "Correct Answer: Correctly links two independent clauses with a comma and the coordinating conjunction 'and'.",
            "B": "Comma Splice Trap: Connects two independent clauses with only a comma, violating boundary rules.",
            "C": "Fused Sentence Trap: Fails to include any punctuation between two independent clauses.",
            "D": "Punctuation Redundancy: Semicolons should not precede 'and' when joining basic clauses."
          },
          "keyTakeaway": "Two independent clauses can be joined by a comma plus a FANBOYS conjunction (for, and, nor, but, or, yet, so)."
        }
      },
      {
        "id": "GRAM-D1-06",
        "passage": "The electric grid in many metropolitan regions faces severe strain during summer heat _______ energy providers are increasingly investing in distributed rooftop solar arrays to reduce peak demand.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) waves, consequently,",
          "B) waves; consequently,",
          "C) waves consequently,",
          "D) waves, consequently;"
        ],
        "answer": "B",
        "strategyHeuristic": "Conjunctive adverb (consequently, therefore) iki bağımsız cümleyi bağlarken noktalı virgül ve virgül (;) ... (,) formülü ister.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: 'The electric grid... faces severe strain during summer heat waves' (Tam Cümle).",
          "step2": "2. Cümle: 'energy providers are increasingly investing...' (Tam Cümle).",
          "step3": "Consequently bir geçiş zarfıdır (conjunctive adverb). İki cümleyi bağlarken [; consequently, ] formülü zorunludur.",
          "step4": "A şıkkı Comma Splice'tır. C şıkkı Run-on'dır. D şıkkında noktalama ters yerleştirilmiştir. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. When a conjunctive adverb like 'consequently' connects two independent clauses, it must be preceded by a semicolon and followed by a comma.",
          "choiceBreakdown": {
            "A": "Comma Splice Trap: A conjunctive adverb cannot connect two independent clauses with just a comma.",
            "B": "Correct Answer: Follows the mandatory pattern [Independent Clause] ; consequently , [Independent Clause].",
            "C": "Fused Sentence Trap: Missing the required preceding semicolon.",
            "D": "Punctuation Inversion: Reverses the positions of the semicolon and comma."
          },
          "keyTakeaway": "Whenever you see 'consequently', 'however', or 'therefore' joining two complete sentences, look for '; [word], '."
        }
      }
    ]
  },
  "GRAM-2": {
    "metadata": {
      "id": "GRAM-2",
      "title": "Semicolons, Colons & Dashes",
      "turkishTitle": "Noktalı Virgül, İki Nokta & Tire Kuralları",
      "domain": "Standard English Conventions"
    },
    "lesson": {
      "title": "İki Nokta (:), Noktalı Virgül (;) ve Çift Tire (—) Kuralları",
      "turkishExplanation": "SAT'de iki nokta (:) kuralı çok kesindir: İki noktadan önceki kısım MUTLAKA tam bir bağımsız cümle (Independent Clause) olmalıdır. İki noktadan sonra ise bir açıklama, liste, tanım veya tek bir kelime gelebilir. Çift tire (— ... —) ise cümle arasına giren ek açıklamaları (non-essential information) parantez gibi ayırmak için kullanılır.",
      "formula": "İki Nokta Kuralı: [Tam Bağımsız Cümle] : [Açıklama / Liste / Sonuç]\nÇift Tire Kuralı: [Özne] — [Ekstra Açıklama] — [Yüklem]",
      "goldenRules": [
        "İki noktadan (:) önce gelen kısım tek başına nokta konduğunda geçerli bir cümle olmalıdır.",
        "Cümle başında açılan bir tire (—) mutlaka ikinci bir tire (—) ile kapatılmalıdır (Virgülle kapatılamaz).",
        "Noktalı virgül (;) solunda ve sağında tam bir bağımsız cümle ister."
      ],
      "commonTraps": [
        {
          "name": "The Fragment Colon Trap",
          "desc": "İki noktadan önce yarım cümle (örn. 'Such as:', 'Including:') kullanmak."
        },
        {
          "name": "The Mismatched Punctuation Trap",
          "desc": "Açıklamayı tireyle (—) başlatıp virgülle (,) bitirmek."
        }
      ]
    },
    "drills": [
      {
        "id": "GRAM-D2-01",
        "passage": "Deep-sea anglerfish utilize a specialized bioluminescent lure known as the esca to attract prey in total _______ the glowing organ contains millions of symbiotic photobacteria.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) darkness:",
          "B) darkness, which",
          "C) darkness; because",
          "D) darkness, so"
        ],
        "answer": "A",
        "strategyHeuristic": "İki noktadan (:) önce tam cümle vardır; iki noktadan sonraki kısım esca organının nasıl parladığını açıklayan bir cümledir.",
        "turkishSolverGuide": {
          "step1": "Sol tarafa bakın: 'Deep-sea anglerfish utilize a specialized lure...' (Tam Cümle).",
          "step2": "Sağ tarafa bakın: 'the glowing organ contains millions of photobacteria' (Esca'nın nasıl ışık saçtığını açıklayan cümle).",
          "step3": "Kural: Tam cümleden sonra gelen açıklayıcı cümle iki nokta (:) ile bağlanabilir.",
          "step4": "C şıkkında noktalı virgül + because hatalıdır. Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The clause preceding the punctuation is an independent clause, and the clause following it explains the physiological mechanism of the glowing lure. A colon is standard to introduce an explanation or elaboration.",
          "choiceBreakdown": {
            "A": "Correct Answer: Correctly uses a colon to introduce an explanation following an independent clause.",
            "B": "Fragment Trap: 'which the glowing organ contains' creates a garbled relative clause.",
            "C": "Punctuation Error: Semicolons cannot precede subordinating conjunctions like 'because'.",
            "D": "Faulty Logic: 'so' implies a result rather than an explanation."
          },
          "keyTakeaway": "A colon (:) can separate two independent clauses when the second clause explains or illustrates the first."
        }
      },
      {
        "id": "GRAM-D2-02",
        "passage": "Biochemist Jennifer Doudna and her colleagues developed _______ a revolutionary gene-editing technology that allows scientists to alter DNA sequences with unprecedented precision.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) CRISPR-Cas9 technology—",
          "B) CRISPR-Cas9—",
          "C) CRISPR-Cas9,",
          "D) CRISPR-Cas9:"
        ],
        "answer": "C",
        "strategyHeuristic": "Cümlenin sonundaki isim tamlamasını açıklayan appositive yapısı için virgül (,) en sade ve doğru noktalama işaretidir.",
        "turkishSolverGuide": {
          "step1": "Ana cümle: 'Jennifer Doudna developed CRISPR-Cas9' (Tamamlandı).",
          "step2": "Sonraki kısım: 'a revolutionary gene-editing technology...' (CRISPR-Cas9'u açıklayan bir sıfat/isim grubu - appositive).",
          "step3": "Kural: Cümle sonundaki tekil bir appositive virgülle ayrılır.",
          "step4": "Doğru cevap C."
        },
        "explanation": {
          "correctBridge": "Choice C is correct. The phrase 'a revolutionary gene-editing technology...' is an appositive noun phrase renaming CRISPR-Cas9. A single comma correctly sets off this descriptive element at the end of the sentence.",
          "choiceBreakdown": {
            "A": "Redundant: Inserts an extra word 'technology' before the dash.",
            "B": "Stylistic Dash: While a dash can set off an appositive, standard comma punctuation in Choice C is the precise and correct convention.",
            "C": "Correct Answer: Accurately sets off the concluding appositive phrase with a comma.",
            "D": "Colon vs Comma: A colon is acceptable for emphasis, but standard comma appositive is the direct grammatical form."
          },
          "keyTakeaway": "Appositives that rename a preceding noun at the end of a sentence are set off by a comma."
        }
      },
      {
        "id": "GRAM-D2-03",
        "passage": "The observatory's high-altitude location in the Atacama Desert _______ makes it an ideal site for deep-space infrared astronomy.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) —offering exceptional atmospheric clarity, minimal cloud cover, and zero light pollution—",
          "B) , offering exceptional atmospheric clarity, minimal cloud cover, and zero light pollution—",
          "C) —offering exceptional atmospheric clarity, minimal cloud cover, and zero light pollution,",
          "D) ; offering exceptional atmospheric clarity, minimal cloud cover, and zero light pollution;"
        ],
        "answer": "A",
        "strategyHeuristic": "Cümle içine giren açıklama tire ile açılmışsa mutlaka tire ile kapatılmalıdır (Punctuation Symmetry).",
        "turkishSolverGuide": {
          "step1": "Ana özne: 'The observatory's high-altitude location in the Atacama Desert'.",
          "step2": "Ana yüklem: 'makes it an ideal site...'.",
          "step3": "Araya giren 3 maddelik açıklama parantez gibi iki tire arasına (— ... —) alınmalıdır.",
          "step4": "B ve C şıklarında işaretler uyumsuzdur (virgül-tire veya tire-virgül). Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The descriptive element ('offering exceptional atmospheric clarity...') interrupts the main clause between subject ('location') and verb ('makes'). Non-essential parenthetical elements enclosed by dashes must be symmetrical: opening with a dash and closing with a dash.",
          "choiceBreakdown": {
            "A": "Correct Answer: Symmetrically encloses the non-essential parenthetical phrase with matching dashes.",
            "B": "Mismatched Punctuation: Opens with a comma and closes with a dash.",
            "C": "Mismatched Punctuation: Opens with a dash and closes with a comma.",
            "D": "Punctuation Error: Semicolons cannot enclose a participial modifying phrase."
          },
          "keyTakeaway": "Parenthetical dashes must always occur in matching pairs (— ... —) unless the phrase ends the sentence."
        }
      },
      {
        "id": "GRAM-D2-04",
        "passage": "Archaeologists excavating the Pompeii villa discovered three intact storage _______ amphorae filled with preserved olive oil, glass perfume flasks, and bronze cooking vessels.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) vessels:",
          "B) items:",
          "C) categories;",
          "D) containers,"
        ],
        "answer": "B",
        "strategyHeuristic": "İki nokta (:) bir listeden önce gelir; listede kaç madde varsa önceki isimle (three intact storage items) birebir uyuşmalıdır.",
        "turkishSolverGuide": {
          "step1": "Listelenen maddeleri sayın: 1) amphorae, 2) glass flasks, 3) bronze vessels (Toplam 3 madde).",
          "step2": "İki noktadan önce: 'discovered three intact storage items' (Tam Cümle).",
          "step3": "Kural: Liste başlatmak için iki nokta (:) kullanılır.",
          "step4": "Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'Archaeologists excavating the Pompeii villa discovered three intact storage items' is an independent clause that introduces a list of three specific artifacts. A colon correctly introduces this list.",
          "choiceBreakdown": {
            "A": "Repetition: 'vessels' repeats the third listed item, creating circular phrasing.",
            "B": "Correct Answer: Perfectly frames the independent clause and introduces the 3-item list with a colon.",
            "C": "Punctuation Error: A semicolon cannot introduce a list of items.",
            "D": "Punctuation Error: A comma alone before a list creates a run-on structure."
          },
          "keyTakeaway": "Use a colon (:) after an independent clause to introduce a specific list or catalog of items."
        }
      },
      {
        "id": "GRAM-D2-05",
        "passage": "The marine sanctuary encompasses a diverse variety of benthic _______ towering kelp forests, rocky coral outcroppings, and submerged volcanic pinnacles.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) habitats:",
          "B) habitats,",
          "C) habitats;",
          "D) habitats"
        ],
        "answer": "A",
        "strategyHeuristic": "Tam bir bağımsız cümleden sonra gelen 3 maddelik listeyi başlatmak için iki nokta (:) kullanılır.",
        "turkishSolverGuide": {
          "step1": "İki noktadan önceki kısım: 'The marine sanctuary encompasses a diverse variety of benthic habitats' (Tam Bağımsız Cümle).",
          "step2": "Sonraki kısım bir liste: 1) kelp forests, 2) coral outcroppings, 3) volcanic pinnacles.",
          "step3": "Kural: Bağımsız cümleden sonra liste sunulurken iki nokta (:) kullanılır.",
          "step4": "B virgül hatasıdır, C noktalı virgül listeyi başlatamaz. Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The preceding clause is an independent clause, and the subsequent phrase lists specific examples of benthic habitats. A colon correctly introduces this list.",
          "choiceBreakdown": {
            "A": "Correct Answer: Correctly introduces the illustrative list following a complete independent clause.",
            "B": "Punctuation Error: A comma alone is insufficient to set off an appositive list after a direct object.",
            "C": "Punctuation Error: Semicolons cannot introduce an explanatory list.",
            "D": "Run-on Error: Omits required punctuation between the clause and the list."
          },
          "keyTakeaway": "Colons (:) must be preceded by a complete independent clause when introducing an explanatory list."
        }
      },
      {
        "id": "GRAM-D2-06",
        "passage": "Architect Maya Lin gained national prominence with her controversial design for the Vietnam Veterans _______ an understated chevron of reflective black granite etched with names of fallen soldiers.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) Memorial—",
          "B) Memorial;",
          "C) Memorial,",
          "D) Memorial"
        ],
        "answer": "A",
        "strategyHeuristic": "Cümle sonunda vurgulu veya açıklayıcı bir appositive eklerken tek bir uzun tire (—) kullanılır.",
        "turkishSolverGuide": {
          "step1": "Ana cümle: 'Architect Maya Lin gained national prominence with her controversial design for the Vietnam Veterans Memorial' (Tam Cümle).",
          "step2": "Sonraki kısım: 'an understated chevron...' (Anıtın nasıl bir yapı olduğunu niteleyen appositive açıklama).",
          "step3": "Cümle sonundaki çarpıcı, açıklayıcı ifadeleri vurgulamak için tek tire (—) kullanılır.",
          "step4": "B şıkkında noktalı virgül sonrası tam cümle yoktur. Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. An em dash can be used at the end of an independent clause to set off an emphatic, descriptive appositive phrase ('an understated chevron...').",
          "choiceBreakdown": {
            "A": "Correct Answer: Uses an em dash to cleanly set off the descriptive appositive at the end of the sentence.",
            "B": "Punctuation Error: Semicolons must be followed by an independent clause, not a noun phrase.",
            "C": "Weak Punctuation: While commas can set off appositives, the dash is standard for emphatic descriptive expansions.",
            "D": "Fused Error: Leaves no boundary punctuation between the proper noun and its appositive."
          },
          "keyTakeaway": "A single em dash (—) functions like a colon or emphatic comma to set off an appositive noun phrase at the end of a sentence."
        }
      }
    ]
  },
  "GRAM-3": {
    "metadata": {
      "id": "GRAM-3",
      "title": "Subject-Verb & Pronoun Agreement",
      "turkishTitle": "Özne-Yüklem & Zamir Uyumu",
      "domain": "Standard English Conventions"
    },
    "lesson": {
      "title": "Özne-Yüklem Uyumu & Prepositional Phrase Eleme Formülü",
      "turkishExplanation": "SAT'de özne ile yüklem arasına kafa karıştırmak için uzun edat öbekleri (Prepositional Phrases: of, in, with, by, for...) veya sıfat cümlecikleri yerleştirilir. Asıl özneyi bulmak için virgülden virgüle olan kısımları ve 'of...' ile başlayan edat gruplarını paranteze alıp silin!",
      "formula": "Formül: [Asıl Tekil Özne] + (of the ancient cities in Mesopotamia) + [TEKİL FİİL (is / has / reveals)]",
      "goldenRules": [
        "Özne tekilse (Singular) fiil '-s' takısı alır (e.g., The discovery... reveals).",
        "Özne çoğulsa (Plural) fiil yalın kalır (e.g., The discoveries... reveal).",
        "'Neither of', 'Each of', 'One of' gibi yapılar her zaman TEKİL fiil gerektirir."
      ],
      "commonTraps": [
        {
          "name": "The Nearby Noun Trap",
          "desc": "Fiilden hemen önce gelen çoğul kelimeyi özne sanıp çoğul fiil seçmek."
        },
        {
          "name": "The Pronoun Ambiguity Trap",
          "desc": "'They' veya 'it' zamirinin hangi ismin yerine geçtiğinin belirsiz olması."
        }
      ]
    },
    "drills": [
      {
        "id": "GRAM-D3-01",
        "passage": "The intricate network of subterranean fungal filaments connecting mature birch trees to shaded saplings _______ essential phosphorus and nitrogen compounds across species boundaries.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) transfer",
          "B) transfers",
          "C) are transferring",
          "D) have transferred"
        ],
        "answer": "B",
        "strategyHeuristic": "Asıl özne 'The intricate network' (Tekil) olduğu için edat öbeklerini (of filaments connecting trees) eleyin; fiil tekil '-s' takısı (transfers) almalıdır.",
        "turkishSolverGuide": {
          "step1": "Özneyi bulun: 'The intricate network' (Tekil İsim).",
          "step2": "Araya giren edat grubunu eleyin: '(of subterranean fungal filaments connecting mature birch trees to shaded saplings)'.",
          "step3": "Cümleyi sadeleştirin: 'The network [BLANK] compounds.'",
          "step4": "Network tekil olduğu için fiil 'transfers' olmalıdır. A, C ve D çoğuldur. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The head noun of the subject is 'The intricate network' (singular). The prepositional phrases 'of subterranean fungal filaments connecting mature birch trees...' are modifiers that do not affect subject-verb agreement. The singular subject requires the singular verb 'transfers'.",
          "choiceBreakdown": {
            "A": "Plural Verb Trap: 'transfer' is plural, agreeing erroneously with 'trees' or 'filaments'.",
            "B": "Correct Answer: Correctly pairs the singular subject 'network' with the singular verb 'transfers'.",
            "C": "Plural Verb Trap: 'are transferring' is plural.",
            "D": "Plural Verb Trap: 'have transferred' is plural."
          },
          "keyTakeaway": "Ignore all prepositional phrases between the subject and the verb to identify the true singular or plural head noun."
        }
      },
      {
        "id": "GRAM-D3-02",
        "passage": "Neither of the two archaeological excavation teams _______ able to unearth definitive evidence of Bronze Age metallurgy in the western trench.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) were",
          "B) was",
          "C) have been",
          "D) are"
        ],
        "answer": "B",
        "strategyHeuristic": "'Neither of the [plural noun]' yapısı İngilizcede her zaman TEKİL fiil (was / is) gerektirir.",
        "turkishSolverGuide": {
          "step1": "Özneye bakın: 'Neither of the two teams'.",
          "step2": "Kural: 'Neither', 'Either', 'Each', 'Every one' yapıları daima TEKİL fiil alır.",
          "step3": "'teams' çoğul görünse de 'Neither' tektir: 'Neither was able'.",
          "step4": "A, C ve D çoğuldur. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. In formal Standard English, indefinite pronouns such as 'neither', 'either', and 'each' are grammatically singular when followed by an 'of' phrase. The singular subject 'Neither' requires the singular past verb 'was'.",
          "choiceBreakdown": {
            "A": "Plural Verb Trap: 'were' incorrectly agrees with the plural object 'teams'.",
            "B": "Correct Answer: Correctly uses the singular verb 'was' with the singular subject 'Neither'.",
            "C": "Plural Verb Trap: 'have been' is plural.",
            "D": "Plural Verb Trap: 'are' is plural."
          },
          "keyTakeaway": "'Neither of...', 'Either of...', and 'Each of...' always take singular verbs on the Digital SAT."
        }
      },
      {
        "id": "GRAM-D3-03",
        "passage": "A swarm of desert locusts (*Schistocerca gregaria*), when triggered by serotonin surges, _______ its solitary green coloration for a gregarious yellow-and-black pattern.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) abandon",
          "B) abandons",
          "C) have abandoned",
          "D) are abandoning"
        ],
        "answer": "B",
        "strategyHeuristic": "'A swarm' topluluk ismi (collective noun) olup tekildir; 'locusts' çoğuluna kanmayın.",
        "turkishSolverGuide": {
          "step1": "Özne: 'A swarm' (Bir sürü - Tekil Topluluk İsmi).",
          "step2": "Araya giren parantez içi kısmı atın: '(when triggered by serotonin surges)'.",
          "step3": "'A swarm [BLANK] its coloration.'",
          "step4": "Tekil fiil: 'abandons'. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. 'A swarm' is a collective noun treated as singular. The parenthetical modifier 'when triggered by serotonin surges' does not alter agreement. The singular subject requires the singular verb 'abandons'.",
          "choiceBreakdown": {
            "A": "Plural Verb Trap: 'abandon' is plural, agreeing with 'locusts'.",
            "B": "Correct Answer: Correctly matches the singular collective noun 'swarm' with 'abandons'.",
            "C": "Plural Verb Trap: 'have abandoned' is plural.",
            "D": "Plural Verb Trap: 'are abandoning' is plural."
          },
          "keyTakeaway": "Collective nouns (a swarm, a flock, a herd, a committee, a team) take singular verbs when acting as a single unit."
        }
      },
      {
        "id": "GRAM-D3-04",
        "passage": "The rapid fluctuations in atmospheric pressure and temperature _______ responsible for generating severe convective thunderstorms along the mountain ridge.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) was",
          "B) is",
          "C) were",
          "D) has been"
        ],
        "answer": "C",
        "strategyHeuristic": "Özne 'The rapid fluctuations' (Çoğul İsim) olduğu için çoğul fiil (were) seçilmelidir.",
        "turkishSolverGuide": {
          "step1": "Özneyi bulun: 'The rapid fluctuations' (Çoğul isim - dalgalanmalar).",
          "step2": "Edat grubunu atın: '(in atmospheric pressure and temperature)'.",
          "step3": "'Fluctuations [BLANK] responsible.'",
          "step4": "Çoğul fiil: 'were'. A, B ve D tekildir. Doğru cevap C."
        },
        "explanation": {
          "correctBridge": "Choice C is correct. The head subject noun is 'fluctuations' (plural). It requires the plural past tense verb 'were'.",
          "choiceBreakdown": {
            "A": "Singular Verb Trap: 'was' is singular.",
            "B": "Singular Verb Trap: 'is' is singular.",
            "C": "Correct Answer: Correctly pairs the plural subject 'fluctuations' with 'were'.",
            "D": "Singular Verb Trap: 'has been' is singular."
          },
          "keyTakeaway": "Match plural head nouns with plural verbs (were, are, have), ignoring singular objects inside prepositional phrases."
        }
      },
      {
        "id": "GRAM-D3-05",
        "passage": "Neither the lead archaeologist nor the museum curators _______ able to definitively establish the provenance of the limestone cylinder seal.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) were",
          "B) was",
          "C) is",
          "D) has been"
        ],
        "answer": "A",
        "strategyHeuristic": "Neither... nor yapısında fiil kendisine en yakın olan özneye (museum curators - çoğul) göre çekimlenir (Proximity Rule).",
        "turkishSolverGuide": {
          "step1": "Neither / Nor kalıbına bakın: 'Neither [tekil] nor [çoğul]'.",
          "step2": "Kural (Proximity Rule): 'Nor' bağlacından hemen sonraki özneye bakılır: 'the museum curators' (Çoğul).",
          "step3": "Çoğul özne çoğul fiil gerektirir: 'were able'.",
          "step4": "B, C ve D tekildir. Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. With correlative conjunctions like 'neither... nor', the verb must agree in number with the nearer subject ('the museum curators', plural). The plural past-tense verb 'were' is correct.",
          "choiceBreakdown": {
            "A": "Correct Answer: Correctly agrees with the plural nearer subject 'curators'.",
            "B": "Singular Verb Trap: 'was' agrees with the further subject 'archaeologist', violating the proximity rule.",
            "C": "Singular Verb Trap: 'is' is singular and clashes with the past-tense timeline.",
            "D": "Singular Verb Trap: 'has been' is singular."
          },
          "keyTakeaway": "In 'neither... nor' and 'either... or' constructions, the verb agrees with the subject closest to it."
        }
      },
      {
        "id": "GRAM-D3-06",
        "passage": "Beneath the dense canopy of the Amazon basin _______ thousands of previously undocumented earthwork structures built by pre-Columbian societies.",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) lies",
          "B) lie",
          "C) is lying",
          "D) was lying"
        ],
        "answer": "B",
        "strategyHeuristic": "Devrik cümlelerde (Inverted Sentences) özne fiilden sonra gelir: 'thousands of earthwork structures' (çoğul) -> 'lie'.",
        "turkishSolverGuide": {
          "step1": "Cümle yer bildiren edat öbeğiyle başlıyor: 'Beneath the dense canopy...' (Devrik Cümle).",
          "step2": "Fiilden sonraki özneyi bulun: 'thousands of previously undocumented earthwork structures' (Çoğul).",
          "step3": "Çoğul özne çoğul fiil alır: 'lie' (tekil olsa 'lies' olurdu).",
          "step4": "A, C, D tekildir. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. In this inverted sentence, the prepositional phrase precedes the verb, and the plural subject ('thousands of... structures') follows it. The plural verb 'lie' is required.",
          "choiceBreakdown": {
            "A": "Singular Verb Trap: 'lies' is singular, erroneously agreeing with 'canopy' or 'basin'.",
            "B": "Correct Answer: Correctly pairs the plural subject 'thousands of structures' with the plural verb 'lie'.",
            "C": "Singular Verb Trap: 'is lying' is singular.",
            "D": "Singular Verb Trap: 'was lying' is singular."
          },
          "keyTakeaway": "When a sentence starts with a prepositional phrase of location ('Beneath the tree...'), the true subject is located AFTER the verb."
        }
      }
    ]
  },
  "GRAM-4": {
    "metadata": {
      "id": "GRAM-4",
      "title": "Modifiers & Dangling Participles",
      "turkishTitle": "Sıfat/Zarf Tümceleri & Düşük Cümleler",
      "domain": "Standard English Conventions"
    },
    "lesson": {
      "title": "Düşük Cümleler (Dangling Modifiers) ve Özne Eşleme Formülü",
      "turkishExplanation": "Cümle '-ing' veya '-ed' ile başlayan bir sıfat eylemiyle (participial phrase) başlıyorsa, virgülden HEMEN SONRA gelen kelime o eylemi bizzat yapan kişi veya varlık (mantıksal özne) olmak zorundadır!",
      "formula": "Formül: [Having examined the telescope], [Galileo] (eylemi yapan kişi) + [observed the moons of Jupiter].\n❌ YANLIŞ: [Having examined the telescope], [the moons of Jupiter were observed by Galileo]. (Teleskobu inceleyen Jüpiter'in uyduları olamaz!)",
      "goldenRules": [
        "Giriş tümcesindeki eylemi kim yapıyorsa, virgülden hemen sonra ilk kelime olarak O gelmelidir.",
        "Pasif cümle tuzaklarına dikkat edin (Eylemi yapan kişi virgülden sonra 'by...' ile arkaya atılamaz).",
        "Sıfatlar niteledikleri ismin hemen yanında durmalıdır."
      ],
      "commonTraps": [
        {
          "name": "The Dangling Subject Trap",
          "desc": "Virgülden sonra eylemi yapan kişi yerine nesneyi veya soyut bir kavramı koymak."
        },
        {
          "name": "The Passive Voice Dislocation",
          "desc": "Eylemi yapan kişiyi pasif yaparak cümlenin sonuna itmek."
        }
      ]
    },
    "drills": [
      {
        "id": "GRAM-D4-01",
        "passage": "Having analyzed hundreds of ancient pottery shards under an electron microscope, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) the chemical composition of the ceramic glaze was finally identified by the archaeologist.",
          "B) the archaeologist was finally able to identify the chemical composition of the ceramic glaze.",
          "C) the ancient kilns' firing temperatures were reconstructed with remarkable accuracy.",
          "D) a breakthrough was achieved in understanding ancient ceramic trade routes."
        ],
        "answer": "B",
        "strategyHeuristic": "Parçaları mikroskop altında inceleyen varlık kimdir? 'the archaeologist' (arkeolog). Virgülden sonra 'the archaeologist' gelmelidir.",
        "turkishSolverGuide": {
          "step1": "Giriş tümcesini okuyun: 'Having analyzed hundreds of pottery shards...' (Çömlek parçalarını inceleyen kim?).",
          "step2": "Mantıklı özne: 'the archaeologist' (Arkeolog).",
          "step3": "Virgülden sonraki ilk kelime 'the archaeologist' olmalıdır.",
          "step4": "A şıkkında özne 'chemical composition', C'de 'temperatures', D'de 'breakthrough'. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The introductory participial phrase 'Having analyzed hundreds of ancient pottery shards...' must logically modify the subject that follows the comma. The archaeologist did the analyzing, so 'the archaeologist' must immediately follow the comma.",
          "choiceBreakdown": {
            "A": "Dangling Modifier Trap: 'the chemical composition' cannot analyze pottery shards.",
            "B": "Correct Answer: Places the logical actor ('the archaeologist') immediately after the introductory modifier.",
            "C": "Dangling Modifier Trap: 'firing temperatures' cannot analyze pottery shards.",
            "D": "Dangling Modifier Trap: 'a breakthrough' cannot analyze pottery shards."
          },
          "keyTakeaway": "The noun immediately following an introductory modifying phrase must be the agent performing the action."
        }
      },
      {
        "id": "GRAM-D4-02",
        "passage": "Renowned for its remarkable thermal resistance and low electrical conductivity, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) aerospace engineers frequently utilize ceramic tile shielding on space shuttles.",
          "B) ceramic tile shielding is frequently utilized by aerospace engineers on space shuttles.",
          "C) space shuttles frequently require ceramic tile shielding designed by engineers.",
          "D) the atmospheric reentry friction is absorbed by ceramic tile shielding."
        ],
        "answer": "B",
        "strategyHeuristic": "Isı direnci ve düşük iletkenliğiyle ünlü olan şey nedir? Mühendisler değil, 'ceramic tile shielding' (seramik kalkanlar).",
        "turkishSolverGuide": {
          "step1": "Giriş tümcesi: 'Renowned for its remarkable thermal resistance...' (Isı direnciyle meşhur olan nedir?).",
          "step2": "Isı direnci olan şey 'aerospace engineers' (mühendisler) olamaz; 'ceramic tile shielding' (seramik kalkan) olmalıdır.",
          "step3": "Virgülden sonra 'ceramic tile shielding' gelmelidir.",
          "step4": "Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The descriptive modifier 'Renowned for its remarkable thermal resistance...' describes the material properties of 'ceramic tile shielding'. Therefore, 'ceramic tile shielding' must be the grammatical subject following the comma.",
          "choiceBreakdown": {
            "A": "Misplaced Modifier Trap: Falsely implies that 'aerospace engineers' possess thermal resistance.",
            "B": "Correct Answer: Correctly places 'ceramic tile shielding' as the subject modified by the introductory phrase.",
            "C": "Misplaced Modifier Trap: Falsely implies that 'space shuttles' themselves are the material described.",
            "D": "Misplaced Modifier Trap: 'the atmospheric reentry friction' is not renowned for thermal resistance."
          },
          "keyTakeaway": "Check the logical subject of the introductory description: materials, people, or objects must match the adjective."
        }
      },
      {
        "id": "GRAM-D4-03",
        "passage": "While navigating the treacherous, uncharted waters of the southern Pacific Ocean, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) several previously unrecorded coral atolls were mapped by Captain James Cook.",
          "B) Captain James Cook mapped several previously unrecorded coral atolls.",
          "C) the ship's navigation charts were meticulously updated with new island positions.",
          "D) a fierce tropical hurricane nearly destroyed the expedition's flagship."
        ],
        "answer": "B",
        "strategyHeuristic": "Güney Pasifik sularında gemiyle seyir yapan kimdir? Kaptan Cook. Virgülden sonra 'Captain James Cook' gelmelidir.",
        "turkishSolverGuide": {
          "step1": "Giriş: 'While navigating the treacherous waters...' (Suları gezen kim?).",
          "step2": "Haritayı çıkaran insan: 'Captain James Cook'.",
          "step3": "A şıkkında mercan adaları geziyormuş gibi duruyor (Pasif tuzak).",
          "step4": "Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The participial clause 'While navigating the treacherous, uncharted waters...' requires a human navigator as its subject. 'Captain James Cook' is the person navigating, so he must immediately follow the comma.",
          "choiceBreakdown": {
            "A": "Dangling Modifier Trap: 'coral atolls' were not navigating the ocean.",
            "B": "Correct Answer: Correctly aligns the active navigator 'Captain James Cook' with the modifying clause.",
            "C": "Dangling Modifier Trap: 'navigation charts' cannot navigate the ocean.",
            "D": "Dangling Modifier Trap: 'a fierce tropical hurricane' is not the entity navigating."
          },
          "keyTakeaway": "Active human verbs (navigating, studying, researching) must be followed by the human researcher after the comma."
        }
      },
      {
        "id": "GRAM-D4-04",
        "passage": "Trained in classical Western music theory as well as traditional Ghanaian drumming, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) composer Kwabena Nketia's symphonies synthesize polyrhythmic percussion with European orchestral harmonies.",
          "B) composer Kwabena Nketia synthesizes polyrhythmic percussion with European orchestral harmonies in his symphonies.",
          "C) the synthesis of polyrhythmic percussion and orchestral harmony was achieved by Kwabena Nketia.",
          "D) polyrhythmic drumming techniques were integrated into classical concertos by Kwabena Nketia."
        ],
        "answer": "B",
        "strategyHeuristic": "Eğitim alan varlık bestecinin kendisidir ('composer Kwabena Nketia'), onun senfonileri ('symphonies') değil!",
        "turkishSolverGuide": {
          "step1": "Giriş: 'Trained in classical music...' (Eğitimi alan kim?).",
          "step2": "Eğitimi alan insan: 'composer Kwabena Nketia'.",
          "step3": "A şıkkında kesme işaretiyle 'composer's symphonies' denmiş (Senfoniler eğitim alamaz - İsim tamlaması tuzağı).",
          "step4": "Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The person 'trained in classical Western music theory' is composer Kwabena Nketia himself. Placing 'composer Kwabena Nketia' directly after the comma correctly attributes the modifier.",
          "choiceBreakdown": {
            "A": "Possessive Dangling Trap: Modifies 'composer Kwabena Nketia's symphonies'—symphonies cannot be trained.",
            "B": "Correct Answer: Directly attaches the modifier to the living person 'composer Kwabena Nketia'.",
            "C": "Dangling Modifier Trap: 'the synthesis' cannot undergo musical training.",
            "D": "Dangling Modifier Trap: 'drumming techniques' cannot undergo musical training."
          },
          "keyTakeaway": "Watch out for possessive nouns (e.g., 'the scientist's experiments' vs 'the scientist'): only the person can perform human training."
        }
      },
      {
        "id": "GRAM-D4-05",
        "passage": "Having spent months analyzing spectroscopic data from the James Webb Space Telescope, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) the exoplanet's carbon dioxide atmosphere was characterized by the international team.",
          "B) an international team of astrophysicists characterized the chemical composition of the exoplanet's atmosphere.",
          "C) spectroscopic analysis revealed signatures of carbon dioxide in the exoplanet's atmosphere.",
          "D) characterization of the exoplanet's atmospheric composition was accomplished by the researchers."
        ],
        "answer": "B",
        "strategyHeuristic": "Aylarca verileri analiz eden varlık bilim insanlarıdır ('an international team of astrophysicists'), atmosfer ya da analiz değil!",
        "turkishSolverGuide": {
          "step1": "Giriş yan cümleciği: 'Having spent months analyzing spectroscopic data...' (Aylarca analizi yapan kim?).",
          "step2": "Analizi yapan insan özne: 'an international team of astrophysicists' (astrofizikçiler ekibi).",
          "step3": "Virgülden hemen sonra analizi yapan özne gelmelidir.",
          "step4": "A'da atmosfer, C'de analiz, D'de karakterizasyon özne yapılmış. Doğru cevap B."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. The opening participial phrase ('Having spent months analyzing...') logically modifies the astrophysicists who performed the research. Placing 'an international team of astrophysicists' immediately after the comma resolves the dangling modifier.",
          "choiceBreakdown": {
            "A": "Dangling Modifier Trap: An atmosphere cannot spend months analyzing data.",
            "B": "Correct Answer: Accurately places the actual researchers directly after the introductory modifier.",
            "C": "Dangling Modifier Trap: 'spectroscopic analysis' cannot spend months analyzing data.",
            "D": "Dangling Modifier Trap: 'characterization' cannot spend months analyzing data."
          },
          "keyTakeaway": "Introductory participial modifiers ('Having spent months...') must be immediately followed by the person or entity capable of performing the action."
        }
      },
      {
        "id": "GRAM-D4-06",
        "passage": "Unlike traditional synthetic fertilizers that rapidly leach nitrogen into groundwater, _______",
        "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "choices": [
          "A) biochar-enhanced compost releases essential plant nutrients gradually over multiple growing seasons.",
          "B) plant nutrients are released gradually over multiple growing seasons by biochar-enhanced compost.",
          "C) gradual release of essential plant nutrients occurs when farmers apply biochar-enhanced compost.",
          "D) farmers using biochar-enhanced compost notice a gradual release of essential plant nutrients."
        ],
        "answer": "A",
        "strategyHeuristic": "Unlike [Geleneksel Gübreler] karşılaştırmasında virgülden sonra karşılaştırılan diğer madde ('biochar-enhanced compost') gelmelidir.",
        "turkishSolverGuide": {
          "step1": "Girişte 'Unlike traditional synthetic fertilizers' (Geleneksel gübrelerin aksine) denilerek bir gübre türü ile karşılaştırma başlatılmış.",
          "step2": "Virgülden sonra geleneksel gübreyle karşılaştırılacak olan diğer madde gelmelidir: 'biochar-enhanced compost'.",
          "step3": "B'de 'plant nutrients', C'de 'gradual release', D'de 'farmers' karşılaştırılmış (Illogical Comparison).",
          "step4": "Doğru cevap A."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The modifying comparison ('Unlike traditional synthetic fertilizers...') must logically compare fertilizers to another soil amendment ('biochar-enhanced compost'). Choices B, C, and D create illogical comparisons with nutrients, release, or farmers.",
          "choiceBreakdown": {
            "A": "Correct Answer: Directly and logically compares synthetic fertilizers to biochar-enhanced compost.",
            "B": "Illogical Comparison Trap: Compares fertilizers to 'plant nutrients'.",
            "C": "Illogical Comparison Trap: Compares fertilizers to 'gradual release'.",
            "D": "Illogical Comparison Trap: Compares fertilizers to 'farmers'."
          },
          "keyTakeaway": "On comparison questions ('Unlike X...'), the noun directly following the comma must be of the same conceptual category as X."
        }
      }
    ]
  },
  "GRAM-5": {
    "metadata": {
      "id": "GRAM-5",
      "title": "Rhetorical Transitions",
      "turkishTitle": "Bağlaçlar & Mantıksal Geçişler",
      "domain": "Expression of Ideas"
    },
    "lesson": {
      "title": "Mantıksal Geçişler ve Bağlaç Kategorileri Formülü",
      "turkishExplanation": "Rhetorical Transition sorularında iki cümle arasındaki mantıksal ilişkiyi 3 kategoriden birine oturtun: 1) ZITLIK (Contrast: However, Conversely, Nonetheless), 2) SEBEP-SONUÇ (Causation: Therefore, Consequently, Thus), 3) EK BİLGİ / ÖRNEK (Elaboration: Furthermore, For example, In fact).",
      "formula": "Bağlaç Formülü:\nCümle 1: Problem / Beklenti.\nCümle 2: Tam tersi gerçeklik -> [However / In contrast]\nCümle 2: Mantıksal netice -> [Consequently / Therefore]\nCümle 2: Detaylandırma / Kanıt -> [For instance / Furthermore]",
      "goldenRules": [
        "Boşluğu kapatıp iki cümleyi kendi ana dilinizde birbirine bağlayın: 'Bu yüzden mi', 'Ama mı', 'Örneğin mi'?",
        "Aynı kategorideki iki bağlaç (örn. Furthermore ve Moreover) birbirini eler çünkü ikisi de aynı işi yapar.",
        "Önceki cümlenin yönü (+) iken sonraki cümle (-) ise zıtlık bağlacı zorunludur."
      ],
      "commonTraps": [
        {
          "name": "The Category Redundancy Trap",
          "desc": "Aynı anlama gelen iki şık arasında kararsız kalıp gereksiz zaman kaybetmek."
        },
        {
          "name": "The False Similarity Trap",
          "desc": "Zıt bir sonuç varken 'Likewise' veya 'Similarly' seçmek."
        }
      ]
    },
    "drills": [
      {
        "id": "GRAM-D5-01",
        "passage": "Many urban economists predicted that the widespread adoption of e-commerce would cause the total collapse of brick-and-mortar retail stores. _______ foot traffic in downtown shopping districts has rebounded strongly, with physical stores evolving into experiential showrooms.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) In fact,",
          "B) Consequently,",
          "C) However,",
          "D) Furthermore,"
        ],
        "answer": "C",
        "strategyHeuristic": "Cümle 1 = Çöküş tahmini (-). Cümle 2 = Fiziksel mağazaların güçlü geri dönüşü (+). Zıtlık bağlacı (However) zorunludur.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: Ekonomistler dükkanların çökeceğini tahmin etti (Kötü senaryo).",
          "step2": "2. Cümle: Mağazalar güçlü şekilde toparlandı ve geri döndü (Tam tersi olumlu sonuç).",
          "step3": "İlişki: ZITLIK (Contrast) -> 'Ancak / Oysa ki'.",
          "step4": "Doğru cevap C (However)."
        },
        "explanation": {
          "correctBridge": "Choice C is correct. Sentence 1 presents a prediction of retail collapse, while Sentence 2 states that physical store traffic has rebounded. 'However' correctly signals this direct contrast between prediction and reality.",
          "choiceBreakdown": {
            "A": "Wrong Relationship: 'In fact' emphasizes or reinforces a claim, but here the two sentences contradict each other.",
            "B": "Wrong Relationship: 'Consequently' signals cause-and-effect, not contrast.",
            "C": "Correct Answer: Correctly establishes the contrast between the predicted collapse and actual recovery.",
            "D": "Wrong Relationship: 'Furthermore' adds supplementary information in the same direction."
          },
          "keyTakeaway": "When Sentence 1 predicts disaster and Sentence 2 reveals success, use a contrast transition (However, Yet, Conversely)."
        }
      },
      {
        "id": "GRAM-D5-02",
        "passage": "During the manufacturing of solar photovoltaic cells, silver paste is utilized for the front electrical contacts due to its unparalleled electrical conductivity. Silver is exceptionally expensive and subject to global market volatility. _______ materials scientists are developing copper-based alternatives to reduce manufacturing costs.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) For example,",
          "B) As a result,",
          "C) Conversely,",
          "D) In contrast,"
        ],
        "answer": "B",
        "strategyHeuristic": "Gümüşün çok pahalı olması (Sebep) -> Bilim insanlarının ucuz bakır alternatif geliştirmesi (Sonuç). 'As a result' gereklidir.",
        "turkishSolverGuide": {
          "step1": "Sebep: Gümüş çok pahalı ve fiyatı dalgalı.",
          "step2": "Sonuç: Bu yüzden araştırmacılar daha ucuz bakır alternatif geliştiriyor.",
          "step3": "İlişki: SEBEP-SONUÇ (Causation) -> 'Bu nedenle / Sonuç olarak'.",
          "step4": "Doğru cevap B (As a result)."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Sentence 2 describes the high cost and volatility of silver (cause), which directly leads scientists to develop cheaper copper alternatives in Sentence 3 (effect). 'As a result' correctly marks this causal connection.",
          "choiceBreakdown": {
            "A": "Wrong Relationship: 'For example' introduces an illustrative instance, not a consequence.",
            "B": "Correct Answer: Correctly marks the causal relationship between high material costs and the research for alternatives.",
            "C": "Wrong Relationship: 'Conversely' marks contrast, but Sentence 3 is a direct logical outcome.",
            "D": "Wrong Relationship: 'In contrast' is synonymous with conversely and fails to capture cause-and-effect."
          },
          "keyTakeaway": "When a problem in Sentence 2 motivates the solution in Sentence 3, use a causation transition (As a result, Therefore, Consequently)."
        }
      },
      {
        "id": "GRAM-D5-03",
        "passage": "Bees communicate the precise distance and direction of floral nectar sources through their famous 'waggle dance'. _______ the angle of the dance relative to vertical gravity encodes the direction of the food source relative to the azimuth of the sun.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) Specifically,",
          "B) Nevertheless,",
          "C) On the other hand,",
          "D) In summary,"
        ],
        "answer": "A",
        "strategyHeuristic": "Cümle 1 genel bilgiyi verir ('dansla iletişim kurarlar'). Cümle 2 bu dansın açısının güneşe göre nasıl hesaplandığının spesifik detayını açıklar -> 'Specifically'.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: Arılar dansla yön ve mesafe bildirir (Genel Bilgi).",
          "step2": "2. Cümle: Dansın dikey açısı güneşin konumunu tam olarak kodlar (Ayrıntılı/Spesifik Mekanizma).",
          "step3": "İlişki: DETAYLANDIRMA (Elaboration/Specification) -> 'Ayrıntılı olarak / Özellikle'.",
          "step4": "Doğru cevap A (Specifically)."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. Sentence 1 introduces the general concept of the waggle dance, and Sentence 2 provides specific technical details on how the angle correlates with the sun's position. 'Specifically' appropriately introduces this elaboration.",
          "choiceBreakdown": {
            "A": "Correct Answer: Accurately signals the transition from a general concept to its precise technical mechanism.",
            "B": "Wrong Relationship: 'Nevertheless' indicates contrast, which is absent here.",
            "C": "Wrong Relationship: 'On the other hand' indicates an alternative or contrast.",
            "D": "Wrong Relationship: 'In summary' provides a brief recap, not a detailed technical elaboration."
          },
          "keyTakeaway": "When Sentence 2 zooms in to explain the exact mechanical details of a concept introduced in Sentence 1, use 'Specifically' or 'In particular'."
        }
      },
      {
        "id": "GRAM-D5-04",
        "passage": "Soil degradation caused by intensive monoculture farming reduces beneficial earthworm populations by up to 70%. _______ the loss of organic root matter destroys the soil's natural sponge-like capacity to absorb flood rainwater.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) However,",
          "B) In addition,",
          "C) Consequently,",
          "D) Instead,"
        ],
        "answer": "B",
        "strategyHeuristic": "Cümle 1 = Toprak bozulmasının 1. zararı (solucan kaybı). Cümle 2 = Toprak bozulmasının 2. zararı (su emme kapasitesi kaybı). Ek bilgi bağlacı (In addition) gereklidir.",
        "turkishSolverGuide": {
          "step1": "1. Cümle: Yoğun tarım solucanları %70 azaltır (1. Olumsuz Etki).",
          "step2": "2. Cümle: Kök kaybı toprağın sel sularını emme kapasitesini yok eder (2. Olumsuz Etki).",
          "step3": "İlişki: EK BİLGİ (Addition) -> 'Ayrıca / Buna ek olarak'.",
          "step4": "Doğru cevap B (In addition)."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Both sentences describe separate negative impacts of intensive monoculture farming (earthworm decline + loss of water absorption). 'In addition' correctly links two parallel supporting points.",
          "choiceBreakdown": {
            "A": "Wrong Relationship: 'However' signals contrast, but both sentences describe negative damage.",
            "B": "Correct Answer: Correctly connects two parallel negative effects with an addition transition.",
            "C": "Wrong Relationship: 'Consequently' implies Sentence 2 was caused by Sentence 1, but both are caused by farming.",
            "D": "Wrong Relationship: 'Instead' indicates an alternative replacement, not an additional effect."
          },
          "keyTakeaway": "When listing multiple parallel effects originating from the same cause, use addition transitions (In addition, Furthermore, Moreover)."
        }
      },
      {
        "id": "GRAM-D5-05",
        "passage": "During the late nineteenth century, electrical pioneer Nikola Tesla championed alternating current (AC) for long-distance power distribution because high voltages could be stepped down efficiently with transformers. Thomas Edison, _______ fiercely defended direct current (DC), arguing that high-voltage AC posed unacceptable safety risks to the public.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) in contrast,",
          "B) therefore,",
          "C) for instance,",
          "D) furthermore,"
        ],
        "answer": "A",
        "strategyHeuristic": "Tesla AC savunuyor vs Edison DC savunuyor -> İki zıt görüş/figür karşılaştırılıyor -> 'in contrast' (buna karşın / aksine).",
        "turkishSolverGuide": {
          "step1": "1. Bölüm: Nikola Tesla AC (alternatif akım) savunuyordu.",
          "step2": "2. Bölüm: Thomas Edison ise DC (doğru akım) savundu ve AC'nin tehlikeli olduğunu iddia etti.",
          "step3": "İlişki: Karşıtlık (Contrast) -> 'Buna karşılık / Aksine'.",
          "step4": "Doğru cevap A (in contrast)."
        },
        "explanation": {
          "correctBridge": "Choice A is correct. The text sets up a direct ideological and commercial contrast between Nikola Tesla's support for alternating current and Thomas Edison's advocacy for direct current. 'In contrast' correctly expresses this opposition.",
          "choiceBreakdown": {
            "A": "Correct Answer: Appropriately indicates the contrast between Tesla's and Edison's competing systems.",
            "B": "Wrong Relationship: 'Therefore' indicates cause-and-effect, but Edison was not caused by Tesla.",
            "C": "Wrong Relationship: 'For instance' introduces an example, not a competing perspective.",
            "D": "Wrong Relationship: 'Furthermore' indicates addition, but the two men held mutually exclusive positions."
          },
          "keyTakeaway": "When contrasting the beliefs or actions of two distinct individuals, use contrast transitions (in contrast, however, conversely)."
        }
      },
      {
        "id": "GRAM-D5-06",
        "passage": "Many desert succulents minimize water evaporation by closing their stomata during the blistering daytime heat. _______ they open their pores exclusively at night to capture carbon dioxide through Crassulacean acid metabolism.",
        "question": "Which choice completes the text with the most logical transition?",
        "choices": [
          "A) Similarly,",
          "B) Instead,",
          "C) Consequently,",
          "D) For example,"
        ],
        "answer": "B",
        "strategyHeuristic": "Gündüz gözeneklerini kapatırlar (Eylem yapılmıyor). Bunun yerine gece açarlar (Alternatif eylem yapılıyor) -> 'Instead' (Bunun yerine).",
        "turkishSolverGuide": {
          "step1": "1. Cümle: Çöl bitkileri gündüzleri gözeneklerini kapatır (Olumsuz/Yapılmayan eylem).",
          "step2": "2. Cümle: Karbondioksit yakalamak için gözeneklerini sadece geceleri açarlar (Yerine yapılan eylem).",
          "step3": "İlişki: İkame / Alternatif -> 'Instead' (Bunun yerine).",
          "step4": "Doğru cevap B (Instead)."
        },
        "explanation": {
          "correctBridge": "Choice B is correct. Sentence 1 explains an action the plants avoid during the day (keeping stomata closed). Sentence 2 introduces the alternative strategy they perform at night. 'Instead' signals this replacement action.",
          "choiceBreakdown": {
            "A": "Wrong Relationship: 'Similarly' signals comparison between two similar cases, not an alternative.",
            "B": "Correct Answer: Accurately signals that opening stomata at night replaces opening them during the day.",
            "C": "Wrong Relationship: 'Consequently' signals a result, but nocturnal opening is a deliberate alternative adaptation.",
            "D": "Wrong Relationship: 'For example' introduces an illustrative instance, not a substituted behavior."
          },
          "keyTakeaway": "When Sentence 1 states what does NOT happen and Sentence 2 states what DOES happen in its place, use 'Instead'."
        }
      }
    ]
  }
};