import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { FIRST_CONDITIONAL_EXAMPLES, COMPARISON_TABLE } from '../../data/conditionalsData';
import { ProfessorHoot } from '../ProfessorHoot';
import { AudioButton } from '../AudioButton';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, CheckCircle2, Layers, Zap, Info } from 'lucide-react';

interface FirstGrammarScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const FirstGrammarScreen: React.FC<FirstGrammarScreenProps> = ({ onNavigate }) => {
  const [activeClauseOrder, setActiveClauseOrder] = useState<'standard' | 'inverted'>('standard');
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

  const selectedExample = FIRST_CONDITIONAL_EXAMPLES[selectedExampleIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header Breadcrumb & Mascot */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
            <span>Module 02</span>
            <span>•</span>
            <span>Grammar Lab</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="text-cyan-600">🔮</span>
            <span>First Conditional</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
            Express real possibilities, future educational consequences, and motivating teacher predictions.
          </p>
        </div>

        {/* Action button to Challenges */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('challenge')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md shadow-cyan-600/20 transition-all cursor-pointer"
          >
            <span>Go to Challenges</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Professor Hoot Coach Callout */}
      <ProfessorHoot
        emotion="teaching"
        message="Look into the future! First Conditional uses: If + Present Simple, WILL + verb!"
        subMessage="Notice the difference: The condition is in the Present, but the consequence happens in the Future!"
        size="sm"
      />

      {/* Clear A2 Definition & Visual Formula Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cyan-200 shadow-md space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Clear Definition for A2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-2">
              "We use First Conditional for real and possible future situations and their consequences."
            </h2>
          </div>
          <AudioButton
            text="We use First Conditional for real and possible future situations and their consequences."
            label="Listen to Rule"
          />
        </div>

        {/* Visual Formula Box */}
        <div className="bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 rounded-2xl p-5 sm:p-6 border border-cyan-200">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Visual Grammatical Formula
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveClauseOrder((prev) => (prev === 'standard' ? 'inverted' : 'standard'))
              }
              className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-cyan-200 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Swap Clause Order</span>
            </button>
          </div>

          {activeClauseOrder === 'standard' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-center">
              <div className="md:col-span-3 bg-cyan-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Real Condition</span>
                <span className="text-lg font-black font-mono">If</span>
                <span className="text-xs block mt-1">+ Present Simple</span>
              </div>
              <div className="md:col-span-1 text-2xl font-black text-cyan-400">,</div>
              <div className="md:col-span-4 bg-indigo-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Future Consequence</span>
                <span className="text-base font-black">Will + Base Verb</span>
                <span className="text-xs block mt-1">(or won't for negative)</span>
              </div>
              <div className="md:col-span-4 bg-white text-slate-800 rounded-xl p-4 border border-cyan-200 text-left text-xs space-y-1">
                <div className="font-bold text-cyan-900">Watch the Verb:</div>
                <p className="text-slate-600">Never use "will" right after "if"! ❌ <span className="line-through text-red-500">If you will review</span>. ✅ <span className="font-bold text-emerald-700">If you review</span>.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-center">
              <div className="md:col-span-4 bg-indigo-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Future Consequence</span>
                <span className="text-base font-black">Will + Base Verb</span>
                <span className="text-xs block mt-1">(main clause)</span>
              </div>
              <div className="md:col-span-1 text-base font-black text-cyan-500 font-mono">+</div>
              <div className="md:col-span-3 bg-cyan-600 text-white rounded-xl p-4 font-bold shadow-sm">
                <span className="text-xs uppercase tracking-wider opacity-85 block mb-1">Real Condition</span>
                <span className="text-lg font-black font-mono">if</span>
                <span className="text-xs block mt-1">+ Present Simple</span>
              </div>
              <div className="md:col-span-4 bg-white text-slate-800 rounded-xl p-4 border border-cyan-200 text-left text-xs space-y-1">
                <div className="font-bold text-cyan-900">Inverted Example:</div>
                <p className="text-slate-600">"Students <strong>will be</strong> engaged <strong>if</strong> teachers <strong>use</strong> technology in class." (No comma!)</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3 Mandatory Educational Examples Section with Audio and Visual Media */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>3 Core Educational Examples</span>
            <span className="text-xs font-extrabold text-cyan-700 bg-cyan-100 px-2.5 py-0.5 rounded-full">
              Future Classroom Realities
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Listen to each model sentence and see how teachers motivate students with First Conditional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FIRST_CONDITIONAL_EXAMPLES.map((example, idx) => {
            const isSelected = selectedExampleIndex === idx;
            return (
              <div
                key={example.id}
                onClick={() => setSelectedExampleIndex(idx)}
                className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-600 shadow-xl shadow-cyan-500/10 ring-2 ring-cyan-400/30 -translate-y-1'
                    : 'border-slate-200 hover:border-cyan-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-xl font-bold">
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
                  <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-100 text-[11px] text-cyan-900 font-medium">
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

      {/* Visual Classroom Realia Media Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="space-y-3 mb-4">
            <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
              EdTech in Action
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Interactive Tech in Language Classrooms
            </h3>
            <p className="text-xs text-slate-600">
              "If teachers use technology in class, students will be more engaged."
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
              src="/src/assets/images/classroom_interactive_tech_1791577200685.jpg"
              alt="Engaged students participating with an interactive digital board"
              referrerPolicy="no-referrer"
              className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="space-y-3 mb-4">
            <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md">
              Study Flashcards
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Spaced Repetition & Vocabulary Retention
            </h3>
            <p className="text-xs text-slate-600">
              "If you use flashcards, you will remember new words."
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
              src="/src/assets/images/study_flashcards_success_1791577209980.jpg"
              alt="Future teacher preparing vocabulary flashcards"
              referrerPolicy="no-referrer"
              className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Visual Comparison Matrix: Zero vs First Conditional */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 shadow-lg space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 w-fit mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Comparative Master Matrix</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Zero vs First Conditional: The Key Differences
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Notice how the result clause tense changes depending on timeless facts vs future predictions.
            </p>
          </div>
          <AudioButton
            text="In Zero Conditional, both verbs are in the Present Simple for facts. In First Conditional, we use If plus Present Simple, and Will plus verb for future possibilities."
            label="Listen to Key Comparison"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-700 uppercase tracking-wider text-[11px]">Feature</th>
                <th className="py-3 px-4 font-bold text-purple-700 bg-purple-50/60 uppercase tracking-wider text-[11px] rounded-t-xl">
                  Zero Conditional (Facts & Habits)
                </th>
                <th className="py-3 px-4 font-bold text-cyan-700 bg-cyan-50/60 uppercase tracking-wider text-[11px] rounded-t-xl">
                  First Conditional (Future Possibilities)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-800 whitespace-nowrap bg-slate-50/40">
                    {row.aspect}
                  </td>
                  <td className="py-3 px-4 text-purple-950 bg-purple-50/30 font-medium">
                    {row.zero}
                  </td>
                  <td className="py-3 px-4 text-cyan-950 bg-cyan-50/30 font-medium">
                    {row.first}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl border border-purple-100 flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>Golden Memory Rule for Future Teachers:</strong> If it's a permanent truth that always happens every time, keep both verbs in the Present Simple (Zero). If it's a specific future plan or consequence that will occur under a condition, add <strong>will</strong> to the consequence (First)!
          </p>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavigate('zero-grammar')}
          className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Review Zero Conditional</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('challenge')}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-600/25 transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Ready! Start the 10 Challenges</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
