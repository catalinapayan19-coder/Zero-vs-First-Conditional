import { ChallengeItem, GrammarExample } from '../types';

export const ZERO_CONDITIONAL_EXAMPLES: GrammarExample[] = [
  {
    id: 'zero-ex-1',
    condition: 'If students practice every day,',
    result: 'they improve their English.',
    fullSentence: 'If students practice every day, they improve their English.',
    explanation: 'A regular study habit always leads to natural progress! Both verbs are in Present Simple (practice, improve).',
    icon: '📚',
    teacherContext: 'Teacher Advice: Daily habits in English learning create consistent automatic skills.'
  },
  {
    id: 'zero-ex-2',
    condition: 'If teachers explain clearly,',
    result: 'students understand better.',
    fullSentence: 'If teachers explain clearly, students understand better.',
    explanation: 'A pedagogical fact! Clear instructions always produce better student comprehension. (explain, understand).',
    icon: '👩‍🏫',
    teacherContext: 'Teacher Advice: Scaffold your lesson instructions with short, clear sentences.'
  },
  {
    id: 'zero-ex-3',
    condition: 'If a classroom is noisy,',
    result: "students don't concentrate.",
    fullSentence: "If a classroom is noisy, students don't concentrate.",
    explanation: 'A general truth about classroom atmosphere. Negative present simple: "don\'t concentrate".',
    icon: '🤫',
    teacherContext: 'Teacher Advice: Manage classroom noise with interactive signals and clear ground rules.'
  }
];

export const FIRST_CONDITIONAL_EXAMPLES: GrammarExample[] = [
  {
    id: 'first-ex-1',
    condition: 'If teachers use technology in class,',
    result: 'students will be more engaged.',
    fullSentence: 'If teachers use technology in class, students will be more engaged.',
    explanation: 'A real future possibility! Present Simple after "If" (use) + Future with "will" (will be).',
    icon: '💻',
    teacherContext: 'Teacher Advice: Incorporating digital quizzes or gamified boards boosts future student participation.'
  },
  {
    id: 'first-ex-2',
    condition: 'If you review before the exam,',
    result: 'you will pass easily.',
    fullSentence: 'If you review before the exam, you will pass easily.',
    explanation: 'A probable outcome in the near future! Action: review (Present) -> Result: will pass (Future).',
    icon: '📝',
    teacherContext: 'Teacher Advice: Encourage your students to complete spaced repetition reviews.'
  },
  {
    id: 'first-ex-3',
    condition: 'If you use flashcards,',
    result: 'you will remember new words.',
    fullSentence: 'If you use flashcards, you will remember new words.',
    explanation: 'A realistic promise of future vocabulary retention! Condition: use -> Consequence: will remember.',
    icon: '🗂️',
    teacherContext: 'Teacher Advice: Digital flashcards are fantastic interactive learning materials for A2 students.'
  }
];

export const COMPARISON_TABLE = [
  {
    aspect: 'Meaning & Purpose',
    zero: 'General truths, automatic scientific facts, permanent habits',
    first: 'Real and possible future situations and realistic consequences'
  },
  {
    aspect: 'Condition Clause (If)',
    zero: 'Present Simple (e.g. practice, explains, is)',
    first: 'Present Simple (e.g. use, review, practice)'
  },
  {
    aspect: 'Result Clause',
    zero: 'Present Simple (e.g. improve, understand, don\'t concentrate)',
    first: 'Will + Base Verb (e.g. will be, will pass, will remember)'
  },
  {
    aspect: 'Classroom Example',
    zero: 'If a bell rings, students pack their schoolbags. (Always happens)',
    first: 'If you study tonight, you will get a high mark tomorrow. (Possible future)'
  },
  {
    aspect: 'Probability',
    zero: '100% True (Always true fact)',
    first: 'High Probability (Possible & likely in the future)'
  }
];

