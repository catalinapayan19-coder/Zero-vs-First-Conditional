import React, { useEffect } from 'react';
import { ScreenType, UserProgress } from '../../types';
import { ProfessorHoot } from '../ProfessorHoot';
import { AudioButton } from '../AudioButton';
import { playSoundEffect } from '../../utils/audio';
import {
  Award,
  Star,
  RotateCcw,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Share2,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalScoreScreenProps {
  progress: UserProgress;
  onResetProgress: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const FinalScoreScreen: React.FC<FinalScoreScreenProps> = ({
  progress,
  onResetProgress,
  onNavigate,
}) => {
  const percentage = Math.round((progress.score / 100) * 100);

  // Trigger grand celebration fanfare & confetti burst on mount
  useEffect(() => {
    playSoundEffect('fanfare');

    try {
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#8B5CF6', '#06B6D4', '#FBBF24', '#EC4899', '#10B981'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch {
      // fallback
    }
  }, []);

  const motivationalSpeech =
    'Amazing work, future teacher! If you keep teaching with love and creativity, you will inspire many students! Keep practicing conditionals every day and you will become an excellent EFL teacher! Ready for the next challenge?';

  const getRankBadge = () => {
    if (progress.score >= 90) {
      return {
        title: 'Master EFL Educator',
        subtitle: 'Outstanding Mastery of Zero & First Conditionals',
        color: 'from-amber-400 to-amber-500',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      };
    }
    if (progress.score >= 70) {
      return {
        title: 'Skilled Future Teacher',
        subtitle: 'Great Command of Classroom Grammar Rules',
        color: 'from-purple-500 to-indigo-600',
        badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
      };
    }
    return {
      title: 'Dedicated Language Learner',
      subtitle: 'Building Strong Foundations in English',
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    };
  };

  const rank = getRankBadge();

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Spectacular Certificate Hero Card */}
      <div className="bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border-4 border-amber-300/40">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Trophy Asset */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              <img
                src="/src/assets/images/teacher_graduation_trophy_1791577218468.jpg"
                alt="Golden Teacher Graduation Trophy"
                referrerPolicy="no-referrer"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover ring-4 ring-amber-300/60 shadow-2xl shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-3.5 py-1.5 rounded-full text-xs shadow-lg flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{percentage}% Success</span>
              </div>
            </div>
          </div>

          {/* Certificate Content */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Official Completion Certificate</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Congratulations, Future Educator!
            </h1>

            <div className="space-y-1">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${rank.badgeColor}`}>
                {rank.title}
              </span>
              <p className="text-purple-200 text-sm font-medium">
                {rank.subtitle}
              </p>
            </div>

            {/* Score & Star Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-purple-200 block">Total Score</span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
                  {progress.score}
                </span>
                <span className="text-[11px] text-purple-300 block">/ 100 points</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-purple-200 block">Stars Earned</span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300 flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
                  {progress.stars}
                </span>
                <span className="text-[11px] text-purple-300 block">/ 30 stars</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-purple-200 block">Level Achieved</span>
                <span className="text-sm sm:text-base font-extrabold text-cyan-300 block truncate mt-1">
                  Future Predictor
                </span>
                <span className="text-[11px] text-purple-300 block">All 10 cleared</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professor Hoot Mascot Speech & Motivational Message Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-md space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦉</span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                Professor Hoot's Inspiring Message
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Words of encouragement for your teaching journey
              </span>
            </div>
          </div>

          <AudioButton
            text={motivationalSpeech}
            label="Listen to Final Message"
          />
        </div>

        {/* The Exact Motivational Text Requested */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl border border-purple-200 text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">
          <p className="italic">
            "{motivationalSpeech}"
          </p>
        </div>

        <ProfessorHoot
          emotion="celebrating"
          message="You are ready to inspire a whole generation of English learners!"
          subMessage="Remember: If you practice every day, your English will shine brightly in the classroom."
          size="sm"
        />
      </div>

      {/* Learning Objective LO2 Completion Check */}
      <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-extrabold text-emerald-900">
            Learning Objective (LO2) Fulfilled:
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
            You have successfully explored and demonstrated A2 grammatical structures (Zero and First Conditionals) through interactive digital learning materials and game design!
          </p>
        </div>
      </div>

      {/* Action Buttons: Play Again & Keep Learning */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={() => {
            playSoundEffect('click');
            onResetProgress();
            onNavigate('challenge');
          }}
          className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border-2 border-slate-300 shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <RotateCcw className="w-4 h-4 text-purple-600" />
          <span>Play Again</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playSoundEffect('click');
            onNavigate('zero-grammar');
          }}
          className="px-6 py-3.5 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-extrabold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <BookOpen className="w-4 h-4 text-purple-700" />
          <span>Review Grammar Lab</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playSoundEffect('star');
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
              });
            } catch {
              // ignore
            }
          }}
          className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          <span>Keep Learning! 🚀</span>
        </button>
      </div>
    </div>
  );
};
