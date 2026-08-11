import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Code2, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

export const CareerSection: React.FC<{ onStartCareer: () => void }> = ({ onStartCareer }) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'portfolio' | 'interviews'>('resume');

  const pipeline = [
    { step: '1', name: 'Learn', desc: 'Master in-demand engineering stacks' },
    { step: '2', name: 'Build', desc: 'Construct production portfolio capstones' },
    { step: '3', name: 'Showcase', desc: 'Deploy live demos with clean documentation' },
    { step: '4', name: 'Prepare', desc: 'Practice DSA, system design & mock interviews' },
    { step: '5', name: 'Get Hired', desc: 'Land offer letters at top technology firms' },
  ];

  return (
    <section id="career" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Job Placement Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Turn Your Skills Into <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Skill99 equips you with recruiter-approved resumes, portfolio reviews, and technical interview preparation.
          </p>
        </div>

        {/* Career Pipeline Steps Visual */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">
            The Skill99 Career Pipeline
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
            {pipeline.map((p, index) => (
              <div key={p.step} className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-2 relative">
                <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                  {p.step}
                </div>
                <h4 className="text-sm font-bold text-white">{p.name}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Career Preparation Modules */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
          
          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-4 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'resume'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>ATS Resume Building</span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'portfolio'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Code2 className="w-4 h-4 text-indigo-500" />
              <span>Portfolio Optimization</span>
            </button>

            <button
              onClick={() => setActiveTab('interviews')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'interviews'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <UserCheck className="w-4 h-4 text-purple-500" />
              <span>Interview Prep & Mock Scenarios</span>
            </button>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'resume' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Recruiter-Approved Resume Framework</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Learn how to structure engineering bullet points using the Google XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]".
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Single-page clean ATS formatting templates</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Action-verb keyword optimization for tech screeners</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct Github & live demo link placements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 font-mono text-[11px] text-slate-700">
                <div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex justify-between">
                  <span>RESUME SAMPLE PREVIEW</span>
                  <span className="text-emerald-600 text-[10px] uppercase font-sans">100/100 ATS Score</span>
                </div>
                <p className="text-indigo-600 font-bold">Rohan Mehta • Full-Stack Engineer</p>
                <p className="text-slate-500">github.com/rohan • rohan@dev.com</p>
                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <p className="font-bold text-slate-800">Key Achievements:</p>
                  <p className="text-slate-600">• Engineered React 19 / Express SaaS reducing API latency by 42%.</p>
                  <p className="text-slate-600">• Deployed PostgreSQL relational schema scaling to 10,000 queries/min.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Portfolio Checklist for Recruiter Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-indigo-600">1. Live Demos</span>
                  <p className="text-xs text-slate-600">Every project must have a 1-click working preview link with sample login credentials.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-indigo-600">2. README Architecture</span>
                  <p className="text-xs text-slate-600">Include clear system diagrams, setup steps, environment variables, and tech rationale.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-indigo-600">3. Performance Metrics</span>
                  <p className="text-xs text-slate-600">Highlight Lighthouse audit scores, bundle size reductions, and load speeds.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interviews' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Technical & Behavioral Interview Mastery</h3>
              <p className="text-xs text-slate-600">
                Practice 150+ high-frequency LeetCode DSA questions grouped by pattern (Two Pointers, Sliding Window, Trees, Dynamic Programming).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">DSA Cheatsheets</span>
                <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold">System Design Whiteboarding</span>
                <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">Behavioral STAR Stories</span>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 border-t border-slate-200 flex justify-center">
            <button
              onClick={onStartCareer}
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 shadow-md flex items-center gap-2 cursor-pointer"
              id="career-start-journey-button"
            >
              <span>Start Your Career Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