export const CHALLENGE_ITEMS: ChallengeItem[] = [
  // --- ZERO CONDITIONAL ITEMS (1 to 5) ---
  {
    id: 1,
    conditionalType: 'zero',
    activityType: 'fill-blank',
    title: 'Zero Conditional: Fill in the Blank',
    instruction: 'Select the correct Present Simple verb form for this universal study habit.',
    sentencePrompt: 'If students practice speaking every day, they [___] their English skills.',
    audioText: 'If students practice speaking every day, they improve their English skills.',
    options: ['improve', 'will improve', 'improved'],
    correctAnswer: 'improve',
    explanationTip: 'Zero Conditional uses Present Simple in BOTH clauses! (practice -> improve).',
    icon: '🗣️'
  },
  {
    id: 2,
    conditionalType: 'zero',
    activityType: 'true-false',
    title: 'Zero Conditional: Fact Check',
    instruction: 'Is this statement a general pedagogical fact described with Zero Conditional?',
    sentencePrompt: '"If teachers explain instructions clearly, students understand better."',
    audioText: 'If teachers explain instructions clearly, students understand better.',
    isTrue: true,
    tfExplanation: 'True! This is a general truth about teaching: Present Simple + Present Simple.',
    explanationTip: 'Yes! Both "explain" and "understand" are in the Present Simple, expressing a permanent truth.',
    icon: '👩‍🏫'
  },
  {
    id: 3,
    conditionalType: 'zero',
    activityType: 'fill-blank',
    title: 'Zero Conditional: Classroom Environment',
    instruction: 'Complete the condition clause with the correct Present Simple form of "to be".',
    sentencePrompt: 'If a classroom [___] noisy, students do not concentrate well.',
    audioText: 'If a classroom is noisy, students do not concentrate well.',
    options: ['is', 'will be', 'are'],
    correctAnswer: 'is',
    explanationTip: '"A classroom" is singular (it), so we use "is" in the Present Simple.',
    icon: '🤫'
  },
  {
    id: 4,
    conditionalType: 'zero',
    activityType: 'true-false',
    title: 'Zero Conditional: Classroom Rule',
    instruction: 'Does this sentence correctly use the Zero Conditional for an everyday classroom rule?',
    sentencePrompt: '"If a student arrives late to class, he will knock on the door quietly."',
    audioText: 'If a student arrives late to class, he knocks on the door quietly.',
    isTrue: false,
    tfExplanation: 'False! For an established general rule/habit, Zero Conditional uses Present Simple ("knocks"), not "will knock".',
    explanationTip: 'Remember: Zero Conditional does NOT use "will"! It uses Present Simple in both parts: If a student arrives late, he knocks.',
    icon: '🚪'
  },
  {
    id: 5,
    conditionalType: 'zero',
    activityType: 'fill-blank',
    title: 'Zero Conditional: Teacher Reaction',
    instruction: 'Choose the correct Present Simple verb form for this habitual reaction.',
    sentencePrompt: 'Teachers [___] proud if their students collaborate respectfully.',
    audioText: 'Teachers feel proud if their students collaborate respectfully.',
    options: ['feel', 'will feel', 'feeling'],
    correctAnswer: 'feel',
    explanationTip: '"Teachers" is plural (they), so the Present Simple form is "feel". Notice the result clause comes first without a comma!',
    icon: '🤝'
  },

  // --- FIRST CONDITIONAL ITEMS (6 to 10) ---
  {
    id: 6,
    conditionalType: 'first',
    activityType: 'match-halves',
    title: 'First Conditional: Match Halves',
    instruction: 'Match the condition (cause) with the correct future consequence (will + verb).',
    sentencePrompt: 'Cause: "If teachers use technology in class,"',
    audioText: 'If teachers use technology in class, students will be more engaged.',
    causePart: 'If teachers use technology in class,',
    consequenceOptions: [
      'students will be more engaged.',
      'students don\'t have pencils.',
      'the whiteboard was broken yesterday.'
    ],
    correctConsequence: 'students will be more engaged.',
    explanationTip: 'First conditional matches a present condition with a future outcome: "will be more engaged"!',
    icon: '💻'
  },
  {
    id: 7,
    conditionalType: 'first',
    activityType: 'word-order',
    title: 'First Conditional: Word Order Challenge',
    instruction: 'Click the scrambled words in order to construct the complete conditional sentence.',
    sentencePrompt: 'Reorder the words to form a correct First Conditional sentence:',
    audioText: 'If you review before the exam, you will pass easily.',
    scrambledWords: ['If', 'you', 'review', 'before', 'the', 'exam,', 'you', 'will', 'pass', 'easily.'],
    correctOrderedSentence: 'If you review before the exam, you will pass easily.',
    explanationTip: 'Formula: If + Subject + Verb (Present Simple) + comma + Subject + will + Verb (base form).',
    icon: '📝'
  },
  {
    id: 8,
    conditionalType: 'first',
    activityType: 'match-halves',
    title: 'First Conditional: Match Vocabulary Consequence',
    instruction: 'Select the logical future result for using vocabulary study materials.',
    sentencePrompt: 'Cause: "If you use flashcards every day,"',
    audioText: 'If you use flashcards every day, you will remember new words.',
    causePart: 'If you use flashcards every day,',
    consequenceOptions: [
      'you will remember new words.',
      'you forgot the alphabet.',
      'the teacher closes the window.'
    ],
    correctConsequence: 'you will remember new words.',
    explanationTip: 'Great! "If you use..." pairs with the future benefit: "...you will remember new words"!',
    icon: '🗂️'
  },
  {
    id: 9,
    conditionalType: 'first',
    activityType: 'word-order',
    title: 'First Conditional: Word Order Challenge',
    instruction: 'Assemble the sentence about digital learning materials in correct grammatical order.',
    sentencePrompt: 'Order the words to build this inspiring educator prediction:',
    audioText: 'If we design interactive games, students will learn faster.',
    scrambledWords: ['If', 'we', 'design', 'interactive', 'games,', 'students', 'will', 'learn', 'faster.'],
    correctOrderedSentence: 'If we design interactive games, students will learn faster.',
    explanationTip: 'Structure: If we design (Present Simple) + students will learn (Future with will) + faster.',
    icon: '🎮'
  },
  {
    id: 10,
    conditionalType: 'first',
    activityType: 'match-halves',
    title: 'First Conditional: Future Teacher Inspiration',
    instruction: 'Complete this motivational sentence for future EFL teachers!',
    sentencePrompt: 'Cause: "If you teach with passion and creativity,"',
    audioText: 'If you teach with passion and creativity, you will inspire many students.',
    causePart: 'If you teach with passion and creativity,',
    consequenceOptions: [
      'you will inspire many students.',
      'you don\'t prepare worksheets.',
      'books are made of paper.'
    ],
    correctConsequence: 'you will inspire many students.',
    explanationTip: 'Spot on! Real future prediction: If you teach with passion, you WILL inspire many students!',
    icon: '🌟'
  }
];
