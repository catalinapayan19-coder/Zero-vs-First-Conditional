import React from 'react';
import { ScreenType } from '../../types';
import { ProfessorHoot } from '../ProfessorHoot';
import { AudioButton } from '../AudioButton';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2, Lightbulb, Compass, Award } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Mascot Hero Welcome Banner */}
      <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-purple-900/15 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Future Teachers Edition • Level A2</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white text-balance">
              Classroom Conditionals Challenge
            </h1>

            <p className="text-purple-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              Welcome, future EFL educators! Master <strong className="text-cyan-300">Zero Conditional</strong> (classroom rules & habits) and <strong className="text-amber-300">First Conditional</strong> (future learning predictions) with interactive audio, instant feedback, and gamified practice.
            </p>

            {/* Quick Audio Guidance */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <AudioButton
                text="Welcome to Classroom Conditionals Challenge, Future Teachers Edition! Listen to the explanations, practice every day, and inspire your future students!"
                label="Listen to Professor Hoot's Welcome"
                className="bg-white/20 text-white hover:bg-white/30 border-white/30"
              />
              <span className="text-xs text-purple-200 font-medium">
                🎧 Slow, clear pronunciation for A2 autonomy
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('zero-grammar')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Start with Zero Conditional</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('challenge')}
                className="px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-cyan-300" />
                <span>Jump to 10 Challenges</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs">
              <ProfessorHoot
                emotion="teaching"
                message="Hi! I'm Professor Hoot! Let's master conditionals together!"
                subMessage="Click on any audio button to practice listening and pronunciation!"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objective (LO2) Container */}
      <div className="bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 border border-purple-200/80 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-lg">
            🎯
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold tracking-wider uppercase text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md">
                Learning Objective (LO2)
              </span>
              <span className="text-xs text-slate-500 font-medium">Curriculum Standard</span>
            </div>
            <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
              "By the end of the course, the student will be able to create digital content and interactive learning materials, using A2-level grammatical structures through AI-integrated design in digital learning environments."
            </p>
            <p className="text-xs text-slate-600">
              💡 As a future teacher, understanding conditionals allows you to set classroom expectations, explain study cause-and-effects, and design motivating digital exercises for your future pupils!
            </p>
          </div>
        </div>
      </div>

      {/* Autonomous Study Guide: 4 Easy Steps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Compass className="w-6 h-6 text-purple-600" />
            <span>How to Learn Autonomously (A2 Guide)</span>
          </h2>
          <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">
            Self-Paced Learning
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Read the Rules</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore the simple visual formulas for Zero (truths/habits) and First (future predictions).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Listen & Repeat</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tap the speaker button to hear authentic A2 English pronunciation with slow, clear pacing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-pink-300 shadow-sm hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Play 10 Challenges</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Solve fill-in-the-blank, true/false fact checks, matching halves, and word unscrambles.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Earn 30 Stars</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reach 100 points, collect 30 stars, and receive your celebratory EFL Teacher Certificate!
            </p>
          </div>
        </div>
      </div>

      {/* Two Conditional Worlds Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Zero Conditional Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-purple-200 hover:border-purple-400 shadow-md transition-all group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                Module 01
              </span>
              <span className="text-xl">📚</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-purple-700 transition-colors">
                Zero Conditional
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                For general truths, study habits, and facts that are always true.
              </p>
            </div>

            <div className="p-3.5 bg-purple-50/80 rounded-xl border border-purple-100 font-mono text-xs sm:text-sm font-bold text-purple-900">
              <span className="text-purple-600">If</span> + Present Simple, Present Simple
            </div>

            <p className="text-xs text-slate-500 italic">
              "If students practice every day, they improve their English."
            </p>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => onNavigate('zero-grammar')}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Zero Conditional</span>
            </button>
          </div>
        </div>

        {/* First Conditional Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-cyan-200 hover:border-cyan-400 shadow-md transition-all group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">
                Module 02
              </span>
              <span className="text-xl">💻</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                First Conditional
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                For real and possible future situations and their consequences.
              </p>
            </div>

            <div className="p-3.5 bg-cyan-50/80 rounded-xl border border-cyan-100 font-mono text-xs sm:text-sm font-bold text-cyan-900">
              <span className="text-cyan-700">If</span> + Present Simple, <span className="text-cyan-700">Will</span> + Verb
            </div>

            <p className="text-xs text-slate-500 italic">
              "If teachers use technology in class, students will be more engaged."
            </p>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => onNavigate('first-grammar')}
              className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore First Conditional</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
