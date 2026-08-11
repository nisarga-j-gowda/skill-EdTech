import React, { useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/courses';
import { PROJECTS_DATA } from '../data/projects';
import { Course, Project } from '../types';
import { Search, X, BookOpen, Layers, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedCourses = COURSES_DATA.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl space-y-4 border border-slate-200">
        
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
          <input
            type="text"
            placeholder="Search courses, skills, technologies (e.g., React, Python, SQL)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-100 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 absolute right-3 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto space-y-4 pr-1">
          
          {/* Courses Results */}
          {matchedCourses.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Courses ({matchedCourses.length})
              </span>
              <div className="space-y-1">
                {matchedCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onSelectCourse(course);
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl hover:bg-indigo-50/80 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">{course.title}</h4>
                        <p className="text-[10px] text-slate-500">{course.category} • {course.duration}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {matchedProjects.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Projects ({matchedProjects.length})
              </span>
              <div className="space-y-1">
                {matchedProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onNavigate('projects');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl hover:bg-purple-50/80 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-purple-600">{proj.title}</h4>
                        <p className="text-[10px] text-slate-500">{proj.category} • {proj.difficulty}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedCourses.length === 0 && matchedProjects.length === 0 && (
            <p className="text-xs text-slate-500 text-center py-8">
              No matching courses or projects found for "{query}".
            </p>
          )}

        </div>

      </div>
    </div>
  );
};
