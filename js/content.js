/**
 * SAT READING SKILLS ACADEMY - Content Repository
 * Contains curriculum data, instructional methods, worked examples, trap lab drills,
 * guided practice items with hint ladders, and independent timed practice items across all 7 modules.
 */

const ACADEMY_CONTENT = {
  // =========================================================================
  // MODULE 0: READING LIKE THE SAT WANTS (FOUNDATIONS)
  // =========================================================================
  "MOD-0": {
    metadata: {
      id: "MOD-0",
      title: "Reading Like the SAT Wants",
      domain: "Foundations",
      methodName: "The ACTIVE Framework",
      tagline: "Stop reading for pure interest; start reading for structural logic, pivots, and boundary traps."
    },
    stage1_skill: {
      title: "What Does the SAT Actually Test?",
      whatItTests: "The Digital SAT Reading section is not a test of speed-reading or personal interpretation. It is a standardized logic test dressed up as a reading comprehension exam. Every question has exactly one 100% indisputably defensible answer and three objectively flawed distractors.",
      frequency: "Foundational to ALL 27-29 reading questions per module on test day.",
      recognitionTest: "Whenever you read ANY passage on the Digital SAT, look for: (1) Main claim vs. supporting data, (2) Pivot transitions (however, yet, nonetheless), (3) Nuance qualifiers (some, may, partially vs. always, completely).",
      eslNote: "For non-native English speakers: The test makers love using modest, cautious academic phrasing (e.g., 'suggests a correlation', 'is consistent with') as correct answers, while using dramatic, absolute language as traps."
    },
    stage2_method: {
      name: "The ACTIVE Framework",
      summary: "5 core cognitive moves every top 1% SAT reader makes automatically.",
      steps: [
        {
          num: 1,
          title: "Anchor the Core Topic",
          rule: "Identify the noun/subject the author is discussing in the first 10 words.",
          expertMove: "I ask: 'Who or what is this text about?' and ignore extraneous background adjectives."
        },
        {
          num: 2,
          title: "Catch the Pivot Word",
          rule: "Highlight words like 'however', 'conversely', 'despite this', or 'in contrast'.",
          expertMove: "The sentence IMMEDIATELY following a pivot word almost always contains the author's true stance."
        },
        {
          num: 3,
          title: "Separate Claim from Evidence",
          rule: "Distinguish an argument/thesis from the experiment/data used to back it up.",
          expertMove: "If an option discusses specific numbers or sample sizes, I check if the question asked for the big claim instead."
        },
        {
          num: 4,
          title: "Track Author Polarity",
          rule: "Assign a mental (+) positive, (-) negative, or (~) neutral badge to the tone.",
          expertMove: "If an author expresses cautious praise (+), I immediately eliminate scathing criticisms (-) and unconditional worship (++)."
        },
        {
          num: 5,
          title: "Veto Extreme Distractors",
          rule: "Eliminate choices with words like 'all', 'never', 'wholly impossible', or 'uniquely'.",
          expertMove: "I treat absolute statements as guilty until proven innocent by explicit passage text."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "FND-W-01",
        type: "foundation",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "Many paleontologists long assumed that tyrannosaurids were solitary hunters that rarely tolerated rivals in their territory. However, the recent discovery of multiple *Albertosaurus* fossils preserved together in a single quarry in Alberta, Canada, has challenged this orthodoxy. Because the individuals were buried simultaneously in a single geological event, researchers suggest that these apex predators may have engaged in cooperative pack hunting to bring down large ceratopsian prey.",
        question: "Which choice best describes the main shift in the passage?",
        choices: [
          "A) It establishes an undisputed fact about prehistoric ecosystems and then describes how modern predators mimic that behavior.",
          "B) It outlines a traditional scientific assumption and then introduces evidence that calls it into question.",
          "C) It proves conclusively that all tyrannosaurids hunted in massive packs throughout their evolutionary history.",
          "D) It compares the hunting efficiency of *Albertosaurus* to that of contemporary mammalian apex carnivores."
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Scan for Anchor & Pivot): The passage starts with 'Many paleontologists long assumed...' and hits a massive pivot word: 'However'.",
          "Step 2 (Deconstruct the Shift): Before 'however' = old assumption (solitary hunters). After 'however' = new fossil quarry suggesting pack hunting.",
          "Step 3 (Predict the Answer): The text goes from old belief -> new evidence questioning it. Let's inspect choice B.",
          "Step 4 (Eliminate Traps): Choice A is 'Out of Scope' (no modern predators mentioned). Choice C is 'Too Extreme' ('proves conclusively', 'all tyrannosaurids'). Choice D is 'Out of Scope' (no mammalian carnivores). Choice B is 100% supported."
        ],
        trapTypes: {
          A: "Out of Scope",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice B accurately captures the two-part structure signaled by the pivot word 'However': the first sentence introduces a long-held assumption, and the remainder introduces new quarry findings that challenge it. Choice C contains the extreme words 'proves conclusively' and 'all', whereas the text only says researchers 'suggest' they 'may have' hunted cooperatively.",
        glosses: {
          "solitary": "living or hunting alone; not in a group",
          "orthodoxy": "a traditionally accepted belief or established theory",
          "apex predators": "animals at the top of the food chain with no natural predators",
          "ceratopsian": "a group of horned, herbivorous dinosaurs (like Triceratops)"
        }
      },
      {
        id: "FND-W-02",
        type: "foundation",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "Historian Evelyn Brooks Higginbotham coined the term 'politics of respectability' to describe how early twentieth-century African American women navigated racial subjugation. By adhering strictly to middle-class behavioral norms, temperance, and educational attainment, these activists sought to counter prevailing racist stereotypes and claim moral citizenship. While critics today argue that this strategy conceded too much ground to bourgeois ideals, Higginbotham contends that within the oppressive constraints of the Jim Crow era, respectability politics served as an indispensable, subversive shield.",
        question: "Based on the text, how would Higginbotham most likely characterize respectability politics as practiced in the early 20th century?",
        choices: [
          "A) As a flawed campaign that ultimately reinforced the racist stereotypes it sought to overturn.",
          "B) As an infallible political philosophy that achieved complete legal parity for all African Americans.",
          "C) As a pragmatic and protective tactic adapted to an exceptionally restrictive historical environment.",
          "D) As an elite intellectual movement that was universally rejected by working-class Black communities."
        ],
        answer: "C",
        thinkAloud: [
          "Step 1 (Identify Subject & Viewpoint): The question asks for Higginbotham's view specifically, NOT modern critics.",
          "Step 2 (Locate Stance in Passage): The last sentence states: 'Higginbotham contends that within the oppressive constraints... it served as an indispensable, subversive shield.'",
          "Step 3 (Formulate Prediction): She sees it as necessary ('indispensable') and protective ('shield') under difficult conditions ('oppressive constraints').",
          "Step 4 (Test Choices & Traps): Choice A matches the critics' view, not Higginbotham's (Opposite/Half Right trap). Choice B uses extreme language 'infallible' and 'complete legal parity' (Too Extreme trap). Choice D has zero textual backing (Out of Scope trap). Choice C uses 'pragmatic and protective' which perfectly matches 'indispensable, subversive shield'."
        ],
        trapTypes: {
          A: "Opposite",
          B: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice C accurately reflects Higginbotham's perspective: she views the strategy as an 'indispensable, subversive shield' within 'oppressive constraints', which translates to a pragmatic, protective strategy suited to its environment. Choice A is the viewpoint of modern critics, not Higginbotham.",
        glosses: {
          "subjugation": "the act of bringing someone under domination or control",
          "temperance": "abstinence from alcoholic drink; self-restraint",
          "bourgeois": "characteristic of the middle class; conforming to conventional standards",
          "subversive": "intended to undermine or challenge an established system"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "FND-TRAP-01",
        stem: "Text: 'Astronomers detected subtle fluctuations in the star's luminosity, leading some researchers to hypothesize the transit of an exoplanet.'",
        wrongChoice: "The astronomers have provided undeniable proof that a habitable terrestrial planet orbits the star.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Opposite", "Half Right", "Out of Scope"],
        rationale: "'Undeniable proof' and 'habitable terrestrial planet' are severe exaggerations. The passage merely mentions 'subtle fluctuations' and researchers who 'hypothesize' an exoplanet."
      },
      {
        id: "FND-TRAP-02",
        stem: "Text: 'Although the author praised the poet's lyrical agility in her early stanzas, he ultimately lamented the disorganized thematic conclusion of the collection.'",
        wrongChoice: "The author regarded the poetry collection as an unmitigated masterpiece of modern literature.",
        correctTrap: "Opposite",
        options: ["Opposite", "Too Extreme", "Half Right", "Wrong Meaning"],
        rationale: "The passage notes that the author 'lamented the disorganized thematic conclusion'. Calling it an 'unmitigated masterpiece' flips the author's final negative evaluation to a purely positive one."
      },
      {
        id: "FND-TRAP-03",
        stem: "Text: 'The study tracked 400 bumblebees across urban gardens and noted that bees exposed to floral diversity collected 15% more pollen than those in monoculture lawns.'",
        wrongChoice: "Urban gardens are superior to all natural forests for preserving pollinator biodiversity worldwide.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Too Extreme", "Half Right", "Misused Evidence"],
        rationale: "Natural forests and worldwide biodiversity were never mentioned in the text. The choice introduces outside concepts not tested by the study."
      },
      {
        id: "FND-TRAP-04",
        stem: "Text: 'Biologist Dr. Sarah Lin demonstrated that cold-tolerant alpine flora produce specific antifreeze proteins. However, she emphasized that climate warming may disrupt this evolutionary adaptation.'",
        wrongChoice: "Alpine flora produce specialized antifreeze proteins to survive sub-zero temperatures.",
        correctTrap: "Half Right",
        options: ["Half Right", "Too Extreme", "Opposite", "Out of Scope"],
        rationale: "While factually stated in sentence 1, if the question asks for Dr. Lin's primary concern or main takeaway, selecting this detail ignores the critical pivot after 'However'."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "FND-G-01",
        type: "foundation",
        stage: "guided",
        difficulty: "Easy",
        passage: "While traditional economic models assume that consumers always behave like rational utility-maximizers, behavioral economists have repeatedly demonstrated that cognitive biases routinely distort decision-making. For instance, the 'endowment effect' causes individuals to value an item substantially more merely because they own it, regardless of its objective market worth.",
        question: "Which choice best summarizes the author's primary argument?",
        choices: [
          "A) Traditional economic models perfectly predict consumer purchases in modern marketplaces.",
          "B) Human decision-making is often influenced by cognitive distortions rather than pure economic rationality.",
          "C) The endowment effect is the only cognitive bias that prevents humans from making logical choices.",
          "D) Consumers should be legally prevented from making purchases when experiencing emotional attachment."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the pivot word 'While' in the opening sentence. Where does the author place their real emphasis?",
          "Hint 2 (Strategy Reminder): Apply Step 5 of the ACTIVE Framework: Watch out for extreme words like 'perfectly' or 'only'.",
          "Hint 3 (Partial Solution): Choice A contradicts the text ('distort decision-making'), Choice C has the extreme word 'only', and Choice D is completely out of scope. Narrow your focus to Choice B."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice B accurately captures the contrast: behavioral economics shows that cognitive biases distort decisions, refuting the assumption of pure rationality. Choice A is the opposite of the author's point. Choice C uses the extreme word 'only'. Choice D is out of scope.",
        glosses: {
          "utility-maximizers": "individuals who make choices to get the greatest possible personal satisfaction or profit",
          "cognitive biases": "systematic patterns of deviation from norm or rationality in judgment",
          "endowment effect": "the tendency of people to overvalue things merely because they own them"
        }
      },
      {
        id: "FND-G-02",
        type: "foundation",
        stage: "guided",
        difficulty: "Medium",
        passage: "For decades, architectural preservationists in Chicago fought to protect mid-century modernist buildings, arguing that their clean lines and steel frames represented a vital chapter in urban heritage. Recently, however, civic planners have pointed out that many of these structures are remarkably energy-inefficient, with single-pane glass facades that require exorbitant heating and cooling costs. Consequently, a growing consensus favors retrofitting these landmarks with sustainable materials rather than preserving them in an unmodified state.",
        question: "Based on the text, what resolution has emerged regarding mid-century modernist buildings in Chicago?",
        choices: [
          "A) They will be completely demolished to make room for zero-emission skyscrapers.",
          "B) They will be preserved exactly as originally built to safeguard their historical authenticity.",
          "C) They will be modified with eco-friendly upgrades that balance heritage with energy efficiency.",
          "D) They will be sold exclusively to private collectors capable of paying their heating bills."
        ],
        answer: "C",
        hints: [
          "Hint 1 (Nudge): Look at the concluding transition word 'Consequently' in the final sentence.",
          "Hint 2 (Strategy Reminder): The passage sets up a conflict between historical preservation and energy costs. How does the text bridge the two?",
          "Hint 3 (Partial Solution): The text says 'retrofitting these landmarks with sustainable materials rather than preserving them in an unmodified state.' Which choice mirrors this compromise?"
        ],
        trapTypes: {
          A: "Too Extreme",
          B: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice C matches the final sentence: the emerging consensus is 'retrofitting these landmarks with sustainable materials' rather than leaving them unmodified. Choice A ('completely demolished') is too extreme and unsupported. Choice B ignores the 'rather than' clause. Choice D is out of scope.",
        glosses: {
          "preservationists": "people who advocate for the protection and maintenance of historic buildings or environments",
          "exorbitant": "unreasonably or excessively high in price or cost",
          "retrofitting": "adding new technology or features to older systems to improve efficiency"
        }
      },
      {
        id: "FND-G-03",
        type: "foundation",
        stage: "guided",
        difficulty: "Medium",
        passage: "In 18th-century Europe, botanical gardens shifted from serving primarily as medicinal herb collections for apothecaries to becoming vast repositories of imperial botany. European explorers returned from the Pacific and the Americas with thousands of exotic specimens. Naturalists like Joseph Banks organized these specimens systematically according to Linnaean taxonomy, seeking not merely to catalog nature, but to identify commercially lucrative cash crops—such as tea, rubber, and breadfruit—that could be transplanted across colonial territories.",
        question: "According to the passage, what motivated the 18th-century transformation of European botanical gardens?",
        choices: [
          "A) A desire to abandon medical research in favor of artistic floral exhibitions.",
          "B) An exclusive interest in domestic European plant species with cold-hardiness.",
          "C) A combination of scientific classification and the pursuit of economically valuable colonial crops.",
          "D) A legal mandate requiring all apothecaries to close their local dispensaries."
        ],
        answer: "C",
        hints: [
          "Hint 1 (Nudge): Re-read the final sentence. What two goals are connected by 'not merely to catalog... but to identify'?",
          "Hint 2 (Strategy Reminder): Match the exact words: 'catalog nature systematically' (scientific classification) + 'identify commercially lucrative cash crops' (economic pursuit).",
          "Hint 3 (Partial Solution): Eliminate Choice B because the text says 'exotic specimens' from 'the Pacific and the Americas', not domestic European species. Look for the choice that captures both science and commerce."
        ],
        trapTypes: {
          A: "Out of Scope",
          B: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice C synthesizes the author's two points: organizing specimens by Linnaean taxonomy (scientific classification) and identifying lucrative cash crops for transplantation (colonial economic value). Choice B contradicts the text. Choices A and D make claims not found in the passage.",
        glosses: {
          "apothecaries": "historical health professionals who formulated and dispensed remedies and medicines",
          "repositories": "places where things are stored or preserved in large quantities",
          "Linnaean taxonomy": "the standardized biological system for naming and categorizing organisms",
          "lucrative": "producing a great deal of profit"
        }
      },
      {
        id: "FND-G-04",
        type: "foundation",
        stage: "guided",
        difficulty: "Hard",
        passage: "Many marine ecologists hypothesized that marine protected areas (MPAs) with strict 'no-take' fishing bans would invariably lead to economic hardship for local artisanal fishing communities. However, empirical studies in the Mediterranean show that the resulting 'spillover effect'—wherein adult fish and larvae emigrate from the protected reserve into adjacent fishing grounds—frequently boosts catches in surrounding waters within five years, compensating for the initial restriction.",
        question: "Which choice best describes the relationship between the ecologists' initial hypothesis and the empirical findings?",
        choices: [
          "A) The empirical findings demonstrated that the initial hypothesis was wholly accurate across all global marine zones.",
          "B) The empirical findings revealed that the initial hypothesis failed to anticipate the compensatory benefits of fish spillover.",
          "C) The initial hypothesis correctly predicted that artisanal fishing communities would permanently collapse.",
          "D) The empirical findings proved that marine protected areas have zero impact on fish populations outside the reserve."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the pivot 'However' and compare the fear in sentence 1 with the reality in sentence 2.",
          "Hint 2 (Strategy Reminder): The hypothesis expected 'economic hardship', but the findings showed a 'spillover effect' that 'boosts catches'. What did the hypothesis miss?",
          "Hint 3 (Partial Solution): Choice A says the hypothesis was accurate (Opposite). Choice C says fishing collapsed (Opposite). Choice D says MPAs have zero impact (Opposite). Choice B precisely identifies what the hypothesis overlooked."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice B is correct. The initial hypothesis assumed MPAs would bring economic hardship, but researchers found that fish migrate outside the reserve and boost catches ('spillover effect'), meaning the hypothesis failed to anticipate this positive compensation. Choice A, C, and D all contradict the findings reported in the text.",
        glosses: {
          "artisanal": "small-scale, traditional fishing practiced by local individuals or communities",
          "empirical": "based on, concerned with, or verifiable by observation or experience rather than pure theory",
          "compensating": "making up for a loss, disadvantage, or initial setback"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "FND-I-01",
        type: "foundation",
        stage: "independent",
        difficulty: "Medium",
        passage: "During the Gilded Age, American literary realism arose as a deliberate repudiation of 19th-century romantic idealism. Whereas romantic novelists depicted morally pure protagonists triumphing over melodramatic villainy, realist authors such as William Dean Howells and Henry James focused on ordinary middle-class characters confronting everyday ethical dilemmas, social stratification, and psychological ambiguity.",
        question: "According to the passage, how did American literary realism primarily differ from romantic idealism?",
        choices: [
          "A) Realism focused on ordinary characters facing complex social and moral challenges rather than idealized heroes.",
          "B) Realism entirely eliminated dialogue and plot in order to present statistical tables about poverty.",
          "C) Realism celebrated romantic knights and fantastical creatures to provide escapism from industrial factories.",
          "D) Realism was created exclusively to support the political agendas of corporate monopolies."
        ],
        answer: "A",
        trapTypes: {
          B: "Too Extreme",
          C: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice A directly reflects the contrast presented in the text: romanticism used morally pure protagonists, whereas realism emphasized ordinary characters dealing with ethical dilemmas and social stratification. Choice B is absurdly extreme ('eliminated dialogue and plot'). Choice C describes romanticism, not realism. Choice D is unsupported.",
        glosses: {
          "repudiation": "rejection of a proposal or idea; refusal to accept",
          "melodramatic": "characteristic of melodrama, especially in being exaggerated, sensationalized, or overemotional",
          "stratification": "the arrangement or classification of something into different social groups or layers"
        }
      },
      {
        id: "FND-I-02",
        type: "foundation",
        stage: "independent",
        difficulty: "Hard",
        passage: "In neuroscience, the long-standing 'neurocentric' paradigm posited that information processing in the brain is exclusively conducted by neurons, with glial cells serving merely as structural scaffold and metabolic glue. Yet, recent optogenetic research indicates that astrocytes—a subtype of glial cell—can modulate synaptic transmission and directly influence memory consolidation by releasing gliotransmitters into the synaptic cleft.",
        question: "Which choice best describes the function of the second sentence in the text as a whole?",
        choices: [
          "A) It provides definitive proof that neurons play no meaningful role in cognitive memory.",
          "B) It introduces experimental findings that challenge the passive view of glial cells in brain function.",
          "C) It reconciles two completely identical theories of cellular neurobiology into a single model.",
          "D) It warns clinicians that optogenetic techniques are too hazardous for laboratory experimentation."
        ],
        answer: "B",
        trapTypes: {
          A: "Too Extreme",
          C: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice B captures the rhetorical function of the sentence introduced by 'Yet': it brings in new optogenetic findings showing that astrocytes actively modulate synaptic transmission, challenging the old view that glial cells are 'merely structural scaffold'. Choice A is extreme ('play no meaningful role'). Choice C claims the theories are identical. Choice D is out of scope.",
        glosses: {
          "neurocentric": "centered entirely around neurons to the exclusion of other brain cells",
          "posited": "assumed as a fact; put forward as a basis of argument",
          "modulate": "exert a modifying or controlling influence on",
          "synaptic cleft": "the minute space between two communicating nerve cells"
        }
      },
      {
        id: "FND-I-03",
        type: "foundation",
        stage: "independent",
        difficulty: "Hard",
        passage: "In 1930, British economist John Maynard Keynes famously predicted that technological advancement and capital accumulation would reduce the standard workweek to fifteen hours by the early twenty-first century. However, sociological data from OECD countries indicate that while productivity per worker has skyrocketed over five-fold since 1950, average annual hours worked have declined only marginally, as societal gains have been channeled into higher consumer consumption and expanding bureaucratic service sectors.",
        question: "Based on the text, why did Keynes's prediction fail to materialize?",
        choices: [
          "A) Workers experienced a massive decline in technological innovation and factory automation.",
          "B) Increased productivity was absorbed by higher consumption and new economic sectors rather than massive leisure time.",
          "C) Governments across the OECD outlawed part-time employment and mandated 60-hour workweeks.",
          "D) Technological advancements caused a complete collapse of all international trade markets."
        ],
        answer: "B",
        trapTypes: {
          A: "Opposite",
          C: "Too Extreme",
          D: "Too Extreme"
        },
        explanation: "Choice B directly reflects the explanation given in the final clause: productivity skyrocketed, but gains were channeled into 'higher consumer consumption and expanding bureaucratic service sectors' rather than reducing work hours to 15 hours. Choice A contradicts the text ('skyrocketed over five-fold'). Choices C and D are extreme fabrications.",
        glosses: {
          "capital accumulation": "the growth of wealth through investments and profit reinvestment",
          "OECD": "Organization for Economic Co-operation and Development (developed nations)",
          "marginally": "to only a limited, slight extent",
          "materialize": "become actual fact; happen"
        }
      },
      {
        id: "FND-I-04",
        type: "foundation",
        stage: "independent",
        difficulty: "Medium",
        passage: "Soil microbiologists traditionally classified subterranean fungal networks simply as nutrient competitors with plant roots. However, isotopic tracing experiments have revealed that mycorrhizal networks actively facilitate resource-sharing between trees of different species. When a mature birch tree experiences full sunlight, it can transfer surplus carbon compounds via underground fungal filaments to neighboring shaded fir saplings, enhancing forest-wide resilience.",
        question: "The passage suggests that mycorrhizal fungal networks:",
        choices: [
          "A) serve as conduit systems that enable cross-species nutrient transfer among forest trees.",
          "B) invariably destroy mature birch trees by draining their essential root carbohydrates.",
          "C) prevent all shaded saplings from receiving any underground chemical signals.",
          "D) are unable to survive in soil that contains more than one species of tree."
        ],
        answer: "A",
        trapTypes: {
          B: "Too Extreme",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice A summarizes the author's key point: the networks 'facilitate resource-sharing' and transfer carbon from sunny birch trees to shaded fir saplings across species boundaries. Choices B, C, and D are extreme, negative claims that directly contradict the cooperative role described.",
        glosses: {
          "subterranean": "existing, occurring, or done under the earth's surface",
          "isotopic tracing": "a technique using non-radioactive or radioactive isotopes to track chemical pathways",
          "mycorrhizal": "relating to a symbiotic association between a fungus and the roots of a plant",
          "conduit": "a channel for conveying water or other fluid, or transmitting resources"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Foundations Self-Audit",
      prompts: [
        { id: "sa-1", label: "I can instantly spot pivot transitions (however, yet, conversely) and use them to locate the author's main point." },
        { id: "sa-2", label: "I can distinguish the author's primary claim from secondary experimental details." },
        { id: "sa-3", label: "I actively veto choices with extreme language (all, proves, never, wholly) unless the text explicitly demands it." }
      ]
    }
  },

  // =========================================================================
  // MODULE 1: WORDS IN CONTEXT (CRAFT & STRUCTURE)
  // =========================================================================
  "MOD-1": {
    metadata: {
      id: "MOD-1",
      title: "Words in Context",
      domain: "Craft & Structure",
      methodName: "The BLANK Method",
      tagline: "Never look at the choices first; blank the target word, predict a simple synonym from clues, and defeat secondary meaning traps."
    },
    stage1_skill: {
      title: "What Does Words in Context Test?",
      whatItTests: "Words in Context tests your ability to determine the precise meaning of high-utility academic vocabulary based on the rhetorical and syntactic clues in a passage. Crucially, the SAT rarely tests obscure dictionary words; instead, it tests common words used in subtle, secondary, or discipline-specific senses.",
      frequency: "4 to 6 questions per module (approx. 18% of the entire Reading & Writing section).",
      recognitionTest: "The question stem almost always reads: 'As used in the text, what does the word [X] most nearly mean?' or 'Which choice completes the text with the most logical and precise word or phrase?'",
      eslNote: "The #1 trap for ESL learners is picking the word's most famous definition (e.g., 'table' meaning furniture rather than 'to postpone a discussion', or 'qualify' meaning to meet requirements rather than 'to limit a claim')."
    },
    stage2_method: {
      name: "The BLANK Method",
      summary: "A 4-step disciplined protocol that prevents your brain from being hijacked by attractive distractor choices.",
      steps: [
        {
          num: 1,
          title: "Blank the Target Word",
          rule: "Put a mental box/blank over the underlined word or blank space.",
          expertMove: "Do NOT read the 4 choices yet. Looking at choices early primes your brain with misleading associations."
        },
        {
          num: 2,
          title: "Locate the Clue Sentences",
          rule: "Find the definition, synonym, antonym, or tone marker already present in the text.",
          expertMove: "Every SAT passage contains an internal 'equation'—a parallel phrase or contrast word that defines the blank."
        },
        {
          num: 3,
          title: "Anticipate / Predict Your Own Word",
          rule: "Draft a simple, elementary school word (e.g., 'stop', 'show', 'change', 'support') that fits the blank.",
          expertMove: "I write or think my simple prediction: e.g., 'The sentence needs a word meaning LIMIT'."
        },
        {
          num: 4,
          title: "Match & Eliminate Traps",
          rule: "Compare each choice to your prediction, watching for 'Wrong Meaning' and 'Too Extreme' traps.",
          expertMove: "If choice A matches my prediction and fits the tone, I confirm why B, C, and D fail before moving on."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "WIC-W-01",
        type: "words-in-context",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "In his 1958 essay on urban design, Lewis Mumford argued that suburban highway expansion would not alleviate traffic congestion but would instead _______ it. By making distant commutes easier, new expressways inevitably generate additional automobile journeys, quickly overwhelming the very lanes built to absorb them.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) compound",
          "B) alleviate",
          "C) fabricate",
          "D) stabilize"
        ],
        answer: "A",
        thinkAloud: [
          "Step 1 (Blank & Context Clue): Notice the contrast frame: 'would not alleviate traffic congestion but would instead [BLANK] it.'",
          "Step 2 (Decode Polarity & Evidence): 'Alleviate' means make better/reduce. The phrase 'not alleviate... but instead' means the blank MUST mean the opposite of alleviate: make worse, intensify, or increase.",
          "Step 3 (Predict Simple Word): Prediction: 'worsen' or 'increase'. Sentence 2 confirms this: 'inevitably generate additional automobile journeys, quickly overwhelming the very lanes...'",
          "Step 4 (Test Choices): A) 'compound' in academic English means to make a problem worse or multiply it (Exact Match!). B) 'alleviate' is an Opposite trap. C) 'fabricate' means invent from scratch (Out of Scope). D) 'stabilize' means keep the same (Opposite of worsening). Choose A."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice A is correct. 'Compound' means to make an existing problem or difficulty worse, which perfectly fits the passage's argument that building highways generates even more traffic and overwhelms capacity. Choice B is the opposite of what the author claims. Choice C means to invent or manufacture, and Choice D means to make stable.",
        glosses: {
          "alleviate": "make suffering, deficiency, or a problem less severe",
          "compound": "(verb) to make something bad worse by adding to it; to intensify",
          "inevitably": "certain to happen; unavoidably",
          "overwhelming": "completely overpowering or submerging"
        }
      },
      {
        id: "WIC-W-02",
        type: "words-in-context",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "Although Dr. Aris Thorne recognized that the archaeological artifacts recovered from the coastal cave were genuine, he sought to _______ the lead investigator's bolder claim that the site represented an unrecorded pre-Columbian civilization. Thorne noted that similar toolkits had been discovered across the region without indicating any organized urban hierarchy.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) endorse",
          "B) qualify",
          "C) fabricate",
          "D) eradicate"
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Blank & Context): The sentence begins with 'Although Dr. Thorne recognized that the artifacts were genuine, he sought to [BLANK] the bolder claim...'",
          "Step 2 (Analyze the Pivot & Clues): 'Although' signals a concession. Thorne accepts the artifacts are real, BUT he objects to the excessive 'bolder claim' about an entire civilization. He brings up counter-evidence.",
          "Step 3 (Predict Simple Word): Thorne wants to 'limit', 'temper', or 'put boundaries on' the bold claim without calling the artifacts fake.",
          "Step 4 (Test Choices): A) 'endorse' means support fully (Opposite trap). B) 'qualify' has a secondary academic meaning: 'to limit or restrict the scope of a statement' (Perfect Match!). C) 'fabricate' means invent falsely. D) 'eradicate' is Too Extreme (destroy completely). Choose B."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. In academic context, 'qualify' means to moderate, limit, or make a claim less absolute. Dr. Thorne accepts the artifacts are real but wants to restrict the bold interpretation. Choice A ('endorse') means full approval. Choice D ('eradicate') is far too extreme.",
        glosses: {
          "qualify": "(secondary meaning) to limit, modify, or place conditions on a statement or claim",
          "pre-Columbian": "relating to the history and cultures of the Americas before the arrival of Columbus in 1492",
          "hierarchy": "a system in which members of an organization or society are ranked according to relative status",
          "eradicate": "destroy completely; put an end to"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "WIC-TRAP-01",
        stem: "Text: 'Rather than embracing the avant-garde poet's radical syntax, the conservative journal published a _______ review calling the work unreadable.'",
        wrongChoice: "laudatory",
        correctTrap: "Opposite",
        options: ["Opposite", "Wrong Meaning", "Too Extreme", "Out of Scope"],
        rationale: "'Laudatory' means expressing praise. The passage states the journal called the work 'unreadable', meaning the review was negative, not praise-filled."
      },
      {
        id: "WIC-TRAP-02",
        stem: "Text: 'To ensure the historical documentary remained engaging, the director decided to _______ the archival footage with modern animated maps.'",
        wrongChoice: "fabricate",
        correctTrap: "Wrong Meaning",
        options: ["Wrong Meaning", "Too Extreme", "Opposite", "Half Right"],
        rationale: "'Fabricate' means to invent or forge. A student might think of 'fabricating' as making/producing, but in context the director is combining/interspersing media, not creating fraudulent evidence."
      },
      {
        id: "WIC-TRAP-03",
        stem: "Text: 'The botanist cautioned that while the soil additive showed promise in greenhouse trials, its agricultural efficacy under field conditions was still _______.'",
        wrongChoice: "wholly nonexistent",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Opposite", "Wrong Meaning", "Out of Scope"],
        rationale: "Claiming the efficacy is 'wholly nonexistent' is an absolute overstatement. The text says it showed promise in trials, so its field efficacy is merely 'provisional' or 'unproven', not definitively impossible."
      },
      {
        id: "WIC-TRAP-04",
        stem: "Text: 'The architect was determined to _______ the dilapidated warehouse into a vibrant community arts center.'",
        wrongChoice: "demolish",
        correctTrap: "Half Right",
        options: ["Half Right", "Opposite", "Too Extreme", "Out of Scope"],
        rationale: "While demolition often occurs in construction projects, the sentence specifies turning the warehouse 'into a vibrant community arts center', which requires transformation/renovation, not total destruction."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "WIC-G-01",
        type: "words-in-context",
        stage: "guided",
        difficulty: "Easy",
        passage: "Because the mountain pass was notoriously hazardous during winter blizzards, local guides advised travelers to _______ their journeys until the spring thaw made the trails passable.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) accelerate",
          "B) defer",
          "C) celebrate",
          "D) terminate"
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the time clue: 'until the spring thaw made the trails passable.'",
          "Hint 2 (Strategy Reminder): Apply Step 3 of the BLANK Method: What word means 'to postpone or delay until a later time'?",
          "Hint 3 (Partial Solution): 'Accelerate' means speed up (Opposite). 'Terminate' means cancel forever (Too Extreme). Which word specifically means to delay until later?"
        ],
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. 'Defer' means to put off or postpone to a later time, matching the phrase 'until the spring thaw'. Choice A is the opposite. Choice D is too extreme ('terminate' implies canceling permanently).",
        glosses: {
          "notoriously": "used to emphasize that a quality or fact, typically a bad one, is well known",
          "defer": "put off (an action or event) to a later time; postpone",
          "passable": "clear of obstacles and able to be traveled along"
        }
      },
      {
        id: "WIC-G-02",
        type: "words-in-context",
        stage: "guided",
        difficulty: "Medium",
        passage: "The diplomat was renowned for her _______ demeanor during tense international negotiations; even when foreign ministers engaged in heated accusations, she remained entirely calm and composed, refusing to be drawn into emotional disputes.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) volatile",
          "B) impassioned",
          "C) unflappable",
          "D) combative"
        ],
        answer: "C",
        hints: [
          "Hint 1 (Nudge): Find the definition clue right after the semicolon: 'she remained entirely calm and composed, refusing to be drawn into emotional disputes.'",
          "Hint 2 (Strategy Reminder): The target word must match 'calm', 'composed', and 'unbothered by tension'.",
          "Hint 3 (Partial Solution): 'Volatile' (explosive), 'Impassioned' (emotional), and 'Combative' (eager to fight) are all the direct OPPOSITE of calm. Only Choice C works."
        ],
        trapTypes: {
          A: "Opposite",
          B: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice C is correct. 'Unflappable' means having or showing calmness in a crisis, which directly matches 'entirely calm and composed'. Choices A, B, and D all describe agitated or aggressive behavior.",
        glosses: {
          "unflappable": "having or showing marked calmness in a crisis; not easily upset",
          "volatile": "liable to change rapidly and unpredictably, especially for the worse",
          "combative": "ready or eager to fight; pugnacious"
        }
      },
      {
        id: "WIC-G-03",
        type: "words-in-context",
        stage: "guided",
        difficulty: "Medium",
        passage: "In his review of the new biography, the literary critic noted that while the author's prose was undeniably lucid, the book's narrative structure was surprisingly _______; chapters jumped erratically across decades without clear chronological or thematic progression.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) disjointed",
          "B) cohesive",
          "C) pristine",
          "D) monotonous"
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at the pivot 'while... prose was lucid' and the clue after the semicolon: 'jumped erratically across decades without clear... progression.'",
          "Hint 2 (Strategy Reminder): What simple word describes a structure that is fragmented, lacking smooth flow, and disconnected?",
          "Hint 3 (Partial Solution): 'Cohesive' means unified (Opposite). 'Pristine' means untouched/pure (Out of Scope). 'Monotonous' means boringly repetitive (Wrong concept). Choice A means lacking orderly connection."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Wrong Meaning"
        },
        explanation: "Choice A is correct. 'Disjointed' means lacking a coherent sequence or connection, directly mirroring 'jumped erratically across decades without clear... progression'. Choice B is the opposite.",
        glosses: {
          "lucid": "expressed clearly; easy to understand",
          "disjointed": "lacking a coherent sequence or connection",
          "erratically": "in a manner that is not even or regular in pattern; unpredictably"
        }
      },
      {
        id: "WIC-G-04",
        type: "words-in-context",
        stage: "guided",
        difficulty: "Hard",
        passage: "Unlike her predecessors, who treated traditional folkloric tales as mere children's entertainment, anthropologist Zora Neale Hurston recognized that these oral narratives were _______ historical repositories that documented the resilience, humor, and linguistic ingenuity of Southern African American communities.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) peripheral",
          "B) vital",
          "C) obsolete",
          "D) superficial"
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look for the contrast frame: 'Unlike her predecessors, who treated [them] as mere children's entertainment, Hurston recognized that [they] were [BLANK]...'",
          "Hint 2 (Strategy Reminder): Predecessors saw them as unimportant ('mere'). Hurston saw them as possessing great value ('documented resilience, humor, and ingenuity'). We need a strong positive word.",
          "Hint 3 (Partial Solution): 'Peripheral' (minor/edge), 'Obsolete' (outdated), and 'Superficial' (shallow) are all negative/dismissive words. Only Choice B provides the necessary high-value positive meaning."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice B is correct. 'Vital' means indispensable or of essential importance, contrasting with 'mere children's entertainment' and aligning with the deep cultural assets listed. Choices A, C, and D are all negative descriptors.",
        glosses: {
          "folkloric": "relating to traditional customs, tales, sayings, or art forms preserved among a people",
          "peripheral": "of secondary or minor importance; on the edge",
          "ingenuity": "the quality of being clever, original, and inventive",
          "obsolete": "no longer produced or used; out of date"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "WIC-I-01",
        type: "words-in-context",
        stage: "independent",
        difficulty: "Medium",
        passage: "Although many economists predicted that the introduction of automated kiosks would immediately eliminate service-sector jobs, recent employment surveys suggest that the machines have actually _______ worker productivity, allowing employees to spend less time on routine transactions and more time resolving complex customer inquiries.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) augmented",
          "B) undermined",
          "C) fabricated",
          "D) impeded"
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice A is correct. 'Augmented' means increased or made greater. The passage contrasts the fear of job elimination with the reality that machines allowed employees to spend more time on complex inquiries, enhancing productivity. Choices B and D ('undermined', 'impeded') mean reduced or harmed.",
        glosses: {
          "augmented": "having been made greater in size or value; increased",
          "undermined": "lessened the effectiveness, power, or ability of",
          "impeded": "delayed or prevented (someone or something) by obstructing them"
        }
      },
      {
        id: "WIC-I-02",
        type: "words-in-context",
        stage: "independent",
        difficulty: "Hard",
        passage: "In theoretical physics, string theory is often criticized because its foundational mathematical formulations require eleven dimensions, making experimental verification extraordinarily difficult. Consequently, several prominent physicists have labeled the theory _______, arguing that without falsifiable empirical predictions, it remains a purely mathematical conjecture rather than true physical science.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) speculative",
          "B) irrefutable",
          "C) tangible",
          "D) pedestrian"
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Opposite",
          D: "Wrong Meaning"
        },
        explanation: "Choice A is correct. 'Speculative' means based on conjecture rather than knowledge or evidence, matching 'purely mathematical conjecture' and 'without falsifiable empirical predictions'. Choice B ('irrefutable') means impossible to deny. Choice C ('tangible') means concrete/touchable. Choice D ('pedestrian') means dull or ordinary.",
        glosses: {
          "conjecture": "an opinion or conclusion formed on the basis of incomplete information",
          "falsifiable": "able to be proven false through empirical observation or testing",
          "speculative": "engaged in, expressing, or based on conjecture rather than knowledge",
          "irrefutable": "impossible to deny or disprove"
        }
      },
      {
        id: "WIC-I-03",
        type: "words-in-context",
        stage: "independent",
        difficulty: "Hard",
        passage: "Far from being a passive observer during the constitutional convention of 1787, James Madison was an _______ advocate for a strong national legislature, drafting the foundational Virginia Plan and authoring numerous essays to persuade skeptical delegates.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) apathetic",
          "B) indefatigable",
          "C) ambiguous",
          "D) impartial"
        ],
        answer: "B",
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice B is correct. 'Indefatigable' means persisting tirelessly. The sentence contrasts 'Far from being a passive observer' with Madison's active drafting and essay writing. Choice A ('apathetic') means uncaring. Choice D ('impartial') means neutral, whereas Madison took a strong, active stance.",
        glosses: {
          "indefatigable": "(of a person or their efforts) persisting tirelessly",
          "apathetic": "showing or feeling no interest, enthusiasm, or concern",
          "impartial": "treating all rivals or disputants equally; fair and just"
        }
      },
      {
        id: "WIC-I-04",
        type: "words-in-context",
        stage: "independent",
        difficulty: "Medium",
        passage: "The curator was careful to emphasize that the museum's new wing was not meant to _______ the historic 19th-century main hall, but rather to complement its classical stonework with minimalist glass and light.",
        question: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) eclipse",
          "B) celebrate",
          "C) preserve",
          "D) duplicate"
        ],
        answer: "A",
        trapTypes: {
          B: "Out of Scope",
          C: "Opposite",
          D: "Wrong Meaning"
        },
        explanation: "Choice A is correct. 'Eclipse' means to overshadow, surpass, or diminish the prominence of something else. The text contrasts 'not meant to eclipse' with 'rather to complement'. Choice C ('preserve') contradicts the contrast frame. Choice D ('duplicate') is negated by the mention of contrasting materials (minimalist glass vs. classical stonework).",
        glosses: {
          "eclipse": "(verb) to obscure, overshadow, or surpass in importance or prominence",
          "complement": "add to in a way that enhances or improves; to fit well together",
          "minimalist": "deliberately simple, clean, and uncluttered in style"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Words in Context Self-Audit",
      prompts: [
        { id: "wic-1", label: "I blank the word and predict a synonym BEFORE reading the four answer choices." },
        { id: "wic-2", label: "I identify the specific context clue sentence (contrast, definition, or cause-and-effect) that forces the meaning." },
        { id: "wic-3", label: "I avoid picking common dictionary definitions when the passage demands a secondary academic meaning." }
      ]
    }
  },

  // =========================================================================
  // MODULE 2: TEXT STRUCTURE & PURPOSE (CRAFT & STRUCTURE)
  // =========================================================================
  "MOD-2": {
    metadata: {
      id: "MOD-2",
      title: "Text Structure & Purpose",
      domain: "Craft & Structure",
      methodName: "The Blueprint Technique",
      tagline: "Distinguish WHAT the text says (content) from HOW it works (structure) and WHY the author wrote it (purpose)."
    },
    stage1_skill: {
      title: "What Does Text Structure & Purpose Test?",
      whatItTests: "This question type tests your understanding of rhetorical architecture. You must determine either: (1) The overall function/purpose of the entire passage, (2) The structural relationship between two paragraphs or two sentences, or (3) The specific rhetorical role of an underlined sentence.",
      frequency: "3 to 4 questions per module.",
      recognitionTest: "Common question stems include: 'Which choice best describes the overall structure of the text?', 'Which choice best states the main purpose of the text?', or 'Which choice best describes the function of the underlined portion?'",
      eslNote: "Answer choices for this type are written with active rhetorical verbs: 'introduces', 'critiques', 'reconciles', 'qualifies', 'provides an analogy'. Learn to evaluate whether the VERB accurately describes the author's action."
    },
    stage2_method: {
      name: "The Blueprint Technique",
      summary: "Map the passage into functional blocks rather than getting lost in the factual details.",
      steps: [
        {
          num: 1,
          title: "Divide into Functional Chunks",
          rule: "Split the passage into Part 1 (Sentence 1-2) and Part 2 (Remaining text).",
          expertMove: "I ask: 'Where is the structural joint?' usually marked by a transition or topic shift."
        },
        {
          num: 2,
          title: "Assign an Action Verb to Each Chunk",
          rule: "Label each chunk with a rhetorical action (e.g., [States old theory] -> [Provides counter-example]).",
          expertMove: "I never summarize what the text says; I summarize what the text DOES."
        },
        {
          num: 3,
          title: "Verify the Verb in the Choices",
          rule: "Match your two-part action blueprint against the verbs in the answer options.",
          expertMove: "If an option starts with 'Defends a controversial theory,' but the passage was attacking the theory, I kill it instantly on the verb."
        },
        {
          num: 4,
          title: "Differentiate Purpose from Detail",
          rule: "Beware of 'Half Right' traps that describe a true sub-point rather than the passage's overall mission.",
          expertMove: "A supporting example is not the overall purpose; it is merely evidence for the purpose."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "TSP-W-01",
        type: "text-structure-purpose",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "In 1912, Alfred Wegener proposed the theory of continental drift, hypothesizing that Earth's landmasses were once joined in a supercontinent he named Pangaea. At the time, prominent geologists overwhelmingly dismissed Wegener's ideas because he could not propose a convincing physical mechanism capable of propelling entire continents across solid oceanic crust. Decades later, however, the mapping of the mid-Atlantic ridge and the discovery of seafloor spreading provided the missing geophysical mechanism, transforming Wegener's once-ridiculed hypothesis into the bedrock of modern plate tectonics.",
        question: "Which choice best describes the overall structure of the text?",
        choices: [
          "A) It introduces a scientific hypothesis, explains why it was initially rejected, and then describes the later discoveries that validated it.",
          "B) It compares two competing geological theories and concludes that neither is supported by empirical observations.",
          "C) It presents a historical timeline of technological inventions that allowed researchers to map the mid-Atlantic seabed.",
          "D) It details a prevailing geological consensus and argues that modern plate tectonics has become fundamentally outdated."
        ],
        answer: "A",
        thinkAloud: [
          "Step 1 (Chunk the Text): Chunk 1 = Wegener proposes continental drift (Sentence 1). Chunk 2 = Geologists dismiss it due to lack of mechanism (Sentence 2). Chunk 3 = 'Decades later, however...' seafloor spreading provides the mechanism and validates it (Sentence 3).",
          "Step 2 (Assign Action Verbs): [Introduces hypothesis] -> [Explains initial rejection] -> [Describes later validation].",
          "Step 3 (Match with Choices): Look at Choice A: 'introduces a scientific hypothesis' (Chunk 1), 'explains why it was initially rejected' (Chunk 2), 'describes the later discoveries that validated it' (Chunk 3). It is a 1-to-1 blueprint match.",
          "Step 4 (Eliminate Traps): Choice B is 'Opposite' (says neither is supported). Choice C is 'Half Right / Too Narrow' (focuses on seabed mapping technology). Choice D is 'Opposite' (says plate tectonics is outdated). Choose A."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Half Right",
          D: "Opposite"
        },
        explanation: "Choice A is correct because it matches the chronological and rhetorical progression: introduction of Wegener's idea -> explanation of initial rejection due to missing mechanism -> description of how seafloor spreading later validated it. Choices B and D misstate the conclusion, and Choice C focuses narrowly on a single detail.",
        glosses: {
          "continental drift": "the gradual movement of the continents across the earth's surface through geological time",
          "orthodoxy": "authorized or generally accepted theory or practice",
          "bedrock": "the fundamental principles or foundation on which something is based",
          "geophysical": "relating to the physics of the earth and its environment"
        }
      },
      {
        id: "TSP-W-02",
        type: "text-structure-purpose",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "Many literary historians have characterized Mary Shelley's *Frankenstein* (1818) exclusively as a cautionary tale warning against unfettered scientific hubris. <u>Yet this narrow reading overlooks Shelley's intense engagement with contemporary socio-political philosophy.</u> Throughout the novel, the creature's monstrous descent is driven not by inherently evil biology, but by the relentless social ostracization, cruelty, and emotional abandonment he experiences at the hands of human society.",
        question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
        choices: [
          "A) It establishes an analogy between the monster's physical appearance and 19th-century scientific instruments.",
          "B) It introduces the author's primary counter-claim against a prevailing critical interpretation of the novel.",
          "C) It provides statistical evidence demonstrating that Shelley's novel was unpopular among 19th-century readers.",
          "D) It concedes that the novel's main theme is indeed the dangerous ambition of modern scientists."
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Analyze the Surrounding Context): Sentence 1 states the common critical view ('exclusively as a cautionary tale...'). The underlined sentence pivots: 'Yet this narrow reading overlooks...'. Sentence 3 explains the overlooked sociological theme.",
          "Step 2 (Determine Rhetorical Function): The underlined sentence acts as the thesis pivot—it challenges the common view and asserts that a deeper socio-political layer exists.",
          "Step 3 (Evaluate Action Verbs): We need a choice that says 'challenges a common interpretation' or 'introduces a counter-claim'.",
          "Step 4 (Filter Choices): Choice B says: 'introduces the author's primary counter-claim against a prevailing critical interpretation.' (Exact match). Choice A is Out of Scope (no analogy). Choice C is Out of Scope (no statistics/popularity). Choice D is an Opposite trap. Select B."
        ],
        trapTypes: {
          A: "Out of Scope",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice B accurately states the function of the underlined sentence: by opening with 'Yet this narrow reading overlooks...', the author directly pushes back against the prevailing critical interpretation mentioned in sentence 1 and introduces the counter-claim developed in the rest of the passage.",
        glosses: {
          "unfettered": "not restrained or restricted; uncontrolled",
          "hubris": "excessive pride or dangerous self-confidence",
          "ostracization": "exclusion or banishment from a society or group",
          "counter-claim": "a claim made to rebut, challenge, or oppose a previous assertion"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "TSP-TRAP-01",
        stem: "Text: 'While traditional historians credited the industrial revolution solely to steam engine patents, recent archival economic studies emphasize the pivotal role of agricultural yield surpluses in creating urban labor pools.'",
        wrongChoice: "To prove that steam engines were completely useless during the 19th century.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Opposite", "Half Right", "Out of Scope"],
        rationale: "'Completely useless' is an extreme distortion. The author acknowledges steam engines were credited, but qualifies this by showing agricultural yields were also critical."
      },
      {
        id: "TSP-TRAP-02",
        stem: "Text: 'The author opens by describing a common culinary misconception, illustrates it with a baking experiment, and concludes by providing a chemical explanation for why yeast responds to temperature.'",
        wrongChoice: "To provide step-by-step instructions for baking a loaf of sourdough bread at home.",
        correctTrap: "Half Right",
        options: ["Half Right", "Too Extreme", "Out of Scope", "Opposite"],
        rationale: "While baking is used as an illustrative example, the overall purpose of the passage is explaining the underlying science of yeast and correcting a misconception, not offering a practical kitchen recipe."
      },
      {
        id: "TSP-TRAP-03",
        stem: "Text: 'The passage explores whether decentralized solar microgrids can stabilize rural electrification, examines three pilot programs in Kenya, and highlights their cost-effectiveness.'",
        wrongChoice: "It condemns international aid organizations for failing to invest in national electric power plants.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Opposite", "Too Extreme", "Half Right"],
        rationale: "The passage discusses the success of solar microgrids in Kenya. Condemning aid organizations or national power plants is an unmentioned outside topic."
      },
      {
        id: "TSP-TRAP-04",
        stem: "Text: 'Sentence 1 establishes that sleep deprivation impairs memory consolidation. Sentence 2 details how slow-wave brain oscillations during deep sleep transfer short-term memories into the neocortex.'",
        wrongChoice: "Sentence 2 refutes the biological premise introduced in Sentence 1.",
        correctTrap: "Opposite",
        options: ["Opposite", "Half Right", "Too Extreme", "Out of Scope"],
        rationale: "Sentence 2 supports and explains the mechanism behind Sentence 1; it does not refute or contradict it."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "TSP-G-01",
        type: "text-structure-purpose",
        stage: "guided",
        difficulty: "Easy",
        passage: "Biomimicry is the practice of looking to nature for solutions to complex engineering challenges. For example, the high-speed Japanese Shinkansen bullet train originally generated a deafening sonic boom whenever it exited tunnels at high speeds. Engineer Eiji Nakatsu resolved this dilemma by redesigning the train's nose to mimic the streamlined beak of the kingfisher bird, which dives seamlessly into water with minimal splash and resistance.",
        question: "Which choice best describes the main purpose of the text?",
        choices: [
          "A) To argue that modern high-speed trains are too hazardous for urban transportation.",
          "B) To illustrate the concept of biomimicry by explaining a specific engineering problem and its biological solution.",
          "C) To provide a detailed anatomical description of the kingfisher's respiratory system.",
          "D) To prove that nature has provided the blueprint for every modern machine in existence."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the first sentence ('Biomimicry is the practice of...') and note how the train story connects to it via 'For example'.",
          "Hint 2 (Strategy Reminder): Apply Step 2 of the Blueprint Technique: What is the relationship between the definition in sentence 1 and the example in sentences 2-3?",
          "Hint 3 (Partial Solution): Choice A is negative/unsupported. Choice C is a tiny detail (Half Right). Choice D uses extreme language ('every modern machine in existence'). Choice B captures definition + illustrative example."
        ],
        trapTypes: {
          A: "Out of Scope",
          C: "Half Right",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. Sentence 1 defines biomimicry, and the rest of the text provides a specific case study (the Shinkansen train nose inspired by the kingfisher's beak) to demonstrate how nature inspired an engineering solution. Choice D is too extreme.",
        glosses: {
          "biomimicry": "the design and production of materials, structures, and systems that are modeled on biological entities and processes",
          "deafening": "extremely loud; overpowering in sound",
          "streamlined": "designed or organized to offer the least resistance to fluid or air flow"
        }
      },
      {
        id: "TSP-G-02",
        type: "text-structure-purpose",
        stage: "guided",
        difficulty: "Medium",
        passage: "For centuries, the origin of the Indus Valley Civilization's enigmatic script remained a major scholarly impasse, with epigraphers debating whether the inscriptions represented a spoken Dravidian tongue, an Indo-European dialect, or a purely non-linguistic symbol system. <u>Recently, computational linguist Rajesh Rao applied conditional entropy algorithms to compare the script against known human languages and non-linguistic data sets.</u> Rao's statistical models demonstrated that the script's pattern regularity falls squarely within the range of natural spoken languages, effectively ruling out the non-linguistic symbol hypothesis.",
        question: "Which choice best describes the function of the underlined sentence?",
        choices: [
          "A) It introduces a novel computational method used to investigate a long-standing scholarly debate.",
          "B) It concedes that the Indus Valley script can never be deciphered by modern linguistic techniques.",
          "C) It summarizes the final grammatical rules of the Indus Valley language.",
          "D) It demonstrates that human speech patterns are fundamentally unpredictable."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at what comes before the underlined sentence ('scholarly impasse... debating whether...') and what comes after ('Rao's statistical models demonstrated...').",
          "Hint 2 (Strategy Reminder): The underlined sentence describes Rajesh Rao applying 'conditional entropy algorithms'. How does this connect the unresolved debate to the new finding?",
          "Hint 3 (Partial Solution): The underlined sentence introduces the technological tool/approach (computational method) that broke the historical impasse. Look for the choice stating 'introduces a novel computational method'."
        ],
        trapTypes: {
          B: "Too Extreme",
          C: "Half Right",
          D: "Opposite"
        },
        explanation: "Choice A accurately identifies the sentence's function: it introduces Rajesh Rao's use of computational conditional entropy algorithms as a new method to address the historical debate outlined in sentence 1. Choice B is too pessimistic/extreme. Choice C overstates the outcome (grammar rules were not established).",
        glosses: {
          "enigmatic": "difficult to interpret or understand; mysterious",
          "impasse": "a situation in which no progress is possible, especially because of disagreement; a deadlock",
          "epigraphers": "scholars who study and interpret ancient inscriptions or engravings",
          "conditional entropy": "a statistical measure of the unpredictability or information content in sequences"
        }
      },
      {
        id: "TSP-G-03",
        type: "text-structure-purpose",
        stage: "guided",
        difficulty: "Medium",
        passage: "In standard neoclassical macroeconomics, high inflation is attributed almost exclusively to an excessive expansion of the money supply by central banks. Sociologist Greta Krippner, however, offers an alternative perspective, demonstrating that the severe inflation of the 1970s was deeply tied to political struggles over income distribution. When governments lacked the political capital to allocate fiscal burdens directly, they allowed wage-price spirals to proliferate as a temporary political compromise, effectively deferring structural economic conflict.",
        question: "Which choice best describes the overall structure of the text?",
        choices: [
          "A) It establishes an economic principle, provides statistical data proving its universal validity, and calls for stricter monetary regulation.",
          "B) It outlines a conventional economic explanation for a phenomenon and then presents a sociological framework that interprets it differently.",
          "C) It compares two sociological theories of political compromise and concludes that both are fundamentally flawed.",
          "D) It chronicles the historical development of central banking systems from the 18th century to the present day."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Spot the pivot word 'however' in the second sentence. What two fields are contrasted?",
          "Hint 2 (Strategy Reminder): Sentence 1 = neoclassical macroeconomics view. Sentence 2-3 = Greta Krippner's sociological perspective. How does the passage move?",
          "Hint 3 (Partial Solution): Choice B matches: 'conventional economic explanation' -> 'sociological framework that interprets it differently'. Check why Choice A and C fail."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice B is correct. The text begins with the orthodox neoclassical explanation for inflation (money supply expansion) and then introduces Krippner's sociological research showing how 1970s inflation was driven by political distribution conflicts. Choice A is the opposite of the passage's intent. Choice D is out of scope.",
        glosses: {
          "neoclassical": "relating to a mainstream approach to economics focusing on the determination of goods, outputs, and income distributions via supply and demand",
          "proliferate": "increase rapidly in numbers; multiply",
          "deferring": "putting off an action or conflict to a later time"
        }
      },
      {
        id: "TSP-G-04",
        type: "text-structure-purpose",
        stage: "guided",
        difficulty: "Hard",
        passage: "In 1854, during a catastrophic cholera outbreak in London's Soho district, prevailing medical dogma insisted that the disease was transmitted through 'miasma'—noxious air arising from decaying organic matter. Physician John Snow rejected this atmospheric theory. By meticulously plotting cholera deaths on a street map and interviewing residents, Snow demonstrated that infections clustered exclusively around the Broad Street water pump. When Snow persuaded local authorities to remove the pump handle, new infections plummeted, inaugurating the field of modern spatial epidemiology.",
        question: "Which choice best describes the function of the reference to the 'miasma' theory in the text?",
        choices: [
          "A) It highlights the prevailing, incorrect belief that John Snow's empirical investigation successfully disproved.",
          "B) It provides the scientific evidence that John Snow utilized to convince the city council to remove the pump handle.",
          "C) It explains why London officials refused to allow John Snow to construct a street map of cholera deaths.",
          "D) It demonstrates that cholera is an airborne pathogen that cannot be spread through municipal water sources."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): What does the passage call the miasma theory? ('prevailing medical dogma'). Did Snow agree or disagree?",
          "Hint 2 (Strategy Reminder): The text says 'Snow rejected this atmospheric theory' and proved water contamination instead.",
          "Hint 3 (Partial Solution): The reference to miasma sets up the baseline incorrect belief that Snow had to overturn. Look for Choice A."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice A accurately describes the role of the miasma theory: it establishes the dominant, erroneous medical belief of the era, which provides the necessary context for understanding the significance of John Snow's waterborne discovery. Choice B contradicts the text (miasma was what Snow disproved, not what he used as evidence).",
        glosses: {
          "dogma": "a principle or set of principles laid down by an authority as incontrovertibly true",
          "miasma": "an oppressive or unpleasant atmosphere which was historically thought to emanate from the earth and cause disease",
          "noxious": "harmful, poisonous, or very unpleasant",
          "spatial epidemiology": "the study of the geographical variation in disease risk or incidence"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "TSP-I-01",
        type: "text-structure-purpose",
        stage: "independent",
        difficulty: "Medium",
        passage: "Many agricultural researchers have celebrated precision farming—the use of GPS, drone imagery, and soil sensors to apply fertilizers only where needed—as an unqualified environmental victory. However, rural sociologists caution that the steep capital costs of precision hardware tend to accelerate farm consolidation, forcing smaller family farms out of business while enriching massive agribusiness conglomerates.",
        question: "Which choice best states the primary purpose of the text?",
        choices: [
          "A) To advocate for a complete ban on GPS-guided agricultural machinery in modern farming.",
          "B) To present a technological innovation in agriculture and highlight a negative socioeconomic consequence associated with its adoption.",
          "C) To describe the precise technical specifications of drone cameras used in modern agriculture.",
          "D) To prove that family-owned farms produce higher crop yields than large corporate conglomerates."
        ],
        answer: "B",
        trapTypes: {
          A: "Too Extreme",
          C: "Half Right",
          D: "Out of Scope"
        },
        explanation: "Choice B is correct. The text introduces precision farming (the technological innovation) and then highlights how its high cost contributes to farm consolidation and harms family farms (a negative socioeconomic consequence). Choice A is too extreme. Choice C is too narrow. Choice D is unsupported.",
        glosses: {
          "precision farming": "farming management concept based on observing, measuring, and responding to inter and intra-field variability in crops",
          "consolidation": "the combination of many separate entities or small businesses into a single large system",
          "conglomerates": "large corporations formed by the merging of separate and diverse firms"
        }
      },
      {
        id: "TSP-I-02",
        type: "text-structure-purpose",
        stage: "independent",
        difficulty: "Hard",
        passage: "In materials science, developing polymers that are both extraordinarily rigid and easily recyclable has long posed a chemical paradox: rigidity requires permanent covalent cross-linking between molecular chains, whereas easy recyclability requires weak bonds that can be disassembled by heat. <u>Recently, chemist Jianing Zhang synthesised a class of 'vitrimers' containing dynamic covalent bonds that remain stable at room temperature but exchange partners when heated above 150°C.</u> This molecular architecture allows the material to retain the mechanical strength of thermoset plastics while permitting repeated reprocessing.",
        question: "Which choice best describes the function of the underlined sentence in the overall passage?",
        choices: [
          "A) It introduces a chemical breakthrough that resolves the trade-off described earlier in the text.",
          "B) It demonstrates why vitrimers are unsuitable for any commercial manufacturing applications.",
          "C) It provides historical context on the discovery of rubber vulcanization in the 19th century.",
          "D) It proves that heating plastics above 150°C invariably causes irreversible structural degradation."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice A accurately describes the function: sentence 1 poses a chemical paradox (trade-off between rigidity and recyclability), and the underlined sentence introduces Zhang's synthesized vitrimers as the breakthrough that solves this trade-off. Choice B and D contradict the positive achievement described.",
        glosses: {
          "covalent bonds": "chemical bonds formed by the sharing of electron pairs between atoms",
          "thermoset plastics": "polymers that become permanently rigid when cured and cannot be remelted",
          "vitrimers": "a class of plastics with dynamic cross-links that can flow and be reprocessed when heated"
        }
      },
      {
        id: "TSP-I-03",
        type: "text-structure-purpose",
        stage: "independent",
        difficulty: "Hard",
        passage: "Early 20th-century ethnomusicologists often recorded Indigenous folksongs with the stated aim of 'salvaging' dying cultures before they assimilated into modern Western society. Contemporary musicologist Beverly Diamond critiques this salvage framework as fundamentally paternalistic. She argues that Indigenous musical traditions were never static relics doomed to extinction, but rather dynamic, evolving practices through which communities actively assert sovereignty and adapt to historical change.",
        question: "Which choice best describes the overall structure of the text?",
        choices: [
          "A) It presents an early academic approach to a subject and then discusses a modern critique that reinterprets that subject's nature.",
          "B) It describes a musical notation system, explains its mathematical complexity, and advocates for its adoption in public schools.",
          "C) It details a dispute between two 20th-century field researchers regarding the audio quality of wax cylinder recordings.",
          "D) It establishes that traditional Indigenous songs have completely ceased to exist in the contemporary era."
        ],
        answer: "A",
        trapTypes: {
          B: "Out of Scope",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice A captures the rhetorical movement: Sentence 1 introduces the early 'salvage' approach of ethnomusicologists, while Sentences 2-3 describe Beverly Diamond's critique, which reconceptualizes Indigenous music as dynamic and sovereign. Choices B and C mention outside topics. Choice D is the opposite of Diamond's stance.",
        glosses: {
          "ethnomusicologists": "scholars who study the music of different cultures, especially non-Western traditions",
          "paternalistic": "governing or treating people in a fatherly manner, especially by providing for their needs without giving them rights or autonomy",
          "sovereignty": "the authority of a state or people to govern themselves"
        }
      },
      {
        id: "TSP-I-04",
        type: "text-structure-purpose",
        stage: "independent",
        difficulty: "Medium",
        passage: "In 1798, Thomas Malthus published his *Essay on the Principle of Population*, arguing that because human population grows geometrically while food production increases only arithmetically, mass famine was mathematically inevitable. <u>Yet Malthus failed to foresee the Haber-Bosch process and genetic hybridization, which exponentially multiplied agricultural yields throughout the 20th century.</u> Consequently, global food production has outpaced population growth, though political distribution inequalities continue to cause localized food insecurity.",
        question: "Which choice best describes the function of the underlined sentence in the text?",
        choices: [
          "A) It provides historical validation for Malthus's mathematical population projections.",
          "B) It identifies specific technological innovations that undermined the premise of Malthus's dire prediction.",
          "C) It argues that synthetic fertilizers should be banned to protect global biodiversity.",
          "D) It proves that hunger has been completely and permanently eliminated worldwide."
        ],
        answer: "B",
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. Sentence 1 outlines Malthus's prediction of inevitable famine. The underlined sentence introduces the unforeseen technological breakthroughs (Haber-Bosch process, hybridization) that multiplied food yields and undermined Malthus's forecast. Choice A is the opposite. Choice D is an extreme claim refuted by the final clause.",
        glosses: {
          "geometrically": "increasing at a constant ratio or exponential rate (e.g., 2, 4, 8, 16)",
          "arithmetically": "increasing at a constant additive rate (e.g., 2, 4, 6, 8)",
          "Haber-Bosch process": "an industrial chemical process that synthesizes ammonia from nitrogen and hydrogen for fertilizers",
          "hybridization": "the process of cross-breeding different varieties or species to create hardier offspring"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Text Structure & Purpose Self-Audit",
      prompts: [
        { id: "tsp-1", label: "I can identify the structural pivot (where the text shifts from introduction to critique, evidence, or resolution)." },
        { id: "tsp-2", label: "I evaluate answer choices by looking at the active rhetorical verbs (introduces, critiques, qualifies) rather than just topic words." },
        { id: "tsp-3", label: "I can distinguish between a specific detail used as evidence and the overall purpose of the entire passage." }
      ]
    }
  },

  // =========================================================================
  // MODULE 3: CROSS-TEXT CONNECTIONS (CRAFT & STRUCTURE)
  // =========================================================================
  "MOD-3": {
    metadata: {
      id: "MOD-3",
      title: "Cross-Text Connections",
      domain: "Craft & Structure",
      methodName: "The Venn Bridge Protocol",
      tagline: "Isolate Text 1's thesis, isolate Text 2's thesis, identify the logical bridge, and never mix up the perspective direction."
    },
    stage1_skill: {
      title: "What Does Cross-Text Connections Test?",
      whatItTests: "Cross-Text Connections presents two paired passages (Text 1 and Text 2) on the same topic and asks you to evaluate how the author of one text would respond to the findings, claims, or perspective of the other.",
      frequency: "1 to 2 questions per module.",
      recognitionTest: "The question stem typically asks: 'Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 regarding [X]?' or 'Which choice best describes a shared assumption between both authors?'",
      eslNote: "The #1 hazard here is 'Perspective Reversal'—choosing an option that accurately represents Author 1's opinion when the question asked for Author 2's reaction to Author 1."
    },
    stage2_method: {
      name: "The Venn Bridge Protocol",
      summary: "A rigorous 4-step synthesis workflow to lock down dual viewpoints.",
      steps: [
        {
          num: 1,
          title: "Summarize Text 1 in One Sentence",
          rule: "Identify Text 1's central claim and author's tone (+, -, or ~).",
          expertMove: "I write a mental note: 'Text 1: Reintroduction of wolves restored riverbanks (Enthusiastic +)'."
        },
        {
          num: 2,
          title: "Summarize Text 2 in One Sentence",
          rule: "Identify Text 2's stance on the exact same subject.",
          expertMove: "I write a mental note: 'Text 2: Willow recovery was caused by hydrology changes, not wolves (Skeptical -)'."
        },
        {
          num: 3,
          title: "Classify the Bridge Relationship",
          rule: "Determine whether Text 2: (A) Fully agrees, (B) Directly contradicts, (C) Qualifies/Limits scope, or (D) Offers alternative explanation.",
          expertMove: "Text 2 doesn't deny the willow recovery, but attributes it to a different cause (Alternative Explanation)."
        },
        {
          num: 4,
          title: "Verify Perspective Direction",
          rule: "Re-read the question stem to make 100% sure you are answering from the requested author's point of view.",
          expertMove: "If asked 'How would Author 2 respond?', I channel Author 2's skepticism toward Author 1's conclusion."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "CTC-W-01",
        type: "cross-text-connections",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>For decades, primatologists maintained that tool use was a uniquely hominid adaptation that catalyzed human cognitive evolution. However, extensive field observations of wild New Caledonian crows (*Corvus moneduloides*) have overturned this assumption. These birds systematically fashion hooked twigs and barbed leaves to extract grubs from tree bark, displaying sophisticated multi-step problem solving without possessing mammalian neocortical brain structures.<br><br><b>Text 2</b><br>While cognitive biologist Alex Kacelnik acknowledges the remarkable tool-making dexterity of New Caledonian crows, he cautions against equating avian tool behavior with human-style cumulative culture. Human technology relies on social transmission, teaching, and iterative generational improvement. In contrast, laboratory experiments demonstrate that isolated crows raised in complete isolation from adult conspecifics still instinctively construct hooked tools, suggesting that their behavior is largely an innate genetic adaptation rather than learned cultural innovation.",
        question: "Based on the texts, how would Kacelnik (Text 2) most likely respond to the characterization of crow tool use in Text 1?",
        choices: [
          "A) By arguing that wild New Caledonian crows do not actually use tools to forage for grubs in the wild.",
          "B) By conceding that crow tool fabrication relies on the same mammalian neocortical structures found in hominids.",
          "C) By agreeing that crows exhibit complex tool-making abilities while disputing that their behavior represents learned cultural transmission.",
          "D) By asserting that human technological development is entirely driven by innate genetic instincts rather than social learning."
        ],
        answer: "C",
        thinkAloud: [
          "Step 1 (Analyze Text 1): Author 1 says crow tool-making disproves that tool use is uniquely human and shows sophisticated problem solving without mammalian brain structures.",
          "Step 2 (Analyze Text 2): Author 2 (Kacelnik) agrees crows have 'remarkable tool-making dexterity', BUT cautions against equating it with human culture because isolated crows still make tools instinctively (innate genetic adaptation, not social learning).",
          "Step 3 (Bridge Relationship): Kacelnik partially agrees with the ability (dexterity) but qualifies/limits the cognitive interpretation (innate vs. learned cultural transmission).",
          "Step 4 (Test Choices): Choice A is 'Opposite' (Text 2 acknowledges dexterity). Choice B contradicts both texts (crows lack mammalian neocortex). Choice D reverses Text 2's description of humans (human tech relies on social transmission). Choice C perfectly matches the nuance of Text 2."
        ],
        trapTypes: {
          A: "Opposite",
          B: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice C is correct because Kacelnik in Text 2 acknowledges the 'remarkable tool-making dexterity' of the crows (agreeing they make complex tools) but argues their behavior is an 'innate genetic adaptation' rather than learned cultural transmission. Choice A contradicts Text 2. Choice B misstates anatomy. Choice D reverses Kacelnik's description of human technology.",
        glosses: {
          "hominid": "a primate of a family (Hominidae) that includes humans and their fossil ancestors",
          "dexterity": "skill in performing tasks, especially with the hands or appendages",
          "cumulative culture": "the transmission and progressive improvement of knowledge and technology across generations",
          "conspecifics": "members of the same biological species"
        }
      },
      {
        id: "CTC-W-02",
        type: "cross-text-connections",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>The 'Great Divergence'—the historical phenomenon whereby Western European economies leaped ahead of Asian economies in the 18th and 19th centuries—is frequently attributed by institutional economists to Europe's superior property rights, legal contracts, and financial markets, which incentivized capital investment and industrial innovation.<br><br><b>Text 2</b><br>Historian Kenneth Pomeranz disputes this Eurocentric narrative, noting that around 1750, core commercial regions in China, such as the Yangtze Delta, possessed land markets, commercial law, and labor mobility that were just as robust as those in Britain. Instead, Pomeranz argues that Britain's breakthrough was driven by fortuitous geographical accidents: easily accessible domestic coal deposits and access to resource-rich American colonial ghost acreage.",
        question: "Based on the texts, how would Pomeranz (Text 2) most likely respond to the institutional economists mentioned in Text 1?",
        choices: [
          "A) By arguing that Britain was impoverished compared to China because British financial markets were non-existent.",
          "B) By contending that institutional property rights were not unique to Western Europe and that geographical advantages were the primary catalyst.",
          "C) By claiming that China industrialized fifty years earlier than Great Britain due to coal mining in the Yangtze Delta.",
          "D) By agreeing that institutional legal frameworks were the sole cause of the Industrial Revolution."
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Isolate Text 1): Institutional economists claim Europe leaped ahead because of superior property rights, legal contracts, and financial markets.",
          "Step 2 (Isolate Text 2): Pomeranz says China's Yangtze Delta had property and commercial markets just as robust as Britain's (so institutions weren't unique/superior); instead, Britain won due to coal deposits and colonial land access.",
          "Step 3 (Bridge): Pomeranz rejects the institutional superiority thesis and replaces it with geography and resources.",
          "Step 4 (Evaluate Choices): Choice A is extreme and unsupported. Choice C is historically opposite. Choice D is an opposite/perspective trap. Choice B matches Pomeranz's exact two-part counter-argument."
        ],
        trapTypes: {
          A: "Too Extreme",
          C: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice B is correct. Pomeranz points out that property rights and commercial markets in the Yangtze Delta were just as robust as those in Britain (challenging the institutional uniqueness claim) and argues that geographic proximity to coal and colonial resources was the decisive catalyst. Choice D represents Text 1's view, not Pomeranz's.",
        glosses: {
          "Great Divergence": "the process by which the Western world became much wealthier and technologically advanced than the rest of the world in the 18th-19th centuries",
          "incentivized": "provided with an incentive or motivation to do something",
          "fortuitous": "happening by a lucky chance; fortunate",
          "ghost acreage": "additional land outside a nation's borders (e.g., colonies) used to provide resources and food"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "CTC-TRAP-01",
        stem: "Text 1 claims a new drug cured 95% of patients. Text 2 notes the trial lacked a placebo control group and only tested mild cases.",
        wrongChoice: "The author of Text 2 agrees that the drug has been conclusively proven safe and effective for all medical conditions.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Opposite", "Half Right", "Out of Scope"],
        rationale: "Text 2 is critical and cautious. Stating that Author 2 agrees it is 'conclusively proven safe and effective for all conditions' makes an extreme, unfounded leap that reverses Author 2's skeptical stance."
      },
      {
        id: "CTC-TRAP-02",
        stem: "Text 1 asserts that Shakespeare wrote all 37 plays attributed to him. Text 2 suggests Edward de Vere co-authored several late comedies.",
        wrongChoice: "The author of Text 2 agrees with Text 1 that Shakespeare was the sole author of every comedy in the first folio.",
        correctTrap: "Opposite",
        options: ["Opposite", "Too Extreme", "Half Right", "Out of Scope"],
        rationale: "Text 2 specifically argues for co-authorship by Edward de Vere. Saying Author 2 agrees Shakespeare was the 'sole author' directly flips the author's stated counter-hypothesis."
      },
      {
        id: "CTC-TRAP-03",
        stem: "Text 1 discusses the migration routes of monarch butterflies. Text 2 analyzes the nutritional value of milkweed plants for caterpillars.",
        wrongChoice: "The author of Text 2 argues that monarch butterflies should be classified as a pest species and eradicated from farmland.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Too Extreme", "Opposite", "Wrong Meaning"],
        rationale: "Neither text mentions classifying butterflies as pests or eradicating them. This introduces an entirely fabricated outside claim."
      },
      {
        id: "CTC-TRAP-04",
        stem: "Question: 'How would Author 1 respond to the study cited in Text 2?' Text 1 believes organic farming has lower yields.",
        wrongChoice: "Author 2 demonstrated that organic farming techniques improved soil microbial diversity by 40%.",
        correctTrap: "Half Right",
        options: ["Half Right", "Opposite", "Too Extreme", "Out of Scope"],
        rationale: "This choice accurately summarizes a fact from Text 2, but it completely fails to answer the question stem, which asked how AUTHOR 1 would react to it."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "CTC-G-01",
        type: "cross-text-connections",
        stage: "guided",
        difficulty: "Medium",
        passage: "<b>Text 1</b><br>Advocates of remote work contend that eliminating daily commutes significantly enhances employee well-being and productivity. By giving workers autonomy over their physical environment and schedules, companies observe lower burnout rates and higher employee retention.<br><br><b>Text 2</b><br>While organizational psychologist David Chen acknowledges that remote work provides individual flexibility, he points out that informal, spontaneous workplace interactions—the unplanned 'watercooler conversations'—are essential for cross-departmental innovation. In entirely remote environments, communication becomes siloed, ultimately reducing the generation of novel corporate ideas.",
        question: "Based on the texts, how would David Chen (Text 2) most likely characterize the view expressed by the advocates in Text 1?",
        choices: [
          "A) As an outright falsehood that has caused every remote company to immediately go bankrupt.",
          "B) As an accurate assessment of individual benefits that nevertheless overlooks the collective long-term costs to collaborative innovation.",
          "C) As a flawed economic theory that overestimates the importance of spontaneous employee discussions.",
          "D) As an indisputable proof that all in-person office spaces should be permanently closed."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the opening concession in Text 2: 'While... Chen acknowledges that remote work provides individual flexibility, he points out that...'",
          "Hint 2 (Strategy Reminder): Apply the Venn Bridge: Chen doesn't deny individual benefits (well-being/autonomy), but he adds a neglected downside (loss of spontaneous collaboration).",
          "Hint 3 (Partial Solution): Choice A and D are Too Extreme. Choice C says Chen thinks spontaneous discussion is unimportant (Opposite). Choice B captures the balanced assessment: individual benefits are real, but collaborative innovation suffers."
        ],
        trapTypes: {
          A: "Too Extreme",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. Chen concedes that remote work provides flexibility (individual benefits) but argues that it harms cross-departmental innovation and creative collaboration (collective costs). Choices A and D are too extreme. Choice C reverses Chen's belief in the value of spontaneous conversations.",
        glosses: {
          "autonomy": "the right or condition of self-government; freedom from external control",
          "siloed": "isolated from other departments, teams, or groups in an organization",
          "watercooler conversations": "informal, casual conversations among coworkers in an office setting"
        }
      },
      {
        id: "CTC-G-02",
        type: "cross-text-connections",
        stage: "guided",
        difficulty: "Medium",
        passage: "<b>Text 1</b><br>Ecologist Elena Gomez argues that planting monoculture forests of fast-growing commercial pine is an effective, rapid strategy for carbon sequestration. Her field measurements indicate that young pine plantations absorb atmospheric carbon dioxide at twice the annual rate of mature, slow-growing native oak woodlands.<br><br><b>Text 2</b><br>Conservation biologist Marcus Vance cautions that measuring short-term carbon uptake in pine monocultures presents a misleading picture of ecological stability. Monoculture plantations are exceptionally vulnerable to pest infestations and wildfires, both of which abruptly release sequestered carbon back into the atmosphere. Vance contends that biodiverse native forests, while slower to mature, provide far more secure, resilient long-term carbon storage.",
        question: "Based on the texts, how does Vance (Text 2) differ from Gomez (Text 1) regarding forest management for carbon storage?",
        choices: [
          "A) Vance believes that oak woodlands absorb carbon faster than pine plantations in their first five years.",
          "B) Vance prioritizes the long-term ecological resilience and security of carbon storage over rapid short-term uptake rates.",
          "C) Vance argues that planting trees has no measurable impact on atmospheric carbon dioxide concentrations.",
          "D) Vance contends that pine monocultures are completely immune to pest outbreaks and environmental disturbances."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Contrast Gomez's focus on 'rapid annual uptake' with Vance's emphasis on 'secure, resilient long-term carbon storage'.",
          "Hint 2 (Strategy Reminder): Vance highlights the vulnerability of pine to pests and wildfires. Why does this make him favor native forests?",
          "Hint 3 (Partial Solution): Choice A contradicts the text (Gomez's data shows pine absorbs faster initially). Choice C is unsupported. Choice D is the opposite of Vance's point. Choice B accurately captures Vance's core distinction."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice B is correct. Gomez focuses on rapid, high-rate carbon uptake in pine plantations, while Vance argues that the risk of pests and fires in monocultures makes biodiverse native forests a more resilient, secure option for long-term storage. Choice A contradicts the data. Choice D reverses Vance's warning about pests.",
        glosses: {
          "monoculture": "the cultivation or growth of a single crop or plant species in a given area",
          "carbon sequestration": "the process of capturing and storing atmospheric carbon dioxide",
          "biodiverse": "containing a wide variety of plant and animal species in an ecosystem"
        }
      },
      {
        id: "CTC-G-03",
        type: "cross-text-connections",
        stage: "guided",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>In his analysis of ancient Mediterranean commerce, archaeologist Colin Renfrew proposed that the obsidian trade was driven by 'down-the-line' exchange: each village along a trade corridor traded raw stone with its immediate neighbor, resulting in an exponential drop-off in obsidian abundance the further a site was from the volcanic source.<br><br><b>Text 2</b><br>Geochemist Maria Santos utilized X-ray fluorescence to analyze obsidian blades at the coastal site of Tell el-Hajj, located 800 kilometers from the nearest Anatolian volcano. Rather than finding only minute traces consistent with down-the-line decay, Santos discovered vast caches of high-purity obsidian, suggesting direct maritime seafaring trade routes that bypassed intermediate overland settlements.",
        question: "Based on the texts, how do the findings made by Santos (Text 2) challenge Renfrew's model (Text 1)?",
        choices: [
          "A) By proving that ancient Mediterranean societies possessed no interest in trading volcanic minerals.",
          "B) By showing that obsidian abundance at a distant site was significantly higher than predicted by an overland down-the-line model.",
          "C) By establishing that Anatolian volcanoes were active only during the late medieval period.",
          "D) By confirming that all obsidian transport occurred strictly through overland pedestrian caravans."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): What did Renfrew's model predict for distant sites? ('exponential drop-off / minute traces'). What did Santos actually find at Tell el-Hajj?",
          "Hint 2 (Strategy Reminder): Santos found 'vast caches' 800 km away, which contradicts the 'exponential drop-off' expected from overland neighbor-to-neighbor trade.",
          "Hint 3 (Partial Solution): Choice A and C are Out of Scope. Choice D represents Renfrew's assumption, not Santos's discovery of maritime routes. Choice B accurately states the numerical/spatial discrepancy."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice B is correct. Renfrew's model predicted that obsidian amounts would drop off exponentially at distant sites, but Santos found massive caches 800 km away, indicating direct maritime trade that contradicts the simple overland down-the-line model. Choice D is what Santos disproved.",
        glosses: {
          "obsidian": "a hard, dark, glasslike volcanic rock formed by the rapid solidification of lava without crystallization",
          "down-the-line exchange": "a trade mechanism where goods are passed sequentially from one neighboring community to the next",
          "X-ray fluorescence": "a non-destructive analytical technique used to determine the elemental composition of materials"
        }
      },
      {
        id: "CTC-G-04",
        type: "cross-text-connections",
        stage: "guided",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>Many behavioral psychologists argue that intrinsic motivation—doing an activity for its inherent satisfaction—is invariably eroded when tangible external rewards, such as monetary bonuses, are introduced. In this view, extrinsic rewards cause individuals to perceive their behavior as externally controlled, diminishing their spontaneous creativity and long-term engagement.<br><br><b>Text 2</b><br>Management scholar Teresa Amabile suggests that the relationship between rewards and motivation is far more nuanced. While transactional, controlling rewards that dictate exactly how a task must be performed do stifle creativity, 'synergistic' rewards—such as recognition of competence, professional autonomy, or bonus funding that enables further independent exploration—can actually bolster intrinsic motivation.",
        question: "Based on the texts, both authors would most likely agree with which of the following statements?",
        choices: [
          "A) All monetary incentives universally destroy creativity in every workplace setting.",
          "B) The manner in which external rewards are structured can impact a person's intrinsic motivation.",
          "C) Creative workers perform at their highest potential only when completely unpaid.",
          "D) Extrinsic bonuses have zero psychological effect on employee satisfaction."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look for the common ground (the overlap in the Venn diagram). Both authors discuss how external rewards interact with internal motivation.",
          "Hint 2 (Strategy Reminder): Author 1 says rewards erode motivation; Author 2 says certain rewards erode motivation while others enhance it. What do they both agree matters?",
          "Hint 3 (Partial Solution): Choices A and C are Too Extreme. Choice D says rewards have zero effect (contradicted by both texts). Choice B is a moderate, shared premise."
        ],
        trapTypes: {
          A: "Too Extreme",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice B is correct. Both texts agree that external rewards influence internal motivation (Text 1 focuses on the negative impacts of extrinsic rewards, while Text 2 details how controlling vs. synergistic structures produce different motivational outcomes). Choices A and C are far too extreme. Choice D contradicts both authors.",
        glosses: {
          "intrinsic motivation": "the drive to engage in an activity arising from internal satisfaction rather than external rewards",
          "extrinsic rewards": "tangible rewards or incentives given by others (e.g., money, grades, trophies)",
          "synergistic": "working together in a way where the combined effect is greater than the sum of separate effects"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "CTC-I-01",
        type: "cross-text-connections",
        stage: "independent",
        difficulty: "Medium",
        passage: "<b>Text 1</b><br>Urban planners in Copenhagen attribute the city's cycling boom to extensive investments in segregated bike highways with dedicated traffic signals. They argue that physical separation from motor vehicles is the essential prerequisite for encouraging risk-averse demographics, including children and elderly citizens, to adopt cycling for daily transit.<br><br><b>Text 2</b><br>Transportation economist Liam O'Connor contends that while segregated infrastructure is beneficial, Copenhagen's cycling adoption was primarily driven by aggressive economic disincentives on automobiles, including a 150% registration tax on private cars and high municipal parking fees. Without these financial penalties, O'Connor argues, separated bike lanes alone would not have induced car owners to switch to bicycles.",
        question: "Based on the texts, how does O'Connor's view in Text 2 differ from the view of the Copenhagen urban planners in Text 1?",
        choices: [
          "A) O'Connor believes that building segregated bike lanes causes an immediate increase in traffic accidents.",
          "B) O'Connor argues that financial disincentives on cars were the decisive catalyst for transit mode switching, rather than bike infrastructure alone.",
          "C) O'Connor claims that Copenhagen citizens prefer driving cars regardless of vehicle taxes.",
          "D) O'Connor asserts that children and elderly citizens refuse to use bicycles under any circumstances."
        ],
        answer: "B",
        trapTypes: {
          A: "Out of Scope",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. Text 1 attributes the boom primarily to segregated bike infrastructure. In Text 2, O'Connor argues that economic disincentives on cars (taxes and parking fees) were the primary driver, claiming bike lanes alone would not have sufficed. Choice A is unmentioned. Choice C contradicts the text. Choice D is too extreme.",
        glosses: {
          "segregated": "set apart or separated from the main body or traffic",
          "risk-averse": "reluctant to take risks or expose oneself to potential danger",
          "disincentives": "factors, especially financial penalties, that discourage particular actions"
        }
      },
      {
        id: "CTC-I-02",
        type: "cross-text-connections",
        stage: "independent",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>Astrophysicist Avi Loeb proposed that the interstellar object 'Oumuamua, discovered in 2017, exhibited non-gravitational acceleration as it exited our solar system, which he suggested could be explained by radiation pressure acting on a thin, artificial solar sail constructed by extraterrestrial intelligence.<br><br><b>Text 2</b><br>Planetary scientist Jennifer Bergner developed a geochemical model demonstrating that 'Oumuamua's acceleration could be fully accounted for by natural outgassing. Bergner showed that cosmic rays striking water ice within the interstellar comet would liberate entrapped molecular hydrogen (H<sub>2</sub>), which, upon solar heating, was vented in invisible jets that accelerated the object without producing a visible dust coma.",
        question: "Based on the texts, how would Bergner (Text 2) most likely respond to Loeb's hypothesis in Text 1?",
        choices: [
          "A) By arguing that 'Oumuamua was stationary and never exhibited any acceleration as it traversed the solar system.",
          "B) By proposing that 'Oumuamua was composed entirely of solid metallic iron forged in an alien shipyard.",
          "C) By demonstrating that the object's anomalous trajectory can be explained through known natural chemical processes without invoking artificial origin.",
          "D) By agreeing that artificial solar sails are the only possible mechanism capable of producing non-gravitational velocity shifts."
        ],
        answer: "C",
        trapTypes: {
          A: "Opposite",
          B: "Out of Scope",
          D: "Opposite"
        },
        explanation: "Choice C is correct. Bergner developed a natural geochemical explanation (hydrogen outgassing induced by cosmic rays and solar heating) that explains the acceleration without requiring Loeb's artificial extraterrestrial solar sail hypothesis. Choice A contradicts both texts. Choice D represents Loeb's assumption, not Bergner's.",
        glosses: {
          "interstellar": "occurring or situated between stars",
          "non-gravitational acceleration": "motion or speed change caused by factors other than the pull of gravity (such as gas expulsion or thrust)",
          "outgassing": "the release of gas that was dissolved, trapped, or frozen in a material",
          "anomalous": "deviating from what is standard, normal, or expected"
        }
      },
      {
        id: "CTC-I-03",
        type: "cross-text-connections",
        stage: "independent",
        difficulty: "Hard",
        passage: "<b>Text 1</b><br>The 'linguistic relativity' hypothesis, famously articulated by Benjamin Lee Whorf, posits that the structural grammar and vocabulary of a person's native language strictly determine their cognitive worldview and constrain what concepts they are capable of conceptualizing.<br><br><b>Text 2</b><br>While modern cognitive psychologists accept that language can influence the speed of perceptual categorization—such as Russian speakers distinguishing shades of light and dark blue more rapidly—they reject strong Whorfian determinism. Cross-cultural experiments reveal that human infants and speakers of languages lacking specific grammatical tenses can still conceptualize counterfactual conditions and temporal sequences effortlessly.",
        question: "Based on the texts, how does the modern cognitive psychologist perspective in Text 2 modify the traditional Whorfian hypothesis described in Text 1?",
        choices: [
          "A) It replaces strict grammatical determinism with a more moderate view that language influences perceptual efficiency but does not strictly restrict thought.",
          "B) It proves that human infants possess no cognitive faculties until they have mastered complex grammatical vocabulary.",
          "C) It asserts that Russian is the only natural human language capable of expressing abstract concepts.",
          "D) It demonstrates that grammatical structure has absolutely zero connection to human perception or memory."
        ],
        answer: "A",
        trapTypes: {
          B: "Too Extreme",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice A is correct. Text 1 presents strong Whorfian determinism (language strictly determines and constrains thought). Text 2 modifies this: it rejects strict constraint while accepting that language can influence perceptual categorization speeds (a moderate influence rather than a total boundary). Choice D ignores the concession in Text 2.",
        glosses: {
          "linguistic relativity": "the hypothesis that the structure of a language affects its speakers' world view or cognition",
          "determinism": "the doctrine that all actions and thoughts are completely determined by previously existing causes",
          "counterfactual": "relating to or expressing what has not happened or what is contrary to actual facts"
        }
      },
      {
        id: "CTC-I-04",
        type: "cross-text-connections",
        stage: "independent",
        difficulty: "Medium",
        passage: "<b>Text 1</b><br>Art historians of the Italian Renaissance long attributed the era's dramatic artistic flourishing to the wealthy patronage of the Medici family in Florence, whose financial commissions allowed painters and sculptors to focus exclusively on aesthetic perfection.<br><br><b>Text 2</b><br>Economic historian Richard Goldthwaite emphasizes that focusing solely on elite banking dynasties overlooks the broader material culture of Renaissance Italy. Goldthwaite demonstrates that a burgeoning merchant class created widespread demand for domestic luxury goods, ceramics, and architectural renovations, fueling a competitive commercial market for artisanal craftsmanship across multiple Italian city-states.",
        question: "Based on the texts, how does Goldthwaite's argument (Text 2) expand upon the traditional view described in Text 1?",
        choices: [
          "A) By arguing that the Medici family actively confiscated artwork from private merchant households.",
          "B) By showing that artistic flourishing was supported by a broad commercial market driven by the merchant class, rather than just elite patronage.",
          "C) By claiming that Florence was the only Italian city that produced meaningful Renaissance artwork.",
          "D) By proving that Italian Renaissance painters refused all financial compensation for their masterpieces."
        ],
        answer: "B",
        trapTypes: {
          A: "Out of Scope",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice B is correct. Text 1 focuses narrowly on elite Medici patronage, whereas Goldthwaite in Text 2 broadens the scope by demonstrating that a growing merchant class created widespread commercial demand for art and craftsmanship across multiple cities. Choices A, C, and D are extreme or unsupported.",
        glosses: {
          "patronage": "the support, especially financial aid, given by a patron to an artist or cause",
          "burgeoning": "beginning to grow or increase rapidly; flourishing",
          "artisanal": "relating to a skilled manual worker or craftsperson"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Cross-Text Connections Self-Audit",
      prompts: [
        { id: "ctc-1", label: "I summarize each text separately before attempting to answer the question." },
        { id: "ctc-2", label: "I check the perspective direction in the question stem so I don't confuse Author 1 with Author 2." },
        { id: "ctc-3", label: "I identify the precise relationship (agreement, direct contradiction, or nuanced qualification) connecting the two texts." }
      ]
    }
  },

  // =========================================================================
  // MODULE 4: CENTRAL IDEAS & DETAILS (INFORMATION & IDEAS)
  // =========================================================================
  "MOD-4": {
    metadata: {
      id: "MOD-4",
      title: "Central Ideas & Details",
      domain: "Information & Ideas",
      methodName: "The Umbrella Test",
      tagline: "The main idea must cover ALL paragraphs like an umbrella; reject answer choices that are too narrow (a single rib) or too broad (the entire sky)."
    },
    stage1_skill: {
      title: "What Does Central Ideas & Details Test?",
      whatItTests: "Central Ideas & Details questions test whether you can synthesize the overarching thesis of a passage without getting trapped by supporting evidence, single-sentence details, or overly broad generalizations.",
      frequency: "2 to 3 questions per module.",
      recognitionTest: "Question stems include: 'Which choice best states the central idea of the text?' or 'According to the text, what is true about [X]?'",
      eslNote: "The most common trap is the 'True Detail / Half Right' distractor: an option that is 100% factually accurate based on sentence 3, but fails to capture the main thesis of the entire passage."
    },
    stage2_method: {
      name: "The Umbrella Test",
      summary: "Ensure the chosen answer is neither too narrow nor too broad.",
      steps: [
        {
          num: 1,
          title: "Identify Topic + Author's Takeaway",
          rule: "Central Idea = (Specific Subject) + (What the author concludes about it).",
          expertMove: "If the passage is about mycorrhizal fungi, the topic is fungi, and the takeaway is that they share nutrients across tree species."
        },
        {
          num: 2,
          title: "Apply the Umbrella Check",
          rule: "Can every sentence in the passage sit underneath this claim?",
          expertMove: "If sentence 4 discusses an experiment, that experiment is just water falling on the umbrella; the umbrella itself is the general principle."
        },
        {
          num: 3,
          title: "Eliminate Single-Detail Traps",
          rule: "Cross out options that only describe one supporting example or sentence.",
          expertMove: "I ask: 'Did the author write the whole paragraph just to say this one fact, or to make a larger argument?'"
        },
        {
          num: 4,
          title: "Eliminate Over-Generalizations",
          rule: "Reject options that make sweeping claims about 'all ecosystems' or 'human nature'.",
          expertMove: "Keep the scope calibrated strictly to the passage's boundaries."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "CID-W-01",
        type: "central-ideas-details",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "Although early biographers of Ada Lovelace often dismissed her 1843 notes on Charles Babbage's Analytical Engine as mere transcription of Babbage's ideas, modern computer scientists have re-evaluated her contribution. Lovelace did not merely annotate the engine's mechanical gears; she formulated an algorithm to compute Bernoulli numbers, recognized that the machine could manipulate symbols and musical notes rather than just numbers, and articulated the distinction between hardware and software. Consequently, Lovelace is now recognized not merely as an assistant, but as the visionary author of the world's first published computer program.",
        question: "Which choice best states the central idea of the text?",
        choices: [
          "A) Charles Babbage deliberately stole Ada Lovelace's algorithms to claim sole credit for the Analytical Engine.",
          "B) Modern reassessments demonstrate that Ada Lovelace was an original computational thinker who wrote the first computer algorithm.",
          "C) The Bernoulli number algorithm was the only mathematical calculation that the Analytical Engine was capable of executing.",
          "D) Ada Lovelace focused exclusively on translating mechanical gear diagrams into musical compositions."
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Find Topic + Takeaway): Topic = Ada Lovelace's historical contribution. Takeaway = Early biographers dismissed her, but modern science recognizes her as an original pioneer who wrote the first program.",
          "Step 2 (Perform the Umbrella Test): Does Choice B cover the whole text? Yes: it mentions modern reassessment and her original algorithm.",
          "Step 3 (Spot Traps): Choice A is 'Out of Scope / Extreme' (text never says Babbage stole her ideas). Choice C is 'Too Extreme' ('only calculation'). Choice D is 'Half Right / Distorted' (mentions music out of context).",
          "Step 4 (Confirm): Choice B accurately encapsulates the entire paragraph without distortion."
        ],
        trapTypes: {
          A: "Out of Scope",
          C: "Too Extreme",
          D: "Half Right"
        },
        explanation: "Choice B is correct because it captures the primary thesis: while early biographers minimized Lovelace's role, modern re-evaluation shows she developed the first published algorithm and conceptualized fundamental programming concepts. Choice A is unsupported. Choice C is overly extreme. Choice D distorts a minor detail.",
        glosses: {
          "transcription": "the action or process of copying out something or recording words",
          "Bernoulli numbers": "a sequence of rational numbers deeply connected to number theory",
          "articulated": "expressed or formulated an idea or feeling fluently and coherently"
        }
      },
      {
        id: "CID-W-02",
        type: "central-ideas-details",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "In deep-sea hydrothermal vents, where sunlight cannot penetrate, life does not depend on solar-driven photosynthesis. Instead, chemoautotrophic bacteria synthesize organic carbohydrates by oxidizing hydrogen sulfide issuing from volcanic chimneys. These bacteria form endosymbiotic relationships with giant tube worms (*Riftia pachyptila*), which lack mouths and digestive tracts entirely. The tube worms absorb hydrogen sulfide and oxygen through their bright red plumes and transport them via specialized hemoglobin to internal bacteria, which in turn provide complete nutrition to their worm hosts, sustaining complex food webs in absolute darkness.",
        question: "According to the text, how do giant tube worms (*Riftia pachyptila*) obtain nutrition in hydrothermal vent environments?",
        choices: [
          "A) By grazing on photosynthetic algae floating down from the ocean's sunlit surface layers.",
          "B) By using digestive tracts to consume smaller crustaceans that inhabit volcanic chimneys.",
          "C) By hosting symbiotic bacteria that convert volcanic chemicals into organic nutrients for the worm.",
          "D) By absorbing dissolved sunlight through their specialized bright red plumes."
        ],
        answer: "C",
        thinkAloud: [
          "Step 1 (Analyze Question Stem): This is a Detail question: 'According to the text, how do giant tube worms obtain nutrition?'",
          "Step 2 (Locate Exact Textual Proof): Look at sentences 3-4: Tube worms 'lack mouths and digestive tracts entirely' and rely on 'endosymbiotic relationships with... bacteria' which 'provide complete nutrition to their worm hosts' by oxidizing hydrogen sulfide.",
          "Step 3 (Match & Eliminate): Choice A mentions photosynthesis (Opposite of deep-sea conditions). Choice B contradicts the fact that they 'lack digestive tracts entirely'. Choice D claims they absorb sunlight in 'absolute darkness' (Opposite). Choice C directly reflects the symbiotic bacterial chemical synthesis.",
          "Step 4 (Select): Choice C is 100% faithful to the text."
        ],
        trapTypes: {
          A: "Opposite",
          B: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice C is correct. The passage states that chemoautotrophic bacteria live symbiotically inside the tube worms, oxidizing hydrogen sulfide to produce organic nutrients that nourish the host worm. Choices A, B, and D directly contradict stated facts in the passage.",
        glosses: {
          "chemoautotrophic": "organisms that synthesize their own food using energy derived from chemical reactions rather than light",
          "endosymbiotic": "a symbiotic relationship where one organism lives inside the body or cells of another",
          "hemoglobin": "a red protein responsible for transporting oxygen in the blood of vertebrates and certain invertebrates"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "CID-TRAP-01",
        stem: "Text explains how urban vertical farming saves 95% water and reduces transportation emissions, though high electricity costs for LED lighting remain an economic challenge.",
        wrongChoice: "Electricity costs will invariably cause all vertical farming enterprises to go bankrupt by next year.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Opposite", "Half Right", "Out of Scope"],
        rationale: "The text notes electricity is an economic challenge, but predicting that all vertical farms will go bankrupt next year is an extreme, ungrounded extrapolation."
      },
      {
        id: "CID-TRAP-02",
        stem: "Text discusses how the Rosetta Stone, discovered in 1799, allowed Jean-François Champollion to decipher Egyptian hieroglyphs because it contained the same royal decree written in three scripts.",
        wrongChoice: "The Rosetta Stone contained a decree inscribed in ancient Greek, Demotic, and Egyptian hieroglyphic scripts.",
        correctTrap: "Half Right",
        options: ["Half Right", "Opposite", "Too Extreme", "Out of Scope"],
        rationale: "While this fact is 100% true, if the question asks for the CENTRAL IDEA of why the stone was historically significant, this choice is just a background factual detail that omits Champollion's breakthrough decipherment."
      },
      {
        id: "CID-TRAP-03",
        stem: "Text explains that honeybee waggle dances communicate the distance and direction of nectar sources relative to the sun's position.",
        wrongChoice: "Honeybees use acoustic sonar pulses to locate underground termite colonies for food.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Too Extreme", "Opposite", "Half Right"],
        rationale: "Sonar pulses and termite colonies are completely fabricated outside topics not mentioned anywhere in the passage."
      },
      {
        id: "CID-TRAP-04",
        stem: "Text describes how rewilding wolves in Yellowstone reduced elk overgrazing along riverbanks, allowing willow trees to recover and beavers to build dams.",
        wrongChoice: "Reintroducing wolves in Yellowstone caused devastating damage to willow trees and drove beavers to extinction.",
        correctTrap: "Opposite",
        options: ["Opposite", "Too Extreme", "Half Right", "Out of Scope"],
        rationale: "This choice directly inverts the ecological outcome: the text states willows recovered and beavers flourished, not that they suffered damage or extinction."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "CID-G-01",
        type: "central-ideas-details",
        stage: "guided",
        difficulty: "Easy",
        passage: "While studying the acoustic calls of African forest elephants (*Loxodonta cyclotis*), bioacousticians discovered that the animals communicate extensively using low-frequency infrasound waves below the limit of human hearing (under 20 Hz). These infrasonic rumbles travel for several kilometers through dense rainforest vegetation with minimal atmospheric attenuation. Consequently, elephant herds can coordinate movements, warn of predators, and locate mating partners across vast forested landscapes without visual contact.",
        question: "Which choice best states the central idea of the text?",
        choices: [
          "A) African forest elephants rely on low-frequency infrasound to communicate over long distances in dense rainforest environments.",
          "B) Human hearing is fully capable of perceiving all vocalizations produced by African forest elephants.",
          "C) Infrasound waves are used exclusively by African elephants to scare away rival predators.",
          "D) Rainforest deforestation has forced forest elephants to stop producing acoustic vocalizations."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): What is the specific subject (African forest elephants) and what is the author's primary takeaway about their communication?",
          "Hint 2 (Strategy Reminder): Apply the Umbrella Test: Sentence 1 defines infrasound calls, sentence 2 explains how they travel, and sentence 3 details their coordinating functions.",
          "Hint 3 (Partial Solution): Choice B contradicts sentence 1 ('below the limit of human hearing'). Choice C contains the extreme word 'exclusively'. Choice D is out of scope. Choice A covers all sentences."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice A is correct. It captures the overall thesis: forest elephants use low-frequency infrasonic calls that travel through dense terrain to communicate and coordinate across long distances. Choice B contradicts the text. Choice C uses the extreme word 'exclusively'. Choice D is unsupported.",
        glosses: {
          "infrasound": "sound waves with a frequency below the lower limit of human audibility (generally 20 Hz)",
          "attenuation": "the reduction of the amplitude or intensity of a signal or wave as it passes through a medium",
          "vocalizations": "sounds produced by the vocal organs of animals"
        }
      },
      {
        id: "CID-G-02",
        type: "central-ideas-details",
        stage: "guided",
        difficulty: "Medium",
        passage: "In 1928, Alexander Fleming observed that a stray mould contaminating a petri dish of *Staphylococcus* bacteria had created a clear halo of inhibited bacterial growth. Although Fleming published his findings on this substance, which he named penicillin, he was unable to isolate and stabilize the unstable chemical compound for medical therapy. It was not until a decade later that biochemists Howard Florey and Ernst Chain developed purification techniques and mass-production protocols, transforming penicillin from an academic curiosity into the world's first life-saving mass antibiotic.",
        question: "According to the passage, why was Fleming's initial discovery of penicillin unable to be used immediately in clinical medicine?",
        choices: [
          "A) Fleming refused to share his laboratory findings with the international medical community.",
          "B) Fleming lacked the biochemical methods needed to isolate and stabilize the active penicillin compound.",
          "C) Howard Florey and Ernst Chain published fraudulent data declaring penicillin too hazardous for human use.",
          "D) *Staphylococcus* bacteria had developed immediate genetic resistance to all antibiotic compounds."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Re-read the second sentence: 'Although Fleming published... he was unable to...'",
          "Hint 2 (Strategy Reminder): This is a Detail question. Locate the precise reason Fleming could not provide medical therapy.",
          "Hint 3 (Partial Solution): The text explicitly states Fleming 'was unable to isolate and stabilize the unstable chemical compound'. Look for Choice B."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Out of Scope",
          D: "Out of Scope"
        },
        explanation: "Choice B is correct. Sentence 2 explicitly mentions that Fleming 'was unable to isolate and stabilize the unstable chemical compound for medical therapy', which is why Florey and Chain's later purification work was necessary. Choices A, C, and D are fabricated and contradict the passage.",
        glosses: {
          "inhibited": "hindered, restrained, or prevented an action or process",
          "purification": "the process of removing contaminants or isolating a specific chemical substance",
          "antibiotic": "a medicine that inhibits the growth of or destroys microorganisms"
        }
      },
      {
        id: "CID-G-03",
        type: "central-ideas-details",
        stage: "guided",
        difficulty: "Hard",
        passage: "The Voynich manuscript, a 15th-century illustrated codex written in an undeciphered script, has long baffled cryptographers. While early 20th-century theories dismissed the manuscript as an elaborate Renaissance hoax with meaningless gibberish, recent statistical analyses of letter distribution reveal that the text exhibits Zipf's law—a mathematical pattern of word frequencies found in all genuine human natural languages. However, whether the codex represents a complex cipher, an encoded phonetic dialect, or an invented constructed language remains fiercely unresolved.",
        question: "Which choice best states the central idea of the text?",
        choices: [
          "A) The Voynich manuscript has been proven to be a fraudulent hoax created by Renaissance art dealers.",
          "B) Although mathematical evidence suggests the Voynich manuscript contains genuine linguistic structure, its exact meaning and nature remain uncracked.",
          "C) Cryptographers have successfully translated the Voynich manuscript into modern phonetic English using Zipf's law.",
          "D) Zipf's law is a statistical principle that applies exclusively to undeciphered 15th-century Renaissance ciphers."
        ],
        answer: "B",
        hints: [
          "Hint 1 (Nudge): Look at the contrast in the passage: Sentence 2 notes that statistical tests (Zipf's law) show genuine language structure, while Sentence 3 emphasizes that the meaning remains 'fiercely unresolved'.",
          "Hint 2 (Strategy Reminder): The central idea must balance both the linguistic evidence AND the continued mystery.",
          "Hint 3 (Partial Solution): Choice A claims it was proven a hoax (Opposite). Choice C claims it has been translated (Opposite). Choice D misdefines Zipf's law. Choice B is the only balanced synthesis."
        ],
        trapTypes: {
          A: "Opposite",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice B is correct. It synthesizes the two core components of the text: recent statistical analyses indicate the manuscript possesses authentic linguistic properties (Zipf's law), but researchers have not yet decoded its cipher or nature. Choice A and C directly contradict the text. Choice D misinterprets Zipf's law.",
        glosses: {
          "codex": "an ancient manuscript text in book form",
          "cryptographers": "experts in the art of writing or solving codes and ciphers",
          "Zipf's law": "an empirical law stating that in natural language, the frequency of any word is inversely proportional to its rank in the frequency table"
        }
      },
      {
        id: "CID-G-04",
        type: "central-ideas-details",
        stage: "guided",
        difficulty: "Medium",
        passage: "In high-latitude tundra ecosystems, permafrost acts as a colossal frozen carbon sink, locking away approximately 1,500 billion tons of decomposed organic matter. As global temperatures rise, however, the active soil layer deepens, enabling microbes to metabolize this previously frozen organic material. This microbial respiration releases immense volumes of methane and carbon dioxide, establishing a positive feedback loop that accelerates atmospheric warming far beyond initial climate model forecasts.",
        question: "According to the passage, what occurs when permafrost in the tundra thaws?",
        choices: [
          "A) Microbial activity ceases completely, preventing the release of all greenhouse gases.",
          "B) Thawing permafrost instantly transforms the tundra into dense tropical rainforest.",
          "C) Soil microbes consume the thawed organic matter and release greenhouse gases that amplify warming.",
          "D) Glaciers expand rapidly, permanently trapping organic carbon beneath deep ice sheets."
        ],
        answer: "C",
        hints: [
          "Hint 1 (Nudge): Re-read sentences 2-3: What do microbes do when the active soil layer deepens?",
          "Hint 2 (Strategy Reminder): Trace the biological chain reaction: Thaw -> Microbes metabolize organic matter -> Respiration releases methane/CO2 -> Accelerates warming.",
          "Hint 3 (Partial Solution): Choice A and D state the opposite of what happens. Choice B is an absurd exaggeration. Choice C accurately tracks the microbial mechanism."
        ],
        trapTypes: {
          A: "Opposite",
          B: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice C is correct. The text explains that thawing allows microbes to decompose organic material, releasing methane and carbon dioxide which creates a positive feedback loop accelerating warming. Choices A and D are opposite. Choice B is absurdly out of scope.",
        glosses: {
          "permafrost": "a thick subterranean layer of soil that remains frozen throughout the year",
          "carbon sink": "a forest, ocean, or other natural environment viewed in terms of its ability to absorb carbon dioxide from the atmosphere",
          "positive feedback loop": "a process where the effects of a reaction amplify or accelerate the original process"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "CID-I-01",
        type: "central-ideas-details",
        stage: "independent",
        difficulty: "Medium",
        passage: "During the 19th century, the expansion of the American railway network transformed not only freight transportation but also standard timekeeping. Prior to 1883, thousands of towns operated on idiosyncratic local solar times based on the sun's zenith, creating chaotic scheduling conflicts for railway dispatchers managing single-track lines. To prevent collisions and streamline operations, railway companies unilaterally instituted four standard time zones across the United States in November 1883, a corporate convention that the federal government officially codified into law decades later.",
        question: "Which choice best states the central idea of the text?",
        choices: [
          "A) Railway companies established standardized time zones to resolve dangerous scheduling chaos caused by local solar timekeeping.",
          "B) Local communities successfully sued railway companies to preserve their traditional solar noon timekeeping.",
          "C) The American railway network collapsed in 1883 due to irreconcilable conflicts between state and federal dispatchers.",
          "D) The federal government created standard time zones in 1883 to ban all solar clocks worldwide."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice A is correct. The passage outlines how local solar times caused chaotic scheduling and potential collisions, leading railway companies to introduce standard time zones in 1883. Choices B and C contradict the passage. Choice D misidentifies who created the zones initially (rail companies did, not the government) and is overly broad.",
        glosses: {
          "idiosyncratic": "peculiar or individual; distinctive to a particular place or person",
          "zenith": "the time at which something is most powerful, or the highest point reached by a celestial body",
          "codified": "arranged laws or rules into a systematic code or official statute"
        }
      },
      {
        id: "CID-I-02",
        type: "central-ideas-details",
        stage: "independent",
        difficulty: "Hard",
        passage: "In 1913, Niels Bohr introduced his quantum model of the hydrogen atom, postulating that electrons orbit the nucleus only in discrete, quantized energy levels without radiating energy. When an electron transitions between these orbits, it emits or absorbs a photon of light with a frequency corresponding exactly to the energy differential between the levels. This quantized model successfully explained the empirical Balmer emission spectral lines of hydrogen, which classical Newtonian physics had failed to elucidate.",
        question: "According to the passage, how did Bohr's model explain the spectral lines of hydrogen?",
        choices: [
          "A) By showing that electrons emit or absorb photons of light when shifting between discrete quantized energy orbits.",
          "B) By demonstrating that hydrogen nuclei contain neutral neutrons that emit continuous radio waves.",
          "C) By proving that electrons continuously radiate energy and spiral directly into the atomic nucleus.",
          "D) By confirming that classical Newtonian mechanics accurately predicts all subatomic orbital behaviors."
        ],
        answer: "A",
        trapTypes: {
          B: "Out of Scope",
          C: "Opposite",
          D: "Opposite"
        },
        explanation: "Choice A is correct. Sentence 2 and 3 explicitly state that when electrons transition between quantized energy orbits, they absorb or emit photons corresponding to the energy difference, explaining the hydrogen spectral lines. Choice C describes what classical physics feared, which Bohr disproved. Choice D contradicts sentence 3.",
        glosses: {
          "quantized": "restricted to discrete, specific values rather than continuous quantities",
          "differential": "a difference between amounts of things",
          "elucidate": "make something clear; explain"
        }
      },
      {
        id: "CID-I-03",
        type: "central-ideas-details",
        stage: "independent",
        difficulty: "Hard",
        passage: "Biologists studying the evolutionary genetics of the peppered moth (*Biston betularia*) in industrial England documented a phenomenon known as industrial melanism. Before the mid-19th century, light-colored speckled moths predominated because they were camouflaged against lichen-encrusted tree trunks. As coal soot blackened the forests during the Industrial Revolution, dark-colored melanic mutants gained a predatory survival advantage against birds, rapidly increasing to over 98% of the population by 1895. Following clean air legislation in the late 20th century, lichen returned, and light-colored morphs once again became the dominant form.",
        question: "Which choice best summarizes the primary takeaway of the passage?",
        choices: [
          "A) Coal pollution permanently eliminated all predatory bird species across industrial England.",
          "B) Natural selection caused moth population coloration to shift dynamically in response to soot pollution and subsequent environmental recovery.",
          "C) Peppered moths intentionally altered their wing pigmentation to match the color of industrial factory brickwork.",
          "D) Lichen species in England are genetically incapable of growing on trees exposed to clean air."
        ],
        answer: "B",
        trapTypes: {
          A: "Too Extreme",
          C: "Wrong Meaning",
          D: "Opposite"
        },
        explanation: "Choice B is correct. The text demonstrates natural selection in action: soot favored dark moths, and clean air laws later favored light moths, showing dynamic shifts based on environmental conditions. Choice A is extreme and unsupported. Choice C misattributes evolutionary selection to intentional conscious choice. Choice D contradicts the text.",
        glosses: {
          "industrial melanism": "the darkness of the skin, feathers, or fur acquired by a population of animals in an industrial region where the environment is blackened by soot",
          "lichen": "a composite organism that arises from algae or cyanobacteria living among filaments of multiple fungi species",
          "morphs": "distinct forms or varieties of an organism in a population"
        }
      },
      {
        id: "CID-I-04",
        type: "central-ideas-details",
        stage: "independent",
        difficulty: "Medium",
        passage: "In linguistics, the decipherment of the ancient Linear B script by architect Michael Ventris in 1952 overturned long-standing historical assumptions about Aegean civilization. Prevailing archaeological consensus had held that the Minoan and Mycenaean tablets represented an unknown, non-Greek Mediterranean language. Ventris discovered that the syllabic signs actually encoded an archaic dialect of Greek spoken five centuries before Homer, proving that Mycenaean society was culturally and linguistically Greek.",
        question: "According to the passage, what was the major significance of Michael Ventris's decipherment of Linear B?",
        choices: [
          "A) It proved that Mycenaean civilization was linguistically and culturally connected to early Greek society.",
          "B) It demonstrated that the Homeric epics were written in a non-Indo-European script.",
          "C) It showed that ancient Aegean tablets were purely decorative art pieces with no written text.",
          "D) It confirmed that Minoan civilization had zero contact with any European civilizations."
        ],
        answer: "A",
        trapTypes: {
          B: "Out of Scope",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The final sentence states that Ventris's decipherment showed Linear B encoded an archaic dialect of Greek, proving that Mycenaean society was culturally and linguistically Greek. Choices B, C, and D contradict the findings or make unsupported assertions.",
        glosses: {
          "Linear B": "a syllabic script that was used for writing Mycenaean Greek, an early form of Greek",
          "archaic": "very old or old-fashioned; belonging to an earlier period in history",
          "syllabic": "relating to a writing system in which each character represents a syllable rather than a single sound"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Central Ideas & Details Self-Audit",
      prompts: [
        { id: "cid-1", label: "I distinguish between a single true factual detail and the overarching main thesis." },
        { id: "cid-2", label: "I apply the Umbrella Test to ensure the chosen central idea covers all major paragraphs." },
        { id: "cid-3", label: "On detail questions, I verify that the answer is directly supported by literal words in the text." }
      ]
    }
  },

  // =========================================================================
  // MODULE 5: COMMAND OF EVIDENCE (INFORMATION & IDEAS)
  // =========================================================================
  "MOD-5": {
    metadata: {
      id: "MOD-5",
      title: "Command of Evidence",
      domain: "Information & Ideas",
      methodName: "The Anchor-Match Protocol",
      tagline: "Pinpoint the precise hypothesis in the question stem, find the exact textual quote or data row, and reject true data linked to the wrong claim."
    },
    stage1_skill: {
      title: "What Does Command of Evidence Test?",
      whatItTests: "Command of Evidence tests your ability to identify which piece of factual evidence (either a textual excerpt or quantitative data from a table/graph) best supports or weakens a specific claim, hypothesis, or finding.",
      frequency: "4 to 6 questions per module (both textual evidence and data table questions).",
      recognitionTest: "Look for stems like: 'Which finding, if true, would most directly support the researchers' hypothesis?' or 'Which choice best uses data from the table to complete the statement?'",
      eslNote: "For quantitative questions: Do NOT guess based on intuition or general math trends. The correct answer will directly match specific rows/columns described in the text. Watch out for 'Misused Evidence'—accurate numbers attached to the wrong conclusion."
    },
    stage2_method: {
      name: "The Anchor-Match Protocol",
      summary: "A 4-step precision matching workflow for text and data evidence.",
      steps: [
        {
          num: 1,
          title: "Anchor the Exact Claim / Hypothesis",
          rule: "Underline the specific claim the researchers want to prove or weaken.",
          expertMove: "I ask: 'What exact relationship is being tested?' (e.g., 'Soil moisture increases root growth in Species A but NOT Species B')."
        },
        {
          num: 2,
          title: "Determine the Required Evidence Shape",
          rule: "Formulate what data or quote is needed BEFORE looking at choices.",
          expertMove: "Prediction: 'I need data showing Species A roots grew longer in wet soil while Species B stayed flat.'"
        },
        {
          num: 3,
          title: "Scan Table / Text for the Anchor Variables",
          rule: "Check the table headers, labels, and units of measurement carefully.",
          expertMove: "If the text discusses percentages, I make sure the choice doesn't confuse percentages with absolute headcounts."
        },
        {
          num: 4,
          title: "Eliminate Misused Evidence",
          rule: "Reject choices that accurately cite numbers or lines that fail to support the specific claim.",
          expertMove: "Correct data + wrong conclusion = automatic elimination."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "COE-W-01",
        type: "command-of-evidence",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "Ecologist Dr. Anika Patel hypothesized that urban tree canopies provide greater cooling benefits in low-income neighborhoods with high asphalt density than in affluent neighborhoods with extensive residential lawns. To test this hypothesis, Patel measured afternoon surface temperatures across twelve distinct urban zones with varying canopy coverage.",
        question: "Which finding, if true, would most directly support Dr. Patel's hypothesis?",
        choices: [
          "A) Adding 10% tree canopy in neighborhoods with 80% asphalt coverage reduced surface temperatures by 4.2°C, whereas the same canopy increase in lawn-rich neighborhoods reduced temperatures by only 1.1°C.",
          "B) Affluent neighborhoods with large residential lawns consistently had higher average surface temperatures than densely paved industrial districts.",
          "C) Low-income neighborhoods with high asphalt density contained significantly fewer total trees than neighborhoods with expansive private lawns.",
          "D) Planting trees in urban zones required substantially more municipal irrigation funding than maintaining standard turfgrass lawns."
        ],
        answer: "A",
        thinkAloud: [
          "Step 1 (Anchor the Hypothesis): Patel's hypothesis = Urban trees cool high-asphalt/low-income areas MORE than they cool lawn-rich/affluent areas.",
          "Step 2 (Predict Required Evidence Shape): We need a comparison showing a larger temperature reduction in asphalt-heavy zones than in lawn-heavy zones when trees are added.",
          "Step 3 (Evaluate Choices): Choice A shows a 4.2°C cooling benefit in high-asphalt areas vs. only 1.1°C in lawn-rich areas. This directly proves trees have a 'greater cooling benefit' in high-asphalt neighborhoods.",
          "Step 4 (Eliminate Traps): Choice B is factually backward/unsupported. Choice C is a true demographic observation, but it measures tree counts, NOT cooling benefits (Misused Evidence trap). Choice D is about cost (Out of Scope)."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Half Right",
          D: "Out of Scope"
        },
        explanation: "Choice A directly supports the hypothesis by providing comparative temperature data: adding canopy produced a 4.2°C temperature drop in asphalt-dense areas compared to only 1.1°C in lawn-rich areas. Choice C describes tree distribution rather than cooling effectiveness. Choice D discusses irrigation costs.",
        glosses: {
          "canopy": "the high, spreading foliage of trees in a forest or urban streetscape",
          "asphalt": "a dark bituminous substance used for paving roads and parking lots",
          "affluent": "having a great deal of money; wealthy"
        }
      },
      {
        id: "COE-W-02",
        type: "command-of-evidence",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "A research team tested the tensile strength and elastic recovery of four synthetic biomaterial fibers intended for surgical sutures.<br><br><b>Fiber Performance Metrics:</b><br><table class='sat-table'><thead><tr><th>Fiber Type</th><th>Tensile Strength (MPa)</th><th>Elastic Recovery (%)</th><th>Degradation Time (Weeks)</th></tr></thead><tbody><tr><td>BioFiber-A</td><td>420</td><td>94%</td><td>12</td></tr><tr><td>BioFiber-B</td><td>310</td><td>82%</td><td>24</td></tr><tr><td>BioFiber-C</td><td>510</td><td>68%</td><td>8</td></tr><tr><td>BioFiber-D</td><td>290</td><td>91%</td><td>16</td></tr></tbody></table><br>The researchers concluded that while BioFiber-C can withstand the greatest maximum force before rupturing, BioFiber-A is superior for cardiovascular surgery, which requires high flexibility and rapid shape restoration after arterial contractions.",
        question: "Which choice best uses data from the table to support the researchers' conclusion regarding BioFiber-A and BioFiber-C?",
        choices: [
          "A) BioFiber-C has a tensile strength of 510 MPa, which is the highest in the group, but BioFiber-A achieved an elastic recovery of 94%, significantly outperforming BioFiber-C's 68%.",
          "B) BioFiber-A has a degradation time of 12 weeks, which is twice as long as BioFiber-B's degradation time of 24 weeks.",
          "C) BioFiber-D exhibited an elastic recovery of 91%, making it superior in tensile strength to BioFiber-C's 510 MPa.",
          "D) BioFiber-C achieved an elastic recovery of 68%, which is the highest elastic recovery recorded among all four tested fibers."
        ],
        answer: "A",
        thinkAloud: [
          "Step 1 (Anchor the Claim): Claim has two parts: (1) BioFiber-C withstands greatest force (highest tensile strength), (2) BioFiber-A is superior for flexibility/shape restoration (highest elastic recovery).",
          "Step 2 (Inspect the Table): Tensile Strength: BioFiber-C = 510 MPa (highest). Elastic Recovery: BioFiber-A = 94% (highest), while BioFiber-C is only 68%.",
          "Step 3 (Verify Choice A): Choice A states: BioFiber-C has tensile strength of 510 MPa (highest), but BioFiber-A has elastic recovery of 94% vs. BioFiber-C's 68%. This perfectly validates both claims with accurate numbers from the table.",
          "Step 4 (Eliminate Distractors): Choice B gives incorrect math (12 weeks is half of 24, not twice). Choice C confuses elastic recovery with tensile strength. Choice D falsely claims 68% is the highest elastic recovery (94% is)."
        ],
        trapTypes: {
          B: "Misused Evidence",
          C: "Misused Evidence",
          D: "Opposite"
        },
        explanation: "Choice A is correct. It accurately pulls the numbers from the table to support both claims: BioFiber-C's 510 MPa confirms it withstands the greatest force (tensile strength), while BioFiber-A's 94% elastic recovery confirms its superiority in shape restoration over BioFiber-C's 68%. Choices B, C, and D contain factual and mathematical errors based on the table.",
        glosses: {
          "tensile strength": "the resistance of a material to breaking under tension or pulling force",
          "elastic recovery": "the ability of a deformed material to return to its original dimensions after stress is released",
          "sutures": "stitches used to hold tissue together after surgery or injury"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "COE-TRAP-01",
        stem: "Hypothesis: 'Adding nitrogen fertilizer increases leaf surface area in corn plants.'",
        wrongChoice: "Corn plants treated with nitrogen produced 25% more root nodules but had 10% smaller leaf surface area than untreated plants.",
        correctTrap: "Opposite",
        options: ["Opposite", "Misused Evidence", "Out of Scope", "Too Extreme"],
        rationale: "The finding shows a DECREASE in leaf surface area (-10%), which directly contradicts and refutes the hypothesis rather than supporting it."
      },
      {
        id: "COE-TRAP-02",
        stem: "Hypothesis: 'Bilingual children switch tasks faster than monolingual children.' Table shows: Bilingual Reaction Time = 320ms; Monolingual Reaction Time = 450ms.",
        wrongChoice: "Monolingual children had a reaction time of 450ms, proving that monolinguals switch tasks faster than bilinguals.",
        correctTrap: "Misused Evidence",
        options: ["Misused Evidence", "Out of Scope", "Too Extreme", "Half Right"],
        rationale: "The choice accurately quotes the 450ms number, but draws the false conclusion that higher milliseconds means faster performance (in reaction time, lower ms is faster!)."
      },
      {
        id: "COE-TRAP-03",
        stem: "Hypothesis: 'Ancient ceramic vessels found in tomb B were used to store olive oil.'",
        wrongChoice: "Tomb B was constructed during the Bronze Age by an architect named Menes who also designed royal granaries.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Misused Evidence", "Opposite", "Too Extreme"],
        rationale: "The identity of the architect who built the tomb provides zero chemical or archaeological evidence regarding whether the ceramic pots contained olive oil."
      },
      {
        id: "COE-TRAP-04",
        stem: "Hypothesis: 'Exposure to morning blue light improves test scores among college students.'",
        wrongChoice: "Students exposed to morning blue light achieved an undisputed 100% on every final examination across all academic departments.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Out of Scope", "Half Right", "Opposite"],
        rationale: "Claiming students scored 100% on every single exam across all departments is an absurdly exaggerated finding that goes far beyond realistic scientific evidence."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "COE-G-01",
        type: "command-of-evidence",
        stage: "guided",
        difficulty: "Medium",
        passage: "Biologist Dr. Kevin Foster hypothesized that bacterial biofilms produce extracellular polymers not to protect individual cells from antibiotics, but primarily to establish shared structural architecture that prevents competitor strains from colonizing the nutrient-rich surface.",
        question: "Which finding, if true, would most directly support Dr. Foster's hypothesis?",
        choices: [
          "A) Biofilms lacking extracellular polymers were eradicated by antibiotics at the exact same rate as wild-type biofilms with intact polymers, but were immediately invaded and overtaken by rival bacterial strains.",
          "B) Individual free-floating bacteria exposed to antibiotics died within ten minutes, whereas biofilm-bound bacteria survived for forty-eight hours.",
          "C) Extracellular polymers produced by biofilms were composed primarily of polysaccharide sugars and water molecules.",
          "D) Competitor bacterial strains were completely unable to survive in any aquatic ecosystem containing antibiotics."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at the two parts of Foster's hypothesis: (1) NOT to protect from antibiotics, (2) YES to prevent competitor strains from colonizing.",
          "Hint 2 (Strategy Reminder): What experiment tests both parts? We need a result showing that losing the polymer does NOT change antibiotic death, BUT DOES allow rival invasion.",
          "Hint 3 (Partial Solution): Choice A matches both halves of the hypothesis perfectly. Choice B supports the opposite view (that polymers protect from antibiotics). Choice C is just chemical composition. Choose A."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Half Right",
          D: "Out of Scope"
        },
        explanation: "Choice A provides direct double-barreled support for Foster's claim: it shows that lacking the polymer had no impact on antibiotic eradication (ruling out the antibiotic defense theory) while allowing competitor strains to invade (confirming the competitor defense function). Choice B supports the old antibiotic defense view. Choice C is a descriptive detail.",
        glosses: {
          "biofilms": "a collective of one or more types of microorganisms that can grow on many surfaces and produce a protective slime",
          "extracellular polymers": "high-molecular-weight compounds secreted by microorganisms into their environment",
          "colonizing": "establishing a population in a new habitat or ecological niche"
        }
      },
      {
        id: "COE-G-02",
        type: "command-of-evidence",
        stage: "guided",
        difficulty: "Medium",
        passage: "Historian Marcus Miller investigated trade networks between ancient Mesopotamia and the Indus Valley. Miller argued that contrary to the traditional assumption that trade was conducted exclusively via overland caravans through the Iranian plateau, maritime trade via Persian Gulf ports accounted for the vast majority of raw lapis lazuli imports into Ur during the Early Dynastic period.",
        question: "Which finding, if true, would most directly support Miller's argument?",
        choices: [
          "A) Bronze Age shipwrecks in the Persian Gulf contained large consignments of unworked Indus lapis lazuli, while contemporaneous overland trading posts in Iran yielded virtually no lapis artifacts.",
          "B) Lapis lazuli was considered a luxury gemstone worn exclusively by Mesopotamian royalty and high priests.",
          "C) Camel caravans required approximately six months to travel the overland route from the Indus Valley to Mesopotamia.",
          "D) Archaeological excavations at Ur uncovered ceramic storage jars containing preserved grain and barley."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Anchor the claim: Maritime trade in the Persian Gulf was responsible for lapis lazuli imports, NOT overland caravans through Iran.",
          "Hint 2 (Strategy Reminder): What archaeological evidence proves maritime trade over overland trade? Look for artifacts on sea routes vs. land routes.",
          "Hint 3 (Partial Solution): Choice A shows lapis on Persian Gulf shipwrecks and virtually none at Iranian overland posts. Choice B discusses who wore the stone (Out of Scope). Choice D mentions grain instead of lapis (Half Right)."
        ],
        trapTypes: {
          B: "Out of Scope",
          C: "Half Right",
          D: "Out of Scope"
        },
        explanation: "Choice A directly validates Miller's claim by providing comparative physical evidence: lapis lazuli was found on maritime Persian Gulf shipwrecks but was absent from overland Iranian trading sites. Choice B discusses social status. Choice C gives caravan travel times without proving which route was actually used. Choice D is unrelated to lapis lazuli.",
        glosses: {
          "lapis lazuli": "a deep-blue metamorphic rock used as a semi-precious stone prized for its intense color",
          "consignments": "batches of goods delivered or shipped to a recipient",
          "contemporaneous": "originating, existing, or occurring during the same period of time"
        }
      },
      {
        id: "COE-G-03",
        type: "command-of-evidence",
        stage: "guided",
        difficulty: "Hard",
        passage: "An agricultural research station evaluated four cover crop species for their capacity to suppress weed biomass and enhance soil nitrogen content.<br><br><b>Cover Crop Performance Data:</b><br><table class='sat-table'><thead><tr><th>Cover Crop Species</th><th>Weed Suppression (%)</th><th>Nitrogen Added (kg/ha)</th><th>Soil Moisture Retained (%)</th></tr></thead><tbody><tr><td>Crimson Clover</td><td>64%</td><td>110</td><td>32%</td></tr><tr><td>Hairy Vetch</td><td>88%</td><td>145</td><td>28%</td></tr><tr><td>Winter Rye</td><td>92%</td><td>15</td><td>44%</td></tr><tr><td>Field Pea</td><td>58%</td><td>85</td><td>26%</td></tr></tbody></table><br>An agronomist claims that while Winter Rye is the most effective crop for controlling weed growth, Hairy Vetch provides the best overall balance for farmers seeking both substantial weed reduction and significant soil fertilization.",
        question: "Which choice best uses data from the table to support the agronomist's claim?",
        choices: [
          "A) Winter Rye achieved 92% weed suppression, the highest among all crops, while Hairy Vetch combined strong weed suppression (88%) with the highest nitrogen addition (145 kg/ha).",
          "B) Field Pea added 85 kg/ha of nitrogen, which was higher than Hairy Vetch's 145 kg/ha.",
          "C) Crimson Clover provided 64% weed suppression and retained 32% soil moisture, making it superior to Winter Rye in both metrics.",
          "D) Winter Rye added 15 kg/ha of nitrogen, which was the highest nitrogen contribution recorded in the trial."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look up two things in the table: (1) Who had the highest weed suppression? (Winter Rye at 92%), (2) How does Hairy Vetch balance weed suppression and nitrogen?",
          "Hint 2 (Strategy Reminder): Match Hairy Vetch's numbers: Weed Suppression = 88% (second highest), Nitrogen = 145 kg/ha (highest).",
          "Hint 3 (Partial Solution): Choice A matches both numbers accurately and directly supports the agronomist's dual claim. Choices B, C, and D contain obvious mathematical falsehoods."
        ],
        trapTypes: {
          B: "Misused Evidence",
          C: "Misused Evidence",
          D: "Opposite"
        },
        explanation: "Choice A correctly cites the table data: Winter Rye had the top weed suppression (92%), while Hairy Vetch achieved strong weed control (88%) alongside the highest nitrogen contribution (145 kg/ha), proving its balanced dual benefit. Choices B, C, and D state incorrect mathematical comparisons.",
        glosses: {
          "biomass": "the total quantity or weight of organisms in a given area or volume",
          "agronomist": "an expert in the science of soil management and crop production",
          "suppress": "prevent the development, action, or growth of"
        }
      },
      {
        id: "COE-G-04",
        type: "command-of-evidence",
        stage: "guided",
        difficulty: "Hard",
        passage: "Neuroscientists investigated whether multilingualism delays the onset of cognitive symptoms in Alzheimer's patients. Dr. Elena Rostova hypothesized that cognitive reserve acquired from managing multiple languages does not prevent the physical accumulation of amyloid plaques in the brain, but rather enables the brain to maintain functional memory performance despite underlying neurodegeneration.",
        question: "Which finding, if true, would most directly support Dr. Rostova's hypothesis?",
        choices: [
          "A) Multilingual Alzheimer's patients exhibited the exact same high volume of amyloid plaques on PET scans as monolingual patients, but scored significantly higher on clinical memory recall assessments.",
          "B) Multilingual individuals had zero amyloid plaques in their brains, proving that bilingualism confers complete immunity against Alzheimer's disease.",
          "C) Monolingual patients learned foreign language vocabulary significantly faster than multilingual patients during memory trials.",
          "D) Brain scans revealed that multilingual patients had identical brain volume and identical memory recall scores to healthy young college students."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at the two parts of Rostova's hypothesis: (1) Does NOT prevent physical plaques, (2) DOES maintain functional memory.",
          "Hint 2 (Strategy Reminder): Look for a choice where physical plaque volume is EQUAL, but memory test performance is HIGHER in multilinguals.",
          "Hint 3 (Partial Solution): Choice A shows identical plaque levels alongside superior memory scores. Choice B is an extreme/opposite claim (claiming zero plaques). Choice A is the correct match."
        ],
        trapTypes: {
          B: "Too Extreme",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice A directly matches Rostova's hypothesis: multilingual patients had the same volume of amyloid plaques (confirming plaques still accumulate) but achieved significantly better memory scores (confirming functional resilience). Choice B is too extreme ('complete immunity'). Choice C is contrary. Choice D is an extreme overstatement.",
        glosses: {
          "cognitive reserve": "the brain's resilience to neuropathological damage of the mind",
          "amyloid plaques": "aggregates of misfolded proteins that form in the spaces between nerve cells in Alzheimer's disease",
          "neurodegeneration": "the progressive loss of structure or function of neurons"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "COE-I-01",
        type: "command-of-evidence",
        stage: "independent",
        difficulty: "Medium",
        passage: "Economist Dr. Maya Lin hypothesized that introducing universal free school lunches in public school districts increases academic achievement primarily by reducing classroom behavioral disruptions rather than merely by improving individual caloric intake.",
        question: "Which finding, if true, would most directly support Dr. Lin's hypothesis?",
        choices: [
          "A) Following the policy, disciplinary referrals dropped by 45% across all classrooms, and academic gains were largest in classrooms that previously experienced the most behavioral disruptions.",
          "B) Students who ate school lunches consumed 20% more calories per day than students who brought lunches from home.",
          "C) School districts spending the most money on cafeteria kitchen equipment had the lowest standardized math test scores.",
          "D) High school students universally agreed that cafeteria lunch food was superior in taste to restaurant food."
        ],
        answer: "A",
        trapTypes: {
          B: "Half Right",
          C: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice A directly supports the behavioral mechanism: disciplinary referrals fell by 45%, and the biggest academic gains occurred in the most previously disruptive classrooms. Choice B focuses on caloric intake (which Lin hypothesized was NOT the primary driver). Choice C and D are irrelevant or opposite.",
        glosses: {
          "caloric intake": "the total number of calories consumed through food and beverages",
          "referrals": "official reports directing a student to a school administrator for disciplinary action"
        }
      },
      {
        id: "COE-I-02",
        type: "command-of-evidence",
        stage: "independent",
        difficulty: "Hard",
        passage: "Ornithologists recorded the vocal frequency and amplitude of urban European blackbirds (*Turdus merula*) across four cities with varying levels of anthropogenic noise.<br><br><b>Urban Song Characteristics:</b><br><table class='sat-table'><thead><tr><th>City Location</th><th>Ambient Traffic Noise (dB)</th><th>Minimum Song Frequency (Hz)</th><th>Song Amplitude (dB)</th></tr></thead><tbody><tr><td>Rural Forest (Control)</td><td>42</td><td>1,850</td><td>68</td></tr><tr><td>City Park</td><td>58</td><td>2,200</td><td>74</td></tr><tr><td>Suburban Plaza</td><td>65</td><td>2,450</td><td>79</td></tr><tr><td>Urban Center</td><td>76</td><td>2,800</td><td>84</td></tr></tbody></table><br>A researcher asserts that European blackbirds dynamically adapt their vocalizations in noisy urban environments by both shifting their songs to higher acoustic pitches and singing at higher volumes to prevent traffic noise from masking their territory calls.",
        question: "Which choice best uses data from the table to support the researcher's assertion?",
        choices: [
          "A) As ambient traffic noise increased from 42 dB in the rural forest to 76 dB in the urban center, the blackbirds' minimum song frequency rose from 1,850 Hz to 2,800 Hz and song amplitude rose from 68 dB to 84 dB.",
          "B) Blackbirds in the urban center sang at a lower frequency (1,850 Hz) and lower volume (68 dB) than blackbirds in the rural forest.",
          "C) Rural forest blackbirds experienced an ambient noise level of 76 dB, which caused them to sing at an amplitude of 84 dB.",
          "D) Blackbirds in the city park sang at 2,800 Hz, which was higher than the frequency of blackbirds in the urban center (2,200 Hz)."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Misused Evidence",
          D: "Misused Evidence"
        },
        explanation: "Choice A is correct. It accurately reflects the positive correlation shown in the table: as noise increased from 42 dB to 76 dB, song frequency rose from 1,850 Hz to 2,800 Hz (higher pitch) and amplitude increased from 68 dB to 84 dB (higher volume). Choices B, C, and D state incorrect numbers or reversed relationships.",
        glosses: {
          "anthropogenic": "originating in human activity; environmental pollution or noise caused by humans",
          "amplitude": "the maximum extent of a vibration or oscillation, corresponding to loudness or volume",
          "masking": "the process by which the threshold of audibility for one sound is raised by the presence of another"
        }
      },
      {
        id: "COE-I-03",
        type: "command-of-evidence",
        stage: "independent",
        difficulty: "Hard",
        passage: "Materials engineers hypothesized that adding multi-walled carbon nanotubes (MWCNTs) to concrete would increase compressive strength by bridging microscopic cracks, but only up to a concentration of 0.5% by weight; beyond that threshold, nanotube clumping would create internal void defects that weaken the material.",
        question: "Which finding, if true, would most directly support the engineers' hypothesis?",
        choices: [
          "A) Concrete with 0.5% MWCNTs exhibited 45% higher compressive strength than plain concrete, while concrete with 1.0% MWCNTs exhibited 20% lower compressive strength than plain concrete due to widespread agglomeration.",
          "B) Concrete with 1.0% MWCNTs possessed the highest compressive strength ever recorded in civil engineering history.",
          "C) Plain concrete without any carbon nanotubes was completely impervious to cracking under all tectonic earthquake pressures.",
          "D) Carbon nanotubes increased the financial cost of producing concrete by 300% per metric ton."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice A directly proves the two-part hypothesis: strength increased at 0.5% (+45%) but dropped below baseline at 1.0% (-20%) due to nanotube clumping (agglomeration). Choice B contradicts the tipping point hypothesis. Choice C is extreme and unsupported. Choice D focuses on cost rather than material strength.",
        glosses: {
          "nanotubes": "tubular structures of carbon atoms with diameters typically measured in nanometers",
          "compressive strength": "the capacity of a material or structure to withstand loads tending to reduce size",
          "agglomeration": "the formation of things into a cluster or clump"
        }
      },
      {
        id: "COE-I-04",
        type: "command-of-evidence",
        stage: "independent",
        difficulty: "Medium",
        passage: "Linguist Dr. Sonia Rao hypothesized that heritage language speakers (individuals raised in homes where a non-English language is spoken) retain intuitive grammatical phonology in their heritage tongue even when their adult active conversational vocabulary has significantly atrophied.",
        question: "Which finding, if true, would most directly support Dr. Rao's hypothesis?",
        choices: [
          "A) Heritage speakers who could recall only 20% of basic conversational nouns still produced native-like accent vowel pitch and tone distinctions in phonological listening tests indistinguishable from native residents.",
          "B) Heritage speakers forgot how to pronounce vowels in their native language within two years of beginning English schooling.",
          "C) Heritage speakers scored 100% on every formal written grammar and vocabulary exam in both languages.",
          "D) English monolinguals acquired foreign language phonology faster than fluent bilingual adults."
        ],
        answer: "A",
        hints: [
          "Hint 1: Look for low vocabulary + high native-like phonology."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice A provides direct evidence: speakers with poor vocabulary recall (only 20%) still exhibited native-like vowel pitch and tone distinctions (intact intuitive phonology). Choice B contradicts the hypothesis. Choice C is an extreme overstatement. Choice D is irrelevant.",
        glosses: {
          "phonology": "the system of relationships among the speech sounds that constitute the fundamental components of a language",
          "atrophied": "wasted away, diminished, or declined in effectiveness due to underuse"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Command of Evidence Self-Audit",
      prompts: [
        { id: "coe-1", label: "I identify the exact claim or hypothesis in the question stem before evaluating evidence options." },
        { id: "coe-2", label: "For table/graph questions, I verify each number, column header, and trend against the answer choices." },
        { id: "coe-3", label: "I reject 'Misused Evidence' options that quote true data but link it to the wrong conclusion." }
      ]
    }
  },

  // =========================================================================
  // MODULE 6: INFERENCES (INFORMATION & IDEAS)
  // =========================================================================
  "MOD-6": {
    metadata: {
      id: "MOD-6",
      title: "Inferences",
      domain: "Information & Ideas",
      methodName: "The Must-Be-True Rule",
      tagline: "The correct inference requires ZERO speculation—it is the minimal, inescapable logical step forced by the passage."
    },
    stage1_skill: {
      title: "What Does Inferences Test?",
      whatItTests: "Inference questions present an argument, experiment, or logical chain of premises that ends with a blank line. Your job is to select the choice that 'most logically completes the text.' On the SAT, an inference is NOT an imaginative creative guess; it is an airtight, mathematically forced logical conclusion.",
      frequency: "4 to 6 questions per module.",
      recognitionTest: "The question stem almost always reads: 'Which choice most logically completes the text?'",
      eslNote: "The #1 trap on Inferences is 'Out of Scope Speculation'. If the passage discusses 3 species of birds, do NOT pick an answer about 'all bird evolution across history'. The correct answer is always humble, cautious, and strictly bounded."
    },
    stage2_method: {
      name: "The Must-Be-True Rule",
      summary: "A 4-step logic protocol that eliminates ungrounded assumptions.",
      steps: [
        {
          num: 1,
          title: "Diagram the Premise Chain",
          rule: "Identify Premise 1, Premise 2, and the Final Transition Word.",
          expertMove: "I summarize: 'Fact A: Deep caves lack light. Fact B: Blind cavefish conserve 15% energy by not developing eyes. Therefore...'"
        },
        {
          num: 2,
          title: "Check the Final Transition",
          rule: "Notice words like 'suggesting that', 'therefore', 'consequently', or 'it follows that'.",
          expertMove: "The transition dictates the logical direction: positive consequence, negative limitation, or alternative explanation."
        },
        {
          num: 3,
          title: "Enforce the Boundary Limits",
          rule: "The conclusion must stay within the exact nouns, conditions, and parameters established in the text.",
          expertMove: "If the text is about cavefish, the conclusion cannot be about 'all subterranean vertebrates worldwide'."
        },
        {
          num: 4,
          title: "Select the Minimal Necessary Step",
          rule: "Choose the answer that requires the smallest possible logical leap.",
          expertMove: "On the SAT, the most modest, qualified, unexciting choice is almost always the right answer."
        }
      ]
    },
    stage3_workedExamples: [
      {
        id: "INF-W-01",
        type: "inferences",
        stage: "worked-example",
        difficulty: "Medium",
        passage: "Agricultural scientists know that phosphorus is an essential nutrient for crop development, yet global rock phosphate reserves are rapidly depleting. To explore sustainable alternatives, researchers inoculated wheat crops with mycorrhizal fungi, which secrete organic acids that solubilize insoluble phosphorus bound in mineral soil. The inoculated wheat absorbed 35% more soil phosphorus than non-inoculated control crops grown in identical phosphorus-deficient soils, leading the researchers to conclude that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) mycorrhizal fungi can fully replace water and sunlight in commercial wheat agriculture.",
          "B) inoculating crops with mycorrhizal fungi could help sustain agricultural yields while reducing dependence on synthetic phosphate fertilizers.",
          "C) non-inoculated wheat crops are genetically incapable of absorbing any soil nutrients whatsoever.",
          "D) global rock phosphate reserves will be completely replenished naturally within the next decade."
        ],
        answer: "B",
        thinkAloud: [
          "Step 1 (Chain the Premises): Premise 1 = Phosphate reserves are depleting. Premise 2 = Mycorrhizal fungi solubilize insoluble soil phosphorus. Premise 3 = Inoculated wheat absorbed 35% more phosphorus in low-phosphorus soil.",
          "Step 2 (Determine Logical Conclusion): What naturally follows from Premises 1-3? Fungi can help crops get phosphorus from soil, which helps solve the problem of depleting reserves.",
          "Step 3 (Predict the Conclusion): Fungi can reduce the need for external phosphate fertilizers while maintaining crop growth.",
          "Step 4 (Test Choices): Choice A is 'Too Extreme' (replace water and sunlight?!). Choice B is cautious, modest, and logically forced ('could help sustain yields while reducing dependence...'). Choice C is 'Too Extreme' ('incapable of absorbing any nutrients'). Choice D is 'Opposite/Out of Scope'. Select B."
        ],
        trapTypes: {
          A: "Too Extreme",
          C: "Too Extreme",
          D: "Out of Scope"
        },
        explanation: "Choice B is correct. It makes the modest, logically required inference: because the fungi increase phosphorus absorption in depleted soils, using them could reduce reliance on mined phosphate fertilizers while supporting yields. Choices A and C make extreme, absurd claims. Choice D contradicts the depletion premise.",
        glosses: {
          "inoculated": "introduced microorganisms into a culture or agricultural crop to promote beneficial growth",
          "solubilize": "make a substance soluble or dissolve in liquid",
          "depleting": "diminishing in number or quantity; using up supplies"
        }
      },
      {
        id: "INF-W-02",
        type: "inferences",
        stage: "worked-example",
        difficulty: "Hard",
        passage: "Historians studying 14th-century Venetian glassmaking have debated whether the republic's strict 1291 decree relocating all glass furnaces to the island of Murano was motivated primarily by fire prevention in the wooden city or by a desire to guard state industrial secrets. Records show that Venetian glassmakers who fled Murano to practice their craft abroad faced severe financial penalties and even state-sponsored assassination warrants, whereas infractions of municipal fire safety codes in other Venetian industries were punished merely by nominal fines. This disparity strongly suggests that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) the Venetian government prioritized safeguarding its lucrative glassmaking monopoly over standard urban fire safety concerns.",
          "B) glass furnaces on Murano were completely immune to accidental fires and structural heat damage.",
          "C) foreign glassmakers successfully overthrew the Venetian republic's diplomatic trade treaties.",
          "D) municipal fire codes in 14th-century Venice were universally ignored by all industrial guilds."
        ],
        answer: "A",
        thinkAloud: [
          "Step 1 (Identify the Core Conflict): Was Murano relocation about (A) fire prevention, or (B) guarding glass secrets?",
          "Step 2 (Examine the Comparative Evidence): Fire code violations = small fines. Leaking glass secrets abroad = assassination warrants and huge penalties.",
          "Step 3 (Deduce the Logical Conclusion): The extreme disparity in punishment proves the state cared far more about protecting its secret glass monopoly than simple fire safety.",
          "Step 4 (Match with Choices): Choice A matches the deduction directly: prioritized safeguarding the glassmaking monopoly over fire safety. Choice B is 'Too Extreme'. Choice C is 'Out of Scope'. Choice D is 'Too Extreme'. Select A."
        ],
        trapTypes: {
          B: "Too Extreme",
          C: "Out of Scope",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The stark contrast between lethal penalties for sharing glass secrets and minor fines for fire safety infractions forces the logical conclusion that the state's true priority was protecting its proprietary glassmaking monopoly. Choices B and D are extreme generalizations. Choice C is unsupported.",
        glosses: {
          "nominal": "(of a role or status) existing in name only; (of a price or fee) very small; far below the real value",
          "disparity": "a great difference or lack of equality between things",
          "lucrative": "producing a great deal of profit"
        }
      }
    ],
    stage4_trapLab: [
      {
        id: "INF-TRAP-01",
        stem: "Text: 'Studies show that cats sleep an average of 14 hours per day to conserve energy for predatory sprints.'",
        wrongChoice: "Therefore, any cat that sleeps only 12 hours will permanently lose the ability to catch mice.",
        correctTrap: "Too Extreme",
        options: ["Too Extreme", "Out of Scope", "Opposite", "Half Right"],
        rationale: "Claiming a cat sleeping 12 hours will 'permanently lose the ability' to hunt is an extreme, ungrounded leap not supported by the average sleep statistic."
      },
      {
        id: "INF-TRAP-02",
        stem: "Text: 'Excavations in an ancient Celtic settlement revealed Roman amphorae filled with wine residues dating to 50 BCE, long before the Roman military conquest of Gaul.'",
        wrongChoice: "This proves that Celtic tribes conquered Rome and established trade colonies in central Italy in 50 BCE.",
        correctTrap: "Opposite",
        options: ["Opposite", "Too Extreme", "Out of Scope", "Half Right"],
        rationale: "Finding Roman wine in a Celtic village indicates pre-conquest trade from Rome to the Celts, not a Celtic military conquest of Rome (swaps the subject and direction)."
      },
      {
        id: "INF-TRAP-03",
        stem: "Text: 'Electric vehicles produce zero tailpipe emissions, but the manufacturing of their lithium-ion batteries generates substantial upfront greenhouse gases.'",
        wrongChoice: "Therefore, all electric vehicle factories should be converted into petroleum refineries immediately.",
        correctTrap: "Out of Scope",
        options: ["Out of Scope", "Too Extreme", "Opposite", "Half Right"],
        rationale: "Converting EV factories into oil refineries is a radical policy proposal fabricated entirely outside the scientific trade-off described in the text."
      },
      {
        id: "INF-TRAP-04",
        stem: "Text: 'Bats emit ultrasonic chirps and calculate the time delay of returning echoes to determine an insect's exact distance.'",
        wrongChoice: "Bats emit high-frequency ultrasonic chirps from their vocal tracts.",
        correctTrap: "Half Right",
        options: ["Half Right", "Opposite", "Too Extreme", "Out of Scope"],
        rationale: "This choice merely restates a background premise from sentence 1. It is not an INFERENCE or logical completion of the argument; it is just a repeated detail."
      }
    ],
    stage5_guidedPractice: [
      {
        id: "INF-G-01",
        type: "inferences",
        stage: "guided",
        difficulty: "Easy",
        passage: "Desert horned lizards (*Phrynosoma*) inhabit arid regions where open water sources are virtually nonexistent. Researchers observed that during rare morning fogs, moisture condenses on the lizard's specialized keeled scales. Microscopic capillary channels between the scales automatically transport the water droplets across the lizard's skin directly into its mouth, even when the animal is facing uphill against gravity. This anatomical adaptation suggests that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) horned lizards rely on specialized passive skin structures to harvest drinking water from atmospheric moisture in arid environments.",
          "B) horned lizards are incapable of surviving in habitats where rainwater falls frequently.",
          "C) microscopic capillary channels are present in all desert reptilian species worldwide.",
          "D) horned lizards drink water exclusively by submerging their heads in freshwater rivers."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at what the scales do: collect fog moisture and automatically channel it into the lizard's mouth without open water.",
          "Hint 2 (Strategy Reminder): Apply the Must-Be-True Rule: What is the direct functional takeaway of this physical adaptation?",
          "Hint 3 (Partial Solution): Choice B is an ungrounded negative assumption. Choice C has the extreme word 'all reptilian species'. Choice D contradicts the text (open water is nonexistent). Choice A is the direct, logical completion."
        ],
        trapTypes: {
          B: "Out of Scope",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice A is correct. The text details how the lizard's scales condense fog and passively channel water into its mouth, forcing the logical conclusion that this adaptation enables it to harvest atmospheric moisture for drinking. Choice B is unsupported. Choice C is too extreme. Choice D contradicts the absence of rivers.",
        glosses: {
          "keeled": "having a ridge down the middle, like the keel of a boat",
          "capillary": "a tube or space with an internal diameter so small that liquid is drawn along it by surface tension",
          "arid": "having little or no rain; too dry or barren to support vegetation"
        }
      },
      {
        id: "INF-G-02",
        type: "inferences",
        stage: "guided",
        difficulty: "Medium",
        passage: "In 1977, the Voyager 1 spacecraft detected lightning discharges in the atmosphere of Jupiter. However, while terrestrial lightning on Earth is most frequent around the equatorial tropics where solar heating drives atmospheric convection, Voyager's optical sensors detected lightning strikes on Jupiter clustered almost exclusively around the polar regions. On Jupiter, sunlight is too weak to drive tropical convection, but internal heat radiating from the planet's core creates strong convective plumes at the poles where solar interference is minimal. It can therefore be inferred that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) the primary thermodynamic engine driving atmospheric convection on Jupiter differs fundamentally from that on Earth.",
          "B) Jupiter's atmosphere is completely devoid of electrical storms during the winter months.",
          "C) lightning strikes on Earth are caused exclusively by geothermal energy released from deep volcanic trenches.",
          "D) the Voyager 1 spacecraft malfunctioned and misidentified harmless auroral glows as lightning strikes."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Compare Earth's engine (solar heating driving equatorial convection) with Jupiter's engine (internal core heat driving polar convection).",
          "Hint 2 (Strategy Reminder): What overarching conclusion bridges the contrast between Earth's solar-driven storms and Jupiter's core-heat-driven storms?",
          "Hint 3 (Partial Solution): Choice A states that the thermodynamic engine driving convection differs fundamentally between the two planets. Choice B is out of scope. Choice C is the opposite of Earth's solar model. Choice D is an unsupported conspiracy."
        ],
        trapTypes: {
          B: "Out of Scope",
          C: "Opposite",
          D: "Out of Scope"
        },
        explanation: "Choice A is correct. Earth's convection is driven by solar heat at the equator, whereas Jupiter's is driven by internal planetary heat at the poles, compelling the logical conclusion that the primary thermodynamic mechanisms driving convection differ fundamentally between the two planets. Choices B, C, and D are fabricated or contradictory.",
        glosses: {
          "convection": "the movement caused within a fluid by the tendency of hotter and less dense material to rise, and colder, denser material to sink",
          "thermodynamic": "relating to the branch of physics concerned with heat and other forms of energy or work",
          "auroral": "relating to the aurora (natural electrical light displays in the sky near magnetic poles)"
        }
      },
      {
        id: "INF-G-03",
        type: "inferences",
        stage: "guided",
        difficulty: "Hard",
        passage: "In behavioral economics, researchers evaluated whether requiring consumers to 'opt out' rather than 'opt in' to organ donation registries increases participation rates. In countries with opt-in systems (such as Germany), where citizens must actively fill out a form to become donors, registration rates linger around 12%. In contrast, in countries with opt-out systems (such as Austria), where citizens are presumed donors unless they register an explicit objection, donation consent rates exceed 99%. Crucially, surveys show that public moral attitudes toward organ donation are virtually identical in both countries. This finding suggests that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) the massive disparity in organ donation rates between these nations is driven by administrative default settings rather than underlying cultural values.",
          "B) citizens in Germany are overwhelmingly hostile toward the medical efficacy of organ transplants.",
          "C) opt-out organ donation policies invariably lead to widespread political uprisings across European democracies.",
          "D) cultural attitudes have zero influence on any human behavioral decision in modern society."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Note the key contrast: Huge registration gap (12% vs 99%), BUT identical moral attitudes.",
          "Hint 2 (Strategy Reminder): If moral attitudes are identical, what is responsible for the 87% difference? Look at the difference in the policy structure (opt-in vs. opt-out default).",
          "Hint 3 (Partial Solution): Choice A identifies 'administrative default settings' rather than 'cultural values' as the driver. Choice B contradicts the survey data. Choice D is far too extreme. Select Choice A."
        ],
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. Because public moral attitudes toward donation are identical in Germany and Austria, the massive difference in participation (12% vs. 99%) must be attributed to the default policy rule (opt-in vs. opt-out) rather than cultural sentiment. Choice B contradicts the survey data. Choices C and D are extreme exaggerations.",
        glosses: {
          "opt-out": "an option to choose not to participate in something",
          "disparity": "a noticeable and usually significant difference or inequality",
          "efficacy": "the ability to produce a desired or intended result"
        }
      },
      {
        id: "INF-G-04",
        type: "inferences",
        stage: "guided",
        difficulty: "Hard",
        passage: "To determine the hunting strategies of extinct sabertooth cats (*Smilodon fatalis*), paleontologists analyzed the mechanical bite force and skull anatomy of fossil specimens. Smilodon possessed elongated, blade-like canine teeth that were exceptionally brittle and vulnerable to snapping if subjected to torsional stress from struggling prey. However, Smilodon also possessed robust, muscular forelimbs capable of pinning large herbivores to the ground with immense force. It is therefore reasonable to conclude that Smilodon _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) relied on its powerful forelimbs to immobilize prey before delivering a precise, lethal bite with its fragile canines.",
          "B) consumed exclusively small rodents and insects that posed zero risk of damaging its teeth.",
          "C) used its brittle canines to shatter heavy bison leg bones during high-speed chases.",
          "D) abandoned predatory carnivory entirely in favor of scavenging long-dead carcasses."
        ],
        answer: "A",
        hints: [
          "Hint 1 (Nudge): Look at the physical dilemma and solution: (1) Canines were fragile/brittle against struggling prey, BUT (2) Forelimbs were heavily muscled for pinning prey.",
          "Hint 2 (Strategy Reminder): How do these two anatomical facts fit together logically into a coordinated hunting strategy?",
          "Hint 3 (Partial Solution): Choice A synthesizes both: pin first with forelimbs, then deliver the bite so the teeth don't break. Choice C contradicts the brittle nature of the canines. Choice A is forced by the text."
        ],
        trapTypes: {
          B: "Too Extreme",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The text sets up a functional link: because the canines were brittle and vulnerable to breaking against struggling prey, Smilodon used its powerful forelimbs to immobilize large animals before biting, minimizing tooth-snapping stress. Choice C contradicts the fragility of the teeth. Choices B and D are unsupported.",
        glosses: {
          "torsional": "relating to the twisting or wrenching of an object by the exertion of forces",
          "immobilize": "prevent something from moving or operating as normal",
          "carnivory": "the habit of feeding on animal flesh"
        }
      }
    ],
    stage6_independentPractice: [
      {
        id: "INF-I-01",
        type: "inferences",
        stage: "independent",
        difficulty: "Medium",
        passage: "In marine ecology, coral reefs rely on photosynthetic dinoflagellates (zooxanthellae) living inside their tissues to provide glucose. When water temperatures exceed normal thresholds by as little as 1°C for several weeks, the heat damages the algae's photosynthetic machinery, causing them to produce toxic reactive oxygen species. In response, the coral host expels the algae, leading to 'coral bleaching'. If elevated temperatures persist, the bleached coral inevitably starves to death. This biological sequence indicates that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) coral bleaching is an active biological expulsion triggered by chemical stress rather than an immediate thermal death of the coral animal.",
          "B) dinoflagellates thrive best in boiling ocean water with high reactive oxygen concentrations.",
          "C) bleached corals instantly adapt to consuming deep-sea hydrothermal minerals for survival.",
          "D) all global marine coral species will be completely extinct by the end of the current month."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Out of Scope",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The passage explains that heat damages the algae, causing them to produce toxic reactive oxygen, which prompts the coral host to expel the algae (an active biological ejection triggered by chemical toxicity). Starvation happens only if elevated heat persists. Choice B is opposite. Choice D is an extreme temporal exaggeration.",
        glosses: {
          "dinoflagellates": "single-celled organisms with two flagella, occurring in large numbers in marine plankton and as endosymbionts in corals",
          "reactive oxygen species": "unstable molecules that contain oxygen and that easily react with other molecules in a cell, causing cellular damage",
          "bleaching": "the whitening of corals resulting from the loss of symbiotic algae"
        }
      },
      {
        id: "INF-I-02",
        type: "inferences",
        stage: "independent",
        difficulty: "Hard",
        passage: "During the Bronze Age collapse (circa 1200 BCE), several interconnected Mediterranean civilizations—including the Mycenaeans, Hittites, and New Kingdom Egyptians—experienced sudden political disintegration. Historians long debated whether this collapse was triggered by foreign invasions by the enigmatic 'Sea Peoples' or by severe multi-decadal megadroughts. Recent isotopic analysis of stalagmites from regional caves reveals a sharp 150-year reduction in precipitation across the entire eastern Mediterranean beginning precisely around 1200 BCE, coinciding with widespread agricultural crop failures and grain warehouse burnings. This chronological and paleoclimatic convergence suggests that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) climatic desiccation and subsequent food shortages played a central catalyst role in the systemic breakdown of Bronze Age societies.",
          "B) the Sea Peoples built sophisticated underground cave networks to control the region's stalagmite formations.",
          "C) the civilizations of the eastern Mediterranean had zero trade or agricultural connections with one another.",
          "D) the 1200 BCE drought instantly caused all human life across the Mediterranean basin to vanish."
        ],
        answer: "A",
        trapTypes: {
          B: "Out of Scope",
          C: "Opposite",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The paleoclimatic evidence shows a severe 150-year drought precisely aligning with crop failures, grain burnings, and civilization collapse, making it logically forced that climate-driven food shortages were a central catalyst in the societal breakdown. Choices B, C, and D are extreme or nonsensical distractors.",
        glosses: {
          "stalagmites": "mound- or column-like mineral deposits rising from the floor of a cave formed by dripping water",
          "desiccation": "the removal of moisture from something; extreme drying out",
          "convergence": "the coming together of two or more things or lines of evidence"
        }
      },
      {
        id: "INF-I-03",
        type: "inferences",
        stage: "independent",
        difficulty: "Hard",
        passage: "In cognitive psychology, the 'spacing effect' demonstrates that students retain information significantly longer when study sessions are distributed across days rather than concentrated into a single cramming session. Brain imaging studies show that during spaced repetitions, the neural memory trace must be actively reconstructed by the prefrontal cortex, which strengthens synaptic consolidation. During massed cramming, however, the target information remains continuously active in working memory, preventing the neural retrieval effort required to forge enduring long-term connections. It follows that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) the mental difficulty of retrieving partially faded information is actually an essential mechanism in forming robust long-term memories.",
          "B) cramming the night before an examination causes immediate permanent damage to the prefrontal cortex.",
          "C) spaced study sessions eliminate the need for students to review any academic material ever again.",
          "D) working memory is completely useless for any real-world cognitive problem solving."
        ],
        answer: "A",
        trapTypes: {
          B: "Too Extreme",
          C: "Too Extreme",
          D: "Too Extreme"
        },
        explanation: "Choice A is correct. The text explains that spaced learning works because the memory trace must be actively reconstructed through neural retrieval effort, meaning the effort of retrieving faded information is what strengthens long-term storage. Choices B, C, and D are extreme, exaggerated distortions.",
        glosses: {
          "prefrontal cortex": "the cerebral cortex covering the front part of the frontal lobe, implicated in planning and complex cognitive behavior",
          "consolidation": "the biological process by which temporary memory traces are transformed into permanent long-term storage",
          "working memory": "the small amount of information that can be held in mind and used in the execution of cognitive tasks"
        }
      },
      {
        id: "INF-I-04",
        type: "inferences",
        stage: "independent",
        difficulty: "Medium",
        passage: "To investigate whether early childhood musical training enhances general linguistic ability, researchers compared phoneme discrimination in 6-year-old children who completed one year of violin instruction versus children who completed an identical duration of painting classes. While both groups scored identically on baseline non-auditory visual puzzle tests, the violin group demonstrated significantly higher accuracy in distinguishing subtle pitch inflections in unfamiliar tonal foreign languages. Because musical pitch processing and linguistic pitch processing share overlapping neural circuits in Heschl's gyrus, the researchers concluded that _______",
        question: "Which choice most logically completes the text?",
        choices: [
          "A) instrumental musical training can produce cross-domain auditory enhancements that benefit foreign language phonological perception.",
          "B) painting instruction destroys a child's natural ability to distinguish speech sounds in their native language.",
          "C) children who learn the violin are genetically predisposed to scoring 100% on every standardized academic test.",
          "D) musical training has zero effect on any cognitive faculty outside of playing classical violin sonatas."
        ],
        answer: "A",
        trapTypes: {
          B: "Opposite",
          C: "Too Extreme",
          D: "Opposite"
        },
        explanation: "Choice A is correct. The text shows violin training improved tonal foreign language pitch discrimination and notes that music and language pitch share brain circuits in Heschl's gyrus, forcing the conclusion that musical training produces cross-domain benefits for linguistic perception. Choices B, C, and D are opposite or extreme.",
        glosses: {
          "phoneme": "any of the perceptually distinct units of sound in a specified language that distinguish one word from another",
          "inflections": "changes in the pitch or tone of the voice",
          "Heschl's gyrus": "the area of the primary auditory cortex located in the superior temporal gyrus of the brain"
        }
      }
    ],
    selfAssessmentRubric: {
      title: "Inferences Self-Audit",
      prompts: [
        { id: "inf-1", label: "I ensure my selected conclusion requires zero outside speculation and stays strictly within text boundaries." },
        { id: "inf-2", label: "I check the final transition word (therefore, consequently, suggesting that) to align the logical direction." },
        { id: "inf-3", label: "I pick the minimal necessary step and eliminate dramatic, extreme generalizations." }
      ]
    }
  }
};
