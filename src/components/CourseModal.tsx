import React, { useState } from 'react';
import { Course } from '../types';
import { 
  X, 
  Star, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Play, 
  Award, 
  Users,
  ChevronDown
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  if (!course) return null;

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      alert(`Success! You are now enrolled in "${course.title}". Redirecting to Student Dashboard...`);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
              {course.category}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
              {course.level} Level
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{course.title}</h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{course.rating} / 5.0</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-slate-400" />
              <span>{course.learnersCount} Students Enrolled</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{course.duration} Total Duration</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor Section */}
        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-12 h-12 rounded-full object-cover border border-slate-300"
          />
          <div>
            <h4 className="text-xs font-bold text-slate-900">Lead Instructor: {course.instructor.name}</h4>
            <p className="text-[11px] text-slate-500">{course.instructor.role}</p>
          </div>
        </div>

        {/* Modules Syllabus List */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">
            <span>Course Syllabus ({course.modules.length} Modules)</span>
            <span className="text-xs text-indigo-600 font-semibold">100% Practical</span>
          </h3>

          <div className="space-y-2">
            {course.modules.map((mod, idx) => {
              const isOpen = openModuleId === mod.id;
              return (
                <div key={mod.id} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenModuleId(isOpen ? null : mod.id)}
                    className="w-full p-3.5 flex items-center justify-between text-left text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-black">
                        {idx + 1}
                      </span>
                      {mod.title}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 font-normal">
                      <span>{mod.lessonsCount} lessons • {mod.duration}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-3 bg-white text-xs text-slate-600 space-y-2 border-t border-slate-200">
                      <p>✓ Hands-on video walkthroughs & code sandbox exercises</p>
                      <p>✓ Downloadable GitHub starter code & solution repos</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">Access Type</span>
            <span className="text-xs font-bold text-slate-800">24/7 Lifetime Access</span>
          </div>

          <button
            onClick={handleEnroll}
            disabled={enrolled}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{enrolled ? 'Enrolling...' : 'Enroll in Course Now'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
