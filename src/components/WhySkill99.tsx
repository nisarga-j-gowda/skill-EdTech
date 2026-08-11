import React from 'react';
import { 
  Code2, 
  Layers, 
  LineChart, 
  Award, 
  Clock, 
  Briefcase,
  ArrowUpRight
} from 'lucide-react';

export const WhySkill99: React.FC = () => {
  const features = [
    {
      id: 'practical-skills',
      title: 'Learn Practical Skills',
      description: 'Master modern engineering frameworks and industry-standard tools focused on solving real-world production challenges.',
      icon: Code2,
      accent: 'from-blue-500 to-indigo-600',
      badge: 'Job Ready',
    },
    {
      id: 'real-projects',
      title: 'Build Real Projects',
      description: 'Construct full-stack applications, SaaS platforms, and AI agents designed to stand out on your GitHub & recruiter portfolio.',
      icon: Layers,
      accent: 'from-purple-500 to-indigo-600',
      badge: 'Portfolio First',
    },
    {
      id: 'track-progress',
      title: 'Track Your Progress',
      description: 'Monitor daily learning streaks, module completions, skill mastery scores, and weekly study metrics in one unified dashboard.',
      icon: LineChart,
      accent: 'from-emerald-500 to-teal-600',
      badge: 'Live Analytics',
    },
    {
      id: 'earn-certificates',
      title: 'Earn Verified Certificates',
      description: 'Receive shareable credentials complete with verification IDs, skill badges, and direct LinkedIn profile integration.',
      icon: Award,
      accent: 'from-amber-500 to-orange-600',
      badge: 'Recognized',
    },
    {
      id: 'own-pace',
      title: 'Learn at Your Own Pace',
      description: 'Enjoy 24/7 lifetime access to bite-sized 15-minute lessons, code repositories, and interactive AI tutor assistance.',
      icon: Clock,
      accent: 'from-sky-500 to-blue-600',
      badge: 'Flexible',
    },
    {
      id: 'prepare-career',
      title: 'Prepare for Your Career',
      description: 'Access ATS-approved resume templates, LeetCode DSA patterns, system design whiteboarding guides, and interview prep.',
      icon: Briefcase,
      accent: 'from-violet-500 to-purple-600',
      badge: 'Career Path',
    },
  ];

  return (
    <section id="why-skill99" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>Why Choose Skill99</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Become <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Career Ready</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Skill99 bridges the gap between academic theory and high-paying engineering careers through practical learning workflows.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top card gradient highlight line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="space-y-4">
                  {/* Top row: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.accent} flex items-center justify-center text-white shadow-md shadow-indigo-500/15 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                      <span>{feature.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom subtle glow */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Feature Details &rarr;</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
