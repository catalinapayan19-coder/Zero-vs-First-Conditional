import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { speakText, stopSpeech } from '../utils/audio';

interface AudioButtonProps {
  text: string;
  label?: string;
  compact?: boolean;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  label = 'Listen & Repeat',
  compact = false,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const success = speakText(
        text,
        () => setIsPlaying(true),
        () => setIsPlaying(false)
      );
      if (!success) {
        setIsPlaying(false);
      }
    }
  };

  if (compact) {
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? 'Stop audio' : `Listen: ${text}`}
        className={`p-2 rounded-xl transition-all duration-200 cursor-pointer ${
          isPlaying
            ? 'bg-purple-600 text-white shadow-md shadow-purple-300 scale-105 animate-pulse'
            : 'bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-900 border border-purple-200/60'
        } ${className}`}
        title="Listen with native English pronunciation"
      >
        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-medium text-xs tracking-wide transition-all duration-200 cursor-pointer ${
        isPlaying
          ? 'bg-purple-600 text-white shadow-md shadow-purple-300 scale-[1.02] ring-2 ring-purple-300'
          : 'bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-900 border border-purple-200 active:scale-95'
      } ${className}`}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-4 h-4 animate-spin text-purple-200" />
          <span className="font-semibold">Playing Audio...</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-purple-600" />
          <span>{label}</span>
          <Sparkles className="w-3 h-3 text-amber-500 opacity-80" />
        </>
      )}
    </button>
  );
};
