import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { ZERO_CONDITIONAL_EXAMPLES } from '../../data/conditionalsData';
import { ProfessorHoot } from '../ProfessorHoot';
import { AudioButton } from '../AudioButton';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';

interface ZeroGrammarScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const ZeroGrammarScreen: React.FC<ZeroGrammarScreenProps> = ({ onNavigate }) => {
  const [activeClauseOrder, setActiveClauseOrder] = useState<'standard' | 'inverted'>('standard');
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

  const selectedExample = ZERO_CONDITIONAL_EXAMPLES[selectedExampleIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header Breadcrumb & Mascot */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
            <span>Module 01</span>
            <span>•</span>
            <span>Grammar Lab</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="text-purple-600">📚</span>
            <span>Zero Conditional</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
            Learn how to express timeless facts, classroom rules, and permanent study habits.
          </p>
        </div>

        {/* Action button to First conditional */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('first-grammar')}
            className="px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Next: First Conditional</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Professor Hoot Coach Callout */}
      <ProfessorHoot
        emotion="teaching"
        message="Zero Conditional is for 100% facts! Both sides stay in Present Simple!"
        subMessage="Whenever something is always true in the classroom or science, use Zero Conditional."
        size="sm"
      />

      {/* Clear A2 Definition & Visual Formula Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-md space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Clear Definition for A2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-2">
              "We use Zero Conditional for general truths, facts, habits, and scientific facts that are always true."
            </h2>
          </div>
          <AudioButton
            text="We use Zero Conditional for general truths, facts, habits, and scientific facts that are always true."
            label="Listen to Rule"
          />
        </div>

        {/* Visual Formula Box */}
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-5 sm:p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Visual Grammatical Formula
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveClauseOrder((prev) => (prev === 'standard' ? 'inverted' : 'standard'))
              }
              className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-purple-200 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Swap Clause Order</span>
            </button>
          </div>

          {activeClauseOrder === 'standard' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-center">
              <div className="md:col-span-3 bg-purple-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Condition</span>
                <span className="text-lg font-black font-mono">If</span>
                <span className="text-xs block mt-1">+ Present Simple</span>
              </div>
              <div className="md:col-span-1 text-2xl font-black text-purple-400">,</div>
              <div className="md:col-span-4 bg-indigo-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Result (Always True)</span>
                <span className="text-base font-black">Present Simple</span>
                <span className="text-xs block mt-1">(habit or natural fact)</span>
              </div>
              <div className="md:col-span-4 bg-white text-slate-800 rounded-xl p-4 border border-purple-200 text-left text-xs space-y-1">
                <div className="font-bold text-purple-800">Comma Rule:</div>
                <p className="text-slate-600">When the sentence starts with <strong>If</strong>, always place a <strong>comma (,)</strong> between the two clauses.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-center">
              <div className="md:col-span-4 bg-indigo-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Result</span>
                <span className="text-base font-black">Present Simple</span>
                <span className="text-xs block mt-1">(main clause)</span>
              </div>
              <div className="md:col-span-1 text-base font-black text-purple-500 font-mono">+</div>
              <div className="md:col-span-3 bg-purple-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Condition</span>
                <span className="text-lg font-black font-mono">if</span>
                <span className="text-xs block mt-1">+ Present Simple</span>
              </div>
              <div className="md:col-span-4 bg-white text-slate-800 rounded-xl p-4 border border-purple-200 text-left text-xs space-y-1">
                <div className="font-bold text-purple-800">No Comma Rule:</div>
                <p className="text-slate-600">When <strong>if</strong> is in the middle of the sentence, do <strong>NOT</strong> use a comma!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3 Mandatory Educational Examples Section with Audio */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>3 Core Educational Examples</span>
              <span className="text-xs font-extrabold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                EFL Context
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Listen, repeat, and examine how present simple verbs operate in pedagogical environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ZERO_CONDITIONAL_EXAMPLES.map((example, idx) => {
            const isSelected = selectedExampleIndex === idx;
            return (
              <div
                key={example.id}
                onClick={() => setSelectedExampleIndex(idx)}
                className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-purple-600 shadow-xl shadow-purple-500/10 ring-2 ring-purple-400/30 -translate-y-1'
                    : 'border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
                      {example.icon}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Example 0{idx + 1}</span>
                  </div>

                  {/* Sentence Highlight */}
                  <div className="space-y-2">
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      "{example.fullSentence}"
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {example.explanation}
                    </p>
                  </div>

                  {/* Teacher Context Note */}
                  <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-[11px] text-purple-900 font-medium">
                    {example.teacherContext}
                  </div>
                </div>

                {/* Audio Button */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <AudioButton
                    text={example.fullSentence}
                    label="Listen & Repeat"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Pedagogical Context Spotlight */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Future Teacher's Pedagogical Tool</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white">
          Why Future EFL Teachers Need Zero Conditional
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
            <div className="font-bold text-amber-300">1. Stating Classroom Norms</div>
            <p className="text-purple-100">
              "If students raise their hands, the teacher gives them permission to speak."
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
            <div className="font-bold text-cyan-300">2. Describing Study Habits</div>
            <p className="text-purple-100">
              "If learners review vocabulary every night, retention becomes automatic."
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
            <div className="font-bold text-pink-300">3. Explaining Natural Learning</div>
            <p className="text-purple-100">
              "If teachers use visual realia, pupils understand new words without translation."
            </p>
          </div>
        </div>

        {/* Navigation bottom bar */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
          <button
            type="button"
            onClick={() => onNavigate('welcome')}
            className="text-xs text-purple-200 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Start</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('first-grammar')}
            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Proceed to First Conditional</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
