import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { 
  Code2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  X,
  ExternalLink
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flowSteps = [
    { num: '01', title: 'Learn Concepts', desc: 'Master core frameworks & APIs through step-by-step guidance.' },
    { num: '02', title: 'Build Projects', desc: 'Construct production-grade capstones from clean architecture specifications.' },
    { num: '03', title: 'Showcase Portfolio', desc: 'Deploy live demos and push clean, recruiter-approved code to GitHub.' },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Project-Based Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Don't Just Learn. <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Build.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Build production-ready applications that demonstrate real engineering capability to employers.
          </p>
        </div>

        {/* Build -> Practice -> Showcase Flow Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {flowSteps.map((step) => (
            <div 
              key={step.num}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-indigo-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                
                {/* Category & Difficulty */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    ~{project.estimatedHours} hrs
                  </span>
                </div>

                {/* Project Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* View Project Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="mt-6 w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Project Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* PROJECT SPECIFICATION MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                {selectedProject.category} • {selectedProject.difficulty} Level
              </span>
              <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Key Project Architecture Highlights:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 block">Skills Gained:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skillsGained.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    ⚡ {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Starting project workspace for ${selectedProject.title}`);
                  setSelectedProject(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Start Building Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
