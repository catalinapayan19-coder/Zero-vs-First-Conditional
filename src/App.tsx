import React, { useState, useEffect } from 'react';
import { ScreenType, UserProgress } from './types';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { ZeroGrammarScreen } from './components/screens/ZeroGrammarScreen';
import { FirstGrammarScreen } from './components/screens/FirstGrammarScreen';
import { ChallengeScreen } from './components/screens/ChallengeScreen';
import { FinalScoreScreen } from './components/screens/FinalScoreScreen';
import { stopSpeech } from './utils/audio';

const STORAGE_KEY = 'conditionals_future_teachers_progress_v1';

const INITIAL_PROGRESS: UserProgress = {
  score: 0,
  stars: 0,
  completedChallenges: {},
  currentChallengeIndex: 0,
  level: 'Level 1: Zero Explorer',
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_PROGRESS;
  });

  // Save progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Stop speech when changing screens
  const handleNavigate = (screen: ScreenType) => {
    stopSpeech();
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
  };

  const handleResetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Top Bar Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        score={progress.score}
        stars={progress.stars}
        level={progress.level}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'zero-grammar' && (
          <ZeroGrammarScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'first-grammar' && (
          <FirstGrammarScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'challenge' && (
          <ChallengeScreen
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'final-score' && (
          <FinalScoreScreen
            progress={progress}
            onResetProgress={handleResetProgress}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-sm py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">
              Classroom Conditionals Challenge
            </span>
            <span>·</span>
            <span>Future Teachers Edition</span>
            <span>·</span>
            <span>Level A2</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Pedagogical LO2 Standard</span>
            <span>·</span>
            <button
              onClick={handleResetProgress}
              className="text-purple-600 hover:text-purple-800 underline cursor-pointer"
            >
              Reset All Progress
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
