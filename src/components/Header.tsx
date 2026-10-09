import React from 'react';
import { ScreenType } from '../types';
import { Star, Award, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  score: number;
  stars: number;
  level: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  score,
  stars,
  level,
}) => {
  const navItems: { id: ScreenType; label: string; icon: React.ReactNode }[] = [
    { id: 'welcome', label: 'Start', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'zero-grammar', label: 'Zero Conditional', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'first-grammar', label: 'First Conditional', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'challenge', label: 'Challenge Zone', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'final-score', label: 'My Score', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onNavigate('welcome')}
          className="text-left cursor-pointer group flex items-center gap-2.5 whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-base font-black shadow-sm group-hover:scale-105 transition-transform">
            🦉
          </span>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">
              Classroom Conditionals
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 ml-1.5">
              Future Teachers
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-purple-100 text-purple-900 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Gamification Stats (Score, Stars, Level) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Level indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-cyan-50 to-purple-50 border border-purple-200/80 rounded-lg text-[11px] font-bold text-purple-900">
            <span className="text-cyan-600">🏅</span>
            <span className="truncate max-w-[130px]">{level}</span>
          </div>

          {/* Star Counter */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg text-xs font-bold text-amber-900">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="font-mono tabular-nums">{stars}</span>
            <span className="text-[10px] text-amber-600">/30</span>
          </div>

          {/* Score Counter */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-purple-50 border border-purple-200 rounded-lg text-xs font-extrabold text-purple-900 shadow-xs">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span className="font-mono tabular-nums">{score}</span>
            <span className="text-[10px] text-purple-600 font-normal">pts</span>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center justify-around px-2 py-1.5 border-t border-slate-100 bg-slate-50/90 text-xs overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-semibold cursor-pointer ${
              currentScreen === item.id
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
