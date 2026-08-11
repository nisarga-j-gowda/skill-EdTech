import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/roadmap';
import { RoadmapStep } from '../types';
import { 
  Terminal, 
  Code2, 
  Layers, 
  Zap, 
  FolderGit2, 
  CheckCircle2, 
  Briefcase, 
  Clock, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const RoadmapSection: React.FC<{ onExploreTrack: (step: RoadmapStep) => void }> = ({ onExploreTrack }) => {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep>(ROADMAP_STEPS[1]);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Code2': return Code2;
      case 'Layers': return Layers;
      case 'Zap': return Zap;
      case 'FolderGit2': return FolderGit2;
      case 'CheckCircle2': return CheckCircle2;
      case 'Briefcase': return Briefcase;
      default: return Code2;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            <span>Structured Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Path From <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Beginner to Professional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any step along the Skill99 roadmap to view key skills, estimated completion time, and recommended learning modules.
          </p>
        </div>

        {/* ROADMAP TRACK NAVIGATION (Horizontal Desktop / Scrollable Mobile) */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[850px] relative px-4">
            
            {/* Connecting Progress Line */}
            <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-10 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((selectedStep.stepNumber - 1) / (ROADMAP_STEPS.length - 1)) * 92}%` }}
            />

            {ROADMAP_STEPS.map((step) => {
              const Icon = getStepIcon(step.iconName);
              const isSelected = selectedStep.stepNumber === step.stepNumber;
              const isPassed = step.stepNumber <= selectedStep.stepNumber;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(step)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-200`}
                >
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                      isSelected 
                        ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-110 border-2 border-white' 
                        : isPassed
                          ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/50 hover:bg-indigo-900'
                          : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`text-[11px] font-bold mt-2.5 transition-colors whitespace-nowrap ${
                    isSelected ? 'text-white font-black' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {step.stepNumber}. {step.title}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* SELECTED ROADMAP STEP DETAIL DISPLAY CARD */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold text-xs">
                  0{selectedStep.stepNumber}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedStep.title}</h3>
                  <p className="text-xs text-indigo-400 font-medium">{selectedStep.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedStep.description}
              </p>

              {/* Key Skills Tags */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Key Competencies You Unlock:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStep.keySkills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-950/80 text-indigo-200 border border-indigo-800/60"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta & CTA Box */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-700/60 rounded-xl p-6 space-y-4 text-center">
              <div className="grid grid-cols-2 gap-4 text-left border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    Est. Duration
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">{selectedStep.estimatedTime}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    Courses
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">{selectedStep.coursesCount} Modules</span>
                </div>
              </div>

              <button
                onClick={() => onExploreTrack(selectedStep)}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Recommended Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
