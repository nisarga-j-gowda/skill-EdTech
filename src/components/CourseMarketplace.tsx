import React, { useState } from 'react';
import { COURSES_DATA } from '../data/courses';
import { Course, CourseCategory } from '../types';
import { 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Filter,
  Sparkles
} from 'lucide-react';

interface CourseMarketplaceProps {
  onSelectCourse: (course: Course) => void;
}

export const CourseMarketplace: React.FC<CourseMarketplaceProps> = ({ onSelectCourse }) => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CourseCategory[] = ['All', 'Development', 'Data & AI', 'Mobile', 'UI/UX', 'Career'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Course Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learn Skills That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Matter</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Explore curated, job-aligned tech tracks taught by senior engineers and industry practitioners.
            </p>
          </div>

          {/* Quick Search inside Section */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search courses or stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => onSelectCourse(course)}
              >
                {/* Course Top Graphic Header */}
                <div className="relative p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {course.category}
                    </span>
                    {course.popularTag && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-amber-300" />
                        {course.popularTag}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 mb-2 relative z-10">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                  </div>

                  {/* Level & Rating */}
                  <div className="flex items-center justify-between text-xs text-slate-300 relative z-10 pt-2 border-t border-white/10">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold text-[11px]">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 text-[11px] font-normal">({course.learnersCount} enrolled)</span>
                    </div>
                  </div>
                </div>

                {/* Course Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {course.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {course.techStack.length > 4 && (
                      <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        +{course.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Instructor & Meta */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-6 h-6 rounded-full object-cover border border-slate-200"
                      />
                      <span className="font-semibold text-slate-800 text-[11px]">{course.instructor.name}</span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* View Course Action */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCourse(course);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white border border-indigo-200/80 transition-all duration-200 cursor-pointer group-hover:shadow-md"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <p className="text-sm font-semibold text-slate-600">No courses match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
