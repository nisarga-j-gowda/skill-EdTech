import React from 'react';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

interface FinalCTAProps {
  onStartLearning: () => void;
  onExploreCourses: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartLearning, onExploreCourses }) => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/40">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ready to Level Up?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Your Next Skill Could Change Your <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Career.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Start learning, build real projects, and take the next step toward your software engineering goals today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-200 shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              id="final-cta-start-learning-button"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Start Learning</span>
            </button>

            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              id="final-cta-explore-courses-button"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
