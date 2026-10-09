import React, { useState } from 'react';
import { ChallengeItem, ScreenType, UserProgress, HootEmotion } from '../../types';
import { CHALLENGE_ITEMS } from '../../data/conditionalsData';
import { ProfessorHoot } from '../ProfessorHoot';
import { AudioButton } from '../AudioButton';
import { playSoundEffect } from '../../utils/audio';
import {
  Star,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChallengeScreenProps {
  progress: UserProgress;
  onUpdateProgress: (newProgress: UserProgress) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const ChallengeScreen: React.FC<ChallengeScreenProps> = ({
  progress,
  onUpdateProgress,
  onNavigate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(progress.currentChallengeIndex || 0);
  const currentItem: ChallengeItem = CHALLENGE_ITEMS[currentIndex];

  // Feedback states for current question
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTf, setSelectedTf] = useState<boolean | null>(null);
  const [selectedConsequence, setSelectedConsequence] = useState<string | null>(null);
  const [orderedWords, setOrderedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{
    status: 'idle' | 'correct' | 'incorrect';
    message: string;
  }>({ status: 'idle', message: '' });

  // Mascot reaction
  const [mascotReaction, setMascotReaction] = useState<{
    emotion: HootEmotion;
    message: string;
    subMessage: string;
  }>({
    emotion: 'teaching',
    message: "Read the prompt carefully! You've got this, future teacher!",
    subMessage: 'Use the Listen button to hear the sentence clearly.',
  });

  // Track attempts on the current item
  const existingCompletion = progress.completedChallenges[currentItem.id];
  const isAlreadyPassed = existingCompletion?.passed ?? false;
  const [currentAttempts, setCurrentAttempts] = useState<number>(existingCompletion?.attempts || 0);

  // Sync state when moving between items
  const handleSelectChallenge = (index: number) => {
    setCurrentIndex(index);
    setSelectedOption(null);
    setSelectedTf(null);
    setSelectedConsequence(null);
    setOrderedWords([]);
    setFeedback({ status: 'idle', message: '' });

    const completion = progress.completedChallenges[CHALLENGE_ITEMS[index].id];
    setCurrentAttempts(completion?.attempts || 0);

    const isFirstHalf = index < 5;
    setMascotReaction({
      emotion: 'teaching',
      message: isFirstHalf
        ? "Level 1: Zero Explorer! Look for present simple facts!"
        : "Level 2: Future Predictor! Look for 'will + verb' consequences!",
      subMessage: 'Click the Listen & Repeat button to train your ear!',
    });
  };

  // Trigger celebration confetti
  const triggerItemConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#8B5CF6', '#06B6D4', '#FBBF24', '#EC4899'],
      });
    } catch {
      // ignore
    }
  };

  // Evaluate Answer
  const handleCheckAnswer = (
    userAnswerType: 'fill-blank' | 'true-false' | 'match-halves' | 'word-order',
    value: string | boolean | string[]
  ) => {
    const newAttempts = currentAttempts + 1;
    setCurrentAttempts(newAttempts);

    let isCorrect = false;

    if (userAnswerType === 'fill-blank') {
      isCorrect = value === currentItem.correctAnswer;
    } else if (userAnswerType === 'true-false') {
      isCorrect = value === currentItem.isTrue;
    } else if (userAnswerType === 'match-halves') {
      isCorrect = value === currentItem.correctConsequence;
    } else if (userAnswerType === 'word-order') {
      const builtSentence = (value as string[]).join(' ');
      isCorrect = builtSentence.trim() === currentItem.correctOrderedSentence?.trim();
    }

    if (isCorrect) {
      playSoundEffect('success');
      playSoundEffect('star');
      triggerItemConfetti();

      // Calculate stars: 3 for 1st attempt, 2 for 2nd, 1 for 3+
      const earnedStars = newAttempts === 1 ? 3 : newAttempts === 2 ? 2 : 1;
      const pointsToAdd = isAlreadyPassed ? 0 : 10;
      const starsToAdd = isAlreadyPassed
        ? Math.max(0, earnedStars - (existingCompletion?.starsEarned || 0))
        : earnedStars;

      // Determine level
      const completedCount = Object.keys(progress.completedChallenges).length + (isAlreadyPassed ? 0 : 1);
      const newLevel = completedCount >= 5 ? 'Level 2: Future Predictor' : 'Level 1: Zero Explorer';

      const updatedProgress: UserProgress = {
        ...progress,
        score: progress.score + pointsToAdd,
        stars: progress.stars + starsToAdd,
        currentChallengeIndex: currentIndex,
        level: newLevel,
        completedChallenges: {
          ...progress.completedChallenges,
          [currentItem.id]: {
            passed: true,
            attempts: newAttempts,
            starsEarned: Math.max(existingCompletion?.starsEarned || 0, earnedStars),
          },
        },
      };

      onUpdateProgress(updatedProgress);

      setFeedback({
        status: 'correct',
        message: `Correct! +${pointsToAdd} points! ⭐ Earned ${earnedStars} star${earnedStars > 1 ? 's' : ''}!`,
      });

      setMascotReaction({
        emotion: 'celebrating',
        message: 'Wow! You earned a star! ⭐ Fantastic teaching instinct!',
        subMessage: currentItem.explanationTip,
      });
    } else {
      playSoundEffect('error');
      setFeedback({
        status: 'incorrect',
        message: 'Try again! Listen to the tip and retry.',
      });

      setMascotReaction({
        emotion: 'encouraging',
        message: "Don't worry, listen again and try! You are learning!",
        subMessage: currentItem.explanationTip,
      });
    }
  };

  // Word order helpers
  const handleAddWord = (word: string, indexInScrambled: number) => {
    playSoundEffect('click');
    setOrderedWords([...orderedWords, word]);
  };

  const handleRemoveWord = (wordIndex: number) => {
    playSoundEffect('click');
    const newWords = [...orderedWords];
    newWords.splice(wordIndex, 1);
    setOrderedWords(newWords);
  };

  const handleResetWords = () => {
    playSoundEffect('click');
    setOrderedWords([]);
    setFeedback({ status: 'idle', message: '' });
  };

  const isLevelTwo = currentIndex >= 5;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Progress & Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                isLevelTwo
                  ? 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                  : 'bg-purple-100 text-purple-800 border border-purple-200'
              }`}
            >
              {isLevelTwo ? 'Level 2: Future Predictor' : 'Level 1: Zero Explorer'}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Challenge {currentIndex + 1} of {CHALLENGE_ITEMS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>{progress.stars} / 30 Stars</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              <Award className="w-3.5 h-3.5 text-purple-600" />
              <span>{progress.score} / 100 Pts</span>
            </div>
          </div>
        </div>

        {/* 10-Item Nav Pill Rail */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 pt-1">
          {CHALLENGE_ITEMS.map((item, idx) => {
            const isCompleted = progress.completedChallenges[item.id]?.passed;
            const starsForThis = progress.completedChallenges[item.id]?.starsEarned || 0;
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectChallenge(idx)}
                className={`flex-1 min-w-[34px] sm:min-w-[42px] h-10 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-purple-600 text-white border-purple-700 shadow-md scale-105 font-bold'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-purple-50'
                }`}
                title={`Challenge ${idx + 1}: ${item.title}`}
              >
                <span className="text-xs font-bold">{idx + 1}</span>
                {isCompleted && (
                  <span className="text-[9px] -mt-1 text-amber-500">
                    {'★'.repeat(starsForThis)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mascot Reaction Hub */}
      <ProfessorHoot
        emotion={mascotReaction.emotion}
        message={mascotReaction.message}
        subMessage={mascotReaction.subMessage}
        size="sm"
      />

      {/* Main Challenge Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md space-y-6">
        {/* Challenge Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentItem.icon}</span>
              <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-0.5 rounded-md">
                {currentItem.conditionalType === 'zero' ? 'Zero Conditional' : 'First Conditional'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({currentItem.activityType.replace('-', ' ')})
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-1">
              {currentItem.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {currentItem.instruction}
            </p>
          </div>

          <AudioButton
            text={currentItem.audioText}
            label="Listen Sentence"
            className="shrink-0"
          />
        </div>

        {/* Activity Area depending on type */}
        <div className="py-2">
          {/* 1. FILL IN THE BLANK */}
          {currentItem.activityType === 'fill-blank' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 text-base sm:text-xl font-bold text-slate-900 text-center leading-relaxed">
                {currentItem.sentencePrompt.replace(
                  '[___]',
                  selectedOption ? `👉 [ ${selectedOption} ]` : '____'
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentItem.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      playSoundEffect('click');
                      setSelectedOption(opt);
                      handleCheckAnswer('fill-blank', opt);
                    }}
                    className={`p-4 rounded-2xl border-2 font-black text-base sm:text-lg transition-all cursor-pointer ${
                      selectedOption === opt
                        ? opt === currentItem.correctAnswer
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md'
                          : 'bg-rose-50 border-rose-400 text-rose-800'
                        : 'bg-white border-slate-200 hover:border-purple-400 hover:bg-purple-50/50 text-slate-800 shadow-xs'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. TRUE / FALSE FACT CHECK */}
          {currentItem.activityType === 'true-false' && (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 bg-purple-50/60 rounded-2xl border border-purple-200 text-base sm:text-xl font-bold text-slate-900 text-center leading-relaxed">
                {currentItem.sentencePrompt}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    playSoundEffect('click');
                    setSelectedTf(true);
                    handleCheckAnswer('true-false', true);
                  }}
                  className={`p-5 rounded-2xl border-2 font-black text-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    selectedTf === true
                      ? currentItem.isTrue === true
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md'
                        : 'bg-rose-50 border-rose-400 text-rose-800'
                      : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 text-slate-800 shadow-xs'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>TRUE (General Fact)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSoundEffect('click');
                    setSelectedTf(false);
                    handleCheckAnswer('true-false', false);
                  }}
                  className={`p-5 rounded-2xl border-2 font-black text-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    selectedTf === false
                      ? currentItem.isTrue === false
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md'
                        : 'bg-rose-50 border-rose-400 text-rose-800'
                      : 'bg-white border-slate-200 hover:border-rose-400 hover:bg-rose-50/40 text-slate-800 shadow-xs'
                  }`}
                >
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>FALSE (Not Zero Conditional)</span>
                </button>
              </div>
            </div>
          )}

          {/* 3. MATCH SENTENCE HALVES */}
          {currentItem.activityType === 'match-halves' && (
            <div className="space-y-6">
              {/* Cause Box */}
              <div className="p-4 sm:p-5 bg-cyan-50 rounded-2xl border border-cyan-200">
                <span className="text-[11px] font-black uppercase tracking-wider text-cyan-800 block mb-1">
                  1. Condition (Cause)
                </span>
                <p className="text-base sm:text-xl font-bold text-slate-900">
                  "{currentItem.causePart}"
                </p>
              </div>

              {/* Consequence Choices */}
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  2. Select the Logical Consequence (Future Result):
                </span>
                <div className="space-y-2.5">
                  {currentItem.consequenceOptions?.map((consequence) => (
                    <button
                      key={consequence}
                      type="button"
                      onClick={() => {
                        playSoundEffect('click');
                        setSelectedConsequence(consequence);
                        handleCheckAnswer('match-halves', consequence);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between gap-3 ${
                        selectedConsequence === consequence
                          ? consequence === currentItem.correctConsequence
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md'
                            : 'bg-rose-50 border-rose-400 text-rose-800'
                          : 'bg-white border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 text-slate-800 shadow-xs'
                      }`}
                    >
                      <span>... {consequence}</span>
                      {selectedConsequence === consequence && (
                        <span>{consequence === currentItem.correctConsequence ? '✅' : '❌'}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. WORD ORDER CHALLENGE */}
          {currentItem.activityType === 'word-order' && (
            <div className="space-y-6">
              {/* Construction Canvas */}
              <div className="p-5 sm:p-6 bg-slate-50 min-h-[90px] rounded-2xl border-2 border-dashed border-purple-300 flex flex-wrap items-center gap-2">
                {orderedWords.length === 0 ? (
                  <span className="text-slate-400 text-xs sm:text-sm font-medium italic">
                    Tap the word cards below in the correct order to build the sentence...
                  </span>
                ) : (
                  orderedWords.map((word, wIdx) => (
                    <button
                      key={`${word}-${wIdx}`}
                      onClick={() => handleRemoveWord(wIdx)}
                      className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
                      title="Tap to remove"
                    >
                      <span>{word}</span>
                      <span className="text-[10px] opacity-75">✕</span>
                    </button>
                  ))
                )}
              </div>

              {/* Scrambled Word Cards Bank */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Word Bank (Tap to add)
                  </span>
                  <button
                    type="button"
                    onClick={handleResetWords}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Order</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentItem.scrambledWords?.map((word, sIdx) => {
                    // Check how many times this word is already picked vs available
                    const countInOrdered = orderedWords.filter((w) => w === word).length;
                    const countInOriginal = currentItem.scrambledWords!.filter((w) => w === word).length;
                    const isAllUsed = countInOrdered >= countInOriginal;

                    return (
                      <button
                        key={`${word}-${sIdx}`}
                        disabled={isAllUsed}
                        onClick={() => handleAddWord(word, sIdx)}
                        className={`px-3.5 py-2 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${
                          isAllUsed
                            ? 'opacity-30 bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-white border-slate-300 hover:border-purple-500 hover:bg-purple-50 text-slate-800 shadow-xs'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Check Button for Word Order */}
              {orderedWords.length === currentItem.scrambledWords?.length && (
                <button
                  type="button"
                  onClick={() => handleCheckAnswer('word-order', orderedWords)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Check Sentence Order</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Immediate Feedback Banner */}
        {feedback.status !== 'idle' && (
          <div
            className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
              feedback.status === 'correct'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            {feedback.status === 'correct' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <HelpCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <p className="font-extrabold text-sm sm:text-base">{feedback.message}</p>
              <p className="text-xs sm:text-sm font-medium opacity-90">
                {currentItem.explanationTip}
              </p>
            </div>
          </div>
        )}

        {/* Challenge Footer Navigation */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => handleSelectChallenge(currentIndex - 1)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
              currentIndex === 0
                ? 'opacity-40 text-slate-400 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentIndex < CHALLENGE_ITEMS.length - 1 ? (
            <button
              type="button"
              onClick={() => handleSelectChallenge(currentIndex + 1)}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md shadow-purple-600/20 transition-all cursor-pointer"
            >
              <span>Next Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('final-score')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-md shadow-amber-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>See Final Score & Certificate</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
