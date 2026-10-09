export type ScreenType = 'welcome' | 'zero-grammar' | 'first-grammar' | 'challenge' | 'final-score';

export type HootEmotion = 'happy' | 'thinking' | 'encouraging' | 'celebrating' | 'teaching';

export interface GrammarExample {
  id: string;
  condition: string;
  result: string;
  fullSentence: string;
  explanation: string;
  icon: string;
  teacherContext: string;
}

export type ChallengeType = 'fill-blank' | 'true-false' | 'match-halves' | 'word-order';

export interface ChallengeItem {
  id: number;
  conditionalType: 'zero' | 'first';
  activityType: ChallengeType;
  title: string;
  instruction: string;
  sentencePrompt: string;
  audioText: string;
  explanationTip: string;
  // Fill-in-the-blank options
  options?: string[];
  correctAnswer?: string;
  // True / False options
  isTrue?: boolean;
  tfExplanation?: string;
  // Match halves
  causePart?: string;
  consequenceOptions?: string[];
  correctConsequence?: string;
  // Word order
  scrambledWords?: string[];
  correctOrderedSentence?: string;
  icon: string;
}

export interface UserProgress {
  score: number;
  stars: number;
  completedChallenges: Record<number, {
    passed: boolean;
    attempts: number;
    starsEarned: number;
  }>;
  currentChallengeIndex: number;
  level: string;
}
