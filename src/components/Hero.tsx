import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Play, 
  Trophy, 
  Bot, 
  TrendingUp, 
  Zap,
  Star,
  Users
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onStartLearning: () => void;
  onOpenAITutor: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onStartLearning,
  onOpenAITutor
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white">
      {/* Background Subtle Gradient Blobs & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold shadow-2xs animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
              <span>🚀 Learn. Build. Grow.</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Build Skills That Move Your <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">Career Forward</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Skill99 is a modern EdTech ecosystem designed for aspiring engineers, students, and professionals. Gain industry-proven skills through structured curricula, hands-on portfolio projects, and AI-powered mentorship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                id="hero-explore-courses-button"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                id="hero-start-learning-button"
              >
                <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                <span>Start Learning</span>
              </button>
            </div>

            {/* Small Trust Indicator */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Designed for students, developers & future professionals</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Visual SaaS Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Main SaaS Card Container */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-indigo-950/10 space-y-5">
              
              {/* Dashboard Mockup Top Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    S99
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Skill99 Learning Ecosystem</h3>
                    <p className="text-[11px] text-slate-500">Live Student Portal • React & Full-Stack Track</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Session
                  </span>
                </div>
              </div>

              {/* Active Course Card Preview */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl p-4 text-white shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded">
                    Current Module
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9 / 5.0</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold">React 19 & TypeScript Masterclass</h4>
                  <p className="text-xs text-indigo-200/80">Lesson 14: Server Components & Async Data Fetching</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-indigo-200">
                    <span>Course Completion</span>
                    <span className="font-bold text-white">84%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-900/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 w-[84%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Grid Widgets: Skill Mastery & Streak */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Skill Progress Widget */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Frontend Skills
                    </span>
                    <span className="text-indigo-600 font-extrabold">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-[92%] rounded-full" />
                  </div>
                  <p className="text-[10px] text-slate-500">Advanced React, TypeScript, Tailwind</p>
                </div>

                {/* AI Tutor Assistant Quick Widget */}
                <button
                  onClick={onOpenAITutor}
                  className="bg-indigo-50/70 hover:bg-indigo-100/80 border border-indigo-200/60 rounded-xl p-3 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-950">
                    <span className="flex items-center gap-1">
                      <Bot className="w-3.5 h-3.5 text-purple-600" />
                      AI Mentor
                    </span>
                    <span className="text-[10px] font-semibold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">
                      Ask AI
                    </span>
                  </div>
                  <p className="text-[10px] text-indigo-900/80 mt-1 line-clamp-1 group-hover:underline">
                    "Explain React useEffect hooks..."
                  </p>
                </button>

              </div>

              {/* Career Progress Roadmap Mini Indicator */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs">Career Readiness</span>
                    <span className="text-[10px] text-slate-500">Portfolio & Interview Prep Phase</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  Level 4/7
                </span>
              </div>

            </div>

            {/* FLOATING ANIMATED BADGES AROUND THE DASHBOARD */}
            
            {/* Badge 1: 95% Course Progress */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white border border-slate-200/90 rounded-xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">95% Course Progress</p>
                <p className="text-[10px] text-slate-500">3 Lessons Remaining</p>
              </div>
            </div>

            {/* Badge 2: 🔥 7 Day Streak */}
            <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white border border-slate-200/90 rounded-xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Flame className="w-4.5 h-4.5 fill-amber-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">🔥 7 Day Streak</p>
                <p className="text-[10px] text-slate-500">+150 XP Earned Today</p>
              </div>
            </div>

            {/* Badge 3: Certificate Earned */}
            <div className="absolute -top-5 -right-3 sm:-top-6 sm:-right-4 bg-white border border-slate-200/90 rounded-xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:4.5s]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Trophy className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Certificate Earned</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Verified Credential</p>
              </div>
            </div>

            {/* Badge 4: New Skill Unlocked */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-white border border-slate-200/90 rounded-xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:5.5s]">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">New Skill Unlocked</p>
                <p className="text-[10px] text-slate-500">TypeScript Generics</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
