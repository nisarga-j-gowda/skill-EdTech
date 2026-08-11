import React, { useState } from 'react';
import { 
  BarChart3, 
  Flame, 
  Trophy, 
  BookOpen, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  Sparkles
} from 'lucide-react';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'analytics' | 'certificates'>('overview');

  const weeklyHours = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.8 },
    { day: 'Wed', hours: 1.5 },
    { day: 'Thu', hours: 4.2 },
    { day: 'Fri', hours: 3.0 },
    { day: 'Sat', hours: 5.0 },
    { day: 'Sun', hours: 2.0 },
  ];

  const maxHours = 6.0;

  return (
    <section id="dashboard" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive SaaS Portal Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Learning Journey, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">All in One Place</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Track study velocity, view skill radar charts, manage capstone builds, and showcase verified certificates.
          </p>
        </div>

        {/* Dashboard Main Interactive Frame */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-indigo-950/10 overflow-hidden">
          
          {/* Top Bar Navigation inside Dashboard */}
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                S99
              </div>
              <span className="font-bold text-sm text-white">Student Dashboard</span>
            </div>

            {/* Dashboard Sub Tabs */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              {(['overview', 'courses', 'analytics', 'certificates'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Student Profile Quick Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">Rohan M. (Full-Stack Track)</span>
            </div>
          </div>

          {/* Dashboard Body Content Based on Active Tab */}
          <div className="p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* 4 Stat Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-1">
                    <span className="text-xs text-indigo-600 font-semibold flex items-center gap-1">
                      <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                      Study Streak
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">7 Days 🔥</div>
                    <p className="text-[10px] text-slate-500">Personal best active streak</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1">
                    <span className="text-xs text-purple-600 font-semibold flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      Hours Studied
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">22.2 hrs</div>
                    <p className="text-[10px] text-slate-500">This week (+18% vs last week)</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Modules Passed
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">18 / 24</div>
                    <p className="text-[10px] text-slate-500">75% overall track progress</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
                    <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      Certificates
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">2 Verified</div>
                    <p className="text-[10px] text-slate-500">Shareable on LinkedIn</p>
                  </div>
                </div>

                {/* Main Middle Row: Weekly Activity Chart + Skill Mastery */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Weekly Hours Bar Chart Visualizer */}
                  <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                        Weekly Learning Velocity
                      </h3>
                      <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        22.2 hrs total
                      </span>
                    </div>

                    <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-200">
                      {weeklyHours.map((item) => {
                        const heightPercent = (item.hours / maxHours) * 100;
                        return (
                          <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group">
                            <span className="text-[10px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.hours}h
                            </span>
                            <div className="w-full bg-slate-200 rounded-t-lg h-32 relative overflow-hidden flex items-end">
                              <div 
                                className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-500 group-hover:from-indigo-500 group-hover:to-purple-400"
                                style={{ height: `${heightPercent}%` }}
                              />
                            </div>
                            <span className="text-[11px] font-semibold text-slate-600">{item.day}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-slate-500 text-center">
                      ⚡ Peak focus achieved on Saturday (5.0 hours of hands-on coding)
                    </p>
                  </div>

                  {/* Skill Mastery Ratings */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      Skill Mastery Breakdown
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>React 19 & Frontend Architecture</span>
                          <span className="font-bold text-indigo-600">88%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 rounded-full w-[88%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Node.js, Express & PostgreSQL</span>
                          <span className="font-bold text-purple-600">76%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600 rounded-full w-[76%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Gemini AI API & LLM Prompting</span>
                          <span className="font-bold text-emerald-600">82%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full w-[82%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>DSA & LeetCode Problem Solving</span>
                          <span className="font-bold text-amber-600">65%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full w-[65%]" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-center">
                      <span className="text-[11px] text-indigo-600 font-bold hover:underline cursor-pointer">
                        View Full Skill Matrix Report &rarr;
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">Active Enrolled Courses</h3>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                      <Play className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Full Stack Web Development Masterclass</h4>
                      <p className="text-xs text-slate-500">Module 3: Express REST APIs & Auth Middleware • 84% Completed</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm cursor-pointer whitespace-nowrap">
                    Resume Lesson
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="p-8 text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-200">
                <BarChart3 className="w-8 h-8 text-indigo-600 mx-auto" />
                <h3 className="text-sm font-bold text-slate-900">Advanced Analytics Engine</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Detailed code commit frequency, error resolution time, and quiz accuracy metrics updated after every lesson submission.
                </p>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">React 19 & TypeScript Masterclass</h4>
                    <p className="text-xs text-indigo-200">Issued Aug 2026 • Credential ID #SK99-8842</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Applied AI with Gemini API</h4>
                    <p className="text-xs text-purple-200">Issued Jul 2026 • Credential ID #SK99-7109</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
