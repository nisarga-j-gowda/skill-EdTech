import React from 'react';
import { Users, BookOpen, Award, Smile } from 'lucide-react';

export const Stats: React.FC = () => {
  const statsList = [
    {
      id: 'learners',
      value: '10K+',
      label: 'Active Learners',
      description: 'Students & Developers',
      icon: Users,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      id: 'courses',
      value: '50+',
      label: 'Practical Courses',
      description: 'Career-Focused Curricula',
      icon: BookOpen,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      id: 'skills',
      value: '25+',
      label: 'In-Demand Skills',
      description: 'Modern Tech Stacks',
      icon: Award,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      id: 'satisfaction',
      value: '95%',
      label: 'Learning Satisfaction',
      description: 'Verified Reviews',
      icon: Smile,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-200/80 shadow-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {statsList.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/60 transition-all duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs ${stat.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
