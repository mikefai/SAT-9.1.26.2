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
  "t": "Toggle Teacher Mode",
  "e": "Toggle Answer Elimination Mode",
  "Enter": "Next Step / Submit Answer",
  "Escape": "Close Modal / Drawer"
};
