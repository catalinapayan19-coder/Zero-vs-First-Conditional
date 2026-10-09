import React from 'react';
import { Sparkles, MessageSquare, Volume2, Award, Heart } from 'lucide-react';
import { HootEmotion } from '../types';
import { speakText } from '../utils/audio';

interface ProfessorHootProps {
  emotion: HootEmotion;
  message: string;
  subMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  showFloatingBadge?: boolean;
}

export const ProfessorHoot: React.FC<ProfessorHootProps> = ({
  emotion,
  message,
  subMessage,
  size = 'md',
  showFloatingBadge = true,
}) => {
  const handleSpeakMascot = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakText(`Professor Hoot says: ${message} ${subMessage || ''}`);
  };

  const getEmotionBadge = () => {
    switch (emotion) {
      case 'celebrating':
        return {
          icon: <Award className="w-3.5 h-3.5 text-amber-500" />,
          label: 'Super Proud!',
          bg: 'bg-amber-100 text-amber-900 border-amber-300',
        };
      case 'happy':
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-emerald-600" />,
          label: 'Awesome job!',
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        };
      case 'encouraging':
        return {
          icon: <Heart className="w-3.5 h-3.5 text-pink-500" />,
          label: 'Keep Going!',
          bg: 'bg-pink-100 text-pink-900 border-pink-300',
        };
      case 'thinking':
        return {
          icon: <MessageSquare className="w-3.5 h-3.5 text-cyan-600" />,
          label: 'Grammar Tip',
          bg: 'bg-cyan-100 text-cyan-900 border-cyan-300',
        };
      case 'teaching':
      default:
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
          label: 'Professor Hoot',
          bg: 'bg-purple-100 text-purple-900 border-purple-300',
        };
    }
  };

  const badge = getEmotionBadge();

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-32 h-32 md:w-36 md:h-36',
  };

  return (
    <div className="flex items-start sm:items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-purple-100 shadow-lg shadow-purple-500/5 transition-all">
      {/* Mascot Avatar with Floating Animation */}
      <div className="relative shrink-0 animate-float">
        <div className="relative">
          <img
            src="/src/assets/images/hero_professor_hoot_1791577189748.jpg"
            alt="Professor Hoot, your friendly English grammar guide"
            referrerPolicy="no-referrer"
            className={`${sizeClasses[size]} rounded-2xl object-cover ring-4 ring-purple-300/80 shadow-md shadow-purple-900/10`}
          />
          {showFloatingBadge && (
            <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-1 rounded-full shadow-md text-[10px] font-bold">
              🦉
            </span>
          )}
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.bg}`}>
            {badge.icon}
            {badge.label}
          </span>
          <button
            type="button"
            onClick={handleSpeakMascot}
            className="text-xs text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 hover:underline cursor-pointer font-medium"
            title="Hear Professor Hoot speak"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Hear me</span>
          </button>
        </div>

        <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
          "{message}"
        </p>

        {subMessage && (
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
            {subMessage}
          </p>
        )}
      </div>
    </div>
  );
};
